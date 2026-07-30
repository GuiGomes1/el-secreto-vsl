/* ==========================================================================
   El Secreto - Netflix Cinema App Engine
   ========================================================================== */

const COURSES_DATA = [
  {
    id: "revelando_placer",
    title: "Revelando El Placer Femenino",
    category: "main",
    type: "video",
    icon: "🔥",
    badge: "REVELANDO EL PLACER",
    bgGradient: "linear-gradient(135deg, #e50914 0%, #300005 100%)",
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
  {
    id: "teoria_ao_toque",
    title: "De La Teoría Al Toque",
    category: "main",
    type: "video",
    icon: "✨",
    badge: "DE LA TEORÍA AL TOQUE",
    bgGradient: "linear-gradient(135deg, #8000ff 0%, #1a0033 100%)",
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
  {
    id: "el_rey",
    title: "El Rey - Código del Sexo Anal",
    category: "bonus",
    type: "video",
    icon: "👑",
    badge: "EL REY VIP",
    bgGradient: "linear-gradient(135deg, #d4af37 0%, #3a2e00 100%)",
    description: "O guia completo sem dor e com máximo prazer para ambos.",
    lessons: [
      { id: "rey_1", title: "Clase 1 - O Código Inicial", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_1_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_2", title: "Clase 2 - Relaxamento & Conforto", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_2_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_3", title: "Clase 3 - Técnicas de Penetração", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Clase_3_-_Codigo_del_Sexo_Anal.mp4" },
      { id: "rey_pdf", title: "Guia PDF - Cómo Dar Placer a la Mujer", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/EL_REY__Como_Dar_Placer_en_el_Sexo_Anal.pdf" }
    ]
  },
  {
    id: "cierre",
    title: "Cierre - O Arremate Final",
    category: "bonus",
    type: "video",
    icon: "🔒",
    badge: "CIERRE",
    bgGradient: "linear-gradient(135deg, #ff0055 0%, #4d001a 100%)",
    description: "Técnicas de encerramento para garantir atração duradoura.",
    lessons: [
      { id: "cie_1", title: "Clase 1 - O Toque Final", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_1.mp4" },
      { id: "cie_2", title: "Clase 2 - Âncora Emocional", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/CIERRE__CLASE_2.mp4" }
    ]
  },
  {
    id: "bono_exclusivo",
    title: "Bonificación Exclusiva",
    category: "bonus",
    type: "video",
    icon: "🎁",
    badge: "BONO",
    bgGradient: "linear-gradient(135deg, #ff9900 0%, #4d2e00 100%)",
    description: "Conteúdo bônus exclusivo para membros.",
    lessons: [
      { id: "bono_1", title: "Aula Bônus Exclusiva", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BONO__BONIFICACION_EXCLUSIVA.mp4" }
    ]
  },
  {
    id: "combo_secreto",
    title: "Combo Secreto",
    category: "bonus",
    type: "video",
    icon: "🛍️",
    badge: "COMBO SECRETO",
    bgGradient: "linear-gradient(135deg, #00d2ff 0%, #003a4d 100%)",
    description: "Vídeo completo do Combo Secreto (Tienda Online).",
    lessons: [
      { id: "combo_1", title: "Tienda Online - Guia de Produtos & Uso", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/COMBO_SECRETO__TIENDA_ONLINE.mp4" }
    ]
  },
  {
    id: "welcome_app",
    title: "Bienvenido a El Secreto",
    category: "main",
    type: "video",
    icon: "👋",
    badge: "BIENVENIDO",
    bgGradient: "linear-gradient(135deg, #222222 0%, #050505 100%)",
    description: "Boas-vindas oficiais e introdução da plataforma.",
    lessons: [
      { id: "wel_1", title: "Vídeo de Boas-Vindas Oficial", type: "video", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/BIENVENIDO_do_App__BIENVENIDO.mp4" }
    ]
  },
  {
    id: "clima_ideal",
    title: "La Fórmula del Clima Ideal",
    category: "pdf",
    type: "pdf",
    icon: "🍷",
    badge: "EL CLIMA IDEAL",
    bgGradient: "linear-gradient(135deg, #0055ff 0%, #001a4d 100%)",
    description: "4 Guias práticos para criar o ambiente e o clima perfeito.",
    lessons: [
      { id: "clima_1", title: "Ambiente Perfecto - Deseo Perfecto", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__Ambiente-Perfecto-Deseo-Perfecto.pdf" },
      { id: "clima_2", title: "El Juego de las Sensaciones", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Juego-de-las-Sensaciones.pdf" },
      { id: "clima_3", title: "El Poder del Contacto Inicial", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Poder-del-Contacto-Inicial.pdf" },
      { id: "clima_4", title: "El Arte del Precalentamiento Emocional", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/La_Formula_del_Clima_Ideal__El-Arte-del-Precalentamiento-Emocional.pdf" }
    ]
  },
  {
    id: "ritual_secreto",
    title: "El Ritual Secreto",
    category: "pdf",
    type: "pdf",
    icon: "🔮",
    badge: "RITUAL SECRETO",
    bgGradient: "linear-gradient(135deg, #9900cc 0%, #330044 100%)",
    description: "Técnicas energéticas e de sintonia para atração magnética.",
    lessons: [
      { id: "rit_1", title: "El Ritual de la Energía y la Sintonía", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__El-Ritual-de-la-Energia-y-la-Sintonia.pdf" },
      { id: "rit_2", title: "Los Cuatro Elementos del Deseo", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/El_Ritual_Secreto__Los-Cuatro-Elementos-del-Deseo.pdf" }
    ]
  },
  {
    id: "ebooks_pack",
    title: "E-Books & Guias Exclusivos",
    category: "pdf",
    type: "pdf",
    icon: "📖",
    badge: "E-BOOKS",
    bgGradient: "linear-gradient(135deg, #009966 0%, #003322 100%)",
    description: "Manuais de orgasmo, chá do desejo e técnicas de controle.",
    lessons: [
      { id: "eb_1", title: "Té Del Deseo Infinito", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Te_Del_Deseo_Infinito.pdf" },
      { id: "eb_2", title: "Mapa del Orgasmo Femenino", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Mapa_del_Orgasmo.pdf" },
      { id: "eb_3", title: "Manual Anti-Eyaculación Precoz", type: "pdf", src: "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/E-BOOKS__Manual_AntiEyaculaciA.n.pdf" }
    ]
  },
  {
    id: "performance_max",
    title: "Performance Máximo",
    category: "pdf",
    type: "pdf",
    icon: "⚡",
    badge: "PERFORMANCE MÁXIMO",
    bgGradient: "linear-gradient(135deg, #cc0000 0%, #440000 100%)",
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

// Render Rows (Netflix Style)
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
    card.onclick = () => openNetflixModal(course);

    card.innerHTML = `
      <div class="card-poster" style="background: ${course.bgGradient}">
        <div class="card-poster-overlay"></div>
        <div class="card-top-tag">${course.badge}</div>
        <div class="card-play-icon">
          <i class="fa-solid ${course.type === 'video' ? 'fa-play' : 'fa-file-pdf'}"></i>
        </div>
        <div class="card-info">
          <h4>${course.title}</h4>
          <div class="card-info-meta">
            <span>${course.lessons.length} ${course.type === 'video' ? 'Aulas' : 'PDFs'}</span>
            <span style="color: #fff; font-size: 0.65rem; background: rgba(255,255,255,0.2); padding: 1px 4px; border-radius: 2px;">HD</span>
          </div>
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
  if (course) openNetflixModal(course);
}

// Open Netflix Modal Player
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
        <iframe src="${encodeURI(lesson.src)}" style="width:100%; height:450px; border:none; border-radius:6px; background:#111;"></iframe>
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
    };

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <i class="fa-solid ${lesson.type === 'video' ? 'fa-play' : 'fa-file-pdf'}" style="color: ${isCurrent ? 'var(--netflix-red)' : '#aaa'}"></i>
        <span style="font-weight: 600; font-size: 0.9rem; color: #fff;">${lesson.title}</span>
      </div>
      <span style="font-size: 0.75rem; color: #777;">${lesson.type === 'video' ? 'Vídeo' : 'PDF'}</span>
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
