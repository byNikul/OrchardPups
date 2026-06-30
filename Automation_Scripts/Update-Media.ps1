param(
    [switch]$DryRun
)

$dataFile = Join-Path $PWD "data.js"
$content = Get-Content $dataFile -Raw

# Matches a litter object block: Starts with 4 spaces and a brace, ends with 4 spaces and a brace (with optional comma)
$blockRegex = '(?ms)^\s{4}\{\r?\n.*?\r?\n\s{4}\}(?:,)?'
$regexMatches = [regex]::Matches($content, $blockRegex)

$newContent = $content
$totalAdded = 0

Write-Host "========================================="
Write-Host "Orchard Pups - Update Media Script"
Write-Host "========================================="
if ($DryRun) {
    Write-Host "[DRY RUN MODE] No files will be changed." -ForegroundColor Cyan
}

foreach ($match in $regexMatches) {
    $block = $match.Value
    
    # Only process litters (must have litterName)
    if ($block -match 'litterName:\s*"([^"]+)"') {
        $litterName = $matches[1]
        $litterNameMatch = [regex]::Match($block, 'litterName:\s*"([^"]+)"')
        $litterName = if ($litterNameMatch.Success) { $litterNameMatch.Groups[1].Value } else { "Unknown" }
        
        $idMatch = [regex]::Match($block, 'id:\s*"([^"]+)"')
        $litterId = if ($idMatch.Success) { $idMatch.Groups[1].Value } else { "Unknown" }
        
        # 1. Determine Folder Name
        $dirName = $null
        
        # Check thumbnail first
        $thumbMatch = [regex]::Match($block, 'thumbnail:\s*"assets/Listings/([^/"]+)/')
        if ($thumbMatch.Success) {
            $dirName = $thumbMatch.Groups[1].Value
        } else {
            # Check existing media
            $mediaPathMatch = [regex]::Match($block, 'src:\s*"assets/Listings/([^/"]+)/')
            if ($mediaPathMatch.Success) {
                $dirName = $mediaPathMatch.Groups[1].Value
            } else {
                # Fallback to stripped litter name
                $dirName = $litterName -replace '[^a-zA-Z0-9]', ''
            }
        }
        
        $dirPath = Join-Path $PWD "assets\Listings\$dirName"
        
        # 2. Extract Puppies for Labeling
        $puppies = @()
        $puppiesMatch = [regex]::Match($block, '(?s)puppies:\s*\[(.*?)\]')
        if ($puppiesMatch.Success) {
            $puppiesText = $puppiesMatch.Groups[1].Value
            $pupMatches = [regex]::Matches($puppiesText, 'name:\s*"([^"]+)".*?gender:\s*"([^"]+)"')
            foreach ($pMatch in $pupMatches) {
                $puppies += @{
                    Name = $pMatch.Groups[1].Value
                    Gender = $pMatch.Groups[2].Value
                }
            }
        }
        
        # 3. Process Directory Files
        if (Test-Path $dirPath) {
            $files = Get-ChildItem -Path $dirPath -File | Where-Object { $_.Extension -match '\.(png|jpg|jpeg|mp4|mov|webm)$' }
            
            $addedLines = @()
            
            foreach ($file in $files) {
                $filename = $file.Name
                $filenamePattern = [regex]::Escape($filename)
                
                # Check if this exact file is already in the media array
                # Extract media array to check
                $mediaBlockMatch = [regex]::Match($block, '(?s)media:\s*\[(.*?)\]')
                $isInMedia = $false
                if ($mediaBlockMatch.Success) {
                    if ($mediaBlockMatch.Groups[1].Value -match $filenamePattern) {
                        $isInMedia = $true
                    }
                }
                
                if (-not $isInMedia) {
                    # Determine Type
                    $type = if ($file.Extension -match '\.(mp4|mov|webm)$') { "video" } else { "image" }
                    
                    # Determine Label
                    $label = "$litterName Litter"
                    foreach ($pup in $puppies) {
                        # Case insensitive match of puppy name in filename
                        $safeName = [regex]::Escape($pup.Name)
                        if ($filename -imatch $safeName) {
                            $label = "$($pup.Name) ($($pup.Gender))"
                            break
                        }
                    }
                    
                    $newLine = '            { type: "' + $type + '", src: "assets/Listings/' + $dirName + '/' + $filename + '", label: "' + $label + '" }'
                    $addedLines += $newLine
                }
            }
            
            if ($addedLines.Count -gt 0) {
                Write-Host "`nFound $($addedLines.Count) new media files for litter: $litterName" -ForegroundColor Yellow
                
                # Inject into the block
                if ($mediaBlockMatch.Success) {
                    $mediaContent = $mediaBlockMatch.Groups[1].Value
                    $newMediaContent = ""
                    
                    if ($mediaContent.Trim() -eq "") {
                        # Empty array case: media: []
                        $newMediaContent = "`r`n" + ($addedLines -join ",`r`n") + "`r`n        "
                    } else {
                        # Existing array case: append to end
                        # First ensure the last item has a comma if it doesn't
                        $trimmed = $mediaContent.TrimEnd()
                        if (-not $trimmed.EndsWith(",")) {
                            $mediaContent = $mediaContent -replace '(\}(?:\s*))$', '},$1'
                        }
                        $newMediaContent = $mediaContent + "`r`n" + ($addedLines -join ",`r`n") + "`r`n        "
                    }
                    
                    $newMediaBlock = "media: [" + $newMediaContent + "]"
                    
                    if ($DryRun) {
                        foreach ($line in $addedLines) {
                            Write-Host "  [DRY RUN] Would add: $line" -ForegroundColor Cyan
                        }
                    } else {
                        $oldBlock = $block
                        # Escape regex characters in the old media block string to replace it
                        $oldMediaPattern = [regex]::Escape($mediaBlockMatch.Value)
                        # We use simple string replacement instead of regex replacement for the block
                        $newBlock = $block.Replace($mediaBlockMatch.Value, $newMediaBlock)
                        
                        $newContent = $newContent.Replace($oldBlock, $newBlock)
                        $totalAdded += $addedLines.Count
                        Write-Host "  Added $($addedLines.Count) items to data.js" -ForegroundColor Green
                    }
                }
            }
        }
    }
}

Write-Host "`n========================================="
if (-not $DryRun -and $totalAdded -gt 0) {
    Set-Content $dataFile -Value $newContent
    Write-Host "Finished! Updated $dataFile (Added $totalAdded media entries)" -ForegroundColor Green
} elseif (-not $DryRun) {
    Write-Host "Finished! No new media files found. No changes made." -ForegroundColor Green
} else {
    Write-Host "Finished Dry Run." -ForegroundColor Cyan
}
Write-Host "========================================="




