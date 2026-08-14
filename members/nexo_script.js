// AI Music Academy - Interactive Player Script

// GitHub release media base URL
const githubReleaseBase = "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/";

// Video playlist mapping (English AI Music classes)
const playlist = [
    { 
        id: "class_1_ai_music.mp4", 
        title: "Class 1: How to ACTUALLY Make Money With AI Music", 
        module: "Module 1: The Blueprint" 
    },
    { 
        id: "class_2_make_songs.mp4", 
        title: "Class 2: Make Hit Songs with AI (Suno & Udio)", 
        module: "Module 2: Creation Mastery" 
    },
    { 
        id: "class_3_ai_voices.mp4", 
        title: "Class 3: Custom AI Voices & Vocal Cloning", 
        module: "Module 3: Vocal Technology" 
    },
    { 
        id: "class_4_monetization.mp4", 
        title: "Class 4: Music Distribution & Scale", 
        module: "Module 4: Monetization & Scaling" 
    }
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

// Next Episode
function nextEpisode() {
    if (currentIndex < playlist.length - 1) {
        currentIndex++;
        const item = playlist[currentIndex];
        playLesson(item.id, item.title, item.module);
    }
}

// Update previous / next button state
function updateNavBtns() {
    const prevBtn = document.getElementById("prevEpBtn");
    const nextBtn = document.getElementById("nextEpBtn");
    prevBtn.style.opacity = currentIndex === 0 ? "0.4" : "1";
    nextBtn.style.opacity = currentIndex === playlist.length - 1 ? "0.4" : "1";
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
    if (e.target === videoModal) closeVideoModal();
});
