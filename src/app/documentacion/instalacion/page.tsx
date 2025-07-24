import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guía de Instalación - Portfolio Personal - Andrés Costas Moreno',
  description: 'Instrucciones paso a paso para instalar y configurar el portfolio personal',
}

export default function InstalacionPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            🚀 Guía de Instalación
          </h1>
          
          <div className="bg-card border rounded-lg p-6 mb-8">
            <p className="text-muted-foreground text-center text-lg">
              Instrucciones paso a paso para instalar y configurar tu portfolio personal.
            </p>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mt-4">
              <strong className="text-green-800 dark:text-green-200">🎯 Objetivo:</strong> 
              <span className="text-green-700 dark:text-green-300"> Guía completa de instalación y configuración del portfolio</span>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Paso 1: Instalar Dependencias</h2>
            <p className="text-muted-foreground mb-4">
              Antes de ejecutar el proyecto, necesitas instalar todas las dependencias. Como tienes problemas con PowerShell, puedes usar una de estas opciones:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Opción A: Command Prompt</h3>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <strong className="text-blue-800 dark:text-blue-200">Pasos:</strong>
              <ol className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>1. Abre Command Prompt (cmd) como administrador</li>
                <li>2. Navega a tu proyecto: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">cd C:\Users\Andres\Documents\Pagina\me</code></li>
                <li>3. Ejecuta: <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">npm install</code></li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Opción B: Git Bash</h3>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <strong className="text-green-800 dark:text-green-200">Pasos:</strong>
              <ol className="text-green-700 dark:text-green-300 mt-2 space-y-1">
                <li>1. Abre Git Bash</li>
                <li>2. Navega a tu proyecto: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">cd /c/Users/Andres/Documents/Pagina/me</code></li>
                <li>3. Ejecuta: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">npm install</code></li>
              </ol>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Opción C: VS Code Terminal</h3>
            <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <strong className="text-purple-800 dark:text-purple-200">Pasos:</strong>
              <ol className="text-purple-700 dark:text-purple-300 mt-2 space-y-1">
                <li>1. Abre VS Code</li>
                <li>2. Abre la terminal integrada (Ctrl + `)</li>
                <li>3. Ejecuta: <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">npm install</code></li>
              </ol>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Paso 2: Ejecutar el Proyecto</h2>
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <strong className="text-green-800 dark:text-green-200">Una vez instaladas las dependencias:</strong><br/>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-2">
                <code>npm run dev</code>
              </div>
              <p className="text-green-700 dark:text-green-300 mt-2">El proyecto estará disponible en: <code className="bg-green-100 dark:bg-green-900 px-1 rounded">http://localhost:3000</code></p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Paso 3: Personalizar el Portfolio</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Información Personal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <strong className="text-blue-800 dark:text-blue-200">Hero Section</strong> - <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">src/components/hero.tsx</code><br/>
                • Cambia el nombre "Andrés Costas"<br/>
                • Actualiza la descripción<br/>
                • Modifica los enlaces de redes sociales
              </div>
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <strong className="text-green-800 dark:text-green-200">About Section</strong> - <code className="bg-green-100 dark:bg-green-900 px-1 rounded">src/components/about.tsx</code><br/>
                • Actualiza la biografía<br/>
                • Modifica las habilidades y niveles
              </div>
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <strong className="text-purple-800 dark:text-purple-200">Experience Section</strong> - <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">src/components/experience.tsx</code><br/>
                • Agrega tu experiencia laboral real<br/>
                • Actualiza la formación académica
              </div>
              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <strong className="text-orange-800 dark:text-orange-200">Projects Section</strong> - <code className="bg-orange-100 dark:bg-orange-900 px-1 rounded">src/components/projects.tsx</code><br/>
                • Agrega tus proyectos reales<br/>
                • Actualiza los enlaces de GitHub
              </div>
              <div className="bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800 rounded-lg p-4">
                <strong className="text-pink-800 dark:text-pink-200">Contact Section</strong> - <code className="bg-pink-100 dark:bg-pink-900 px-1 rounded">src/components/contact.tsx</code><br/>
                • Cambia el email de contacto<br/>
                • Configura el formulario si es necesario
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary mt-6">Colores y Estilo</h3>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <strong className="text-blue-800 dark:text-blue-200">Personalización:</strong>
              <ul className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>• Edita <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">src/app/globals.css</code> para cambiar los colores</li>
                <li>• Modifica <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">tailwind.config.ts</code> para personalizar el tema</li>
              </ul>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🎯 Características del Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Diseño Moderno y Minimalista
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Modo Oscuro/Claro Automático
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Totalmente Responsive
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Animaciones Suaves
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ SEO Optimizado
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Accesibilidad
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Navegación Suave
              </div>
              <div className="bg-green-600 text-white p-4 rounded-lg text-center font-medium">
                ✅ Formulario de Contacto
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">🔧 Solución de Problemas</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Error de PowerShell</h3>
            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <strong className="text-yellow-800 dark:text-yellow-200">🔧 Solución:</strong> 
              <span className="text-yellow-700 dark:text-yellow-300"> Si sigues teniendo problemas con PowerShell, usa Command Prompt o Git Bash.</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Error de Dependencias</h3>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
              <strong className="text-red-800 dark:text-red-200">🔧 Solución:</strong> 
              <span className="text-red-700 dark:text-red-300"> Si hay errores de dependencias:</span>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-2">
                <pre>{`rm -rf node_modules package-lock.json
npm install`}</pre>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-primary">Error de TypeScript</h3>
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <strong className="text-red-800 dark:text-red-200">🔧 Solución:</strong> 
              <span className="text-red-700 dark:text-red-300"> Si hay errores de TypeScript:</span>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto mt-2">
                <code>npm run build</code>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">📞 Soporte</h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <strong className="text-blue-800 dark:text-blue-200">Si tienes algún problema, puedes:</strong>
              <ol className="text-blue-700 dark:text-blue-300 mt-2 space-y-1">
                <li>1. Revisar la documentación de Next.js</li>
                <li>2. Verificar que todas las dependencias estén instaladas</li>
                <li>3. Asegurarte de que estés usando Node.js 18+ o 20+</li>
              </ol>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <strong className="text-green-800 dark:text-green-200">¡Tu portfolio está listo para impresionar a los reclutadores! 🎉</strong>
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