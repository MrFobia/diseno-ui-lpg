// ─── Contenido editorial: Insights + Blog ─────────────────────────────────────
// Fuente única para el hub de Insights (/insights) y las internas (/insights/:slug,
// /blog/:slug). El home y Thought Leadership consumen los primeros N de cada lista.

import imgInsight1 from "../../imports/Insights/9a5bd58bc01893753ade002704001ff74440e83a.png";
import imgInsight2 from "../../imports/Insights/cfe288b7268464bab47a67ed8d2bf94a27257a04.png";
import imgInsight3 from "../../imports/Insights/2346892e5e6291109c726933699bf46d2d34ddc7.png";

export type Block =
  | { k: "p"; t: string }
  | { k: "h2"; t: string }
  | { k: "quote"; t: string; by?: string }
  | { k: "list"; items: string[] }
  | { k: "img"; src: string; caption?: string };

export interface Article {
  slug: string;
  kind: "insight" | "blog";
  cat: string;
  format: "Artículo" | "Podcast" | "Recurso" | "Estudio";
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  read: string;
  img: string;
  featured?: boolean;
  author: { name: string; role: string; initials: string };
  tags: string[];
  body: Block[];
}

const AUTHORS = {
  mc: { name: "María Camila Osorio", role: "Directora de Asuntos Públicos", initials: "MC" },
  ja: { name: "Juan Andrés Lozano", role: "Socio · Estrategia y Crisis", initials: "JA" },
  vp: { name: "Valentina Prieto", role: "Líder de Comunicación Digital", initials: "VP" },
  se: { name: "Santiago Escobar", role: "Head of Intelligence · IPM", initials: "SE" },
};

export const ARTICLES: Article[] = [
  // ── Insights ──────────────────────────────────────────────────────────────
  {
    slug: "ia-gestion-crisis-reputacionales",
    kind: "insight",
    cat: "AI & Management",
    format: "Estudio",
    title: "IA en la gestión de crisis reputacionales",
    excerpt:
      "Cómo los modelos de lenguaje están cambiando el tiempo de reacción, la detección temprana y la calidad de la respuesta corporativa en Colombia.",
    date: "Marzo 2026",
    dateISO: "2026-03-18",
    read: "12 min",
    img: imgInsight1,
    featured: true,
    author: AUTHORS.se,
    tags: ["Inteligencia Artificial", "Crisis", "Monitoreo", "Reputación"],
    body: [
      { k: "p", t: "La ventana para responder a una crisis reputacional se redujo de 24 horas a menos de 90 minutos. Lo que antes se resolvía con un comité y un comunicado revisado por legal, hoy compite contra un ciclo de conversación que se forma —y se endurece— antes del primer café de la mañana." },
      { k: "h2", t: "Detección: el valor está antes del pico" },
      { k: "p", t: "El uso más rentable de la IA en crisis no es redactar el comunicado: es identificar la señal débil. Los modelos de clasificación aplicados sobre menciones, comentarios y foros permiten detectar patrones de indignación entre 4 y 9 horas antes de que el tema alcance medios tradicionales." },
      { k: "list", items: [
        "Clasificación de sentimiento por audiencia, no por volumen total de menciones",
        "Detección de cuentas coordinadas y amplificación artificial",
        "Alertas por umbral de aceleración, no por número absoluto de menciones",
        "Mapeo automático de voceros y aliados disponibles por tema",
      ] },
      { k: "quote", t: "La IA no reemplaza el criterio del comité de crisis. Le compra el activo más escaso que existe en una crisis: tiempo.", by: "Santiago Escobar" },
      { k: "h2", t: "Respuesta: velocidad con control editorial" },
      { k: "p", t: "En los ejercicios que hemos corrido con equipos de comunicaciones de compañías del Grupo de los 100 en Colombia, los borradores asistidos por IA reducen el tiempo de primera respuesta en un 60%, siempre que exista un corpus de mensajes aprobados previamente por legal y por la alta dirección." },
      { k: "p", t: "El error frecuente es delegar el tono. Un modelo entrenado con comunicados genéricos produce comunicados genéricos: correctos, vacíos y perfectamente inútiles para recuperar confianza." },
      { k: "h2", t: "Lo que sigue" },
      { k: "p", t: "El siguiente salto no está en la redacción sino en la simulación: correr escenarios de crisis contra audiencias sintéticas para medir qué mensaje reduce el daño antes de publicarlo. Es la diferencia entre reaccionar y ensayar." },
    ],
  },
  {
    slug: "dialogos-de-reputacion",
    kind: "insight",
    cat: "Podcast",
    format: "Podcast",
    title: "Diálogos de Reputación con líderes de Colombia",
    excerpt:
      "Conversaciones con quienes toman las decisiones que mueven la agenda corporativa y política del país.",
    date: "Febrero 2026",
    dateISO: "2026-02-11",
    read: "54 min",
    img: imgInsight2,
    author: AUTHORS.ja,
    tags: ["Podcast", "Liderazgo", "Reputación"],
    body: [
      { k: "p", t: "Diálogos de Reputación nació de una constatación simple: las decisiones más determinantes en reputación corporativa rara vez se documentan. Se toman en salas cerradas, bajo presión, y se olvidan cuando la crisis pasa." },
      { k: "h2", t: "El formato" },
      { k: "p", t: "Cada episodio es una conversación de 45 a 60 minutos con un líder que enfrentó una decisión difícil de comunicación, con nombre propio y consecuencias verificables. Sin guion promocional." },
      { k: "list", items: [
        "Temporada 3 · 12 episodios · publicación quincenal",
        "Disponible en Spotify, Apple Podcasts y YouTube",
        "Transcripción completa publicada con cada episodio",
      ] },
      { k: "quote", t: "Las empresas no pierden reputación por lo que dicen en la crisis. La pierden por lo que callaron durante los tres años anteriores.", by: "Carolina Vélez · EP 23" },
      { k: "p", t: "El episodio más escuchado de la temporada anterior fue el dedicado al cambio regulatorio en el sector energético, con más de 18.000 reproducciones en las primeras dos semanas." },
    ],
  },
  {
    slug: "guia-manejo-crisis-corporativas",
    kind: "insight",
    cat: "Recurso",
    format: "Recurso",
    title: "Guía definitiva para el manejo de crisis corporativas",
    excerpt:
      "Protocolo paso a paso, matriz de escenarios y plantillas editables para las primeras 72 horas de una crisis.",
    date: "Enero 2026",
    dateISO: "2026-01-22",
    read: "42 págs.",
    img: imgInsight3,
    author: AUTHORS.ja,
    tags: ["Crisis", "Protocolo", "Descargable"],
    body: [
      { k: "p", t: "Esta guía consolida dieciséis años de acompañamiento en crisis reputacionales en Colombia: qué se hace en la primera hora, quién firma cada decisión y cómo se documenta todo para el después." },
      { k: "h2", t: "Qué incluye" },
      { k: "list", items: [
        "Matriz de severidad con cuatro niveles y disparadores objetivos",
        "Mapa de roles del comité de crisis y su cadena de aprobación",
        "Plantillas de comunicado para siete escenarios frecuentes",
        "Checklist de vocería y preparación de entrevista bajo presión",
        "Protocolo de cierre y medición del daño reputacional residual",
      ] },
      { k: "h2", t: "Las primeras 72 horas" },
      { k: "p", t: "El 80% del daño reputacional evitable se define en los primeros tres días. La guía dedica su sección central a ese periodo, hora por hora, con criterios de decisión explícitos en lugar de recomendaciones generales." },
      { k: "quote", t: "Un protocolo que nadie ensayó es un documento, no un protocolo." },
      { k: "p", t: "Descarga gratuita para suscriptores del newsletter. Formato PDF, 42 páginas, con anexos editables en DOCX." },
    ],
  },
  {
    slug: "benchmark-ipm-colombia-2025",
    kind: "insight",
    cat: "IPM",
    format: "Estudio",
    title: "Benchmark IPM Colombia 2025: quién domina la conversación",
    excerpt:
      "Análisis comparativo de presencia mediática por sector, con 68 páginas de datos sobre 240 organizaciones colombianas.",
    date: "Diciembre 2025",
    dateISO: "2025-12-04",
    read: "18 min",
    img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    author: AUTHORS.se,
    tags: ["IPM", "Datos", "Benchmark", "Medios"],
    body: [
      { k: "p", t: "El Índice de Presencia Mediática (IPM) mide algo distinto al número de menciones: mide cuánta de la conversación relevante de un sector ocupa una organización, ponderada por credibilidad del medio y alcance de la audiencia objetivo." },
      { k: "h2", t: "Hallazgos del año" },
      { k: "list", items: [
        "El sector financiero concentra el 31% de la conversación corporativa nacional",
        "Energía y minería duplicaron su exposición negativa frente a 2024",
        "El 62% de las menciones de C-suite provienen de tres medios digitales",
        "La vocería técnica supera en credibilidad a la vocería ejecutiva en salud y tecnología",
      ] },
      { k: "quote", t: "Aparecer mucho no es aparecer bien. La mitad de las organizaciones con mayor volumen de menciones tienen IPM neto negativo." },
      { k: "p", t: "La metodología completa, la muestra y el detalle por sector están disponibles en el informe extendido para clientes." },
    ],
  },

  // ── Blog ──────────────────────────────────────────────────────────────────
  {
    slug: "preparar-organizacion-cambio-de-gobierno",
    kind: "blog",
    cat: "Asuntos Públicos",
    format: "Artículo",
    title: "Cómo preparar a tu organización para un cambio de gobierno",
    excerpt:
      "Un cambio de administración reordena interlocutores, prioridades y tiempos regulatorios. Estas son las decisiones que conviene tomar antes, no después.",
    date: "15 Abr 2026",
    dateISO: "2026-04-15",
    read: "8 min",
    img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    featured: true,
    author: AUTHORS.mc,
    tags: ["Asuntos Públicos", "Regulación", "Gobierno", "Estrategia"],
    body: [
      { k: "p", t: "Cada cambio de gobierno en Colombia reinicia el mapa de interlocución de una organización. Los contactos construidos durante cuatro años pierden vigencia en semanas y las prioridades regulatorias se reordenan con lógicas nuevas." },
      { k: "h2", t: "1. Auditar el mapa de relacionamiento antes de la transición" },
      { k: "p", t: "La mayoría de las compañías descubre tarde que su relacionamiento estaba concentrado en dos o tres personas. Un mapa sano distribuye la relación entre entidad, dirección técnica y equipo asesor, no entre nombres propios." },
      { k: "list", items: [
        "Identificar entidades con capacidad regulatoria real sobre el negocio",
        "Separar interlocutores políticos de interlocutores técnicos de carrera",
        "Documentar compromisos vigentes y su estado antes del empalme",
        "Definir quién en la organización sostiene cada relación",
      ] },
      { k: "h2", t: "2. Traducir el negocio a la agenda entrante" },
      { k: "p", t: "Ninguna administración adopta la agenda de una empresa. La adopta cuando esa agenda resuelve un problema propio: empleo regional, transición energética, formalización, seguridad alimentaria. El trabajo consiste en encontrar esa intersección con honestidad, no en maquillarla." },
      { k: "quote", t: "El error clásico es llegar con la presentación corporativa. El acierto es llegar con el problema del otro resuelto a la mitad.", by: "María Camila Osorio" },
      { k: "h2", t: "3. Preparar la vocería para preguntas incómodas" },
      { k: "p", t: "Las transiciones exponen a las organizaciones a preguntas que no se hacían: contratos previos, beneficios tributarios, cercanía con la administración saliente. Un media training específico de transición reduce ese riesgo de forma medible." },
      { k: "h2", t: "4. Fijar un horizonte de 18 meses" },
      { k: "p", t: "Los primeros seis meses son de instalación, los siguientes doce concentran las decisiones de política pública que definirán el periodo. Planear a cuatro años es fantasía; planear a 18 meses es estrategia." },
    ],
  },
  {
    slug: "errores-comunes-manejo-de-crisis",
    kind: "blog",
    cat: "Crisis",
    format: "Artículo",
    title: "Los 5 errores más comunes en el manejo de crisis reputacionales",
    excerpt:
      "Patrones que se repiten en casi todas las crisis mal gestionadas que hemos acompañado desde 2010.",
    date: "10 Abr 2026",
    dateISO: "2026-04-10",
    read: "6 min",
    img: "https://images.unsplash.com/photo-1620715153885-9c2c36155b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    author: AUTHORS.ja,
    tags: ["Crisis", "Vocería", "Reputación"],
    body: [
      { k: "p", t: "Las crisis se parecen menos entre sí de lo que se cree. Los errores, en cambio, son casi siempre los mismos cinco." },
      { k: "h2", t: "1. Esperar a tener toda la información" },
      { k: "p", t: "El silencio no es neutral: lo llena alguien más. Comunicar lo que se sabe, lo que no se sabe y cuándo se sabrá es una respuesta completa, aunque se sienta incompleta." },
      { k: "h2", t: "2. Poner al abogado a escribir el comunicado" },
      { k: "p", t: "Legal define el límite de lo que se puede decir. No define el tono. Un texto blindado jurídicamente y frío emocionalmente amplifica el daño reputacional que intenta contener." },
      { k: "h2", t: "3. Confundir al vocero con el jefe" },
      { k: "p", t: "El vocero correcto es quien tiene credibilidad sobre el tema, no quien tiene el cargo más alto. En crisis técnicas, exponer al CEO desperdicia el único activo que no se puede reemplazar." },
      { k: "quote", t: "Se quema un vocero una sola vez. Conviene elegir bien en qué crisis se gasta." },
      { k: "h2", t: "4. Gestionar medios y olvidar a los empleados" },
      { k: "p", t: "El equipo interno se entera por Twitter y se convierte en la fuente no oficial más citada. La comunicación interna debe salir primero, o al menos simultáneamente." },
      { k: "h2", t: "5. Declarar la crisis terminada demasiado pronto" },
      { k: "p", t: "La cobertura baja mucho antes de que la confianza se recupere. El plan de recuperación empieza cuando termina el ruido, y suele durar entre seis y dieciocho meses." },
    ],
  },
  {
    slug: "ia-y-comunicacion-estrategica",
    kind: "blog",
    cat: "Comunicación Digital",
    format: "Artículo",
    title: "IA y comunicación estratégica: cómo están cambiando las reglas",
    excerpt:
      "Qué tareas conviene automatizar, cuáles no, y por qué el criterio humano se vuelve más caro y más valioso.",
    date: "5 Abr 2026",
    dateISO: "2026-04-05",
    read: "10 min",
    img: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    author: AUTHORS.vp,
    tags: ["Inteligencia Artificial", "Digital", "Contenido"],
    body: [
      { k: "p", t: "La discusión sobre IA en comunicaciones se estancó en si reemplaza o no a los equipos. La pregunta útil es otra: qué parte del trabajo tenía valor real y cuál solo tenía costo." },
      { k: "h2", t: "Lo que la IA hace mejor que un equipo" },
      { k: "list", items: [
        "Monitoreo y clasificación de menciones a escala",
        "Primeras versiones de piezas repetitivas y adaptaciones por canal",
        "Análisis de brecha entre mensaje emitido y mensaje percibido",
        "Resúmenes de audiencias, foros y comentarios masivos",
      ] },
      { k: "h2", t: "Lo que sigue siendo humano" },
      { k: "p", t: "Decidir qué no se dice. Leer una sala. Sostener una relación de años con un periodista. Asumir la responsabilidad de una decisión difícil frente a una junta. Nada de eso se delega." },
      { k: "quote", t: "Cuando el contenido se vuelve barato, la reputación se juega en el criterio.", by: "Valentina Prieto" },
      { k: "h2", t: "El riesgo del promedio" },
      { k: "p", t: "Un modelo optimiza hacia lo esperado. Si toda la industria usa las mismas herramientas con los mismos prompts, la comunicación corporativa converge hacia un mismo tono neutro e indistinguible. La diferenciación pasa a ser una decisión deliberada y costosa." },
    ],
  },
  {
    slug: "media-training-era-digital",
    kind: "blog",
    cat: "Comunicaciones",
    format: "Artículo",
    title: "Media training en la era digital: claves para voceros efectivos",
    excerpt:
      "Cada declaración vive fuera de contexto en algún clip. Entrenar para eso cambia el método.",
    date: "28 Mar 2026",
    dateISO: "2026-03-28",
    read: "7 min",
    img: "https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    author: AUTHORS.mc,
    tags: ["Media Training", "Vocería", "Comunicaciones"],
    body: [
      { k: "p", t: "El media training tradicional preparaba para una entrevista de veinte minutos. Hoy prepara para el fragmento de once segundos que alguien va a recortar de esa entrevista." },
      { k: "h2", t: "Entrenar la frase suelta" },
      { k: "p", t: "Cada respuesta debe sostenerse sola, sin la pregunta que la originó. Es una disciplina distinta a la de argumentar bien: exige cerrar ideas completas en unidades cortas." },
      { k: "list", items: [
        "Tres mensajes clave, nunca más, formulados como frases autosuficientes",
        "Respuestas de máximo veinte segundos por bloque",
        "Puentes explícitos para volver al mensaje sin sonar evasivo",
        "Simulación grabada en video y revisión del lenguaje corporal",
      ] },
      { k: "quote", t: "Si una respuesta necesita contexto para no sonar mal, ya salió mal." },
      { k: "h2", t: "El vocero técnico" },
      { k: "p", t: "En sectores regulados, el perfil técnico transmite más credibilidad que el ejecutivo. El entrenamiento consiste en traducir sin simplificar hasta el punto de perder precisión." },
    ],
  },
  {
    slug: "medir-roi-estrategia-comunicaciones",
    kind: "blog",
    cat: "IPM",
    format: "Artículo",
    title: "¿Cómo medir el ROI de tu estrategia de comunicaciones?",
    excerpt:
      "Del conteo de impactos a la medición de decisiones: qué métricas resisten una conversación con el CFO.",
    date: "20 Mar 2026",
    dateISO: "2026-03-20",
    read: "9 min",
    img: "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
    author: AUTHORS.se,
    tags: ["IPM", "Medición", "ROI", "Datos"],
    body: [
      { k: "p", t: "El área de comunicaciones sigue reportando impactos y equivalencias publicitarias en juntas donde el resto de las áreas reporta decisiones y márgenes. La brecha de lenguaje explica buena parte de su fragilidad presupuestal." },
      { k: "h2", t: "Métricas que no resisten" },
      { k: "list", items: [
        "Equivalencia publicitaria: mide costo, no efecto",
        "Número de menciones sin ponderar audiencia ni credibilidad",
        "Alcance potencial: describe un techo teórico que nunca ocurre",
      ] },
      { k: "h2", t: "Métricas que sí" },
      { k: "list", items: [
        "Participación en la conversación relevante del sector (IPM)",
        "Penetración del mensaje clave en cobertura ganada",
        "Costo de adquisición asistido por medios ganados",
        "Variación de riesgo regulatorio percibido en audiencias objetivo",
      ] },
      { k: "quote", t: "Comunicaciones no tiene un problema de resultados. Tiene un problema de traducción.", by: "Santiago Escobar" },
      { k: "h2", t: "Cómo empezar" },
      { k: "p", t: "Establecer una línea base antes de la campaña, definir dos métricas de negocio acompañantes y aceptar una ventana de medición de al menos dos trimestres. Sin línea base no hay ROI, hay anécdota." },
    ],
  },
];

export const INSIGHT_ARTICLES = ARTICLES.filter(a => a.kind === "insight");
export const BLOG_ARTICLES = ARTICLES.filter(a => a.kind === "blog");

export const INSIGHT_FORMATS = ["Todos", "Artículo", "Podcast", "Recurso", "Estudio"] as const;
export const BLOG_CATEGORIES = ["Todos", ...Array.from(new Set(BLOG_ARTICLES.map(a => a.cat)))] as const;

/** Ruta de la interna. Insights y Blog viven dentro de Liderazgo. */
export function articlePath(a: Article) {
  return a.kind === "blog"
    ? `/thought-leadership/blog/${a.slug}`
    : `/thought-leadership/insights/${a.slug}`;
}

export const LISTING_PATH = {
  insight: "/thought-leadership/insights",
  blog: "/thought-leadership/blog",
} as const;

export function getArticle(slug?: string) {
  return ARTICLES.find(a => a.slug === slug);
}

export function relatedArticles(current: Article, n = 3) {
  const scored = ARTICLES.filter(a => a.slug !== current.slug).map(a => ({
    a,
    score:
      (a.cat === current.cat ? 2 : 0) +
      a.tags.filter(t => current.tags.includes(t)).length,
  }));
  return scored.sort((x, y) => y.score - x.score).slice(0, n).map(s => s.a);
}
