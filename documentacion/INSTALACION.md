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