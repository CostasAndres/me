import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentación Cloudflare Workers - Andrés Costas Moreno',
  description: 'Guía completa para desplegar aplicaciones Next.js en Cloudflare Pages',
}

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚀 Despliegue en Cloudflare Pages
          </h1>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📋 Resumen</h2>
            <p className="text-muted-foreground">
              Este documento describe el proceso completo para desplegar una aplicación Next.js en Cloudflare Pages, 
              incluyendo la configuración, optimización y despliegue.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <strong className="text-blue-800 dark:text-blue-200">🎯 Objetivo:</strong> 
              <span className="text-blue-700 dark:text-blue-300"> Desplegar un portfolio personal en Cloudflare Pages con Next.js</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔧 Prerrequisitos</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">Node.js 18+</span>
                <span className="text-muted-foreground">instalado</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">Cuenta en Cloudflare</span>
                <span className="text-muted-foreground">configurada</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">Código en GitHub</span>
                <span className="text-muted-foreground">(recomendado)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium">Wrangler CLI</span>
                <span className="text-muted-foreground">instalado</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📦 Instalación de Wrangler CLI</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm install -g wrangler</code>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔐 Autenticación en Cloudflare</h2>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>wrangler login</code>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">⚙️ Configuración del Proyecto</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Configuración de Next.js para Cloudflare Pages</h3>
            
            <h4 className="text-lg font-semibold mb-2 text-primary">Archivo: next.config.ts</h4>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import type { NextConfig } from "next";

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

export default nextConfig;`}</pre>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🚀 Proceso de Despliegue</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Construir la aplicación</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm run build</code>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <strong className="text-blue-800 dark:text-blue-200">📝 Este comando:</strong>
              <ul className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>• Compila la aplicación Next.js</li>
                <li>• Genera archivos estáticos en el directorio <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">out/</code></li>
                <li>• Optimiza imágenes y assets</li>
                <li>• Crea sitemap.xml y robots.txt</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-primary mt-8">2. Desplegar en Cloudflare Pages</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>wrangler pages deploy out --project-name=portfolio</code>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <strong className="text-blue-800 dark:text-blue-200">📝 Este comando:</strong>
              <ul className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>• Sube los archivos estáticos a Cloudflare Pages</li>
                <li>• Crea un nuevo proyecto si no existe</li>
                <li>• Genera una URL temporal para el despliegue</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🌐 Configuración de Dominio Personalizado</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Opción 1: Desde el Dashboard de Cloudflare</h3>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
              <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium mb-2">Recomendado</span>
              <ol className="text-green-700 dark:text-green-300 space-y-2">
                <li>1. <strong>Ir al Dashboard de Cloudflare Pages</strong></li>
                <li>2. <strong>Seleccionar proyecto</strong> portfolio</li>
                <li>3. <strong>Configurar dominio personalizado</strong></li>
                <li>4. <strong>Escribir:</strong> andrescosta.dev</li>
                <li>5. <strong>Hacer clic en "Continue"</strong></li>
              </ol>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">✨ Ventajas de Cloudflare Pages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium mb-2">Gratis</span>
                <p className="text-green-700 dark:text-green-300">500 builds por mes</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium mb-2">Rápido</span>
                <p className="text-blue-700 dark:text-blue-300">CDN global de Cloudflare</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <span className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full font-medium mb-2">Automático</span>
                <p className="text-purple-700 dark:text-purple-300">Se actualiza con cada push a GitHub</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <span className="inline-block px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs rounded-full font-medium mb-2">SSL</span>
                <p className="text-orange-700 dark:text-orange-300">Certificado HTTPS automático</p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔗 URLs del Proyecto</h2>
            <div className="space-y-3">
              <a href="https://e22e7814.portfolio-4j3.pages.dev" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                🌎 Ver sitio
              </a>
              <a href="https://andrescosta.dev" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors ml-2">
                🏠 andrescosta.dev
              </a>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📝 Notas Importantes</h2>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <strong className="text-yellow-800 dark:text-yellow-200">⚠️ Configuraciones críticas:</strong>
              <ul className="text-yellow-700 dark:text-yellow-300 mt-2 space-y-1">
                <li>• <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">output: 'export'</code>: Necesario para generar archivos estáticos</li>
                <li>• <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">unoptimized: true</code>: Para imágenes en export</li>
                <li>• <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">dynamic: 'force-static'</code>: Para API routes en export</li>
                <li>• <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">trailingSlash: true</code>: Para compatibilidad con Cloudflare Pages</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📚 Recursos Adicionales</h2>
            <div className="space-y-3">
              <a href="https://developers.cloudflare.com/pages/" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                📖 Documentación de Cloudflare Pages
              </a>
              <a href="https://nextjs.org/docs/app/building-your-application/deploying/static-exports" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors ml-2">
                ⚡ Next.js Static Export
              </a>
              <a href="https://developers.cloudflare.com/workers/wrangler/" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors ml-2">
                🛠️ Wrangler CLI
              </a>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <strong className="text-blue-800 dark:text-blue-200">📅 Fecha de creación:</strong> 22 de Julio, 2025<br/>
              <strong className="text-blue-800 dark:text-blue-200">👨‍💻 Autor:</strong> Andrés Costas Moreno<br/>
              <strong className="text-blue-800 dark:text-blue-200">📄 Versión:</strong> 1.0
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors">
              ← Volver al Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 