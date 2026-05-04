# ============================================================
# ETAPA 1: Build de Angular (CSR, sin SSR)
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

COPY . .
RUN npm run build

# ============================================================
# ETAPA 2: Nginx sirviendo los archivos estaticos + API Gateway
# ============================================================
FROM nginx:alpine AS production

COPY --from=builder /app/dist/Publico/browser /usr/share/nginx/html

# nginx.conf de produccion (API gateway apunta a 10.43.100.131:8084)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
