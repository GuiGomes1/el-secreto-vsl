/* ==========================================================================
   El Secreto - Authentic Original Husky App Covers Engine
   ========================================================================== */

const COURSES_DATA = [
  // 1. BIENVENIDO FIRST (1 video)
  {
    id: "welcome_app",
    title: "Bienvenido a El Secreto",
    category: "main",
    type: "video",
    icon: "fa-play-circle",
    badge: "COMEÇAR POR AQUI",
    progressPct: 85,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__b506a207-c24d-4247-90a5-0c8762aefaa0.png",
    description: "Boas-vindas oficiais e introdução sobre como aproveitar ao máximo a plataforma.",
    lessons: [
      { id: "wel_1", title: "Vídeo de Boas-Vindas Oficial", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BIENVENIDO_do_App__BIENVENIDO.mp4" }
    ]
  },
  // 2. REVELANDO EL PLACER (8 videos)
  {
    id: "revelando_placer",
    title: "Revelando El Placer Femenino",
    category: "main",
    type: "video",
    icon: "fa-fire",
    badge: "MÓDULO PRINCIPAL",
    progressPct: 40,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__fe8179ce-9c76-4c7f-8c2c-86fa20767d3b.png",
    description: "Dominando os segredos do prazer com técnicas passo a passo de toque e conexão.",
    lessons: [
      { id: "rev_0", title: "Bienvenido a Revelando El Placer", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__BIENVENIDO.mp4" },
      { id: "rev_1", title: "Clase 1 - O Início da Conexão", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_1.mp4" },
      { id: "rev_2", title: "Clase 2 - Mapeando a Sensibilidade", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_2.mp4" },
      { id: "rev_3", title: "Clase 3 - Técnicas de Toque Avançadas", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_3.mp4" },
      { id: "rev_4", title: "Clase 4 - Ritmo e Intensidade", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_4.mp4" },
      { id: "rev_5", title: "Clase 5 - Aceleração do Clímax", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_5.mp4" },
      { id: "rev_6", title: "Clase 6 - Liberando Bloqueios", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_6.mp4" },
      { id: "rev_7", title: "Clase 7 - O Segredo Final", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/REVELANDO_EL_PLACER__CLASE_7.mp4" }
    ]
  },
  // 3. DE LA TEORIA AL TOQUE (9 videos)
  {
    id: "teoria_ao_toque",
    title: "De La Teoría Al Toque",
    category: "main",
    type: "video",
    icon: "fa-wand-magic-sparkles",
    badge: "MÓDULO AVANÇADO",
    progressPct: 15,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__4e7d894a-f2e1-4bd1-b2bf-d4c8e1ff7442.png",
    description: "Colocando a teoria na prática com demonstrações detalhadas e passo a passo.",
    lessons: [
      { id: "tt_3", title: "Clase 3 - Preparação Prática", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_3.mp4" },
      { id: "tt_4", title: "Clase 4 - Sequência de Toques", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_4.mp4" },
      { id: "tt_5", title: "Clase 5 - Sensibilização Corporal", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_5.mp4" },
      { id: "tt_6", title: "Clase 6 - Controle do Ritmo", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_6.mp4" },
      { id: "tt_7", title: "Clase 7 - Pontos de Pressão", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_7.mp4" },
      { id: "tt_8", title: "Clase 8 - Construção da Tensão", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_8.mp4" },
      { id: "tt_9", title: "Clase 9 - Técnica de Liberação", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_9.mp4" },
      { id: "tt_10", title: "Clase 10 - Orgasmo Multi-Nível", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_10.mp4" },
      { id: "tt_11", title: "Clase 11 - Masterclass de Integração", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/DE_LA_TEORIA_AL_TOQUE__CLASE_11.mp4" }
    ]
  },
  // 4. EL REY (3 videos + 1 PDF)
  {
    id: "el_rey",
    title: "El Rey - Código del Sexo Anal",
    category: "bonus",
    type: "video",
    icon: "fa-crown",
    badge: "EL REY VIP",
    progressPct: 60,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__bf20fb02-75a4-4387-8d61-2aadd75add8d.png",
    description: "O guia completo sem dor e com máximo prazer para ambos.",
    lessons: [
      { id: "rey_1", title: "Clase 1 - O Código Inicial", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_1_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_2", title: "Clase 2 - Relaxamento & Conforto", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_2_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_3", title: "Clase 3 - Técnicas de Penetração", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_3_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_pdf", title: "Guia PDF - Cómo Dar Placer a la Mujer", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Como_Dar_Placer_en_el_Sexo_Anal.pdf" }
    ]
  },
  // 5. CIERRE (2 videos)
  {
    id: "cierre",
    title: "Cierre - O Arremate Final",
    category: "bonus",
    type: "video",
    icon: "fa-lock",
    badge: "CIERRE VIP",
    progressPct: 0,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__1b93c927-1f4f-4cc3-bbaf-4656da1e3872.png",
    description: "Técnicas de encerramento para garantir atração duradoura.",
    lessons: [
      { id: "cie_1", title: "Clase 1 - O Toque Final", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_1.mp4" },
      { id: "cie_2", title: "Clase 2 - Âncora Emocional", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_2.mp4" }
    ]
  },
  // 6. BONO EXCLUSIVO (1 video)
  {
    id: "bono_exclusivo",
    title: "Bonificación Exclusiva",
    category: "bonus",
    type: "video",
    icon: "fa-gift",
    badge: "BÔNUS EXCLUSIVO",
    progressPct: 100,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__72f39b6b-308f-4bd7-b1aa-740de72f4df7.png",
    description: "Conteúdo bônus exclusivo para membros.",
    lessons: [
      { id: "bono_1", title: "Aula Bônus Exclusiva", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BONO__BONIFICACION_EXCLUSIVA.mp4" }
    ]
  },
  // 7. LA FORMULA DEL CLIMA IDEAL (4 PDFs)
  {
    id: "clima_ideal",
    title: "La Fórmula del Clima Ideal",
    category: "pdf",
    type: "pdf",
    icon: "fa-wine-glass",
    badge: "EL CLIMA IDEAL",
    progressPct: 50,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__c9e72df5-93e4-41de-831a-2f247714cc39.png",
    description: "4 Guias práticos para criar o ambiente e o clima perfeito.",
    lessons: [
      { id: "clima_1", title: "Ambiente Perfecto - Deseo Perfecto", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__Ambiente-Perfecto-Deseo-Perfecto.pdf" },
      { id: "clima_2", title: "El Juego de las Sensaciones", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Juego-de-las-Sensaciones.pdf" },
      { id: "clima_3", title: "El Poder del Contacto Inicial", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Poder-del-Contacto-Inicial.pdf" },
      { id: "clima_4", title: "El Arte del Precalentamiento Emocional", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Arte-del-Precalentamiento-Emocional.pdf" }
    ]
  },
  // 8. EL RITUAL SECRETO (2 PDFs)
  {
    id: "ritual_secreto",
    title: "El Ritual Secreto",
    category: "pdf",
    type: "pdf",
    icon: "fa-gem",
    badge: "RITUAL SECRETO",
    progressPct: 25,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__527fd86f-038b-4439-9d31-63789d065fb9.png",
    description: "Técnicas energéticas e de sintonia para atração magnética.",
    lessons: [
      { id: "rit_1", title: "El Ritual de la Energía y la Sintonía", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__El-Ritual-de-la-Energia-y-la-Sintonia.pdf" },
      { id: "rit_2", title: "Los Cuatro Elementos del Deseo", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__Los-Cuatro-Elementos-del-Deseo.pdf" }
    ]
  },
  // 9. MANUALES & EBOOKS (3 PDFs)
  {
    id: "ebooks_pack",
    title: "E-Books & Guias Exclusivos",
    category: "pdf",
    type: "pdf",
    icon: "fa-book-open",
    badge: "BIBLIOTECA VIP",
    progressPct: 70,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__66706473-1e86-4a40-81ba-6b9e33f2342a.png",
    description: "Manuais de orgasmo, chá do desejo e técnicas de controle.",
    lessons: [
      { id: "eb_1", title: "Té Del Deseo Infinito", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Te_Del_Deseo_Infinito.pdf" },
      { id: "eb_2", title: "Mapa del Orgasmo Femenino", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Mapa_del_Orgasmo.pdf" },
      { id: "eb_3", title: "Manual Anti-Eyaculación Precoz", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Manual_AntiEyaculaciA.n.pdf" }
    ]
  },
  // 10. PERFORMANCE MAXIMO (1 PDF)
  {
    id: "performance_max",
    title: "Performance Máximo",
    category: "pdf",
    type: "pdf",
    icon: "fa-bolt",
    badge: "PERFORMANCE MÁXIMO",
    progressPct: 90,
    coverImg: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/ORIGINAL_COVER__98bea0d7-e6ba-4b21-ac8c-549a16ad8e7c.png",
    description: "Manual de Alta Performance Sexual Masculina.",
    lessons: [
      { id: "perf_1", title: "Guia Upsell 3 - Performance Máxima", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/PERFORMANCE_MAXIMO__Upsell_3-_Performance_Maxima.pdf" }
    ]
  }
];

let currentCourse = null;
let currentLesson = null;

document.addEventListener('DOMContentLoaded', () => {
  renderNetflixRows();
  setupSearch();
  setupNavbarScroll();
});

// Render Rows with Authentic Husky App Cover Images
function renderNetflixRows(searchQuery = '') {
  const rowMain = document.getElementById('rowMain');
  const rowBonus = document.getElementById('rowBonus');
  const rowPdf = document.getElementById('rowPdf');

  if (rowMain) rowMain.innerHTML = '';
  if (rowBonus) rowBonus.innerHTML = '';
  if (rowPdf) rowPdf.innerHTML = '';

  const q = searchQuery.toLowerCase().trim();

  COURSES_DATA.forEach(course => {
    if (q !== '') {
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchDesc = course.description.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return;
    }

    const card = document.createElement('div');
    card.className = 'netflix-card';
    card.onclick = () => openNetflixModal(course, 0);

    card.innerHTML = `
      <div class="card-poster" style="background-image: url('${course.coverImg}')">
        <div class="card-poster-overlay"></div>
        <div class="card-top-tag">${course.badge}</div>
        <div class="card-play-icon">
          <i class="fa-solid ${course.type === 'video' ? 'fa-play' : 'fa-file-pdf'}"></i>
        </div>
        <div class="card-info">
          <h4>${course.title}</h4>
          <div class="card-info-meta">
            <span><i class="fa-solid ${course.icon}"></i> ${course.lessons.length} ${course.type === 'video' ? 'Aulas' : 'PDFs'}</span>
            <span class="card-hd-badge">HD</span>
          </div>
        </div>
        <div class="card-progress-bar-wrap">
          <div class="card-progress-bar-fill" style="width: ${course.progressPct || 0}%"></div>
        </div>
      </div>
    `;

    if (course.category === 'main' && rowMain) rowMain.appendChild(card);
    else if (course.category === 'bonus' && rowBonus) rowBonus.appendChild(card);
    else if (course.category === 'pdf' && rowPdf) rowPdf.appendChild(card);
  });
}

function openCourseById(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (course) openNetflixModal(course, 0);
}

// Open Netflix Modal Player & Autoplay
function openNetflixModal(course, lessonIndex = 0) {
  currentCourse = course;
  currentLesson = course.lessons[lessonIndex];

  const modal = document.getElementById('netflixModal');
  const title = document.getElementById('modalCourseTitle');
  const desc = document.getElementById('modalCourseDesc');

  if (title) title.innerText = course.title;
  if (desc) desc.innerText = course.description;

  renderPlayer(currentLesson);
  renderEpisodeList();

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const video = document.getElementById('netflixVideoPlayer');
    if (video) {
      video.play().catch(e => console.log("Autoplay policy requires user click:", e));
    }
  }, 150);
}

function closeNetflixModal() {
  const modal = document.getElementById('netflixModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';

  const video = document.getElementById('netflixVideoPlayer');
  if (video) video.pause();
}

// Render Video/PDF Player
function renderPlayer(lesson) {
  currentLesson = lesson;
  const area = document.getElementById('modalPlayerArea');
  if (!area) return;

  if (lesson.type === 'video') {
    area.innerHTML = `
      <video id="netflixVideoPlayer" class="netflix-player" controls autoplay playsinline>
        <source src="${encodeURI(lesson.src)}" type="video/mp4">
        Seu navegador não suporta vídeos HTML5.
      </video>
      <div class="speed-bar">
        <span style="font-weight: 700; color: #fff;">⚡ Velocidade de Reprodução:</span>
        <div class="speed-btns">
          <button class="btn-speed active" onclick="setSpeed(1, this)">1.0x</button>
          <button class="btn-speed" onclick="setSpeed(1.25, this)">1.25x</button>
          <button class="btn-speed" onclick="setSpeed(1.5, this)">1.5x</button>
          <button class="btn-speed" onclick="setSpeed(2, this)">2.0x</button>
          <button class="btn-speed" onclick="setSpeed(3, this)">3.0x</button>
        </div>
      </div>
    `;
  } else {
    area.innerHTML = `
      <div style="padding: 20px; text-align: center;">
        <iframe src="${encodeURI(lesson.src)}" style="width:100%; height:460px; border:none; border-radius:6px; background:#111;"></iframe>
        <a href="${encodeURI(lesson.src)}" download class="btn-netflix btn-netflix-primary" style="margin-top: 16px; text-decoration: none; display: inline-flex;">
          <i class="fa-solid fa-download"></i> Baixar Arquivo PDF
        </a>
      </div>
    `;
  }
}

// Render Episodes inside Modal
function renderEpisodeList() {
  const list = document.getElementById('modalEpisodeList');
  if (!list || !currentCourse) return;

  list.innerHTML = '';
  currentCourse.lessons.forEach((lesson, index) => {
    const isCurrent = currentLesson && currentLesson.id === lesson.id;
    const card = document.createElement('div');
    card.className = `episode-card ${isCurrent ? 'active' : ''}`;
    card.onclick = () => {
      renderPlayer(lesson);
      renderEpisodeList();
      setTimeout(() => {
        const v = document.getElementById('netflixVideoPlayer');
        if (v) v.play();
      }, 100);
    };

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 14px;">
        <i class="fa-solid ${lesson.type === 'video' ? 'fa-play' : 'fa-file-pdf'}" style="color: ${isCurrent ? 'var(--netflix-red)' : '#aaa'}; font-size: 1.1rem;"></i>
        <span style="font-weight: 700; font-size: 0.95rem; color: #fff;">${lesson.title}</span>
      </div>
      <span style="font-size: 0.78rem; color: #888;">${lesson.type === 'video' ? 'Vídeo HD' : 'Documento PDF'}</span>
    `;

    list.appendChild(card);
  });
}

function setSpeed(speed, btn) {
  const video = document.getElementById('netflixVideoPlayer');
  if (video) video.playbackRate = speed;
  document.querySelectorAll('.btn-speed').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function setupSearch() {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('input', (e) => {
      renderNetflixRows(e.target.value);
    });
  }
}

function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('netflixNav');
    if (nav) {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
  });
}

function filterRow(cat) {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  renderNetflixRows();
  window.scrollTo({ top: 400, behavior: 'smooth' });
}
