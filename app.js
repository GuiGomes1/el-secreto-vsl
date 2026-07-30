/* ==========================================================================
   El Secreto Femenino - Exact Husky App Engine & Card Renderer
   ========================================================================== */

const COURSES_DATA = [
  // 1. BIENVENIDO FIRST (1 video)
  {
    id: "welcome_app",
    title: "BIENVENIDO",
    neonText: "BIENVENIDO",
    category: "main",
    type: "video",
    description: "Boas-vindas oficiais e introdução sobre como aproveitar ao máximo a plataforma.",
    lessons: [
      { id: "wel_1", title: "Vídeo de Boas-Vindas Oficial", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BIENVENIDO_do_App__BIENVENIDO.mp4" }
    ]
  },
  // 2. REVELANDO EL PLACER (8 videos)
  {
    id: "revelando_placer",
    title: "REVELANDO EL PLACER",
    neonText: "REVELANDO EL PLACER FEMENINO",
    category: "main",
    type: "video",
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
    title: "DE LA TEORÍA AL TOQUE",
    neonText: "DE LA TEORÍA AL TOQUE",
    category: "main",
    type: "video",
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
    title: "EL REY",
    neonText: "EL REY CÓDIGO DEL SEXO ANAL",
    category: "bonus",
    type: "video",
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
    title: "CIERRE",
    neonText: "CIERRE",
    category: "bonus",
    type: "video",
    description: "Técnicas de encerramento para garantir atração duradoura.",
    lessons: [
      { id: "cie_1", title: "Clase 1 - O Toque Final", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_1.mp4" },
      { id: "cie_2", title: "Clase 2 - Âncora Emocional", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_2.mp4" }
    ]
  },
  // 6. BONIFICACIÓN EXCLUSIVA (1 video)
  {
    id: "bono_exclusivo",
    title: "BONIFICACIÓN EXCLUSIVA",
    neonText: "BONIFICACIÓN EXCLUSIVA",
    category: "bonus",
    type: "video",
    description: "Conteúdo bônus exclusivo para membros.",
    lessons: [
      { id: "bono_1", title: "Aula Bônus Exclusiva", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BONO__BONIFICACION_EXCLUSIVA.mp4" }
    ]
  },
  // 7. LA FORMULA DEL CLIMA IDEAL (4 PDFs)
  {
    id: "clima_ideal",
    title: "LA FÓRMULA DEL CLIMA IDEAL",
    neonText: "LA FÓRMULA DEL CLIMA IDEAL",
    category: "pdf",
    type: "pdf",
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
    title: "EL RITUAL SECRETO",
    neonText: "EL RITUAL SECRETO",
    category: "pdf",
    type: "pdf",
    description: "Técnicas energéticas e de sintonia para atração magnética.",
    lessons: [
      { id: "rit_1", title: "El Ritual de la Energía y la Sintonía", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__El-Ritual-de-la-Energia-y-la-Sintonia.pdf" },
      { id: "rit_2", title: "Los Cuatro Elementos del Deseo", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__Los-Cuatro-Elementos-del-Deseo.pdf" }
    ]
  },
  // 9. MANUALES & EBOOKS (3 PDFs)
  {
    id: "ebooks_pack",
    title: "E-BOOKS",
    neonText: "E-BOOKS",
    category: "pdf",
    type: "pdf",
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
    title: "PERFORMANCE MÁXIMO",
    neonText: "PERFORMANCE MÁXIMO",
    category: "pdf",
    type: "pdf",
    description: "Manual de Alta Performance Sexual Masculina.",
    lessons: [
      { id: "perf_1", title: "Guia Upsell 3 - Performance Máxima", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/PERFORMANCE_MAXIMO__Upsell_3-_Performance_Maxima.pdf" }
    ]
  }
];

let activeCategory = 'all';
let currentCourse = null;
let currentLesson = null;

document.addEventListener('DOMContentLoaded', () => {
  renderModulesGrid();
  setupSearch();
});

// Render 1:1 Husky App Modules Grid
function renderModulesGrid(searchQuery = '') {
  const grid = document.getElementById('modulesGrid');
  if (!grid) return;

  grid.innerHTML = '';
  const q = searchQuery.toLowerCase().trim();

  COURSES_DATA.forEach(course => {
    // Filter Category
    if (activeCategory !== 'all' && course.category !== activeCategory) {
      return;
    }

    // Filter Search
    if (q !== '') {
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchNeon = course.neonText.toLowerCase().includes(q);
      if (!matchTitle && !matchNeon) return;
    }

    const card = document.createElement('div');
    card.className = 'husky-card';
    card.onclick = () => openNetflixModal(course, 0);

    card.innerHTML = `
      <div class="husky-card-poster">
        <div class="husky-poster-content">
          <div class="husky-script-title">El Secreto Femenino</div>
          <div class="husky-neon-title">${course.neonText}</div>
        </div>
      </div>
      <div class="husky-card-footer">
        <div class="husky-footer-title">${course.title}</div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterCategory(cat, tabElem) {
  activeCategory = cat;
  if (tabElem) {
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tabElem.classList.add('active');
  }
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  renderModulesGrid();
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
        <a href="${encodeURI(lesson.src)}" download class="btn-speed active" style="margin-top: 16px; text-decoration: none; display: inline-flex; padding: 10px 20px; font-size: 0.95rem;">
          <i class="fa-solid fa-download" style="margin-right: 8px;"></i> Baixar Arquivo PDF
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
        <i class="fa-solid ${lesson.type === 'video' ? 'fa-play' : 'fa-file-pdf'}" style="color: ${isCurrent ? 'var(--husky-neon-pink)' : '#aaa'}; font-size: 1.1rem;"></i>
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
      renderModulesGrid(e.target.value);
    });
  }
}
