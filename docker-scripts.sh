#!/bin/bash

# Script para construir y ejecutar el portfolio en Docker

echo "🚀 Iniciando construcción del portfolio..."

# Limpiar contenedores y imágenes anteriores (opcional)
echo "🧹 Limpiando contenedores anteriores..."
docker-compose down
docker system prune -f

# Construir la imagen
echo "🔨 Construyendo imagen de Docker..."
docker-compose --profile prod build

# Verificar que la construcción fue exitosa
if [ $? -eq 0 ]; then
    echo "✅ Construcción exitosa!"
    
    # Iniciar el servicio
    echo "🚀 Iniciando el servicio..."
    docker-compose --profile prod up -d
    
    # Esperar un momento para que el servicio se inicie
    echo "⏳ Esperando que el servicio se inicie..."
    sleep 5
    
    # Verificar que el servicio está funcionando
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo "✅ ¡Servicio funcionando correctamente!"
        echo "🌐 Tu portfolio está disponible en: http://localhost:3000"
    else
        echo "❌ Error: El servicio no responde en http://localhost:3000"
        echo "📋 Logs del contenedor:"
        docker-compose --profile prod logs
    fi
else
    echo "❌ Error en la construcción"
    exit 1
fi 