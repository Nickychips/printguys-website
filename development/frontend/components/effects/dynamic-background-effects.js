/**
 * PrintGuys.ca Dynamic Background Effects
 * Advanced background animations for enhanced visual appeal
 * Includes: Geometric patterns, floating elements, gradient waves, and interactive effects
 * 
 * Usage:
 * <script src="/components/effects/dynamic-background-effects.js"></script>
 * <script>
 *   DynamicBackgroundEffects.init('homepage'); // or other page types
 * </script>
 */

class DynamicBackgroundEffects {
    static effects = {
        'homepage': {
            type: 'geometric-particles',
            colors: ['#dc2626', '#ef4444', '#fca5a5'],
            name: 'Homepage'
        },
        'service': {
            type: 'floating-shapes',
            colors: ['#bb54db', '#8e3aab', '#ddd6fe'],
            name: 'Service Pages'
        },
        'contact': {
            type: 'gradient-waves',
            colors: ['#3b82f6', '#1d4ed8', '#93c5fd'],
            name: 'Contact Page'
        },
        'about': {
            type: 'mesh-gradient',
            colors: ['#10b981', '#047857', '#6ee7b7'],
            name: 'About Page'
        }
    };

    static init(effectType = 'homepage', options = {}) {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        const effect = this.effects[effectType] || this.effects.homepage;
        const config = {
            intensity: options.intensity || 'medium', // low, medium, high
            opacity: options.opacity || 0.1,
            container: options.container || document.body,
            zIndex: options.zIndex || -1,
            particleCount: options.particleCount || 30,
            ...options
        };

        this.createEffect(effect, config);
    }

    static createEffect(effect, config) {
        // Remove existing effects
        this.destroy();

        switch (effect.type) {
            case 'geometric-particles':
                this.createGeometricParticles(effect, config);
                break;
            case 'floating-shapes':
                this.createFloatingShapes(effect, config);
                break;
            case 'gradient-waves':
                this.createGradientWaves(effect, config);
                break;
            case 'mesh-gradient':
                this.createMeshGradient(effect, config);
                break;
            default:
                this.createGeometricParticles(effect, config);
        }
    }

    static createGeometricParticles(effect, config) {
        const container = document.createElement('div');
        container.id = 'dynamic-bg-effects';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${config.zIndex};
            overflow: hidden;
        `;

        // Add CSS animations
        this.addGeometricCSS(effect, config);

        // Create particles
        for (let i = 0; i < config.particleCount; i++) {
            const particle = this.createGeometricParticle(effect, config, i);
            container.appendChild(particle);
        }

        config.container.appendChild(container);
    }

    static createFloatingShapes(effect, config) {
        const container = document.createElement('div');
        container.id = 'dynamic-bg-effects';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${config.zIndex};
            overflow: hidden;
        `;

        this.addFloatingShapesCSS(effect, config);

        // Create different shapes
        const shapes = ['circle', 'square', 'triangle', 'hexagon'];
        for (let i = 0; i < config.particleCount; i++) {
            const shape = shapes[i % shapes.length];
            const element = this.createFloatingShape(effect, config, shape, i);
            container.appendChild(element);
        }

        config.container.appendChild(container);
    }

    static createGradientWaves(effect, config) {
        const container = document.createElement('div');
        container.id = 'dynamic-bg-effects';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${config.zIndex};
            overflow: hidden;
        `;

        this.addGradientWavesCSS(effect, config);

        // Create wave layers
        for (let i = 0; i < 3; i++) {
            const wave = this.createWaveLayer(effect, config, i);
            container.appendChild(wave);
        }

        config.container.appendChild(container);
    }

    static createMeshGradient(effect, config) {
        const container = document.createElement('div');
        container.id = 'dynamic-bg-effects';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: ${config.zIndex};
            overflow: hidden;
        `;

        this.addMeshGradientCSS(effect, config);

        // Create mesh gradient
        const mesh = this.createMeshElement(effect, config);
        container.appendChild(mesh);

        config.container.appendChild(container);
    }

    static addGeometricCSS(effect, config) {
        const style = document.createElement('style');
        style.id = 'dynamic-bg-effects-style';
        style.textContent = `
            @keyframes geometric-float {
                0% {
                    transform: translateY(100vh) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: ${config.opacity};
                }
                90% {
                    opacity: ${config.opacity};
                }
                100% {
                    transform: translateY(-200px) rotate(360deg);
                    opacity: 0;
                }
            }

            @keyframes geometric-pulse {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.3);
                }
            }

            @keyframes geometric-drift {
                0% {
                    transform: translateX(0) rotateZ(0deg);
                }
                33% {
                    transform: translateX(30px) rotateZ(120deg);
                }
                66% {
                    transform: translateX(-20px) rotateZ(240deg);
                }
                100% {
                    transform: translateX(0) rotateZ(360deg);
                }
            }

            .geometric-particle {
                position: absolute;
                will-change: transform, opacity;
            }

            .geometric-triangle {
                width: 0;
                height: 0;
                border-style: solid;
            }

            .geometric-square {
                transform: rotate(45deg);
            }

            .geometric-hexagon {
                position: relative;
                width: 20px;
                height: 11.55px;
                background: ${effect.colors[0]};
                margin: 5.77px 0;
            }

            .geometric-hexagon:before,
            .geometric-hexagon:after {
                content: "";
                position: absolute;
                width: 0;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
            }

            .geometric-hexagon:before {
                bottom: 100%;
                border-bottom: 5.77px solid ${effect.colors[0]};
            }

            .geometric-hexagon:after {
                top: 100%;
                border-top: 5.77px solid ${effect.colors[0]};
            }

            @media (max-width: 768px) {
                .geometric-particle {
                    transform: scale(0.6);
                }
            }
        `;
        document.head.appendChild(style);
    }

    static addFloatingShapesCSS(effect, config) {
        const style = document.createElement('style');
        style.id = 'dynamic-bg-effects-style';
        style.textContent = `
            @keyframes float-up {
                0% {
                    transform: translateY(100vh) scale(0);
                    opacity: 0;
                }
                10% {
                    opacity: ${config.opacity};
                    transform: scale(1);
                }
                90% {
                    opacity: ${config.opacity};
                }
                100% {
                    transform: translateY(-100px) scale(0);
                    opacity: 0;
                }
            }

            @keyframes shape-morph {
                0%, 100% {
                    border-radius: 50%;
                }
                33% {
                    border-radius: 0%;
                }
                66% {
                    border-radius: 25%;
                }
            }

            @keyframes color-shift {
                0% { background: ${effect.colors[0]}; }
                33% { background: ${effect.colors[1]}; }
                66% { background: ${effect.colors[2]}; }
                100% { background: ${effect.colors[0]}; }
            }

            .floating-shape {
                position: absolute;
                will-change: transform, opacity;
                animation: float-up 15s linear infinite,
                          shape-morph 8s ease-in-out infinite,
                          color-shift 10s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
    }

    static addGradientWavesCSS(effect, config) {
        const style = document.createElement('style');
        style.id = 'dynamic-bg-effects-style';
        style.textContent = `
            @keyframes wave-movement {
                0% {
                    transform: translateX(-100%) skewX(0deg);
                }
                50% {
                    transform: translateX(0%) skewX(5deg);
                }
                100% {
                    transform: translateX(100%) skewX(0deg);
                }
            }

            @keyframes wave-opacity {
                0%, 100% {
                    opacity: ${config.opacity * 0.3};
                }
                50% {
                    opacity: ${config.opacity};
                }
            }

            .gradient-wave {
                position: absolute;
                width: 200vw;
                height: 100vh;
                background: linear-gradient(45deg, transparent, ${effect.colors[0]}40, transparent);
                animation: wave-movement 20s ease-in-out infinite,
                          wave-opacity 15s ease-in-out infinite;
            }

            .gradient-wave:nth-child(1) {
                animation-delay: 0s;
                background: linear-gradient(45deg, transparent, ${effect.colors[0]}30, transparent);
            }

            .gradient-wave:nth-child(2) {
                animation-delay: -7s;
                background: linear-gradient(-45deg, transparent, ${effect.colors[1]}20, transparent);
            }

            .gradient-wave:nth-child(3) {
                animation-delay: -14s;
                background: linear-gradient(135deg, transparent, ${effect.colors[2]}25, transparent);
            }
        `;
        document.head.appendChild(style);
    }

    static addMeshGradientCSS(effect, config) {
        const style = document.createElement('style');
        style.id = 'dynamic-bg-effects-style';
        style.textContent = `
            @keyframes mesh-shift {
                0% {
                    background-position: 0% 0%;
                }
                25% {
                    background-position: 100% 0%;
                }
                50% {
                    background-position: 100% 100%;
                }
                75% {
                    background-position: 0% 100%;
                }
                100% {
                    background-position: 0% 0%;
                }
            }

            .mesh-gradient {
                position: absolute;
                width: 100%;
                height: 100%;
                background: radial-gradient(
                    circle at 20% 20%,
                    ${effect.colors[0]}15 0%,
                    transparent 50%
                ),
                radial-gradient(
                    circle at 80% 40%,
                    ${effect.colors[1]}10 0%,
                    transparent 50%
                ),
                radial-gradient(
                    circle at 60% 80%,
                    ${effect.colors[2]}12 0%,
                    transparent 50%
                );
                background-size: 400% 400%;
                animation: mesh-shift 30s ease-in-out infinite;
                opacity: ${config.opacity};
            }
        `;
        document.head.appendChild(style);
    }

    static createGeometricParticle(effect, config, index) {
        const shapes = ['circle', 'square', 'triangle'];
        const shape = shapes[index % shapes.length];
        const particle = document.createElement('div');
        particle.className = `geometric-particle geometric-${shape}`;
        
        const size = this.randomBetween(8, 24);
        const animationDelay = this.randomBetween(0, 10000);
        const animationDuration = this.randomBetween(12000, 20000);
        const startX = this.randomBetween(0, window.innerWidth);
        const colorIndex = index % effect.colors.length;

        let shapeStyle = '';
        switch (shape) {
            case 'circle':
                shapeStyle = `
                    width: ${size}px;
                    height: ${size}px;
                    border-radius: 50%;
                    background: ${effect.colors[colorIndex]};
                `;
                break;
            case 'square':
                shapeStyle = `
                    width: ${size}px;
                    height: ${size}px;
                    background: ${effect.colors[colorIndex]};
                `;
                break;
            case 'triangle':
                shapeStyle = `
                    border-left: ${size/2}px solid transparent;
                    border-right: ${size/2}px solid transparent;
                    border-bottom: ${size}px solid ${effect.colors[colorIndex]};
                `;
                break;
        }

        particle.style.cssText = `
            left: ${startX}px;
            ${shapeStyle}
            opacity: ${config.opacity};
            animation: 
                geometric-float ${animationDuration}ms linear infinite,
                geometric-pulse ${this.randomBetween(4000, 8000)}ms ease-in-out infinite,
                geometric-drift ${this.randomBetween(8000, 15000)}ms ease-in-out infinite;
            animation-delay: ${animationDelay}ms, ${this.randomBetween(0, 5000)}ms, ${this.randomBetween(0, 3000)}ms;
        `;

        return particle;
    }

    static createFloatingShape(effect, config, shape, index) {
        const element = document.createElement('div');
        element.className = `floating-shape floating-${shape}`;
        
        const size = this.randomBetween(12, 30);
        const animationDelay = this.randomBetween(0, 15000);
        const startX = this.randomBetween(0, window.innerWidth);

        element.style.cssText = `
            left: ${startX}px;
            width: ${size}px;
            height: ${size}px;
            animation-delay: ${animationDelay}ms;
        `;

        return element;
    }

    static createWaveLayer(effect, config, index) {
        const wave = document.createElement('div');
        wave.className = 'gradient-wave';
        wave.style.animationDelay = `${index * -7}s`;
        return wave;
    }

    static createMeshElement(effect, config) {
        const mesh = document.createElement('div');
        mesh.className = 'mesh-gradient';
        return mesh;
    }

    static randomBetween(min, max) {
        return Math.random() * (max - min) + min;
    }

    static destroy() {
        const container = document.getElementById('dynamic-bg-effects');
        if (container) {
            container.remove();
        }
        
        const style = document.getElementById('dynamic-bg-effects-style');
        if (style) {
            style.remove();
        }
    }

    // Auto-detect page type and apply appropriate effect
    static autoInit(options = {}) {
        const path = window.location.pathname.toLowerCase();
        
        let effectType = 'homepage';
        if (path.includes('contact')) {
            effectType = 'contact';
        } else if (path.includes('about')) {
            effectType = 'about';
        } else if (path.includes('dtf') || path.includes('screen-printing') || 
                   path.includes('embroidery') || path.includes('sublimation')) {
            effectType = 'service';
        }
        
        this.init(effectType, options);
    }

    // Interactive effect that responds to mouse movement
    static addInteractiveEffect() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;

            const container = document.getElementById('dynamic-bg-effects');
            if (container) {
                const intensity = 20;
                container.style.transform = `
                    translateX(${(mouseX - 0.5) * intensity}px)
                    translateY(${(mouseY - 0.5) * intensity}px)
                `;
            }
        });
    }

    // Performance monitoring
    static monitorPerformance() {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                if (entry.duration > 16) { // More than 16ms (60fps threshold)
                    console.warn('Background effect performance issue:', entry);
                }
            }
        });
        
        if (typeof PerformanceObserver !== 'undefined') {
            observer.observe({ entryTypes: ['measure'] });
        }
    }
}

// Auto-initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        DynamicBackgroundEffects.autoInit();
        DynamicBackgroundEffects.addInteractiveEffect();
    });
} else {
    DynamicBackgroundEffects.autoInit();
    DynamicBackgroundEffects.addInteractiveEffect();
}

// Expose to global scope
window.DynamicBackgroundEffects = DynamicBackgroundEffects;
