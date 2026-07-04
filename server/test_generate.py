"""Generate sample DOCX and PDF to test the institutional banner."""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from generator import generate_docx_stream, generate_pdf_stream

sample_data = {
    "title": "Caminata de Aventura - Unidad de Caminantes",
    "date": "04/07/2026",
    "authors": "Carlos Méndez, María López",
    "general_objective": "Fortalecer el trabajo en equipo y la orientación mediante actividades al aire libre.",
    "specific_objectives": [
        "Desarrollar habilidades de orientación con brújula y mapa",
        "Fomentar la cooperación entre los miembros de la patrulla"
    ],
    "goals": [
        "Que al menos 12 jóvenes participen activamente en la caminata",
        "Que cada patrulla complete el recorrido en menos de 2 horas"
    ],
    "responsible_team": "Staff de la Comunidad",
    "adult_companion": "Lic. Ana Rodríguez",
    "location": "Parque Nacional El Ávila",
    "duration": "3 horas",
    "fee": "5 Bs.",
    "indicators": [
        "Se promueve la creación de equipos mixtos",
        "Se practican habilidades de orientación",
        "Se fomenta el respeto por la naturaleza"
    ],
    "ods": [
        {"id": 4, "name": "Educación de calidad", "justification": "Se promueve el aprendizaje experiencial al aire libre."},
        {"id": 15, "name": "Vida de ecosistemas terrestres", "justification": "Se fomenta el cuidado del medio ambiente."}
    ],
    "schedule": [
        {"time": "7:00 am", "activity": "Reunión y apertura", "materials": "Drizas, Banderas", "in_charge": "C. Méndez"},
        {"time": "7:30 am", "activity": "Orientación con brújula", "materials": "Brújulas, Mapas", "in_charge": "M. López"},
        {"time": "8:30 am", "activity": "Caminata por sendero", "materials": "Mochilas, Agua", "in_charge": "C. Méndez"},
        {"time": "10:00 am", "activity": "Cierre y reflexión", "materials": "Cuadernos", "in_charge": "M. López"}
    ],
    "descriptions": [
        {"title": "Reunión y apertura", "description": "Revisión de equipo, despedida y distribución de materiales para la caminata."},
        {"title": "Orientación con brújula", "description": "Taller práctico donde cada patrulla aprende a usar la brújula y el mapa topográfico."},
        {"title": "Caminata por sendero", "description": "Recorrido de 3 km por el sendero principal, aplicando las técnicas de orientación aprendidas."},
        {"title": "Cierre y reflexión", "description": "Ronda de reflexión donde cada joven comparte lo aprendido y se realiza la despedida."}
    ],
    "duras": {
        "desafiante": {"value": "Sí", "reason": "La caminata tiene tramos de dificultad moderada."},
        "util": {"value": "Sí", "reason": "Desarrolla habilidades de orientación y trabajo en equipo."},
        "recompensante": {"value": "Sí", "reason": "Los jóvenes disfrutan del logro al completar el recorrido."},
        "atractiva": {"value": "Regular", "reason": "Depende del interés individual por actividades al aire libre."},
        "segura": {"value": "Sí", "reason": "Se cuenta con kit de primeros auxilios y adultos acompañantes."}
    }
}

# Generate DOCX
docx_stream = generate_docx_stream(sample_data)
with open("test_output3.docx", "wb") as f:
    f.write(docx_stream.getvalue())
print("DOCX generated: test_output3.docx")

# Generate PDF
pdf_stream = generate_pdf_stream(sample_data)
with open("test_output3.pdf", "wb") as f:
    f.write(pdf_stream.getvalue())
print("PDF generated: test_output3.pdf")
