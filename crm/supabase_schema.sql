-- ============================================================================
-- VYTAL HOUSE — SUPABASE POSTGRES SCHEMA
-- Master Spec v1.0 Compliant
-- Schema for Member Portal, VYTAL Index domain scores, Protocols & Retest tracking.
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. MEMBERS TABLE
CREATE TABLE IF NOT EXISTS public.members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    auth_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(30),
    membership_tier VARCHAR(50) CHECK (membership_tier IN ('CHARTER', 'RESIDENT', 'PRINCIPAL', 'NON_MEMBER')),
    tier_status VARCHAR(20) DEFAULT 'ACTIVE',
    stripe_customer_id VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. VYTAL INDEX METRICS TABLE (6 Domains per Master Spec §6)
CREATE TABLE IF NOT EXISTS public.vytal_index_scores (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
    recorded_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    evaluated_by_physician VARCHAR(150) DEFAULT 'Dr. Abasi Bomani, MD',
    
    -- Composite Overall Score (0 - 100)
    composite_score NUMERIC(5, 2) NOT NULL CHECK (composite_score >= 0 AND composite_score <= 100),

    -- Weighted Domains (§6)
    metabolic_score NUMERIC(5,2) CHECK (metabolic_score >= 0 AND metabolic_score <= 100), -- 20%
    cardiovascular_score NUMERIC(5,2) CHECK (cardiovascular_score >= 0 AND cardiovascular_score <= 100), -- 20%
    inflammatory_score NUMERIC(5,2) CHECK (inflammatory_score >= 0 AND inflammatory_score <= 100), -- 15%
    recovery_score NUMERIC(5,2) CHECK (recovery_score >= 0 AND recovery_score <= 100), -- 20%
    hormonal_score NUMERIC(5,2) CHECK (hormonal_score >= 0 AND hormonal_score <= 100), -- 15%
    nutritional_score NUMERIC(5,2) CHECK (nutritional_score >= 0 AND nutritional_score <= 100), -- 10%

    -- Physician Notes & Protocol Recommendations
    physician_readout TEXT,
    is_physician_signed_off BOOLEAN DEFAULT FALSE,
    physician_signoff_date TIMESTAMP WITH TIME ZONE,

    CONSTRAINT valid_domain_weights CHECK (
        composite_score = ROUND(
            (COALESCE(metabolic_score, 0) * 0.20) +
            (COALESCE(cardiovascular_score, 0) * 0.20) +
            (COALESCE(inflammatory_score, 0) * 0.15) +
            (COALESCE(recovery_score, 0) * 0.20) +
            (COALESCE(hormonal_score, 0) * 0.15) +
            (COALESCE(nutritional_score, 0) * 0.10), 2
        )
    )
);

-- 3. PROTOCOL HISTORY TABLE
CREATE TABLE IF NOT EXISTS public.member_protocols (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID NOT NULL REFERENCES public.members(id) ON DELETE CASCADE,
    protocol_name VARCHAR(100) NOT NULL, -- e.g., 'THE VYTAL RESET', 'ORIGIN', 'CHARGE'
    assigned_date DATE DEFAULT CURRENT_DATE,
    duration_days INT DEFAULT 30,
    status VARCHAR(30) DEFAULT 'IN_PROGRESS', -- 'IN_PROGRESS', 'COMPLETED', 'RETEST_DUE'
    next_retest_date DATE,
    pdf_report_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. APPOINTMENTS & RESET FLAGGING
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    member_id UUID REFERENCES public.members(id) ON DELETE SET NULL,
    service_slug VARCHAR(100) NOT NULL,
    service_type VARCHAR(20) CHECK (service_type IN ('RESTORATION', 'MODALITY', 'MEDICAL')),
    entity_owner VARCHAR(20) CHECK (entity_owner IN ('MSO', 'PC')),
    appointment_time TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(30) DEFAULT 'SCHEDULED',
    price_charged NUMERIC(8,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- RLS POLICIES (HIPAA & Privacy Protection)
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vytal_index_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.member_protocols ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Allow members to view only their own VYTAL Index and protocols
CREATE POLICY member_self_read_policy ON public.members 
    FOR SELECT USING (auth.uid() = auth_user_id);

CREATE POLICY index_score_member_read ON public.vytal_index_scores 
    FOR SELECT USING (member_id IN (SELECT id FROM public.members WHERE auth_user_id = auth.uid()));

-- Disclaimer: Physician sign-off required for Hormonal & Inflammatory domains per Master Spec §6.
