// AI Music Academy - Interactive Player Script

// GitHub release media base URL
const githubReleaseBase = "https://github.com/GuiGomes1/el-secreto-vsl/releases/download/v1.0.0/";

// Logout
function logout() {
    localStorage.removeItem("aim_auth");
    window.location.replace("login.html");
}

// Video playlist mapping (English AI Music classes)
const playlist = [
    { 
        id: "class_1_ai_music.mp4", 
        title: "Class 1: How to ACTUALLY Make Money With AI Music", 
        moduleLabel: "Module 1: The Blueprint" 
    },
    { 
        id: "class_2_make_songs.mp4", 
        title: "Class 2: Make Hit Songs with AI (Suno & Udio)", 
        moduleLabel: "Module 2: Creation Mastery" 
    },
    { 
        id: "class_3_ai_voices.mp4", 
        title: "Class 3: Custom AI Voices & Vocal Cloning", 
        moduleLabel: "Module 3: Vocal Technology" 
    },
    { 
        id: "class_4_monetization.mp4", 
        title: "Class 4: Music Distribution & Scale", 
        moduleLabel: "Module 4: Monetization & Scaling" 
    }
];

let currentIndex = 0;

// Play video lesson
function playLesson(filename, title, moduleLabel) {
    const player = document.getElementById("mainPlayer");
    const source = document.getElementById("videoSource");
    const modal = document.getElementById("videoModal");
    const modalTitle = document.getElementById("modalVideoTitle");
    const modalTag = document.getElementById("modalModTag");

    // Find index in playlist
    const foundIdx = playlist.findIndex(function(item) { return item.id === filename; });
    if (foundIdx !== -1) {
        currentIndex = foundIdx;
    }

    var fullUrl = githubReleaseBase + filename;
    source.src = fullUrl;
    modalTitle.textContent = title;
    modalTag.textContent = moduleLabel;

    player.load();
    modal.classList.add("active");
    player.play().catch(function(err) { console.log("Autoplay blocked:", err); });

    updateNavBtns();
}

// Close Video Modal
function closeVideoModal() {
    var player = document.getElementById("mainPlayer");
    var modal = document.getElementById("videoModal");
    player.pause();
    modal.classList.remove("active");
}

// Speed controller
function setSpeed(speed, btnElement) {
    var player = document.getElementById("mainPlayer");
    player.playbackRate = speed;

    var btns = document.querySelectorAll(".speed-btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    if (btnElement) {
        btnElement.classList.add("active");
    }
}

// Previous Episode
function prevEpisode() {
    if (currentIndex > 0) {
        currentIndex--;
        var item = playlist[currentIndex];
        playLesson(item.id, item.title, item.moduleLabel);
    }
}

// Next Episode
function nextEpisode() {
    if (currentIndex < playlist.length - 1) {
        currentIndex++;
        var item = playlist[currentIndex];
        playLesson(item.id, item.title, item.moduleLabel);
    }
}

// Update previous / next button state
function updateNavBtns() {
    var prevBtn = document.getElementById("prevEpBtn");
    var nextBtn = document.getElementById("nextEpBtn");
    prevBtn.style.opacity = currentIndex === 0 ? "0.4" : "1";
    nextBtn.style.opacity = currentIndex === playlist.length - 1 ? "0.4" : "1";
}

// Scroll helper
function scrollToElement(id) {
    var el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function setActiveMobileNav(element) {
    var items = document.querySelectorAll(".mobile-nav-item");
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
    }
    if (element) {
        element.classList.add("active");
    }
}

// Search Filter
var searchInput = document.getElementById("searchInput");
if (searchInput) {
    searchInput.addEventListener("input", function(e) {
        var query = e.target.value.toLowerCase().trim();
        var cards = document.querySelectorAll(".card");
        for (var i = 0; i < cards.length; i++) {
            var text = cards[i].textContent.toLowerCase();
            cards[i].style.display = text.includes(query) ? "flex" : "none";
        }
    });
}

// Close modal when clicking outside
window.addEventListener("click", function(e) {
    var videoModal = document.getElementById("videoModal");
    if (videoModal && e.target === videoModal) {
        closeVideoModal();
    }
});
