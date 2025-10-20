# 🎮 Level-Up Gamer - Guía de Instalación

## ✅ Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

1. **Node.js** (versión 16 o superior)
   - Descarga desde: https://nodejs.org/
   - Verifica la instalación: `node --version` y `npm --version`

## 📦 Instalación

### Paso 1: Navegar al directorio del proyecto

```bash
cd C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react
```

### Paso 2: Instalar dependencias

```bash
npm install
```

Este comando instalará todas las dependencias necesarias:
- React 18
- React Router DOM v6
- React Bootstrap
- Bootstrap 5
- React Icons
- Vite (build tool)

## 🚀 Ejecutar el Proyecto

### Modo Desarrollo

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo en: **http://localhost:3000**

La aplicación se abrirá automáticamente en tu navegador.

### Modo Producción

```bash
# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

## 📁 Estructura del Proyecto

```
level-up-gamer-react/
├── public/
│   └── img/              # Copiar aquí las imágenes del proyecto original
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ProductCard.jsx
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── About.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Admin.jsx
│   │   ├── ProductManagement.jsx
│   │   └── UserManagement.jsx
│   ├── context/
│   │   └── CartContext.jsx  # Estado global del carrito
│   ├── data/
│   │   └── products.js      # Base de datos de productos
│   ├── App.jsx              # Router principal
│   ├── main.jsx            # Entry point
│   └── styles.css          # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🖼️ Copiar Imágenes

**IMPORTANTE**: Debes copiar las imágenes del proyecto original a la nueva estructura:

```bash
# En PowerShell
Copy-Item -Path "C:\Users\MAAXXDC\Desktop\FullStack\Full_Stack\img\*" -Destination "C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react\public\img\" -Recurse
```

O manualmente:
- Copia la carpeta `Full_Stack/img/` 
- Pégala en `level-up-gamer-react/public/img/`

## 🎯 Características Implementadas

✅ **Navegación SPA** con React Router v6
✅ **Carrito de Compras** con persistencia en LocalStorage
✅ **Gestión de Estado** con Context API
✅ **Diseño Responsive** con React Bootstrap
✅ **Filtros y Búsqueda** de productos
✅ **Paginación** de productos
✅ **Login/Registro** de usuarios
✅ **Panel de Administración** completo
✅ **Blog** con artículos
✅ **Formulario de Contacto**
✅ **Animaciones** y transiciones suaves

## 🔑 Credenciales Demo

Para probar el panel de administración:

- **Admin**: 
  - Email: `admin@levelup.com`
  - Password: `admin123`

- **Usuario**:
  - Email: `user@levelup.com`
  - Password: `user123`

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework UI
- **Vite** - Build tool ultrarrápido
- **React Router v6** - Navegación SPA
- **React Bootstrap** - Componentes UI
- **Bootstrap 5** - Framework CSS
- **React Icons** - Iconos
- **Context API** - Estado global
- **LocalStorage** - Persistencia de datos

## 🎨 Personalización

### Colores

Puedes modificar los colores en `src/styles.css`:

```css
:root {
  --primary-color: #1E90FF;      /* Azul principal */
  --secondary-color: #39FF14;    /* Verde neón */
  --dark-bg: #000000;            /* Fondo negro */
}
```

### Productos

Edita los productos en `src/data/products.js`

### Estilos

- Estilos globales: `src/styles.css`
- Estilos de Bootstrap: automáticos con React Bootstrap
- Estilos inline: en componentes para casos específicos

## 🐛 Solución de Problemas

### Error: "npm: The term 'npm' is not recognized"

**Solución**: Instala Node.js desde https://nodejs.org/

### Error: Las imágenes no se cargan

**Solución**: Asegúrate de copiar las imágenes a `public/img/`

### Error al instalar dependencias

**Solución**: 
```bash
# Elimina node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstala
npm install
```

### Puerto 3000 ocupado

**Solución**: El servidor usará automáticamente otro puerto (3001, 3002, etc.)

## 📚 Comandos Útiles

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview

# Linter
npm run lint
```

## 🚀 Próximos Pasos

1. Copiar las imágenes del proyecto original
2. Instalar Node.js si no lo tienes
3. Ejecutar `npm install`
4. Ejecutar `npm run dev`
5. ¡Disfrutar de tu nueva aplicación React!

## 📞 Soporte

Si tienes problemas, revisa:
1. Que Node.js esté instalado correctamente
2. Que estés en el directorio correcto
3. Que las dependencias se hayan instalado sin errores
4. Que las imágenes estén en `public/img/`

---

**¡Tu proyecto está listo para usar! 🎉**
