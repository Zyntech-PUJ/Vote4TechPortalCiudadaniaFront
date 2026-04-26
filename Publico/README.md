# Vote4Tech Portal Ciudadania - Frontend

Guia rapida para correr el sistema completo (frontend + backend).

## Estructura esperada

- Backend: `Vote4TechPortalCiudadaniaBack`
- Frontend: `Vote4TechPortalCiudadaniaFront/Publico`

## Requisitos

### Backend

- Java 21
- Maven 3.9+
- Acceso a PostgreSQL

### Frontend

- Node.js 20+
- npm 10+
- Docker y Docker Compose (solo para despliegue con Nginx + Cloudflare)

## 1. Correr en local (desarrollo)

### 1.1 Backend

Ir a la carpeta del backend y configurar `src/main/resources/application.properties` con tu base de datos.

Ejemplo minimo:

```properties
spring.application.name=PortalRegistraduriaBack
server.port=8080
spring.datasource.url=jdbc:postgresql://<HOST_DB>:5432/<NOMBRE_DB>
spring.datasource.username=<USUARIO_DB>
spring.datasource.password=<CLAVE_DB>
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
config.cors.allowed-origins=http://localhost:4200
logging.level.org.springframework=INFO
```

Levantar backend:

```bash
cd Vote4TechPortalCiudadaniaBack
mvn spring-boot:run
```

API disponible en:

```text
http://localhost:8080
```

### 1.2 Frontend

```bash
cd Vote4TechPortalCiudadaniaFront/Publico
npm ci
npm start
```

Frontend disponible en:

```text
http://localhost:4200
```

## 2. Build de produccion (frontend)

```bash
cd Vote4TechPortalCiudadaniaFront/Publico
npm run build
```

Salida en:

```text
dist/Publico/browser
```

## 3. Despliegue en VM (modo productivo usado por el proyecto)

### 3.1 Backend (VM backend)

```bash
cd ~/Vote4TechPortalCiudadaniaBack
mvn spring-boot:run 2>&1 | tee /tmp/log.txt
```

### 3.2 Frontend con Docker + Nginx + Cloudflare Quick Tunnel (VM frontend)

```bash
cd ~/Vote4TechPortalCiudadaniaFront/Publico
docker compose -f docker/docker-compose.prod.yml up -d --build
```

Ver contenedores:

```bash
docker ps
```

Obtener URL publica de Cloudflare:

```bash
docker logs $(docker ps -q --filter name=cloudflared) 2>&1 | grep trycloudflare
```

## 4. Verificaciones rapidas

Desde la VM frontend, validar que el proxy API responde JSON:

```bash
curl http://localhost/api/eleccion/elecciones
```

Si responde HTML de Angular, revisar `docker/nginx.conf` y la IP configurada en `proxy_pass`.

## 5. QA (cambio de IPs)

Para QA, ajustar:

- En backend: `spring.datasource.url` y `config.cors.allowed-origins`
- En frontend: `docker/nginx.conf` en la linea `proxy_pass` con la IP del backend QA

Luego reconstruir frontend:

```bash
docker compose -f docker/docker-compose.prod.yml up -d --build
```
