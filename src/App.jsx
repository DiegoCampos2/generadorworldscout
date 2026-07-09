import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Compass, 
  Globe, 
  Award, 
  FileText, 
  Plus, 
  Trash2, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  ChevronDown, 
  Info,
  CheckCircle2,
  Newspaper,
  Camera,
  X,
  Calendar
} from 'lucide-react';

// --- Static image imports (Vite bundles these correctly for prod) ---
import imgInsigniaUnidad from './assets/images/Imagen1.png';
import imgPeregrino from './assets/images/Imagen2.png';
import imgPrecursor from './assets/images/Imagen3.png';
import imgViajero from './assets/images/Imagen4.png';
import imgVisionario from './assets/images/Imagen5.png';
import imgHeroBanner from './assets/images/GVLL4P1XDYwx3KPeQE4x.webp';

import odsImg01 from './assets/images/ods/ods-01.png';
import odsImg02 from './assets/images/ods/ods-02.png';
import odsImg03 from './assets/images/ods/ods-03.png';
import odsImg04 from './assets/images/ods/ods-04.png';
import odsImg05 from './assets/images/ods/ods-05.png';
import odsImg06 from './assets/images/ods/ods-06.png';
import odsImg07 from './assets/images/ods/ods-07.png';
import odsImg08 from './assets/images/ods/ods-08.png';
import odsImg09 from './assets/images/ods/ods-09.png';
import odsImg10 from './assets/images/ods/ods-10.png';
import odsImg11 from './assets/images/ods/ods-11.png';
import odsImg12 from './assets/images/ods/ods-12.png';
import odsImg13 from './assets/images/ods/ods-13.png';
import odsImg14 from './assets/images/ods/ods-14.png';
import odsImg15 from './assets/images/ods/ods-15.png';
import odsImg16 from './assets/images/ods/ods-16.png';
import odsImg17 from './assets/images/ods/ods-17.png';

const ODS_IMAGES = {
  1: odsImg01, 2: odsImg02, 3: odsImg03, 4: odsImg04,
  5: odsImg05, 6: odsImg06, 7: odsImg07, 8: odsImg08,
  9: odsImg09, 10: odsImg10, 11: odsImg11, 12: odsImg12,
  13: odsImg13, 14: odsImg14, 15: odsImg15, 16: odsImg16,
  17: odsImg17
};

// --- Tropa photos imports (fotos reales) ---
import tropaPhoto1 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM.jpeg';
import tropaPhoto2 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (1).jpeg';
import tropaPhoto3 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (2).jpeg';
import tropaPhoto4 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (3).jpeg';
import tropaPhoto5 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (4).jpeg';
import tropaPhoto6 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (5).jpeg';
import tropaPhoto7 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (6).jpeg';
import tropaPhoto8 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.36 PM (7).jpeg';
import tropaPhoto9 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM.jpeg';
import tropaPhoto10 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (1).jpeg';
import tropaPhoto11 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (2).jpeg';
import tropaPhoto12 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (3).jpeg';
import tropaPhoto13 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (4).jpeg';
import tropaPhoto14 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (5).jpeg';
import tropaPhoto15 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (6).jpeg';
import tropaPhoto16 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (7).jpeg';
import tropaPhoto17 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (8).jpeg';
import tropaPhoto18 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (9).jpeg';
import tropaPhoto19 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (10).jpeg';
import tropaPhoto20 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (11).jpeg';
import tropaPhoto21 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.35 PM (12).jpeg';
import tropaPhoto22 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.34 PM.jpeg';
import tropaPhoto23 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.34 PM (1).jpeg';
import tropaPhoto24 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.34 PM (2).jpeg';
import tropaPhoto25 from './assets/images/tropa/WhatsApp Image 2026-07-08 at 11.35.34 PM (3).jpeg';

const TROPA_PHOTOS_DEFAULT = [
  { id: 1, src: tropaPhoto1, caption: 'Tropa en acción' },
  { id: 2, src: tropaPhoto2, caption: 'Caminata grupal' },
  { id: 3, src: tropaPhoto3, caption: 'Actividad al aire libre' },
  { id: 4, src: tropaPhoto4, caption: 'Trabajo en equipo' },
  { id: 5, src: tropaPhoto5, caption: 'Aventura scout' },
  { id: 6, src: tropaPhoto6, caption: 'Convivencia' },
  { id: 7, src: tropaPhoto7, caption: 'Exploración' },
  { id: 8, src: tropaPhoto8, caption: 'Campamento' },
  { id: 9, src: tropaPhoto9, caption: 'Juegos de patrulla' },
  { id: 10, src: tropaPhoto10, caption: 'Reflexión grupal' },
  { id: 11, src: tropaPhoto11, caption: 'Siempre adelante' },
  { id: 12, src: tropaPhoto12, caption: 'Actividad de unidad' },
  { id: 13, src: tropaPhoto13, caption: 'Caminantes en marcha' },
  { id: 14, src: tropaPhoto14, caption: 'Trabajo manual' },
  { id: 15, src: tropaPhoto15, caption: 'Vida en la naturaleza' },
  { id: 16, src: tropaPhoto16, caption: 'Espiritualidad scout' },
  { id: 17, src: tropaPhoto17, caption: 'Servicio comunitario' },
  { id: 18, src: tropaPhoto18, caption: 'Aprendizaje conjunto' },
  { id: 19, src: tropaPhoto19, caption: 'Momentos compartidos' },
  { id: 20, src: tropaPhoto20, caption: 'Habilidades scout' },
  { id: 21, src: tropaPhoto21, caption: 'Buena acción' },
  { id: 22, src: tropaPhoto22, caption: 'Patrulla en marcha' },
  { id: 23, src: tropaPhoto23, caption: 'Conoce tu entorno' },
  { id: 24, src: tropaPhoto24, caption: 'Crecimiento personal' },
  { id: 25, src: tropaPhoto25, caption: 'Comunidad unida' },
];

// --- Firebase imports ---
import { db, storage } from './firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// --- Novedades: Ahora se gestionan desde Firebase Firestore ---
// Las noticias se cargan dinámicamente desde Firestore en NoticiasView.
// Las fotos de la galería se cargan dinámicamente en TropaGallery desde Firebase Storage.
// Las fotos locales (TROPA_PHOTOS_DEFAULT) sirven como respaldo inicial.

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  
  // Catalog Data from Backend (or local fallback if server is starting/down)
  const [odsCatalog, setOdsCatalog] = useState([]);
  const [logrosCatalog, setLogrosCatalog] = useState({});
  const [loading, setLoading] = useState(true);

  // Form State for Generator
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    dateISO: new Date().toISOString().split('T')[0],
    date: new Date().toLocaleDateString('es-ES'),
    authors: '',
    responsible_team: '',
    adult_companion: '',
    location: '',
    durationHours: '2',
    durationMinutes: '30',
    duration: '2 horas 30 minutos',
    fee: '0 Bs.',
    general_objective: '',
    specific_objectives: [''],
    goals: [''],
    indicators: [], // string list
    ods: [], // { id, name, justification }
    schedule: [{ time: '', activity: '', materials: '', in_charge: '' }],
    descriptions: [{ title: '', description: '' }],
    duras: {
      desafiante: { value: 'Regular', reason: '' },
      util: { value: 'Regular', reason: '' },
      recompensante: { value: 'Regular', reason: '' },
      atractiva: { value: 'Regular', reason: '' },
      segura: { value: 'Regular', reason: '' }
    }
  });

  // Sync dateISO to formatted date
  useEffect(() => {
    if (formData.dateISO) {
      const [y, m, d] = formData.dateISO.split('-');
      setFormData(prev => ({ ...prev, date: `${d}/${m}/${y}` }));
    }
  }, [formData.dateISO]);

  // Sync duration fields
  useEffect(() => {
    const h = parseInt(formData.durationHours) || 0;
    const m = parseInt(formData.durationMinutes) || 0;
    const parts = [];
    if (h > 0) parts.push(`${h} hora${h !== 1 ? 's' : ''}`);
    if (m > 0) parts.push(`${m} minuto${m !== 1 ? 's' : ''}`);
    setFormData(prev => ({ ...prev, duration: parts.join(' y ') || '0 minutos' }));
  }, [formData.durationHours, formData.durationMinutes]);

  // Toggle accordion area
  const toggleArea = (area) => {
    setExpandedAreas(prev => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });
  };

  // UI State
  const [expandedAreas, setExpandedAreas] = useState(new Set());
  const [logroSearch, setLogroSearch] = useState('');

  // Load catalogs on mount
  useEffect(() => {
    const fetchCatalogs = async () => {
      try {
        // Render fallback url or local server
        const apiHost = import.meta.env.VITE_API_URL || '';
        const [odsRes, logrosRes] = await Promise.all([
          fetch(`${apiHost}/api/ods`),
          fetch(`${apiHost}/api/logros`)
        ]);
        
        if (odsRes.ok && logrosRes.ok) {
          const odsData = await odsRes.json();
          const logrosData = await logrosRes.json();
          setOdsCatalog(odsData);
          setLogrosCatalog(logrosData);
        }
      } catch (err) {
        console.warn("Could not connect to Flask backend. Loading local backup...");
        // Fallback local structures if API is unreachable during static build
        import('./localCatalog').then(module => {
          setOdsCatalog(module.LOCAL_ODS);
          setLogrosCatalog(module.LOCAL_LOGROS);
        });
      } finally {
        setLoading(false);
      }
    };
    fetchCatalogs();
  }, []);

  // Sync dyn descriptions with schedule activities
  useEffect(() => {
    const newDescriptions = formData.schedule
      .filter(item => item.activity.trim() !== '')
      .map(item => {
        const existing = formData.descriptions.find(d => d.title === item.activity);
        return {
          title: item.activity,
          description: existing ? existing.description : ''
        };
      });
    
    // Only update if changes occurred to prevent infinite render loop
    const hasChanged = JSON.stringify(newDescriptions) !== JSON.stringify(formData.descriptions);
    if (hasChanged) {
      setFormData(prev => ({ ...prev, descriptions: newDescriptions }));
    }
  }, [formData.schedule]);

  // Handler helpers
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => {
      const arr = [...prev[field]];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => {
      const arr = [...prev[field]];
      arr.splice(index, 1);
      return { ...prev, [field]: arr };
    });
  };

  const handleScheduleChange = (index, field, value) => {
    setFormData(prev => {
      const sched = [...prev.schedule];
      sched[index][field] = value;
      return { ...prev, schedule: sched };
    });
  };

  const addScheduleItem = () => {
    setFormData(prev => ({
      ...prev,
      schedule: [...prev.schedule, { time: '', activity: '', materials: '', in_charge: '' }]
    }));
  };

  const removeScheduleItem = (index) => {
    setFormData(prev => {
      const sched = [...prev.schedule];
      sched.splice(index, 1);
      return { ...prev, schedule: sched };
    });
  };

  const handleDescriptionChange = (index, val) => {
    setFormData(prev => {
      const desc = [...prev.descriptions];
      desc[index].description = val;
      return { ...prev, descriptions: desc };
    });
  };

  const handleDurasChange = (key, field, val) => {
    setFormData(prev => ({
      ...prev,
      duras: {
        ...prev.duras,
        [key]: {
          ...prev.duras[key],
          [field]: val
        }
      }
    }));
  };

  const toggleIndicator = (indicator) => {
    setFormData(prev => {
      const indicators = prev.indicators.includes(indicator)
        ? prev.indicators.filter(i => i !== indicator)
        : [...prev.indicators, indicator];
      return { ...prev, indicators };
    });
  };

  const toggleOds = (odsId, odsName) => {
    setFormData(prev => {
      const exists = prev.ods.find(o => o.id === odsId);
      const ods = exists
        ? prev.ods.filter(o => o.id !== odsId)
        : [...prev.ods, { id: odsId, name: odsName, justification: '' }];
      return { ...prev, ods };
    });
  };

  const handleOdsJustification = (odsId, val) => {
    setFormData(prev => {
      const ods = prev.ods.map(o => o.id === odsId ? { ...o, justification: val } : o);
      return { ...prev, ods };
    });
  };

  // Submit and download docx file
  const [generating, setGenerating] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const generateDocument = async () => {
    setGenerating(true);
    setSubmitError('');
    try {
      const apiHost = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiHost}/api/generate/docx`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al generar el documento Word');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      const safeTitle = formData.title.replace(/[^a-zA-Z0-9]/g, '_');
      a.download = `Planilla_${safeTitle || 'Actividad'}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setSubmitError(err.message || 'Error de conexión con el servidor. Inténtalo de nuevo.');
    } finally {
      setGenerating(false);
    }
  };

  const generatePdfDocument = async () => {
    setGenerating(true);
    setSubmitError('');
    try {
      const apiHost = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiHost}/api/generate/pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Error al generar el documento PDF');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      
      const safeTitle = formData.title.replace(/[^a-zA-Z0-9]/g, '_');
      a.download = `Planilla_${safeTitle || 'Actividad'}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setSubmitError(err.message || 'Error de conexión con el servidor. Inténtalo de nuevo.');
    } finally {
      setGenerating(false);
    }
  };

  // UI Component Nav View Controllers
  return (
    <div>
      {/* HEADER LOGO */}
      <header className="glass-panel" style={{ margin: '15px 15px 5px 15px', borderRadius: '15px', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <img 
          src="/wsc-logo.svg" 
          alt="World Scouting" 
          style={{ height: '35px', filter: 'brightness(0) invert(1)' }} 
        />
        <div style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '10px' }}>
          <h4 style={{ fontSize: '14px', letterSpacing: '0.05em', color: '#fff', textTransform: 'uppercase' }}>Caminantes</h4>
          <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>GS Paola Prince</p>
        </div>
      </header>

      {/* APP ROOT BODY */}
      <main className="app-container">
        
        {/* TAB 1: INICIO */}
        {activeTab === 'inicio' && (
          <div className="animate-fade-in-up">
            <div className="glass-panel-accent" style={{ textAlign: 'center', padding: '30px 20px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '15px', display: 'inline-flex', padding: '10px', background: 'rgba(98, 37, 153, 0.1)', borderRadius: '50%' }}>
                <img src={imgInsigniaUnidad} alt="Rosa de los Vientos" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
              </div>
              <h1 style={{ fontSize: '28px', color: '#fff', marginBottom: '10px', fontFamily: 'var(--font-hero)' }}>
                Comunidad de Caminantes
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '5px', fontWeight: '500' }}>
                “La aventura de descubrir mi camino”
              </p>
              <div style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--primary-scout)', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', marginTop: '10px' }}>
                ¡SIEMPRE ADELANTE!
              </div>
            </div>

            <div className="glass-panel" style={{ marginBottom: '20px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ 
                backgroundImage: `url(${imgHeroBanner})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                height: '140px', 
                borderRadius: '12px', 
                marginBottom: '15px', 
                opacity: '0.8',
                border: '1px solid rgba(255,255,255,0.1)'
              }}></div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>Bienvenido Caminante</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '15px' }}>
                Este portal interactivo te ayudará a integrarte a nuestra <strong>Comunidad, conocer</strong> las metas globales de los ODS y los Indicadores de Logro de tu <strong>progresión personal, además te servirá como herramienta para que puedas completar automáticamente una planilla de planificación de actividades.</strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button className="btn-accent" onClick={() => setActiveTab('primeros-pasos')}>
                  Los Primeros Pasos <ArrowRight size={16} />
                </button>
                <button className="btn-primary" onClick={() => setActiveTab('planilla')}>
                  Crear Planilla <FileText size={16} />
                </button>
              </div>
            </div>

            <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Info size={32} style={{ color: 'var(--river-blue)', flexShrink: 0 }} />
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                <strong>Lema de Unidad:</strong> El lema es <em>“Siempre Adelante”</em>. Úsalo habitualmente para saludar o responder afirmativamente.
              </div>
            </div>

            {/* GALERÍA DE FOTOS DE LA TROPA */}
            <TropaGallery />
          </div>
        )}

        {/* TAB 2: PRIMEROS PASOS */}
        {activeTab === 'primeros-pasos' && <PrimerosPasosView onNavigate={setActiveTab} />}

        {/* TAB 3: ODS CATALOG */}
        {activeTab === 'ods' && (
          <div className="animate-fade-in-up">
            <h2 className="section-title">Objetivos de Desarrollo Sostenible</h2>
            <p className="section-subtitle">Aprende sobre los 17 ODS de las Naciones Unidas para vincularlos en tus planillas de actividades.</p>
            {loading ? <p style={{ textAlign: 'center' }}>Cargando catálogo...</p> : <OdsExplorer catalog={odsCatalog} />}
          </div>
        )}

        {/* TAB 4: LOGROS CATALOG */}
        {activeTab === 'logros' && (
          <div className="animate-fade-in-up">
            <h2 className="section-title">Indicadores de Logro</h2>
            <p className="section-subtitle">Consulta las conductas indicadas que guían tu Progresión Personal.</p>
            {loading ? <p style={{ textAlign: 'center' }}>Cargando catálogo...</p> : <LogrosExplorer catalog={logrosCatalog} />}
          </div>
        )}

        {/* TAB 5: NOTICIAS */}
        {activeTab === 'noticias' && <NoticiasView />}

        {/* TAB 6: GENERADOR FORM */}
        {activeTab === 'planilla' && (
          <div className="animate-fade-in-up">
            <h2 className="section-title">Planilla de Actividades</h2>
            <p className="section-subtitle">Paso {formStep} de 5: {
              formStep === 1 ? 'Datos Generales' : 
              formStep === 2 ? 'Objetivos y Metas' : 
              formStep === 3 ? 'Impacto (ODS y Logros)' : 
              formStep === 4 ? 'Cronograma y Dinámicas' : 'Escala DURAS'
            }</p>
            
            {/* PROGRESS DOTS */}
            <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '20px' }}>
              {[1, 2, 3, 4, 5].map(step => (
                <div 
                  key={step} 
                  style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%', 
                    backgroundColor: formStep >= step ? 'var(--river-blue)' : 'rgba(255,255,255,0.2)',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </div>

            {/* FORM STEP ROUTING */}
            <div className="glass-panel" style={{ marginBottom: '20px' }}>
              {formStep === 1 && (
                <div className="animate-fade-in-up">
                  <h4 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Paso 1: Información de Identificación</h4>
                  <div className="form-group">
                    <label className="form-label">Título de Programa Scout</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ej. La aventura de descubrir mi camino"
                      value={formData.title} 
                      onChange={e => handleInputChange('title', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Fecha de la Actividad</label>
                    <input 
                      type="date" 
                      lang="es"
                      className="form-input" 
                      value={formData.dateISO} 
                      onChange={e => handleInputChange('dateISO', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Autor(es)</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ej. F Acosta / D Villasmil"
                      value={formData.authors} 
                      onChange={e => handleInputChange('authors', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Equipo Encargado</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ej. Apolo 11 / Desmond Doss / Staff"
                      value={formData.responsible_team} 
                      onChange={e => handleInputChange('responsible_team', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Adulto Acompañante</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ej. Fernando Acosta"
                      value={formData.adult_companion} 
                      onChange={e => handleInputChange('adult_companion', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Lugar de Reunión</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Ej. Colegio Juana de Ávila"
                      value={formData.location} 
                      onChange={e => handleInputChange('location', e.target.value)}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div className="form-group">
                      <label className="form-label">Duración</label>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <select 
                          className="form-input form-select" 
                          value={formData.durationHours} 
                          onChange={e => handleInputChange('durationHours', e.target.value)}
                          style={{ flex: 1 }}
                        >
                          {[...Array(25)].map((_, i) => (
                            <option key={i} value={i}>{i} {i === 1 ? 'hora' : 'horas'}</option>
                          ))}
                        </select>
                        <select 
                          className="form-input form-select" 
                          value={formData.durationMinutes} 
                          onChange={e => handleInputChange('durationMinutes', e.target.value)}
                          style={{ flex: 1 }}
                        >
                          {Array.from({length: 60}, (_, i) => (
                            <option key={i} value={i}>{String(i).padStart(2, '0')} min</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Cuota</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Ej. 0 Bs. / 10 USD"
                        value={formData.fee} 
                        onChange={e => handleInputChange('fee', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="animate-fade-in-up">
                  <h4 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Paso 2: Formulación Pedagógica</h4>
                  
                  <div className="form-group">
                    <label className="form-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      Objetivo General <Info size={14} style={{ color: 'var(--river-blue)' }} />
                    </label>
                    <div className="tip-card">
                      La redacción debe estar en verbo infinitivo (ar, er, ir), tiene que responder ¿Qué? ¿Quiénes? ¿Cómo? ¿Para qué?
                    </div>
                    <textarea 
                      className="form-textarea" 
                      placeholder="Ej. Realizar una primera reunión introductoria para que los caminantes conozcan..."
                      value={formData.general_objective} 
                      onChange={e => handleInputChange('general_objective', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Objetivos específicos</span>
                      <button className="btn-secondary" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={() => addArrayItem('specific_objectives')}>
                        <Plus size={12} /> Agregar
                      </button>
                    </label>
                    <div className="tip-card">
                      Los objetivos específicos son los pasos necesarios para hacer un aporte significativo al cumplimiento del objetivo general, siguen la misma redacción que un objetivo general (qué, quiénes, cómo, para qué).
                    </div>
                    {formData.specific_objectives.map((obj, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder={`Objetivo específico ${idx + 1}`}
                          value={obj} 
                          onChange={e => handleArrayChange('specific_objectives', idx, e.target.value)}
                        />
                        {formData.specific_objectives.length > 1 && (
                          <button className="btn-secondary" style={{ padding: '10px', background: 'rgba(255, 82, 82, 0.1)', borderColor: 'rgba(255, 82, 82, 0.3)' }} onClick={() => removeArrayItem('specific_objectives', idx)}>
                            <Trash2 size={16} style={{ color: 'var(--fire-red)' }} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="form-group">
                    <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>Metas (Resultados Medibles y Cuantificables)</span>
                      <button className="btn-secondary" style={{ padding: '4px 10px', fontSize: '11px' }} onClick={() => addArrayItem('goals')}>
                        <Plus size={12} /> Agregar
                      </button>
                    </label>
                    <div className="tip-card">
                      Una meta es un resultado deseado que, como autor de tu programa, planeas y te comprometes a lograr, la diferencia clave que tiene una meta con un objetivo (general o específico), es que una meta es cuantificable. Eso quiere decir que se puede medir o expresar con números.
                    </div>
                    {formData.goals.map((meta, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder={`Meta cuantificable ${idx + 1} (Ej. Lograr que al menos 8 jóvenes asistan)`}
                          value={meta} 
                          onChange={e => handleArrayChange('goals', idx, e.target.value)}
                        />
                        {formData.goals.length > 1 && (
                          <button className="btn-secondary" style={{ padding: '10px', background: 'rgba(255, 82, 82, 0.1)', borderColor: 'rgba(255, 82, 82, 0.3)' }} onClick={() => removeArrayItem('goals', idx)}>
                            <Trash2 size={16} style={{ color: 'var(--fire-red)' }} />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="animate-fade-in-up">
                  <h4 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Paso 3: Impacto (ODS y Logros)</h4>
                  
                  {/* INDICATORS SECTION */}
                  <div className="form-group">
                    <label className="form-label">Selección de Indicadores de Logro</label>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      Elige los indicadores de tu progresión que se trabajarán en esta actividad.
                    </p>
                    
                    <input 
                      type="search" 
                      className="form-input" 
                      placeholder="Buscar indicador..." 
                      value={logroSearch} 
                      onChange={e => setLogroSearch(e.target.value)}
                      style={{ marginBottom: '10px', fontSize: '13px' }}
                    />
                    
                    <div style={{ border: '1px solid var(--glass-border)', borderRadius: '10px', overflow: 'hidden', background: 'rgba(21, 2, 38, 0.4)' }}>
                      {loading ? <p style={{ padding: '12px', textAlign: 'center' }}>Cargando logros...</p> : 
                        Object.keys(logrosCatalog).map(area => {
                          const expanded = expandedAreas.has(area);
                          const filteredLogros = logroSearch
                            ? logrosCatalog[area].filter(l => l.toLowerCase().includes(logroSearch.toLowerCase()))
                            : logrosCatalog[area];
                          const selectedCount = logrosCatalog[area].filter(l => formData.indicators.includes(`${area}: ${l}`)).length;
                          if (logroSearch && filteredLogros.length === 0) return null;
                          return (
                            <div key={area}>
                              <div 
                                onClick={() => toggleArea(area)}
                                style={{ 
                                  display: 'flex', 
                                  justifyContent: 'space-between', 
                                  alignItems: 'center', 
                                  padding: '12px 14px', 
                                  borderBottom: '1px solid var(--glass-border)', 
                                  cursor: 'pointer',
                                  background: expanded ? 'rgba(98, 37, 153, 0.12)' : 'transparent'
                                }}
                              >
                                <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#fff' }}>{area}</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  {selectedCount > 0 && (
                                    <span style={{ fontSize: '11px', background: 'var(--river-blue)', color: '#000', borderRadius: '10px', padding: '2px 8px', fontWeight: 'bold' }}>
                                      {selectedCount}
                                    </span>
                                  )}
                                  <ChevronDown size={16} style={{ color: 'var(--text-muted)', transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                                </div>
                              </div>
                              {expanded && (
                                <div style={{ padding: '8px 10px' }}>
                                  {(logroSearch ? filteredLogros : logrosCatalog[area]).map((logro, idx) => {
                                    const isChecked = formData.indicators.includes(`${area}: ${logro}`);
                                    return (
                                      <div 
                                        key={idx} 
                                        onClick={() => toggleIndicator(`${area}: ${logro}`)}
                                        style={{ 
                                          padding: '8px 10px', 
                                          borderRadius: '6px', 
                                          background: isChecked ? 'rgba(98, 37, 153, 0.25)' : 'transparent',
                                          border: `1px solid ${isChecked ? 'var(--primary-scout)' : 'transparent'}`,
                                          fontSize: '12px', 
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '8px',
                                          marginBottom: '4px'
                                        }}
                                      >
                                        <div style={{ 
                                          width: '14px', 
                                          height: '14px', 
                                          borderRadius: '3px', 
                                          border: '1.5px solid var(--text-muted)', 
                                          background: isChecked ? 'var(--river-blue)' : 'transparent',
                                          borderColor: isChecked ? 'var(--river-blue)' : 'var(--text-muted)',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          flexShrink: 0
                                        }}>
                                          {isChecked && <div style={{ width: '6px', height: '6px', backgroundColor: '#000', borderRadius: '50%' }} />}
                                        </div>
                                        <span style={{ color: isChecked ? '#fff' : 'var(--text-secondary)' }}>{logro}</span>
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>

                  {/* ODS SECTION */}
                  <div className="form-group">
                    <label className="form-label">Vincular Objetivos de Desarrollo Sostenible (ODS)</label>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      Pulsa para seleccionar un ODS y escribe brevemente la justificación pedagógica de su impacto en la actividad.
                    </p>
                    
                    <div className="ods-grid" style={{ marginBottom: '15px' }}>
                      {loading ? <p>Cargando ODS...</p> : 
                        odsCatalog.map(ods => {
                          const isSelected = formData.ods.some(o => o.id === ods.id);
                          return (
                            <div 
                              key={ods.id}
                              onClick={() => toggleOds(ods.id, ods.name)}
                              style={{ 
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                borderRadius: '8px',
                                border: `2px solid ${isSelected ? 'var(--river-blue)' : 'transparent'}`,
                                background: isSelected ? 'rgba(0, 141, 168, 0.15)' : 'rgba(255,255,255,0.03)',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                overflow: 'hidden'
                              }}
                            >
                              <img 
                                src={ODS_IMAGES[ods.id]}
                                alt={ods.name}
                                style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: '6px', filter: isSelected ? 'none' : 'grayscale(30%)' }}
                              />
                            </div>
                          );
                        })
                      }
                    </div>

                    {/* ODS Justifications */}
                    {formData.ods.map(selectedOds => (
                      <div key={selectedOds.id} className="animate-fade-in-up" style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px dashed var(--glass-border)', borderRadius: '10px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <img 
                            src={ODS_IMAGES[selectedOds.id]}
                            style={{ width: '22px', height: '22px', borderRadius: '3px' }} 
                            alt=""
                          />
                          <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--river-blue)' }}>Justificación ODS {selectedOds.id}: {selectedOds.name}</span>
                        </div>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Ej. Se promueve la creación de equipos mixtos y la toma de decisiones compartida..."
                          value={selectedOds.justification} 
                          onChange={e => handleOdsJustification(selectedOds.id, e.target.value)}
                        />
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {formStep === 4 && (
                <div className="animate-fade-in-up">
                  <h4 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Paso 4: Cronograma del Programa</h4>
                  
                  <div className="form-group">
                    <span style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--text-secondary)', display: 'block', marginBottom: '10px' }}>Cronograma de Actividades</span>
                    
                    {formData.schedule.map((item, idx) => (
                      <div key={idx} style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', borderRadius: '12px', marginBottom: '12px', position: 'relative' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '11px', color: 'var(--river-blue)', fontWeight: 'bold' }}># Bloque {idx + 1}</span>
                          {formData.schedule.length > 1 && (
                            <button 
                              onClick={() => removeScheduleItem(idx)}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fire-red)', display: 'flex', alignItems: 'center' }}
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                        
                        <div className="time-select-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px', marginBottom: '10px' }}>
                          <div>
                            <label style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Hora</label>
                            <select 
                              className="form-select" 
                              value={item.time.split(':')[0] || '9'}
                              onChange={e => {
                                const min = item.time.split(':')[1] || '00';
                                handleScheduleChange(idx, 'time', `${e.target.value}:${min}`);
                              }}
                            >
                              {['1','2','3','4','5','6','7','8','9','10','11','12'].map(h => (
                                <option key={h} value={h}>{h}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Min</label>
                            <select 
                              className="form-select" 
                              value={item.time.split(':')[1] || '00'}
                              onChange={e => {
                                const hour = item.time.split(':')[0] || '9';
                                handleScheduleChange(idx, 'time', `${hour}:${e.target.value}`);
                              }}
                            >
                              {Array.from({length: 60}, (_, i) => String(i).padStart(2, '0')).map(m => (
                                <option key={m} value={m}>{m}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Periodo</label>
                            <select 
                              className="form-select" 
                              value={item.time.toLowerCase().includes('pm') ? 'pm' : 'am'}
                              onChange={e => {
                                const parts = item.time.replace(/[ap]m/gi, '').trim();
                                handleScheduleChange(idx, 'time', `${parts} ${e.target.value}`);
                              }}
                            >
                              <option value="am">AM</option>
                              <option value="pm">PM</option>
                            </select>
                          </div>
                        </div>
                        
                        <div style={{ marginBottom: '10px' }}>
                          <label style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Nombre de la Actividad</label>
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder="Ej. Apertura" 
                            value={item.activity} 
                            onChange={e => handleScheduleChange(idx, 'activity', e.target.value)}
                          />
                        </div>

                        {/* Inline description */}
                        {formData.descriptions[idx] && (
                          <div style={{ marginBottom: '10px' }}>
                            <label className="form-label" style={{ fontSize: '11px', color: 'var(--river-blue)' }}>Descripción de: {formData.descriptions[idx].title}</label>
                            <textarea 
                              className="form-textarea" 
                              placeholder="Describe detalladamente las reglas y propósitos del juego..."
                              style={{ minHeight: '70px', fontSize: '12px' }}
                              value={formData.descriptions[idx].description} 
                              onChange={e => handleDescriptionChange(idx, e.target.value)}
                            />
                          </div>
                        )}
                        
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                          <div>
                            <label style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Materiales</label>
                            <input 
                              type="text" 
                              className="form-input" 
                              placeholder="Ej. Drizas y Banderas" 
                              value={item.materials} 
                              onChange={e => handleScheduleChange(idx, 'materials', e.target.value)}
                            />
                          </div>
                          <div>
                            <label style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Encargado</label>
                            <input 
                              type="text" 
                              className="form-input" 
                              placeholder="Ej. F Acosta" 
                              value={item.in_charge} 
                              onChange={e => handleScheduleChange(idx, 'in_charge', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button className="btn-secondary" style={{ width: '100%', padding: '10px', fontSize: '13px', marginTop: '4px' }} onClick={addScheduleItem}>
                      <Plus size={16} /> Agregar Actividad
                    </button>
                  </div>

                </div>
              )}

              {formStep === 5 && (
                <div className="animate-fade-in-up">
                  <h4 style={{ marginBottom: '15px', color: '#fff', fontSize: '16px' }}>Paso 5: Evaluación DURAS</h4>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                    Toda actividad de programa debe cumplir con la escala DURAS (Desafiante, Útil, Recompensante, Atractiva, Segura). Califica cada criterio y justifica tu puntuación.
                  </p>
                  
                  {['desafiante', 'util', 'recompensante', 'atractiva', 'segura'].map((key) => {
                    const titles = {
                      desafiante: 'Desafiante (Reto físico/intelectual)',
                      util: 'Útil (Propósito educativo o social)',
                      recompensante: 'Recompensante (Satisfacción final)',
                      atractiva: 'Atractiva (Interés de los jóvenes)',
                      segura: 'Segura (Prevención de riesgos)'
                    };
                    const item = formData.duras[key];
                    return (
                      <div key={key} style={{ padding: '12px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', borderRadius: '12px', marginBottom: '15px' }}>
                        <label className="form-label" style={{ color: '#fff' }}>{titles[key]}</label>
                        
                        {/* Radio select */}
                        <div style={{ display: 'flex', gap: '15px', margin: '8px 0 12px 0' }}>
                          {['Sí', 'Regular', 'No'].map(val => (
                            <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', cursor: 'pointer' }}>
                              <input 
                                type="radio" 
                                name={`duras_${key}`} 
                                checked={item.value === val} 
                                onChange={() => handleDurasChange(key, 'value', val)}
                              />
                              <span>{val}</span>
                            </label>
                          ))}
                        </div>
                        
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="Justificación del criterio..." 
                          value={item.reason} 
                          onChange={e => handleDurasChange(key, 'reason', e.target.value)}
                        />
                      </div>
                    );
                  })}

                  {submitError && (
                    <div style={{ padding: '12px', background: 'rgba(255, 82, 82, 0.1)', border: '1px solid var(--fire-red)', color: 'var(--fire-red)', borderRadius: '10px', fontSize: '13px', marginBottom: '15px' }}>
                      {submitError}
                    </div>
                  )}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button 
                      className="btn-accent" 
                      style={{ width: '100%', padding: '16px' }} 
                      onClick={generateDocument}
                      disabled={generating || !formData.title}
                    >
                      {generating ? 'Generando...' : 'Generar Planilla (.docx)'}
                      <Download size={18} />
                    </button>
                    <button 
                      className="btn-primary" 
                      style={{ width: '100%', padding: '16px' }} 
                      onClick={generatePdfDocument}
                      disabled={generating || !formData.title}
                    >
                      {generating ? 'Generando...' : 'Generar Planilla (.pdf)'}
                      <Download size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* BUTTON NAVIGATION FOR WIZARD */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
              {formStep > 1 && (
                <button className="btn-secondary" style={{ width: '40%' }} onClick={() => setFormStep(prev => prev - 1)}>
                  <ArrowLeft size={16} /> Atrás
                </button>
              )}
              {formStep < 5 ? (
                <button className="btn-primary" style={{ width: formStep === 1 ? '100%' : '60%' }} onClick={() => setFormStep(prev => prev + 1)}>
                  Siguiente <ArrowRight size={16} />
                </button>
              ) : (
                <div style={{ width: '40%' }} />
              )}
            </div>

          </div>
        )}

      </main>

      {/* MOBILE BAR NAVIGATION */}
      <nav className="mobile-nav">
        <button className={`nav-item ${activeTab === 'inicio' ? 'active' : ''}`} onClick={() => setActiveTab('inicio')}>
          <Home size={18} />
          <span>Inicio</span>
        </button>
        <button className={`nav-item ${activeTab === 'primeros-pasos' ? 'active' : ''}`} onClick={() => setActiveTab('primeros-pasos')}>
          <Compass size={18} />
          <span>Pasos</span>
        </button>
        <button className={`nav-item ${activeTab === 'ods' ? 'active' : ''}`} onClick={() => setActiveTab('ods')}>
          <Globe size={18} />
          <span>ODS</span>
        </button>
        <button className={`nav-item ${activeTab === 'logros' ? 'active' : ''}`} onClick={() => setActiveTab('logros')}>
          <Award size={18} />
          <span>Logros</span>
        </button>
        <button className={`nav-item ${activeTab === 'noticias' ? 'active' : ''}`} onClick={() => setActiveTab('noticias')}>
          <Newspaper size={18} />
          <span>Noticias</span>
        </button>
        <button className={`nav-item ${activeTab === 'planilla' ? 'active' : ''}`} onClick={() => setActiveTab('planilla')}>
          <FileText size={18} />
          <span>Planilla</span>
        </button>
      </nav>
    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: Los Primeros Pasos del Caminante
// ----------------------------------------------------
function PrimerosPasosView({ onNavigate }) {
  const [subTab, setSubTab] = useState('historia');
  
  return (
    <div className="animate-fade-in-up">
      <h2 className="section-title">Primeros Pasos del Caminante</h2>
      <p className="section-subtitle">Guía de integración al GS Paola Prince</p>

      {/* Local Tabs */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', marginBottom: '20px', paddingBottom: '5px' }}>
        {[
          { id: 'historia', label: 'Historia' },
          { id: 'simbolos', label: 'Símbolos' },
          { id: 'mire-duras', label: 'MIRE / DURAS' },
          { id: 'reuniones', label: 'Reuniones' },
          { id: 'progresion', label: 'Progresión' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setSubTab(tab.id)}
            style={{ 
              padding: '8px 16px', 
              borderRadius: '20px', 
              border: `1px solid ${subTab === tab.id ? 'var(--river-blue)' : 'var(--glass-border)'}`,
              background: subTab === tab.id ? 'var(--primary-scout)' : 'var(--glass-bg)',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="glass-panel" style={{ minHeight: '250px' }}>
        {subTab === 'historia' && (
          <div className="animate-fade-in-up">
            <h3 style={{ marginBottom: '10px', color: 'var(--river-blue)' }}>Nuestra Historia</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              La Comunidad de Caminantes del GS Paola Prince se fundó <strong>el 6 de septiembre de 2025</strong>. Sus miembros fundadores son Nikol y Janiuska Mendoza, Kamila Morales, Victoria Villalobos y José (Mineco) González.
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Poco después se unieron Jhuliana García, Jesus Rodriguez y Angel Fuenmayor, dando paso a la conformación de los primeros dos equipos permanentes de la unidad: <strong>Desmond Doss</strong> y <strong>Apollo 11</strong>.
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)' }}>
              Estuvieron acompañados por Fernando Acosta como Adulto de Unidad, y en apoyo Dayana Villasmil y Nelson Márquez.
            </p>
            
            <div style={{ marginTop: '20px', padding: '12px', background: 'rgba(98, 37, 153, 0.15)', borderRadius: '10px', borderLeft: '3px solid var(--primary-scout)' }}>
              <h4 style={{ fontSize: '13px', color: '#fff', marginBottom: '4px' }}>¿Equipos o Grupos?</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                <strong>Equipos:</strong> Los equipos son permanentes (3 a 6 miembros), tienen el nombre de un personaje o <strong>hecho histórico</strong> inspirador, <strong>es liderado por un coordinador nombrado por el mismo equipo y cambia cada cierto tiempo.</strong> <br />
                <strong>Grupos de Trabajo:</strong> Los grupos de trabajo son temporales <strong>y se forman con Caminantes de cualquier equipo, incluso de otras Comunidades para realizar una tarea, servicios o un proyecto</strong> en particular, <strong>ya que al cumplir el objetivo se disuelve.</strong>
              </p>
            </div>
          </div>
        )}

        {subTab === 'simbolos' && (
          <div className="animate-fade-in-up">
            <h3 style={{ marginBottom: '10px', color: 'var(--river-blue)' }}>Símbolos, Lema y Oración</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                <img src={imgInsigniaUnidad} alt="Rosa de los Vientos" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 'bold' }}>Rosa de los Vientos</div>
              </div>
              <div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  El color <strong>Azul</strong> representa a la Comunidad de Caminantes. La <strong>Rosa de los Vientos</strong> es la insignia de la unidad, representa tu norte y la búsqueda de tu identidad, también es importante mencionar que cada Comunidad e incluso cada equipo puede tener un Libro de Ruta que cuente su historia y actividades importantes. El Local donde se reúne la Comunidad, los nombres de los equipos y sus lemas también forman parte del marco simbólico de la unidad.
                </p>
              </div>
            </div>

            <div style={{ padding: '12px', background: 'rgba(0, 141, 168, 0.1)', border: '1px solid var(--glass-accent-border)', borderRadius: '12px', marginBottom: '15px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '15px', color: 'var(--river-blue)', fontWeight: 'bold', marginBottom: '4px' }}>Lema Oficial: "¡Siempre Adelante!"</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                Es nuestro lema y grito de marcha. Úsalo habitualmente para saludar o responder afirmativamente, a viva voz y que se note que te sientes orgulloso de pertenecer a la rama.
              </p>
            </div>

            <div style={{ 
              background: 'rgba(21, 2, 38, 0.8)', 
              padding: '20px', 
              borderRadius: '15px', 
              border: '1px solid var(--glass-border)', 
              textAlign: 'center',
              boxShadow: 'inset 0 0 20px rgba(98, 37, 153, 0.3)',
              position: 'relative'
            }}>
              <h4 style={{ fontSize: '14px', color: 'var(--river-blue)', marginBottom: '10px', letterSpacing: '0.05em' }}>ORACIÓN DEL CAMINANTE</h4>
              <p style={{ fontStyle: 'italic', fontSize: '13px', color: '#fff', marginBottom: '8px' }}>“Señor ayúdame a encontrar...”</p>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '5px' }}>La fortaleza del viejo roble para que ningún triunfo me haga soberbio.</p>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '5px' }}>La alegría de la naturaleza para que ninguna soledad me derrumbe.</p>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '5px' }}>La libertad del ave para elegir mi camino.</p>
              <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '8px' }}>La voluntad del caminante para seguir siempre adelante y servir.</p>
              <p style={{ fontSize: '13px', fontWeight: 'bold', color: 'var(--river-blue)' }}>Así sea.</p>
            </div>
          </div>
        )}

        {subTab === 'mire-duras' && (
          <div className="animate-fade-in-up">
            {/* LAS ACTIVIDADES - Texto introductorio con enlaces interactivos */}
            <div className="glass-panel" style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '12px', fontSize: '18px', color: '#fff' }}>Las Actividades</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '12px', lineHeight: 1.7 }}>
                En la Comunidad algunas actividades son diseñadas por los adultos, otras son diseñadas por los equipos permanentes, aunque también pueden ser diseñadas por una sola persona o por un grupo de trabajo temporal, en este último caso se trata en su mayoría de proyectos comunitarios o servicios.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', marginBottom: '12px', lineHeight: 1.7 }}>
                Estas actividades no deben realizarse al azar, todas deben estar enmarcadas en la planificación de la unidad, deben estar vinculadas a los Objetivos de Desarrollo Sostenible ODS de la agenda 2030 de las Naciones Unidas <a className="inline-link" onClick={() => onNavigate('ods')}>(ver ODS)</a>, también deben estar orientadas al cumplimiento de las conductas indicadas en los Indicadores de Logro de la ASV <a className="inline-link" onClick={() => onNavigate('logros')}>(ver Indicadores de Logro)</a>. También deben existir objetivos específicos propios de la realidad de cada comunidad, equipo, grupo de trabajo o joven.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.7 }}>
                Existen muchos formatos para diseñar actividades scout, sin embargo, se propone uno que se adapta muy bien a las necesidades de los Caminantes <a className="inline-link" onClick={() => onNavigate('planilla')}>(ver Generador de Planilla)</a>, también se recomienda prestar atención a dos herramientas que se pueden combinar para programar una actividad:
              </p>
            </div>

            <h3 style={{ marginBottom: '10px', color: 'var(--river-blue)' }}>Método de Diseño de Actividades</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--blossom-pink)', marginBottom: '8px' }}>Herramienta MIRE</h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '10px', lineHeight: '1.5' }}>
                <strong>Motivación, Instrucción, Refuerzo y Evaluación:</strong>
              </p>
              <ul style={{ paddingLeft: '15px', listStyleType: 'disc', fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>La Motivación</strong> se refiere a que toda actividad scout debe comenzar con buen ánimo, juegos cortos, de mucho movimiento del cuerpo, gritos, etc.</li>
                <li><strong>La Instrucción</strong> se refiere a que toda actividad debe tener contenido educativo (no es estar en un salón de clases), prácticas de nudos, por ejemplo.</li>
                <li><strong>El Refuerzo</strong> busca profundizar sobre algún objetivo que no haya quedado claro. Manteniendo como ejemplo una actividad de nudos, si en la instrucción aprendimos a hacer una silla de bomberos, en el refuerzo pediremos a los participantes hacer un juego de poleas levantando a una persona usando ese nudo.</li>
                <li><strong>La Evaluación</strong> se refiere a realizar dinámicas, juegos o discusiones que permitan determinar si se cumplieron los objetivos de la actividad.</li>
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '15px' }}>
              <h4 style={{ fontSize: '14px', color: 'var(--leaf-green)', marginBottom: '8px' }}>Herramienta DURAS</h4>
              <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', marginBottom: '10px', lineHeight: '1.5' }}>
                <strong>Criterios que deben cumplir las actividades para ser significativas:</strong>
              </p>
              <ul style={{ paddingLeft: '15px', listStyleType: 'disc', fontSize: '12.5px', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Desafiantes:</strong> y retadoras para los participantes.</li>
                <li><strong>Útiles:</strong> y que tengan un propósito o enseñanza.</li>
                <li><strong>Recompensantes:</strong> para que al finalizar la actividad el participante se sienta satisfecho con el tiempo invertido.</li>
                <li><strong>Atractivas:</strong> buscando que sean del interés de todos los participantes.</li>
                <li><strong>Seguras:</strong> orientadas siempre a evitar lesiones físicas y/o emocionales.</li>
              </ul>
            </div>
          </div>
        )}

        {subTab === 'reuniones' && (
          <div className="animate-fade-in-up">
            <h3 style={{ marginBottom: '10px', color: 'var(--river-blue)' }}>Tipos de Reuniones (Estructura y Toma de Decisiones)</h3>
            <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginBottom: '12px' }}>
              En los Caminantes, tú y tu equipo participan protagónicamente en la toma de decisiones a través de estas estructuras de reunión:
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { 
                  title: 'Reunión de Equipo de Trabajo', 
                  freq: 'Transitoria', 
                  desc: 'Se reúne las veces que sea necesario, las convoca el líder del proyecto y asisten todos los integrantes del grupo de trabajo, sin importar a que equipo permanente pertenezcan. Puede haber diversos cargos para la realización de un proyecto: un Tesorero para administrar los recursos, alguien de Comunicaciones, para promocionar la actividad, alguien en Logística para buscar los materiales, equipos y espacios necesarios, entre otros. En estas reuniones se discuten todos los asuntos para garantizar el cumplimiento del proyecto.' 
                },
                { 
                  title: 'Consejo de Equipo', 
                  freq: 'Semanal', 
                  desc: 'Es una reunión semanal, a la que asisten todos los miembros del equipo permanente, debe ser convocada por el Coordinador del equipo y se nombran cargos habituales, como Secretario, Tesorero, Guardián de Leyendas, Cuartel Maestre o intendente, entre otros. Todos los asistentes tienen voz y voto. En los Consejos de Equipo se deciden las próximas actividades a realizar, se escoge quién será el próximo coordinador del equipo, se hace un diagnóstico del funcionamiento del equipo, se discuten los proyectos o ideas que se presentarán en el Congreso de la Comunidad, entre otros.' 
                },
                { 
                  title: 'Comité de la Comunidad', 
                  freq: 'Mensual', 
                  desc: 'Se reúne una vez al mes, asisten principalmente los Coordinadores de Equipo y el Adulto de la unidad, este último es quien lo convoca, pero también pueden asistir los líderes de los equipos de trabajo y otros adultos de apoyo cuando sea necesario. En el Comité se hace un diagnóstico para saber cómo planificar cada ciclo de programa (Trimestral, Semestral o Anual), organiza un calendario de actividades y selecciona los proyectos que se ejecutarán en función de lo que propone cada equipo, evalúa las actividades realizadas, apoya el funcionamiento de los grupos de trabajos y de los equipos, supervisa la elección de los coordinadores, busca captar nuevos jóvenes y ayuda en su integración con los equipos.' 
                },
                { 
                  title: 'Congreso de la Comunidad', 
                  freq: 'Bicíclica (2 veces por ciclo)', 
                  desc: 'Se reúne 2 veces por cada ciclo de programa (cada 3 o 6 meses), participan todos los jóvenes de la Comunidad de Caminantes, al inicio de cada congreso se elige entre todos los asistentes a un caminante que lo presidirá y a un secretario. Debe ser convocado por el Comité de la Comunidad y en esta reunión se aprueban reglamentos internos, normas de convivencia, se establecen los objetivos anuales de la comunidad, se aprueba el calendario de actividades presentado por el Comité, entre otros.' 
                }
              ].map((r, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.02)', padding: '12px 16px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <h4 style={{ fontSize: '14px', color: '#fff', fontWeight: 'bold' }}>{r.title}</h4>
                    <span style={{ fontSize: '10px', background: 'rgba(0,141,168,0.2)', padding: '3px 8px', borderRadius: '10px', color: 'var(--river-blue)', fontWeight: 'bold' }}>{r.freq}</span>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.45' }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {subTab === 'progresion' && (
          <div className="animate-fade-in-up">
            <h3 style={{ marginBottom: '10px', color: 'var(--river-blue)' }}>Progresión Personal</h3>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '15px' }}>
              A medida que asumes desafíos y creces en valores, te haces merecedor de insignias que representan tus etapas de adelanto:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative' }}>
              {/* Vertical timeline line */}
              <div style={{ position: 'absolute', left: '22px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'var(--primary-scout)', opacity: 0.5, zIndex: 0 }} />
              
              {[
                { rank: 'Rosa de los Vientos', subtitle: 'Insignia de Unidad', desc: 'Representa tu punto de inicio, el norte de tu senda y la búsqueda de tu identidad.', img: imgInsigniaUnidad },
                { rank: 'Peregrino', subtitle: '1er Adelanto', desc: 'Iniciando mi camino. Descubrimiento de mi identidad y entorno.', img: imgPeregrino },
                { rank: 'Precursor', subtitle: '2do Adelanto', desc: 'Abriendo senderos. Toma de decisiones autónomas y forjamiento de criterio.', img: imgPrecursor },
                { rank: 'Viajero', subtitle: '3er Adelanto', desc: 'Explorando nuevos horizontes. Asunción de retos y exploración del mundo interior.', img: imgViajero },
                { rank: 'Caminante Visionario', subtitle: 'Máxima Insignia', desc: 'Meta final individual. Inspirar a otros y liderar con el ejemplo en tu comunidad.', img: imgVisionario }
              ].map((p, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '15px', zIndex: 1, position: 'relative', alignItems: 'center' }}>
                  {/* Badge image as timeline node */}
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    backgroundColor: 'var(--midnight-purple)', 
                    border: '2px solid var(--primary-scout)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0,
                    padding: '4px',
                    boxShadow: '0 0 10px rgba(98,37,153,0.5)'
                  }}>
                    <img src={p.img} alt={p.rank} style={{ width: '34px', height: '34px', objectFit: 'contain' }} />
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--glass-border)', width: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                      <h4 style={{ fontSize: '13px', color: '#fff' }}>{p.rank}</h4>
                      <span style={{ fontSize: '10px', color: 'var(--river-blue)', fontWeight: 'bold', background: 'rgba(0,141,168,0.15)', padding: '2px 7px', borderRadius: '8px' }}>{p.subtitle}</span>
                    </div>
                    <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: ODS EXPLORER
// ----------------------------------------------------
function OdsExplorer({ catalog }) {
  const [selectedOds, setSelectedOds] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      
      {/* Grid of ODS icons */}
      <div className="ods-grid">
        {catalog.map(ods => (
          <div 
            key={ods.id}
            onClick={() => setSelectedOds(ods)}
            style={{ 
              cursor: 'pointer',
              borderRadius: '8px',
              border: `2px solid ${selectedOds?.id === ods.id ? 'var(--river-blue)' : 'transparent'}`,
              overflow: 'hidden',
              transition: 'transform 0.2s',
              transform: selectedOds?.id === ods.id ? 'scale(1.05)' : 'scale(1)'
            }}
          >
            <img 
              src={ODS_IMAGES[ods.id]}
              alt={ods.name}
              style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ))}
      </div>

      {/* Selected ODS detailed card */}
      {selectedOds ? (
        <div className="glass-panel animate-fade-in-up" style={{ borderLeft: '4px solid var(--ocean-blue)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <img 
              src={ODS_IMAGES[selectedOds.id]}
              alt=""
              style={{ width: '50px', height: '50px', borderRadius: '8px' }}
            />
            <div>
              <h3 style={{ fontSize: '18px', color: '#fff' }}>ODS {selectedOds.id}: {selectedOds.name}</h3>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Objetivo Global de la Agenda 2030</p>
            </div>
          </div>
          
          <p style={{ fontSize: '13.5px', color: '#fff', marginBottom: '15px', lineHeight: '1.5' }}>
            {selectedOds.description}
          </p>

          <h4 style={{ fontSize: '12.5px', color: 'var(--river-blue)', marginBottom: '8px', letterSpacing: '0.05em' }}>METAS ESPECÍFICAS (ANEXO 1):</h4>
          <ul style={{ paddingLeft: '15px', listStyleType: 'disc', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {selectedOds.metas.map((meta, idx) => (
              <li key={idx} style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{meta}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '30px 20px', background: 'rgba(255,255,255,0.01)', border: '1px dashed var(--glass-border)', borderRadius: '12px', color: 'var(--text-muted)', fontSize: '13px' }}>
          Pulsa sobre cualquiera de los ODS para ver su descripción y metas educativas.
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: LOGROS EXPLORER
// ----------------------------------------------------
function LogrosExplorer({ catalog }) {
  const [selectedArea, setSelectedArea] = useState('Corporalidad');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* SECCIÓN DE INDICADORES DE LOGRO */}
      <div>
        <h3 style={{ fontSize: '16px', color: '#fff', marginBottom: '10px', fontFamily: 'var(--font-hero)' }}>Catálogo de Conductas / Indicadores</h3>
        
        {/* Area Selector tabs */}
        <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', marginBottom: '15px', paddingBottom: '5px' }}>
          {Object.keys(catalog).map(area => (
            <button 
              key={area}
              onClick={() => setSelectedArea(area)}
              style={{ 
                padding: '8px 16px', 
                borderRadius: '20px', 
                border: `1px solid ${selectedArea === area ? 'var(--river-blue)' : 'var(--glass-border)'}`,
                background: selectedArea === area ? 'rgba(0,141,168,0.2)' : 'var(--glass-bg)',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Indicators List */}
        <div className="glass-panel" style={{ borderLeft: '4px solid var(--river-blue)' }}>
          <h4 style={{ fontSize: '14px', color: '#fff', marginBottom: '12px' }}>Área de Crecimiento: {selectedArea}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {catalog[selectedArea]?.map((logro, idx) => (
              <div 
                key={idx}
                style={{ 
                  padding: '10px 12px', 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}
              >
                <div style={{ marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '16px', width: '16px', borderRadius: '50%', backgroundColor: 'rgba(108, 227, 225, 0.15)', flexShrink: 0 }}>
                  <CheckCircle2 size={12} style={{ color: 'var(--river-blue)' }} />
                </div>
                <span style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{logro}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: Galería de Fotos de la Tropa (Zoom dinámico + Firebase)
// ----------------------------------------------------
function TropaGallery() {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);
  const [photos, setPhotos] = useState(TROPA_PHOTOS_DEFAULT);
  const [showUpload, setShowUpload] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Cargar fotos adicionales desde Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'gallery_photos'), (snap) => {
      const extra = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (extra.length > 0) {
        setPhotos([...extra, ...TROPA_PHOTOS_DEFAULT]);
      }
    }, () => {});
    return () => unsub();
  }, []);

  const handleUpload = async (file) => {
    if (!file) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      await addDoc(collection(db, 'gallery_photos'), {
        src: url,
        caption: file.name.replace(/\.[^.]+$/, ''),
        uploadedAt: serverTimestamp()
      });
      setShowUpload(false);
    } catch (e) {
      alert('Error al subir la foto. Verifica la configuración de Firebase.');
    }
    setUploading(false);
  };

  return (
    <div className="glass-panel" style={{ marginBottom: '20px' }}>
      <h3 style={{ marginBottom: '12px', fontSize: '18px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Camera size={20} style={{ color: 'var(--river-blue)' }} />
        Galería de la Tropa
        <button className="btn-secondary" style={{ marginLeft: 'auto', padding: '4px 10px', fontSize: '11px' }} onClick={() => setShowUpload(!showUpload)}>
          <Plus size={12} /> Subir foto
        </button>
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '15px' }}>
        Toca una foto para ampliarla.
      </p>

      {showUpload && (
        <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(98, 37, 153, 0.15)', borderRadius: '10px', borderLeft: '3px solid var(--primary-scout)' }}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={e => handleUpload(e.target.files[0])}
            style={{ fontSize: '12px', color: 'var(--text-secondary)' }}
          />
          {uploading && <p style={{ fontSize: '12px', color: 'var(--river-blue)', marginTop: '8px' }}>Subiendo...</p>}
        </div>
      )}

      <div className="tropa-gallery">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="tropa-thumb"
            onClick={() => setZoomedPhoto(photo)}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
          </div>
        ))}
      </div>

      {zoomedPhoto && (
        <div className="photo-zoom-overlay" onClick={() => setZoomedPhoto(null)}>
          <div className="photo-zoom-container" onClick={e => e.stopPropagation()}>
            <button className="photo-zoom-close" onClick={() => setZoomedPhoto(null)}>
              <X size={24} />
            </button>
            <img src={zoomedPhoto.src} alt={zoomedPhoto.caption} />
            <p className="photo-zoom-caption">{zoomedPhoto.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: Noticias y Novedades (Firebase Firestore)
// ----------------------------------------------------
function NoticiasView() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'noticias'), orderBy('fecha', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setNoticias(data);
      setLoading(false);
    }, () => {
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const d = new Date(dateStr);
    return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
  };

  return (
    <div className="animate-fade-in-up">
      <h2 className="section-title">Noticias y Novedades</h2>
      <p className="section-subtitle">Mantente al día con las últimas actividades de la tropa.</p>

      <button className="btn-primary" style={{ width: '100%', marginBottom: '20px' }} onClick={() => setShowForm(!showForm)}>
        <Plus size={18} /> {showForm ? 'Cancelar' : 'Publicar nueva noticia'}
      </button>

      {showForm && <NoticiaForm onPublished={() => setShowForm(false)} />}

      {loading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>Cargando noticias...</p>
      ) : noticias.length === 0 ? (
        <div className="glass-panel" style={{ textAlign: 'center', padding: '30px' }}>
          <Newspaper size={40} style={{ color: 'var(--text-muted)', marginBottom: '10px' }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Aún no hay noticias publicadas.</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '5px' }}>Usa el botón de arriba para publicar la primera.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {noticias.map(noticia => (
            <div key={noticia.id} className="glass-panel" style={{ padding: '0', overflow: 'hidden' }}>
              {noticia.foto && (
                <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={noticia.foto} 
                    alt={noticia.titulo} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <Calendar size={14} style={{ color: 'var(--river-blue)' }} />
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                    {formatDate(noticia.fecha)}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', color: '#fff', marginBottom: '8px' }}>{noticia.titulo}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{noticia.texto}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------
// CHILD VIEWS: Formulario de Publicación de Noticias
// ----------------------------------------------------
function NoticiaForm({ onPublished }) {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
  const [texto, setTexto] = useState('');
  const [fotoFile, setFotoFile] = useState(null);
  const [fotoPreview, setFotoPreview] = useState(null);
  const [publishing, setPublishing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoFile(file);
      setFotoPreview(URL.createObjectURL(file));
    }
  };

  const handlePublish = async () => {
    if (!titulo.trim() || !texto.trim()) {
      alert('Por favor completa el título y el texto.');
      return;
    }
    setPublishing(true);
    try {
      let fotoUrl = '';
      if (fotoFile) {
        const storageRef = ref(storage, `noticias/${Date.now()}_${fotoFile.name}`);
        await uploadBytes(storageRef, fotoFile);
        fotoUrl = await getDownloadURL(storageRef);
      }
      await addDoc(collection(db, 'noticias'), {
        titulo: titulo.trim(),
        fecha: fecha,
        texto: texto.trim(),
        foto: fotoUrl,
        createdAt: serverTimestamp()
      });
      onPublished();
    } catch (e) {
      alert('Error al publicar. Verifica la configuración de Firebase.');
    }
    setPublishing(false);
  };

  return (
    <div className="glass-panel" style={{ marginBottom: '20px' }}>
      <h3 style={{ fontSize: '16px', color: '#fff', marginBottom: '15px' }}>Nueva Publicación</h3>
      
      <div className="form-group">
        <label className="form-label">Título</label>
        <input 
          type="text" 
          className="form-input" 
          placeholder="Título de la noticia" 
          value={titulo} 
          onChange={e => setTitulo(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label className="form-label">Fecha</label>
        <input 
          type="date" 
          className="form-input" 
          value={fecha} 
          onChange={e => setFecha(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label className="form-label">Contenido</label>
        <textarea 
          className="form-textarea" 
          placeholder="Escribe el contenido de la noticia..." 
          value={texto} 
          onChange={e => setTexto(e.target.value)} 
          style={{ minHeight: '120px' }}
        />
      </div>

      <div className="form-group">
        <label className="form-label">Foto (opcional)</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange}
          style={{ fontSize: '12px', color: 'var(--text-secondary)' }} 
        />
        {fotoPreview && (
          <div style={{ marginTop: '10px', borderRadius: '10px', overflow: 'hidden' }}>
            <img src={fotoPreview} alt="Vista previa" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
          </div>
        )}
      </div>

      <button 
        className="btn-primary" 
        style={{ width: '100%' }} 
        onClick={handlePublish}
        disabled={publishing}
      >
        {publishing ? 'Publicando...' : 'Publicar noticia'}
      </button>
    </div>
  );
}
