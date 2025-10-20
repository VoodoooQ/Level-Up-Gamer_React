# 🌳 Árbol Completo del Proyecto

```
level-up-gamer-react/
│
├── 📄 package.json                  # Dependencias y scripts NPM
├── 📄 package-lock.json            # Lock de versiones (generado)
├── 📄 vite.config.js               # Configuración de Vite
├── 📄 index.html                   # HTML base de la aplicación
├── 📄 .gitignore                   # Archivos ignorados por Git
│
├── 📚 DOCUMENTACIÓN
│   ├── 📄 README.md                # Guía rápida del proyecto
│   ├── 📄 INSTRUCCIONES.md         # Guía detallada de instalación
│   ├── 📄 MIGRACION.md            # Resumen de la migración
│   ├── 📄 INICIO-RAPIDO.md        # Quick start en 3 pasos
│   ├── 📄 CHECKLIST.md            # Lista de verificación
│   ├── 📄 ARBOL.md                # Este archivo
│   └── 📄 copiar-imagenes.ps1     # Script para copiar imágenes
│
├── 📁 public/                      # Archivos estáticos públicos
│   └── 📁 img/                     # Imágenes del proyecto
│       ├── 🖼️ Level-up_gamer.png
│       ├── 🖼️ Level-up-family.png
│       ├── 🖼️ Juego_Catan.jpg
│       ├── 🖼️ Juego_Carcassonne.jpg
│       ├── 🖼️ Mando_xbox.jpg
│       ├── 🖼️ Audifonos_Gamer_HyperX_Cloud II.jpg
│       ├── 🖼️ Mouse_Gaming.jpg
│       ├── 🖼️ PlayStation_5.jpg
│       ├── 🖼️ PC_Gaming.jpg
│       ├── 🖼️ Silla_Gaming.jpg
│       ├── 🖼️ Teclado_Mecanico.jpg
│       ├── 🖼️ Monitor_Gaming.jpg
│       ├── 🖼️ Nintendo_Switch.jpg
│       └── 🖼️ Xbox_Series_X.jpg
│
├── 📁 src/                         # Código fuente React
│   │
│   ├── 📄 main.jsx                 # Entry point de la aplicación
│   ├── 📄 App.jsx                  # Router principal con todas las rutas
│   ├── 📄 styles.css               # Estilos globales CSS
│   │
│   ├── 📁 components/              # Componentes reutilizables
│   │   ├── 📄 Header.jsx           # Navegación principal
│   │   ├── 📄 Footer.jsx           # Pie de página con newsletter
│   │   └── 📄 ProductCard.jsx      # Tarjeta de producto reutilizable
│   │
│   ├── 📁 pages/                   # Páginas de la aplicación
│   │   │
│   │   ├── 🏠 PÚBLICAS
│   │   ├── 📄 Home.jsx             # Página principal (/)
│   │   ├── 📄 Products.jsx         # Catálogo de productos (/productos)
│   │   ├── 📄 ProductDetail.jsx    # Detalle de producto (/producto/:id)
│   │   ├── 📄 Cart.jsx             # Carrito de compras (/carrito)
│   │   ├── 📄 Blog.jsx             # Lista de blog (/blog)
│   │   ├── 📄 BlogDetail.jsx       # Artículo del blog (/blog/:id)
│   │   ├── 📄 Contact.jsx          # Formulario de contacto (/contacto)
│   │   ├── 📄 About.jsx            # Sobre nosotros (/nosotros)
│   │   │
│   │   ├── 🔐 AUTENTICACIÓN
│   │   ├── 📄 Login.jsx            # Inicio de sesión (/login)
│   │   ├── 📄 Register.jsx         # Registro de usuario (/registro)
│   │   │
│   │   └── 👨‍💼 ADMINISTRACIÓN
│   │       ├── 📄 Admin.jsx            # Panel de control (/admin)
│   │       ├── 📄 ProductManagement.jsx # CRUD productos (/admin/productos)
│   │       └── 📄 UserManagement.jsx    # CRUD usuarios (/admin/usuarios)
│   │
│   ├── 📁 context/                 # Context API para estado global
│   │   └── 📄 CartContext.jsx      # Estado del carrito de compras
│   │
│   └── 📁 data/                    # Datos estáticos
│       └── 📄 products.js          # Base de datos de 12 productos
│
└── 📁 node_modules/                # Dependencias (generado por npm)
    └── ... (234 paquetes)

```

---

## 📊 Estadísticas del Árbol

### Por Tipo de Archivo

**Configuración:** 5 archivos
- package.json
- package-lock.json
- vite.config.js
- index.html
- .gitignore

**Documentación:** 7 archivos
- README.md
- INSTRUCCIONES.md
- MIGRACION.md
- INICIO-RAPIDO.md
- CHECKLIST.md
- ARBOL.md
- copiar-imagenes.ps1

**Código React:** 22 archivos
- main.jsx
- App.jsx
- styles.css
- 3 componentes
- 13 páginas
- 1 contexto
- 1 data

**Imágenes:** ~14 archivos
- Logo y assets

**Total:** ~48 archivos creados

---

## 📦 Dependencias (node_modules)

### Producción (6 paquetes principales)
```
react (^18.2.0)
├── Biblioteca principal de React
└── 50+ sub-dependencias

react-dom (^18.2.0)
├── Renderizado de React en el DOM
└── 15+ sub-dependencias

react-router-dom (^6.20.0)
├── Navegación y routing
└── 25+ sub-dependencias

react-bootstrap (^2.9.1)
├── Componentes Bootstrap para React
└── 30+ sub-dependencias

bootstrap (^5.3.2)
├── Framework CSS
└── 5+ sub-dependencias

react-icons (^4.12.0)
├── 10,000+ iconos
└── 20+ sub-dependencias
```

### Desarrollo (4 paquetes principales)
```
vite (^5.0.8)
├── Build tool ultrarrápido
└── 80+ sub-dependencias

@vitejs/plugin-react (^4.2.1)
├── Plugin de React para Vite
└── 10+ sub-dependencias

eslint (^8.55.0)
├── Linter de JavaScript
└── 60+ sub-dependencias

+ herramientas adicionales
```

**Total node_modules:** ~234 paquetes

---

## 🗂️ Organización por Funcionalidad

### 🏠 Página Principal
```
src/pages/Home.jsx
├── Usa: src/components/ProductCard.jsx
├── Usa: src/data/products.js
└── Estilo: src/styles.css
```

### 🛒 Sistema de Carrito
```
src/context/CartContext.jsx
├── Usado por: src/components/Header.jsx
├── Usado por: src/pages/Cart.jsx
├── Usado por: src/pages/Home.jsx
├── Usado por: src/pages/Products.jsx
├── Usado por: src/pages/ProductDetail.jsx
└── Persistencia: LocalStorage
```

### 🎮 Catálogo de Productos
```
src/pages/Products.jsx
├── Usa: src/components/ProductCard.jsx
├── Usa: src/data/products.js
├── Usa: src/context/CartContext.jsx
└── Features: Filtros, Paginación
```

### 👨‍💼 Panel Admin
```
src/pages/Admin.jsx
├── src/pages/ProductManagement.jsx
│   └── CRUD completo de productos
└── src/pages/UserManagement.jsx
    └── CRUD completo de usuarios
```

---

## 🌐 Rutas de la Aplicación

```
/ (Home)
│
├── /productos (Products)
│   └── /producto/:id (ProductDetail)
│
├── /carrito (Cart)
│
├── /blog (Blog)
│   └── /blog/:id (BlogDetail)
│
├── /contacto (Contact)
│
├── /nosotros (About)
│
├── /login (Login)
│
├── /registro (Register)
│
└── /admin (Admin)
    ├── /admin/productos (ProductManagement)
    └── /admin/usuarios (UserManagement)
```

---

## 💾 LocalStorage Structure

```javascript
// Carrito de compras
localStorage['levelup-cart'] = [
  { id, name, price, quantity, image, ... }
]

// Usuario logueado
localStorage['levelup-user'] = {
  email, name, ...
}

// Productos (Admin)
localStorage['levelup-products'] = [
  { id, codigo, nombre, precio, stock, ... }
]

// Usuarios (Admin)
localStorage['levelup-users'] = [
  { id, run, nombre, correo, ... }
]
```

---

## 🎨 Flujo de Estilos

```
Bootstrap 5
├── Importado en: src/main.jsx
├── Clases: Container, Row, Col, Button, Card, etc.
└── Theme: Default de Bootstrap

src/styles.css
├── Variables CSS (colores, fuentes)
├── Estilos globales
├── Clases custom (.btn-gamer, .card-gamer)
└── Animaciones

Inline Styles
├── Estilos específicos en componentes
└── Overrides cuando necesario
```

---

## 🔄 Flujo de Datos

```
User Input
    ↓
Components (useState)
    ↓
Context API (CartContext)
    ↓
LocalStorage (persistencia)
    ↓
Re-render (useEffect)
    ↓
Updated UI
```

---

## 🚀 Build Output (después de npm run build)

```
dist/
├── index.html              # HTML optimizado
├── assets/
│   ├── index-[hash].js     # Bundle JavaScript
│   ├── index-[hash].css    # Bundle CSS
│   └── [imagenes optimizadas]
└── img/                    # Imágenes copiadas
```

---

## 📝 Archivos Generados Automáticamente

```
NO EDITAR:
├── node_modules/           # npm install
├── package-lock.json       # npm install
├── dist/                   # npm run build
└── .vite/                  # Cache de Vite
```

---

## 🎯 Puntos de Entrada

### Para Desarrollo
```
index.html
    ↓
<script src="/src/main.jsx">
    ↓
src/main.jsx
    ↓
src/App.jsx
    ↓
Components & Pages
```

### Para Producción (Build)
```
npm run build
    ↓
dist/index.html
    ↓
dist/assets/index-[hash].js
    ↓
Bundled & Minified App
```

---

## 📂 Carpetas Importantes

### Carpetas de Código (Editar)
- `src/` - Todo el código React
- `public/` - Archivos estáticos

### Carpetas de Config (Revisar)
- Root - Archivos de configuración

### Carpetas Generadas (No editar)
- `node_modules/` - Dependencias
- `dist/` - Build de producción

---

© 2025 Level-Up Gamer - Árbol del Proyecto
