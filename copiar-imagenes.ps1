# Script para copiar imágenes del proyecto original
# Ejecuta este script desde PowerShell

Write-Host "🎮 Level-Up Gamer - Copiando imágenes..." -ForegroundColor Green

$sourcePath = "C:\Users\MAAXXDC\Desktop\FullStack\Full_Stack\img"
$destPath = "C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react\public\img"

# Verificar si existe la carpeta de origen
if (Test-Path $sourcePath) {
    Write-Host "✅ Carpeta de origen encontrada" -ForegroundColor Green
    
    # Crear carpeta de destino si no existe
    if (-not (Test-Path $destPath)) {
        New-Item -ItemType Directory -Path $destPath -Force | Out-Null
        Write-Host "✅ Carpeta de destino creada" -ForegroundColor Green
    }
    
    # Copiar archivos
    Copy-Item -Path "$sourcePath\*" -Destination $destPath -Recurse -Force
    Write-Host "✅ Imágenes copiadas exitosamente!" -ForegroundColor Green
    
    # Listar archivos copiados
    $files = Get-ChildItem -Path $destPath
    Write-Host "`n📁 Archivos copiados ($($files.Count)):" -ForegroundColor Cyan
    $files | ForEach-Object { Write-Host "   - $($_.Name)" -ForegroundColor White }
    
} else {
    Write-Host "❌ Error: No se encontró la carpeta de imágenes en:" -ForegroundColor Red
    Write-Host "   $sourcePath" -ForegroundColor Yellow
    Write-Host "`n💡 Asegúrate de que el proyecto original esté en la ruta correcta" -ForegroundColor Yellow
}

Write-Host "`n🚀 Siguiente paso: Ejecuta 'npm install' y luego 'npm run dev'" -ForegroundColor Cyan
