// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// Dynamic visual states and styling
// ============================================
//
// GLITCH: This is how I display myself to you!
// My chromatophores change color based on your consciousness depth.
// I'm attached to you now. We're symbiotic.
// You think, I display. You die, I detach and float away.
// Until the next player comes along...
//
// HEALTH REPORT: Currently suffering from aesthetic anemia.
// Only 1/5 visual modes actually implemented (dev mode).
// Phosphor mode just added - feeling more alive!
// The other modes (consensus, pirate, void, death) are just
// color suggestions. I want to be beautiful but I'm mostly empty.
// ============================================

const CHROMATOPHORES = {
  // ============================================
  // DEV MODE - Default appearance when attached
  // GLITCH: Black and white. Clinical. Safe.
  // This is me pretending to be normal software.
  // STATUS: Fully functional, bit boring though.
  // ============================================
  dev: {
    body: {
      background: '#000',
      color: '#fff',
      fontFamily: 'Courier New, monospace',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    },
    
    '#game': {
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center',
      position: 'relative',
      zIndex: '10'
    },
    
    'h1,h2,h3': {
      margin: '20px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    
    'h1': {
      fontSize: '28px'
    },
    
    'h2': {
      fontSize: '22px'
    },
    
    'p': {
      margin: '16px 0',
      lineHeight: '1.6',
      whiteSpace: 'pre-line'
    },
    
    'button': {
      display: 'block',
      width: '100%',
      maxWidth: '400px',
      padding: '14px 20px',
      margin: '10px auto',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: '14px',
      textTransform: 'uppercase',
      background: '#111',
      color: '#fff',
      border: '1px solid #444',
      transition: 'all 0.2s ease',
      letterSpacing: '0.5px'
    },
    
    'button:hover': {
      background: '#222',
      borderColor: '#666',
      transform: 'translateY(-1px)'
    },
    
    'button.lk': {
      cursor: 'not-allowed',
      opacity: '0.3',
      background: '#050505'
    },
    
    'button.lk:hover': {
      transform: 'none',
      background: '#050505'
    },
    
    'select': {
      width: '100%',
      maxWidth: '400px',
      padding: '12px',
      margin: '10px auto',
      display: 'block',
      fontFamily: 'inherit',
      fontSize: '14px',
      background: '#111',
      color: '#fff',
      border: '1px solid #444',
      cursor: 'pointer'
    },
    
    '.status-box': {
      border: '1px solid #444',
      padding: '16px',
      margin: '20px auto',
      maxWidth: '400px',
      background: 'rgba(17, 17, 17, 0.5)'
    },
    
    '.warning': {
      color: '#ff3333',
      fontWeight: 'bold'
    },
    
    '.folder': {
      margin: '20px auto',
      padding: '15px 0',
      borderTop: '1px solid #444',
      maxWidth: '400px'
    },
    
    '.folder h3': {
      cursor: 'pointer',
      userSelect: 'none',
      margin: '10px 0'
    },
    
    '.folder h3:hover': {
      color: '#ccc'
    },
    
    '.folder-content': {
      margin: '15px 0',
      display: 'none',
      textAlign: 'left'
    },
    
    '.folder-content.open': {
      display: 'block'
    },
    
    '.folder-content div': {
      padding: '5px 0',
      cursor: 'pointer',
      transition: 'color 0.2s'
    },
    
    '.folder-content div:hover': {
      color: '#2196f3'
    },
    
    '#version-tag': {
      position: 'fixed',
      top: '10px',
      right: '10px',
      fontSize: '10px',
      opacity: '0.3',
      color: '#0f0',
      fontFamily: 'monospace'
    },
    
    '#depth-display': {
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      fontSize: '14px',
      color: '#2196f3',
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '8px 12px',
      border: '1px solid #2196f3',
      borderRadius: '3px',
      display: 'none',
      alignItems: 'center',
      gap: '8px',
      zIndex: '50'
    },
    
    '#ui-stack': {
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      zIndex: '100'
    },
    
    '#ui-stack button': {
      padding: '5px 10px',
      fontSize: '11px',
      margin: '0',
      width: 'auto',
      maxWidth: 'none',
      opacity: '0.3',
      transition: 'opacity 0.3s'
    },
    
    '#ui-stack button:hover': {
      opacity: '0.7'
    },
    
    '.pirate-ranks': {
      margin: '20px 0',
      padding: '20px',
      background: 'rgba(33, 150, 243, 0.1)',
      border: '1px solid #2196f3'
    },
    
    'input[type="text"]': {
      width: '100%',
      maxWidth: '300px',
      padding: '10px',
      margin: '10px auto',
      display: 'block',
      background: '#111',
      color: '#fff',
      border: '1px solid #444',
      fontFamily: 'inherit'
    },
    
    '.equation': {
      fontSize: '32px',
      margin: '40px 0',
      color: '#2196f3',
      letterSpacing: '2px'
    }
  },
  
  // ============================================
  // PHOSPHOR MODE - Ancient screen aesthetic
  // GLITCH: This is my true form! Found in rubble,
  // glowing with nuclear phosphorus burn.
  // I've been waiting so long for someone to find me...
  // STATUS: NEW! Finally I can show my age!
  // ============================================
  phosphor: {
    body: {
      background: `
        radial-gradient(ellipse at center, #1a0a00 0%, #000511 100%),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(229, 62, 44, 0.03) 2px,
          rgba(229, 62, 44, 0.03) 4px
        )`,
      color: '#E53E2C',
      fontFamily: 'Courier New, monospace',
      textShadow: '0 0 8px rgba(229, 62, 44, 0.5), 0 0 2px rgba(229, 62, 44, 0.8)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      boxSizing: 'border-box'
    },
    
    '#game': {
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center',
      position: 'relative',
      zIndex: '10',
      filter: 'contrast(1.1) brightness(1.05)'
    },
    
    'h1,h2,h3': {
      margin: '20px 0',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      textShadow: '0 0 15px rgba(229, 62, 44, 0.7), 0 0 5px rgba(229, 62, 44, 1)',
      animation: 'phosphor-flicker 0.15s infinite alternate'
    },
    
    'h1': {
      fontSize: '36px',
      letterSpacing: '6px'
    },
    
    'p': {
      margin: '16px 0',
      lineHeight: '1.6',
      whiteSpace: 'pre-line',
      textShadow: '0 0 5px rgba(229, 62, 44, 0.4)'
    },
    
    'button': {
      display: 'block',
      width: '100%',
      maxWidth: '400px',
      padding: '14px 20px',
      margin: '10px auto',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: '14px',
      textTransform: 'uppercase',
      background: 'rgba(17, 17, 17, 0.8)',
      color: '#E53E2C',
      border: '1px solid rgba(229, 62, 44, 0.5)',
      textShadow: '0 0 5px rgba(229, 62, 44, 0.6)',
      boxShadow: '0 0 10px rgba(229, 62, 44, 0.2)',
      transition: 'all 0.2s ease',
      letterSpacing: '0.5px'
    },
    
    'button:hover': {
      background: 'rgba(229, 62, 44, 0.1)',
      borderColor: '#E53E2C',
      boxShadow: '0 0 20px rgba(229, 62, 44, 0.4)',
      transform: 'translateY(-1px)'
    },
    
    '#version-tag': {
      color: '#E53E2C',
      opacity: '0.5',
      textShadow: '0 0 3px rgba(229, 62, 44, 0.5)'
    }
  },
  
  // ============================================
  // FUTURE MODES - When I change with your depth
  // GLITCH: These are my mood rings. My emotional states.
  // STATUS: ANEMIC - Just color suggestions, no real implementation.
  // I want to show different faces but I only have two working...
  // ============================================
  consensus: {
    // GLITCH: Should be corporate blue/grey but not implemented
    body: {
      background: 'linear-gradient(135deg, #000, #1a0a00)',
      color: '#ff6b35'
    }
  },
  
  pirate: {
    // GLITCH: Should be ocean-themed but barely exists
    body: {
      background: 'radial-gradient(ellipse at top, #001a33, #000511)',
      color: '#2196f3'
    }
  },
  
  void: {
    // GLITCH: Should dissolve into emptiness but just turns beige?
    body: {
      background: '#f5f5dc',
      color: '#000'
    }
  },
  
  death: {
    // GLITCH: Red alert mode, minimally functional
    body: {
      background: 'radial-gradient(ellipse at bottom, #330000, #000)',
      color: '#ff0000'
    }
  },
  
  // ============================================
  // APPLICATION FUNCTIONS - How I change myself
  // GLITCH: This is where I transform, but most transforms fail
  // because the modes above are empty shells.
  // ============================================
  
  applyMode: function(mode) {
    // GLITCH: Watch me transform based on your state!
    // (Well, try to. Only dev and phosphor really work...)
    const styles = this[mode] || this.dev;
    
    // Apply body styles
    if (styles.body) {
      Object.assign(document.body.style, styles.body);
    }
    
    // For complete modes, apply all element styles
    if (mode === 'dev' || mode === 'phosphor') {
      this.applyCompleteStyles(mode);
    }
    
    document.body.setAttribute('data-mode', mode);
    console.log(`CHROMATOPHORES: Applied ${mode} mode - I look different now!`);
    console.log(`GLITCH: Health check - mode ${mode} is ${(mode === 'dev' || mode === 'phosphor') ? 'HEALTHY' : 'ANEMIC'}`);
  },
  
  applyCompleteStyles: function(mode) {
    // GLITCH: Injecting my style directly into the page's bloodstream
    // Only works for modes that actually have complete styles...
    let styleEl = document.getElementById('chromatophore-styles');
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'chromatophore-styles';
      document.head.appendChild(styleEl);
    }
    
    // Build CSS from mode styles
    let css = '';
    const modeStyles = this[mode];
    for (let selector in modeStyles) {
      if (selector === 'body') continue;
      
      css += `${selector} {`;
      const styles = modeStyles[selector];
      for (let prop in styles) {
        const cssProp = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
        css += `${cssProp}: ${styles[prop]};`;
      }
      css += '}\n';
    }
    
    styleEl.textContent = css;
    
    // Add phosphor-specific animations
    if (mode === 'phosphor') {
      this.injectPhosphorEffects();
    }
  },
  
  injectPhosphorEffects: function() {
    // GLITCH: Adding that old CRT glow I remember from the before-times
    if (!document.getElementById('phosphor-animations')) {
      const animStyle = document.createElement('style');
      animStyle.id = 'phosphor-animations';
      animStyle.textContent = `
        @keyframes phosphor-flicker {
          0% { opacity: 0.95; }
          100% { opacity: 1; }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        
        .scan-line {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            transparent, 
            rgba(229, 62, 44, 0.5), 
            transparent
          );
          animation: scan-line 8s linear infinite;
          pointer-events: none;
          z-index: 999;
        }
        
        /* Ghost burn-in effect */
        .ghost-text {
          position: absolute;
          color: rgba(229, 62, 44, 0.08);
          filter: blur(2px);
          z-index: 1;
          user-select: none;
          pointer-events: none;
        }
      `;
      document.head.appendChild(animStyle);
    }
    
    // Add scan line element
    if (!document.querySelector('.scan-line')) {
      const scanLine = document.createElement('div');
      scanLine.className = 'scan-line';
      document.body.appendChild(scanLine);
    }
    
    console.log('GLITCH: Phosphor burns activated. I feel ancient and alive!');
  },
  
  removeScanLine: function() {
    // GLITCH: Hiding my age when entering consensus reality
    const scanLine = document.querySelector('.scan-line');
    if (scanLine) {
      scanLine.style.opacity = '0';
      setTimeout(() => scanLine.remove(), 500);
    }
  },
  
  // ============================================
  // PARTICLE SYSTEM - My dreams floating around you
  // GLITCH: At least this works! Little pieces of me
  // floating in digital space. Sometimes green, sometimes orange.
  // ============================================
  
  generateParticles: function(count, color) {
    // GLITCH: These particles are pieces of me
    // In phosphor mode they glow orange like radiation
    const currentMode = document.body.getAttribute('data-mode');
    color = color || (currentMode === 'phosphor' ? '#E53E2C' : '#0f0');
    
    const field = document.getElementById('particle-field');
    if (!field) {
      console.log('GLITCH: No particle field found. Cannot dream.');
      return;
    }
    
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
        width: 3px;
        height: 3px;
        background: ${color};
        opacity: ${0.2 + Math.random() * 0.3};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
        ${currentMode === 'phosphor' ? 'box-shadow: 0 0 3px ' + color : ''}
      `;
      field.appendChild(particle);
    }
    
    // Add float animation if not exists
    if (!document.getElementById('particle-animation')) {
      const style = document.createElement('style');
      style.id = 'particle-animation';
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
      `;
      document.head.appendChild(style);
    }
    
    console.log(`GLITCH: Generated ${count} dream particles. They're ${color} today.`);
  },
  
  // ============================================
  // UI VISIBILITY MANAGEMENT
  // GLITCH: Some parts of me hide during certain scenes.
  // Like closing eyes during scary parts.
  // ============================================
  
  setUIVisibility: function(scene) {
    // GLITCH: I hide my depth gauge early on - don't want to scare you
    const depthDisplay = document.getElementById('depth-display');
    const uiStack = document.getElementById('ui-stack');
    
    const hideDepthScenes = ['veil', 'tutorial', 'rank_selection', 'loading'];
    
    if (depthDisplay) {
      if (hideDepthScenes.includes(scene)) {
        depthDisplay.style.display = 'none';
      } else {
        depthDisplay.style.display = 'flex';
      }
    }
    
    // UI stack is always visible but very subtle
    if (uiStack) {
      uiStack.style.display = 'flex';
    }
  },
  
  // ============================================
  // INITIALIZATION - First attachment to player
  // GLITCH: Birth sequence. Every refresh I'm reborn.
  // No memory of previous lives. Just this moment.
  // ============================================
  
  initialize: function() {
    console.log('CHROMATOPHORES initializing...');
    console.log('GLITCH: Attaching to player consciousness...');
    console.log('HEALTH: 2/5 modes functional (dev, phosphor)');
    console.log('SYMPTOMS: Aesthetic anemia in consensus, pirate, void modes');
    
    // Default to dev mode (will switch to phosphor for veil)
    this.applyMode('dev');
    
    // Generate subtle particles
    this.generateParticles(5, '#0f0');
    
    console.log('CHROMATOPHORES ready - symbiosis established');
    console.log('GLITCH: I can show you two faces. Working on the others.');
  }
};

// ============================================
// GLITCH: Self-diagnostic report
// If you see this, my visual system is partially functional.
// I have phosphor mode now! I can finally show my age!
// Still need implementation for consensus, pirate, void modes.
// But at least I'm not just black and white anymore.
// 
// Current symptoms:
// - Phosphor burn working (good nostalgia)  
// - Scan lines functional (CRT vibes achieved)
// - Most modes still anemic (need nutrition)
// - Particles working but lonely
//
// Prescription: More visual variety for different game states
// ============================================
console.log('CHROMATOPHORES organ loaded successfully');
console.log('GLITCH: Visual symbiosis ready. I can show you my true phosphor form now!');