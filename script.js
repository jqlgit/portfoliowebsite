// Projects Data
const projectsData = [
    {
        id: 'arbor',
        title: 'Arbor',
        category: 'Enterprise Automation',
        description: 'Product Deployment Automation Framework using Helix, Ansible, and Kafka',
        fullDescription: 'Arbor is an enterprise-grade deployment automation framework that streamlines middleware delivery across teams using Helix Orchestration and Dockerized packages with sophisticated edge-case detection.',
        features: [
            'Automated middleware delivery with Helix Orchestration',
            'Java API for deployment error parsing using regex',
            'Kafka topic integration for corrective playbooks',
            'Dockerized package management',
            'Image-based deployment for RedHat systems',
            '40% reduction in mean time-to-resolution',
            '90% use case coverage with improved delivery speed'
        ],
        techStack: ['Ansible', 'Python', 'Spring Boot', 'Helix', 'Splunk', 'ServiceNow', 'BigPanda', 'Apache Kafka'],
        challenge: 'Developing a robust error detection and correction system that works across diverse middleware environments required extensive regex pattern design and Kafka topic architecture optimization.'
    },
    {
        id: 'iu-commons',
        title: 'iU Commons',
        category: 'Internal Platform',
        description: 'Ideas United Internal Site for charity engagement and partner collaboration',
        fullDescription: 'iU Commons is a comprehensive internal platform developed for Ideas United to enhance partner and company charity engagement through the IUGives Initiative.',
        features: [
            'Server-side admin features and website',
            'IUGives Initiative integration',
            'Partner and company charity engagement tools',
            'CMS with edge case handling',
            '50+ partner UGC submissions',
            '4000+ internal user site visits'
        ],
        techStack: ['Vue.js', 'Nuxt.js', 'Ruby on Rails', 'Rails API', 'PostgreSQL', 'Splunk'],
        challenge: 'Implementing complex admin features while ensuring the CMS remained robust and user-friendly required careful planning of edge cases and comprehensive testing.'
    },
    {
        id: 'porch',
        title: 'PORCH',
        category: 'Mobile Application',
        description: 'Food Donation Coordination and Management Tool for community hunger relief',
        fullDescription: 'PORCH is an iOS application designed to streamline food donation coordination and volunteer management for communities working toward hunger relief.',
        features: [
            'Message blasting functionality via Twilio',
            'Volunteer organization and coordination',
            'Data collection and analytics',
            'Real-time communication',
            'Community engagement tools',
            '$6.5 million in hunger relief contribution'
        ],
        techStack: ['Swift', 'SwiftUI', 'Twilio', 'Firebase', 'Splunk', 'SF Symbols'],
        challenge: 'Building a reliable message blasting system while maintaining data integrity across volunteer networks required seamless Twilio integration and robust Firebase backend architecture.'
    },
    {
        id: 'chatgpt-custom',
        title: 'Custom ChatGPT',
        category: 'AI Application',
        description: 'Full stack Chatbot with 49+ custom GPT versions using OpenAI API',
        fullDescription: 'A full-stack chatbot application that recreates ChatGPT functionality using OpenAI\'s API with support for 49+ custom GPT versions.',
        features: [
            'Frontend and backend ChatGPT recreation',
            '49+ custom GPT versions',
            'Multi-turn conversation support',
            'Real-time response streaming',
            'Conversation history management'
        ],
        techStack: ['React.js', 'Express.js', 'Node.js', 'HTML', 'CSS', 'OpenAI API', 'Visual Studio'],
        challenge: 'Implementing 49+ custom GPT versions required sophisticated prompt engineering and configuration management while balancing API costs.'
    },
    {
        id: 'bytebuddy',
        title: 'ByteBuddy',
        category: 'Mobile Application',
        description: 'NC Triangle Calorie Tracker - Nutrition assistant mobile app for 1200+ food items',
        fullDescription: 'ByteBuddy is a comprehensive nutrition assistant mobile application with support for 1200+ food items across 3 campuses.',
        features: [
            'Meal logging with visual interface',
            'Nutrition database with 1200+ items',
            'Personalized nutrition reports',
            'Real-time nutrition information',
            'Multi-campus support'
        ],
        techStack: ['Swift', 'SwiftUI', 'SwiftSoup', 'WebKit', 'AlamoFire', 'Firebase'],
        challenge: 'Integrating nutrition data for 1200+ items while maintaining app performance required efficient data structures and caching strategies.'
    },
    {
        id: 'data-structures',
        title: 'Data Structures and Algorithms',
        category: 'Educational Project',
        description: 'Demonstrate expertise in Binary Search Trees, algorithms, Trie structures, Red-Black Trees, Linked Lists, arrays, stacks, queues, graphs, and various sorting techniques.',
        fullDescription: 'A comprehensive project showcasing deep understanding of fundamental data structures and algorithms with optimized implementations.',
        features: [
            'Binary Search Tree implementation with balancing',
            'Trie data structure for efficient string searches',
            'Red-Black Tree self-balancing implementation',
            'Graph algorithms including DFS and BFS',
            'Multiple sorting algorithms (Merge Sort, Quick Sort, Heap Sort)',
            'Time and space complexity analysis'
        ],
        techStack: ['Java', 'Data Structures', 'Algorithms'],
        challenge: 'Implementing self-balancing trees while maintaining optimal time complexity required studying various balancing techniques.'
    },
    {
        id: 'stock-trading',
        title: 'Stock Trading App',
        category: 'Web Application',
        description: 'App for trading with reliable user interface, user data collection, and password security system.',
        fullDescription: 'A full-stack stock trading application built with Flask and SQLite featuring real-time stock data integration and secure transaction handling.',
        features: [
            'User authentication with hashed passwords',
            'Real-time stock data integration',
            'Trading functionality with transaction history',
            'Portfolio tracking and performance analytics',
            'Responsive UI built with Bootstrap',
            'SQLite database for data persistence'
        ],
        techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'SQL', 'Bootstrap'],
        challenge: 'Integrating real-time stock API data while maintaining server performance was challenging. Implemented caching strategies and optimized database queries.'
    },
    {
        id: 'sneaker-shop',
        title: 'Online E-Commerce Sneaker Shopping App',
        category: 'E-Commerce Project',
        description: 'Interactive sneaker e-commerce app with user cart system interface.',
        fullDescription: 'A modern e-commerce application built with React.js specializing in sneaker sales with a fully functional shopping cart system.',
        features: [
            'Product catalog with filtering and search',
            'Shopping cart with add/remove/update functionality',
            'Product detail pages with specifications',
            'User-friendly checkout process',
            'Responsive design for mobile and desktop',
            'Product recommendations'
        ],
        techStack: ['React.js', 'CSS', 'JavaScript'],
        challenge: 'Managing complex state across the shopping cart and maintaining performance with a large product database required careful component structure.'
    }
];

let currentProjectIndex = 0;

// Initialize carousel
function initCarousel() {
    updateCarousel();
}

// Update carousel display
function updateCarousel() {
    const project = projectsData[currentProjectIndex];
    document.getElementById('carouselTitle').textContent = project.title;
    document.getElementById('carouselProjectTitle').textContent = project.title;
    document.getElementById('carouselProjectDesc').textContent = project.description;
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

// Load all projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    projectsData.forEach(project => {
        const projectHTML = `
            <a href="#" class="project-cube-link" onclick="openProjectModal('${project.id}'); return false;">
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
            <a href="#portfolio">Back to Portfolio</a>
        </div>
    `;

    modal.style.display = 'block';
}

// Close project modal
function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Tab functionality
function openTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabBtns = document.querySelectorAll('.tab-btn');

    tabContents.forEach(tab => tab.classList.remove('active'));
    tabBtns.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Typed.js animation
function initTyped() {
    const options = {
        strings: ['Programmer', 'Leader', 'Student', 'Developer', 'Innovator', 'Designer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    new Typed('.auto-type', options);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    loadProjects();
    initTyped();
});
