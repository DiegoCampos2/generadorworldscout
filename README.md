# Scout Activity Planner

Aplicación web para crear planes de actividades scout con generación de documentos Word y PDF.

## Características

- Formulario paso a paso para planificar actividades
- Generación de documentos Word (.docx) y PDF
- Imágenes ODS integradas
- Banner institucional Scout en cada página
- Diseño móvil responsivo

## Tecnologías

- **Frontend**: React + Vite
- **Backend**: Flask (Python)
- **Generación de documentos**: python-docx, reportlab

## Deploy en Render

1. Crear cuenta en [render.com](https://render.com)
2. Conectar tu repositorio de GitHub
3. Render detectará automáticamente el `render.yaml`
4. El backend se desplegará automáticamente

## Desarrollo Local

```bash
# Instalar dependencias
npm install
pip install -r server/requirements.txt

# Ejecutar backend
python server/app.py

# Ejecutar frontend
npm run dev
```

## Estructura

```
scout-app/
├── src/                    # Frontend React
│   ├── assets/            # Imágenes y logos
│   ├── App.jsx           # Componente principal
│   └── index.css         # Estilos
├── server/                # Backend Flask
│   ├── app.py            # API Flask
│   ├── generator.py      # Generador de documentos
│   ├── data.py           # Catálogos ODS y Logros
│   ├── logos/            # Banner e imágenes
│   └── ods_images/       # Imágenes ODS
└── render.yaml           # Configuración Render
```
