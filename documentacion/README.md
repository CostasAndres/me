<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  color: #222;
  margin: 0;
  padding: 0;
}
.markdown-body {
  max-width: 900px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 40px 32px 32px 32px;
}
h1, h2, h3 {
  font-family: inherit;
}
h1 {
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 24px 0;
  border-radius: 10px;
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 32px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.08);
  letter-spacing: 1px;
}
h2 {
  color: #2c3e50;
  border-left: 5px solid #667eea;
  padding-left: 16px;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.7em;
  background: #f0f4fa;
  border-radius: 6px;
}
h3 {
  color: #34495e;
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 1.25em;
}
ul, ol {
  margin-left: 24px;
  margin-bottom: 18px;
}
li {
  margin-bottom: 7px;
}
code, pre {
  background: #f4f4f4;
  color: #c7254e;
  border-radius: 5px;
  font-size: 1em;
  padding: 2px 6px;
}
pre {
  background: #23272e;
  color: #e0e6f0;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 18px;
}
.info-box {
  background: #eaf6ff;
  border-left: 5px solid #3498db;
  border-radius: 8px;
  padding: 18px 22px;
  margin: 18px 0;
  color: #1a3a5d;
}
.check-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  margin-bottom: 24px;
}
.check-list span {
  background: #e0ffe0;
  color: #218838;
  border-radius: 6px;
  padding: 6px 14px;
  font-weight: 500;
  display: inline-block;
}
@media (max-width: 600px) {
  .markdown-body {
    padding: 16px 4vw;
  }
  h1 {
    font-size: 1.5em;
    padding: 14px 0;
  }
  h2 {
    font-size: 1.1em;
    padding-left: 8px;
  }
}
blockquote {
  border-left: 4px solid #667eea;
  background: #f7fafd;
  color: #444;
  padding: 12px 18px;
  margin: 18px 0;
  border-radius: 6px;
}
a {
  color: #2563eb;
  text-decoration: none;
  transition: color 0.2s;
}
a:hover {
  color: #764ba2;
  text-decoration: underline;
}
hr {
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 32px 0;
}
</style>

<div class="markdown-body">

# Portfolio Personal - Andrés Costas Moreno

Un portfolio personal moderno y profesional desarrollado con Next.js 15, TypeScript y Tailwind CSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y minimalista inspirada en diseños profesionales
- **Modo Oscuro/Claro**: Cambio automático basado en preferencias del sistema
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y animaciones con Framer Motion
- **SEO Optimizado**: Metadatos completos para mejor posicionamiento
- **Accesibilidad**: Diseñado siguiendo las mejores prácticas de accesibilidad

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **next-themes** - Gestión de temas

## 📦 Instalación

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

4. **Iniciar en producción**:
   ```bash
   npm start
   ```

## 🎨 Personalización

### Cambiar Información Personal

1. **Hero Section** (`src/components/hero.tsx`):
   - Actualizar nombre y descripción
   - Cambiar enlaces de redes sociales

2. **About Section** (`src/components/about.tsx`):
   - Modificar biografía
   - Ajustar habilidades y niveles

3. **Experience Section** (`src/components/experience.tsx`):
   - Actualizar experiencia laboral
   - Modificar formación académica

4. **Projects Section** (`src/components/projects.tsx`):
   - Agregar/editar proyectos
   - Actualizar enlaces de GitHub

5. **Contact Section** (`src/components/contact.tsx`):
   - Cambiar información de contacto
   - Configurar formulario

### Cambiar Colores

Los colores se pueden personalizar editando las variables CSS en `src/app/globals.css`:
