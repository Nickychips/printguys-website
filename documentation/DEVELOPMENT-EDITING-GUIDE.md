# PrintGuys Website - Development & Editing Guide

*Last Updated: July 22, 2025*

## 📖 COMPREHENSIVE EDITING GUIDE

This guide provides step-by-step instructions for making changes to the PrintGuys website, including code modifications, content updates, and new feature implementation.

---

## 🎯 QUICK REFERENCE

### File Structure Overview
```
development/frontend/
├── index.html                  # Main homepage (deployment root)
├── pages/                      # Individual page files
├── components/                 # Reusable components
├── assets/                     # Images, fonts, static files
└── js/                        # JavaScript modules
```

### Common Editing Tasks
- [Content Updates](#content-updates)
- [Adding New Pages](#adding-new-pages)
- [Modifying Components](#modifying-components)
- [Styling Changes](#styling-changes)
- [JavaScript Modifications](#javascript-modifications)

---

## 📝 CONTENT UPDATES

### Updating Page Content

#### Homepage Hero Section
**Location**: `development/frontend/index.html`
**Section**: Lines ~50-80

```html
<!-- Hero Section - Main headline and CTA -->
<section class="bg-black text-white py-20">
  <div class="container mx-auto px-6 text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">
      Canada's Largest DTF Printer
    </h1>
    <p class="text-xl md:text-2xl mb-8 text-gray-300">
      Professional quality transfers at $0.025/sq inch • No minimums • 24-48 hour turnaround
    </p>
    <a href="/contact" class="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
      Get Your Quote Today
    </a>
  </div>
</section>
```

**To Edit**:
1. Modify the `<h1>` text for main headline
2. Update the `<p>` text for value propositions
3. Change the CTA button text and link destination

#### Service Pricing Updates
**Location**: Multiple files - use find/replace
**Current Pricing**:
- DTF: $0.025/sq inch
- Screen Print: $2.50/piece
- Embroidery: $8.00/piece
- Sublimation: $1.25/piece

**Update Process**:
1. Search for current price (e.g., "$0.025")
2. Replace with new price across all files
3. Update service cards in homepage and about page
4. Verify pricing consistency across all pages

### Updating Company Information

#### Contact Details
**Files to Update**:
- `development/frontend/pages/contact.html`
- `development/frontend/pages/about.html`
- Footer sections in all pages

**Information to Update**:
```html
<!-- Contact Information Template -->
<div class="contact-info">
  <p><strong>Email:</strong> info@printguys.ca</p>
  <p><strong>Phone:</strong> 1-800-PRINT-GUY</p>
  <p><strong>Address:</strong> [Business Address]</p>
  <p><strong>Hours:</strong> Mon-Fri 8AM-6PM EST</p>
</div>
```

#### Business Hours and Policies
**Location**: About page and FAQ sections
**Common Updates**:
- Production times (currently 24-48 hours)
- Minimum order policies (currently no minimums)
- Shipping information
- Return/refund policies

---

## 🆕 ADDING NEW PAGES

### Step-by-Step Process

#### 1. Create New HTML File
**Location**: `development/frontend/pages/`
**Template**: Copy from existing page structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Page-specific description">
  <title>Page Title - PrintGuys.ca</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Copy full head section from existing page -->
</head>
<body class="bg-black text-white min-h-screen">
  <!-- Copy navigation from existing page -->
  
  <!-- Main content section -->
  <main>
    <!-- Your new content here -->
  </main>
  
  <!-- Copy footer from existing page -->
  
  <!-- Copy JavaScript section from existing page -->
</body>
</html>
```

#### 2. Update Navigation
**Files to Update**: All pages with navigation
**Location**: Navigation section in each HTML file

```html
<!-- Add new menu item -->
<nav class="hidden md:flex space-x-8">
  <a href="/" class="hover:text-red-400 transition-colors">Home</a>
  <a href="/about" class="hover:text-red-400 transition-colors">About</a>
  <a href="/services" class="hover:text-red-400 transition-colors">Services</a>
  <a href="/new-page" class="hover:text-red-400 transition-colors">New Page</a>
  <a href="/contact" class="hover:text-red-400 transition-colors">Contact</a>
</nav>
```

#### 3. Configure URL Routing
**File**: Root level `netlify.toml`
**Add Redirect Rule**:

```toml
[[redirects]]
  from = "/new-page"
  to = "/pages/new-page.html"
  status = 200
```

#### 4. Update SEO Elements
- Add unique meta description
- Update page title
- Add Open Graph tags
- Include relevant keywords

---

## 🔧 MODIFYING COMPONENTS

### Component Architecture
Components are self-contained HTML blocks with embedded CSS and JavaScript. Maximum 250 lines per component.

### Updating Services Grid
**Location**: `development/frontend/components/content/services-grid.html`

#### Adding New Service
```html
<!-- Service Card Template -->
<div class="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-red-500 transition-colors">
  <div class="mb-4">
    <h3 class="text-xl font-bold text-red-400 mb-2">Service Name</h3>
    <p class="text-gray-300 text-sm mb-4">Service description</p>
    <p class="text-2xl font-bold text-white">$X.XX<span class="text-sm text-gray-400">/unit</span></p>
  </div>
  <ul class="text-gray-300 text-sm space-y-1 mb-6">
    <li>• Feature 1</li>
    <li>• Feature 2</li>
    <li>• Feature 3</li>
  </ul>
  <a href="/contact" class="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded transition-colors">
    Get Quote
  </a>
</div>
```

#### Updating Existing Service
1. Locate the service card in services-grid.html
2. Modify pricing, features, or description
3. Update the same service information in about.html if present
4. Test responsiveness on mobile devices

### Form Components
**Location**: `development/frontend/components/forms/`

#### Contact Form Modifications
**Common Changes**:
- Adding new form fields
- Modifying validation rules
- Updating form styling
- Changing submission behavior

```html
<!-- New Form Field Template -->
<div class="mb-4">
  <label for="field-name" class="block text-sm font-medium text-gray-300 mb-2">
    Field Label
  </label>
  <input 
    type="text" 
    id="field-name" 
    name="fieldName" 
    required 
    class="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
    placeholder="Enter value"
  >
  <span class="error-message text-red-400 text-sm hidden"></span>
</div>
```

---

## 🎨 STYLING CHANGES

### Using Tailwind CSS Classes

#### Color System
- **Primary Red**: `bg-red-600`, `text-red-400`
- **Background**: `bg-black`, `bg-gray-900`
- **Text**: `text-white`, `text-gray-300`
- **Borders**: `border-gray-700`, `border-red-500`

#### Common Layout Modifications

#### Spacing Adjustments
```html
<!-- Padding/Margin Options -->
<div class="p-4">      <!-- 16px all sides -->
<div class="py-8">     <!-- 32px top/bottom -->
<div class="px-6">     <!-- 24px left/right -->
<div class="mb-6">     <!-- 24px bottom margin -->
```

#### Responsive Design
```html
<!-- Responsive Text Sizes -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">Responsive Heading</h1>

<!-- Responsive Layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

#### Button Styling
```html
<!-- Primary Button -->
<button class="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">

<!-- Secondary Button -->
<button class="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white py-3 px-6 rounded-lg transition-colors">
```

### Custom CSS (When Necessary)
If Tailwind classes aren't sufficient, add custom CSS within `<style>` tags:

```html
<style>
.custom-animation {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .mobile-specific {
    display: block;
  }
}
</style>
```

---

## 💻 JAVASCRIPT MODIFICATIONS

### Common JavaScript Patterns

#### Mobile Menu Toggle
```javascript
// Standard mobile menu implementation
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isHidden = mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden', !isHidden);
      mobileMenuBtn.setAttribute('aria-expanded', isHidden);
    });
  }
});
```

#### Form Validation
```javascript
// Form validation function
function validateForm(formId) {
  const form = document.getElementById(formId);
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    const errorSpan = field.parentNode.querySelector('.error-message');
    
    if (!field.value.trim()) {
      field.classList.add('border-red-500');
      if (errorSpan) {
        errorSpan.textContent = 'This field is required';
        errorSpan.classList.remove('hidden');
      }
      isValid = false;
    } else {
      field.classList.remove('border-red-500');
      if (errorSpan) {
        errorSpan.classList.add('hidden');
      }
    }
  });
  
  return isValid;
}
```

#### FAQ Accordion
```javascript
// FAQ toggle functionality
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    const isOpen = !answer.classList.contains('hidden');
    
    // Close all other answers
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'));
    
    // Toggle current answer
    answer.classList.toggle('hidden', isOpen);
  });
});
```

### Adding New Interactive Features

#### Smooth Scroll Navigation
```javascript
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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
```

#### Image Lazy Loading
```javascript
// Intersection Observer for lazy loading
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

---

## 🔍 TESTING & VALIDATION

### Pre-Deployment Checklist

#### Content Validation
- [ ] All text content is accurate and up-to-date
- [ ] Contact information is correct
- [ ] Pricing information is current
- [ ] All links work correctly

#### Technical Validation
- [ ] HTML validates without errors
- [ ] All images load properly
- [ ] Mobile menu functions correctly
- [ ] Forms submit and validate properly
- [ ] Page loads under 3 seconds

#### Cross-Browser Testing
- [ ] Chrome (desktop and mobile)
- [ ] Firefox (desktop and mobile)
- [ ] Safari (desktop and mobile)
- [ ] Edge (desktop)

#### Accessibility Testing
- [ ] All images have alt text
- [ ] Forms are properly labeled
- [ ] Color contrast meets WCAG guidelines
- [ ] Keyboard navigation works

### Testing Tools

#### Browser Developer Tools
```javascript
// Console commands for testing
console.log('Page load time:', performance.now());
console.log('Images without alt text:', document.querySelectorAll('img:not([alt])'));
console.log('Forms without labels:', document.querySelectorAll('input:not([aria-label]):not([id])'));
```

#### Performance Testing
- Use Lighthouse in Chrome DevTools
- Test on slow 3G connection
- Verify Core Web Vitals scores

---

## 🚀 DEPLOYMENT PROCESS

### Automatic Deployment (Netlify)
1. Push changes to main branch in GitHub
2. Netlify automatically detects changes
3. Site rebuilds and deploys (usually 1-2 minutes)
4. Verify changes at production URL

### Manual Verification Steps
1. Test all modified pages
2. Verify mobile functionality
3. Check form submissions
4. Test navigation between pages
5. Confirm SEO elements are correct

### Rollback Procedure
If issues are found after deployment:
1. Identify the problematic commit in GitHub
2. Revert the commit or push a fix
3. Netlify will automatically redeploy
4. Monitor for successful resolution

---

## 🛠️ MAINTENANCE TASKS

### Regular Updates (Monthly)
- [ ] Review and update contact information
- [ ] Check for broken links
- [ ] Update pricing if changed
- [ ] Review and refresh content
- [ ] Monitor site performance metrics

### Quarterly Reviews
- [ ] Comprehensive SEO audit
- [ ] User experience testing
- [ ] Performance optimization review
- [ ] Security updates and patches
- [ ] Content strategy assessment

### Emergency Procedures
- **Site Down**: Check Netlify status, verify DNS settings
- **Form Issues**: Test form validation, check submission endpoints
- **Performance Issues**: Review recent changes, check image sizes
- **Mobile Problems**: Test on actual devices, verify responsive CSS

---

## 📚 RESOURCES & REFERENCES

### Documentation Links
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Netlify Deploy Documentation](https://docs.netlify.com/)

### Code Examples Repository
All code examples and templates are maintained in:
- `documentation/code-templates/`
- `components/` directories for reusable elements

### Getting Help
1. Check `documentation/PROBLEM-TRACKING.md` for common issues
2. Review existing code patterns in similar components
3. Test changes in development before deployment
4. Use browser developer tools for debugging

---

## 📝 CHANGE LOG TEMPLATE

When making significant changes, document them:

```markdown
## Change Log Entry - [Date]

### Changes Made
- [Description of changes]
- [Files modified]
- [Reason for change]

### Testing Performed
- [Testing steps taken]
- [Browsers/devices tested]
- [Results]

### Impact
- [User-facing changes]
- [Performance impact]
- [SEO considerations]
```

---

*This guide is updated regularly with new patterns and solutions. Always reference the latest version when making website modifications.*
