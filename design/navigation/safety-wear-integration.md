# Services Navigation Integration

## Main Services Page Update

### Safety Wear Service Card (for main services page)

```html
<div class="service-card safety-wear">
  <div class="service-icon">
    <img src="/images/icons/safety-vest.svg" alt="Safety Wear Icon">
  </div>
  
  <div class="service-content">
    <h3>Safety Wear & Custom Apparel</h3>
    <p class="service-description">
      CSA/ANSI-compliant safety blanks and custom-branded high-visibility apparel for industrial teams, construction crews, and field workers.
    </p>
    
    <div class="service-highlights">
      <span class="highlight">🦺 CSA Compliant</span>
      <span class="highlight">⚡ Quick Turnaround</span>
      <span class="highlight">📦 Bulk Orders</span>
    </div>
    
    <div class="service-actions">
      <a href="/services/safety-wear" class="btn-learn-more">Learn More</a>
      <button class="btn-quote">Get Quote</button>
    </div>
  </div>
</div>
```

## Navigation Menu Updates

### Main Navigation (Header)
```html
<nav class="main-navigation">
  <ul class="nav-menu">
    <li><a href="/">Home</a></li>
    <li class="dropdown">
      <a href="/services">Services</a>
      <ul class="dropdown-menu">
        <li><a href="/services/dtf-transfers">DTF Heat Transfers</a></li>
        <li><a href="/services/screen-printing">Screen Printing</a></li>
        <li><a href="/services/embroidery">Embroidery</a></li>
        <li><a href="/services/sublimation">Sublimation</a></li>
        <li><a href="/services/safety-wear">Safety Wear</a></li>
        <li><a href="/services/vinyl-cutting">Vinyl Cutting</a></li>
        <li><a href="/services/blank-apparel">Blank Apparel</a></li>
      </ul>
    </li>
    <li><a href="/quote">Get Quote</a></li>
    <li><a href="/gallery">Gallery</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

### Services Breadcrumb Navigation
```html
<nav class="breadcrumb">
  <a href="/">Home</a>
  <span class="separator">></span>
  <a href="/services">Services</a>
  <span class="separator">></span>
  <span class="current">Safety Wear & Custom Apparel</span>
</nav>
```

## Footer Services Links
```html
<div class="footer-services">
  <h4>Our Services</h4>
  <ul>
    <li><a href="/services/dtf-transfers">DTF Heat Transfers</a></li>
    <li><a href="/services/screen-printing">Screen Printing</a></li>
    <li><a href="/services/embroidery">Embroidery</a></li>
    <li><a href="/services/sublimation">Sublimation</a></li>
    <li><a href="/services/safety-wear">Safety Wear & Apparel</a></li>
    <li><a href="/services/vinyl-cutting">Vinyl Cutting</a></li>
    <li><a href="/services/blank-apparel">Blank Apparel</a></li>
  </ul>
</div>
```

## Related Services Cross-Linking

### On Safety Wear Page - Related Services Section
```html
<section class="related-services">
  <div class="container">
    <h2>Perfect Combinations with Safety Wear</h2>
    <div class="related-grid">
      <div class="related-service">
        <h4>Custom Embroidery</h4>
        <p>Add professional logos and names to safety gear</p>
        <a href="/services/embroidery">Learn More</a>
      </div>
      
      <div class="related-service">
        <h4>Screen Printing</h4>
        <p>Bulk logo printing for safety apparel</p>
        <a href="/services/screen-printing">Learn More</a>
      </div>
      
      <div class="related-service">
        <h4>Vinyl Applications</h4>
        <p>Reflective and high-vis vinyl for safety compliance</p>
        <a href="/services/vinyl-cutting">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

## URL Structure & Routing

```
Website Structure:
├── /services (main services page)
│   ├── /dtf-transfers
│   ├── /screen-printing  
│   ├── /embroidery
│   ├── /sublimation
│   ├── /safety-wear ← NEW PAGE
│   ├── /vinyl-cutting
│   └── /blank-apparel
```

## CSS for Service Card Integration

```css
/* Service Card Styling */
.service-card.safety-wear {
  border-left: 4px solid #f59e0b; /* Safety orange accent */
}

.service-card.safety-wear .service-icon {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
}

.service-highlights {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.highlight {
  font-size: 0.8rem;
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.service-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn-learn-more {
  background: #f59e0b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s ease;
}

.btn-learn-more:hover {
  background: #d97706;
}

.btn-quote {
  background: transparent;
  color: #f59e0b;
  border: 2px solid #f59e0b;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-quote:hover {
  background: #f59e0b;
  color: white;
}

/* Navigation Dropdown */
.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 1000;
}

.dropdown-menu li {
  list-style: none;
}

.dropdown-menu a {
  display: block;
  padding: 0.5rem 1rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.2s ease;
}

.dropdown-menu a:hover {
  background: #f3f4f6;
  color: #f59e0b;
}

/* Breadcrumb Navigation */
.breadcrumb {
  padding: 1rem 0;
  font-size: 0.9rem;
  color: #6b7280;
}

.breadcrumb a {
  color: #f59e0b;
  text-decoration: none;
}

.breadcrumb a:hover {
  text-decoration: underline;
}

.separator {
  margin: 0 0.5rem;
  color: #d1d5db;
}

.current {
  color: #374151;
  font-weight: 500;
}
```

## Analytics & Tracking

```javascript
// Track Safety Wear page visits
gtag('event', 'page_view', {
  page_title: 'Safety Wear Services',
  page_location: '/services/safety-wear'
});

// Track Learn More clicks
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btn-learn-more')) {
    gtag('event', 'click', {
      event_category: 'Service Navigation',
      event_label: 'Safety Wear Learn More'
    });
  }
});
```

## SEO Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Safety Wear & Custom Apparel",
  "description": "CSA/ANSI-compliant safety wear and custom branded high-visibility apparel",
  "provider": {
    "@type": "Organization",
    "name": "PrintGuys"
  },
  "serviceType": "Custom Printing",
  "areaServed": "Canada",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Safety Wear Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "High-Visibility Safety Vests"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Product",
          "name": "Custom Branded Safety Apparel"
        }
      }
    ]
  }
}
```

---

**Implementation Priority**: 
1. Add safety wear card to main services page
2. Update navigation menus
3. Create the dedicated safety wear page
4. Add cross-linking between related services
5. Implement tracking and analytics

**Key Benefits**:
- Dedicated page for detailed safety wear information
- Seamless navigation integration
- Cross-selling opportunities with related services
- Professional presentation for B2B clients
- SEO optimization for safety wear keywords
