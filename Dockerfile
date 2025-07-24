# Stage 1: Build application
FROM node:lts-alpine AS builder  # Fixed casing here

# Set working directory
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci --silent

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production server
FROM nginx:stable-alpine

# Remove default nginx configuration
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (HTTP)
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]