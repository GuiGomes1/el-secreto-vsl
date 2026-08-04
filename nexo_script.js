// Protocolo Nexo - JavaScript Interactive Controller

const githubReleaseBase = "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/";

// Video playlist mapping
const playlist = [
    { id: "NEXO__01_Boas_Vindas__Aula_1.mp4", title: "Aula 1 - Boas-vindas e Introdução", module: "Módulo 1: Boas-vindas" },
    { id: "NEXO__02_Prazer_Feminino__Aula_1.mp4", title: "Aula 1 - Os Fundamentos do Prazer", module: "Módulo 2: Desvendando o Prazer Feminino" },
    { id: "NEXO__02_Prazer_Feminino__Aula_2.mp4", title: "Aula 2 - Zonas de Alta Sensibilidade", module: "Módulo 2: Desvendando o Prazer Feminino" },
    { id: "NEXO__02_Prazer_Feminino__Aula_3.mp4", title: "Aula 3 - Conexão Psicológica e Emocional", module: "Módulo 2: Desvendando o Prazer Feminino" },
    { id: "NEXO__02_Prazer_Feminino__Aula_4.mp4", title: "Aula 4 - Ritmo e Progressão", module: "Módulo 2: Desvendando o Prazer Feminino" },
    { id: "NEXO__03_Teoria_ao_Toque__Aula_1.mp4", title: "Aula 1 - Técnicas de Toque Inicial", module: "Módulo 3: Da Teoria ao Toque" },
    { id: "NEXO__03_Teoria_ao_Toque__Aula_2.mp4", title: "Aula 2 - Pressão e Variação Tátil", module: "Módulo 3: Da Teoria ao Toque" },
    { id: "NEXO__03_Teoria_ao_Toque__Aula_3.mp4", title: "Aula 3 - Sequência de Estimulação Completa", module: "Módulo 3: Da Teoria ao Toque" },
    { id: "NEXO__03_Teoria_ao_Toque__Aula_4.mp4", title: "Aula 4 - Onde e Como Manter o Clímax", module: "Módulo 3: Da Teoria ao Toque" },
    { id: "NEXO__03_Teoria_ao_Toque__Aula_5.mp4", title: "Aula 5 - Finalização e Pós-Sensação", module: "Módulo 3: Da Teoria ao Toque" },
    { id: "NEXO__04_Bonus__Aula_1.mp4", title: "Bônus Exclusivo - Segredos Complementares", module: "Módulo 4: Bônus Exclusivo" },
    { id: "NEXO__05_Encerramento__Aula_1.mp4", title: "Aula de Encerramento e Próximos Passos", module: "Módulo 5: Encerramento" }
];

let currentIndex = 0;

// Play video lesson
function playLesson(filename, title, module) {
    const player = document.getElementById("mainPlayer");
    const source = document.getElementById("videoSource");
    const modal = document.getElementById("videoModal");
    const modalTitle = document.getElementById("modalVideoTitle");
    const modalTag = document.getElementById("modalModTag");

    // Find index in playlist
    const foundIdx = playlist.findIndex(item => item.id === filename);
    if (foundIdx !== -1) {
        currentIndex = foundIdx;
    }

    const fullUrl = githubReleaseBase + filename;
    source.src = fullUrl;
    modalTitle.textContent = title;
    modalTag.textContent = module;

    player.load();
    modal.classList.add("active");
    player.play().catch(e => console.log("Autoplay blocked:", e));

    updateNavBtns();
}

// Close Video Modal
function closeVideoModal() {
    const player = document.getElementById("mainPlayer");
    const modal = document.getElementById("videoModal");
    player.pause();
    modal.classList.remove("active");
}

// Speed controller
function setSpeed(speed, btnElement) {
    const player = document.getElementById("mainPlayer");
    player.playbackRate = speed;

    document.querySelectorAll(".speed-btn").forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    }
}

// Episode Navigation
function prevEpisode() {
    if (currentIndex > 0) {
        currentIndex--;
        const item = playlist[currentIndex];
        playLesson(item.id, item.title, item.module);
    }
}

function nextEpisode() {
    if (currentIndex < playlist.length - 1) {
        currentIndex++;
        const item = playlist[currentIndex];
        playLesson(item.id, item.title, item.module);
    }
}

function updateNavBtns() {
    const prevBtn = document.getElementById("prevEpBtn");
    const nextBtn = document.getElementById("nextEpBtn");
    prevBtn.style.opacity = currentIndex === 0 ? "0.4" : "1";
    nextBtn.style.opacity = currentIndex === playlist.length - 1 ? "0.4" : "1";
}

// Open Lightbox Image
function openImage(filename, title) {
    const modal = document.getElementById("imageModal");
    const img = document.getElementById("lightboxImage");
    const titleEl = document.getElementById("imageModalTitle");
    const dlBtn = document.getElementById("imageDownloadBtn");

    const fullUrl = githubReleaseBase + filename;
    img.src = fullUrl;
    titleEl.textContent = title;
    dlBtn.href = fullUrl;

    modal.classList.add("active");
}

function closeImageModal() {
    document.getElementById("imageModal").classList.remove("active");
}

// Open PDF document
function openDoc(filename, title) {
    const fullUrl = githubReleaseBase + filename;
    window.open(fullUrl, '_blank');
}

// Scroll helper
function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function setActiveMobileNav(element) {
    document.querySelectorAll(".mobile-nav-item").forEach(item => item.classList.remove("active"));
    if (element) {
        element.classList.add("active");
    }
}

// Search Filter
document.getElementById("searchInput").addEventListener("input", function (e) {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// Close modals when clicking outside content
window.addEventListener("click", function (e) {
    const videoModal = document.getElementById("videoModal");
    const imageModal = document.getElementById("imageModal");
    if (e.target === videoModal) closeVideoModal();
    if (e.target === imageModal) closeImageModal();
});
