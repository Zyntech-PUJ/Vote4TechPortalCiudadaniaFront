# ============================================================
# ETAPA 1: Build de Angular (CSR, sin SSR)
# El context de Docker es la raíz del repo Vote4TechPortalCiudadaniaFront/
# El proyecto Angular vive en el subdirectorio Publico/
# ============================================================
FROM node:22-alpine AS builder

WORKDIR /app

# Instala dependencias primero (caching de layers)
COPY Publico/package.json Publico/package-lock.json ./
RUN npm ci --prefer-offline

# Copia el código fuente y compila en modo producción
COPY Publico/ .
RUN npm run build

# ============================================================
# ETAPA 2: Nginx sirviendo los archivos estáticos + API Gateway
# ============================================================
FROM nginx:alpine AS production

# Copia los archivos compilados de Angular
COPY --from=builder /app/dist/Publico/browser /usr/share/nginx/html

# Copia la configuración de Nginx (API gateway + SPA routing)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
