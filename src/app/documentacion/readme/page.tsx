import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'README - Portfolio Personal - Andrés Costas Moreno',
  description: 'Documentación completa del portfolio personal desarrollado con Next.js 15, TypeScript y Tailwind CSS',
}

export default function ReadmePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🚀 Portfolio Personal
          </h1>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <p className="text-muted-foreground text-center text-lg">
              Un portfolio personal moderno y profesional desarrollado con Next.js 15, TypeScript y Tailwind CSS.
            </p>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <strong className="text-blue-800 dark:text-blue-200">🎯 Objetivo:</strong> 
              <span className="text-blue-700 dark:text-blue-300"> Portfolio personal moderno y responsive con modo oscuro/claro</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🚀 Características</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <strong className="text-blue-800 dark:text-blue-200">🎨 Diseño Moderno</strong><br/>
                <span className="text-blue-700 dark:text-blue-300">Interfaz limpia y minimalista inspirada en diseños profesionales</span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <strong className="text-purple-800 dark:text-purple-200">🌙 Modo Oscuro/Claro</strong><br/>
                <span className="text-purple-700 dark:text-purple-300">Cambio automático basado en preferencias del sistema</span>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <strong className="text-green-800 dark:text-green-200">📱 Totalmente Responsive</strong><br/>
                <span className="text-green-700 dark:text-green-300">Optimizado para todos los dispositivos</span>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <strong className="text-orange-800 dark:text-orange-200">✨ Animaciones Suaves</strong><br/>
                <span className="text-orange-700 dark:text-orange-300">Transiciones y animaciones con Framer Motion</span>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
                <strong className="text-indigo-800 dark:text-indigo-200">🔍 SEO Optimizado</strong><br/>
                <span className="text-indigo-700 dark:text-indigo-300">Metadatos completos para mejor posicionamiento</span>
              </div>
              <div className="bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4">
                <strong className="text-pink-800 dark:text-pink-200">♿ Accesibilidad</strong><br/>
                <span className="text-pink-700 dark:text-pink-300">Diseñado siguiendo las mejores prácticas de accesibilidad</span>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🛠️ Tecnologías Utilizadas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                Next.js 15
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                TypeScript
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                Tailwind CSS
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                Framer Motion
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                Lucide React
              </div>
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center font-medium">
                next-themes
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📦 Instalación</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">1. Instalar dependencias</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm install</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">2. Ejecutar en desarrollo</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm run dev</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">3. Construir para producción</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm run build</code>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">4. Iniciar en producción</h3>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <code>npm start</code>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎨 Personalización</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Cambiar Información Personal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <strong className="text-blue-800 dark:text-blue-200">Hero Section</strong> - <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">src/components/hero.tsx</code><br/>
                • Actualizar nombre y descripción<br/>
                • Cambiar enlaces de redes sociales
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <strong className="text-green-800 dark:text-green-200">About Section</strong> - <code className="bg-green-100 dark:bg-green-900 px-1 rounded">src/components/about.tsx</code><br/>
                • Modificar biografía<br/>
                • Ajustar habilidades y niveles
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <strong className="text-purple-800 dark:text-purple-200">Experience Section</strong> - <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">src/components/experience.tsx</code><br/>
                • Actualizar experiencia laboral<br/>
                • Modificar formación académica
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <strong className="text-orange-800 dark:text-orange-200">Projects Section</strong> - <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">src/components/projects.tsx</code><br/>
                • Agregar/editar proyectos<br/>
                • Actualizar enlaces de GitHub
              </div>
              <div className="bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4">
                <strong className="text-pink-800 dark:text-pink-200">Contact Section</strong> - <code className="bg-pink-100 dark:bg-pink-900 px-1 rounded">src/components/contact.tsx</code><br/>
                • Cambiar información de contacto<br/>
                • Configurar formulario
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Cambiar Colores</h3>
            <p className="text-muted-foreground mb-4">Los colores se pueden personalizar editando las variables CSS en <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">src/app/globals.css</code>:</p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`:root {
  --theme-primary: #3b82f6;
  --theme-secondary: #1f2937;
  --theme-muted: #6b7280;
  --theme-card: #ffffff;
  --theme-medium: #e5e7eb;
}`}</pre>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📁 Estructura del Proyecto</h2>
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 font-mono text-sm">
              <pre>{`me/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── about.tsx
│       ├── contact.tsx
│       ├── documentation.tsx
│       ├── experience.tsx
│       ├── hero.tsx
│       ├── navigation.tsx
│       ├── projects.tsx
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
└── public/
    └── documentacion/
        ├── README.md
        ├── INSTALACION.md
        └── cloudflare_workers.md`}</pre>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🚀 Despliegue</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Vercel <span className="inline-block px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full font-medium">Recomendado</span></h3>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <strong className="text-blue-800 dark:text-blue-200">Pasos:</strong>
              <ol className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>1. Conecta tu repositorio a Vercel</li>
                <li>2. Configura las variables de entorno si es necesario</li>
                <li>3. ¡Listo! Se desplegará automáticamente</li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Netlify</h3>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <strong className="text-green-800 dark:text-green-200">Pasos:</strong>
              <ol className="text-green-700 dark:text-green-300 mt-2 space-y-1">
                <li>1. Sube tu código a GitHub</li>
                <li>2. Conecta el repositorio a Netlify</li>
                <li>3. Configura el comando de build: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">npm run build</code></li>
                <li>4. Configura el directorio de salida: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">.next</code></li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Cloudflare Pages</h3>
            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <strong className="text-orange-800 dark:text-orange-200">Consulta la documentación específica:</strong><br/>
              <a href="/documentacion" className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors mt-2">
                Ver Documentación Cloudflare
              </a>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔧 Scripts Disponibles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <strong className="text-blue-800 dark:text-blue-200">npm run dev</strong><br/>
                <span className="text-blue-700 dark:text-blue-300">Ejecutar en modo desarrollo</span>
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <strong className="text-green-800 dark:text-green-200">npm run build</strong><br/>
                <span className="text-green-700 dark:text-green-300">Construir para producción</span>
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <strong className="text-purple-800 dark:text-purple-200">npm run start</strong><br/>
                <span className="text-purple-700 dark:text-purple-300">Iniciar servidor de producción</span>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <strong className="text-orange-800 dark:text-orange-200">npm run lint</strong><br/>
                <span className="text-orange-700 dark:text-orange-300">Ejecutar linter</span>
              </div>
              <div className="bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4">
                <strong className="text-pink-800 dark:text-pink-200">npm run type-check</strong><br/>
                <span className="text-pink-700 dark:text-pink-300">Verificar tipos de TypeScript</span>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📝 Licencia</h2>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <strong className="text-green-800 dark:text-green-200">Licencia MIT</strong><br/>
              <span className="text-green-700 dark:text-green-300">Este proyecto está bajo la Licencia MIT. Puedes usarlo libremente para tu portfolio personal.</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🤝 Contribuciones</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <strong className="text-blue-800 dark:text-blue-200">¡Contribuciones bienvenidas!</strong><br/>
              <span className="text-blue-700 dark:text-blue-300">Por favor, abre un issue o un pull request para contribuir al proyecto.</span>
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