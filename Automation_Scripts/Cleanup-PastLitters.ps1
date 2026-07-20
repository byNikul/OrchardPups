param(
    [switch]$DryRun
)

# Self-bypass: if execution policy blocks us, re-launch with Bypass
if ($MyInvocation.MyCommand.Path) {
    $policy = Get-ExecutionPolicy -Scope Process
    if ($policy -eq 'Restricted' -or $policy -eq 'AllSigned') {
        $bypassArgs = @('-ExecutionPolicy', 'Bypass', '-File', $MyInvocation.MyCommand.Path)
        if ($DryRun) { $bypassArgs += '-DryRun' }
        Start-Process powershell -ArgumentList $bypassArgs -NoNewWindow -Wait
        exit
    }
}

# Resolve paths relative to the project root (parent of Automation_Scripts)
$projectRoot = Split-Path -Parent $PSScriptRoot
$dataFile = Join-Path $projectRoot "data.js"

if (-not (Test-Path $dataFile)) {
    Write-Host "ERROR: Could not find $dataFile" -ForegroundColor Red
    exit 1
}

$content = Get-Content $dataFile -Raw

# Match top-level object blocks in the LITTERS array.
# Each block starts with leading whitespace + '{' and ends with leading whitespace + '}' + optional comma.
# We use a balanced-braces approach: match from '    {' through to '    }' by counting brace depth.
$blockPattern = '(?ms)^[ ]{4}\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\},?'
$regexMatches = [regex]::Matches($content, $blockPattern)

$pastLitters = @()

foreach ($m in $regexMatches) {
    $block = $m.Value

    # Only process litters (which have litterName)
    if ($block -match 'litterName:') {
        # Check if this litter has any "Available" puppies
        if ($block -notmatch 'status:\s*"Available"') {
            # Extract litter ID
            $idResult = [regex]::Match($block, 'id:\s*"([^"]+)"')
            $litterId = if ($idResult.Success) { $idResult.Groups[1].Value } else { "Unknown" }

            # Extract the asset directory name from thumbnail or media src
            $dirResult = [regex]::Match($block, '(?:thumbnail|src):\s*"assets/Listings/([^/"]+)/')
            $dirName = if ($dirResult.Success) { $dirResult.Groups[1].Value } else { $null }

            $pastLitters += @{
                Block    = $block
                Id       = $litterId
                DirName  = $dirName
            }
        }
    }
}

Write-Host "========================================="
Write-Host "Orchard Pups - Past Litters Cleanup"
Write-Host "========================================="

if ($pastLitters.Count -eq 0) {
    Write-Host ""
    Write-Host "No past litters found. Nothing to do." -ForegroundColor Green
    Write-Host "========================================="
    exit 0
}

if ($DryRun) {
    Write-Host "[DRY RUN MODE] No files will be changed." -ForegroundColor Cyan
}

# Display what will be removed
foreach ($litter in $pastLitters) {
    Write-Host ""
    Write-Host "Found past litter: $($litter.Id) (No available puppies)" -ForegroundColor Yellow
    if ($litter.DirName) {
        $dirPath = Join-Path $projectRoot "assets\Listings\$($litter.DirName)"
        if (Test-Path $dirPath) {
            if ($DryRun) {
                Write-Host "  [DRY RUN] Would delete folder: assets\Listings\$($litter.DirName)" -ForegroundColor Cyan
            } else {
                Write-Host "  Will delete folder: assets\Listings\$($litter.DirName)" -ForegroundColor Red
            }
        } else {
            Write-Host "  Folder not found: assets\Listings\$($litter.DirName)" -ForegroundColor DarkGray
        }
        if ($DryRun) {
            Write-Host "  [DRY RUN] Would remove block from data.js" -ForegroundColor Cyan
        }
    } else {
        Write-Host "  Could not find media directory for $($litter.Id) in data.js!" -ForegroundColor Red
    }
}

# If not dry run, confirm before proceeding
if (-not $DryRun) {
    Write-Host ""
    $confirm = Read-Host "Proceed with removing $($pastLitters.Count) litter(s)? (y/N)"
    if ($confirm -notin @('y', 'Y', 'yes', 'Yes', 'YES')) {
        Write-Host "Cancelled. No changes made." -ForegroundColor Cyan
        exit 0
    }
}

if ($DryRun) {
    Write-Host ""
    Write-Host "========================================="
    Write-Host "Finished Dry Run. ($($pastLitters.Count) litter(s) would be removed)" -ForegroundColor Cyan
    Write-Host "========================================="
    exit 0
}

# Execute removals
$newContent = $content
$removedCount = 0

foreach ($litter in $pastLitters) {
    # Delete the asset folder
    if ($litter.DirName) {
        $dirPath = Join-Path $projectRoot "assets\Listings\$($litter.DirName)"
        if (Test-Path $dirPath) {
            Write-Host "  Deleting folder: assets\Listings\$($litter.DirName)" -ForegroundColor Red
            Remove-Item -Path $dirPath -Recurse -Force
        }
    }

    # Remove the block from data.js content
    $newContent = $newContent.Replace($litter.Block, "")
    $removedCount++
    Write-Host "  Removed block for $($litter.Id) from data.js" -ForegroundColor Green
}

# Clean up: fix trailing commas before ']' and collapse excessive blank lines
$newContent = $newContent -replace ',(\s*)\]', '$1]'
$newContent = $newContent -replace '(\r?\n){3,}', "`r`n`r`n"

# Save the updated content
Set-Content $dataFile -Value $newContent -NoNewline
Write-Host ""
Write-Host "========================================="
Write-Host "Finished! Updated data.js (Removed $removedCount litter(s))" -ForegroundColor Green
Write-Host "========================================="
