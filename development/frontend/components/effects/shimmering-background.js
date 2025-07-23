/**
 * PrintGuys.ca Shimmering Background Effect
 * Inspired by Netlify's animated background with service-specific color themes
 * 
 * Color Themes:
 * - DTF: Red (#dc2626, #ef4444)
 * - Sublimation: Purple (#bb54db, #8e3aab)
 * - Screen Printing: Blue (#3b82f6, #1d4ed8)
 * - Embroidery: Yellow/Gold (#eab308, #ca8a04)
 * - Default: Brand Purple (#bb54db, #8e3aab)
 * 
 * Usage:
 * <script src="/components/effects/shimmering-background.js"></script>
 * <script>
 *   // Initialize with specific service color theme
 *   ShimmeringBackground.init('dtf'); // or 'sublimation', 'screen-printing', 'embroidery'
 * </script>
 */

class ShimmeringBackground {
    static themes = {
        'dtf': {
            primary: '#dc2626',
            secondary: '#ef4444',
            accent: '#fca5a5',
            name: 'DTF'
        },
        'sublimation': {
            primary: '#bb54db',
            secondary: '#8e3aab',
            accent: '#ddd6fe',
            name: 'Sublimation'
        },
        'screen-printing': {
            primary: '#3b82f6',
            secondary: '#1d4ed8',
            accent: '#93c5fd',
            name: 'Screen Printing'
        },
        'embroidery': {
            primary: '#eab308',
            secondary: '#ca8a04',
            accent: '#fde047',
            name: 'Embroidery'
        },
        'uv-dtf-stickers': {
            primary: '#10b981',
            secondary: '#047857',
            accent: '#6ee7b7',
            name: 'UV DTF'
        },
        'large-format': {
            primary: '#f59e0b',
            secondary: '#d97706',
            accent: '#fbbf24',
            name: 'Large Format'
        },
        'default': {
            primary: '#bb54db',
            secondary: '#8e3aab',
            accent: '#ddd6fe',
            name: 'PrintGuys'
        }
    };

    static init(serviceName = 'default', options = {}) {
        const theme = this.themes[serviceName] || this.themes.default;
        const config = {
            particleCount: options.particleCount || 50,
            animationDuration: options.animationDuration || 20000,
            opacity: options.opacity || 0.15,
            size: options.size || { min: 2, max: 8 },
            speed: options.speed || { min: 0.5, max: 2 },
            container: options.container || document.body,
            zIndex: options.zIndex || -1,
            ...options
        };

        this.createShimmeringEffect(theme, config);
    }

    static createShimmeringEffect(theme, config) {
        // Remove existing shimmer container if it exists
        const existingShimmer = document.getElementById('shimmer-background');
        if (existingShimmer) {
            existingShimmer.remove();
        }

        // Create container
        const shimmerContainer = document.createElement('div');
        shimmerContainer.id = 'shimmer-background';
        shimmerContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${config.zIndex};
            overflow: hidden;
        `;

        // Create CSS for animations
        const style = document.createElement('style');
        style.textContent = this.generateCSS(theme, config);
        document.head.appendChild(style);

        // Create floating particles
        for (let i = 0; i < config.particleCount; i++) {
            const particle = this.createParticle(theme, config, i);
            shimmerContainer.appendChild(particle);
        }

        // Create gradient overlay
        const gradientOverlay = this.createGradientOverlay(theme, config);
        shimmerContainer.appendChild(gradientOverlay);

        // Add to container
        config.container.appendChild(shimmerContainer);

        // Add resize handler
        window.addEventListener('resize', () => {
            this.repositionParticles(shimmerContainer, config);
        });
    }

    static generateCSS(theme, config) {
        return `
            @keyframes shimmer-float {
                0% {
                    transform: translateY(100vh) translateX(0) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: ${config.opacity};
                }
                90% {
                    opacity: ${config.opacity};
                }
                100% {
                    transform: translateY(-100px) translateX(200px) rotate(360deg);
                    opacity: 0;
                }
            }

            @keyframes shimmer-pulse {
                0%, 100% {
                    transform: scale(1);
                    opacity: ${config.opacity};
                }
                50% {
                    transform: scale(1.2);
                    opacity: ${config.opacity * 1.5};
                }
            }

            @keyframes shimmer-drift {
                0% {
                    transform: translateX(0);
                }
                50% {
                    transform: translateX(20px);
                }
                100% {
                    transform: translateX(0);
                }
            }

            @keyframes gradient-shift {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }

            .shimmer-particle {
                position: absolute;
                border-radius: 50%;
                pointer-events: none;
                will-change: transform, opacity;
            }

            .shimmer-gradient-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(
                    45deg,
                    transparent 0%,
                    ${theme.primary}08 25%,
                    transparent 50%,
                    ${theme.secondary}05 75%,
                    transparent 100%
                );
                background-size: 400% 400%;
                animation: gradient-shift 30s ease-in-out infinite;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
                .shimmer-particle {
                    transform: scale(0.7);
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .shimmer-particle,
                .shimmer-gradient-overlay {
                    animation: none !important;
                }
            }
        `;
    }

    static createParticle(theme, config, index) {
        const particle = document.createElement('div');
        particle.className = 'shimmer-particle';
        
        // Random properties
        const size = this.randomBetween(config.size.min, config.size.max);
        const animationDelay = this.randomBetween(0, config.animationDuration);
        const animationDuration = this.randomBetween(config.animationDuration * 0.8, config.animationDuration * 1.2);
        const startX = this.randomBetween(-100, window.innerWidth + 100);
        const driftDuration = this.randomBetween(8000, 15000);
        
        // Color selection (70% primary, 20% secondary, 10% accent)
        const colorRand = Math.random();
        let particleColor;
        if (colorRand < 0.7) {
            particleColor = theme.primary;
        } else if (colorRand < 0.9) {
            particleColor = theme.secondary;
        } else {
            particleColor = theme.accent;
        }

        // Apply styles
        particle.style.cssText = `
            left: ${startX}px;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${particleColor}${Math.floor(config.opacity * 255).toString(16).padStart(2, '0')}, transparent);
            box-shadow: 0 0 ${size * 2}px ${particleColor}${Math.floor(config.opacity * 127).toString(16).padStart(2, '0')};
            animation: 
                shimmer-float ${animationDuration}ms linear infinite,
                shimmer-pulse ${this.randomBetween(3000, 6000)}ms ease-in-out infinite,
                shimmer-drift ${driftDuration}ms ease-in-out infinite;
            animation-delay: ${animationDelay}ms, ${this.randomBetween(0, 3000)}ms, ${this.randomBetween(0, 5000)}ms;
        `;

        return particle;
    }

    static createGradientOverlay(theme, config) {
        const overlay = document.createElement('div');
        overlay.className = 'shimmer-gradient-overlay';
        return overlay;
    }

    static repositionParticles(container, config) {
        const particles = container.querySelectorAll('.shimmer-particle');
        particles.forEach(particle => {
            const newX = this.randomBetween(-100, window.innerWidth + 100);
            particle.style.left = `${newX}px`;
        });
    }

    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    static destroy() {
        const shimmerContainer = document.getElementById('shimmer-background');
        if (shimmerContainer) {
            shimmerContainer.remove();
        }
        
        // Remove associated styles
        const styles = document.querySelectorAll('style');
        styles.forEach(style => {
            if (style.textContent.includes('shimmer-float')) {
                style.remove();
            }
        });
    }

    // Utility method to detect current service page
    static detectServiceFromPath() {
        const path = window.location.pathname.toLowerCase();
        
        if (path.includes('dtf')) return 'dtf';
        if (path.includes('sublimation')) return 'sublimation';
        if (path.includes('screen-printing')) return 'screen-printing';
        if (path.includes('embroidery')) return 'embroidery';
        if (path.includes('uv-dtf')) return 'uv-dtf-stickers';
        if (path.includes('large-format')) return 'large-format';
        
        return 'default';
    }

    // Auto-initialize based on current page
    static autoInit(options = {}) {
        const serviceName = this.detectServiceFromPath();
        this.init(serviceName, options);
    }
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ShimmeringBackground.autoInit();
    });
} else {
    ShimmeringBackground.autoInit();
}

// Expose to global scope
window.ShimmeringBackground = ShimmeringBackground;
