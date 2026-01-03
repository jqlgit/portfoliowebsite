// Global projects data
let projectsData = [];

// Fetch projects from JSON
async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const allProjects = await response.json();
        // Filter out disabled projects
        projectsData = allProjects.filter(p => !p.disabled);
        return projectsData;
    } catch (error) {
        console.error('Error loading projects:', error);
        return [];
    }
}

// Load projects on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});

// Open project modal
function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const projectDetail = document.getElementById('projectDetail');

    let techStackHTML = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

    projectDetail.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>${project.category}</strong></p>
        <p>${project.fullDescription}</p>

        <h4>Features</h4>
        <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>

        <h4>Tech Stack</h4>
        <div class="tech-stack">
            ${techStackHTML}
        </div>

        <h4>Challenge</h4>
        <p>${project.challenge}</p>

        <div class="project-links">
            <a href="https://github.com/jqlgit" target="_blank">GitHub</a>
            <a href="portfolio.html">Back to Portfolio</a>
        </div>
    `;

    modal.style.display = 'block';
}

// Close project modal
function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
});

// Tab functionality
function openTab(event, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabContents.forEach(tab => tab.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}
