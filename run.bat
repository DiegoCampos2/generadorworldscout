@echo off
echo =======================================================================
echo           INICIANDO APLICACION COMUNIDAD DE CAMINANTES
echo =======================================================================
echo.
echo [1/2] Iniciando API Backend en Puerto 5000...
start "Backend Flask Server" cmd /k "cd server && python app.py"

echo [2/2] Iniciando Servidor Frontend en Puerto 3000...
start "Frontend Vite Server" cmd /k "npm run dev"

echo.
echo Aplicacion iniciada correctamente.
echo Frontend disponible en: http://localhost:3000
echo Backend disponible en: http://localhost:5000/api/health
echo.
echo Presione cualquier tecla para cerrar esta ventana de control...
pause > nul
