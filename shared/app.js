// Estudio 32 landing renderer. Usage: E32.page('casas'|'negocios', 'card'|'film')
(() => {
  const D = window.E32DATA, C = D.common;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isM = () => innerWidth < 761;
  const P = k => C.projects[k];
  const wa = `tel:${C.phones[0].tel}`;

  const header = (p, mode) => `
  <div class="promo">${p.promo}</div>
  <header class="hdr"><div class="wrap">
    <a class="brand" href="#inicio" aria-label="Estudio 32"><img src="media/img/logo.png" alt=""><span>estudio 32<small>Arquitectura · Obra · Interiorismo</small></span></a>
    <nav class="nav" aria-label="Principal">
      <a href="#servicios">Espacios</a><a href="#transformacion">Antes y después</a><a href="#proceso">Cómo funciona</a><a href="#tips">Tips</a><a href="#proyectos">Proyectos</a>
    </nav>
    <div class="seg" role="tablist" aria-label="Tipo de proyecto">
      <a href="casas-${mode === 'film' ? 'b' : 'a'}.html" class="${p.key === 'casas' ? 'on' : ''}">Casas</a>
      <a href="negocios-${mode === 'film' ? 'b' : 'a'}.html" class="${p.key === 'negocios' ? 'on' : ''}">Negocios</a>
    </div>
    <a class="btn btn-ink" href="#contacto">Comenzar proyecto ${ico('arrow')}</a>
  </div></header>`;

  // Hero A — Luuna-style animated card carousel
  const heroCard = p => {
    const h = p.hero;
    const slide = (s, i) => {
      let media = '';
      if (s.type === 'video') media = `<video muted playsinline loop preload="auto" poster="${h.after}" data-src="${h.video}" data-srcm="${h.videoM}"></video>`;
      if (s.type === 'ba') media = `<div class="hc-ba"><picture><source media="(max-width:760px)" srcset="${h.beforeM}"><img src="${h.before}" alt="Antes"></picture><picture><source media="(max-width:760px)" srcset="${h.afterM}"><img class="after" src="${h.after}" alt="Después"></picture></div>`;
      if (s.type === 'cat') media = s.video ? `<video muted playsinline loop preload="none" poster="media/cat/${s.k}.webp" data-src="media/cat/${s.k}.mp4"></video>` : `<img class="kb" src="media/cat/${s.k}.webp" alt="">`;
      if (s.type === 'ugc') { const u = C.ugc[s.ugc]; media = `<video muted playsinline loop preload="none" poster="${u.p}" data-src="${u.v}" style="object-position:50% 30%"></video>`; }
      const copy = i === 0 ? { eyebrow: h.eyebrow, h1: h.h1, lead: h.lead } : s;
      const fl = '';
      return `<div class="hc-slide${i ? '' : ' on'}" data-i="${i}">
        <div class="hc-media">${media}</div>
        <div class="hc-copy">
          <span class="eyebrow" style="color:var(--gold)">${copy.eyebrow}</span>
          <h1 class="h1">${copy.h1}</h1>
          <p class="lead">${copy.lead}</p>
          <div class="hc-ctas"><a class="btn btn-gold" href="#contacto">Agenda tu visita ${ico('arrow')}</a><a class="btn btn-ghost" href="#transformacion">Ver la transformación</a></div>
        </div>${fl}</div>`;
    };
    return `<section class="hero-card" id="inicio"><div class="wrap"><div class="hc" data-hc>
      ${h.slides.map(slide).join('')}
      <div class="hc-bar"><div class="hc-dots">${h.slides.map((_, i) => `<button class="hc-dot${i ? '' : ' on'}" aria-label="Diapositiva ${i + 1}"><i></i></button>`).join('')}</div>
      <div class="hc-nav"><button data-prev aria-label="Anterior">${ico('left')}</button><button data-next aria-label="Siguiente">${ico('arrow')}</button></div></div>
    </div></div></section>`;
  };

  // Hero B — full-screen pinned scroll film (before → after)
  const heroFilm = p => {
    const h = p.hero;
    return `<section class="film" id="inicio" data-film>
      <div class="film-stick">
        <div class="film-stage">
          <picture><source media="(max-width:760px)" srcset="${h.beforeM}"><img src="${h.before}" alt="" data-still></picture>
          <video muted playsinline preload="auto" data-src="${h.video}" data-srcm="${h.videoM}" aria-hidden="true"></video>
        </div>
        <div class="film-chips">${h.chips.map(c => `<span class="chip" style="left:${c.x}%;top:${c.y}%">${ico(c.i)}${c.t}</span>`).join('')}</div>
        <div class="film-label">${h.film.map((f, i) => `<span class="${i ? '' : 'on'}">${String(i + 1).padStart(2, '0')} · ${f.tag}</span>`).join('')}</div>
        <div class="film-copy">
          <span class="eyebrow" style="color:var(--gold)">${h.eyebrow}</span>
          <div class="film-steps">
            ${h.film.map((f, i) => `<div class="film-step${i ? '' : ' on'}">
              ${i ? `<h2 class="h1">${f.h}</h2>` : `<h1 class="h1">${h.h1}</h1>`}
              <p class="lead">${i ? f.p : h.lead}</p>
              <div class="hc-ctas" style="margin-top:28px"><a class="btn btn-gold" href="#contacto">Agenda tu visita ${ico('arrow')}</a>${i === 2 ? '' : '<a class="btn btn-ghost" href="#servicios" style="color:#fff;border-color:#ffffff66">Servicios</a>'}</div>
            </div>`).join('')}
          </div>
        </div>
        <div class="film-hud"><span>Antes</span><div class="film-track"><i></i><b></b></div><span>Después</span></div>
        <div class="film-scroll"><span></span>Desliza</div>
      </div>
    </section>`;
  };

  const logos = p => `<section class="logos" aria-label="Clientes"><div class="wrap">
    <p>${p.key === 'negocios' ? 'Marcas e instituciones que confiaron su espacio en nosotros' : 'Han confiado en Estudio 32'}</p>
    <div class="marq"><div class="marq-in">${[...C.logos, ...C.logos, ...C.logos, ...C.logos].map((l, i) => `<img src="${l}" alt="${C.logoAlt[i % 5]}" loading="lazy">`).join('')}</div></div>
  </div></section>`;

  const stats = () => `<section class="stats"><div class="wrap">${C.stats.map((s, i) => `
    <div class="stat rv rv-d${i}"><b data-count="${s.n}" data-pre="${s.pre}" data-suf="${s.suf}">${s.pre}${s.n}${s.suf}${s.unit ? `<sup>${s.unit}</sup>` : ''}</b><span>${s.l}</span></div>`).join('')}
  </div></section>`;

  const head = (eb, h, lead, extra = '') => `<div class="sec-head"><div><span class="eyebrow">${eb}</span><h2 class="h2">${h}</h2></div><div>${lead ? `<p class="lead">${lead}</p>` : ''}${extra}</div></div>`;

  const offer = p => `<section class="sec" id="servicios"><div class="wrap">
    ${head('Servicios', p.offer.h, p.offer.lead)}
    <div class="offer">${p.offer.items.map((o, i) => `<a class="of rv rv-d${i % 5}" href="#contacto">
      <img src="${o.imgSrc || P(o.img).img}" alt="" loading="lazy"><span class="arr">${ico('arrow')}</span>
      <div class="of-in">${ico(o.i)}<h3>${o.t}</h3><p>${o.d}</p></div></a>`).join('')}</div>
  </div></section>`;

  const transform = p => {
    const h = p.hero, s = p.smart;
    return `<section class="sec stone" id="transformacion"><div class="wrap ba-grid">
      <div class="rv">
        <div class="ba" data-ba style="--x:50%">
          <picture><source media="(max-width:760px)" srcset="${h.beforeM}"><img src="${h.before}" alt="Antes de la remodelación"></picture>
          <picture><source media="(max-width:760px)" srcset="${h.afterM}"><img class="after" src="${h.after}" alt="Después de la remodelación"></picture>
          <span class="ba-lab l">Antes</span><span class="ba-lab r">Después</span>
          <div class="ba-h"><svg class="ico" viewBox="0 0 24 24"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/></svg></div>
          <input type="range" min="0" max="100" value="50" aria-label="Comparar antes y después">
        </div>
        <span class="note">Imagen ilustrativa del tipo de transformación.</span>
      </div>
      <div class="rv rv-d2"><span class="eyebrow">${s.eyebrow}</span><h2 class="h2" style="margin:18px 0 20px">${s.h}</h2><p class="lead">${s.lead}</p>
        <ul class="feat">${s.feats.map(f => `<li>${ico(f.i)}<div><b>${f.t}</b><span>${f.d}</span></div></li>`).join('')}</ul>
      </div>
    </div></section>`;
  };

  const ugc = () => `<section class="sec dark ugc" id="obra"><div class="wrap">
    ${head('En obra', 'Así trabajamos, <em>contado desde la obra.</em>', 'Videos reales de nuestro equipo: proceso, materiales, errores que evitamos y espacios terminados.', '<div class="ugc-ctl" style="margin-top:24px"><button data-ug="-1" aria-label="Anterior">' + ico('left') + '</button><button data-ug="1" aria-label="Siguiente">' + ico('arrow') + '</button></div>')}
    </div>
    <div class="ugc-row" data-ugc>${C.ugc.map((u, i) => `<button class="uc" data-v="${u.v}" aria-label="Ver video: ${u.t}">
      <img src="${u.p}" alt="" loading="lazy"><video muted playsinline loop preload="none" data-src="${u.v}"></video>
      <span class="uc-n">${String(i + 1).padStart(2, '0')}</span><span class="uc-play">${ico('play')}</span>
      <span class="uc-cap"><small>${u.k}</small><b>${u.t}</b></span></button>`).join('')}</div>
  </section>`;

  const projects = p => `<section class="sec white" id="proyectos"><div class="wrap">
    ${head('Proyectos', 'Proyectos <em>entregados.</em>', 'Algunos de los espacios que hemos diseñado y entregado.', '<a class="link" style="margin-top:20px" href="' + C.ig + '" target="_blank" rel="noopener">Ver más en Instagram ' + ico('arrow') + '</a>')}
    <div class="proj">${p.projects.map((k, i) => `<figure class="pj rv rv-d${i % 3}"><div class="pj-img"><img src="${P(k).img}" alt="${P(k).n}" loading="lazy"></div><figcaption class="pj-cap"><b>${ico('pin')}${P(k).n}</b><span>${P(k).k}</span></figcaption></figure>`).join('')}</div>
  </div></section>`;

  const vs = () => `<section class="sec white"><div class="wrap">
    ${head('Por qué Estudio 32', 'Lo que cambia <em>cuando hay un solo responsable.</em>', 'Remodelar no es improvisar. La diferencia está en el proceso.')}
    <div class="vs rv">
      <div class="vs-col us"><h3><img src="media/img/logo.png" alt="">Estudio 32</h3><ul>${C.vs.us.map(t => `<li>${ico('check')}${t}</li>`).join('')}</ul></div>
      <div class="vs-col them"><h3>Obra eterna</h3><ul>${C.vs.them.map(t => `<li>${ico('x')}${t}</li>`).join('')}</ul></div>
    </div>
  </div></section>`;

  const sectors = p => p.sectors ? `<section class="sec"><div class="wrap">
    ${head('Sectores', 'Para negocios que <em>no pueden detenerse.</em>', 'Espacios corporativos y comerciales con un solo interlocutor de principio a fin.')}
    <div class="sectors rv">${p.sectors.map(s => `<div class="sc">${ico(s.i)}<h3>${s.t}</h3><p>${s.d}</p></div>`).join('')}</div>
  </div></section>` : '';

  const process = () => `<section class="sec dark" id="proceso"><div class="wrap">
    ${head('Proceso', 'De la primera visita <em>a&nbsp;la entrega.</em>', 'Cuatro etapas claras, con un mismo equipo y comunicación directa.')}
    <div class="steps" data-steps>${C.steps.map((s, i) => `<div class="st"><span class="st-n">${ico(s.i)}</span><div><small>Paso ${String(i + 1).padStart(2, '0')}</small><h3>${s.t}</h3><p>${s.d}</p></div></div>`).join('')}</div>
  </div></section>`;

  const benefits = () => `<section class="sec"><div class="wrap">
    ${head('Beneficios', 'Tu visión y la nuestra, <em>siempre alineadas.</em>')}
    <div class="ben">${C.benefits.map((b, i) => `<div class="bn rv rv-d${i}">${ico(b.i)}<h3>${b.t}</h3><p>${b.d}</p></div>`).join('')}</div>
  </div></section>`;

  const wall = p => {
    const g = C.google, t = C.testimonials, u = C.ugc, pr = p.projects.map(P);
    const quote = (x, big, src) => `<figure class="wl-q${big ? ' big' : ''}"><div class="stars">${ico('star').repeat(5)}</div><blockquote>“${x.q}”</blockquote><cite><i>${x.n.split(' ').map(w => w[0]).join('')}</i><span><b>${x.n}</b><span>${x.tag || 'Cliente de Estudio 32'}</span></span>${src === 'g' ? '<em class="g">Google</em>' : ''}</cite></figure>`;
    const photo = x => `<figure class="wl-p"><img src="${x.img}" alt="${x.n}" loading="lazy"><figcaption>${ico('pin')}${x.n}<span>${x.k}</span></figcaption></figure>`;
    const vid = (k) => `<button class="wl-v" data-v="${u[k].v}" aria-label="Ver video: ${u[k].t}"><img src="${u[k].p}" alt="" loading="lazy"><video muted playsinline loop preload="none" data-src="${u[k].v}"></video><span class="uc-play">${ico('play')}</span><span class="uc-cap"><small>${u[k].k}</small><b>${u[k].t}</b></span></button>`;
    const first = p.key === 'negocios' ? [g[1], g[2], g[0]] : [g[0], g[2], g[1]];
    const cols = [
      [quote(first[0], 1, 'g'), photo(pr[0]), quote(t[0])],
      [vid(p.key === 'negocios' ? 7 : 5), quote(first[1], 0, 'g'), photo(pr[1])],
      [photo(pr[2]), quote(t[1]), vid(p.key === 'negocios' ? 13 : 8)],
      [quote(first[2], 0, 'g'), vid(p.key === 'negocios' ? 0 : 14), quote(t[2])]
    ];
    return `<section class="sec stone" id="testimonios"><div class="wrap">
      ${head('Wall of love', 'Lo que dicen <em>y lo que construimos.</em>', 'Reseñas reales de clientes junto a obras reales de Estudio 32.', `<a class="link" style="margin-top:20px" href="https://www.google.com/maps/place/Estudio+32+Dise%C3%B1o+Arquitect%C3%B3nico+y+Construcci%C3%B3n/@19.5033406,-99.2489605,17z/data=!4m8!3m7!1s0x85d203d278bc05e1:0x86626215346cd2e3!9m1!1b1" target="_blank" rel="noopener">Ver reseñas en Google ${ico('arrow')}</a>`)}
      <div class="wall">${cols.map((c, i) => `<div class="wl-col rv rv-d${i}">${c.join('')}</div>`).join('')}</div>
    </div></section>`;
  };

  const testimonials = () => `<section class="sec stone" id="testimonios"><div class="wrap">
    ${head('Testimonios', '¿Qué dicen <em>nuestros clientes?</em>')}
    <div class="tst">${C.testimonials.map((t, i) => `<figure class="tq rv rv-d${i}"><div class="stars">${ico('star').repeat(5)}</div><blockquote>“${t.q}”</blockquote><cite><i>${t.n.split(' ').map(w => w[0]).join('')}</i><span><b>${t.n}</b><span>Cliente de Estudio 32</span></span></cite></figure>`).join('')}</div>
  </div></section>`;

  const faq = p => `<section class="sec" id="preguntas"><div class="wrap faq-grid">
    <div><span class="eyebrow">Preguntas frecuentes</span><h2 class="h2" style="margin:18px 0 20px">Antes de <em>empezar.</em></h2><p class="lead">¿Otra duda? Escríbenos a <a class="link" href="mailto:${C.email}">${C.email}</a></p></div>
    <div class="faq">${p.faq.map(([q, a], i) => `<details${i ? '' : ' open'}><summary>${q}<span>${ico('plus')}</span></summary><p>${a}</p></details>`).join('')}</div>
  </div></section>`;

  const opt = arr => arr.map(o => `<option>${o}</option>`).join('');
  const form = p => `<section class="sec dark" id="contacto"><div class="wrap cta-grid">
    <div class="cta-side rv"><span class="eyebrow">Comienza tu proyecto</span><h2 class="h2">${p.cta.h}</h2><p class="lead">${p.cta.lead}</p>
      <ul class="contact-list">${C.phones.map(ph => `<li><a href="tel:${ph.tel}">${ico('phone')}${ph.label}<small>${ph.city}</small></a></li>`).join('')}<li><a href="mailto:${C.email}">${ico('mail')}${C.email}<small>Correo</small></a></li></ul>
    </div>
    <form class="form rv rv-d2" data-form novalidate>
      <h3>Remodelamos y construimos tus espacios</h3><p class="sub">Toma menos de un minuto.</p>
      <div class="fld"><label for="f-n">Nombre *</label><input id="f-n" name="name" required autocomplete="name"></div>
      <div class="fld"><label for="f-p">Teléfono *</label><input id="f-p" name="phone" type="tel" required autocomplete="tel" inputmode="tel"></div>
      <div class="fld full"><label for="f-e">Correo electrónico *</label><input id="f-e" name="email" type="email" required autocomplete="email"></div>
      <div class="fld"><label for="f-t">Tipo de proyecto *</label><select id="f-t" name="type" required>${opt(['Remodelación de casa', 'Remodelación de oficina', 'Construcción', 'Cotizar mobiliario']).replace(`<option>${p.cta.type}</option>`, `<option selected>${p.cta.type}</option>`)}</select></div>
      <div class="fld"><label for="f-b">Presupuesto estimado *</label><select id="f-b" name="budget" required><option value="">Elige una opción</option>${opt(C.form.budget)}</select></div>
      <div class="fld"><label for="f-w">¿Cuándo planeas iniciar? *</label><select id="f-w" name="when" required><option value="">Elige una opción</option>${opt(C.form.when)}</select></div>
      <div class="fld"><label for="f-s">Sensación del espacio *</label><select id="f-s" name="feel" required><option value="">Elige una opción</option>${opt(C.form.feel)}</select></div>
      <div class="fld full"><label for="f-l">¿Dónde te encuentras? *</label><select id="f-l" name="where" required><option value="">Elige una opción</option>${opt(C.form.where)}</select></div>
      <button class="btn btn-gold" type="submit">Enviar y agendar visita ${ico('arrow')}</button>
      <div class="form-ok" role="status">Gracias. Recibimos tus datos y te contactaremos para agendar la visita. <b>(Vista previa: este prototipo no envía datos.)</b></div>
      <p class="legal">Al enviar aceptas nuestro <a href="${C.privacy}" target="_blank" rel="noopener">Aviso de Privacidad</a>.</p>
    </form>
  </div></section>`;

  const band = p => `<section class="sec" style="padding-bottom:0"><div class="wrap"><div class="band rv"><img src="${p.band.img}" alt="" loading="lazy"><div class="band-in"><span class="eyebrow" style="color:var(--gold)">Estudio 32</span><h2 class="h2">${p.band.h}</h2><div class="hc-ctas"><a class="btn btn-gold" href="#contacto">Comenzar proyecto ${ico('arrow')}</a><a class="btn btn-ghost" style="color:#fff;border-color:#ffffff66" href="https://wa.me/${C.wa}" target="_blank" rel="noopener">${ico('wa')} WhatsApp</a></div></div></div></div></section>`;

  const footer = (p, mode) => `<footer class="ftr" style="margin-top:var(--sec)"><div class="wrap">
    <div class="ftr-top">
      <div><img src="media/img/logo.png" alt="Estudio 32"><p style="max-width:30ch">Remodelamos y construimos tus espacios. Proyectos únicos, funcionales y con la máxima calidad en cada detalle.</p>
        <div class="soc"><a href="${C.ig}" target="_blank" rel="noopener" aria-label="Instagram">${ico('ig')}</a><a href="${C.fb}" target="_blank" rel="noopener" aria-label="Facebook">${ico('fb')}</a><a href="mailto:${C.email}" aria-label="Correo">${ico('mail')}</a></div></div>
      <div><h4>Servicios</h4><ul><li><a href="#servicios">Remodelaciones</a></li><li><a href="#servicios">Construcción</a></li><li><a href="#servicios">Arquitectura</a></li><li><a href="#servicios">Mobiliario a medida</a></li></ul></div>
      <div><h4>Explora</h4><ul><li><a href="casas-${mode === 'film' ? 'b' : 'a'}.html">Para casas</a></li><li><a href="negocios-${mode === 'film' ? 'b' : 'a'}.html">Para negocios</a></li><li><a href="#proyectos">Proyectos</a></li><li><a href="#preguntas">Preguntas</a></li></ul></div>
      <div><h4>Contacto</h4><ul>${C.phones.map(ph => `<li><a href="tel:${ph.tel}">${ph.city} · ${ph.label}</a></li>`).join('')}<li><a href="mailto:${C.email}">${C.email}</a></li></ul></div>
    </div>
    <div class="ftr-bot"><span>©2026 Estudio 32 | Derechos Reservados</span><a href="${C.privacy}" target="_blank" rel="noopener">Aviso de Privacidad</a></div>
  </div></footer>
  <div class="mcta" data-mcta><a class="btn btn-gold" href="#contacto">Agenda tu visita ${ico('arrow')}</a><a class="btn btn-wa" href="https://wa.me/${C.wa}" target="_blank" rel="noopener" aria-label="WhatsApp">${ico('wa')}</a></div>
  <div class="modal" data-modal role="dialog" aria-modal="true" aria-label="Video"><button class="modal-x" aria-label="Cerrar">${ico('close')}</button><video controls playsinline></video></div>`;

  // ---------- behaviour ----------
  const srcFor = v => (isM() && v.dataset.srcm) ? v.dataset.srcm : v.dataset.src;
  const load = v => { if (!v.src && v.dataset.src) v.src = srcFor(v); };

  function initCard() {
    const hc = document.querySelector('[data-hc]'); if (!hc) return;
    const slides = [...hc.querySelectorAll('.hc-slide')], dots = [...hc.querySelectorAll('.hc-dot')];
    let i = 0, t;
    const durs = [9000, 7500, 8000];
    const go = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => {
        s.classList.toggle('on', k === i);
        const v = s.querySelector('video');
        if (v) { if (k === i) { load(v); v.currentTime = 0; v.play().catch(() => {}); } else v.pause(); }
      });
      dots.forEach((d, k) => { d.classList.toggle('on', k === i); d.classList.toggle('done', k < i); d.style.setProperty('--dur', durs[i] + 'ms'); });
      clearTimeout(t); if (!RM) t = setTimeout(() => go(i + 1), durs[i]);
    };
    dots.forEach((d, k) => d.onclick = () => go(k));
    hc.querySelector('[data-prev]').onclick = () => go(i - 1);
    hc.querySelector('[data-next]').onclick = () => go(i + 1);
    let x0 = null;
    hc.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
    hc.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
    go(0);
  }

  function initFilm(p) {
    const f = document.querySelector('[data-film]'); if (!f) return;
    const v = f.querySelector('video'), still = f.querySelector('[data-still]');
    const steps = [...f.querySelectorAll('.film-step')], labels = [...f.querySelectorAll('.film-label span')], chips = [...f.querySelectorAll('.chip')];
    const track = f.querySelector('.film-track');
    if (RM) { still.src = isM() ? p.hero.afterM : p.hero.after; still.closest('picture').querySelector('source').srcset = p.hero.afterM; steps.forEach((s, k) => s.classList.toggle('on', k === 2)); chips.forEach(c => c.classList.add('on')); v.remove(); return; }
    // fetch as blob so seeking works on any static host (no Range support needed)
    fetch(srcFor(v)).then(r => r.blob()).then(b => { v.src = URL.createObjectURL(b); v.load(); }).catch(() => load(v));
    let target = 0, cur = 0, raf = 0;
    const ready = () => v.readyState >= 2 && v.duration;
    const hideStill = () => { if (ready()) { v.pause(); still.style.transition = 'opacity .4s'; still.style.opacity = 0; } };
    v.addEventListener('loadeddata', hideStill); hideStill();
    const prog = () => { const r = f.getBoundingClientRect(); const len = f.offsetHeight - innerHeight; return Math.min(1, Math.max(0, -r.top / len)); };
    const tick = () => {
      const pr = prog();
      // video fills 0.04–0.86 of the pin; tail holds the finished space
      target = Math.min(1, Math.max(0, (pr - .04) / .82));
      cur += (target - cur) * .14;
      if (Math.abs(target - cur) < .0005) cur = target;
      if (ready()) { const tt = cur * (v.duration - .05); if (Math.abs(v.currentTime - tt) > .02) v.currentTime = tt; }
      track.style.setProperty('--p', cur.toFixed(4));
      const st = pr < .28 ? 0 : pr < .66 ? 1 : 2;
      steps.forEach((s, k) => s.classList.toggle('on', k === st));
      labels.forEach((s, k) => s.classList.toggle('on', k === st));
      chips.forEach((c, k) => c.classList.toggle('on', cur > .9 && pr > .8 + k * .025));
      raf = cur !== target ? requestAnimationFrame(tick) : 0;
    };
    const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener('scroll', kick, { passive: true }); addEventListener('resize', kick);
    v.addEventListener('loadeddata', kick); kick();
  }

  function initBA() {
    document.querySelectorAll('[data-ba]').forEach(b => {
      const r = b.querySelector('input');
      const set = x => b.style.setProperty('--x', x + '%');
      r.addEventListener('input', () => set(r.value));
      if (!RM) { // gentle intro sweep when in view
        const io = new IntersectionObserver(([e]) => { if (!e.isIntersecting) return; io.disconnect(); let t0 = null;
          const a = ts => { t0 ??= ts; const k = Math.min(1, (ts - t0) / 1800); const x = 50 + Math.sin(k * Math.PI * 2) * 30 * (1 - k); set(x); r.value = x; if (k < 1) requestAnimationFrame(a); }; requestAnimationFrame(a); }, { threshold: .5 });
        io.observe(b);
      }
    });
  }

  function initUGC() {
    const row = document.querySelector('[data-ugc]'); if (!row) return;
    const cards = [...row.querySelectorAll('.uc'), ...document.querySelectorAll('.wl-v')];
    // in-view muted previews (max a few at once)
    const io = new IntersectionObserver(es => es.forEach(e => { const v = e.target.querySelector('video');
      if (e.isIntersecting && !RM) { load(v); v.play().then(() => e.target.querySelector('img').style.opacity = 0).catch(() => {}); } else { v.pause(); } }), { threshold: .6 });
    cards.forEach(c => io.observe(c));
    document.querySelectorAll('[data-ug]').forEach(b => b.onclick = () => row.scrollBy({ left: +b.dataset.ug * (cards[0].offsetWidth + 16) * 2, behavior: 'smooth' }));
    // drag to scroll
    let down = false, sx = 0, sl = 0, moved = false;
    row.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = row.scrollLeft; });
    addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; row.classList.add('drag'); } row.scrollLeft = sl - dx; });
    addEventListener('pointerup', () => { down = false; row.classList.remove('drag'); });
    const modal = document.querySelector('[data-modal]'), mv = modal.querySelector('video');
    const close = () => { modal.classList.remove('on'); mv.pause(); mv.removeAttribute('src'); mv.load(); };
    cards.forEach(c => c.addEventListener('click', e => { if (moved) { e.preventDefault(); return; } mv.src = c.dataset.v; modal.classList.add('on'); mv.play().catch(() => {}); modal.querySelector('.modal-x').focus(); }));
    modal.querySelector('.modal-x').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  function initReveal() {
    const els = document.querySelectorAll('.rv');
    if (RM) { els.forEach(e => e.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
    // counters
    const cio = new IntersectionObserver(es => es.forEach(e => { if (!e.isIntersecting) return; cio.unobserve(e.target);
      const b = e.target, n = +b.dataset.count, sup = b.querySelector('sup'), sh = sup ? sup.outerHTML : ''; let t0 = null;
      const a = ts => { t0 ??= ts; const k = Math.min(1, (ts - t0) / 1400), ease = 1 - Math.pow(1 - k, 3);
        b.innerHTML = `${b.dataset.pre}${Math.round(n * ease)}${b.dataset.suf}${sh}`; if (k < 1) requestAnimationFrame(a); };
      requestAnimationFrame(a); }), { threshold: .6 });
    document.querySelectorAll('[data-count]').forEach(e => cio.observe(e));
    // process line
    const st = document.querySelector('[data-steps]');
    if (st) { const items = [...st.children]; addEventListener('scroll', () => { const r = st.getBoundingClientRect(); const k = Math.min(1, Math.max(0, (innerHeight * .75 - r.top) / (r.height + innerHeight * .2)));
      st.style.setProperty('--sp', k); items.forEach((it, i) => it.classList.toggle('on', k >= i / items.length + .02)); }, { passive: true }); }
    // mobile sticky CTA after hero
    const m = document.querySelector('[data-mcta]'), hero = document.getElementById('inicio'), ct = document.getElementById('contacto');
    addEventListener('scroll', () => { const hb = hero.getBoundingClientRect().bottom, cr = ct.getBoundingClientRect(); m.classList.toggle('on', hb < 0 && !(cr.top < innerHeight && cr.bottom > 0)); }, { passive: true });
  }

  function initForm() {
    const f = document.querySelector('[data-form]'); if (!f) return;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const bad = [...f.querySelectorAll('[required]')].filter(x => !x.value.trim() || (x.type === 'email' && !/^\S+@\S+\.\S+$/.test(x.value)));
      f.querySelectorAll('[required]').forEach(x => x.style.borderColor = '');
      if (bad.length) { bad.forEach(x => x.style.borderColor = '#c2410c'); bad[0].focus(); return; }
      // Producción: enviar al webhook actual de e32.mx (Zapier). Desactivado en el prototipo.
      f.classList.add('sent'); f.querySelector('button[type=submit]').disabled = true;
    });
  }

  window.E32 = {
    page(key, mode) {
      const p = D[key];
      document.title = p.title;
      const sections = [
        header(p, mode), mode === 'film' ? heroFilm(p) : heroCard(p), logos(p), stats(),
        E32S.renovar(p), E32S.ideal(p), transform(p), E32S.stack(p), projects(p), E32S.tips(), wall(p), vs(), faq(p), E32S.contact(p), band(p), footer(p, mode), E32S.leadModal(p)
      ];
      document.getElementById('app').innerHTML = `<main>${sections.join('')}</main>`;
      initCard(); initFilm(p); initBA(); initUGC(); initReveal(); initForm(); E32S.init(p);
      if (new URLSearchParams(location.search).has('shot')) document.querySelectorAll('.rv').forEach(e => e.classList.add('in'));
      if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView());
    }
  };
})();
