const iconPaths = {
  archive: '<path d="M3 4h18v4H3zM5 8v12h14V8M10 12h4"/>',
  alert: '<path d="m12 3 10 18H2L12 3Z"/><path d="M12 9v4m0 4h.01"/>',
  arrowDown: '<path d="M12 3v12m-5-5 5 5 5-5M5 21h14"/>',
  arrowUp: '<path d="M7 17 17 7M7 7h10v10"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9m-8 12h4"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  building: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M10 21v-4h4v4"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18m-12 4h.01"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  fileCheck: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6m-12 5 2 2 4-4"/>',
  filePlus: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M12 18v-6m-3 3h6"/>',
  files: '<path d="M15 2H6a2 2 0 0 0-2 2v14m4-12h9l3 3v11H8zM15 4v5h5m-8 4h4m-4 4h4"/>',
  folderArchive: '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v2H3z"/><path d="M3 10h18l-2 10H5zM10 14h4m-2-2v5"/>',
  folder: '<path d="M3 6a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  gauge: '<path d="M20 13a8 8 0 1 0-16 0m8-1 4-4m-4 4H8m-3 6h14"/>',
  git: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 6h4a6 6 0 0 1 6 6v4M6 8v10"/>',
  dashboard: '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="5" rx="1"/><rect x="13" y="10" width="8" height="11" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 1 1 8 0v3m-4 5v2"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  network: '<circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="m7 7 3 3m7-3-3 3m-7 7 3-3m7 3-3-3"/>',
  plus: '<path d="M12 5v14m-7-7h14"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  settings: '<path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.5.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.5-.9l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-1.8l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.5-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.5.9l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1 0 1.7Z"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  sliders: '<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M2 14h4m4-6h4m4 8h4"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6-7a4 4 0 0 1 0 8m2 3a4 4 0 0 1 4 4v2"/>',
  workflow: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6h4a2 2 0 0 1 2 2v6m-3 3h-4a2 2 0 0 1-2-2v-5"/>',
  x: '<path d="m18 6-12 12M6 6l12 12"/>',
};

const icon = (name, size = 18, className = '') =>
  `<svg class="${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.fileCheck}</svg>`;

const modules = [
  { id: 'rad', name: 'Radicación', desc: 'Entrada, salida e interna', icon: 'filePlus', enabled: true },
  { id: 'repo', name: 'Repositorio', desc: 'Documentos y expedientes', icon: 'folder', enabled: true },
  { id: 'tram', name: 'Trámites y flujos', desc: 'Asignaciones y seguimiento', icon: 'workflow', enabled: true },
  { id: 'arch', name: 'Archivo y transferencias', desc: 'Inventarios y disposición', icon: 'folderArchive', enabled: true },
  { id: 'digital', name: 'Digitalización e indexación', desc: 'Captura, OCR y calidad', icon: 'files', enabled: true },
  { id: 'instruments', name: 'Instrumentos archivísticos', desc: 'CCD, TRD, TVD y versiones', icon: 'book', enabled: true },
  { id: 'kpi', name: 'KPI y ANS', desc: 'Actividades, tiempos y productividad', icon: 'gauge', enabled: true },
  { id: 'audit', name: 'Auditoría y trazabilidad', desc: 'Eventos e integridad', icon: 'shield', enabled: true },
  { id: 'pres', name: 'Preservación digital', desc: 'Formatos, integridad y conservación', icon: 'database', enabled: false },
  { id: 'admin', name: 'Administración', desc: 'Usuarios, roles y permisos', icon: 'users', enabled: true },
];

const nav = [
  ['Resumen', 'dashboard', 'dashboard'],
  ['Radicación', 'rad', 'filePlus'],
  ['Repositorio documental', 'repo', 'folder'],
  ['Trámites y flujos', 'tram', 'workflow'],
  ['Archivo y transferencias', 'arch', 'folderArchive'],
  ['Digitalización', 'digital', 'files'],
  ['Instrumentos archivísticos', 'instruments', 'book'],
  ['KPI y ANS', 'kpi', 'gauge'],
  ['Auditoría', 'audit', 'shield'],
  ['Administración', 'admin', 'users'],
  ['Configuración', 'settings', 'settings'],
];

const state = {
  active: 'dashboard',
  org: 'Alcaldía Demo',
  kind: 'Entidad pública',
  tab: 'TRD',
  query: '',
  modal: false,
};

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);

const pageTitle = () => nav.find((item) => item[1] === state.active)?.[0] || 'Resumen';
const enabledCount = () => modules.filter((item) => item.enabled).length;

function renderNav() {
  return nav.map(([label, id, iconName]) => `
    <button class="nav${state.active === id ? ' active' : ''}" data-page="${id}"${state.active === id ? ' aria-current="page"' : ''}>
      ${icon(iconName, 17)}${label}
    </button>`).join('');
}

function panelHead(title, desc, action = '', page = '') {
  return `<div class="panelhead"><div><h3>${title}</h3>${desc ? `<p>${desc}</p>` : ''}</div>
    ${action ? `<button class="textbtn" data-page="${page}">${action} ${icon('arrowUp', 14)}</button>` : ''}</div>`;
}

function eventRow(iconName, title, desc, time) {
  return `<div class="event"><span class="eventicon">${icon(iconName, 16)}</span><div><b>${title}</b><small>${desc}</small></div><time>${time}</time></div>`;
}

function stat(iconName, label, value, note) {
  return `<div class="stat"><div class="stathead">${label}<span>${icon(iconName, 18)}</span></div><strong>${value}</strong><small>${note}</small></div>`;
}

function dashboard() {
  const tiles = modules.filter((item) => item.enabled).slice(0, 6).map((item) => `
    <button class="tile" data-page="${item.id}">
      <div class="tileicon">${icon(item.icon, 19)}</div><b>${item.name}</b><small>${item.desc}</small>${icon('arrowUp', 14, 'tilearrow')}
    </button>`).join('');

  return `<section class="hero"><div><span class="tag">PANEL DE CONTROL</span><h2>Tu gestión documental, conectada.</h2>
    <p>Los módulos comparten la configuración archivística y registran los movimientos en una misma trazabilidad.</p></div>
    <div class="heroicon">${icon('network', 78)}</div></section>
    <div class="stats">
      ${stat('fileCheck', 'Radicaciones del mes', '1.284', '12,8% vs. mes anterior')}
      ${stat('folder', 'Expedientes activos', '3.692', 'En 18 dependencias')}
      ${stat('clock', 'ANS cumplidos', '94,6%', 'Meta configurada: 95%')}
      ${stat('shield', 'Eventos auditables', '8.421', 'Datos de demostración')}
    </div>
    <div class="columns">
      <section class="panel">${panelHead('Centro de módulos', 'Funcionalidades habilitadas para esta organización', 'Configurar módulos', 'settings')}<div class="modulegrid">${tiles}</div></section>
      <section class="panel">${panelHead('Actividad reciente', 'Eventos de ejemplo del entorno de demostración', 'Ver auditoría', 'audit')}
        ${eventRow('filePlus', 'Radicación creada', 'RAD-2026-001284 · Gestión Humana', 'Hace 8 min')}
        ${eventRow('folder', 'Documento incorporado', 'Expediente GH-2026-0041', 'Hace 22 min')}
        ${eventRow('check', 'Trámite finalizado', 'Solicitud de certificación laboral', 'Hace 46 min')}
        ${eventRow('arrowDown', 'Transferencia preparada', 'Serie: Historias laborales', 'Hace 1 h')}
      </section>
    </div>
    <div class="strip">${icon('shield')}<div><b>Configuración archivística como fuente de reglas</b>
      <small>Clasificación, expedientes, retención y reportes consultan los instrumentos vigentes de cada organización.</small></div>
      <button data-page="instruments">Ver instrumentos ${icon('arrowUp', 14)}</button>
    </div>`;
}

function configRow(iconName, title, desc) {
  return `<div class="config">${icon(iconName, 19)}<div><b>${title}</b><small>${desc}</small></div></div>`;
}

function settingsPage() {
  const filteredModules = modules.filter((item) => `${item.name} ${item.desc}`.toLowerCase().includes(state.query.toLowerCase()));
  const moduleRows = filteredModules.map((item) => `
    <div class="modrow"><div class="tileicon">${icon(item.icon, 18)}</div><div class="modinfo"><b>${item.name}</b><small>${item.desc}</small></div>
      <label class="switch" aria-label="Habilitar ${item.name}"><input type="checkbox" data-module="${item.id}"${item.enabled ? ' checked' : ''}><i></i></label>
    </div>`).join('');

  return `<div class="columns settings"><section class="panel"><h3>Organización y módulos</h3><p class="muted">Configura el espacio de trabajo de cada cliente.</p>
    <label for="org-name">Nombre de la organización</label><input id="org-name" data-org value="${escapeHtml(state.org)}">
    <label for="org-kind">Naturaleza de la organización</label><select id="org-kind" data-kind>
      <option${state.kind === 'Entidad pública' ? ' selected' : ''}>Entidad pública</option>
      <option${state.kind === 'Empresa privada' ? ' selected' : ''}>Empresa privada</option>
      <option${state.kind === 'Empresa mixta' ? ' selected' : ''}>Empresa mixta</option>
    </select><hr>
    ${panelHead('Módulos disponibles', `${enabledCount()} de ${modules.length} módulos habilitados`)}
    <div class="search">${icon('search', 16)}<input data-search placeholder="Buscar módulo..." value="${escapeHtml(state.query)}"></div>
    <div class="module-list">${moduleRows}</div>
    <button class="btn primary" data-action="save-settings">Guardar configuración</button>
    </section><section class="panel"><h3>Parámetros de la organización</h3><p class="muted">Se almacenarán en registros independientes por organización.</p>
      ${configRow('building', 'Estructura organizacional', 'Dependencias, unidades y responsables')}
      ${configRow('book', 'Instrumentos archivísticos', 'CCD, TRD, TVD y versiones aprobadas')}
      ${configRow('workflow', 'Flujos y reglas', 'Estados, asignaciones, alertas y aprobaciones')}
      ${configRow('calendar', 'ANS y actividades', 'Tiempos, metas, vigencias y responsables')}
      ${configRow('shield', 'Seguridad y auditoría', 'Roles, permisos y eventos de seguridad')}
    </section></div>`;
}

function instrumentsPage() {
  const tabs = ['CCD', 'TRD', 'TVD', 'Tipologías', 'Versiones'];
  const title = state.tab === 'TRD' ? 'Tablas de Retención Documental'
    : state.tab === 'CCD' ? 'Cuadro de Clasificación Documental'
      : state.tab === 'TVD' ? 'Tablas de Valoración Documental' : state.tab;

  return `<div class="tabs">${tabs.map((tab) => `<button class="tab${state.tab === tab ? ' selected' : ''}" data-tab="${tab}"${state.tab === tab ? ' aria-pressed="true"' : ''}>${tab}</button>`).join('')}</div>
    <section class="panel">${panelHead(title, `Instrumentos propios de ${escapeHtml(state.org)}. Información ilustrativa.`)}
      <div class="callout">${icon('book')}<div><b>Reglas de parametrización</b><small>Las versiones aprobadas y vigentes alimentan clasificación, expedientes, retención y disposición. Los cambios conservan historial y fecha de aplicación.</small></div></div>
      <div class="tablewrap"><table><thead><tr><th>Código</th><th>Dependencia</th><th>Serie / Subserie</th><th>Gestión</th><th>Central</th><th>Disposición</th><th>Estado</th></tr></thead><tbody>
      <tr><td>GH-01</td><td>Gestión Humana</td><td>Historias laborales</td><td>2 años</td><td>80 años*</td><td>CT</td><td><span class="pill">Vigente</span></td></tr>
      <tr><td>GF-03</td><td>Gestión Financiera</td><td>Comprobantes contables</td><td>2 años</td><td>8 años*</td><td>Selección</td><td><span class="pill">Vigente</span></td></tr>
      <tr><td>GD-02</td><td>Gestión Documental</td><td>Comunicaciones oficiales</td><td>2 años</td><td>8 años*</td><td>CT</td><td><span class="pill amber">En revisión</span></td></tr>
      </tbody></table></div><p class="footnote">* Tiempos ficticios: no son recomendación de retención. Deben provenir de instrumentos aprobados por la organización.</p>
      <button class="btn primary" data-action="import-instrument">${icon('plus', 16)} Importar / crear instrumento</button>
    </section>`;
}

function placeholder() {
  const item = modules.find((module) => module.id === state.active);
  return `<section class="panel placeholder">${icon('git', 34)}<div class="eyebrow">MÓDULO ${item?.enabled ? 'HABILITADO' : 'DESHABILITADO'}</div>
    <h2>${item?.name || pageTitle()}</h2><p>${item?.desc || 'Administración de la plataforma'}</p>
    <div class="callout">${icon('alert')}<div><b>Interfaz base en construcción</b><small>Este módulo requiere conectar sus operaciones, permisos y servicios de backend. El esquema SQL inicial define sus relaciones y controles multiempresa.</small></div></div>
    <button class="btn light" data-page="settings">Volver a configuración</button></section>`;
}

function modal() {
  if (!state.modal) return '';
  return `<div class="overlay" data-action="close-modal"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal-content>
    <div class="modalhead"><div><h3 id="modal-title">Nueva radicación</h3><small>Formulario de demostración</small></div><button class="iconbtn" data-action="close-modal" aria-label="Cerrar">${icon('x')}</button></div>
    <label for="rad-type">Tipo de radicación</label><select id="rad-type"><option>Entrada</option><option>Salida</option><option>Interna</option></select>
    <label for="rad-subject">Asunto</label><input id="rad-subject" placeholder="Describe brevemente el documento">
    <label for="rad-destination">Dependencia destino</label><select id="rad-destination"><option>Gestión Documental</option><option>Gestión Humana</option><option>Gestión Financiera</option></select>
    <div class="callout">${icon('lock')}<div><b>Consecutivo transaccional</b><small>En producción se generará en backend, nunca en el navegador.</small></div></div>
    <div class="modalactions"><button class="btn light" data-action="close-modal">Cancelar</button><button class="btn primary" data-action="continue-radication">Continuar</button></div>
  </div></div>`;
}

function render() {
  const title = pageTitle();
  const page = state.active === 'dashboard' ? dashboard()
    : state.active === 'settings' ? settingsPage()
      : state.active === 'instruments' ? instrumentsPage() : placeholder();

  document.querySelector('#app').innerHTML = `<div class="shell">
    <aside class="sidebar"><div class="brand"><div class="brandmark">${icon('archive')}</div><div><b>DOCUGEST <span>PRO</span></b><small>GESTIÓN DOCUMENTAL</small></div></div>
      <div class="label">ESPACIO DE TRABAJO</div><div class="tenant">${icon('building')}<div><b class="tenant-name">${escapeHtml(state.org)}</b><small>${escapeHtml(state.kind)}</small></div>${icon('chevron', 15)}</div>
      <nav>${renderNav()}</nav><div class="sidebottom"><div class="secure">${icon('lock', 16)}<div><b>Entorno aislado</b><small>Datos por organización</small></div></div>
      <div class="user"><div class="avatar">AD</div><div><b>Administrador Demo</b><small>Administrador de empresa</small></div></div></div>
    </aside>
    <main><header class="top"><button class="iconbtn" data-action="toggle-sidebar" aria-label="Contraer menú">${icon('menu')}</button>
      <div class="crumb">DOCUGEST PRO <span>/</span> ${title}</div><div class="topright"><span class="online">● Sistema operativo</span>
      <button class="iconbtn" data-action="notifications" aria-label="Notificaciones">${icon('bell')}</button><div class="avatar">AD</div></div></header>
      <div class="content"><div class="pagehead"><div><div class="eyebrow">PLATAFORMA MODULAR MULTIEMPRESA</div><h1>${title}</h1>
      <p>Procesos documentales integrados y parametrizables por organización.</p></div><div class="actions">
      <button class="btn light" data-page="settings">${icon('sliders', 16)} Parametrizar</button>
      <button class="btn primary" data-action="open-modal">${icon('plus', 17)} Nueva radicación</button></div></div>
      ${page}<footer>© 2026 DOCUGEST PRO <span>Plataforma modular de gestión documental</span><span>Demostración · No usar con documentos reales</span></footer></div>
    </main>${modal()}<div class="toast" id="toast" role="status" hidden></div></div>`;
}

let toastTimer;
function notify(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.innerHTML = `${icon('check', 17)}${escapeHtml(message)}`;
  toast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 3200);
}

document.addEventListener('click', (event) => {
  const target = event.target.closest('[data-page], [data-tab], [data-action]');
  if (!target) return;

  if (target.dataset.page) {
    state.active = target.dataset.page;
    render();
  } else if (target.dataset.tab) {
    state.tab = target.dataset.tab;
    render();
  } else if (target.dataset.action === 'open-modal') {
    state.modal = true;
    render();
    document.querySelector('#rad-type')?.focus();
  } else if (target.dataset.action === 'close-modal') {
    if (target.classList.contains('overlay') && event.target !== target) return;
    state.modal = false;
    render();
  } else if (target.dataset.action === 'continue-radication') {
    state.modal = false;
    render();
    notify('Demostración: conecta el backend para registrar una radicación real.');
  } else if (target.dataset.action === 'save-settings') {
    notify('Cambios locales de demostración. La persistencia requiere conexión con el backend.');
  } else if (target.dataset.action === 'import-instrument') {
    notify('La importación de instrumentos requiere implementar el validador y el servicio de carga.');
  } else if (target.dataset.action === 'notifications') {
    notify('No tienes notificaciones nuevas.');
  } else if (target.dataset.action === 'toggle-sidebar') {
    document.querySelector('.sidebar')?.classList.toggle('sidebar-hidden');
    document.querySelector('main')?.classList.toggle('main-expanded');
  }
});

document.addEventListener('input', (event) => {
  if (event.target.matches('[data-org]')) {
    state.org = event.target.value;
    const tenantName = document.querySelector('.tenant-name');
    if (tenantName) tenantName.textContent = state.org;
  } else if (event.target.matches('[data-search]')) {
    const input = event.target;
    state.query = input.value;
    render();
    const nextInput = document.querySelector('[data-search]');
    nextInput?.focus();
    nextInput?.setSelectionRange(state.query.length, state.query.length);
  }
});

document.addEventListener('change', (event) => {
  if (event.target.matches('[data-kind]')) {
    state.kind = event.target.value;
    const tenantKind = document.querySelector('.tenant small');
    if (tenantKind) tenantKind.textContent = state.kind;
  } else if (event.target.matches('[data-module]')) {
    const item = modules.find((module) => module.id === event.target.dataset.module);
    if (item) item.enabled = event.target.checked;
    render();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.modal) {
    state.modal = false;
    render();
  }
});

render();
