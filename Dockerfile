# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias y construir
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye el proyecto Astro
RUN npm run build

# Etapa 2: Servir archivos estáticos
FROM node:18-alpine AS runner

WORKDIR /app

# Instala 'serve' para servir el contenido estático
RUN npm install -g serve

# Copia solo los archivos generados en la build
COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "0.0.0.0:3000"]