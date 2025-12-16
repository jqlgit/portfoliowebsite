// Home page specific functionality
let currentProjectIndex = 0;

// Initialize home page
document.addEventListener('DOMContentLoaded', function() {
    loadProjects().then(() => {
        initCarousel();
        initTyped();
    });
});

// Initialize carousel
function initCarousel() {
    updateCarousel();
}

// Update carousel display
function updateCarousel() {
    if (projectsData.length === 0) return;
    
    const project = projectsData[currentProjectIndex];
    const carouselImage = document.getElementById('carouselImage');
    const carouselProjectTitle = document.getElementById('carouselProjectTitle');
    const carouselProjectDesc = document.getElementById('carouselProjectDesc');
    
    // Update project info
    if (carouselProjectTitle) carouselProjectTitle.textContent = project.title;
    if (carouselProjectDesc) carouselProjectDesc.textContent = project.description;
    
    // Update image based on project ID
    if (carouselImage) {
        let imageSrc = 'images/background.png'; // fallback to background
        if (project.id === 'point-cloud-codec') {
            imageSrc = 'images/point-cloud-compression-research.jpg';
        } else if (project.id === 'gdp-forecasting') {
            imageSrc = 'images/gdp-forecasting-research.jpg';
        }
        carouselImage.src = imageSrc;
        carouselImage.alt = project.title;
    }
}

// Next project
function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectsData.length;
    updateCarousel();
}

// Previous project
function previousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projectsData.length) % projectsData.length;
    updateCarousel();
}

// Typed.js animation
function initTyped() {
    const autoTypeElement = document.querySelector('.auto-type');
    if (autoTypeElement && typeof Typed !== 'undefined') {
        const options = {
            strings: ['Programmer', 'Leader', 'Student', 'Developer', 'Innovator', 'Designer'],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };
        new Typed(autoTypeElement, options);
    }
}
