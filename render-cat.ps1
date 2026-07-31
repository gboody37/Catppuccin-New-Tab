Add-Type -AssemblyName System.Drawing

$w = 600
$h = 400
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'HighQuality'
$g.TextRenderingHint = 'AntiAliasGridFit'

# Transparent background
$g.Clear([System.Drawing.Color]::FromArgb(0, 0, 0, 0))

$font = New-Object System.Drawing.Font('Consolas', 36, [System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(205, 214, 244))
$format = New-Object System.Drawing.StringFormat
$format.Alignment = 'Center'
$format.LineAlignment = 'Near'

$lines = @(
    "  /\_/\",
    " ( . . )",
    "  | ~ |",
    [char]0x3058 + [char]0x3057 + "f_,)" + [char]0x30CE
)

$lineH = 55
$startY = ($h - $lines.Length * $lineH) / 2

for ($i = 0; $i -lt $lines.Length; $i++) {
    $y = $startY + ($i * $lineH)
    $rect = New-Object System.Drawing.RectangleF(0, $y, $w, $lineH)
    $g.DrawString($lines[$i], $font, $brush, $rect, $format)
}

$g.Dispose()
$bmp.Save("e:\Catppuccin-New-Tab\zei-cat.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Done! zei-cat.png saved."
