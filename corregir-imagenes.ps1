# Script para copiar y renombrar imágenes correctamente

$origenImg = "C:\Users\MAAXXDC\Desktop\FullStack\Full_Stack\img"
$destinoImg = "C:\Users\MAAXXDC\Desktop\FullStack\level-up-gamer-react\public\img"

# Crear directorio si no existe
New-Item -ItemType Directory -Force -Path $destinoImg | Out-Null

# Copiar y renombrar imágenes
Write-Host "Copiando imágenes..." -ForegroundColor Green

# PlayStation 5
Copy-Item "$origenImg\play_5.jpg" "$destinoImg\PlayStation_5.jpg" -Force
Write-Host "✓ PlayStation 5" -ForegroundColor Cyan

# PC Gaming
Copy-Item "$origenImg\pc_Strix.png" "$destinoImg\PC_Gaming_Completo.png" -Force
Write-Host "✓ PC Gaming Completo" -ForegroundColor Cyan

# Mouse
Copy-Item "$origenImg\mouse.jpg" "$destinoImg\Mouse_Gamer_RGB.jpg" -Force
Write-Host "✓ Mouse Gamer RGB" -ForegroundColor Cyan

# Silla
Copy-Item "$origenImg\silla.jpg" "$destinoImg\Silla_Gamer_Profesional.jpg" -Force
Write-Host "✓ Silla Gamer Profesional" -ForegroundColor Cyan

# Mousepad
Copy-Item "$origenImg\mousepad.jpg" "$destinoImg\Mousepad_XXL.jpg" -Force
Write-Host "✓ Mousepad XXL" -ForegroundColor Cyan

# Audífonos
Copy-Item "$origenImg\Audifonos_Gamer_HyperX_Cloud II.jpg" "$destinoImg\Audifonos_Gamer_HyperX.jpg" -Force
Write-Host "✓ Audífonos Gamer" -ForegroundColor Cyan

# Logo
Copy-Item "$origenImg\Level-up_gamer.png" "$destinoImg\Level-up_gamer.png" -Force
Write-Host "✓ Logo Level-Up Gamer" -ForegroundColor Cyan

# Crear imágenes placeholder para productos sin imagen
$placeholderProducts = @(
    "Xbox_Series_X.jpg",
    "Nintendo_Switch_OLED.jpg",
    "Teclado_Mecanico_RGB.jpg",
    "Monitor_Gamer_27.jpg",
    "Auriculares_Inalambricos.jpg",
    "Control_DualSense.jpg"
)

Write-Host "`nCreando placeholders para productos sin imagen..." -ForegroundColor Yellow

foreach ($producto in $placeholderProducts) {
    $placeholderPath = "$destinoImg\$producto"
    
    # Verificar si ya existe
    if (-not (Test-Path $placeholderPath)) {
        # Copiar una imagen existente como placeholder (usaremos el logo)
        if (Test-Path "$origenImg\Level-up_gamer.png") {
            Copy-Item "$origenImg\Level-up_gamer.png" $placeholderPath -Force
            Write-Host "  > Placeholder creado: $producto" -ForegroundColor DarkGray
        }
    } else {
        Write-Host "  OK Ya existe: $producto" -ForegroundColor Green
    }
}

Write-Host "`n✓ ¡Proceso completado!" -ForegroundColor Green
Write-Host "`nNota: Algunos productos usan placeholders." -ForegroundColor Yellow
Write-Host "Reemplázalos con las imágenes reales cuando las tengas." -ForegroundColor Yellow
