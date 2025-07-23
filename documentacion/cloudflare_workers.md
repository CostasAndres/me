# 🚀 Despliegue en Cloudflare Pages - Portfolio Andrés Costas Moreno

<style>
/* Estilos para la documentación */
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* Encabezados */
h1 {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

h2 {
  color: #2c3e50;
  border-left: 4px solid #667eea;
  padding-left: 15px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

/* Contenedores de información */
.info-box {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.warning-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  border-left: 4px solid #f39c12;
}

.success-box {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  border-left: 4px solid #28a745;
}

.error-box {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  border-left: 4px solid #dc3545;
}

/* Bloques de código */
pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  line-height: 1.4;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

code {
  background: #f8f9fa;
  color: #e74c3c;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

/* Listas */
ul, ol {
  padding-left: 25px;
}

li {
  margin: 8px 0;
}

/* Enlaces */
a {
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #2980b9;
  text-decoration: underline;
}

/* Botones */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin: 5px;
  transition: transform 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  color: white;
  text-decoration: none;
}

/* Tablas */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
}

tr:hover {
  background: #f8f9fa;
}

/* Iconos */
.icon {
  font-size: 1.2em;
  margin-right: 8px;
}

/* Badges */
.badge {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
  margin: 2px;
}

.badge-success {
  background: #28a745;
  color: white;
}

.badge-warning {
  background: #ffc107;
  color: #212529;
}

.badge-info {
  background: #17a2b8;
  color: white;
}

/* Estructura de archivos */
.file-tree {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  font-family: 'Courier New', monospace;
  margin: 15px 0;
}

/* Responsive */
@media (max-width: 768px) {
  body {
    padding: 10px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  pre {
    font-size: 12px;
    padding: 15px;
  }
}
</style>

## 📋 Resumen
Este documento describe el proceso completo para desplegar una aplicación Next.js en Cloudflare Pages, incluyendo la configuración, optimización y despliegue.

<div class="info-box">
  <strong>🎯 Objetivo:</strong> Desplegar un portfolio personal en Cloudflare Pages con Next.js
</div>

## 🔧 Prerrequisitos
- <span class="badge badge-info">Node.js 18+</span> instalado
- <span class="badge badge-info">Cuenta en Cloudflare</span>
- <span class="badge badge-info">Código en GitHub</span> (recomendado)
- <span class="badge badge-info">Wrangler CLI</span> instalado

## 📦 Instalación de Wrangler CLI
```bash
npm install -g wrangler
```

## 🔐 Autenticación en Cloudflare
```bash
wrangler login
```

## ⚙️ Configuración del Proyecto

### 1. Configuración de Next.js para Cloudflare Pages

#### Archivo: `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de imágenes
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/u/**',
      },
    ],
    unoptimized: true, // Necesario para output: export
  },
  
  // Headers de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configuración de compresión
  compress: true,
  
  // Configuración para Cloudflare Pages
  output: 'export', // Exporta archivos estáticos
  trailingSlash: true,
};

export default nextConfig;
```

#### Archivo: `src/app/sitemap.ts`
```typescript
import { MetadataRoute } from 'next'

export const dynamic = 'force-static' // Necesario para output: export

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://andres-costas.com' // Cambia esto por tu dominio real
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // ... más URLs
  ]
}
```

#### Archivo: `src/app/robots.ts`
```typescript
import { MetadataRoute } from 'next'

export const dynamic = 'force-static' // Necesario para output: export

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://andres-costas.com' // Cambia esto por tu dominio real
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### 2. Configuración de Wrangler

#### Archivo: `wrangler.toml`
```toml
name = "portfolio"
compatibility_date = "2024-01-01"

[pages]
name = "portfolio"
compatibility_date = "2024-01-01"
pages_build_output_dir = "out"
```

## 🚀 Proceso de Despliegue

### 1. Construir la aplicación
```bash
npm run build
```

<div class="info-box">
  <strong>📝 Este comando:</strong>
  <ul>
    <li>Compila la aplicación Next.js</li>
    <li>Genera archivos estáticos en el directorio <code>out/</code></li>
    <li>Optimiza imágenes y assets</li>
    <li>Crea sitemap.xml y robots.txt</li>
  </ul>
</div>

### 2. Desplegar en Cloudflare Pages
```bash
wrangler pages deploy out --project-name=portfolio
```

<div class="info-box">
  <strong>📝 Este comando:</strong>
  <ul>
    <li>Sube los archivos estáticos a Cloudflare Pages</li>
    <li>Crea un nuevo proyecto si no existe</li>
    <li>Genera una URL temporal para el despliegue</li>
  </ul>
</div>

### 3. Resultado del despliegue
```bash
✨ Success! Uploaded 42 files (3.32 sec)
🌎 Deploying...
✨ Deployment complete! Take a peek over at https://5ec12b5c.portfolio-4j3.pages.dev
```

<div class="success-box">
  <strong>✅ ¡Despliegue exitoso!</strong> Tu aplicación está ahora disponible en la URL proporcionada.
</div>

## 🌐 Configuración de Dominio Personalizado

### Opción 1: Desde el Dashboard de Cloudflare <span class="badge badge-success">Recomendado</span>

1. **Ir al Dashboard de Cloudflare Pages**
   - <a href="https://dash.cloudflare.com/?to=/:account/pages" class="btn">Abrir Dashboard</a>
   - Seleccionar proyecto `portfolio`

2. **Configurar dominio personalizado**
   - Ir a "Custom domains"
   - Hacer clic en "Set up a custom domain"
   - Escribir: `andrescosta.dev`
   - Hacer clic en "Continue"

3. **Verificar configuración**
   - Cloudflare automáticamente configura los registros DNS
   - El dominio estará disponible en unos minutos

### Opción 2: Configurar DNS manualmente

1. **Ir a la sección DNS**
   - Dashboard de Cloudflare → Tu dominio → DNS

2. **Agregar registro CNAME**

| Campo | Valor |
|-------|-------|
| **Type** | CNAME |
| **Name** | `@` (o vacío para dominio raíz) |
| **Target** | `5ec12b5c.portfolio-4j3.pages.dev` |
| **Proxy status** | Proxied (nube naranja) |

## 🔄 Actualización del Sitio

### Para actualizar después de cambios:
```bash
# 1. Hacer cambios en el código
# 2. Construir la aplicación
npm run build

# 3. Desplegar
wrangler pages deploy out --project-name=portfolio
```

### Para actualización automática desde GitHub:
1. Conectar repositorio en Cloudflare Pages
2. Configurar build automático
3. Cada push a GitHub actualiza automáticamente el sitio

<div class="info-box">
  <strong>💡 Pro tip:</strong> La actualización automática desde GitHub es la forma más eficiente de mantener tu sitio actualizado.
</div>

## 🛠️ Comandos Útiles

### Ver información del proyecto
```bash
wrangler whoami
```

### Ver deployments
```bash
wrangler pages deployment list --project-name=portfolio
```

### Descargar configuración
```bash
wrangler pages download --project-name=portfolio
```

## ❗ Solución de Problemas

### Error: "Pages only supports files up to 25 MiB in size"
<div class="error-box">
  <strong>🔧 Solución:</strong> Usar <code>output: 'export'</code> en next.config.ts para generar archivos estáticos más pequeños.
</div>

### Error: "export const dynamic = 'force-static' not configured"
<div class="error-box">
  <strong>🔧 Solución:</strong> Agregar <code>export const dynamic = 'force-static'</code> en archivos de API routes.
</div>

### Error: "headers will not automatically work with output: export"
<div class="warning-box">
  <strong>⚠️ Nota:</strong> Los headers se configuran en Cloudflare Pages, no en Next.js.
</div>

## ✨ Ventajas de Cloudflare Pages

| Característica | Beneficio |
|----------------|-----------|
| <span class="badge badge-success">Gratis</span> | 500 builds por mes |
| <span class="badge badge-success">Rápido</span> | CDN global de Cloudflare |
| <span class="badge badge-success">Automático</span> | Se actualiza con cada push a GitHub |
| <span class="badge badge-success">Optimizado</span> | Maneja automáticamente Next.js |
| <span class="badge badge-success">SSL</span> | Certificado HTTPS automático |
| <span class="badge badge-success">Seguro</span> | Protección DDoS incluida |

## 🔗 URLs del Proyecto

- **Despliegue temporal**: <a href="https://5ec12b5c.portfolio-4j3.pages.dev" class="btn">Ver sitio</a>
- **Dominio personalizado**: <a href="https://andrescosta.dev" class="btn">andrescosta.dev</a> (configurado)
- **Dashboard**: <a href="https://dash.cloudflare.com/?to=/:account/pages" class="btn">Abrir Dashboard</a>

## 📁 Estructura de Archivos

<div class="file-tree">
me/
├── src/
│   ├── app/
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── ...
│   └── components/
├── out/                    # Archivos estáticos generados
├── next.config.ts         # Configuración de Next.js
├── wrangler.toml          # Configuración de Wrangler
└── package.json
</div>

## 📝 Notas Importantes

<div class="warning-box">
  <strong>⚠️ Configuraciones críticas:</strong>
  <ul>
    <li><code>output: 'export'</code>: Necesario para generar archivos estáticos</li>
    <li><code>unoptimized: true</code>: Para imágenes en export</li>
    <li><code>dynamic: 'force-static'</code>: Para API routes en export</li>
    <li><code>trailingSlash: true</code>: Para compatibilidad con Cloudflare Pages</li>
  </ul>
</div>

## 📚 Recursos Adicionales

- <a href="https://developers.cloudflare.com/pages/" class="btn">Documentación de Cloudflare Pages</a>
- <a href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports" class="btn">Next.js Static Export</a>
- <a href="https://developers.cloudflare.com/workers/wrangler/" class="btn">Wrangler CLI</a>

---

<div class="info-box">
  <strong>📅 Fecha de creación:</strong> 22 de Julio, 2025<br>
  <strong>👨‍💻 Autor:</strong> Andrés Costas Moreno<br>
  <strong>📄 Versión:</strong> 1.0
</div> 