FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia todos los archivos al contenedor
COPY . .

# Instala dependencias globales de Angular CLI
RUN npm install -g @angular/cli

# Instala las dependencias del proyecto
RUN npm install --legacy-peer-deps

# Asegura que los archivos tengan los permisos correctos
RUN chown -R node:node /app

# Cambia al usuario 'node' para evitar problemas de permisos
USER node

# Expone el puerto en el que Angular servirá la aplicación
EXPOSE 4200

# Inicia la aplicación Angular
CMD ["ng", "serve", "--host", "0.0.0.0"]
