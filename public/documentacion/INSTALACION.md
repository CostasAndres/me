# 🚀 Guía de Instalación - Portfolio Personal

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

Instrucciones paso a paso para instalar y configurar tu portfolio personal.

<div class="info-box">
  <strong>🎯 Objetivo:</strong> Guía completa de instalación y configuración del portfolio
</div>
## Paso 1: Instalar Dependencias

Antes de ejecutar el proyecto, necesitas instalar todas las dependencias. Como tienes problemas con PowerShell, puedes usar una de estas opciones:

### Opción A: Command Prompt
<div class="info-box">
  <strong>Pasos:</strong>
  <ol>
    <li>Abre Command Prompt (cmd) como administrador</li>
    <li>Navega a tu proyecto: <code>cd C:\Users\Andres\Documents\Pagina\me</code></li>
    <li>Ejecuta: <code>npm install</code></li>
  </ol>
</div>

### Opción B: Git Bash
<div class="info-box">
  <strong>Pasos:</strong>
  <ol>
    <li>Abre Git Bash</li>
    <li>Navega a tu proyecto: <code>cd /c/Users/Andres/Documents/Pagina/me</code></li>
    <li>Ejecuta: <code>npm install</code></li>
  </ol>
</div>

### Opción C: VS Code Terminal
<div class="info-box">
  <strong>Pasos:</strong>
  <ol>
    <li>Abre VS Code</li>
    <li>Abre la terminal integrada (Ctrl + `)</li>
    <li>Ejecuta: <code>npm install</code></li>
  </ol>
</div>

## Paso 2: Ejecutar el Proyecto

<div class="info-box">
  <strong>Una vez instaladas las dependencias:</strong><br>
  <pre><code>npm run dev</code></pre>
  <p>El proyecto estará disponible en: <code>http://localhost:3000</code></p>
</div>

## Paso 3: Personalizar el Portfolio

### Información Personal

<div class="info-box">
  <strong>Hero Section</strong> - <code>src/components/hero.tsx</code><br>
  • Cambia el nombre "Andrés Costas"<br>
  • Actualiza la descripción<br>
  • Modifica los enlaces de redes sociales
</div>

<div class="info-box">
  <strong>About Section</strong> - <code>src/components/about.tsx</code><br>
  • Actualiza la biografía<br>
  • Modifica las habilidades y niveles
</div>

<div class="info-box">
  <strong>Experience Section</strong> - <code>src/components/experience.tsx</code><br>
  • Agrega tu experiencia laboral real<br>
  • Actualiza la formación académica
</div>

<div class="info-box">
  <strong>Projects Section</strong> - <code>src/components/projects.tsx</code><br>
  • Agrega tus proyectos reales<br>
  • Actualiza los enlaces de GitHub
</div>

<div class="info-box">
  <strong>Contact Section</strong> - <code>src/components/contact.tsx</code><br>
  • Cambia el email de contacto<br>
  • Configura el formulario si es necesario
</div>

### Colores y Estilo
<div class="info-box">
  <strong>Personalización:</strong>
  <ul>
    <li>Edita <code>src/app/globals.css</code> para cambiar los colores</li>
    <li>Modifica <code>tailwind.config.ts</code> para personalizar el tema</li>
  </ul>
</div>

## 🎯 Características del Portfolio

| Característica | Estado |
|----------------|--------|
| <span class="badge badge-success">Diseño Moderno y Minimalista</span> | ✅ |
| <span class="badge badge-success">Modo Oscuro/Claro Automático</span> | ✅ |
| <span class="badge badge-success">Totalmente Responsive</span> | ✅ |
| <span class="badge badge-success">Animaciones Suaves</span> | ✅ |
| <span class="badge badge-success">SEO Optimizado</span> | ✅ |
| <span class="badge badge-success">Accesibilidad</span> | ✅ |
| <span class="badge badge-success">Navegación Suave</span> | ✅ |
| <span class="badge badge-success">Formulario de Contacto</span> | ✅ |

## 🔧 Solución de Problemas

### Error de PowerShell
<div class="warning-box">
  <strong>🔧 Solución:</strong> Si sigues teniendo problemas con PowerShell, usa Command Prompt o Git Bash.
</div>

### Error de Dependencias
<div class="error-box">
  <strong>🔧 Solución:</strong> Si hay errores de dependencias:
  <pre><code>rm -rf node_modules package-lock.json
npm install</code></pre>
</div>

### Error de TypeScript
<div class="error-box">
  <strong>🔧 Solución:</strong> Si hay errores de TypeScript:
  <pre><code>npm run build</code></pre>
</div>

## 📞 Soporte

<div class="info-box">
  <strong>Si tienes algún problema, puedes:</strong>
  <ol>
    <li>Revisar la documentación de Next.js</li>
    <li>Verificar que todas las dependencias estén instaladas</li>
    <li>Asegurarte de que estés usando Node.js 18+ o 20+</li>
  </ol>
</div>

---

<div class="success-box">
  <strong>¡Tu portfolio está listo para impresionar a los reclutadores! 🎉</strong>
</div>

<div class="info-box">
  <strong>📅 Fecha de creación:</strong> 22 de Julio, 2025<br>
  <strong>👨‍💻 Autor:</strong> Andrés Costas Moreno<br>
  <strong>📄 Versión:</strong> 1.0
</div> 