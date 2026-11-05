// Content — only facts published on e32.mx (Nov 2026) + E32's own UGC.
// Items marked VALIDAR need Guillermo's OK before going live.
const M = 'media/';
window.E32DATA = {
  common: {
    phones: [
      { city: 'CDMX', label: '55 6005 9987', tel: '+525560059987' },
      { city: 'GDL', label: '33 4717 2612', tel: '+523347172612' },
      { city: 'MTY', label: '81 4428 8103', tel: '+528144288103' }
    ],
    email: 'contacto@e32.mx',
    wa: '525560059987', // VALIDAR: número de WhatsApp para leads (hoy = contacto CDMX de e32.mx)
    ig: 'https://www.instagram.com/estudio32_/',
    fb: 'https://www.facebook.com/Estudio32mx/',
    privacy: 'https://e32.mx/aviso-de-privacidad',
    stats: [
      { n: 15, pre: '+', suf: '', unit: 'años', l: 'de experiencia' },
      { n: 100, pre: '+', suf: '', unit: '', l: 'clientes satisfechos' },
      { n: 50, pre: '+$', suf: 'M', unit: '', l: 'en valor de proyectos' },
      { n: 99, pre: '', suf: '%', unit: '', l: 'de obras a tiempo' }
    ],
    logos: ['brand1', 'brand2', 'brand3', 'brand4', 'brand5'].map(b => `${M}logos/${b}.png`),
    logoAlt: ['PRI', "McDonald's", 'Bahía Escondida', 'Carajillo', 'La Iglesia de Jesucristo'],
    ugc: [
      ['El peor momento para remodelar', 'Obra'], ['POV: ahora sí vas a construir', 'Construcción'],
      ['El error que sí cuesta', 'Consejo'], ['Así empieza un proyecto', 'Proceso'],
      ['3 cosas que tu casa no necesita', 'Diseño'], ['Este espacio, de principio a fin', 'Recorrido'],
      ['Materiales y acabados', 'Detalle'], ['Los detalles sí importan', 'Iluminación'],
      ['Antes: el mismo espacio', 'Antes / después'], ['Remodelar no es improvisar', 'Proceso'],
      ['Presupuesto claro', 'Presupuesto'], ['Antes de que empiece la obra', 'Planeación'],
      ['No vendemos casas: las diseñamos', 'Diseño'], ['Ninguna pieza suelta', 'Mobiliario'],
      ['Todo empezó siendo una idea', 'Render']
    ].map(([t, k], i) => ({ t, k, v: `${M}ugc/ugc${i + 1}.mp4`, p: `${M}ugc/ugc${i + 1}.jpg` })),
    projects: {
      amores: { n: 'Proyecto Amores', k: 'Cocina', img: `${M}img/proj1.webp` },
      santiago: { n: 'Corporativo Santiago', k: 'Oficina', img: `${M}img/proj2.webp` },
      tepepan: { n: 'Tepepán', k: 'Cocina', img: `${M}img/proj3.webp` },
      amc: { n: 'AMC', k: 'Sala ejecutiva', img: `${M}img/proj4.webp` },
      rangel: { n: 'Casa Rangel', k: 'Terraza', img: `${M}img/proj5.webp` },
      fd: { n: 'Corporativo FD', k: 'Oficina', img: `${M}img/proj6.webp` }
    },
    testimonials: [
      { q: 'Su capacidad para generar ideas frescas y plasmarlas en diseños elegantes superó mis expectativas.', n: 'Miguel Gómez' },
      { q: 'No solo es talentoso, sino también altamente profesional. Su compromiso con la satisfacción del cliente es evidente en cada etapa del proyecto.', n: 'Fernanda Lara' },
      { q: 'Estudio 32 transformó mi visión ambiciosa en una realidad impresionante.', n: 'Lariza Jiménes' }
    ],
    // Reseñas reales de Google Maps (Estudio 32 Diseño Arquitectónico y Construcción), nov 2026
    google: [
      { q: 'Trabajamos con Estudio 32 desde el diseño hasta la construcción de nuestra casa. Fue un proyecto grande y teníamos muchas dudas, pero nos fueron guiando. El resultado quedó muy bien resuelto, funcional y con mucho cuidado en los detalles.', n: 'Noelia Vasquez', tag: 'Diseño y construcción de casa', seg: 'casas' },
      { q: 'Es un despacho de arquitectos serios y profesionales. Cumplen con los tiempos de los proyectos. Además tienen buen gusto. Ellos diseñaron mi despacho de abogados.', n: 'Saúl García', tag: 'Despacho de abogados', seg: 'negocios' },
      { q: 'Fueron muy profesionales, claros en su comunicación y atentos a mis necesidades. Los recomendaría por su honestidad, trato amable y profesionalismo.', n: 'Leonardo Salinas', tag: 'Cotización de remodelación', seg: 'all' }
    ],
    steps: [
      { i: 'talk', t: 'Entrevista y visita al sitio', d: 'Una reunión para entender tus ideas y darles forma, en tu espacio.' },
      { i: 'render', t: 'Proyecto, render y presupuesto', d: 'Renders, planos y un presupuesto personalizado que se puede ajustar.' },
      { i: 'report', t: 'Ejecución con reportes', d: 'Obra con un solo equipo responsable y reportes periódicos de avance.' },
      { i: 'key', t: 'Entrega y seguimiento', d: 'Entrega profesional y comunicación directa hasta el último detalle.' }
    ],
    benefits: [
      { i: 'team', t: 'Atención personalizada desde el inicio', d: 'Acceso directo a nuestro equipo y reportes detallados en cada etapa.' },
      { i: 'budget', t: 'Proyecto claro, presupuesto transparente', d: 'Un proyecto detallado y un presupuesto personalizado, sin sorpresas.' },
      { i: 'shield', t: 'Lo que iniciamos, lo concluimos', d: 'Entrega profesional y seguimiento constante para que todo se ejecute según lo planeado.' }
    ],
    vs: {
      us: ['Presupuesto por escrito', 'Render antes de empezar', 'Reportes de avance', 'Un solo equipo responsable'],
      them: ['Presupuesto de palabra', 'Sin render previo', 'Cero reportes', 'Tres proveedores que coordinar']
    },
    form: {
      feel: ['Cálido y acogedor', 'Moderno y minimalista', 'Elegante y sofisticado', 'Funcional y práctico', 'Natural y luminoso'],
      budget: ['$500,000 - $1,000,000 mxn', '$1,000,000 - $3,000,000 mxn', '$3,000,000 - $5,000,000 mxn', '$5,000,000 - $10,000,000 mxn', 'Más de $10,000,000 mxn'],
      when: ['Ya estoy listo para empezar (este mes)', 'En los próximos 1 a 3 meses', 'En 3 a 6 meses', 'Todavía estoy explorando opciones'],
      where: ['CDMX – Benito Juárez, Miguel Hidalgo, Cuauhtémoc, Coyoacán, Álvaro Obregón', 'CDMX – Iztapalapa, GAM, Venustiano Carranza, Tláhuac, Xochimilco, Iztacalco', 'Edo. Méx – Huixquilucan, Naucalpan, Atizapán, Metepec', 'Edo. Méx – Nezahualcóyotl, Ecatepec, Coacalco, Chimalhuacán, Valle de Chalco', 'Otro']
    }
  },

  casas: {
    key: 'casas', other: 'negocios', title: 'Estudio 32 · Remodelamos tu casa',
    promo: 'Visita y <b>presupuesto por escrito</b> · CDMX · Edomex · GDL · MTY',
    hero: {
      eyebrow: 'Remodelación integral',
      h1: 'Compraste la casa. <em>Nosotros</em> la dejamos como la imaginaste.',
      lead: 'Arquitectura, obra e interiorismo con un solo equipo: render antes de empezar, presupuesto por escrito y reportes de avance hasta la entrega.',
      video: `${M}hero/home.mp4`, videoM: `${M}hero/home-m.mp4`,
      before: `${M}hero/home-before.webp`, after: `${M}hero/home-after.webp`,
      beforeM: `${M}hero/home-before-m.webp`, afterM: `${M}hero/home-after-m.webp`,
      film: [
        { tag: 'Así la compraron', h: 'Cara, nueva <em>y nada tuya.</em>', p: 'Acabados de catálogo, luz fría y muebles que no elegiste. Le pasa a casi todas las casas que se compran hechas.' },
        { tag: 'El proyecto', h: 'Primero la <em>ves en render.</em>', p: 'Visitamos tu casa, diseñamos cada espacio y te presentamos render, planos y presupuesto antes de mover un muro.' },
        { tag: 'Así la entregamos', h: 'Tu casa, <em>terminada y equipada.</em>', p: 'Un solo equipo de arquitectura, obra e interiorismo, con reportes de avance hasta el último detalle.' }
      ],
      chips: [
        { i: 'led', t: 'Iluminación LED integrada', x: 58, y: 9 },
        { i: 'blinds', t: 'Persianas motorizadas', x: 7, y: 30 },
        { i: 'panel', t: 'Control central', x: 76, y: 34 },
        { i: 'sofa', t: 'Mobiliario a medida', x: 68, y: 64 }
      ],
      slides: [
        { type: 'video', tag: 'Imagen ilustrativa', float: 'amores' },
        { type: 'ba', eyebrow: 'Antes y después', h1: 'De casa cara <em>a casa tuya.</em>', lead: 'Mismo espacio, mismo ángulo. Rediseñamos acabados, luz y mobiliario completo.', tag: 'Imagen ilustrativa', float: 'tepepan' },
        { type: 'cat', k: 'alberca', video: true, eyebrow: 'Albercas y terrazas', h1: 'Afuera también <em>se diseña.</em>', lead: 'Albercas, terrazas y roof gardens con un solo equipo: render, obra y acabados.', tag: 'Imagen ilustrativa' }
      ]
    },
    offer: {
      h: 'Todo lo que tu casa necesita, <em>con un solo equipo.</em>',
      lead: 'Diseñamos, construimos y amueblamos. Tú no coordinas a nadie.',
      items: [
        { i: 'remodel', t: 'Remodelación integral', d: 'Casas, terrazas y albercas, de la demolición a la entrega.', img: 'amores' },
        { i: 'kitchen', t: 'Cocinas y baños', d: 'Carpintería, cubiertas e iluminación diseñadas a la medida.', img: 'tepepan' },
        { i: 'build', t: 'Construcción', d: 'Vivienda unifamiliar y plurifamiliar con materiales de vanguardia.', img: 'rangel' },
        { i: 'sofa', t: 'Mobiliario a medida', d: 'Piezas exclusivas con materiales de primera y acabados que destacan.', imgSrc: `${M}img/grid.webp` },
        { i: 'plan', t: 'Arquitectura y render', d: 'Renders y planos detallados para ver tu proyecto antes de construir.', img: 'amc' }
      ]
    },
    smart: {
      eyebrow: 'La transformación',
      h: 'Mismo espacio. <em>Otra casa.</em>',
      lead: 'Desliza para comparar. Rediseñamos la distribución de la luz, los acabados y el mobiliario, e integramos la tecnología desde el proyecto.',
      feats: [ // VALIDAR con Guillermo: alcance de domótica
        { i: 'led', t: 'Iluminación integrada', d: 'Luz indirecta diseñada desde el plano, no agregada al final.' },
        { i: 'blinds', t: 'Persianas y cortinas motorizadas', d: 'Previstas en obra para que no se vea un solo cable.' },
        { i: 'panel', t: 'Control centralizado', d: 'Luz, persianas y audio desde un panel o tu celular.' },
        { i: 'sofa', t: 'Mobiliario a medida', d: 'Diseñado para el espacio, fabricado con materiales de primera.' }
      ]
    },
    projects: ['amores', 'tepepan', 'rangel', 'amc', 'santiago', 'fd'],
    faq: [
      ['¿Qué tipo de proyectos hacen?', 'Remodelaciones de casas, terrazas, albercas y oficinas; construcción de vivienda unifamiliar y plurifamiliar; arquitectura con renders y planos, y mobiliario a medida.'],
      ['¿Cómo empieza el proceso?', 'Con una entrevista y visita al sitio para entender tus ideas. Después te presentamos el proyecto, el render y un presupuesto que se puede ajustar antes de ejecutar.'],
      ['¿Voy a saber cómo va la obra?', 'Sí. Recibes reportes periódicos del avance y tienes comunicación directa con nuestro equipo durante todo el proyecto.'],
      ['¿En qué ciudades trabajan?', 'Atendemos CDMX y Estado de México, y tenemos contacto directo en Guadalajara y Monterrey.'],
      ['¿Desde qué presupuesto trabajan?', 'Nuestro formulario contempla proyectos desde $500,000 MXN. En la visita definimos el alcance y te entregamos un presupuesto personalizado.']
    ],
    cta: { h: 'Empieza por <em>la visita.</em>', lead: 'Cuéntanos de tu casa. Te contactamos para agendar la entrevista y visita al sitio.', type: 'Remodelación de casa' },
    band: { h: '¿Lista la casa? <em>Hagámosla tuya.</em>', img: `${M}hero/home-after.webp` }
  },

  negocios: {
    key: 'negocios', other: 'casas', title: 'Estudio 32 · Oficinas y espacios comerciales',
    promo: 'Corporativo y comercial · <b>render, presupuesto y reportes</b> · CDMX · GDL · MTY',
    hero: {
      eyebrow: 'Oficinas y locales',
      h1: 'De obra gris a <em>listo para operar.</em>',
      lead: 'Diseñamos, construimos y amueblamos espacios corporativos y comerciales con un solo equipo responsable, render previo y presupuesto transparente.',
      video: `${M}hero/local.mp4`, videoM: `${M}hero/local-m.mp4`,
      before: `${M}hero/local-before.webp`, after: `${M}hero/local-after.webp`,
      beforeM: `${M}hero/local-before-m.webp`, afterM: `${M}hero/local-after-m.webp`,
      film: [
        { tag: 'Así lo recibimos', h: 'Obra gris, <em>fecha de apertura.</em>', p: 'Muros desnudos, instalaciones por resolver y un negocio que no puede esperar.' },
        { tag: 'El proyecto', h: 'Render, planos <em>y presupuesto.</em>', p: 'Arquitectos que diseñan con rigor: ves el espacio terminado antes de iniciar obra.' },
        { tag: 'Así lo entregamos', h: 'Un espacio que <em>habla de tu marca.</em>', p: 'Obra, acabados y mobiliario a medida con un solo equipo y reportes de avance.' }
      ],
      chips: [
        { i: 'led', t: 'Iluminación arquitectónica', x: 64, y: 10 },
        { i: 'plan', t: 'Muros y acabados', x: 34, y: 20 },
        { i: 'sofa', t: 'Recepción a medida', x: 70, y: 56 },
        { i: 'office', t: 'Listo para operar', x: 80, y: 74 }
      ],
      slides: [
        { type: 'video', tag: 'Imagen ilustrativa', float: 'santiago' },
        { type: 'ba', eyebrow: 'Antes y después', h1: 'Recibimos obra gris. <em>Entregamos marca.</em>', lead: 'Mismo espacio, mismo ángulo: muros, plafones, iluminación y mobiliario a medida.', tag: 'Imagen ilustrativa', float: 'fd' },
        { type: 'cat', k: 'oficina', eyebrow: 'Oficinas corporativas', h1: 'Un solo equipo, <em>de la obra al último mueble.</em>', lead: 'Arquitectura, construcción e interiorismo sin coordinar a tres proveedores.', tag: 'Imagen ilustrativa' }
      ]
    },
    offer: {
      h: 'Espacios que trabajan <em>para tu negocio.</em>',
      lead: 'De la arquitectura al último mueble, con un solo responsable.',
      items: [
        { i: 'office', t: 'Oficinas corporativas', d: 'Áreas de trabajo, salas de juntas y privados diseñados a la medida.', img: 'fd' },
        { i: 'team', t: 'Lobbies y salas ejecutivas', d: 'Recepciones y espacios de representación que hablan de tu marca.', img: 'santiago' },
        { i: 'store', t: 'Restaurantes y locales', d: 'Espacios comerciales listos para recibir clientes.', img: 'amc' },
        { i: 'sofa', t: 'Mobiliario a medida', d: 'Piezas exclusivas, materiales de primera y acabados que destacan.', imgSrc: `${M}img/grid.webp` },
        { i: 'build', t: 'Construcción', d: 'Obra nueva con materiales de vanguardia y mano de obra experta.', img: 'rangel' }
      ]
    },
    sectors: [
      { i: 'office', t: 'Oficinas', d: 'Corporativos, coworkings y despachos.' },
      { i: 'dish', t: 'Restaurantes', d: 'Salón, barra y cocina en un solo proyecto.' },
      { i: 'store', t: 'Retail y locales', d: 'Espacios comerciales con identidad de marca.' },
      { i: 'event', t: 'Salones y clubes', d: 'Espacios para eventos y convenciones.' }
    ],
    smart: {
      eyebrow: 'La transformación',
      h: 'Recibimos obra gris. <em>Entregamos tu marca.</em>',
      lead: 'Desliza para comparar el mismo espacio antes y después de un proyecto integral de arquitectura, obra e interiorismo.',
      feats: [
        { i: 'plan', t: 'Arquitectura y render', d: 'Planos y renders detallados antes de iniciar obra.' },
        { i: 'build', t: 'Obra civil e instalaciones', d: 'Muros, plafones, eléctrico e hidráulico con un solo equipo.' },
        { i: 'led', t: 'Iluminación y acabados', d: 'Mármol, madera y luz arquitectónica integrada desde el proyecto.' },
        { i: 'sofa', t: 'Mobiliario a medida', d: 'Recepciones, salas y piezas exclusivas fabricadas para tu espacio.' }
      ]
    },
    projects: ['santiago', 'fd', 'amc', 'amores', 'tepepan', 'rangel'],
    faq: [
      ['¿Hacen oficinas y espacios comerciales?', 'Sí. Hemos entregado oficinas corporativas, salas ejecutivas y espacios comerciales, además de remodelaciones residenciales.'],
      ['¿Quién coordina la obra?', 'Nosotros. Arquitectura, construcción, interiorismo y mobiliario los resuelve un solo equipo, con acceso directo para ti.'],
      ['¿Cómo controlo el avance?', 'Recibes reportes periódicos del avance y mantienes comunicación directa con el equipo para que todo se ejecute según lo planeado.'],
      ['¿En qué ciudades trabajan?', 'Atendemos CDMX y Estado de México, y tenemos contacto directo en Guadalajara y Monterrey.'],
      ['¿Cómo arrancamos?', 'Con una entrevista y visita al sitio. Después te presentamos proyecto, render y un presupuesto personalizado que se puede ajustar.']
    ],
    cta: { h: 'Hablemos de <em>tu espacio.</em>', lead: 'Déjanos tus datos y te contactamos para agendar la visita al sitio.', type: 'Remodelación de oficina' },
    band: { h: 'Tu próximo espacio <em>empieza aquí.</em>', img: `${M}hero/local-after.webp` }
  }
};
