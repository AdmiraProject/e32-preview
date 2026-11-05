// Custom 24px line icon set (replaces the clip-art icons on e32.mx)
window.ICONS = {
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  play:'<path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  close:'<path d="M6 6l12 12M18 6 6 18"/>',
  check:'<path d="M4.5 12.5l4.5 4.5L19.5 7"/>',
  x:'<path d="M7 7l10 10M17 7 7 17"/>',
  pin:'<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
  phone:'<path d="M6.6 3.5h2.6l1.4 4-2 1.4a11 11 0 0 0 6.5 6.5l1.4-2 4 1.4v2.6a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1z"/>',
  mail:'<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  wa:'<path d="M4 20l1.2-3.8A8 8 0 1 1 8 19z"/><path d="M9 8.6c.2 2.8 3.6 6.2 6.4 6.4l1.1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2z" fill="currentColor" stroke="none"/>',
  ig:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>',
  fb:'<path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5l.5-3.5h-3V9a.5.5 0 0 1 .5-.5z"/>',
  star:'<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 17l-5.2 2.7 1-5.9-4.3-4.1 5.9-.8z"/>',
  menu:'<path d="M4 8h16M4 16h16"/>',
  // services
  remodel:'<path d="M3.5 11 12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/><path d="M10 20v-5.5h4V20"/><path d="M15.5 4.5h2v3"/>',
  kitchen:'<rect x="3.5" y="10" width="17" height="10" rx="1.5"/><path d="M3.5 14h17M8 10V7a4 4 0 0 1 8 0v3"/><path d="M8 17h1.5M14.5 17H16"/>',
  build:'<path d="M3 20.5h18M5 20.5V9l7-5 7 5v11.5"/><path d="M9 20.5v-6h6v6M9 10.5h6"/>',
  sofa:'<path d="M4 11V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V11"/><path d="M3 12.5a1.5 1.5 0 0 1 3 0V14h12v-1.5a1.5 1.5 0 0 1 3 0V18H3z"/><path d="M5 18v2M19 18v2"/>',
  plan:'<path d="M4 4.5h16v15H4z"/><path d="M4 11h7v8.5M11 4.5V8M15 11h5M15 11v4"/>',
  office:'<rect x="4" y="3.5" width="16" height="17" rx="1"/><path d="M8 7.5h2M14 7.5h2M8 11.5h2M14 11.5h2M10 20.5v-4h4v4"/>',
  dish:'<path d="M4 16a8 8 0 0 1 16 0z"/><path d="M2.5 19h19M12 6.5V8M10.5 6.5h3"/>',
  store:'<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 11.5v9h13v-9M10 20.5v-5h4v5"/>',
  event:'<path d="M12 3.5v3M7.5 5l1.3 2.6M16.5 5l-1.3 2.6"/><path d="M5 20.5h14l-2-9H7z"/><path d="M9.5 15h5"/>',
  // process / proof
  talk:'<path d="M4 5.5h11a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H9L5.5 17.5V14.5H4A1.5 1.5 0 0 1 2.5 13V7A1.5 1.5 0 0 1 4 5.5z"/><path d="M19.5 9h.5A1.5 1.5 0 0 1 21.5 10.5v5a1.5 1.5 0 0 1-1.5 1.5h-1v2.5L16.5 17H12"/>',
  render:'<path d="M12 3 20 7.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
  budget:'<path d="M6 3.5h9l3.5 3.5v13.5H6z"/><path d="M15 3.5V7h3.5M9 11.5h6M9 15h6M9 18h3.5"/>',
  report:'<path d="M4 20.5h16"/><path d="M6.5 16.5v-4M10.5 16.5v-8M14.5 16.5v-6M18.5 16.5V5"/>',
  key:'<circle cx="8" cy="15" r="4.5"/><path d="m11.2 11.8 8.3-8.3M16.5 6.5l2.5 2.5M14 9l2 2"/>',
  team:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.3a4.5 4.5 0 0 1 5 4.2"/>',
  shield:'<path d="M12 3.5 19 6v5.5c0 4.4-3 7.8-7 9-4-1.2-7-4.6-7-9V6z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
  eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
  // smart home
  led:'<path d="M3.5 6.5h17"/><path d="M5 9.5l-1.2 2M9 9.5l-.6 2.4M15 9.5l.6 2.4M19 9.5l1.2 2"/><path d="M8 20.5h8M9.5 17.5h5M12 14.5v3"/>',
  blinds:'<rect x="4.5" y="3.5" width="15" height="17" rx="1"/><path d="M4.5 7.5h15M4.5 10.5h15M4.5 13.5h15"/><path d="M12 13.5v4M10.5 17.5h3"/>',
  panel:'<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 7h4M10 10.5h4"/><circle cx="12" cy="16" r="1.6"/>',
  speaker:'<rect x="6" y="3" width="12" height="18" rx="2.5"/><circle cx="12" cy="14" r="3.2"/><circle cx="12" cy="7.3" r="1"/>',
  screen:'<rect x="2.5" y="4.5" width="19" height="12" rx="1.2"/><path d="M8.5 20h7M12 16.5V20"/>'
};
window.ico = (n, cls='') => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]||''}</svg>`;
