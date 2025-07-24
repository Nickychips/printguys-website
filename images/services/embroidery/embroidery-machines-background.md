# Embroidery Machine Background Image

## Original Image Details
- **Source**: PrintGuys facility photo - Industrial embroidery machines
- **Equipment Visible**: Multi-head commercial embroidery machines
- **Setting**: Professional production environment
- **Quality**: High-resolution production photo

## Usage Guidelines

### Background Implementation
- **Primary Use**: Services page embroidery section background
- **Style**: Hero background with overlay for text readability
- **Effect**: Professional, industrial feel showcasing capabilities

### Technical Specifications

#### Web Optimization Required
```
Original: embroidery-machines-original.jpg
Optimized Versions:
├── embroidery-machines-hero-1920.webp     (Hero backgrounds)
├── embroidery-machines-hero-1200.webp     (Tablet)
├── embroidery-machines-hero-800.webp      (Mobile)
└── embroidery-machines-hero-400.webp      (Mobile small)
```

#### CSS Implementation
```css
.embroidery-hero {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('/images/services/embroidery/embroidery-machines-hero-1920.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
}

@media (max-width: 768px) {
  .embroidery-hero {
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url('/images/services/embroidery/embroidery-machines-hero-800.webp');
    background-attachment: scroll; /* Better mobile performance */
  }
}
```

## Design Integration

### Color Scheme Enhancement
- **Primary Colors**: Green (machines) and Navy (hats) from photo
- **Accent**: White thread spools for CTAs
- **Text Overlay**: White text with subtle shadow for readability

### Content Overlay Strategy
```html
<section class="embroidery-hero">
  <div class="hero-overlay">
    <h2>Professional Embroidery Services</h2>
    <p>Industrial-grade multi-head machines for precision embroidery</p>
    <div class="features">
      <span>Custom Logos</span>
      <span>Bulk Orders</span>
      <span>Fast Turnaround</span>
    </div>
    <button class="cta-button">Get Quote</button>
  </div>
</section>
```

## Image Processing Steps

1. **Crop/Frame**: Focus on the machines while maintaining workspace context
2. **Exposure**: Slightly brighten for web use
3. **Contrast**: Enhance machine details
4. **Compress**: Optimize for fast loading
5. **WebP Conversion**: Modern format for better compression

## Brand Message Enhancement
This image effectively communicates:
- **Professional Equipment**: Serious production capabilities
- **Scale**: Multiple machines = high volume capacity
- **Quality**: Clean, organized workspace
- **Expertise**: Industrial-grade embroidery services

## Competitive Advantage
Unlike competitors showing simple setups, this demonstrates:
- Commercial-grade equipment
- Professional production environment
- Capacity for large orders
- Investment in quality machinery

---
*Image optimization and implementation pending upload of source file*
