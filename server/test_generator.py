# -*- coding: utf-8 -*-

"""Test script to verify both DOCX and PDF generators create valid files without errors."""

from generator import generate_docx_stream, generate_pdf_stream

test_data = {
    "title": "La aventura de descubrir mi camino",
    "date": "06/09/2025",
    "authors": "F Acosta / D Villasmil / N Márquez",
    "responsible_team": "Staff de la Comunidad",
    "adult_companion": "Fernando Acosta",
    "location": "Colegio Juana de Ávila",
    "duration": "2 horas y 30 minutos",
    "fee": "0 Bs.",
    "general_objective": "Realizar la primera reunión de la Comunidad de caminantes con los Scouts y Rovers del GS Paola Prince y otros jóvenes invitados...",
    "specific_objectives": [
        "Promover la integración de los participantes en la reunión a través de dinámicas.",
        "Impulsar la creación de los equipos con los participantes haciendo juegos de rotación."
    ],
    "goals": [
        "Lograr que al menos 6 jóvenes decidan quedarse en la Comunidad.",
        "Conformar al menos 2 equipos permanentes con su nombre definido."
    ],
    "indicators": [
        "Corporalidad: Disfruta la práctica de actividades físicas fuera de su entorno.",
        "Creatividad: Participa en discusiones con sus iguales y propone vías de acción."
    ],
    "ods": [
        {
            "id": 5,
            "name": "Igualdad de Género",
            "justification": "Se promueve la creación de equipos mixtos y la participación equitativa."
        },
        {
            "id": 11,
            "name": "Ciudades y Comunidades Sostenibles",
            "justification": "Promover la resolución pacífica de conflictos y la inclusión social."
        }
    ],
    "schedule": [
        {
            "time": "9:30 am",
            "activity": "Apertura: Oración, Banderas y bienvenida",
            "materials": "Banderas y Drizas",
            "in_charge": "F Acosta"
        },
        {
            "time": "10:00 am",
            "activity": "Juego Rompehielo",
            "materials": "2 cintas de tela y tiza",
            "in_charge": "N Márquez"
        }
    ],
    "descriptions": [
        {
            "title": "Apertura: Oración, Banderas y bienvenida",
            "description": "Se hace la oración del Caminante y ceremonia de banderas con todo el grupo scout."
        },
        {
            "title": "Juego Rompehielo",
            "description": "Carrera de relevo enrollando cintas y gritando el lema Siempre Adelante al terminar."
        }
    ],
    "duras": {
        "desafiante": { "value": "Sí", "reason": "Hacer el puente y sostener con fuerza implica un reto físico." },
        "util": { "value": "Sí", "reason": "Aprender nudos e integrarse rápidamente son herramientas útiles." },
        "recompensante": { "value": "Regular", "reason": "Al ser reunión introductoria la recompensa es a largo plazo." },
        "atractiva": { "value": "Sí", "reason": "La curiosidad y dinámicas de construcción captan la atención." },
        "segura": { "value": "Regular", "reason": "Físicamente seguro, pero requiere supervisión constante." }
    }
}

print("Running generator tests...")

# 1. Test DOCX
try:
    docx_stream = generate_docx_stream(test_data)
    with open("test_output.docx", "wb") as f:
        f.write(docx_stream.read())
    print("[SUCCESS] DOCX Generator works! 'test_output.docx' created.")
except Exception as e:
    print(f"[FAILED] DOCX Generator failed: {e}")

# 2. Test PDF
try:
    pdf_stream = generate_pdf_stream(test_data)
    with open("test_output.pdf", "wb") as f:
        f.write(pdf_stream.read())
    print("[SUCCESS] PDF Generator works! 'test_output.pdf' created.")
except Exception as e:
    print(f"[FAILED] PDF Generator failed: {e}")
