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
</style>

<div class="markdown-body">

# 🚀 Instrucciones de Instalación

## Paso 1: Instalar Dependencias

Antes de ejecutar el proyecto, necesitas instalar todas las dependencias. Como tienes problemas con PowerShell, puedes usar una de estas opciones:

### Opción A: Usar Command Prompt
1. Abre Command Prompt (cmd) como administrador
2. Navega a tu proyecto: `cd C:\Users\Andres\Documents\Pagina\me`
3. Ejecuta: `npm install`

### Opción B: Usar Git Bash
1. Abre Git Bash
2. Navega a tu proyecto: `cd /c/Users/Andres/Documents/Pagina/me`
3. Ejecuta: `npm install`


### Opción C: Usar VS Code Terminal
1. Abre VS Code
2. Abre la terminal integrada (Ctrl + `)
3. Ejecuta: `npm install`

## Paso 2: Ejecutar el Proyecto

Una vez instaladas las dependencias:

```bash
npm run dev
```

El proyecto estará disponible en: http://localhost:3000

## Paso 3: Personalizar el Portfolio

### Información Personal
1. **Hero Section**: Edita `src/components/hero.tsx`
   - Cambia el nombre "Andrés Costas"
   - Actualiza la descripción
   - Modifica los enlaces de redes sociales

2. **About Section**: Edita `src/components/about.tsx`
   - Actualiza la biografía
   - Modifica las habilidades y niveles

3. **Experience Section**: Edita `src/components/experience.tsx`
   - Agrega tu experiencia laboral real
   - Actualiza la formación académica

4. **Projects Section**: Edita `src/components/projects.tsx`
   - Agrega tus proyectos reales
   - Actualiza los enlaces de GitHub

5. **Contact Section**: Edita `src/components/contact.tsx`
   - Cambia el email de contacto
   - Configura el formulario si es necesario

### Colores y Estilo
- Edita `src/app/globals.css` para cambiar los colores
- Modifica `tailwind.config.ts` para personalizar el tema


## 🎯 Características del Portfolio

✅ **Diseño Moderno y Minimalista**
✅ **Modo Oscuro/Claro Automático**
✅ **Totalmente Responsive**
✅ **Animaciones Suaves**
✅ **SEO Optimizado**
✅ **Accesibilidad**
✅ **Navegación Suave**
✅ **Formulario de Contacto**

## 🔧 Solución de Problemas

### Error de PowerShell
Si sigues teniendo problemas con PowerShell, usa Command Prompt o Git Bash.

### Error de Dependencias
Si hay errores de dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error de TypeScript
Si hay errores de TypeScript:
```bash
npm run build
```

## 📞 Soporte

Si tienes algún problema, puedes:
1. Revisar la documentación de Next.js
2. Verificar que todas las dependencias estén instaladas
3. Asegurarte de que estés usando Node.js 18+ o 20+

---

¡Tu portfolio está listo para impresionar a los reclutadores! 🎉 