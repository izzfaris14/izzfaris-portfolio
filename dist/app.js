const projects = {
  attire: {
    eyebrow: '// EDGE AI & EMBEDDED LINUX · SIT CEG1010',
    title: 'EdgeVision Access Sentinel',
    year: '2026',
    badge: 'SIT CEG1010',
    tags: ['Raspberry Pi 5', 'Ultralytics YOLOv8', 'PyQt6', 'OpenCV', 'Flask', 'EXIF Metadata'],
    overview: [
      'In laboratory environments and high-risk cleanrooms, personal protective equipment (PPE) compliance is critical to personnel safety. Traditional visual inspections are manually intensive, prone to human error, and introduce significant bottlenecks during high-volume shift changes.',
      'EdgeVision Access Sentinel solves this via a distributed dual-node Raspberry Pi 5 appliance. The primary node captures live video feeds and executes optimized YOLOv8 inference alongside a multi-threaded PyQt6 UI, streaming bounding-box coordinates and attire classifications. The localized secondary Flask node receives JPEG payloads with detection coordinates preserved directly in EXIF metadata, generating isolated crops with zero packet loss across the local network.'
    ],
    media: [
      {
        type: 'image',
        src: 'assets/attire-still.png',
        alt: 'Real-time YOLOv8 attire detection interface frame',
        caption: 'Live Inference Frame · Dual-node attire classification & lab PPE compliance'
      },
      {
        type: 'placeholder',
        title: 'System Architecture Diagram',
        sub: 'Dual-Node Raspberry Pi 5 Bus Routing & Asynchronous Inference',
        caption: 'Figure 1.1 · Zero-loss EXIF metadata logging & localized Flask REST pipeline'
      }
    ],
    specs: [
      'Dual-node Raspberry Pi 5 architecture isolating high-throughput inference from server-side EXIF serialization.',
      'Custom attire YOLOv8 model reaching 94.0% detection mAP across covered tops, long pants, and lab footwear.',
      'Multi-threaded PyQt6 event dispatch loop ensuring sub-35ms frame render times without UI thread starvation.',
      'Deterministic zero-loss network logging via localized Flask REST endpoints with structured EXIF bounding headers.'
    ],
    repoUrl: 'https://github.com/izzfaris14/Dual-Pi_AttireCheck_System',
    repoLabel: 'View Repository on GitHub'
  },

  pliz: {
    eyebrow: '// AUTONOMOUS OPERATIONS · 🥈 2ND PLACE NEBULA X HACKATHON',
    title: 'PLiZ Railway Maintenance Workspace',
    year: '2026',
    badge: '🥈 2ND PLACE · LTA / NUS NEBULA X',
    tags: ['FastAPI', 'React', 'Python Heuristics', 'Automated Pytest', 'Conflict Resolution Engine'],
    overview: [
      'Nocturnal railway track maintenance operates within strict 3-hour engineering windows where maintenance crews, heavy machinery, and track access must be orchestrated with zero tolerance for track-conflict hazards. Manual scheduling across complex rail junctions is error-prone and slow to adapt during unplanned disruptions.',
      'PLiZ is an automated operations workspace designed for Land Transport Authority (LTA) engineers. Built around deterministic constraint-satisfaction heuristics in Python, it parses station topologies, safety clearance rules, and crew certifications to automatically resolve overlapping track reservations and recommend optimized work rosters. An asynchronous FastAPI backend and React frontend allow operators to simulate track disruptions in real time.'
    ],
    media: [
      {
        type: 'image',
        src: 'assets/pliz-overview.png',
        alt: 'PLiZ nocturnal track reservation and scheduling workspace',
        caption: 'Control Room View · Dynamic track conflict resolution matrix & crew rosters'
      },
      {
        type: 'placeholder',
        title: 'System Architecture Diagram',
        sub: 'Constraint-Satisfaction Heuristic & Asynchronous FastAPI Pipeline',
        caption: 'Figure 2.1 · Event-driven failover handling & nocturnal engineering window solver'
      }
    ],
    specs: [
      'Deterministic heuristic algorithm resolving track conflicts and crew skill constraints across 240+ simulated scenarios.',
      'Asynchronous FastAPI microservices achieving sub-50ms schedule recalculation upon simulated track blockages.',
      'Interactive React workspace with automated negative Pytest suites validating failover states under speed isolations.',
      'Awarded 2nd Place out of 240+ national tertiary teams at the 2026 Nebula X Hackathon (LTA & NUS).'
    ],
    repoUrl: 'https://github.com/izzfaris14/LTA-hackathon-2026',
    repoLabel: 'View Repository on GitHub',
    demoUrl: 'https://pliz-256257918754.asia-southeast1.run.app/'
  },

  fitz: {
    eyebrow: '// MULTIMODAL AI & APIS · 🥇 1ST PLACE AGNES AI HACKATHON',
    title: 'FitZ AI Digital Wardrobe',
    year: '2026',
    badge: '🥇 1ST PLACE CHAMPION · SMU AI',
    tags: ['Agnes AI API', 'Python', 'FastAPI', 'React', 'Multimodal Computer Vision'],
    overview: [
      'Consumers face daily decision fatigue when coordinating attire and frequently purchase redundant garments due to poor visibility into existing wardrobe inventories. This friction contributes to fast-fashion waste and inefficient daily preparation routines.',
      'FitZ is an intelligent digital wardrobe and outfit curation system. Users photograph their clothing items, which are automatically segmented, categorized, and tagged via multimodal computer vision. By querying Agnes AI multimodal intelligence endpoints with user constraints (weather, formality, color harmony), FitZ delivers contextual outfit recommendations that maximize wardrobe utilization.'
    ],
    media: [
      {
        type: 'image',
        src: 'assets/hackathon-agnes-1st-place.jpg',
        alt: 'FitZ team awarded 1st Place Champion at the Agnes AI Hackathon @ SMU',
        caption: 'Competition Podium · 1st Place Champion out of 37+ teams at Agnes AI Hackathon @ SMU'
      },
      {
        type: 'placeholder',
        title: 'System Architecture Diagram',
        sub: 'Multimodal Vision Pipeline & Agnes AI Recommendation Engine',
        caption: 'Figure 3.1 · Image segmentation, latent feature matching, and recommendation microservice'
      }
    ],
    specs: [
      'Multimodal image ingestion pipeline segmenting and classifying clothing attributes into structured JSON schemas.',
      'Contextual recommendation engine querying Agnes AI APIs tailored to weather telemetry and personal aesthetics.',
      'Lightweight React mobile-first interface backed by high-throughput FastAPI endpoints.',
      'Awarded 1st Place Champion out of 37+ teams at the Agnes AI Hackathon hosted by Agnes AI and SMU AI.'
    ],
    repoUrl: 'https://github.com/izzfaris14/FitZ-AI-Wardrobe',
    repoLabel: 'View Repository on GitHub'
  },

  route: {
    eyebrow: '// LOW-LEVEL SYSTEMS · MODERN C++17',
    title: 'Driverless Transit Dispatcher',
    year: '2026',
    badge: 'SIT OBJECT-ORIENTED PROGRAMMING',
    tags: ['Modern C++17', 'OOP & SOLID', 'In-Memory RAM', 'Regex Sanitization', 'Design Patterns'],
    overview: [
      'Autonomous transit networks require deterministic shuttle dispatching and passenger route allocation without relying on heavy external runtime dependencies. Unpredictable garbage collection cycles and loose memory models can introduce unacceptable scheduling jitter in real-time embedded transit controllers.',
      'The Driverless Transit Dispatcher is an autonomous public shuttle simulator architected in Modern C++17. Designed around SOLID principles and Strategy/Factory patterns, the simulator models passenger groups, route graphs, seat capacities, and vehicle fleets strictly decoupled from storage and presentation. Timetable scheduling runs entirely in-memory with strict exception safety and RAII memory discipline.'
    ],
    media: [
      {
        type: 'placeholder',
        title: 'Terminal Architecture & Engine Model',
        sub: 'SOLID Strategy/Factory Patterns & In-RAM Dispatching',
        caption: 'Figure 4.1 · Modern C++17 class hierarchy, smart pointer lifecycle, and timetable solver'
      },
      {
        type: 'placeholder',
        title: 'Timing & Route Optimization Matrix',
        sub: 'Dynamic Passenger Group Allocation & Seat Capacity Guard',
        caption: 'Figure 4.2 · Strict 10-minute arrival window constraint & defensive regex sanitization pipeline'
      }
    ],
    specs: [
      'Strict adherence to SOLID principles, employing Factory Method for shuttle instantiations and Strategy for dispatch logic.',
      'Deterministic in-memory execution enforcing a 10-minute arrival window and zero memory leaks via std::unique_ptr.',
      'Robust input sanitization engine utilizing defensive C++ std::regex to eliminate malformed command injections.',
      'Modular decoupling enabling seamless replacement of console UI with embedded CAN-bus or serial interfaces.'
    ],
    repoUrl: 'https://github.com/izzfaris14/RoutePlan',
    repoLabel: 'View Repository on GitHub'
  },

  mailbox: {
    eyebrow: '// IOT & EMBEDDED HARDWARE · MULTI-MCU NODE',
    title: 'Distributed Smart Mailbox & Delivery Node',
    year: '2026',
    badge: '[HARDWARE PROTOTYPE · IN PROGRESS]',
    tags: ['MSP430', 'ESP32', 'Arduino', 'UART / SPI / I2C', 'Hardware ISRs', 'Low-Power Modes'],
    overview: [
      'Residential delivery security often suffers from blind drops and unauthorized access. Conventional battery-operated smart mailboxes either deplete power rapidly due to constant Wi-Fi polling or fail to register lightweight parcels and letters accurately.',
      'This project implements a multi-MCU smart delivery appliance establishing bidirectional UART communication across a Texas Instruments MSP430, an ESP32, and an Arduino. The ultra-low-power MSP430 remains in sleep mode until physical drop events trigger hardware interrupts via optical break-beam and strain-gauge sensors. Once verified, telemetry is passed to the ESP32 to broadcast encrypted Telegram alerts over Wi-Fi.'
    ],
    media: [
      {
        type: 'placeholder',
        title: 'Hardware Schematic & Inter-MCU Bus',
        sub: 'MSP430 (Low-Power ISR) ↔ ESP32 (Wi-Fi Telemetry) ↔ Arduino',
        caption: 'Figure 5.1 · Multi-MCU pinout mapping, UART packet structure, and optical interrupt sensors'
      },
      {
        type: 'placeholder',
        title: 'Power Profile & Sleep Duty Cycle',
        sub: 'LPM3 Quiescent Current Bench Verification & Sensor Wakeup',
        caption: 'Figure 5.2 · Hardware interrupt timing & encrypted Telegram notification webhook'
      }
    ],
    specs: [
      'Low-power hardware ISRs on TI MSP430 waking from deep sleep in microseconds upon optical drop detection.',
      'Custom UART frame protocol with CRC-16 checksums preventing packet corruption across inter-board traces.',
      'Dual-sensing verification combining optical break-beam and strain-gauge weight measurement to eliminate false drops.',
      'ESP32 network telemetry stack generating real-time delivery notices and battery health logs via Telegram Bot API.'
    ],
    repoUrl: 'https://github.com/izzfaris14',
    repoLabel: 'View Hardware Bench Notes on GitHub'
  },

  fpga: {
    eyebrow: '// DIGITAL LOGIC & SYNTHESIS · VHDL & VIVADO',
    title: 'FPGA Sequential Logic Traffic Controller',
    year: '2026',
    badge: '[VHDL · SYNTHESIS COMPLETED]',
    tags: ['VHDL', 'Finite State Machines (FSM)', 'Xilinx Vivado', 'Basys 3 FPGA', 'Sequential Logic'],
    overview: [
      'Complex 4-way traffic intersections require deterministic, fault-tolerant signal sequencing with hardware-enforced failover states. Software controllers can hang or suffer scheduling latency under heavy operating conditions, risking dangerous conflicting green signals.',
      'This project implements a fully synchronous traffic light controller synthesized in VHDL and flashed to a Xilinx Artix-7 Basys 3 FPGA board. The controller is architected as a deterministic Finite State Machine (FSM) managing directional green-yellow-red phase transitions, pedestrian crossing request queues, and priority emergency vehicle overrides with zero race conditions.'
    ],
    media: [
      {
        type: 'placeholder',
        title: 'FSM State Transition Diagram',
        sub: 'Deterministic Mealy/Moore State Machine & Priority Overrides',
        caption: 'Figure 6.1 · Phase sequencing, pedestrian service routines, and emergency override states'
      },
      {
        type: 'placeholder',
        title: 'Vivado Behavioral Timing Simulation',
        sub: 'Gate-Level Waveform & Propagation Delay Verification',
        caption: 'Figure 6.2 · Clock divider synthesis (100MHz to 1Hz) and physical XDC constraint pin mapping'
      }
    ],
    specs: [
      'Synthesized purely in VHDL using synchronous clock dividers to scale 100MHz FPGA master clock down to 1Hz.',
      'Deterministic Mealy/Moore FSM guaranteeing zero conflicting phase states across North/South and East/West corridors.',
      'Gate-level timing simulations verified in Xilinx Vivado before bitstream generation and physical Basys 3 hardware flashing.',
      'Physical constraints file (XDC) mapping inputs to onboard push buttons and outputs to seven-segment displays & LEDs.'
    ],
    repoUrl: 'https://github.com/izzfaris14',
    repoLabel: 'View VHDL Source on GitHub'
  },

  telematics: {
    eyebrow: '// MACHINE LEARNING & ANALYTICS · SIT CEG2003',
    title: 'Bus Captain Telematic Risk Predictive Pipeline',
    year: '2026',
    badge: '[RESEARCH & ML · SANITIZED PIPELINE]',
    tags: ['Python 3.13', 'Scikit-Learn', 'SciPy', 'Pandas', 'NumPy', 'Docker', 'Predictive Modeling'],
    overview: [
      'Public transit operators manage extensive fleets where driver fatigue and harsh driving dynamics correlate directly with passenger falls and collision incidents. Raw telematics feeds contain millions of high-frequency sensor readings that require sophisticated filtering before predictive classification can occur.',
      'This project develops an end-to-end data analytics and risk scoring pipeline modeling driver behavior from historical transit telemetry. The pipeline preprocesses multi-axis accelerometer and braking pressure logs, engineers statistical features around harsh braking, swerves, and aggressive acceleration, and trains classification models to flag high-risk operational patterns. All private company telemetry is sanitized in strict accordance with data governance policies.'
    ],
    media: [
      {
        type: 'placeholder',
        title: 'Feature Engineering & Signal Processing Pipeline',
        sub: 'Accelerometer/Gyro Filtering & Statistical Feature Extraction',
        caption: 'Figure 7.1 · Time-series windowing, derivative jerk calculations, and outlier thresholding'
      },
      {
        type: 'placeholder',
        title: 'Model Evaluation & ROC Analysis',
        sub: 'Scikit-Learn Classification Benchmarks & Risk Scoring Matrix',
        caption: 'Figure 7.2 · Precision-recall trade-offs and containerized Docker execution environment'
      }
    ],
    specs: [
      'High-throughput Pandas and NumPy data cleansing pipeline handling multi-gigabyte time-series telematics logs.',
      'Engineered domain-specific feature vectors capturing lateral g-force spikes, sustained deceleration, and speed variance.',
      'Supervised classification models evaluated with Scikit-Learn using cross-validated F1 and ROC-AUC metrics.',
      'Reproducible ML workflow containerized with Docker to ensure zero environment drift across analytics nodes.'
    ],
    repoUrl: 'https://github.com/izzfaris14',
    repoLabel: 'View Pipeline Architecture on GitHub'
  }
};

document.documentElement.classList.add('js');

// Reveal animations
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}

// Theme toggle
const themeButton = document.querySelector('.theme-toggle');
if (themeButton) {
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  }
  try {
    const saved = localStorage.getItem('izz-theme');
    if (saved === 'light' || saved === 'dark') setTheme(saved);
  } catch {}
  themeButton.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(theme);
    try { localStorage.setItem('izz-theme', theme); } catch {}
  });
}

// ==========================================
// HORIZONTAL CAROUSEL CONTROLS (ROBUST SHIFT FIX)
// ==========================================
const rail = document.querySelector('#project-rail');
const prevBtn = document.querySelector('.carousel-prev-btn');
const nextBtn = document.querySelector('.carousel-next-btn');
const stageCounter = document.querySelector('.stage-counter');

if (rail && prevBtn && nextBtn) {
  const getPanels = () => Array.from(rail.querySelectorAll('.project-panel'));

  const getScrollStep = () => {
    const panels = getPanels();
    if (panels.length >= 2) {
      const p0 = panels[0].getBoundingClientRect();
      const p1 = panels[1].getBoundingClientRect();
      const delta = p1.left - p0.left;
      if (delta > 50) return delta;
    }
    const first = panels[0];
    return first ? first.offsetWidth + 24 : rail.clientWidth * 0.75;
  };

  const scrollCarousel = (direction) => {
    const step = getScrollStep();
    const current = rail.scrollLeft;
    const target = direction === 'next' ? (current + step) : Math.max(0, current - step);
    rail.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollCarousel('next');
  });

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollCarousel('prev');
  });

  [prevBtn, nextBtn, rail].forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollCarousel('next');
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollCarousel('prev');
      }
    });
  });

  if (stageCounter) {
    const updateCounter = () => {
      const panels = getPanels();
      if (!panels.length) return;
      const railRect = rail.getBoundingClientRect();
      let activeIndex = 0;
      let minDiff = Infinity;
      panels.forEach((panel, i) => {
        const rect = panel.getBoundingClientRect();
        const diff = Math.abs(rect.left - railRect.left);
        if (diff < minDiff) {
          minDiff = diff;
          activeIndex = i;
        }
      });
      const num = String(Math.min(activeIndex + 1, panels.length)).padStart(2, '0');
      const total = String(panels.length).padStart(2, '0');
      stageCounter.textContent = `${num} — ${total}`;
    };

    let scrollRaf;
    rail.addEventListener('scroll', () => {
      cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(updateCounter);
    }, { passive: true });
    updateCounter();
  }
}

// ==========================================
// ARCHIVE PAGE FILTERING & SEARCH (projects.html)
// ==========================================
const archiveGrid = document.querySelector('#archive-grid');
const archivePills = document.querySelectorAll('.archive-pill');
const archiveSearch = document.querySelector('#archive-search');
const archiveCounter = document.querySelector('#archive-counter');
const archiveEmpty = document.querySelector('#archive-empty');
const resetFilterBtn = document.querySelector('#reset-filter-btn');

if (archiveGrid && archivePills.length) {
  let activeCategory = 'all';
  let searchQuery = '';

  const applyFilters = () => {
    const cards = archiveGrid.querySelectorAll('.archive-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const catData = card.dataset.category || '';
      const titleData = (card.dataset.title || '').toLowerCase();
      const techData = (card.dataset.tech || '').toLowerCase();
      const bodyText = (card.innerText || '').toLowerCase();

      const matchesCategory = activeCategory === 'all' || catData.split(' ').includes(activeCategory);
      const matchesSearch = !searchQuery || 
        titleData.includes(searchQuery) || 
        techData.includes(searchQuery) || 
        bodyText.includes(searchQuery);

      const isVisible = matchesCategory && matchesSearch;
      if (isVisible) {
        card.style.display = '';
        card.classList.remove('archive-hidden');
        card.classList.add('visible');
        visibleCount++;
      } else {
        card.classList.add('archive-hidden');
        card.style.display = 'none';
      }
    });

    if (archiveCounter) {
      archiveCounter.textContent = `Showing ${visibleCount} of ${cards.length} projects`;
    }

    if (archiveEmpty) {
      archiveEmpty.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  };

  archivePills.forEach(pill => {
    pill.addEventListener('click', () => {
      archivePills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      activeCategory = pill.dataset.filter;
      applyFilters();
    });
  });

  if (archiveSearch) {
    archiveSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      activeCategory = 'all';
      searchQuery = '';
      if (archiveSearch) archiveSearch.value = '';
      archivePills.forEach(p => {
        const isAll = p.dataset.filter === 'all';
        p.classList.toggle('active', isAll);
        p.setAttribute('aria-selected', String(isAll));
      });
      applyFilters();
    });
  }
}

// ==========================================
// STANDARDIZED MODAL DETAIL VIEW POPUP
// ==========================================
const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let lastProjectTrigger;

function openStandardProjectModal(projectKey, triggerEl) {
  const project = projects[projectKey];
  if (!project || !dialog || !content) return;
  lastProjectTrigger = triggerEl;

  // Build Standardized Layout
  let mediaHtml = '';
  if (project.media && project.media.length) {
    mediaHtml = project.media.map(m => {
      if (m.type === 'image') {
        return `
          <div class="modal-media-box">
            <img src="${m.src}" alt="${m.alt}" loading="lazy">
            <span class="modal-media-caption">${m.caption}</span>
          </div>
        `;
      } else {
        return `
          <div class="modal-media-box">
            <div class="modal-placeholder-screen">
              <div class="modal-placeholder-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224v24H32ZM224,192H32V104H224v88Zm-96-48a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h48A8,8,0,0,1,128,144Zm56,24a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h104A8,8,0,0,1,184,168Z"></path></svg>
              </div>
              <span class="modal-placeholder-title">[ ${m.title} ]</span>
              <span class="modal-placeholder-sub">${m.sub}</span>
            </div>
            <span class="modal-media-caption">${m.caption}</span>
          </div>
        `;
      }
    }).join('');
  }

  const tagsHtml = project.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  const overviewHtml = project.overview.map(p => `<p>${p}</p>`).join('');
  const specsHtml = project.specs.map(s => `<li>${s}</li>`).join('');

  content.innerHTML = `
    <div class="modal-standard-container">
      <!-- 1. Project Header -->
      <div class="modal-header-block">
        <span class="modal-eyebrow">${project.eyebrow}</span>
        <h2 id="dialog-title" class="modal-title">${project.title}</h2>
        <div class="modal-meta-row">
          <span class="modal-badge">${project.badge}</span>
          <span class="modal-tag">YEAR ${project.year}</span>
          ${tagsHtml}
        </div>
      </div>

      <!-- 2. Executive Overview (2-Paragraph Technical Narrative) -->
      <div class="modal-overview-block">
        ${overviewHtml}
      </div>

      <!-- 3. Media / Architecture Showcase (Responsive Container) -->
      <div class="modal-media-grid">
        ${mediaHtml}
      </div>

      <!-- 4. Key Technical Specifications -->
      <div class="modal-specs-block">
        <div class="modal-specs-title">// KEY TECHNICAL SPECIFICATIONS</div>
        <ul class="modal-specs-list">
          ${specsHtml}
        </ul>
      </div>

      <!-- 5. Direct Repository CTA -->
      <div class="modal-footer-cta">
        <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="modal-repo-btn">
          <span>${project.repoLabel || 'View Repository on GitHub'}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
        </a>
        ${project.demoUrl ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="modal-demo-btn">
            <span>Open Live Demo ↗</span>
          </a>
        ` : ''}
      </div>
    </div>
  `;

  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-lock');
}

// Delegate project click triggers
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-project]');
  if (trigger) {
    const key = trigger.dataset.project;
    if (projects[key]) {
      e.preventDefault();
      openStandardProjectModal(key, trigger);
    }
  }
});

// Lightbox for Beyond The Terminal photos
function openPhotoModal(imgSrc, imgAlt, captionText, metaText, triggerEl) {
  if (!dialog || !content) return;
  lastProjectTrigger = triggerEl;
  content.innerHTML = `
    <div class="modal-standard-container">
      <div class="modal-header-block">
        <span class="modal-eyebrow">${metaText || '// FIELD PHOTOGRAPHY'}</span>
        <h2 id="dialog-title" class="modal-title">${captionText || imgAlt}</h2>
      </div>
      <div class="modal-media-box" style="margin-top: 8px;">
        <img src="${imgSrc}" alt="${imgAlt}" style="max-height: 65vh; object-fit: contain; width: 100%;">
        <span class="modal-media-caption">${imgAlt}</span>
      </div>
    </div>
  `;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-lock');
}

document.querySelectorAll('.showroom-photo-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (!img) return;
    const caption = item.querySelector('.showroom-photo-caption')?.textContent || img.alt;
    const card = item.closest('.showroom-card');
    const badge = card?.querySelector('.showroom-card-badge')?.textContent || '// FIELD PHOTOGRAPHY';
    openPhotoModal(img.src, img.alt, caption, badge, item);
  });
});

if (dialog) {
  function closeDialog() { dialog.close(); }
  const closeBtn = document.querySelector('.dialog-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDialog);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const bounds = dialog.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      ) {
        closeDialog();
      }
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-lock');
    lastProjectTrigger?.focus({ preventScroll: true });
  });
}

// Copy email to clipboard
const copyBtn = document.querySelector('.copy-email, .copy-email-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status, .copy-status-msg');
    try {
      await navigator.clipboard.writeText('izzfaris14@gmail.com');
      if (status) status.textContent = 'Email copied to clipboard.';
    } catch {
      if (status) status.textContent = 'izzfaris14@gmail.com';
    }
    setTimeout(() => { if (status) status.textContent = ''; }, 4000);
  });
}

// Dual-Track Showroom Switcher
const trackBtns = document.querySelectorAll('.track-btn');
if (trackBtns.length > 0) {
  trackBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-track'); // 'track-tech' or 'track-beyond'
      trackBtns.forEach(b => {
        const active = (b === btn);
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('.track-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === targetId);
      });
    });
  });
}
