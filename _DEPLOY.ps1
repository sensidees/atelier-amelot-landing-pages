# =========================================================
#  Atelier Amelot - Push initial vers GitHub
#  Repo : git@github.com:sensidees/atelier-amelot-landing-pages.git
#
#  Usage (depuis PowerShell, dans ce dossier) :
#    .\_DEPLOY.ps1
# =========================================================

$ErrorActionPreference = "Stop"

$Repo        = "atelier-amelot-landing-pages"
$RemoteUrl   = "git@github.com:sensidees/atelier-amelot-landing-pages.git"
$AuthorName  = "Mickael Olland"
$AuthorEmail = "mickael.olland@gmail.com"

# Se positionner dans le dossier du script
Set-Location -Path $PSScriptRoot

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Atelier Amelot - Deploy initial" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Repo    : $Repo" -ForegroundColor White
Write-Host "Remote  : $RemoteUrl" -ForegroundColor White
Write-Host "Chemin  : $PSScriptRoot" -ForegroundColor White
Write-Host ""

# 1. Vérif git
try {
  $gitVersion = git --version
  Write-Host "[OK] $gitVersion" -ForegroundColor Green
} catch {
  Write-Host "[ERREUR] Git n'est pas installé." -ForegroundColor Red
  exit 1
}

# 2. Nettoyage .git partiel si présent
if (Test-Path ".git") {
  Write-Host "[INFO] .git existant détecté. Nettoyage..." -ForegroundColor Yellow
  Remove-Item -Recurse -Force ".git"
}

# 3. Init
Write-Host ""
Write-Host "[1/6] git init main..." -ForegroundColor Cyan
git init -b main | Out-Null
git config user.email $AuthorEmail
git config user.name $AuthorName

# 4. Add
Write-Host "[2/6] git add ." -ForegroundColor Cyan
git add .

# 5. Commit
Write-Host "[3/6] git commit initial..." -ForegroundColor Cyan
git commit -m "feat: initial - landing page marque Stanley/Stella" | Out-Null

# 6. Remote
Write-Host "[4/6] git remote add origin..." -ForegroundColor Cyan
git remote add origin $RemoteUrl

# 7. Push
Write-Host "[5/6] git push -u origin main..." -ForegroundColor Cyan
git push -u origin main

# 8. Log
Write-Host "[6/6] git log :" -ForegroundColor Cyan
git log --oneline -3

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host " Push GitHub OK." -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Repo en ligne :" -ForegroundColor White
Write-Host "https://github.com/sensidees/atelier-amelot-landing-pages" -ForegroundColor Yellow
Write-Host ""
Write-Host "Prochaine étape : reviens dans Cowork, je connecte Vercel." -ForegroundColor White
Write-Host ""
