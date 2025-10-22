# 🎮 Level-Up Gamer - React + Bootstrap

## ✨ ¡Migración Completa Exitosa!

Proyecto ha sido **completamente migrado** de HTML/CSS/JavaScript vanilla a una moderna aplicación React con Bootstrap.

---

## 🎯 ¿Qué se Migró?

### ✅ Todas las Páginas (13 páginas HTML → Componentes React)

| Original HTML | Nuevo Componente React | Ruta |
|---------------|----------------------|------|
| `index.html` | `Home.jsx` | `/` |
| `Productos.html` | `Products.jsx` | `/productos` |
| `producto.html` | `ProductDetail.jsx` | `/producto/:id` |
| `carrito.html` | `Cart.jsx` | `/carrito` |
| `Blog.html` | `Blog.jsx` | `/blog` |
| `contacto.html` | `Contact.jsx` | `/contacto` |
| `nosotros.html` | `About.jsx` | `/nosotros` |
| `Inicio_Sesion.html` | `Login.jsx` | `/login` |
| `Registro.html` | `Register.jsx` | `/registro` |
| `admin.html` | `Admin.jsx` | `/admin` |
| Y más... | | |

---

## � Instalación Rápida

### 1️⃣ Instalar Node.js
Descarga desde: https://nodejs.org/ (versión LTS)

### 2️⃣ Instalar Dependencias
```bash
cd C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react
npm install
```

### 3️⃣ Ejecutar
```bash
npm run dev
```

Abrirá en: **http://localhost:3000**

---

## 📦 Tecnologías

- ⚛️ **React 18** - Framework UI moderno
- 🎨 **React Bootstrap** - Componentes UI profesionales
- 🧭 **React Router v6** - Navegación SPA
- ⚡ **Vite** - Build tool ultrarrápido
- 📦 **Context API** - Estado global
- 💾 **LocalStorage** - Persistencia

---

## � Características

### 🛒 Carrito de Compras
- Agregar/eliminar productos
- Actualizar cantidades
- Persistencia automática
- Contador en header

### 👤 Autenticación
- Login/Registro funcional
- Credenciales demo incluidas
- Sesión persistente

### 🎮 Catálogo
- 12 productos pre-cargados
- Filtrado por categoría
- Paginación (8 por página)
- Vista de detalle

### 👨‍💼 Panel Admin
- CRUD de productos
- CRUD de usuarios
- Alertas de stock

### 📝 Más...
- Blog funcional
- Formulario de contacto
- Diseño 100% responsive

---

## 🔑 Credenciales Demo

**Admin:**
- Email: `admin@levelup.com`
- Password: `admin123`

**Usuario:**
- Email: `user@levelup.com`
- Password: `user123`

---

## � Estructura

```
level-up-gamer-react/
├── public/img/         # Imágenes
├── src/
│   ├── components/     # Header, Footer, ProductCard
│   ├── pages/         # 13 páginas
│   ├── context/       # CartContext
│   ├── data/          # products.js
│   ├── App.jsx        # Router
│   └── styles.css     # Estilos globales
└── package.json
```

---

## 🛠️ Comandos

```bash
npm install      # Instalar dependencias
npm run dev      # Modo desarrollo
npm run build    # Construir producción
npm run preview  # Vista previa
```

---

## 🎨 Diseño

Mantiene la identidad visual original:
- **Colores:** Negro (#000), Azul (#1E90FF), Verde neón (#39FF14)
- **Fonts:** Orbitron (títulos), Roboto (texto)
- **Estilo:** Gamer moderno y profesional

---

## 📱 Responsive

Funciona en:
- 💻 Desktop
- 📱 Tablet
- 📱 Mobile

---

## 📊 Mejoras vs. Original

| Antes (HTML) | Ahora (React) |
|--------------|---------------|
| Multi-page | SPA |
| Con recargas | Sin recargas |
| CSS custom | Bootstrap 5 |
| Variables globales | Context API |
| Links HTML | React Router |

---

## 📈 Próximos Pasos

1. Backend API (Node.js/Express)
2. Base de datos (MongoDB/PostgreSQL)
3. Pasarela de pago
4. Testing (Jest)
5. Deploy (Vercel/Netlify)

---

## 🐛 Problemas Comunes

**npm no reconocido:** Instala Node.js

**Imágenes no cargan:** Ejecuta `.\copiar-imagenes.ps1`

**Puerto ocupado:** Vite usará otro automáticamente

---

## 📝 Documentación

Ver `INSTRUCCIONES.md` para guía detallada.


© 2025 Level-Up Gamer - Migrado a React + Bootstrap
