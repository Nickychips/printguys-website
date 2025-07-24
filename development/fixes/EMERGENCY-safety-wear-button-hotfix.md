# 🚨 EMERGENCY HOTFIX: Safety Wear Learn More Button

## Immediate Copy & Paste Fix

**Problem**: The "Learn More" button for safety wear is not working.

**Solution**: Copy and paste this code directly into your website.

### 1. Quick HTML Fix (Replace existing safety wear card)

```html
<!-- Safety Wear Service Card - WORKING VERSION -->
<div class="service-card safety-wear-working">
  <div class="service-icon">
    <span style="font-size: 3rem; color: #f59e0b;">🦺</span>
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
      <!-- FIXED LEARN MORE BUTTON -->
      <a href="#safety-wear-details" 
         class="btn-learn-more-fixed" 
         onclick="showSafetyWearDetails(); return false;">
        Learn More
      </a>
      <button class="btn-quote" onclick="requestQuote('safety-wear')">
        Get Quote
      </button>
    </div>
  </div>
</div>

<!-- Safety Wear Details Section (Hidden by default) -->
<div id="safety-wear-details" style="display: none; background: #f8fafc; padding: 2rem; margin: 2rem 0; border-radius: 8px; border-left: 4px solid #f59e0b;">
  <h3 style="color: #f59e0b; margin-bottom: 1rem;">Safety Wear & Custom Branded Apparel</h3>
  
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
    <div>
      <h4>Safety Wear Blanks</h4>
      <ul>
        <li>High-visibility vests</li>
        <li>Reflective jackets and hoodies</li>
        <li>Long-sleeve safety tees</li>
        <li>Flame-resistant garments</li>
        <li>Coveralls and work pants</li>
      </ul>
    </div>
    
    <div>
      <h4>Custom Branding Options</h4>
      <ul>
        <li>Screen printing for logos & slogans</li>
        <li>Heat transfer applications</li>
        <li>Embroidery for professional finish</li>
        <li>Individual naming & departments</li>
        <li>Bulk orders & quick turnaround</li>
      </ul>
    </div>
  </div>
  
  <div style="text-align: center;">
    <button onclick="requestQuote('safety-wear')" style="background: #f59e0b; color: white; padding: 1rem 2rem; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
      Get Safety Wear Quote
    </button>
    <button onclick="hideSafetyWearDetails()" style="background: transparent; color: #f59e0b; border: 2px solid #f59e0b; padding: 1rem 2rem; border-radius: 6px; font-weight: bold; cursor: pointer; margin-left: 1rem;">
      Close Details
    </button>
  </div>
</div>
```

### 2. Quick CSS Fix (Add this to your stylesheet)

```css
/* EMERGENCY CSS FIX FOR SAFETY WEAR BUTTON */
.btn-learn-more-fixed {
  display: inline-block !important;
  background: #f59e0b !important;
  color: white !important;
  padding: 0.75rem 1.5rem !important;
  border-radius: 6px !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.3s ease !important;
  pointer-events: auto !important;
  z-index: 999 !important;
  position: relative !important;
}

.btn-learn-more-fixed:hover {
  background: #d97706 !important;
  color: white !important;
  text-decoration: none !important;
  transform: translateY(-1px);
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

.btn-quote {
  background: transparent;
  color: #f59e0b;
  border: 2px solid #f59e0b;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-quote:hover {
  background: #f59e0b;
  color: white;
}
```

### 3. Quick JavaScript Fix (Add this script)

```html
<script>
// EMERGENCY JAVASCRIPT FIX FOR SAFETY WEAR
function showSafetyWearDetails() {
  console.log('Showing safety wear details...');
  
  // Hide the details section first
  const detailsSection = document.getElementById('safety-wear-details');
  if (detailsSection) {
    detailsSection.style.display = 'block';
    
    // Smooth scroll to the details section
    detailsSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    // Track the click for analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        event_category: 'Service Details',
        event_label: 'Safety Wear Learn More'
      });
    }
  } else {
    console.error('Safety wear details section not found!');
    // Fallback: redirect to contact page or show alert
    alert('More information about safety wear services is available. Please contact us for details!');
  }
}

function hideSafetyWearDetails() {
  const detailsSection = document.getElementById('safety-wear-details');
  if (detailsSection) {
    detailsSection.style.display = 'none';
  }
}

function requestQuote(service) {
  console.log('Requesting quote for:', service);
  
  // Track the request
  if (typeof gtag !== 'undefined') {
    gtag('event', 'click', {
      event_category: 'Quote Request',
      event_label: service
    });
  }
  
  // Multiple options for quote handling:
  
  // Option 1: Redirect to quote page with service pre-selected
  window.location.href = `/quote?service=${service}`;
  
  // Option 2: Open email client
  // window.location.href = `mailto:info@printguys.ca?subject=Quote Request: ${service}&body=Hi, I would like a quote for ${service} services.`;
  
  // Option 3: Phone call prompt
  // if (confirm('Would you like to call us now for an immediate quote?')) {
  //   window.location.href = 'tel:+1-800-PRINTGUYS';
  // }
  
  // Option 4: Show a simple form modal
  // showQuoteModal(service);
}

// Optional: Enhanced quote modal
function showQuoteModal(service) {
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
      <div style="background: white; padding: 2rem; border-radius: 8px; max-width: 400px; width: 90%;">
        <h3 style="margin-bottom: 1rem; color: #f59e0b;">Request ${service} Quote</h3>
        <form onsubmit="submitQuoteForm(event, '${service}')">
          <input type="text" placeholder="Your Name" required style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <input type="email" placeholder="Email Address" required style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <textarea placeholder="Tell us about your ${service} needs..." style="width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px; height: 80px;"></textarea>
          <div style="text-align: right;">
            <button type="button" onclick="this.closest('div').parentElement.remove()" style="background: #ccc; color: #333; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-right: 0.5rem;">Cancel</button>
            <button type="submit" style="background: #f59e0b; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px;">Send Quote Request</button>
          </div>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function submitQuoteForm(event, service) {
  event.preventDefault();
  alert('Quote request submitted! We will contact you soon.');
  event.target.closest('div').parentElement.remove();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('Safety wear button fix loaded successfully!');
});
</script>
```

## 4. One-Line Emergency Fix

If you just need the button to work immediately, add this single line of JavaScript:

```html
<script>
document.addEventListener('DOMContentLoaded', function() {
  const safetyButton = document.querySelector('.safety-wear .btn-learn-more, .btn-learn-more');
  if (safetyButton) {
    safetyButton.onclick = function() { 
      alert('Safety Wear Services: CSA/ANSI compliant safety blanks, custom branding, bulk orders available. Contact us for details!'); 
      return false; 
    };
  }
});
</script>
```

## 5. Installation Instructions

1. **Copy the HTML** code and replace your existing safety wear service card
2. **Add the CSS** to your main stylesheet or in a `<style>` tag
3. **Add the JavaScript** before the closing `</body>` tag
4. **Test** by clicking the "Learn More" button

## 6. Expected Result

When working correctly:
- ✅ "Learn More" button shows detailed safety wear information
- ✅ "Get Quote" button opens quote request
- ✅ Smooth scrolling and professional presentation
- ✅ Analytics tracking (if Google Analytics is set up)

---

**Implementation Time**: 5 minutes  
**Testing Time**: 2 minutes  
**Status**: Ready for immediate deployment  

This hotfix provides a working "Learn More" button that expands to show detailed safety wear information directly on the current page, avoiding the need for a separate page while you're developing the full site structure.
