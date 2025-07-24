// Background Effects Controller for PrintGuys Website
// Dynamically creates and manages cool background effects

class BackgroundEffects {
    constructor() {
        this.effects = {
            particles: true,
            shapes: true,
            stars: true,
            digitalRain: false, // Optional, can be memory intensive
            glowingOrbs: true
        };
        
        this.init();
    }

    init() {
        this.createBackgroundContainer();
        
        if (this.effects.particles) this.createFloatingParticles();
        if (this.effects.shapes) this.createGeometricShapes();
        if (this.effects.stars) this.createStars();
        if (this.effects.digitalRain) this.createDigitalRain();
        if (this.effects.glowingOrbs) this.createGlowingOrbs();
        
        this.setupIntersectionObserver();
    }

    createBackgroundContainer() {
        // Animated gradient background
        const animatedBg = document.createElement('div');
        animatedBg.className = 'animated-background';
        document.body.insertBefore(animatedBg, document.body.firstChild);

        // Grid overlay
        const gridOverlay = document.createElement('div');
        gridOverlay.className = 'grid-overlay';
        document.body.insertBefore(gridOverlay, document.body.firstChild);

        // Morphing shapes container
        const morphingShapes = document.createElement('div');
        morphingShapes.className = 'morphing-shapes';
        document.body.insertBefore(morphingShapes, document.body.firstChild);

        // Create morphing shapes
        for (let i = 1; i <= 2; i++) {
            const shape = document.createElement('div');
            shape.className = `morph-shape morph-${i}`;
            morphingShapes.appendChild(shape);
        }
    }

    createFloatingParticles() {
        const container = document.createElement('div');
        container.className = 'geometric-shapes';
        document.body.appendChild(container);

        // Create various geometric shapes
        const shapes = [
            { class: 'shape shape-1' },
            { class: 'shape shape-2' },
            { class: 'shape shape-3' },
            { class: 'shape shape-4' }
        ];

        shapes.forEach(shape => {
            const element = document.createElement('div');
            element.className = shape.class;
            container.appendChild(element);
        });

        // Add more random floating particles
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'shape';
            particle.style.cssText = `
                width: ${Math.random() * 40 + 20}px;
                height: ${Math.random() * 40 + 20}px;
                background: rgba(239, 68, 68, ${Math.random() * 0.1 + 0.05});
                border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * -20}s;
                animation-duration: ${Math.random() * 20 + 20}s;
            `;
            container.appendChild(particle);
        }
    }

    createStars() {
        const container = document.createElement('div');
        container.className = 'stars';
        document.body.appendChild(container);

        // Create twinkling stars
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                width: ${Math.random() * 3 + 1}px;
                height: ${Math.random() * 3 + 1}px;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 3}s;
                opacity: ${Math.random() * 0.8 + 0.2};
            `;
            container.appendChild(star);
        }
    }

    createGlowingOrbs() {
        const container = document.createElement('div');
        container.className = 'glowing-orbs';
        document.body.appendChild(container);

        // Create pulsing orbs
        for (let i = 1; i <= 3; i++) {
            const orb = document.createElement('div');
            orb.className = `orb orb-${i}`;
            container.appendChild(orb);
        }

        // Add additional random orbs
        for (let i = 0; i < 5; i++) {
            const orb = document.createElement('div');
            orb.className = 'orb';
            orb.style.cssText = `
                width: ${Math.random() * 150 + 100}px;
                height: ${Math.random() * 150 + 100}px;
                background: radial-gradient(circle, rgba(239, 68, 68, ${Math.random() * 0.1 + 0.02}) 0%, transparent 70%);
                top: ${Math.random() * 80}%;
                left: ${Math.random() * 80}%;
                animation-delay: ${Math.random() * 4}s;
            `;
            container.appendChild(orb);
        }
    }

    createDigitalRain() {
        const container = document.createElement('div');
        container.className = 'digital-rain';
        document.body.appendChild(container);

        const characters = '01DTF♦◊◈◎●○◐◑◒◓';
        
        // Create falling digital characters
        for (let i = 0; i < 30; i++) {
            const drop = document.createElement('div');
            drop.className = 'rain-drop';
            drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
            drop.style.cssText = `
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 10}s;
                animation-duration: ${Math.random() * 5 + 8}s;
            `;
            container.appendChild(drop);
        }
    }

    createHeroParticles() {
        const heroSection = document.querySelector('.hero-gradient');
        if (!heroSection) return;

        const container = document.createElement('div');
        container.className = 'hero-particles';
        heroSection.appendChild(container);

        // Create floating particles for hero section
        for (let i = 1; i <= 8; i++) {
            const particle = document.createElement('div');
            particle.className = `particle particle-${i <= 5 ? i : Math.floor(Math.random() * 5) + 1}`;
            if (i > 5) {
                particle.style.cssText = `
                    left: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 25}s;
                `;
            }
            container.appendChild(particle);
        }
    }

    setupIntersectionObserver() {
        // Optimize performance by pausing animations when not visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                } else {
                    entry.target.style.animationPlayState = 'paused';
                }
            });
        });

        // Observe all animated elements
        setTimeout(() => {
            const animatedElements = document.querySelectorAll([
                '.shape',
                '.orb',
                '.rain-drop',
                '.star',
                '.particle',
                '.morph-shape'
            ].join(', '));
            
            animatedElements.forEach(el => observer.observe(el));
        }, 1000);
    }

    // Method to toggle specific effects
    toggleEffect(effectName) {
        this.effects[effectName] = !this.effects[effectName];
        
        // Remove existing elements of this type
        const containers = {
            particles: '.geometric-shapes',
            stars: '.stars',
            digitalRain: '.digital-rain',
            glowingOrbs: '.glowing-orbs'
        };

        if (containers[effectName]) {
            const existing = document.querySelector(containers[effectName]);
            if (existing) existing.remove();
        }

        // Recreate if enabled
        if (this.effects[effectName]) {
            switch(effectName) {
                case 'particles':
                    this.createFloatingParticles();
                    break;
                case 'stars':
                    this.createStars();
                    break;
                case 'digitalRain':
                    this.createDigitalRain();
                    break;
                case 'glowingOrbs':
                    this.createGlowingOrbs();
                    break;
            }
        }
    }

    // Responsive adjustments
    handleResize() {
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
            // Reduce particle count on mobile
            const shapes = document.querySelectorAll('.shape:nth-child(n+5)');
            shapes.forEach(shape => shape.style.display = 'none');
            
            const stars = document.querySelectorAll('.star:nth-child(n+11)');
            stars.forEach(star => star.style.display = 'none');
        } else {
            // Show all particles on desktop
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach(shape => shape.style.display = 'block');
            
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => star.style.display = 'block');
        }
    }

    // Cleanup method
    destroy() {
        const containers = [
            '.animated-background',
            '.grid-overlay',
            '.morphing-shapes',
            '.geometric-shapes',
            '.stars',
            '.digital-rain',
            '.glowing-orbs',
            '.hero-particles'
        ];

        containers.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) element.remove();
        });
    }
}

// Initialize background effects when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const backgroundEffects = new BackgroundEffects();
        
        // Handle responsive changes
        window.addEventListener('resize', () => backgroundEffects.handleResize());
        
        // Create hero particles after hero section loads
        setTimeout(() => backgroundEffects.createHeroParticles(), 500);
        
        // Make effects controller globally available for debugging
        window.backgroundEffects = backgroundEffects;
    }
});

// Utility function to toggle effects via console
window.toggleBackgroundEffect = function(effectName) {
    if (window.backgroundEffects) {
        window.backgroundEffects.toggleEffect(effectName);
    }
};