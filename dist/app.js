const projects = {
  attire: {
    title: 'A smarter lab entrance.', meta: 'DUAL-PI ATTIRE CHECK SYSTEM / SIT CEG1010',
    lead: 'An edge-AI laboratory entry station that checks attire with computer vision and gives immediate visual feedback.',
    image: 'assets/attire-still.png', imageAlt: 'Frame from the actual YOLO attire detection demo in the project repository',
    details: ['A dual-node Raspberry Pi 5 architecture separates real-time YOLOv8 inference and PyQt6 feedback from server-side image processing.', 'The team trained a custom attire model and defined classification boundaries for covered tops, long pants, and covered footwear.', 'A Flask endpoint receives JPEG payloads with bounding-box metadata embedded in EXIF, then uses OpenCV to create isolated detection crops.'],
    note: 'An academic prototype developed by a five-person team for the CEG1010 Integrative Team Project.',
    links: [['Explore the code', 'https://github.com/izzfaris14/Dual-Pi_AttireCheck_System']],
    source: 'Project repository and résumé'
  },
  pliz: {
    title: 'PLiZ. Planning, simplified.', meta: 'NEBULA X HACKATHON / SEPTEMBER 2026',
    lead: 'A team-built railway maintenance workspace that turns competing track-access requests into crew-assigned schedules and disruption previews.',
    image: 'assets/pliz-overview.png', imageAlt: 'Actual PLiZ planning workspace screenshot',
    details: ['A deterministic Python heuristic builds schedules from access capacity, activity dependencies, crew skills, and planning constraints.', 'A React interface and FastAPI backend bring crew management, schedule views, and disruption simulations into one workspace.', 'The AI assistant interprets requests and explains results. Python computes and checks the schedules; simulations are reviewed before they are applied.'],
    note: 'Built by a five-person team. Awarded 2nd place at the Nebula X Hackathon. The demo uses synthetic Alpha/Beta railway data and is an experimental planning tool.',
    links: [['Explore the code', 'https://github.com/izzfaris14/LTA-hackathon-2026'], ['Open live demo', 'https://pliz-256257918754.asia-southeast1.run.app/']],
    source: 'Project repository and résumé'
  },
  mailbox: {
    title: 'Connected at the doorstep.', meta: 'SMART MAILBOX / SIT CEG2001 & CEG2002 / IN PROGRESS',
    lead: 'A distributed IoT mailbox project connecting an MSP430, an ESP32, and an Arduino to detect deliveries and send notifications.',
    details: ['Establishing bidirectional UART communication between the three microcontrollers.', 'Integrating optical, weight, and door-state sensing with hardware interrupts and low-power sleep modes on the MSP430.', 'Using ESP32 Wi-Fi to send parcel-arrival notifications and status telemetry through Telegram.'],
    note: 'In progress with a five-person team. Current work connects the embedded sensing, inter-device communication, and notification pipeline.',
    links: [], source: 'Résumé project description'
  },
  route: {
    title: 'Every passenger. A plan.', meta: 'SHUTTLE SCHEDULING / SIT INF1009',
    lead: 'A modular C++17 passenger-dispatch system that matches shuttle capacity, route alignment, and pickup timing.',
    details: ['Models passengers, shuttles, and routes separately from validation, scheduling, storage, and the console interface.', 'The scheduling engine applies seat limits, route constraints, and a strict 10-minute arrival window.', 'The team used Strategy and Factory patterns, smart pointers, input validation, and flat-file serialization.'],
    note: 'Five-person object-oriented programming team project. The autonomous shuttle service is a software model, not a deployed driverless vehicle.',
    links: [['Explore the code', 'https://github.com/izzfaris14/RoutePlanner']], source: 'Project repository and résumé'
  },
  fpga: {
    title: 'Logic, on hardware.', meta: 'FPGA TRAFFIC CONTROLLER / SIT CEG1007',
    lead: 'A sequential-logic traffic controller designed in VHDL and deployed to a Basys 3 FPGA development board.',
    details: ['A deterministic finite state machine coordinates the controller’s sequential behaviour.', 'The team developed and synthesized VHDL in Xilinx Vivado, with simulation to check timing and logic behaviour.', 'The resulting bitstream was deployed to the Basys 3 board for hardware execution.'],
    note: 'Built by a five-person team for the CEG1007 Digital Systems course.',
    links: [], source: 'Résumé project description'
  },
  telematics: {
    title: 'Reading the road.', meta: 'BUS TELEMATICS / SIT CEG2003 / IN PROGRESS',
    lead: 'An in-progress analytics pipeline exploring bus-driver behaviour and incident risk from telematics and historical incident data.',
    details: ['Preprocessing sensor alarm logs and historical accident data using Pandas and NumPy.', 'Engineering features around harsh braking, rapid acceleration, and lane swerves for classification experiments.', 'Developing the workflow with scikit-learn, Streamlit, and reproducible Docker environments.'],
    note: 'In progress with a five-person team for CEG2003 Data Analytics. Current work focuses on preprocessing, feature engineering, and classification experiments.',
    links: [], source: 'Résumé project description'
  },
  fitz: {
    title: 'A wardrobe with a plan.', meta: 'FITZ / AGNES AI HACKATHON / JUNE 2026',
    lead: 'An AI-powered digital wardrobe and automated outfit planner built by a five-person hackathon team.',
    image: 'assets/hackathon-agnes-1st-place.jpg', imageAlt: 'FitZ five-person team awarded 1st Place at the Agnes AI Hackathon @ SMU',
    details: ['Uses Agnes AI APIs to support digital wardrobe and outfit planning.', 'The team’s project aimed to reduce daily outfit decision stress and impulsive buying.', 'Awarded 1st place at the Agnes AI Hackathon hosted by Agnes AI and SMU AI.'],
    note: 'Developed by a five-person team at the Agnes AI Hackathon in June 2026.',
    links: [], source: 'Résumé awards and competitions'
  },
  custompc: {
    title: 'Custom Rig Architecture.', meta: 'HARDWARE & SYSTEMS / PERSONAL EXPLORATION',
    lead: 'A hands-on deep dive into PC hardware assembly, thermal dynamics, and performance benchmarking.',
    details: [
      'Component matching, evaluating motherboard VRM phases, PCIe lane distribution, and memory timing compatibility.',
      'Optimizing thermal dissipation, static pressure fan configurations, and negative vs positive airflow dynamics.',
      'BIOS tuning, power curves, memory XMP/EXPO profiling, and stability stress-testing across sustained compute loads.'
    ],
    note: 'Personal engineering exploration bridging foundational mechanical packaging with electronic hardware performance.',
    links: [], source: 'Personal hobby & hardware exploration'
  }
};

document.documentElement.classList.add('js');
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  revealElements.forEach(element => observer.observe(element));
} else revealElements.forEach(element => element.classList.add('visible'));

const themeButton = document.querySelector('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
}
try { const saved = localStorage.getItem('izz-theme'); if (saved === 'light' || saved === 'dark') setTheme(saved); } catch {}
themeButton.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; setTheme(theme);
  try { localStorage.setItem('izz-theme', theme); } catch {}
});

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter; let count = 0;
  filterButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  cards.forEach(card => { const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter); card.hidden = !visible; if (visible) { count++; card.classList.add('visible'); } });
  document.querySelector('#project-grid').classList.toggle('is-filtered', filter !== 'all');
  document.querySelector('#filter-status').textContent = `Showing ${count} ${filter === 'all' ? '' : filter + ' '}projects.`;
}));

const selfFilterButtons = document.querySelectorAll('[data-self-filter]');
const selfCards = document.querySelectorAll('.self-card');
selfFilterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.selfFilter;
  selfFilterButtons.forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
  selfCards.forEach(card => {
    const visible = filter === 'all' || card.dataset.category.split(' ').includes(filter);
    card.hidden = !visible;
    if (visible) card.classList.add('visible');
  });
}));

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let lastProjectTrigger;
function element(tag, className, value) { const node = document.createElement(tag); if (className) node.className = className; if (value) node.textContent = value; return node; }
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project]; if (!project) return;
  lastProjectTrigger = button; content.replaceChildren();
  content.append(element('p', 'dialog-meta', project.meta));
  const heading = element('h2', '', project.title); heading.id = 'dialog-title'; content.append(heading, element('p', 'dialog-lead', project.lead));
  if (project.image) { const img = element('img', 'dialog-image'); img.src = project.image; img.alt = project.imageAlt; content.append(img); }
  content.append(element('h3', '', 'Inside the project'));
  const list = element('ul'); project.details.forEach(detail => list.append(element('li', '', detail))); content.append(list, element('p', 'dialog-note', project.note));
  if (project.links.length) { const links = element('div', 'dialog-links'); project.links.forEach(([label, href]) => { const link = element('a', '', label + ' ↗'); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; links.append(link); }); content.append(links); }
  dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('dialog-lock');
}));

function openPhotoModal(imgSrc, imgAlt, captionText, metaText, triggerEl) {
  lastProjectTrigger = triggerEl;
  content.replaceChildren();
  if (metaText) content.append(element('p', 'dialog-meta', metaText));
  const heading = element('h2', '', captionText || imgAlt);
  heading.id = 'dialog-title';
  content.append(heading);
  const img = element('img', 'dialog-image');
  img.src = imgSrc;
  img.alt = imgAlt;
  img.style.maxHeight = '65vh';
  img.style.objectFit = 'contain';
  content.append(img);
  if (captionText && imgAlt && captionText !== imgAlt) {
    content.append(element('p', 'dialog-lead', imgAlt));
  }
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-lock');
}

document.querySelectorAll('.gallery-item, .beyond-visual-wrap.interactive').forEach(item => {
  const handler = () => {
    const img = item.querySelector('img');
    if (!img) return;
    const figcaption = item.querySelector('figcaption');
    const tag = item.querySelector('.beyond-tag');
    const caption = figcaption ? figcaption.textContent : (tag ? tag.textContent : '');
    const awardCard = item.closest('.award-card');
    const awardTitle = awardCard?.querySelector('.award h3')?.textContent;
    const awardPlace = awardCard?.querySelector('.award .place')?.textContent;
    const awardMeta = awardTitle ? (awardPlace ? `${awardPlace} PLACE · ${awardTitle}`.toUpperCase() : awardTitle.toUpperCase()) : null;
    const meta = tag ? tag.textContent : (awardMeta || item.closest('.beyond-grid')?.querySelector('.beyond-role-meta')?.textContent || 'GALLERY');
    openPhotoModal(img.src, img.alt, caption, meta, item);
  };
  item.addEventListener('click', handler);
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handler();
    }
  });
});

function closeDialog() { dialog.close(); }
document.querySelector('.dialog-close').addEventListener('click', closeDialog);
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-lock'); lastProjectTrigger?.focus({ preventScroll: true }); });

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try { await navigator.clipboard.writeText('izzfaris14@gmail.com'); status.textContent = 'Email copied.'; }
  catch { status.textContent = 'izzfaris14@gmail.com'; }
  setTimeout(() => { status.textContent = ''; }, 4000);
});
