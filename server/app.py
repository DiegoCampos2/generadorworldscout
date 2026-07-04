# -*- coding: utf-8 -*-

"""Flask API Server for the Scout Activity Planner Application."""

import os
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

from data import ODS_DATA, LOGROS_DATA
from generator import generate_docx_stream, generate_pdf_stream

app = Flask(__name__)
# Enable CORS for frontend flexibility (especially when frontend is deployed on Vercel)
CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/health', methods=['GET'])
def health_check():
    """Simple health check endpoint."""
    return jsonify({"status": "healthy", "message": "Scout API is running"}), 200

@app.route('/api/ods', methods=['GET'])
def get_ods():
    """Returns the UN SDG (ODS) catalog data."""
    return jsonify(ODS_DATA), 200

@app.route('/api/logros', methods=['GET'])
def get_logros():
    """Returns the Indicadores de Logro catalog data."""
    return jsonify(LOGROS_DATA), 200

@app.route('/api/generate/docx', methods=['POST'])
def generate_docx():
    """
    Receives JSON planning data and streams a securely generated .docx file back.
    No file is saved on disk to prevent unauthorized access and file-system pollution.
    """
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        # Basic validation
        title = data.get("title", "").strip()
        if not title:
            return jsonify({"error": "El título de la actividad es requerido"}), 400
            
        # Call generator to build DOCX in memory
        stream = generate_docx_stream(data)
        
        # Clean up safe filename
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '_', '-')).rstrip()
        filename = f"Plan_de_Actividad_{safe_title.replace(' ', '_')}.docx"
        
        return send_file(
            stream,
            mimetype="application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        app.logger.error(f"Error generating Word document: {str(e)}")
        return jsonify({"error": "Ocurrió un error al generar el documento Word. Por favor, revisa la estructura de los datos."}), 500

@app.route('/api/generate/pdf', methods=['POST'])
def generate_pdf():
    """
    Receives JSON planning data and streams a securely generated PDF file back.
    No file is saved on disk to prevent unauthorized access and file-system pollution.
    """
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
            
        # Basic validation
        title = data.get("title", "").strip()
        if not title:
            return jsonify({"error": "El título de la actividad es requerido"}), 400
            
        # Call generator to build PDF in memory
        stream = generate_pdf_stream(data)
        
        # Clean up safe filename
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '_', '-')).rstrip()
        filename = f"Plan_de_Actividad_{safe_title.replace(' ', '_')}.pdf"
        
        return send_file(
            stream,
            mimetype="application/pdf",
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        app.logger.error(f"Error generating PDF document: {str(e)}")
        return jsonify({"error": "Ocurrió un error al generar el documento PDF. Por favor, revisa la estructura de los datos."}), 500

if __name__ == '__main__':
    # Production servers should run with WSGI, but Flask runner is perfect for local dev
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
