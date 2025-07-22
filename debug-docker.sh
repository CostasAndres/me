#!/bin/bash

echo "🔍 Diagnóstico de Docker - Portfolio"

echo "1. Verificando Docker..."
docker --version
docker-compose --version

echo "2. Verificando imágenes existentes..."
docker images | grep portfolio

echo "3. Verificando contenedores en ejecución..."
docker ps

echo "4. Verificando archivos del proyecto..."
ls -la

echo "5. Verificando package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json encontrado"
    echo "Scripts disponibles:"
    cat package.json | grep -A 10 '"scripts"'
else
    echo "❌ package.json no encontrado"
fi

echo "6. Verificando Dockerfile..."
if [ -f "Dockerfile" ]; then
    echo "✅ Dockerfile encontrado"
else
    echo "❌ Dockerfile no encontrado"
fi

echo "7. Verificando docker-compose.yml..."
if [ -f "docker-compose.yml" ]; then
    echo "✅ docker-compose.yml encontrado"
else
    echo "❌ docker-compose.yml no encontrado"
fi

echo "8. Verificando next.config.ts..."
if [ -f "next.config.ts" ]; then
    echo "✅ next.config.ts encontrado"
    echo "Configuración de output:"
    grep -A 5 -B 5 "output" next.config.ts
else
    echo "❌ next.config.ts no encontrado"
fi

echo "9. Verificando puerto 3000..."
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Puerto 3000 está en uso"
    lsof -Pi :3000 -sTCP:LISTEN
else
    echo "✅ Puerto 3000 disponible"
fi

echo "🔍 Diagnóstico completado" 