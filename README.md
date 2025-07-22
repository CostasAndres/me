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

El portfolio incluye un formulario de contacto funcional que utiliza **Nodemailer** para enviar emails. Aquí te explico cómo configurarlo:

### 📧 Configuración con Gmail (Recomendado)

1. **Habilitar la verificación en dos pasos** en tu cuenta de Gmail
2. **Generar una contraseña de aplicación**:
   - Ve a Configuración de Google Account
   - Seguridad → Verificación en dos pasos → Contraseñas de aplicación
   - Genera una nueva contraseña para "Mail"

3. **Crear archivo `.env.local`** en la raíz del proyecto:
   ```env
   EMAIL_USER=tu-email@gmail.com
   EMAIL_PASS=tu-contraseña-de-aplicación
   ```

4. **Actualizar el email de destino** en `src/app/api/contact/route.ts`:
   ```typescript
   to: 'tu-email@gmail.com', // Cambia por tu email
   ```

### 🔄 Configuración con otros proveedores

#### **Outlook/Hotmail**:
```typescript
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

#### **Proveedor personalizado**:
```typescript
const transporter = nodemailer.createTransporter({
  host: 'tu-servidor-smtp.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

### 🚀 Servicios de terceros (Alternativas)

#### **Formspree** (Más fácil):
1. Regístrate en [Formspree](https://formspree.io)
2. Crea un nuevo formulario
3. Reemplaza la función `handleSubmit` en `src/components/contact.tsx`:
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
       });
       
       if (response.ok) {
         setSubmitStatus("success");
         setFormData({ name: "", email: "", message: "" });
       } else {
         setSubmitStatus("error");
       }
     } catch (error) {
       setSubmitStatus("error");
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

#### **Netlify Forms**:
1. Agrega `data-netlify="true"` al formulario
2. Netlify procesará automáticamente los envíos

### 🔒 Variables de entorno para producción

Para Vercel, Netlify u otros servicios:

1. **Vercel**: Configura las variables en el dashboard
2. **Netlify**: Usa el archivo `netlify.toml` o el dashboard
3. **Railway/Render**: Configura en las variables de entorno del servicio

### 📝 Personalización del email

Puedes personalizar el template del email en `src/app/api/contact/route.ts`:

```typescript
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'tu-email@gmail.com',
  subject: `Nuevo mensaje de ${name} desde tu portfolio`,
  html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
      <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
        Enviado desde tu portfolio personal
      </p>
    </div>
  `
}
```

### ⚠️ Notas importantes

- **Nunca subas las credenciales** a GitHub
- **Usa contraseñas de aplicación** para Gmail
- **Prueba el formulario** antes de desplegar
- **Considera límites de envío** de tu proveedor de email

## 🐳 Docker

El proyecto incluye configuración completa de Docker para desarrollo y producción.

### 🚀 Comandos rápidos

```bash
# Desarrollo
docker-compose --profile dev up

# Producción
docker-compose --profile prod up -d

# Con Nginx (proxy reverso)
docker-compose --profile prod --profile nginx up -d

# Construir imagen
docker build -t portfolio .

# Ejecutar contenedor
docker run -p 3000:3000 portfolio
```

### 📦 Configuración de Docker

#### **Desarrollo**:
```bash
# Iniciar en modo desarrollo con hot reload
docker-compose --profile dev up

# Acceder a la aplicación
# http://localhost:3000
```

#### **Producción**:
```bash
# Construir y ejecutar en producción
docker-compose --profile prod up -d

# Ver logs
docker-compose --profile prod logs -f

# Detener servicios
docker-compose --profile prod down
```

#### **Con Nginx**:
```bash
# Ejecutar con proxy reverso
docker-compose --profile prod --profile nginx up -d

# Configurar SSL (editar nginx.conf)
# 1. Descomenta las líneas SSL en nginx.conf
# 2. Coloca tus certificados en ./ssl/
# 3. Reinicia los servicios
```

### 🔧 Variables de entorno

Docker Compose lee automáticamente las variables del archivo `.env.local`:

```bash
# Crear archivo .env.local en la raíz del proyecto
EMAIL_USER=tu-email@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicación

# Ejecutar (las variables se cargan automáticamente)
docker-compose --profile prod up -d
```

**Nota**: El archivo `.env.local` ya está configurado en `docker-compose.yml` y se carga automáticamente para ambos servicios (desarrollo y producción).

**Para Gmail**:
1. Habilitar verificación en dos pasos en tu cuenta de Google
2. Generar una contraseña de aplicación (Google Account → Seguridad → Contraseñas de aplicación)
3. Usar esa contraseña en `EMAIL_PASS`, NO tu contraseña normal

### 🏗️ Optimizaciones incluidas

- **Multi-stage build** para reducir tamaño de imagen
- **Alpine Linux** para menor footprint
- **Cache de dependencias** optimizado
- **Usuario no-root** para seguridad
- **Compresión gzip** en Nginx
- **Cache de archivos estáticos**
- **Headers de seguridad** configurados

## 🚀 Despliegue

### 🐳 Docker (Recomendado)
1. Construye la imagen: `docker build -t portfolio .`
2. Ejecuta: `docker run -p 3000:3000 portfolio`
3. ¡Listo!

### Vercel
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
