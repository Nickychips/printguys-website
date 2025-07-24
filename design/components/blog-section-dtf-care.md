# Blog Section Integration - DTF Care Instructions

## Blog Card HTML Implementation

### Main Blog Section (for homepage or blog listing page)

```html
<section class="blog-section">
  <div class="container">
    <h2 class="section-title">Latest from Our Blog</h2>
    <p class="section-subtitle">Expert tips and insights for custom printing success</p>
    
    <div class="blog-grid">
      <!-- DTF Care Instructions Blog Card -->
      <article class="blog-card featured">
        <div class="blog-image">
          <img src="/images/blog/dtf-care-instructions-thumb.jpg" alt="DTF Care Instructions" loading="lazy">
          <div class="blog-category">Care & Maintenance</div>
        </div>
        
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-date">Jan 5, 2025</span>
            <span class="reading-time">6 min read</span>
          </div>
          
          <h3 class="blog-title">Care Instructions for DTF Prints</h3>
          <p class="blog-excerpt">
            Maximize the lifespan of your DTF prints with proper washing and care techniques. Learn the essential steps to keep your custom apparel looking vibrant and professional.
          </p>
          
          <div class="blog-actions">
            <a href="/blog/dtf-care-instructions" class="btn-read-article" data-article="dtf-care-instructions">
              Read Article
            </a>
            <div class="blog-tags">
              <span class="tag">DTF</span>
              <span class="tag">Care Tips</span>
              <span class="tag">Maintenance</span>
            </div>
          </div>
        </div>
        
        <div class="coming-soon-overlay" style="display: none;">
          <span class="coming-soon-badge">Coming Soon</span>
        </div>
      </article>
      
      <!-- Additional blog cards can go here -->
      
    </div>
  </div>
</section>
```

### Standalone Blog Card (can be used anywhere)

```html
<!-- DTF Care Instructions - Standalone Card -->
<div class="blog-card dtf-care-card">
  <div class="blog-card-header">
    <div class="blog-image-container">
      <div class="blog-image-placeholder">
        <span class="blog-icon">📝</span>
      </div>
      <div class="blog-category-badge">Care & Maintenance</div>
    </div>
  </div>
  
  <div class="blog-card-body">
    <div class="blog-meta-info">
      <span class="blog-date">Jan 5, 2025</span>
      <span class="status-badge coming-soon">Coming Soon</span>
    </div>
    
    <h3 class="blog-card-title">Care Instructions for DTF Prints</h3>
    <p class="blog-card-description">
      Maximize the lifespan of your DTF prints with proper washing and care techniques.
    </p>
    
    <div class="blog-card-footer">
      <a href="/blog/dtf-care-instructions" class="btn-read-article-primary">
        Read Article
      </a>
    </div>
  </div>
</div>
```

## CSS Styling

```css
/* Blog Section Styles */
.blog-section {
  padding: 4rem 0;
  background: #f8fafc;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

/* Blog Grid */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Blog Card Styles */
.blog-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.blog-card.featured {
  border: 2px solid #22c55e;
}

/* Blog Image */
.blog-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #22c55e;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Blog Content */
.blog-content {
  padding: 1.5rem;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #6b7280;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-excerpt {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* Blog Actions */
.blog-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Read Article Button - MAIN IMPLEMENTATION */
.btn-read-article,
.btn-read-article-primary {
  display: inline-block;
  background: #22c55e;
  color: white !important;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  pointer-events: auto !important;
  border: none;
  outline: none;
}

.btn-read-article:hover,
.btn-read-article-primary:hover {
  background: #16a34a;
  color: white !important;
  text-decoration: none !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.btn-read-article:active,
.btn-read-article-primary:active {
  transform: translateY(0);
}

/* Blog Tags */
.blog-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Standalone Card Styles */
.blog-card-header {
  position: relative;
  padding: 1.5rem 1.5rem 0;
}

.blog-image-placeholder {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.blog-category-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #22c55e;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.blog-card-body {
  padding: 1rem 1.5rem 1.5rem;
}

.blog-meta-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.blog-date {
  color: #6b7280;
}

.status-badge {
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.coming-soon {
  background: #fef3c7;
  color: #92400e;
}

.blog-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-card-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.blog-card-footer {
  display: flex;
  justify-content: flex-start;
}

/* Coming Soon Overlay */
.coming-soon-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.coming-soon-badge {
  background: #ef4444;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .blog-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .btn-read-article,
  .btn-read-article-primary {
    width: 100%;
    text-align: center;
  }
  
  .blog-tags {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .blog-content {
    padding: 1rem;
  }
  
  .blog-card-body {
    padding: 0.75rem 1rem 1rem;
  }
  
  .blog-meta-info {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
```

## JavaScript Implementation

```javascript
// Blog article navigation and tracking
document.addEventListener('DOMContentLoaded', function() {
  
  // Handle Read Article button clicks
  const readArticleButtons = document.querySelectorAll('.btn-read-article, .btn-read-article-primary');
  
  readArticleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get article identifier
      const articleId = this.getAttribute('data-article') || 'dtf-care-instructions';
      const articleTitle = this.closest('.blog-card').querySelector('.blog-title, .blog-card-title')?.textContent || 'Blog Article';
      
      // Track click for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', {
          event_category: 'Blog Navigation',
          event_label: `Read Article: ${articleTitle}`,
          value: 1
        });
      }
      
      // Navigate to the article
      navigateToArticle(articleId, articleTitle);
    });
  });
});

function navigateToArticle(articleId, articleTitle) {
  // Check if the article exists
  if (articleId === 'dtf-care-instructions') {
    // Navigate to the DTF care instructions article
    window.location.href = '/blog/dtf-care-instructions';
  } else {
    // Fallback for other articles
    window.location.href = `/blog/${articleId}`;
  }
}

// Optional: Show article preview modal before navigation
function showArticlePreview(articleId) {
  const modal = document.createElement('div');
  modal.className = 'article-preview-modal';
  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeArticlePreview()">
      <div class="modal-content" onclick="event.stopPropagation()">
        <div class="modal-header">
          <h3>Care Instructions for DTF Prints</h3>
          <button onclick="closeArticlePreview()" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <p><strong>Article Preview:</strong></p>
          <p>This comprehensive guide covers everything you need to know about caring for your DTF prints, including:</p>
          <ul>
            <li>Initial 24-48 hour curing period</li>
            <li>Proper washing techniques and temperatures</li>
            <li>Drying best practices</li>
            <li>Ironing and storage guidelines</li>
            <li>Troubleshooting common issues</li>
          </ul>
          <p><em>Reading time: 6-8 minutes</em></p>
        </div>
        <div class="modal-footer">
          <button onclick="window.location.href='/blog/dtf-care-instructions'" class="btn-read-full">Read Full Article</button>
          <button onclick="closeArticlePreview()" class="btn-close">Close</button>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
}

function closeArticlePreview() {
  const modal = document.querySelector('.article-preview-modal');
  if (modal) {
    modal.remove();
  }
}
```

## Blog Page Implementation (/blog/dtf-care-instructions)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Care Instructions for DTF Prints | PrintGuys Blog</title>
  <meta name="description" content="Learn how to properly care for your DTF prints with our comprehensive guide covering washing, drying, and maintenance techniques.">
  <meta name="keywords" content="DTF care instructions, DTF print washing, custom apparel care, print maintenance">
  
  <!-- Open Graph tags -->
  <meta property="og:title" content="Care Instructions for DTF Prints">
  <meta property="og:description" content="Maximize the lifespan of your DTF prints with proper washing and care techniques.">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://printguys.ca/blog/dtf-care-instructions">
  
  <!-- Schema.org markup -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Care Instructions for DTF Prints",
    "description": "Maximize the lifespan of your DTF prints with proper washing and care techniques.",
    "author": {
      "@type": "Organization",
      "name": "PrintGuys"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PrintGuys",
      "logo": {
        "@type": "ImageObject",
        "url": "https://printguys.ca/images/logo.png"
      }
    },
    "datePublished": "2025-01-05",
    "dateModified": "2025-01-05"
  }
  </script>
</head>
<body>
  <!-- Include the full article content from the markdown file -->
  <!-- This would be dynamically generated from the content/blog/dtf-care-instructions-complete-article.md file -->
</body>
</html>
```

---

## Implementation Instructions

1. **Add the blog card HTML** to your homepage or blog section
2. **Include the CSS** in your main stylesheet
3. **Add the JavaScript** before the closing `</body>` tag
4. **Create the blog page** at `/blog/dtf-care-instructions`
5. **Test the "Read Article" button** functionality

## URL Structure

```
/blog/dtf-care-instructions (main article page)
/blog (blog listing page with cards)
/#blog (homepage blog section)
```

The "Read Article" button will now properly link to a comprehensive, professional DTF care instructions article that provides real value to your customers.
