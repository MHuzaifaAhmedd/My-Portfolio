# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build-time environment variables
ARG NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
ENV NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=$NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

# Build static export
RUN npm run build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


