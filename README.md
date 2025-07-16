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

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Color principal */
  --background: 0 0% 100%; /* Fondo claro */
  /* ... más variables */
}

.dark {
  --primary: 217.2 91.2% 59.8%; /* Color principal modo oscuro */
  --background: 222.2 84% 4.9%; /* Fondo oscuro */
  /* ... más variables */
}
```

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración del Formulario de Contacto

El formulario de contacto actualmente solo muestra los datos en consola. Para implementar el envío real:

1. **Usar un servicio como Formspree**:
   ```jsx
   const handleSubmit = async (e) => {
     e.preventDefault();
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(formData),
       headers: {
         'Content-Type': 'application/json'
       }
     });
   };
   ```

2. **O integrar con tu propio backend**

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno si es necesario
3. ¡Listo!

### Netlify
1. Sube el código a GitHub
2. Conecta el repositorio a Netlify
3. Configura el comando de build: `npm run build`
4. Configura el directorio de publicación: `.next`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**Desarrollado con ❤️ por Andrés Costas Moreno**
