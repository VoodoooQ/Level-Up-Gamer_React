# 🐳 Level-Up Gamer con Docker

## 🚀 Inicio Rápido (2 comandos)

### Opción 1: Docker Compose (Recomendado)

```powershell
# En el directorio del proyecto
cd C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react

# Construir y ejecutar
docker-compose up
```

**¡Listo!** Abre: **http://localhost:3000** 🎮

---

### Opción 2: Docker directo

```powershell
# Construir la imagen
docker build -t level-up-gamer .

# Ejecutar el contenedor
docker run -p 3000:3000 -v ${PWD}:/app -v /app/node_modules level-up-gamer
```

---

## 📋 Comandos Útiles

### Iniciar el proyecto
```powershell
docker-compose up
```

### Iniciar en segundo plano
```powershell
docker-compose up -d
```

### Ver logs
```powershell
docker-compose logs -f
```

### Detener
```powershell
docker-compose down
```

### Reiniciar (después de cambios)
```powershell
docker-compose restart
```

### Reconstruir (después de cambiar package.json)
```powershell
docker-compose up --build
```

---

## 🎯 Ventajas de Docker

✅ **No instalar Node.js** en tu sistema  
✅ **Aislamiento total** del proyecto  
✅ **Mismo ambiente** en cualquier PC  
✅ **Hot reload** funciona perfectamente  
✅ **Fácil de compartir** con tu equipo  

---

## 🔧 Solución de Problemas

### Puerto ocupado
```powershell
# Cambiar puerto en docker-compose.yml
ports:
  - "3001:3000"  # Usar 3001 en lugar de 3000
```

### Cambios no se reflejan
```powershell
docker-compose down
docker-compose up --build
```

### Ver qué contenedores están corriendo
```powershell
docker ps
```

### Entrar al contenedor (debug)
```powershell
docker exec -it level-up-gamer sh
```

---

## 📦 Archivos Docker Creados

- `Dockerfile` - Definición de la imagen
- `docker-compose.yml` - Orquestación
- `.dockerignore` - Archivos a ignorar

---

## 🎮 Credenciales de Prueba

**Admin:**
- Email: `admin@levelup.com`
- Password: `admin123`

**Usuario:**
- Email: `user@levelup.com`
- Password: `user123`

---

## ⚡ Inicio en 10 segundos

```powershell
cd C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react
docker-compose up
```

**Abre:** http://localhost:3000

**¡Disfruta!** 🚀🎮
