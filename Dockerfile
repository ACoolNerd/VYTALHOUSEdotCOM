# Stage 1: Build the Vite production bundle
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package descriptors & install dependencies
COPY package*.json ./
RUN npm ci

# Copy application source files & build
COPY . .
RUN npm run lint:entity
RUN npm run build

# Stage 2: Serve static files with Nginx
FROM nginx:alpine

# Configure Nginx for Cloud Run PORT dynamic listening and SPA routing
RUN rm /etc/nginx/conf.d/default.conf

COPY <<'EOF' /etc/nginx/templates/default.conf.template
server {
    listen ${PORT};
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
        root /usr/share/nginx/html;
    }
}
EOF

ENV PORT=8080

# Copy production dist output from Stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
