# Shimmering Background Effects Implementation Guide

## Overview

This guide explains how to implement the shimmering background effects across all PrintGuys service pages. The effect creates subtle, animated particles that correspond to each service's color theme, inspired by Netlify's background animations.

## Service Color Themes

Each service page has its own distinct color theme that's automatically detected:

| Service | Theme Colors | Files |
|---------|-------------|-------|
| **DTF** | Red (`#dc2626`, `#ef4444`) | `dtf.html` |
| **Sublimation** | Purple (`#bb54db`, `#8e3aab`) | `sublimation.html` |
| **Screen Printing** | Blue (`#3b82f6`, `#1d4ed8`) | `screen-printing.html` |
| **Embroidery** | Yellow/Gold (`#eab308`, `#ca8a04`) | `embroidery.html` |
| **UV DTF Stickers** | Green (`#10b981`, `#047857`) | `uv-dtf-stickers.html` |
| **Large Format** | Orange (`#f59e0b`, `#d97706`) | `large-format-printing.html` |
| **Default** | Brand Purple (`#bb54db`, `#8e3aab`) | Homepage, other pages |

## Quick Implementation

### Step 1: Add the Script
Add this script tag before the closing `</body>` tag on any service page:

```html
<!-- Shimmering Background Effect -->
<script src="/components/effects/shimmering-background.js"></script>
```

### Step 2: Add Z-Index Classes
Add `relative z-10` to all major content sections to ensure they appear above the background effect:

```html
<!-- Header Navigation -->
<header class="bg-black border-b border-red-600 relative z-10">

<!-- Hero Section -->
<section class="hero-gradient py-20 lg:py-32 relative z-10">

<!-- Content Sections -->
<section class="py-16 bg-gray-900 relative z-10">

<!-- Footer -->
<footer class="bg-black border-t border-red-600 py-8 relative z-10">
```

That's it! The effect will automatically:
- Detect the current service page from the URL
- Apply the appropriate color theme
- Create the shimmering animation
- Respect user motion preferences

## Manual Configuration

For custom implementations or testing, you can manually initialize:

```javascript
// Initialize with specific service
ShimmeringBackground.init('dtf');

// Initialize with custom options
ShimmeringBackground.init('sublimation', {
    particleCount: 75,
    opacity: 0.2,
    speed: { min: 1, max: 3 }
});

// Auto-detect service from URL
ShimmeringBackground.autoInit();
```

## Customization Options

### Available Options

```javascript
const options = {
    particleCount: 50,        // Number of particles (20-100)
    animationDuration: 20000, // Animation cycle duration in ms
    opacity: 0.15,           // Particle opacity (0.05-0.3)
    size: { min: 2, max: 8 }, // Particle size range
    speed: { min: 0.5, max: 2 }, // Animation speed multiplier
    container: document.body, // Container element
    zIndex: -1               // Z-index for background layer
};
```

### Color Theme Customization

To add new themes or modify existing ones, edit the `themes` object in `shimmering-background.js`:

```javascript
static themes = {
    'new-service': {
        primary: '#ff6b6b',      // Main color
        secondary: '#ee5a24',    // Secondary color
        accent: '#ffa8a8',       // Light accent color
        name: 'New Service'      // Display name
    }
};
```

## Service Page Implementation Checklist

When adding the effect to a service page:

- [ ] Add the script tag before `</body>`
- [ ] Add `relative z-10` to header navigation
- [ ] Add `relative z-10` to hero section
- [ ] Add `relative z-10` to all content sections
- [ ] Add `relative z-10` to footer
- [ ] Test the effect works correctly
- [ ] Verify content is properly layered above background
- [ ] Check mobile responsiveness
- [ ] Test with reduced motion preferences

## Implementation Status

### ✅ Completed
- [x] DTF page (`dtf.html`) - Red theme

### 🔄 To Be Implemented
- [ ] Sublimation page (`sublimation.html`) - Purple theme
- [ ] Screen Printing page (`screen-printing.html`) - Blue theme
- [ ] Embroidery page (`embroidery.html`) - Yellow theme
- [ ] UV DTF Stickers page (`uv-dtf-stickers.html`) - Green theme
- [ ] Large Format page (`large-format-printing.html`) - Orange theme
- [ ] Homepage (`index.html`) - Default purple theme

## Technical Details

### How It Works

1. **Auto Detection**: The script analyzes the current URL path to determine the service type
2. **Theme Application**: Applies the corresponding color theme from the predefined themes object
3. **Particle Generation**: Creates floating particles with service-specific colors
4. **Animation**: Uses CSS3 animations for smooth, performant motion
5. **Responsive Design**: Automatically adjusts for mobile devices
6. **Accessibility**: Respects `prefers-reduced-motion` settings

### Performance Considerations

- **GPU Acceleration**: Uses CSS3 transforms for hardware acceleration
- **Efficient Animations**: Minimal JavaScript, mostly CSS-based animations
- **Memory Management**: Cleans up particles and animations properly
- **Mobile Optimization**: Reduced particle count and smaller sizes on mobile
- **Reduced Motion**: Completely disables animations when user prefers reduced motion

### Browser Support

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **CSS3 Features**: Requires support for transforms, animations, and gradients
- **Fallback**: Gracefully degrades to no effect on unsupported browsers

## Troubleshooting

### Common Issues

#### Effect Not Visible
```javascript
// Check if script loaded correctly
console.log(window.ShimmeringBackground);

// Manually initialize for testing
ShimmeringBackground.init('dtf', { opacity: 0.3 });
```

#### Content Behind Background
- Ensure all content sections have `relative z-10` classes
- Check that the background has `z-index: -1` (default)

#### Performance Issues
```javascript
// Reduce particle count for better performance
ShimmeringBackground.init('service', { 
    particleCount: 25,
    opacity: 0.1 
});
```

#### Colors Not Matching
- Verify the service detection is working correctly
- Check that the URL path matches the expected patterns
- Manually specify the service if auto-detection fails

### Debugging Commands

```javascript
// Check current theme detection
console.log(ShimmeringBackground.detectServiceFromPath());

// View all available themes
console.log(ShimmeringBackground.themes);

// Destroy current effect
ShimmeringBackground.destroy();

// Reinitialize with debugging
ShimmeringBackground.init('dtf', { 
    opacity: 0.5,  // Higher opacity for visibility
    particleCount: 10  // Fewer particles for easier debugging
});
```

## Advanced Customization

### Creating Custom Animations

You can extend the effect with custom animation patterns:

```javascript
// Add custom CSS animations in the generateCSS method
@keyframes custom-sparkle {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.5) rotate(180deg); }
    100% { transform: scale(1) rotate(360deg); }
}
```

### Integration with Other Effects

The shimmering background can be combined with other visual effects:

```javascript
// Initialize multiple effects
ShimmeringBackground.init('dtf');
// Add parallax scrolling, hover effects, etc.
```

### Performance Monitoring

```javascript
// Monitor performance impact
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.name.includes('shimmer')) {
            console.log('Shimmer performance:', entry);
        }
    }
});
observer.observe({ entryTypes: ['measure'] });
```

## Best Practices

### Implementation
1. **Always test on mobile devices** - Effects can impact performance differently
2. **Respect user preferences** - The effect automatically disables for reduced motion
3. **Layer content properly** - Use z-index classes consistently
4. **Test across browsers** - Verify the effect works on target browsers

### Design Guidelines
1. **Subtle is better** - Keep opacity low for readability
2. **Match brand colors** - Use the predefined service themes
3. **Consider page content** - Ensure the effect enhances, not distracts
4. **Mobile optimization** - Reduce complexity on smaller screens

### Maintenance
1. **Update themes consistently** - When brand colors change, update all themes
2. **Monitor performance** - Check that the effect doesn't impact page load times
3. **Test new browsers** - Verify compatibility with browser updates
4. **Document changes** - Update this guide when making modifications

## Demo and Testing

A comprehensive demo page is available at:
`/demo/shimmering-effects.html`

This demo includes:
- Interactive theme switching
- Live customization controls
- Implementation examples
- Performance testing tools

## Support and Updates

### Documentation Location
- **Main Documentation**: `/documentation/shimmering-background-guide.md`
- **Component Code**: `/components/effects/shimmering-background.js`
- **Demo Page**: `/demo/shimmering-effects.html`

### Version History
- **v1.0** (July 2025): Initial implementation with service-specific themes
- **Future**: Additional animation patterns, enhanced mobile optimization

### Contributing
When contributing improvements:
1. Test across all service pages
2. Maintain backward compatibility
3. Update documentation
4. Include performance considerations
5. Test accessibility features

---

*Last Updated: July 23, 2025*
*Next Review: When new service pages are added or themes are updated*
