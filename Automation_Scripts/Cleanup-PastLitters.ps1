# Self-bypass: if execution policy blocks us, re-launch with Bypass
if ($MyInvocation.MyCommand.Path) {
    $policy = Get-ExecutionPolicy -Scope Process
    if ($policy -eq 'Restricted' -or $policy -eq 'AllSigned') {
        $args = @('-ExecutionPolicy', 'Bypass', '-File', $MyInvocation.MyCommand.Path)
        if ($DryRun) { $args += '-DryRun' }
        Start-Process powershell -ArgumentList $args -NoNewWindow -Wait
        exit
    }
}

param(
    [switch]$DryRun
)

$dataFile = "data.js"
$content = Get-Content $dataFile -Raw

# Matches a litter object block: Starts with 4 spaces and a brace, ends with 4 spaces and a brace (with optional comma)
$regex = '(?ms)^\s{4}\{\r?\n.*?\r?\n\s{4}\}(?:,)?'
$matches = [regex]::Matches($content, $regex)

$newContent = $content
$removedCount = 0

Write-Host "========================================="
Write-Host "Orchard Pups - Past Litters Cleanup"
Write-Host "========================================="
if ($DryRun) {
    Write-Host "[DRY RUN MODE] No files will be changed." -ForegroundColor Cyan
}

foreach ($match in $matches) {
    $block = $match.Value
    
    # Only process litters (which have litterName)
    if ($block -match 'litterName:') {
        # Check if this litter has any "Available" puppies
        if ($block -notmatch 'status:\s*"Available"') {
            # This is a past litter!
            
            # Extract litter ID
            $idMatch = [regex]::Match($block, 'id:\s*"([^"]+)"')
            $litterId = if ($idMatch.Success) { $idMatch.Groups[1].Value } else { "Unknown" }
            
            Write-Host ""
            Write-Host "Found past litter: $litterId (No available puppies)" -ForegroundColor Yellow
            
            # Extract the directory from thumbnail or media
            $dirMatch = [regex]::Match($block, 'src:\s*"assets/Listings/([^/"]+)/')
            if ($dirMatch.Success) {
                $dirName = $dirMatch.Groups[1].Value
                $dirPath = Join-Path $PWD "assets\Listings\$dirName"
                
                if ($DryRun) {
                    Write-Host "  [DRY RUN] Would remove block from $dataFile" -ForegroundColor Cyan
                    if (Test-Path $dirPath) {
                        Write-Host "  [DRY RUN] Would delete folder: assets\Listings\$dirName" -ForegroundColor Cyan
                    } else {
                        Write-Host "  [DRY RUN] Folder not found: assets\Listings\$dirName" -ForegroundColor DarkGray
                    }
                } else {
                    # Delete folder
                    if (Test-Path $dirPath) {
                        Write-Host "  Deleting folder: assets\Listings\$dirName" -ForegroundColor Red
                        Remove-Item -Path $dirPath -Recurse -Force
                    } else {
                        Write-Host "  Folder not found: assets\Listings\$dirName" -ForegroundColor DarkGray
                    }
                    
                    # Remove block from data.js
                    $newContent = $newContent.Replace($block, "")
                    $removedCount++
                    Write-Host "  Removed block from $dataFile" -ForegroundColor Green
                }
            } else {
                Write-Host "  Could not find media directory for $litterId in data.js!" -ForegroundColor Red
            }
        }
    }
}

Write-Host ""
Write-Host "========================================="
if (-not $DryRun -and $removedCount -gt 0) {
    # Fix potential trailing commas at the end of the array before ]
    $newContent = $newContent -replace ',\s*\]', "`r`n]"
    
    # Save the updated content
    Set-Content $dataFile -Value $newContent
    Write-Host "Finished! Updated $dataFile (Removed $removedCount litters)" -ForegroundColor Green
} elseif (-not $DryRun) {
    Write-Host "Finished! No past litters found. No changes made." -ForegroundColor Green
} else {
    Write-Host "Finished Dry Run." -ForegroundColor Cyan
}
Write-Host "========================================="
