/* ==========================================================================
   El Secreto - Native Members Web App Logic
   ========================================================================== */

// Catalogue Data Structure
const COURSES_DATA = [
  {
    id: "revelando_placer",
    title: "Revelando El Placer Femenino",
    category: "main",
    type: "video",
    icon: "🔥",
    badge: "Curso Principal",
    bgGradient: "linear-gradient(135deg, #4a000d 0%, #150005 100%)",
    description: "Dominando os segredos do prazer com técnicas passo a passo de toque e conexão.",
    lessons: [
      { id: "rev_0", title: "Bienvenido a Revelando El Placer", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/BIENVENIDO.mp4" },
      { id: "rev_1", title: "Clase 1 - O Início da Conexão", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_1.mp4" },
      { id: "rev_2", title: "Clase 2 - Mapeando a Sensibilidade", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_2.mp4" },
      { id: "rev_3", title: "Clase 3 - Técnicas de Toque Avançadas", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_3.mp4" },
      { id: "rev_4", title: "Clase 4 - Ritmo e Intensidade", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_4.mp4" },
      { id: "rev_5", title: "Clase 5 - Aceleração do Clímax", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_5.mp4" },
      { id: "rev_6", title: "Clase 6 - Liberando Bloqueios", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_6.mp4" },
      { id: "rev_7", title: "Clase 7 - O Segredo Final", type: "video", src: "VSLs_El_Secreto/REVELANDO_EL_PLACER/CLASE_7.mp4" }
    ]
  },
  {
    id: "teoria_ao_toque",
    title: "De La Teoría Al Toque",
    category: "main",
    type: "video",
    icon: "✨",
    badge: "Módulo Avançado",
    bgGradient: "linear-gradient(135deg, #2d0b3f 0%, #0d0014 100%)",
    description: "Colocando a teoria na prática com demonstrações detalhadas e passo a passo.",
    lessons: [
      { id: "tt_3", title: "Clase 3 - Preparação Prática", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_3.mp4" },
      { id: "tt_4", title: "Clase 4 - Sequência de Toques", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_4.mp4" },
      { id: "tt_5", title: "Clase 5 - Sensibilização Corporal", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_5.mp4" },
      { id: "tt_6", title: "Clase 6 - Controle do Ritmo", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_6.mp4" },
      { id: "tt_7", title: "Clase 7 - Pontos de Pressão", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_7.mp4" },
      { id: "tt_8", title: "Clase 8 - Construção da Tensão", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_8.mp4" },
      { id: "tt_9", title: "Clase 9 - Técnica de Liberação", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_9.mp4" },
      { id: "tt_10", title: "Clase 10 - Orgasmo Multi-Nível", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_10.mp4" },
      { id: "tt_11", title: "Clase 11 - Masterclass de Integração", type: "video", src: "VSLs_El_Secreto/DE_LA_TEORIA_AL_TOQUE/CLASE_11.mp4" }
    ]
  },
  {
    id: "el_rey",
    title: "El Rey - Código del Sexo Anal",
    category: "bonus",
    type: "video",
    icon: "👑",
    badge: "VIP Masterclass",
    bgGradient: "linear-gradient(135deg, #3d2b00 0%, #120c00 100%)",
    description: "O guia completo sem dor e com máximo prazer para ambos.",
    lessons: [
      { id: "rey_1", title: "Clase 1 - O Código Inicial", type: "video", src: "VSLs_El_Secreto/EL_REY/Clase_1_-_Código_del_Sexo_Anal.mp4" },
      { id: "rey_2", title: "Clase 2 - Relaxamento & Conforto", type: "video", src: "VSLs_El_Secreto/EL_REY/Clase_2_-_Código_del_Sexo_Anal.mp4" },
      { id: "rey_3", title: "Clase 3 - Técnicas de Penetração", type: "video", src: "VSLs_El_Secreto/EL_REY/Clase_3_-_Código_del_Sexo_Anal.mp4" },
      { id: "rey_pdf", title: "Guia PDF - Cómo Dar Placer a la Mujer", type: "pdf", src: "VSLs_El_Secreto/EL_REY/Como_Dar_Placer_en_el_Sexo_Anal.pdf" }
    ]
  },
  {
    id: "clima_ideal",
    title: "La Fórmula del Clima Ideal",
    category: "pdf",
    type: "pdf",
    icon: "🍷",
    badge: "E-Book Pack",
    bgGradient: "linear-gradient(135deg, #102a45 0%, #030d17 100%)",
    description: "4 Guias práticos para criar o ambiente e o clima perfeito antes do ato.",
    lessons: [
      { id: "clima_1", title: "Ambiente Perfecto - Deseo Perfecto", type: "pdf", src: "VSLs_El_Secreto/La_Formula_del_Clima_Ideal/Ambiente-Perfecto-Deseo-Perfecto.pdf" },
      { id: "clima_2", title: "El Juego de las Sensaciones", type: "pdf", src: "VSLs_El_Secreto/La_Formula_del_Clima_Ideal/El-Juego-de-las-Sensaciones.pdf" },
      { id: "clima_3", title: "El Poder del Contacto Inicial", type: "pdf", src: "VSLs_El_Secreto/La_Formula_del_Clima_Ideal/El-Poder-del-Contacto-Inicial.pdf" },
      { id: "clima_4", title: "El Arte del Precalentamiento Emocional", type: "pdf", src: "VSLs_El_Secreto/La_Formula_del_Clima_Ideal/El-Arte-del-Precalentamiento-Emocional.pdf" }
    ]
  },
  {
    id: "ritual_secreto",
    title: "El Ritual Secreto",
    category: "pdf",
    type: "pdf",
    icon: "🔮",
    badge: "E-Book Pack",
    bgGradient: "linear-gradient(135deg, #2d0047 0%, #0c0014 100%)",
    description: "Técnicas energéticas e de sintonia para criar atração magnética.",
    lessons: [
      { id: "rit_1", title: "El Ritual de la Energía y la Sintonía", type: "pdf", src: "VSLs_El_Secreto/El_Ritual_Secreto/El-Ritual-de-la-Energia-y-la-Sintonia.pdf" },
      { id: "rit_2", title: "Los Cuatro Elementos del Deseo", type: "pdf", src: "VSLs_El_Secreto/El_Ritual_Secreto/Los-Cuatro-Elementos-del-Deseo.pdf" }
    ]
  },
  {
    id: "ebooks_pack",
    title: "Manuales & Guías Exclusivas",
    category: "pdf",
    type: "pdf",
    icon: "📖",
    badge: "Biblioteca",
    bgGradient: "linear-gradient(135deg, #00362b 0%, #00120e 100%)",
    description: "Biblioteca essencial com manuais de orgasmo, chá do desejo e técnicas de controle.",
    lessons: [
      { id: "eb_1", title: "Té Del Deseo Infinito", type: "pdf", src: "VSLs_El_Secreto/E-BOOKS/Te Del Deseo Infinito.pdf" },
      { id: "eb_2", title: "Mapa del Orgasmo Femenino", type: "pdf", src: "VSLs_El_Secreto/E-BOOKS/Mapa del Orgasmo.pdf" },
      { id: "eb_3", title: "Manual Anti-Eyaculación Precoz", type: "pdf", src: "VSLs_El_Secreto/E-BOOKS/Manual AntiEyaculaciÃ³n.pdf" }
    ]
  },
  {
    id: "cierre",
    title: "Cierre - O Arremate Final",
    category: "bonus",
    type: "video",
    icon: "🔒",
    badge: "Módulo Especial",
    bgGradient: "linear-gradient(135deg, #42031a 0%, #140007 100%)",
    description: "Técnicas de encerramento para garantir que ela fique viciada na sua presença.",
    lessons: [
      { id: "cie_1", title: "Clase 1 - O Toque Final", type: "video", src: "VSLs_El_Secreto/CIERRE/CLASE_1.mp4" },
      { id: "cie_2", title: "Clase 2 - Âncora Emocional", type: "video", src: "VSLs_El_Secreto/CIERRE/CLASE_2.mp4" }
    ]
  },
  {
    id: "bono_exclusivo",
    title: "Bonificación Exclusiva",
    category: "bonus",
    type: "video",
    icon: "🎁",
    badge: "Bônus",
    bgGradient: "linear-gradient(135deg, #4d3300 0%, #1a1100 100%)",
    description: "Conteúdo bônus exclusivo para membros.",
    lessons: [
      { id: "bono_1", title: "Aula Bônus Exclusiva", type: "video", src: "VSLs_El_Secreto/BONO/BONIFICACIÓN_EXCLUSIVA.mp4" }
    ]
  },
  {
    id: "combo_secreto",
    title: "Combo Secreto (Tienda Online)",
    category: "bonus",
    type: "video",
    icon: "🛍️",
    badge: "Bônus Especial",
    bgGradient: "linear-gradient(135deg, #1b0042 0%, #090017 100%)",
    description: "Vídeo completo do Combo Secreto.",
    lessons: [
      { id: "combo_1", title: "Tienda Online - Guia de Produtos & Uso", type: "video", src: "VSLs_El_Secreto/COMBO_SECRETO/TIENDA_ONLINE.mp4" }
    ]
  },
  {
    id: "performance_max",
    title: "Performance Máximo",
    category: "pdf",
    type: "pdf",
    icon: "⚡",
    badge: "Upsell 3",
    bgGradient: "linear-gradient(135deg, #3d0000 0%, #140000 100%)",
    description: "Manual de Alta Performance Sexual Masculina.",
    lessons: [
      { id: "perf_1", title: "Guia Upsell 3 - Performance Máxima", type: "pdf", src: "VSLs_El_Secreto/PERFORMANCE_MAXIMO/Upsell 3- Performance Maxima.pdf" }
    ]
  },
  {
    id: "welcome_app",
    title: "Bienvenido a El Secreto",
    category: "main",
    type: "video",
    icon: "👋",
    badge: "Introdução",
    bgGradient: "linear-gradient(135deg, #1c1c24 0%, #08080a 100%)",
    description: "Boas-vindas oficiais e introdução sobre como aproveitar a plataforma.",
    lessons: [
      { id: "wel_1", title: "Vídeo de Boas-Vindas Oficial", type: "video", src: "VSLs_El_Secreto/BIENVENIDO_do_App/BIENVENIDO.mp4" }
    ]
  }
];

// App State Management
let completedLessons = JSON.parse(localStorage.getItem('el_secreto_completed') || '{}');
let activeFilter = 'all';
let currentCourse = null;
let currentLesson = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
  updateProgress();
  setupEvents();
});

// Calculate total lessons
function getTotalLessonsCount() {
  return COURSES_DATA.reduce((acc, course) => acc + course.lessons.length, 0);
}

function getCompletedLessonsCount() {
  return Object.keys(completedLessons).filter(k => completedLessons[k]).length;
}

// Update overall progress bar
function updateProgress() {
  const total = getTotalLessonsCount();
  const completed = getCompletedLessonsCount();
  const percentage = Math.round((completed / total) * 100) || 0;
  
  const fill = document.getElementById('progressFill');
  const text = document.getElementById('progressText');
  
  if (fill) fill.style.width = `${percentage}%`;
  if (text) text.innerText = `${completed} de ${total} concluídas (${percentage}%)`;
}

// Render Courses Grid
function renderCourses(searchQuery = '') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = COURSES_DATA.filter(course => {
    // Category Filter
    if (activeFilter !== 'all') {
      if (activeFilter === 'video' && course.type !== 'video') return false;
      if (activeFilter === 'pdf' && course.type !== 'pdf') return false;
      if (activeFilter === 'main' && course.category !== 'main') return false;
      if (activeFilter === 'bonus' && course.category !== 'bonus') return false;
    }
    // Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = course.title.toLowerCase().includes(q);
      const matchDesc = course.description.toLowerCase().includes(q);
      const matchLesson = course.lessons.some(l => l.title.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchLesson;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
        <p>Nenhum curso ou conteúdo encontrado.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(course => {
    const completedCount = course.lessons.filter(l => completedLessons[l.id]).length;
    const isFinished = completedCount === course.lessons.length && course.lessons.length > 0;
    
    const card = document.createElement('div');
    card.className = 'course-card';
    card.onclick = () => openCourseModal(course);

    card.innerHTML = `
      <div class="card-banner" style="background: ${course.bgGradient}">
        <div class="card-type-badge">${course.badge}</div>
        <div class="card-banner-content">
          <div class="card-banner-icon">${course.icon}</div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${course.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 10px; flex: 1;">
          ${course.description}
        </p>
        <div class="card-meta">
          <span><i class="fa-solid ${course.type === 'video' ? 'fa-play-circle' : 'fa-file-pdf'}"></i> ${course.lessons.length} ${course.type === 'video' ? 'aulas' : 'arquivos'}</span>
          <span><i class="fa-solid fa-check-circle" style="color: ${completedCount > 0 ? '#22c55e' : 'inherit'}"></i> ${completedCount}/${course.lessons.length}</span>
        </div>
        <button class="card-footer-btn">
          <span>${isFinished ? 'Reassistir' : 'Acessar Conteúdo'}</span>
          <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Setup Event Listeners
function setupEvents() {
  // Filter tabs
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.getAttribute('data-filter');
      renderCourses(document.getElementById('searchInput')?.value || '');
    });
  });

  // Search Bar
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderCourses(e.target.value);
    });
  }
}

// Open Modal for a Specific Course
function openCourseModal(course, initialLessonIndex = 0) {
  currentCourse = course;
  currentLesson = course.lessons[initialLessonIndex];
  
  const overlay = document.getElementById('courseModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  
  if (modalTitle) modalTitle.innerText = course.title;
  if (modalBadge) modalBadge.innerText = `${course.badge} • ${course.lessons.length} item(s)`;

  renderModalPlayer(currentLesson);
  renderModalLessonsList();

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
  const overlay = document.getElementById('courseModal');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Pause video if playing
  const video = document.getElementById('mainVideoPlayer');
  if (video) {
    video.pause();
  }
}

// Render Video / PDF Player inside Modal
function renderModalPlayer(lesson) {
  currentLesson = lesson;
  const playerBox = document.getElementById('playerBox');
  if (!playerBox) return;

  if (lesson.type === 'video') {
    playerBox.innerHTML = `
      <div class="player-wrapper">
        <video id="mainVideoPlayer" class="native-video-player" controls playsinline preload="metadata">
          <source src="${encodeURI(lesson.src)}" type="video/mp4">
          Seu navegador não suporta reprodução de vídeo nativo.
        </video>
        <div class="video-extras-bar">
          <span style="font-weight: 600; color: #fff;">⚡ Velocidade de Reprodução:</span>
          <div class="speed-controls">
            <button class="speed-btn active" onclick="setSpeed(1, this)">1.0x</button>
            <button class="speed-btn" onclick="setSpeed(1.25, this)">1.25x</button>
            <button class="speed-btn" onclick="setSpeed(1.5, this)">1.5x</button>
            <button class="speed-btn" onclick="setSpeed(2, this)">2.0x</button>
            <button class="speed-btn" onclick="setSpeed(3, this)">3.0x</button>
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <h3 style="font-size: 1.1rem; color: #fff;">${lesson.title}</h3>
        <button id="toggleCheckBtn" class="pdf-download-btn" style="background: ${completedLessons[lesson.id] ? '#22c55e' : 'var(--bg-surface)'}; color: ${completedLessons[lesson.id] ? '#fff' : 'var(--text-primary)'}; border: 1px solid var(--border-color);" onclick="toggleComplete('${lesson.id}')">
          <i class="fa-solid ${completedLessons[lesson.id] ? 'fa-check-circle' : 'fa-circle'}"></i>
          <span>${completedLessons[lesson.id] ? 'Concluída' : 'Marcar como Concluída'}</span>
        </button>
      </div>
    `;

    // Add auto-completion on video end
    setTimeout(() => {
      const v = document.getElementById('mainVideoPlayer');
      if (v) {
        v.onended = () => {
          markComplete(lesson.id, true);
        };
      }
    }, 200);

  } else if (lesson.type === 'pdf') {
    playerBox.innerHTML = `
      <div class="player-wrapper" style="background: var(--bg-card); padding: 16px; text-align: center;">
        <iframe src="${encodeURI(lesson.src)}" class="pdf-container"></iframe>
        <div style="margin-top: 14px; display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap;">
          <a href="${encodeURI(lesson.src)}" download class="pdf-download-btn">
            <i class="fa-solid fa-download"></i>
            <span>Baixar Arquivo PDF</span>
          </a>
          <button class="pdf-download-btn" style="background: ${completedLessons[lesson.id] ? '#22c55e' : 'var(--bg-surface)'}; color: ${completedLessons[lesson.id] ? '#fff' : 'var(--text-primary)'}; border: 1px solid var(--border-color);" onclick="toggleComplete('${lesson.id}')">
            <i class="fa-solid ${completedLessons[lesson.id] ? 'fa-check-circle' : 'fa-circle'}"></i>
            <span>${completedLessons[lesson.id] ? 'Concluído' : 'Marcar como Lido'}</span>
          </button>
        </div>
      </div>
      <h3 style="font-size: 1.1rem; color: #fff; margin-bottom: 16px;">${lesson.title}</h3>
    `;
  }
}

// Render Lessons List in Modal
function renderModalLessonsList() {
  const container = document.getElementById('modalLessonsList');
  if (!container || !currentCourse) return;

  container.innerHTML = '';
  currentCourse.lessons.forEach((lesson, index) => {
    const isCurrent = currentLesson && currentLesson.id === lesson.id;
    const isDone = completedLessons[lesson.id];

    const item = document.createElement('div');
    item.className = `lesson-item ${isCurrent ? 'active' : ''}`;
    item.onclick = () => {
      renderModalPlayer(lesson);
      renderModalLessonsList();
    };

    item.innerHTML = `
      <div class="lesson-left">
        <div class="lesson-icon">
          <i class="fa-solid ${lesson.type === 'video' ? 'fa-play' : 'fa-file-pdf'}"></i>
        </div>
        <div class="lesson-info">
          <h4>${lesson.title}</h4>
          <p>${lesson.type === 'video' ? 'Vídeo Aula Nativa' : 'Documento PDF'}</p>
        </div>
      </div>
      <div class="completed-check ${isDone ? 'checked' : ''}">
        <i class="fa-solid fa-check"></i>
      </div>
    `;

    container.appendChild(item);
  });
}

// Set Playback Speed for Video
function setSpeed(speed, btn) {
  const video = document.getElementById('mainVideoPlayer');
  if (video) {
    video.playbackRate = speed;
  }
  const buttons = document.querySelectorAll('.speed-btn');
  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

// Toggle Lesson Complete Status
function toggleComplete(lessonId) {
  completedLessons[lessonId] = !completedLessons[lessonId];
  localStorage.setItem('el_secreto_completed', JSON.stringify(completedLessons));
  updateProgress();
  renderCourses(document.getElementById('searchInput')?.value || '');
  if (currentCourse) renderModalLessonsList();
  if (currentLesson) renderModalPlayer(currentLesson);
}

function markComplete(lessonId, state) {
  completedLessons[lessonId] = state;
  localStorage.setItem('el_secreto_completed', JSON.stringify(completedLessons));
  updateProgress();
  renderCourses(document.getElementById('searchInput')?.value || '');
  if (currentCourse) renderModalLessonsList();
  if (currentLesson) renderModalPlayer(currentLesson);
}
