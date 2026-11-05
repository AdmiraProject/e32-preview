// Round 2 sections: renovar (Livspace categories) · banner · proyecto ideal (TripleTen) ·
// proceso apilado (La Haus steps + Clay stacking) · tips (Livspace reels) · lead pop-up.
(() => {
  const C = window.E32DATA.common, M = 'media/';
  // B2B renders stay as stills (their AI loops had jump cuts); B2C loops are clean
const STILL = new Set(['oficina', 'restaurante', 'local', 'juntas', 'salon', 'recepcion']);
  const cat = k => ({ v: STILL.has(k) ? '' : `${M}cat/${k}.mp4`, p: `${M}cat/${k}.webp` });
  const vtag = c => c.v ? `<video muted playsinline loop preload="none" data-src="${c.v}"></video>` : '';
  const Q = C.google;

  Object.assign(window.E32DATA.casas, {
    renovar: {
      h: '¿Qué quieres <em>renovar?</em>',
      items: [['cocina', 'Cocinas'], ['bano', 'Baños'], ['alberca', 'Albercas'], ['terraza', 'Terrazas'], ['casa', 'Casa completa']]
    },
    banner: {
      h: 'El siguiente paso después de <em>comprar casa.</em>',
      p: 'Elegir a un solo equipo de arquitectura, obra e interiorismo. Agenda tu visita y recibe un presupuesto personalizado.',
      img: `${M}hero/home-after.webp`
    },
    ideal: {
      h: 'Descubre tu <b>proyecto ideal</b>',
      pills: ['Diseño + obra', 'Un solo equipo'],
      stat: { n: '99%', l: 'de nuestras obras se entregan a tiempo' },
      items: [
        { k: 'alberca', t: 'Albercas y jardín', chip: 'Exterior', d: 'Diseñamos y construimos tu alberca, deck y áreas exteriores: estructura, instalaciones y acabados con un solo equipo.', inc: ['Render previo', 'Obra civil e instalaciones', 'Deck y paisajismo'], a: 'Jardín sin uso', b: 'Alberca y deck', type: 'Construcción' },
        { k: 'terraza', t: 'Terrazas y roof garden', chip: 'Exterior', d: 'Convertimos azoteas y patios en terrazas para vivir: pérgolas, cocina exterior, iluminación y mobiliario a medida.', inc: ['Pérgola y deck', 'Cocina exterior', 'Iluminación'], a: 'Azotea vacía', b: 'Roof garden', type: 'Remodelación de casa' },
        { k: 'casa', t: 'Construcción de casa', chip: 'Obra nueva', d: 'Viviendas unifamiliares y plurifamiliares de alto nivel, con materiales de vanguardia y mano de obra experta.', inc: ['Arquitectura y planos', 'Construcción', 'Interiorismo'], a: 'Terreno', b: 'Casa terminada', type: 'Construcción' },
        { k: 'campo', t: 'Casa de descanso', chip: 'Obra nueva', d: 'Tu casa de campo diseñada y construida sin que tengas que vivir la obra: tú solo vienes a ver los avances.', inc: ['Visita al terreno', 'Render 3D', 'Reportes de avance'], a: 'Terreno', b: 'Casa de campo', type: 'Construcción' },
        { k: 'cocina', t: 'Cocinas', chip: 'Interior', d: 'Carpintería a medida, cubiertas de piedra e iluminación integrada, diseñadas para cómo cocinas tú.', inc: ['Carpintería a medida', 'Cubiertas', 'Iluminación'], a: 'Cocina de catálogo', b: 'Cocina a medida', type: 'Remodelación de casa' },
        { k: 'bano', t: 'Baños', chip: 'Interior', d: 'Baños con acabados de piedra, regaderas de piso y muebles flotantes, resueltos con instalaciones nuevas.', inc: ['Instalaciones nuevas', 'Piedra y acabados', 'Mobiliario'], a: 'Baño de origen', b: 'Baño spa', type: 'Remodelación de casa' }
      ]
    }
  });

  Object.assign(window.E32DATA.negocios, {
    renovar: {
      h: '¿Qué espacio <em>necesitas?</em>',
      items: [['oficina', 'Oficinas'], ['restaurante', 'Restaurantes'], ['local', 'Locales'], ['juntas', 'Salas de juntas'], ['salon', 'Salones de eventos']]
    },
    banner: {
      h: 'El siguiente paso después de <em>firmar el local.</em>',
      p: 'Un solo equipo para arquitectura, obra, instalaciones y mobiliario. Agenda una visita al sitio y recibe tu presupuesto.',
      img: `${M}hero/local-after.webp`
    },
    ideal: {
      h: 'Encuentra el <b>espacio ideal</b> para tu negocio',
      pills: ['Corporativo', 'Comercial'],
      stat: { n: '+$50M', l: 'en valor de proyectos entregados' },
      items: [
        { k: 'oficina', t: 'Oficinas corporativas', chip: 'Corporativo', d: 'Áreas de trabajo, privados y salas diseñadas a la medida de tu equipo, con iluminación y acústica resueltas.', inc: ['Distribución y render', 'Obra e instalaciones', 'Mobiliario a medida'], a: 'Obra gris', b: 'Oficina operando', type: 'Remodelación de oficina' },
        { k: 'restaurante', t: 'Restaurantes', chip: 'Comercial', d: 'Salón, barra y áreas de servicio en un solo proyecto, con acabados que aguantan la operación diaria.', inc: ['Concepto y render', 'Obra e instalaciones', 'Barra y mobiliario'], a: 'Local vacío', b: 'Restaurante abierto', type: 'Remodelación de oficina' },
        { k: 'local', t: 'Locales y retail', chip: 'Comercial', d: 'Espacios comerciales con identidad de marca: exhibición, iluminación y fachada listas para recibir clientes.', inc: ['Diseño de marca en espacio', 'Exhibición a medida', 'Iluminación'], a: 'Local en obra gris', b: 'Tienda lista', type: 'Remodelación de oficina' },
        { k: 'juntas', t: 'Salas de juntas', chip: 'Corporativo', d: 'Salas ejecutivas y de consejo con carpintería, tecnología integrada y materiales de representación.', inc: ['Carpintería', 'Tecnología integrada', 'Acabados'], a: 'Sala genérica', b: 'Sala ejecutiva', type: 'Remodelación de oficina' },
        { k: 'salon', t: 'Salones de eventos', chip: 'Comercial', d: 'Espacios para eventos y convenciones con iluminación escénica, acabados resistentes y circulación pensada.', inc: ['Iluminación', 'Acabados', 'Mobiliario'], a: 'Nave vacía', b: 'Salón listo', type: 'Construcción' },
        { k: 'recepcion', t: 'Recepciones y lobbies', chip: 'Corporativo', d: 'La primera impresión de tu marca: recepciones con mostrador a medida, piedra, madera y luz arquitectónica.', inc: ['Mostrador a medida', 'Piedra y madera', 'Luz arquitectónica'], a: 'Acceso sin diseño', b: 'Lobby de marca', type: 'Remodelación de oficina' }
      ]
    }
  });

  // La Haus-style steps tailored to E32 — visuals use E32's own UGC where possible
  const STACK = [
    { tag: 'Paso 1 · Visita', tone: 'gold', h: 'Visitamos tu espacio <span>y entendemos tu idea.</span>', p: 'Una entrevista y visita al sitio para conocer cómo vives o cómo opera tu negocio, medir y detectar lo que no se ve.',
      proof: { q: 'excelente atención que recibí en todo momento', n: Q[2].n }, media: { step: 'visita' },
      ui: `<div class="stk-ui cal"><b>Agenda tu visita</b><span>Entrevista y visita al sitio</span><div class="cal-days">${['L', 'M', 'M', 'J', 'V'].map((d, i) => `<i class="${i === 2 ? 'on' : ''}">${d}</i>`).join('')}</div></div>` },
    { tag: 'Paso 2 · Proyecto', tone: 'sage', h: 'Ves tu proyecto en render <span>antes de mover un muro.</span>', p: 'Renders, planos y un presupuesto personalizado que se puede ajustar. Decides con todo claro, sin sorpresas.',
      proof: { q: 'teníamos muchas dudas, pero nos fueron guiando', n: Q[0].n }, media: { step: 'render' },
      ui: `<div class="stk-ui list"><b>Presupuesto por escrito</b>${['Demolición y obra civil', 'Instalaciones', 'Acabados', 'Mobiliario a medida'].map(t => `<span>${ico('check')}${t}</span>`).join('')}<em>Ajustable</em></div>` },
    { tag: 'Paso 3 · Obra', tone: 'clay', h: 'Un solo equipo en obra, <span>con reportes de avance.</span>', p: 'Arquitectura, construcción e interiorismo coordinados por nosotros. Recibes reportes periódicos y hablas directo con el equipo.',
      proof: { q: 'Cumplen con los tiempos de los proyectos', n: Q[1].n }, media: { step: 'obra' },
      ui: `<div class="stk-ui tl"><b>Reporte de avance</b>${[['Demolición', 1], ['Instalaciones', 1], ['Acabados', 2], ['Entrega', 0]].map(([t, s]) => `<span class="s${s}"><i></i>${t}</span>`).join('')}</div>` },
    { tag: 'Paso 4 · Entrega', tone: 'ink', h: 'Lo que iniciamos, <span>lo concluimos.</span>', p: 'Entrega profesional y seguimiento constante hasta el último detalle. Tu espacio, terminado y listo para vivirse.',
      proof: { q: 'El resultado quedó muy bien resuelto, funcional y con mucho cuidado en los detalles', n: Q[0].n }, media: { step: 'entrega' },
      ui: `<div class="stk-ui done">${ico('key')}<b>Entregado</b><span>Listo para estrenar</span></div>` }
  ];

  const tile = (k, label, i) => { const c = cat(k); return `<a class="rn" href="#contacto" data-lead data-type="${label}">
      <img class="${c.v ? '' : 'kb'}" src="${c.p}" alt="" loading="lazy">${vtag(c)}<span class="rn-lab">${label}</span><span class="rn-go">${ico('arrow')}</span></a>`; };

  const S = window.E32S = {
    renovar: p => `<section class="sec sec-tight" id="servicios"><div class="wrap">
      <div class="lv-head"><span class="eyebrow">Nuestros espacios</span><h2 class="h2">${p.renovar.h}</h2></div>
      <div class="rn-row">${p.renovar.items.map(([k, l], i) => tile(k, l, i)).join('')}</div>
      <p class="note">Imágenes ilustrativas.</p>
    </div></section>
    <section class="lv-banner rv"><img src="${p.banner.img}" alt="" loading="lazy">
      <div class="wrap"><div class="lvb-in"><h2>${p.banner.h}</h2><p>${p.banner.p}</p><a class="btn-sq" href="#contacto" data-lead>Agendar visita</a></div></div></section>`,

    ideal: p => {
      const d = p.ideal;
      return `<section class="sec white" id="proyecto-ideal"><div class="wrap">
        <div class="tt-head"><h2 class="tt-h">${d.h}</h2><div class="tt-pills">${d.pills.map(x => `<span>${x}</span>`).join('')}</div></div>
        <div class="tt" data-tt>
          <div class="tt-side">
            <ul class="tt-list" role="tablist">${d.items.map((it, i) => `<li><button role="tab" class="${i ? '' : 'on'}" data-i="${i}"><i></i><span>${it.t}</span></button></li>`).join('')}</ul>
            <div class="tt-stat"><span>Dato real</span><b>${d.stat.n}</b><p>${d.stat.l}</p></div>
          </div>
          <div class="tt-stage">${d.items.map((it, i) => { const c = cat(it.k); return `<div class="tt-slide${i ? '' : ' on'}">
            <img class="${c.v ? '' : 'kb'}" src="${c.p}" alt="" loading="lazy">${vtag(c)}
            <div class="tt-ba"><b>${it.t}</b><span><em>Antes:</em>${it.a}</span><span><em>Después:</em>${it.b}</span></div>
            <div class="tt-card"><h3>${it.t}</h3><span class="tt-chip">${it.chip}</span><p>${it.d}</p>
              <ul>${it.inc.map(x => `<li>${ico('check')}${x}</li>`).join('')}</ul>
              <a class="btn btn-ink" href="#contacto" data-lead data-type="${it.type}" data-note="${it.t}">Cotizar ${it.t.split(' ')[0].toLowerCase()} ${ico('arrow')}</a></div>
          </div>`; }).join('')}<span class="tt-tag">Imagen ilustrativa</span></div>
        </div>
      </div></section>`;
    },

    stack: p => `<section class="sec stk-sec" id="proceso"><div class="wrap">
      <div class="lv-head center"><span class="eyebrow">Cómo funciona</span><h2 class="h2">Con Estudio 32, tu proyecto <em>toma 4 pasos.</em></h2></div>
      <div class="stk" data-stk>${STACK.map((s, i) => {
        const m = `<img src="${M}steps/${s.media.step}.webp" alt="" loading="lazy"><video muted playsinline loop preload="none" data-src="${M}steps/${s.media.step}.mp4"></video>`;
        return `<article class="stk-card t-${s.tone}" style="--i:${i}">
          <div class="stk-copy"><span class="stk-tag"><i></i><i></i><b>${s.tag}</b></span><h3>${s.h}</h3><p>${s.p}</p>
            <div class="stk-ctas"><a class="btn btn-tone" href="#contacto" data-lead>Agenda tu visita ${ico('arrow')}</a><a class="btn btn-white" href="#proyectos">Ver proyectos</a></div>
            <div class="stk-proof"><span>${ico('star')}${ico('star')}${ico('star')}${ico('star')}${ico('star')}</span><p>“${s.proof.q}.” <b>— ${s.proof.n}, Google</b></p></div></div>
          <div class="stk-media">${m}${s.ui}<span class="stk-n">0${i + 1}</span></div>
        </article>`; }).join('')}</div>
    </div></section>`,

    tips: () => `<section class="sec sec-tight lv-tips" id="tips"><div class="wrap">
      <div class="lv-head row"><div><span class="eyebrow">Ahora en pantalla</span><h2 class="h2">Tips de <em>diseño y obra</em> en tendencia</h2></div><a class="lv-all" href="${C.ig}" target="_blank" rel="noopener">Ver todos</a></div></div>
      <div class="ugc-row tips-row" data-ugc>${C.ugc.map((u, i) => `<button class="uc tp" data-v="${u.v}" aria-label="Ver video: ${u.t}">
        <img src="${u.p}" alt="" loading="lazy"><video muted playsinline loop preload="none" data-src="${u.v}"></video>
        <span class="uc-play">${ico('play')}</span><span class="uc-cap"><small>${u.k}</small><b>${u.t}</b></span></button>`).join('')}</div>
    </section>`,

    contact: p => `<section class="sec lv-contact" id="contacto"><div class="wrap cta-grid">
      <div class="cta-side rv"><span class="eyebrow">Comienza tu proyecto</span><h2 class="h2" style="margin:18px 0 20px">${p.cta.h}</h2><p class="lead">${p.cta.lead}</p>
        <ul class="contact-list">${C.phones.map(ph => `<li><a href="tel:${ph.tel}">${ico('phone')}${ph.label}<small>${ph.city}</small></a></li>`).join('')}<li><a href="https://wa.me/${C.wa}" target="_blank" rel="noopener">${ico('wa')}WhatsApp<small>Respuesta directa</small></a></li><li><a href="mailto:${C.email}">${ico('mail')}${C.email}<small>Correo</small></a></li></ul></div>
      <div class="q-card rv rv-d2"><span class="q-badge">Menos de 1 minuto</span><h3>Cotiza en 4 pasos</h3>
        <ol>${['Nombre, WhatsApp y correo', 'Tipo de proyecto', 'Presupuesto y fecha', 'Ubicación y estilo'].map((t, i) => `<li><i>${i + 1}</i>${t}</li>`).join('')}</ol>
        <button class="btn btn-gold" data-lead>Empezar cotización ${ico('arrow')}</button>
        <p>Al terminar te llevamos a WhatsApp con tu solicitud lista.</p></div>
    </div></section>`,

    leadModal: p => {
      const types = [['Remodelación de casa', 'remodel'], ['Remodelación de oficina', 'office'], ['Construcción', 'build'], ['Cotizar mobiliario', 'sofa']];
      const pills = (name, arr) => `<div class="lm-pills">${arr.map(o => `<label><input type="radio" name="${name}" value="${o}"><span>${o}</span></label>`).join('')}</div>`;
      return `<div class="lm" data-lm role="dialog" aria-modal="true" aria-labelledby="lm-t" hidden>
        <div class="lm-box">
          <aside class="lm-aside"><img src="${p.hero.after}" alt=""><div><img class="lm-logo" src="media/img/logo.png" alt="Estudio 32"><h3>Tu proyecto, <em>con un solo equipo.</em></h3>
            <ul>${['Render antes de empezar', 'Presupuesto personalizado', 'Reportes de avance'].map(t => `<li>${ico('check')}${t}</li>`).join('')}</ul></div></aside>
          <form class="lm-main" novalidate>
            <button type="button" class="lm-x" aria-label="Cerrar">${ico('close')}</button>
            <div class="lm-prog"><i></i></div><span class="lm-step">Paso <b>1</b> de 4</span>
            <fieldset class="lm-pane on" data-p="0"><legend id="lm-t">Empecemos: ¿cómo te contactamos?</legend>
              <div class="fld"><label for="lm-n">Nombre *</label><input id="lm-n" name="name" autocomplete="name" required></div>
              <div class="fld"><label for="lm-p">WhatsApp *</label><input id="lm-p" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="10 dígitos" required></div>
              <div class="fld"><label for="lm-e">Correo electrónico *</label><input id="lm-e" name="email" type="email" autocomplete="email" required></div>
              <p class="legal">Al continuar aceptas nuestro <a href="${C.privacy}" target="_blank" rel="noopener">Aviso de Privacidad</a>.</p></fieldset>
            <fieldset class="lm-pane" data-p="1"><legend>¿Qué proyecto tienes en mente?</legend>
              <div class="lm-types">${types.map(([t, i]) => `<label><input type="radio" name="type" value="${t}"><span>${ico(i)}${t}</span></label>`).join('')}</div>
              <input type="hidden" name="note"><p class="lm-note" data-note></p></fieldset>
            <fieldset class="lm-pane" data-p="2"><legend>¿Cuál es tu presupuesto estimado?</legend>${pills('budget', C.form.budget)}
              <legend class="sub">¿Cuándo planeas iniciar?</legend>${pills('when', C.form.when)}</fieldset>
            <fieldset class="lm-pane" data-p="3"><legend>¿Dónde te encuentras?</legend>${pills('where', C.form.where)}
              <legend class="sub">¿Qué sensación quieres que transmita?</legend>${pills('feel', C.form.feel)}</fieldset>
            <div class="lm-pane lm-ok" data-p="4"><span class="lm-check">${ico('check')}</span><h3>¡Listo<span data-nm></span>!</h3><p>Te llevamos a WhatsApp con tu solicitud lista para enviar a Estudio 32.</p>
              <a class="btn btn-wa" data-wa href="https://wa.me/${C.wa}" target="_blank" rel="noopener">${ico('wa')} Continuar en WhatsApp</a><small data-wa-note>Abriendo WhatsApp…</small></div>
            <div class="lm-nav"><button type="button" class="lm-back">${ico('left')} Atrás</button><span class="lm-err" role="alert"></span><button type="button" class="btn btn-gold lm-next">Continuar ${ico('arrow')}</button></div>
          </form>
        </div></div>`;
    }
  };

  // ---------- behaviour ----------
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lazyPlay = (root, sel) => {
    const io = new IntersectionObserver(es => es.forEach(e => { const v = e.target.querySelector('video'); if (!v) return;
      if (e.isIntersecting && !RM) { if (!v.src) v.src = v.dataset.src; v.play().then(() => v.classList.add('on')).catch(() => {}); } else v.pause(); }), { threshold: .35 });
    root.querySelectorAll(sel).forEach(el => io.observe(el));
  };

  S.init = p => {
    lazyPlay(document, '.rn, .stk-media');
    const uio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('live', e.isIntersecting)), { threshold: .45 });
    document.querySelectorAll('.stk-card').forEach(c => uio.observe(c));

    // TripleTen picker
    const tt = document.querySelector('[data-tt]');
    if (tt) {
      const btns = [...tt.querySelectorAll('.tt-list button')], slides = [...tt.querySelectorAll('.tt-slide')];
      let i = 0, t, inView = false;
      const go = n => { i = (n + btns.length) % btns.length;
        btns.forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', k === i); b.classList.remove('run'); });
        slides.forEach((s, k) => { s.classList.toggle('on', k === i); const v = s.querySelector('video'); if (!v) return; if (k === i && inView && !RM) { if (!v.src) v.src = v.dataset.src; v.play().then(() => v.classList.add('on')).catch(() => {}); } else v.pause(); });
        void btns[i].offsetWidth; if (!RM) btns[i].classList.add('run');
        clearTimeout(t); if (!RM && inView) t = setTimeout(() => go(i + 1), 6500); };
      btns.forEach((b, k) => { b.onclick = () => { inView = true; go(k); };
        b.onkeydown = e => { if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); go(k + 1); btns[i].focus(); } if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); go(k - 1); btns[i].focus(); } }; });
      new IntersectionObserver(([e]) => { inView = e.isIntersecting; if (inView) go(i); else clearTimeout(t); }, { threshold: .4 }).observe(tt);
    }

    // Clay-style stacking cards
    const stk = document.querySelector('[data-stk]');
    if (stk && !RM) {
      const cards = [...stk.children];
      const upd = () => { cards.forEach((c, k) => { const nx = cards[k + 1]; if (!nx) return;
        const top = c.getBoundingClientRect().top, ntop = nx.getBoundingClientRect().top, h = c.offsetHeight;
        const pr = Math.min(1, Math.max(0, 1 - (ntop - top) / h));
        c.style.setProperty('--s', (1 - pr * .06).toFixed(4)); c.style.setProperty('--d', (pr * .35).toFixed(3)); }); };
      addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true }); upd();
    }

    // Lead pop-up
    const lm = document.querySelector('[data-lm]'); if (!lm) return;
    const f = lm.querySelector('form'), panes = [...lm.querySelectorAll('.lm-pane')], next = lm.querySelector('.lm-next'), back = lm.querySelector('.lm-back'), err = lm.querySelector('.lm-err');
    let step = 0, lastFocus;
    const show = n => { step = n; panes.forEach((x, k) => x.classList.toggle('on', k === n));
      lm.querySelector('.lm-prog i').style.width = `${Math.min(n, 4) / 4 * 100}%`; lm.querySelector('.lm-step b').textContent = Math.min(n + 1, 4);
      lm.classList.toggle('done', n === 4); back.style.visibility = n && n < 4 ? 'visible' : 'hidden';
      next.innerHTML = n === 3 ? `Enviar y agendar visita ${ico('arrow')}` : `Continuar ${ico('arrow')}`; err.textContent = '';
      const first = panes[n].querySelector('input:checked, input:not([type=hidden])'); first && setTimeout(() => first.focus({ preventScroll: true }), 50); };
    const valid = () => {
      const need = [null, ['type'], ['budget', 'when'], ['where', 'feel']][step];
      if (need) { const miss = need.filter(nm => !f.querySelector(`[name="${nm}"]:checked`)); if (miss.length) { err.textContent = 'Elige una opción para continuar.'; return false; } return true; }
      const bad = [...panes[0].querySelectorAll('[required]')].filter(x => !x.value.trim() || (x.type === 'email' && !/^\S+@\S+\.\S+$/.test(x.value)) || (x.type === 'tel' && x.value.replace(/\D/g, '').length < 10));
      panes[0].querySelectorAll('input').forEach(x => x.classList.toggle('bad', bad.includes(x)));
      if (bad.length) { err.textContent = 'Revisa los campos marcados.'; bad[0].focus(); return false; } return true;
    };
    next.onclick = () => { if (!valid()) return;
      if (step === 3) { // Producción: enviar al webhook actual de e32.mx (Zapier). Desactivado en el prototipo.
        lm.querySelector('[data-nm]').textContent = f.name.value ? `, ${f.name.value.split(' ')[0]}` : '';
        const v = nm => (f.querySelector(`[name="${nm}"]:checked`) || f[nm] || {}).value || '';
        const msg = [`Hola Estudio 32, soy ${f.name.value.trim()}.`, `Quiero cotizar: ${v('type')}${f.note.value ? ` (${f.note.value})` : ''}.`,
          `Presupuesto: ${v('budget')}.`, `Inicio: ${v('when')}.`, `Ubicación: ${v('where')}.`, `Estilo: ${v('feel')}.`,
          `Tel: ${f.phone.value.trim()} · ${f.email.value.trim()}`].join('\n');
        const url = `https://wa.me/${C.wa}?text=${encodeURIComponent(msg)}`;
        const a = lm.querySelector('[data-wa]'); a.href = url; show(4);
        // Producción: además enviar el lead al webhook actual de e32.mx (Zapier) antes de redirigir.
        const w = window.open(url, '_blank'); if (w) w.opener = null; lm.querySelector('[data-wa-note]').textContent = w ? 'Si WhatsApp no se abrió, toca el botón.' : 'Toca el botón para abrir WhatsApp.';
        return; }
      show(step + 1); };
    back.onclick = () => show(Math.max(0, step - 1));
    // auto-advance on single-choice steps
    f.addEventListener('change', e => { if (e.target.name === 'type') setTimeout(() => step === 1 && show(2), 220); err.textContent = ''; });
    const open = el => { lastFocus = document.activeElement; f.reset(); const ty = el?.dataset.type || p.cta.type;
      const r = [...f.querySelectorAll('[name=type]')].find(x => x.value === ty); if (r) r.checked = true;
      const note = el?.dataset.note || ''; f.note.value = note; lm.querySelector('[data-note]').textContent = note ? `Interés: ${note}` : '';
      lm.hidden = false; void lm.offsetWidth; lm.classList.add('on'); document.documentElement.classList.add('lm-lock'); show(0); };
    const close = () => { lm.classList.remove('on'); document.documentElement.classList.remove('lm-lock'); setTimeout(() => lm.hidden = true, 300); lastFocus?.focus?.(); };
    document.addEventListener('click', e => { const a = e.target.closest('[data-lead], a[href="#contacto"], a[href^="https://wa.me"], a[href^="tel:"]'); if (!a || a.closest('[data-lm]')) return; e.preventDefault(); open(a); });
    lm.querySelector('.lm-x').onclick = close;
    lm.addEventListener('click', e => { if (e.target === lm) close(); });
    addEventListener('keydown', e => { if (lm.hidden) return; if (e.key === 'Escape') close();
      if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type !== 'radio') { e.preventDefault(); next.click(); }
      if (e.key === 'Tab') { const fs = [...lm.querySelectorAll('button, a, input:not([type=hidden])')].filter(x => x.offsetParent); const a = fs[0], z = fs[fs.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } } });
  };
})();
