# Testing con Jasmine y Karma

Este proyecto incluye pruebas unitarias implementadas con **Jasmine** y **Karma**.

## 📋 Componentes con Tests

Se han creado tests unitarios para los siguientes componentes principales:

### 1. **ProductCard** (`src/components/ProductCard.spec.jsx`)
- ✅ Renderizado correcto del producto
- ✅ Formato de precios
- ✅ Manejo de imágenes y placeholders
- ✅ Funcionalidad de agregar al carrito
- ✅ Enlaces a detalles del producto

### 2. **CartContext** (`src/context/CartContext.spec.jsx`)
- ✅ Agregar productos al carrito
- ✅ Eliminar productos del carrito
- ✅ Actualizar cantidades
- ✅ Calcular totales
- ✅ Persistencia en localStorage
- ✅ Limpiar carrito

### 3. **Header** (`src/components/Header.spec.jsx`)
- ✅ Renderizado del logo y navegación
- ✅ Enlaces correctos
- ✅ Iconos de usuario y carrito
- ✅ Responsividad

### 4. **Cart** (`src/pages/Cart.spec.jsx`)
- ✅ Manejo de carrito vacío
- ✅ Cálculo de totales
- ✅ Formato de precios
- ✅ Navegación y breadcrumbs

## 🚀 Comandos para ejecutar tests

### Modo desarrollo (con watch)
```bash
npm test
```
Este comando ejecuta los tests y queda observando cambios en los archivos.

### Ejecución única
```bash
npm run test:single
```
Este comando ejecuta todos los tests una sola vez y termina.

## 🛠️ Tecnologías utilizadas

- **Jasmine**: Framework de testing unitario
- **Karma**: Test runner que ejecuta los tests en navegadores
- **@testing-library/react**: Utilidades para testear componentes React
- **Webpack + Babel**: Para procesar JSX y módulos ES6

## 📁 Estructura de archivos de test

Los archivos de test tienen la extensión `.spec.jsx` y se encuentran junto a los componentes que prueban:

```
src/
  components/
    ProductCard.jsx
    ProductCard.spec.jsx
    Header.jsx
    Header.spec.jsx
  context/
    CartContext.jsx
    CartContext.spec.jsx
  pages/
    Cart.jsx
    Cart.spec.jsx
```

## ⚙️ Configuración

- **karma.conf.js**: Configuración de Karma
- **babel.config.js**: Configuración de Babel para JSX

## 📊 Cobertura de tests

Los tests cubren:
- ✅ Componentes de UI principales
- ✅ Lógica de negocio (CartContext)
- ✅ Interacciones de usuario
- ✅ Formateo y validaciones
- ✅ Navegación y routing

## 🔍 Ejemplo de salida

Cuando ejecutes `npm test`, verás algo similar a:

```
START:
✔ 40 tests completed

Executed 40 of 40 SUCCESS (0.234 secs / 0.189 secs)
```

## 💡 Notas

- Los tests se ejecutan en **ChromeHeadless** por defecto (sin interfaz gráfica)
- Todos los tests son **unitarios** y prueban componentes de forma aislada
- Se utiliza **@testing-library/react** para renderizar componentes en los tests
- Los tests verifican comportamiento y no detalles de implementación
