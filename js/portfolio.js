// Portfolio page specific functionality

// Initialize portfolio page
document.addEventListener('DOMContentLoaded', function() {
    loadProjects().then(() => {
        loadProjectCards();
    });
});

// Load and display project cards
function loadProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectHTML = `
            <a href="${project.url}" class="project-cube-link">
                <div class="project-cube">
                    <div class="cube-inner">
                        <div class="cube-front">${project.title}</div>
                        <div class="cube-back">${project.description}</div>
                    </div>
                </div>
            </a>
        `;
        projectsGrid.innerHTML += projectHTML;
    });
}
