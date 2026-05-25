# =========================================================
#  FIX - Bascule remote SSH -> HTTPS et push
#  À lancer après échec du push SSH (clé non configurée)
# =========================================================

$ErrorActionPreference = "Stop"

Set-Location -Path $PSScriptRoot

Write-Host ""
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " FIX - Bascule SSH -> HTTPS" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Vérif qu'on est bien dans un repo git avec un commit
$head = git rev-parse --short HEAD 2>$null
if (-not $head) {
  Write-Host "[ERREUR] Pas de commit dans ce repo. Relance d'abord _DEPLOY.ps1." -ForegroundColor Red
  exit 1
}
Write-Host "[OK] Commit local existant : $head" -ForegroundColor Green

# 2. Change le remote en HTTPS
Write-Host "[1/3] git remote set-url origin (HTTPS)..." -ForegroundColor Cyan
git remote set-url origin https://github.com/sensidees/atelier-amelot-landing-pages.git
git remote -v

# 3. Push
Write-Host ""
Write-Host "[2/3] git push -u origin main..." -ForegroundColor Cyan
Write-Host "[INFO] Une fenêtre de login GitHub peut s'ouvrir." -ForegroundColor Yellow
Write-Host "       Connecte-toi avec ton compte ayant accès à l'org 'sensidees'." -ForegroundColor Yellow
Write-Host ""

git push -u origin main
$pushExitCode = $LASTEXITCODE

if ($pushExitCode -ne 0) {
  Write-Host ""
  Write-Host "==========================================" -ForegroundColor Red
  Write-Host " [ECHEC] Le push a échoué (code $pushExitCode)" -ForegroundColor Red
  Write-Host "==========================================" -ForegroundColor Red
  Write-Host ""
  Write-Host "Causes possibles :" -ForegroundColor Yellow
  Write-Host "  - Le repo distant n'existe pas encore sur github.com/sensidees" -ForegroundColor Gray
  Write-Host "  - Ton compte GitHub n'a pas les droits push sur l'org sensidees" -ForegroundColor Gray
  Write-Host "  - Le repo distant a déjà des commits (à pull/rebase avant push)" -ForegroundColor Gray
  Write-Host ""
  Write-Host "Vérifie sur : https://github.com/sensidees/atelier-amelot-landing-pages" -ForegroundColor Yellow
  exit 1
}

# 4. Log
Write-Host ""
Write-Host "[3/3] git log :" -ForegroundColor Cyan
git log --oneline -3

Write-Host ""
Write-Host "==========================================" -ForegroundColor Green
Write-Host " Push HTTPS OK." -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Repo en ligne :" -ForegroundColor White
Write-Host "https://github.com/sensidees/atelier-amelot-landing-pages" -ForegroundColor Yellow
Write-Host ""
Write-Host "Prochaine étape : vercel.com/new pour importer le repo." -ForegroundColor White
Write-Host ""
