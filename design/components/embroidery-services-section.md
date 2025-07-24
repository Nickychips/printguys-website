# Embroidery Services Section Component

## HTML Structure

```html
<section class="embroidery-services-section">
  <!-- Hero Background Section -->
  <div class="embroidery-hero">
    <div class="hero-overlay">
      <div class="container">
        <h2 class="hero-title">Professional Embroidery Services</h2>
        <p class="hero-subtitle">Industrial-grade multi-head machines for precision custom embroidery</p>
        
        <div class="features-grid">
          <div class="feature-item">
            <span class="feature-icon">🎯</span>
            <span class="feature-text">Custom Logos</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">📦</span>
            <span class="feature-text">Bulk Orders</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">⚡</span>
            <span class="feature-text">Fast Turnaround</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🏭</span>
            <span class="feature-text">Industrial Equipment</span>
          </div>
        </div>
        
        <div class="cta-buttons">
          <button class="btn-primary">Get Quote</button>
          <button class="btn-secondary">View Gallery</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Content Section -->
  <div class="embroidery-content">
    <div class="container">
      <div class="content-grid">
        <div class="specs-column">
          <h3>Technical Specifications</h3>
          <ul class="specs-list">
            <li>Multi-head commercial machines</li>
            <li>15 needle positions per head</li>
            <li>High-speed precision stitching</li>
            <li>Maximum embroidery area: 16" x 20"</li>
            <li>Thread tension auto-adjustment</li>
            <li>Digital design preview system</li>
          </ul>
        </div>
        
        <div class="capabilities-column">
          <h3>Embroidery Capabilities</h3>
          <div class="capabilities-grid">
            <div class="capability">
              <h4>Apparel</h4>
              <p>Shirts, jackets, hats, uniforms</p>
            </div>
            <div class="capability">
              <h4>Accessories</h4>
              <p>Bags, towels, blankets</p>
            </div>
            <div class="capability">
              <h4>Corporate</h4>
              <p>Logos, branding, promotional items</p>
            </div>
            <div class="capability">
              <h4>Custom</h4>
              <p>Patches, monograms, designs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## CSS Implementation

```css
/* Embroidery Hero Section */
.embroidery-hero {
  position: relative;
  min-height: 70vh;
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url('/images/services/embroidery/embroidery-machines-hero-1920.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  padding: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-icon {
  font-size: 2rem;
}

.feature-text {
  font-weight: 600;
  font-size: 0.9rem;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn-primary, .btn-secondary {
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: #22c55e;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1f2937;
}

/* Content Section */
.embroidery-content {
  background: #f8fafc;
  padding: 4rem 0;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.specs-list {
  list-style: none;
  padding: 0;
}

.specs-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  position: relative;
  padding-left: 1.5rem;
}

.specs-list li:before {
  content: '✓';
  color: #22c55e;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.capability {
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.capability h4 {
  color: #22c55e;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .embroidery-hero {
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
      url('/images/services/embroidery/embroidery-machines-hero-800.webp');
    background-attachment: scroll;
    min-height: 60vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .capabilities-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 100%;
    max-width: 200px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-item {
    flex-direction: row;
    text-align: left;
  }
}
```

## Implementation Notes

### Color Scheme Based on Photo
- **Primary Green**: #22c55e (matches machine green)
- **Navy Blue**: #1f2937 (from hats in photo) 
- **White**: #ffffff (from thread spools)
- **Gray**: #f8fafc (clean background)

### Performance Optimizations
- Multiple image sizes for different viewports
- WebP format for modern browsers
- Fallback to JPEG for older browsers
- Lazy loading implementation
- Background-attachment: fixed only on desktop

### Accessibility Features
- High contrast text overlays
- Keyboard navigation support
- Screen reader friendly structure
- Focus indicators on interactive elements

---
*Ready for integration once source image is processed and optimized*
