// Import views
import landingView from './views/landing.js';
import generatorView from './views/generator.js';
import consumerView from './views/consumer.js';
import adminView from './views/admin.js';

// Router configuration
const routes = {
    '/': {
        title: 'Home',
        render: landingView
    },
    '/generator': {
        title: 'Generator Dashboard',
        render: generatorView
    },
    '/consumer': {
        title: 'Consumer Dashboard',
        render: consumerView
    },
    '/admin': {
        title: 'Network Explorer',
        render: adminView
    }
};

class App {
    constructor() {
        this.currentPath = window.location.hash.slice(1) || '/';
        this.viewContainer = document.getElementById('view-container');
        this.pageTitle = document.getElementById('page-title');
        this.navItems = document.querySelectorAll('.nav-item');
        
        this.init();
    }

    init() {
        // Handle navigation clicks
        this.navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const path = e.currentTarget.getAttribute('data-path');
                this.navigate(path);
            });
        });

        // Handle browser back/forward
        window.addEventListener('hashchange', () => {
            const path = window.location.hash.slice(1) || '/';
            this.navigate(path, false);
        });

        // Initial render
        this.navigate(this.currentPath, false);
    }

    navigate(path, updateHash = true) {
        if (!routes[path]) path = '/';
        
        this.currentPath = path;
        if (updateHash) {
            window.location.hash = path;
        }

        // Update active nav state
        this.navItems.forEach(item => {
            if (item.getAttribute('data-path') === path) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Update page title
        this.pageTitle.textContent = routes[path].title;

        // Render view
        this.renderView(path);
    }

    async renderView(path) {
        // Add fade out effect
        this.viewContainer.style.opacity = '0';
        
        setTimeout(async () => {
            const view = routes[path];
            
            // Clear current content
            this.viewContainer.innerHTML = '';
            
            // Render new content
            const content = await view.render.render();
            
            if (typeof content === 'string') {
                this.viewContainer.innerHTML = content;
            } else if (content instanceof Element) {
                this.viewContainer.appendChild(content);
            }
            
            // Initialize scripts/charts for the view if any
            if (view.render.init) {
                view.render.init();
            }
            
            // Add fade animation class
            this.viewContainer.className = 'view-container fade-enter';
            this.viewContainer.style.opacity = '1';
            
            // Remove animation class after it completes to allow re-triggering
            setTimeout(() => {
                this.viewContainer.classList.remove('fade-enter');
            }, 400);
        }, 150);
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
