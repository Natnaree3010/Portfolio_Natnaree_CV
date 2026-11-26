/* ==========================================================================
   Portfolio Interactive Logic — Loads data/portfolio-data.json
   ========================================================================== */

const ARTWORKS = {
  seaguard: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="SeaGuard coral bleaching AI interface preview">
      <defs>
        <linearGradient id="sgBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#090B10" />
          <stop offset="55%" stop-color="#111520" />
          <stop offset="100%" stop-color="#1E3A8A" stop-opacity="0.45" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#sgBg)" />
      <rect x="20" y="16" width="360" height="28" rx="8" fill="#111520" stroke="#1E293B" />
      <circle cx="34" cy="30" r="4" fill="#3B82F6" />
      <text x="46" y="34" fill="#F8FAFC" font-size="10" font-weight="700" font-family="sans-serif">SeaGuard • Coral Bleaching AI</text>
      <rect x="322" y="21" width="48" height="18" rx="6" fill="#2563EB" fill-opacity="0.25" />
      <text x="346" y="33" fill="#93C5FD" font-size="8" font-weight="700" text-anchor="middle" font-family="sans-serif">+7 DAYS</text>

      <rect x="20" y="54" width="176" height="148" rx="12" fill="#111520" stroke="#1E293B" />
      <text x="32" y="74" fill="#94A3B8" font-size="8" font-weight="600" font-family="sans-serif">WATER TEMP SIMULATOR</text>
      <text x="32" y="96" fill="#FFFFFF" font-size="18" font-weight="800" font-family="sans-serif">31.5°C</text>
      <rect x="32" y="110" width="152" height="6" rx="3" fill="#1E293B" />
      <rect x="32" y="110" width="108" height="6" rx="3" fill="#3B82F6" />
      <circle cx="140" cy="113" r="5.5" fill="#FFFFFF" stroke="#3B82F6" stroke-width="2" />
      <rect x="32" y="130" width="152" height="58" rx="9" fill="#090B10" />
      <text x="42" y="146" fill="#94A3B8" font-size="7.5" font-family="sans-serif">PROJECTED DHW</text>
      <polyline fill="none" stroke="#60A5FA" stroke-width="2.5" points="42,175 74,168 106,161 138,151 172,139" />

      <rect x="206" y="54" width="174" height="148" rx="12" fill="#111520" stroke="#1E293B" />
      <text x="218" y="74" fill="#94A3B8" font-size="8" font-weight="600" font-family="sans-serif">AI RISK INDEX</text>
      <text x="218" y="98" fill="#FFFFFF" font-size="20" font-weight="800" font-family="sans-serif">0.35</text>
      <rect x="268" y="84" width="46" height="18" rx="6" fill="#2563EB" fill-opacity="0.22" />
      <text x="291" y="96" fill="#93C5FD" font-size="8" font-weight="700" text-anchor="middle" font-family="sans-serif">WATCH</text>
      <rect x="218" y="114" width="150" height="74" rx="9" fill="#090B10" stroke="#1E293B" />
      <text x="228" y="131" fill="#93C5FD" font-size="8" font-weight="700" font-family="sans-serif">Koh Mun Nai • Phi Phi</text>
      <rect x="228" y="141" width="64" height="36" rx="7" fill="#111520" />
      <text x="235" y="154" fill="#94A3B8" font-size="7" font-family="sans-serif">DHW (7D)</text>
      <text x="235" y="169" fill="#FFFFFF" font-size="10.5" font-weight="700" font-family="sans-serif">1.80°C-wk</text>
      <rect x="298" y="141" width="60" height="36" rx="7" fill="#111520" />
      <text x="305" y="154" fill="#94A3B8" font-size="7" font-family="sans-serif">AI WINDOW</text>
      <text x="305" y="169" fill="#60A5FA" font-size="10.5" font-weight="700" font-family="sans-serif">30 Days</text>
    </svg>
  `,
  subsidence: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="BITFLOW Urban Subsidence dashboard UI preview">
      <rect width="400" height="220" fill="#090B10" />
      <rect x="16" y="16" width="368" height="188" rx="14" fill="#F8FAFC" />
      <rect x="16" y="16" width="84" height="188" rx="14" fill="#FFFFFF" stroke="#E2E8F0" />
      <circle cx="58" cy="42" r="11" fill="#1D4ED8" />
      <text x="58" y="45.5" fill="#FFFFFF" font-size="8" font-weight="700" text-anchor="middle" font-family="sans-serif">BF</text>
      <text x="58" y="64" fill="#090B10" font-size="8.5" font-weight="800" text-anchor="middle" font-family="sans-serif">BITFLOW</text>
      <rect x="25" y="78" width="66" height="18" rx="6" fill="#2563EB" fill-opacity="0.12" />
      <text x="58" y="90" fill="#1D4ED8" font-size="7.5" font-weight="700" text-anchor="middle" font-family="sans-serif">Dashboard</text>
      <rect x="25" y="102" width="66" height="18" rx="6" fill="#F1F5F9" />
      <text x="58" y="114" fill="#475569" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">3D Risk</text>
      <rect x="25" y="126" width="66" height="18" rx="6" fill="#F1F5F9" />
      <text x="58" y="138" fill="#475569" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Soil &amp; InSAR</text>

      <rect x="110" y="26" width="126" height="78" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
      <text x="118" y="40" fill="#090B10" font-size="8" font-weight="700" font-family="sans-serif">InSAR &amp; Heat Map</text>
      <rect x="118" y="46" width="110" height="48" rx="7" fill="#111520" />
      <circle cx="152" cy="70" r="14" fill="#3B82F6" fill-opacity="0.7" />
      <circle cx="192" cy="66" r="11" fill="#93C5FD" fill-opacity="0.75" />

      <rect x="244" y="26" width="130" height="78" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
      <text x="252" y="40" fill="#090B10" font-size="8" font-weight="700" font-family="sans-serif">Soil Composition</text>
      <circle cx="284" cy="72" r="22" fill="none" stroke="#1D4ED8" stroke-width="8" stroke-dasharray="58 140" />
      <circle cx="284" cy="72" r="22" fill="none" stroke="#60A5FA" stroke-width="8" stroke-dasharray="42 140" stroke-dashoffset="-58" />
      <text x="316" y="64" fill="#334155" font-size="7.5" font-weight="600" font-family="sans-serif">Clay 37%</text>
      <text x="316" y="76" fill="#334155" font-size="7.5" font-weight="600" font-family="sans-serif">Gravel 26%</text>
      <text x="316" y="88" fill="#2563EB" font-size="7.5" font-weight="700" font-family="sans-serif">GNN 5–10Y</text>

      <rect x="110" y="112" width="264" height="82" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
      <text x="118" y="126" fill="#090B10" font-size="8" font-weight="700" font-family="sans-serif">Subsidence Risk Trajectory</text>
      <polyline fill="none" stroke="#2563EB" stroke-width="2.5" points="122,176 165,164 210,155 255,144 305,137 358,133" />
      <circle cx="358" cy="133" r="4" fill="#090B10" />
    </svg>
  `,
  nexus: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="Nexus community banking mobile UI preview">
      <rect width="400" height="220" fill="#090B10" />
      <rect x="62" y="18" width="124" height="184" rx="18" fill="#111520" stroke="#334155" stroke-width="2" />
      <rect x="70" y="28" width="108" height="164" rx="12" fill="#F8FAFC" />
      <rect x="70" y="28" width="108" height="26" rx="12" fill="#1D4ED8" />
      <text x="124" y="44" fill="#FFFFFF" font-size="8" font-weight="700" text-anchor="middle" font-family="sans-serif">NEXUS • Services</text>
      <rect x="78" y="62" width="92" height="22" rx="11" fill="#2563EB" />
      <text x="124" y="76" fill="#FFFFFF" font-size="7.5" font-weight="700" text-anchor="middle" font-family="sans-serif">Queue Booking</text>
      <rect x="78" y="90" width="92" height="22" rx="11" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="124" y="104" fill="#090B10" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Fleet Tracking</text>
      <rect x="78" y="120" width="92" height="62" rx="9" fill="#EFF6FF" />
      <text x="124" y="148" fill="#1D4ED8" font-size="8.5" font-weight="800" text-anchor="middle" font-family="sans-serif">Krungthai</text>
      <text x="124" y="160" fill="#2563EB" font-size="7" font-weight="700" text-anchor="middle" font-family="sans-serif">Community Banking</text>

      <rect x="214" y="18" width="124" height="184" rx="18" fill="#111520" stroke="#334155" stroke-width="2" />
      <rect x="222" y="28" width="108" height="164" rx="12" fill="#F8FAFC" />
      <rect x="222" y="28" width="108" height="86" rx="12" fill="#DBEAFE" />
      <path d="M236 86 Q268 58 292 78 T318 54" fill="none" stroke="#1D4ED8" stroke-width="2.5" stroke-dasharray="3 2" />
      <circle cx="250" cy="76" r="5" fill="#2563EB" />
      <circle cx="312" cy="56" r="5" fill="#090B10" />
      <rect x="230" y="120" width="92" height="62" rx="9" fill="#FFFFFF" stroke="#E2E8F0" />
      <text x="238" y="134" fill="#1D4ED8" font-size="7.5" font-weight="800" font-family="sans-serif">ETA: 8 MIN</text>
      <text x="238" y="147" fill="#090B10" font-size="7" font-weight="600" font-family="sans-serif">Mobile Service Unit</text>
      <rect x="238" y="156" width="76" height="18" rx="6" fill="#1D4ED8" />
      <text x="276" y="168" fill="#FFFFFF" font-size="7" font-weight="700" text-anchor="middle" font-family="sans-serif">Confirm Slot</text>
    </svg>
  `,
  mushroom: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="Mushroom Cultivation IoT dashboard preview">
      <rect width="400" height="220" fill="#090B10" />
      <rect x="18" y="16" width="364" height="188" rx="14" fill="#F8FAFC" />
      <text x="200" y="38" fill="#090B10" font-size="11" font-weight="800" text-anchor="middle" font-family="sans-serif">Mushroom Cultivation IoT Dashboard</text>

      <rect x="74" y="48" width="80" height="20" rx="6" fill="#2563EB" />
      <text x="114" y="61" fill="#FFFFFF" font-size="7.5" font-weight="700" text-anchor="middle" font-family="sans-serif">Incubation</text>
      <rect x="160" y="48" width="80" height="20" rx="6" fill="#E2E8F0" />
      <text x="200" y="61" fill="#334155" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Pinning</text>
      <rect x="246" y="48" width="80" height="20" rx="6" fill="#E2E8F0" />
      <text x="286" y="61" fill="#334155" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Fruiting</text>

      <rect x="30" y="78" width="106" height="54" rx="9" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="83" y="93" fill="#64748B" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Temperature</text>
      <text x="83" y="114" fill="#090B10" font-size="13" font-weight="800" text-anchor="middle" font-family="sans-serif">32.8 °C</text>

      <rect x="147" y="78" width="106" height="54" rx="9" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="200" y="93" fill="#64748B" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">Humidity</text>
      <text x="200" y="114" fill="#1D4ED8" font-size="13" font-weight="800" text-anchor="middle" font-family="sans-serif">60 %</text>

      <rect x="264" y="78" width="106" height="54" rx="9" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="317" y="93" fill="#64748B" font-size="7.5" font-weight="600" text-anchor="middle" font-family="sans-serif">CO2 Level</text>
      <text x="317" y="114" fill="#2563EB" font-size="13" font-weight="800" text-anchor="middle" font-family="sans-serif">589 ppm</text>

      <rect x="30" y="140" width="340" height="52" rx="9" fill="#FFFFFF" stroke="#CBD5E1" />
      <text x="42" y="153" fill="#475569" font-size="7.5" font-weight="700" font-family="sans-serif">Telemetry Log (ESP32 • Flask • MySQL)</text>
      <polyline fill="none" stroke="#2563EB" stroke-width="2" points="42,180 95,172 148,176 202,165 256,169 310,160 356,163" />
    </svg>
  `,
  studybuddy: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="Study Buddy Match mobile UI preview">
      <rect width="400" height="220" fill="#090B10" />
      <rect x="132" y="14" width="136" height="192" rx="20" fill="#111520" stroke="#334155" stroke-width="2" />
      <rect x="140" y="24" width="120" height="172" rx="14" fill="#F8FAFC" />
      <text x="150" y="42" fill="#090B10" font-size="9" font-weight="800" font-family="sans-serif">STUDY BUDDY</text>
      <text x="150" y="53" fill="#64748B" font-size="7" font-family="sans-serif">Sessions &amp; Buddy Match</text>

      <rect x="150" y="60" width="100" height="34" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
      <text x="157" y="72" fill="#090B10" font-size="7" font-weight="700" font-family="sans-serif">Focus EXP • 500</text>
      <rect x="157" y="76" width="84" height="5" rx="2.5" fill="#E2E8F0" />
      <rect x="157" y="76" width="60" height="5" rx="2.5" fill="#2563EB" />
      <text x="157" y="89" fill="#1D4ED8" font-size="6.5" font-weight="700" font-family="sans-serif">Streak: 7 Days</text>

      <rect x="150" y="102" width="100" height="36" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
      <circle cx="164" cy="120" r="8" fill="#1D4ED8" />
      <text x="176" y="117" fill="#090B10" font-size="7.5" font-weight="700" font-family="sans-serif">MASASHI</text>
      <text x="176" y="127" fill="#2563EB" font-size="6.5" font-weight="700" font-family="sans-serif">92% MATCH • #MATH</text>

      <rect x="150" y="144" width="100" height="36" rx="8" fill="#FFFFFF" stroke="#E2E8F0" />
      <circle cx="164" cy="162" r="8" fill="#3B82F6" />
      <text x="176" y="159" fill="#090B10" font-size="7.5" font-weight="700" font-family="sans-serif">ERIN</text>
      <text x="176" y="169" fill="#1D4ED8" font-size="6.5" font-weight="700" font-family="sans-serif">88% MATCH • #PHYSICS</text>
    </svg>
  `,
  bunny: () => `
    <svg viewBox="0 0 400 220" class="w-full h-full object-cover" role="img" aria-label="Bunny Planners mobile prototype preview">
      <rect width="400" height="220" fill="#090B10" />
      <rect x="78" y="18" width="112" height="184" rx="16" fill="#111520" stroke="#334155" stroke-width="2" />
      <rect x="85" y="27" width="98" height="166" rx="11" fill="#FFFFFF" />
      <rect x="85" y="27" width="98" height="20" rx="10" fill="#2563EB" fill-opacity="0.14" />
      <text x="93" y="40" fill="#090B10" font-size="7" font-weight="700" font-family="sans-serif">Daily Vibe &amp; Win</text>
      <rect x="92" y="54" width="84" height="32" rx="7" fill="#F8FAFC" stroke="#CBD5E1" />
      <text x="98" y="67" fill="#1D4ED8" font-size="7" font-weight="700" font-family="sans-serif">Today’s Big Win</text>
      <text x="98" y="78" fill="#64748B" font-size="6.5" font-family="sans-serif">Finish UI prototype</text>
      <rect x="92" y="94" width="84" height="22" rx="6" fill="#EFF6FF" />
      <text x="98" y="108" fill="#1D4ED8" font-size="7" font-weight="700" font-family="sans-serif">12 JAN • Homework</text>
      <rect x="92" y="122" width="84" height="22" rx="6" fill="#F1F5F9" />
      <text x="98" y="136" fill="#090B10" font-size="7" font-weight="700" font-family="sans-serif">20 JAN • Birthday</text>
      <rect x="92" y="164" width="84" height="20" rx="10" fill="#2563EB" />
      <text x="134" y="177" fill="#FFFFFF" font-size="7" font-weight="700" text-anchor="middle" font-family="sans-serif">+ Add Plan</text>

      <rect x="210" y="18" width="112" height="184" rx="16" fill="#111520" stroke="#334155" stroke-width="2" />
      <rect x="217" y="27" width="98" height="166" rx="11" fill="#FFFFFF" />
      <text x="266" y="44" fill="#1D4ED8" font-size="8.5" font-weight="800" text-anchor="middle" font-family="sans-serif">Calendar • Jan</text>
      <rect x="225" y="54" width="82" height="92" rx="8" fill="#F8FAFC" stroke="#E2E8F0" />
      <circle cx="248" cy="76" r="6" fill="#2563EB" fill-opacity="0.2" />
      <text x="248" y="78.5" fill="#1D4ED8" font-size="6.5" font-weight="700" text-anchor="middle" font-family="sans-serif">12</text>
      <circle cx="280" cy="96" r="6" fill="#3B82F6" fill-opacity="0.22" />
      <text x="280" y="98.5" fill="#090B10" font-size="6.5" font-weight="700" text-anchor="middle" font-family="sans-serif">20</text>
      <rect x="225" y="154" width="82" height="30" rx="7" fill="#090B10" />
      <text x="266" y="172" fill="#93C5FD" font-size="7" font-weight="700" text-anchor="middle" font-family="sans-serif">4/8 Habits Done</text>
    </svg>
  `
};

let PORTFOLIO_DATA = {
  projects: [],
  translations: { en: {}, th: {} },
  internBullets: { en: [], th: [] }
};

let currentLang = 'en';
let currentFilter = 'all';

function renderArtwork(type) {
  return typeof ARTWORKS[type] === 'function' ? ARTWORKS[type]() : '';
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const dict = PORTFOLIO_DATA.translations[currentLang];
    if (dict && dict[key]) {
      el.textContent = dict[key];
    }
  });

  const bulletsEl = document.getElementById('internBullets');
  const bullets = PORTFOLIO_DATA.internBullets[currentLang] || [];
  if (bulletsEl) {
    bulletsEl.innerHTML = bullets
      .map(
        (item) => `
        <li class="flex items-start gap-2.5">
          <span class="mt-2 w-1.5 h-1.5 rounded-full bg-electric shrink-0"></span>
          <span>${item}</span>
        </li>
      `
      )
      .join('');
  }

  renderProjects();
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'th' : 'en';
  applyLanguage();
  showToast(currentLang === 'th' ? 'เปลี่ยนเป็นภาษาไทยแล้ว' : 'Switched to English');
}

function setFilter(filterKey) {
  currentFilter = filterKey;
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    const isActive = btn.getAttribute('data-filter') === filterKey;
    btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    btn.className = isActive
      ? 'filter-btn tactile-btn active px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-carbon text-white shadow-sm cursor-pointer'
      : 'filter-btn tactile-btn px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white text-slate-700 border border-hairline hover:border-sapphire hover:text-sapphire cursor-pointer';
  });
  renderProjects();
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const projects = PORTFOLIO_DATA.projects || [];
  const filtered =
    currentFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === currentFilter);

  grid.innerHTML = filtered
    .map(
      (proj, idx) => `
      <article
        style="animation-delay: ${idx * 65}ms"
        onclick="openCaseStudy('${proj.id}')"
        class="project-card-enter group bg-white rounded-[26px] border border-hairline overflow-hidden shadow-galleryCard hover:shadow-galleryHover hover:-translate-y-1.5 hover:border-electric/60 transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col cursor-pointer"
      >
        <div class="relative h-48 bg-carbon overflow-hidden border-b border-slate-100">
          <div class="w-full h-full group-hover:scale-[1.04] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            ${renderArtwork(proj.artworkType)}
          </div>
          <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-carbon/85 text-iceblue border border-white/15 backdrop-blur-sm">
            ${proj.badgeCategory[currentLang]}
          </span>
          <span class="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-carbon shadow-sm">
            ${proj.year}
          </span>
        </div>

        <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs font-semibold text-sapphire mb-1">${proj.role[currentLang]}</div>
            <h3 class="text-lg font-bold text-carbon group-hover:text-sapphire transition-colors duration-250 leading-snug">
              ${proj.title}
            </h3>
            <p class="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
              ${proj.shortDesc[currentLang]}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-slate-100">
            <div class="flex flex-wrap gap-1.5 mb-3.5">
              ${proj.tools
                .slice(0, 3)
                .map(
                  (tool) =>
                    `<span class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-alabaster text-slate-700 border border-hairline">${tool}</span>`
                )
                .join('')}
            </div>
            <div class="inline-flex items-center gap-1.5 text-xs font-bold text-sapphire group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
              <span>${currentLang === 'th' ? 'ดูรายละเอียด Case Study' : 'Inspect Case Study'}</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function openCaseStudy(projectId) {
  const proj = (PORTFOLIO_DATA.projects || []).find((p) => p.id === projectId);
  if (!proj) return;

  document.getElementById('caseModalPeriod').textContent = `${proj.year} • ${proj.role[currentLang]}`;
  document.getElementById('caseModalTitle').textContent = proj.title;

  const linksHtml = proj.links
    .map(
      (lnk) => `
      <a
        href="${lnk.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold ${
          lnk.primary
            ? 'bg-sapphire hover:bg-electric text-white shadow-cobaltGlow'
            : 'bg-alabaster hover:bg-slate-200 text-carbon border border-hairline'
        }"
      >
        <span>${lnk.label[currentLang]}</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    `
    )
    .join('');

  const highlightsHtml = proj.highlights[currentLang]
    .map(
      (pt) => `
      <li class="flex items-start gap-2.5 text-sm text-slate-700">
        <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sapphire shrink-0"></span>
        <span>${pt}</span>
      </li>
    `
    )
    .join('');

  document.getElementById('caseModalBody').innerHTML = `
    <div class="rounded-[20px] overflow-hidden border border-hairline bg-carbon">
      ${renderArtwork(proj.artworkType)}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="rounded-[20px] bg-alabaster border border-hairline p-4">
        <h4 class="text-xs font-bold uppercase tracking-wider text-sapphire mb-1.5">
          ${currentLang === 'th' ? 'โจทย์และความท้าทาย' : 'Problem & Context'}
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">${proj.problem[currentLang]}</p>
      </div>

      <div class="rounded-[20px] bg-alabaster border border-hairline p-4">
        <h4 class="text-xs font-bold uppercase tracking-wider text-cobalt mb-1.5">
          ${currentLang === 'th' ? 'แนวทางการออกแบบและระบบ' : 'Design & Technical Solution'}
        </h4>
        <p class="text-sm text-slate-700 leading-relaxed">${proj.solution[currentLang]}</p>
      </div>
    </div>

    <div>
      <h4 class="text-xs font-bold uppercase tracking-wider text-carbon mb-2.5">
        ${currentLang === 'th' ? 'จุดเด่นของผลงาน' : 'Key Highlights'}
      </h4>
      <ul class="space-y-2">${highlightsHtml}</ul>
    </div>

    <div>
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
        ${currentLang === 'th' ? 'เครื่องมือและเทคโนโลยี' : 'Tools & Technologies'}
      </h4>
      <div class="flex flex-wrap gap-2">
        ${proj.tools
          .map(
            (t) =>
              `<span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-alabaster text-slate-800 border border-hairline">${t}</span>`
          )
          .join('')}
      </div>
    </div>

    <div class="pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap gap-2.5">${linksHtml}</div>
      <button
        type="button"
        onclick="closeModal('caseStudyModal')"
        class="tactile-btn px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer"
      >
        ${currentLang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
      </button>
    </div>
  `;

  openModal('caseStudyModal');
}

function openResumeModal() {
  openModal('resumeModal');
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function handleBackdropClick(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  const openIcon = document.getElementById('menuIconOpen');
  const closeIcon = document.getElementById('menuIconClose');
  const isHidden = menu.classList.contains('hidden');

  menu.classList.toggle('hidden');
  openIcon.classList.toggle('hidden', isHidden);
  closeIcon.classList.toggle('hidden', !isHidden);
  btn.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('mobileMenuBtn');
  const openIcon = document.getElementById('menuIconOpen');
  const closeIcon = document.getElementById('menuIconClose');

  menu.classList.add('hidden');
  openIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  btn.setAttribute('aria-expanded', 'false');
}

let toastTimer = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  toastMsg.textContent = message;

  toast.classList.remove('translate-y-20', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 2600);
}

function copyText(value, successMsg) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).catch(() => fallbackCopy(value));
    } else {
      fallbackCopy(value);
    }
  } catch (err) {
    fallbackCopy(value);
  }
  showToast(successMsg);
}

function fallbackCopy(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
  } catch (e) {
    // Ignore fallback errors in restricted contexts
  }
  document.body.removeChild(tempInput);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const feedback = document.getElementById('formFeedback');

  feedback.textContent =
    currentLang === 'th'
      ? `ขอบคุณคุณ ${name} ข้อความถูกเตรียมเรียบร้อยแล้ว สามารถส่งอีเมลตรงได้ที่ natnaree.yuttachit1@gmail.com ค่ะ`
      : `Thank you, ${name}! Your message has been recorded in this preview. You can also reach out directly at natnaree.yuttachit1@gmail.com.`;
  feedback.classList.remove('hidden');
  event.target.reset();
  showToast(currentLang === 'th' ? 'บันทึกข้อความเรียบร้อยแล้ว' : 'Message prepared');
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced || !('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => observer.observe(el));
}

function initAmbientSpotlight() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  window.addEventListener(
    'pointermove',
    (e) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    },
    { passive: true }
  );
}

function initFluidScrollFeel() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progressBar = document.getElementById('scrollProgress');
  const parallaxNodes = document.querySelectorAll('[data-parallax]');

  if (prefersReduced) {
    if (progressBar) progressBar.style.transform = 'scaleX(0)';
    return;
  }

  let ticking = false;
  function updateOnScroll() {
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) {
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      progressBar.style.transform = `scaleX(${ratio})`;
    }

    parallaxNodes.forEach((node) => {
      const speed = parseFloat(node.getAttribute('data-parallax') || '0');
      const offset = Math.round(scrollTop * speed);
      node.style.setProperty('--parallax-y', `${offset}px`);
      node.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOnScroll);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateOnScroll();
}

async function initPortfolio() {
  document.getElementById('yearSpan').textContent = new Date().getFullYear();
  initScrollReveal();
  initAmbientSpotlight();
  initFluidScrollFeel();

  try {
    const res = await fetch('data/portfolio-data.json');
    if (res.ok) {
      PORTFOLIO_DATA = await res.json();
    }
  } catch (err) {
    const inlineEl = document.getElementById('inlinePortfolioData');
    if (inlineEl && inlineEl.textContent) {
      PORTFOLIO_DATA = JSON.parse(inlineEl.textContent);
    }
  }

  applyLanguage();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal('caseStudyModal');
    closeModal('resumeModal');
    closeMobileMenu();
  }
});

initPortfolio();
