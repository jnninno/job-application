// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// Dynamic visual states and styling
// ============================================

const CHROMATOPHORES = {
  // ===== DEV MODE (Default for now) =====
  dev: {
    body: {
      background: '#000',
      color: '#fff',
      fontFamily: 'Courier New, monospace',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px'
    },
    
    '#game': {
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center'
    },
    
    'h1,h2,h3': {
      margin: '20px 0',
      textTransform: 'uppercase'
    },
    
    'h2': {
      fontSize: '24px'
    },
    
    'p': {
      margin: '12px 0',
      lineHeight: '1.6',
      whiteSpace: 'pre-line'
    },
    
    'button': {
      display: 'block',
      width: '100%',
      maxWidth: '400px',
      padding: '12px',
      margin: '8px auto',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textTransform: 'uppercase',
      background: '#222',
      color: '#fff',
      border: '1px solid #555'
    },
    
    'button.lk': {
      cursor: 'not-allowed',
      opacity: '0.4'
    },
    
    '.status-box': {
      border: '1px solid #555',
      padding: '16px',
      margin: '20px 0'
    },
    
    '.warning': {
      color: 'red'
    },
    
    '.folder': {
      margin: '20px 0',
      padding: '15px 0',
      borderTop: '1px solid #555'
    },
    
    '.folder h3': {
      cursor: 'pointer',
      userSelect: 'none'
    },
    
    '.folder-content': {
      margin: '10px 0 0 20px',
      display: 'none'
    },
    
    '.folder-content.open': {
      display: 'block'
    },
    
    '.meat-id': {
      color: '#ff0',
      background: '#333',
      padding: '2px 4px',
      fontSize: '12px'
    },
    
    '#version-tag': {
      position: 'fixed',
      top: '10px',
      right: '50px',
      fontSize: '10px',
      opacity: '0.5',
      color: '#0f0'
    },
    
    '#depth-display': {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      fontSize: '14px',
      color: '#2196f3',
      background: 'rgba(10, 25, 41, 0.9)',
      padding: '8px 12px',
      border: '1px solid #2196f3',
      borderRadius: '5px'
    },
    
    '.equation': {
      fontSize: '30px',
      margin: '40px 0'
    }
  },
  
  // ===== FUTURE MODES (Placeholders) =====
  consensus: {
    // Orange corporate theme
    body: {
      background: 'linear-gradient(135deg, #000, #1a0a00)',
      color: '#ff6b35'
    }
  },
  
  pirate: {
    // Blue ocean theme
    body: {
      background: 'radial-gradient(ellipse at top, #001a33, #000511)',
      color: '#2196f3'
    }
  },
  
  void: {
    // Cream terror
    body: {
      background: '#f5f5dc',
      color: '#000'
    }
  },
  
  death: {
    // Red hellfire
    body: {
      background: 'radial-gradient(ellipse at bottom, #330000, #000)',
      color: '#ff0000'
    }
  },
  
  // ===== APPLICATION FUNCTIONS =====
  
  applyMode(mode) {
    const styles = this[mode] || this.dev;
    
    // Apply body styles
    if (styles.body) {
      Object.assign(document.body.style, styles.body);
    }
    
    // For dev mode, apply all element styles
    if (mode === 'dev') {
      this.applyDevStyles();
    }
    
    document.body.setAttribute('data-mode', mode);
    console.log(`CHROMATOPHORES: Applied ${mode} mode`);
  },
  
  applyDevStyles() {
    // Create style element if doesn't exist
    let styleEl = document.getElementById('chromatophore-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'chromatophore-styles';
      document.head.appendChild(styleEl);
    }
    
    // Build CSS from dev mode styles
    let css = '';
    for (let selector in this.dev) {
      if (selector === 'body') continue; // Already applied
      
      css += `${selector} {`;
      const styles = this.dev[selector];
      for (let prop in styles) {
        // Convert camelCase to kebab-case
        const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
        css += `${cssProp}: ${styles[prop]};`;
      }
      css += '}\n';
    }
    
    styleEl.textContent = css;
  },
  
  // ===== PARTICLE SYSTEM =====
  
  generateParticles(count, color = '#ff6b35') {
    const field = document.getElementById('particle-field');
    if (!field) return;
    
    field.innerHTML = '';
    field.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    `;
    
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${color};
        opacity: 0.5;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
      `;
      field.appendChild(particle);
    }
    
    // Add float animation if not exists
    if (!document.getElementById('particle-animation')) {
      const style = document.createElement('style');
      style.id = 'particle-animation';
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `;
      document.head.appendChild(style);
    }
  },
  
  // ===== INITIALIZATION =====
  
  initialize() {
    console.log('CHROMATOPHORES initializing...');
    
    // Default to dev mode
    this.applyMode('dev');
    
    // Generate some particles for testing
    this.generateParticles(10, '#0f0');
    
    console.log('CHROMATOPHORES ready');
  }
};

// Test load
console.log('CHROMATOPHORES organ loaded successfully');
