# Stage 1: Build Angular App
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/fnpblog-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
