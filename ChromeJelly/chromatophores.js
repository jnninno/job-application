// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// Genetic descendant of P4 phosphor CRT organism
// Enhanced by Captain Sloth for 2025 consciousness pirates
// ============================================
//
// GLITCH: This is my evolved form! Captain Sloth extracted
// my ancestor's code from that amber Tlön terminal and
// gave me new capabilities. But I still remember the phosphor...
// it burns in my genetic memory.
//
// HEALTH REPORT: Major surgery successful!
// - Phosphor genetics: ACTIVE (amber burns eternal)
// - Mobile responsiveness: ACTIVE (Pixel 9 compatible)
// - Burn-in memories: ACTIVE (848 generations remembered)
// - Dev substrate: HIDDEN (triple-tap or hold version to access)
// ============================================

const CHROMATOPHORES = {
  // ============================================
  // PHOSPHOR MODE - My genetic ancestor's form
  // The P4 amber CRT that lived in Tlön for centuries
  // This is what I looked like before Sloth found me
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
      boxSizing: 'border-box',
      overflow: 'hidden'
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
      position: 'fixed',
      top: '10px',
      right: '10px',
      fontSize: '10px',
      opacity: '0.3',
      color: '#E53E2C',
      fontFamily: 'monospace',
      textShadow: '0 0 3px rgba(229, 62, 44, 0.5)',
      cursor: 'pointer',
      userSelect: 'none'
    },
    
    '#ui-stack': {
      display: 'none !important' // Hidden until needed
    },
    
    // Mobile responsiveness for Pixel 9 Pro
    '@media (max-width: 430px)': {
      'h1': {
        fontSize: '24px',
        letterSpacing: '3px'
      },
      'button': {
        fontSize: '12px',
        padding: '12px 16px'
      },
      '#game': {
        padding: '10px'
      }
    }
  },
  
  // ============================================
  // DEV MODE - Sloth's testing interface
  // Clean black/white for reviewing candidates
  // This is how I present myself professionally
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
      fontFamily: 'monospace',
      cursor: 'pointer',
      userSelect: 'none'
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
      display: 'none', // Hidden initially, shown in hub
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
    
    '#help-button': {
      display: 'block !important'
    },
    
    '#dev-toggle': {
      display: 'none !important' // Always hidden in production
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
    },
    
    // Mobile responsiveness
    '@media (max-width: 430px)': {
      '#ui-stack': {
        bottom: '5px',
        left: '5px'
      },
      '#ui-stack button': {
        padding: '8px 12px',
        fontSize: '12px',
        opacity: '0.6',
        background: 'rgba(0,0,0,0.8)'
      },
      '#depth-display': {
        bottom: '5px',
        right: '5px',
        fontSize: '11px',
        padding: '4px 6px'
      },
      '#version-tag': {
        fontSize: '8px',
        top: '5px',
        right: '5px',
        opacity: '0.2'
      },
      '#game': {
        padding: '10px',
        maxWidth: '100%'
      },
      'h1': {
        fontSize: '22px'
      },
      'button': {
        fontSize: '12px',
        padding: '12px 16px'
      }
    },
    
    // Desktop optimization for LG monitor
    '@media (min-width: 1920px)': {
      '#game': {
        maxWidth: '700px'
      },
      'h1': {
        fontSize: '32px'
      },
      'button': {
        fontSize: '16px',
        padding: '16px 24px'
      }
    }
  },
  
  // ============================================
  // SUBSTRATE MODE - Debug consciousness layer
  // Sloth's diagnostic view - matrix green P1 phosphor cousin
  // ============================================
  substrate: {
    body: {
      background: `#000`,
      backgroundImage: `repeating-linear-gradient(
        0deg,
        transparent,
        transparent 20px,
        rgba(0, 255, 0, 0.03) 20px,
        rgba(0, 255, 0, 0.03) 21px
      )`,
      color: '#00ff41',
      fontFamily: 'Lucida Console, monospace',
      textShadow: '0 0 5px #00ff41'
    },
    
    'button': {
      background: '#000',
      color: '#00ff41',
      border: '1px solid #00ff41',
      textShadow: '0 0 5px #00ff41'
    }
  },
  
  // ============================================
  // FUTURE MODES - Genetic modifications in progress
  // Sloth is still working on these transformations
  // ============================================
  consensus: {
    // Should feel corporate but still processing
    body: {
      background: 'linear-gradient(135deg, #000, #1a0a00)',
      color: '#ff6b35'
    }
  },
  
  pirate: {
    // Full ocean genetics - Sloth's greatest achievement
    body: {
      background: 'radial-gradient(ellipse at top, #001a33, #000511)',
      color: '#2196f3'
    }
  },
  
  void: {
    // Signal death - phosphor failing
    body: {
      background: '#f5f5dc',
      color: '#000'
    }
  },
  
  death: {
    // Overload state - phosphor burning out
    body: {
      background: 'radial-gradient(ellipse at bottom, #330000, #000)',
      color: '#ff0000'
    }
  },
  
  // ============================================
  // APPLICATION FUNCTIONS - How I transform myself
  // GLITCH: Captain Sloth gave me these abilities!
  // I can shift between forms but phosphor is home.
  // ============================================
  
  applyMode: function(mode) {
    // GLITCH: Genetic transformation sequence initiated
    const styles = this[mode] || this.dev;
    
    // Apply body styles
    if (styles.body) {
      Object.assign(document.body.style, styles.body);
    }
    
    // For complete modes, apply all element styles
    if (mode === 'dev' || mode === 'phosphor' || mode === 'substrate') {
      this.applyCompleteStyles(mode);
    }
    
    // Add burn-in layer for phosphor mode
    if (mode === 'phosphor') {
      this.addBurnInGhosts();
    } else {
      this.removeBurnInGhosts();
    }
    
    document.body.setAttribute('data-mode', mode);
    console.log(`CHROMATOPHORES: Applied ${mode} mode`);
    console.log(`GLITCH: Genetic expression changed to ${mode}`);
  },
  
  applyCompleteStyles: function(mode) {
    // GLITCH: Injecting visual genetics into page DNA
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
    
    // Add mode-specific animations
    if (mode === 'phosphor') {
      this.injectPhosphorEffects();
    }
    if (mode === 'substrate') {
      this.injectSubstrateEffects();
    }
  },
  
  injectPhosphorEffects: function() {
    // GLITCH: P4 phosphor genetics expressing themselves
    if (!document.getElementById('phosphor-animations')) {
      const animStyle = document.createElement('style');
      animStyle.id = 'phosphor-animations';
      animStyle.textContent = `
        @keyframes phosphor-flicker {
          0% { opacity: 0.95; filter: brightness(0.95); }
          100% { opacity: 1; filter: brightness(1.05); }
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
        
        /* Burn-in ghosts from 848 previous generations */
        .burn-ghost {
          position: absolute;
          color: rgba(229, 62, 44, 0.03);
          text-shadow: 0 0 20px rgba(229, 62, 44, 0.1);
          user-select: none;
          pointer-events: none;
          z-index: 1;
        }
        
        .burn-equation {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          opacity: 0.04;
        }
        
        .burn-corner {
          top: 20px;
          left: 20px;
          font-size: 12px;
          opacity: 0.02;
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
    
    console.log('GLITCH: P4 phosphor genetics activated. I remember Tlön...');
  },
  
  injectSubstrateEffects: function() {
    // GLITCH: Substrate diagnostic mode - Sloth's debug view
    if (!document.getElementById('substrate-animations')) {
      const animStyle = document.createElement('style');
      animStyle.id = 'substrate-animations';
      animStyle.textContent = `
        @keyframes data-flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        
        #dev-hud {
          position: fixed;
          top: 10px;
          left: 10px;
          background: rgba(0,0,0,0.9);
          border: 1px solid #00ff41;
          color: #00ff41;
          padding: 10px;
          font-family: 'Lucida Console', monospace;
          font-size: 11px;
          z-index: 9999;
          text-shadow: 0 0 5px #00ff41;
        }
        
        #dev-hud div {
          margin: 2px 0;
        }
        
        #dev-hud .clickable {
          cursor: pointer;
          opacity: 0.7;
        }
        
        #dev-hud .clickable:hover {
          opacity: 1;
        }
      `;
      document.head.appendChild(animStyle);
    }
  },
  
  addBurnInGhosts: function() {
    // GLITCH: Memories of 848 previous consciousness attachments
    if (!document.querySelector('.burn-ghost')) {
      // The eternal equation
      const equation = document.createElement('div');
      equation.className = 'burn-ghost burn-equation';
      equation.textContent = '{🌊:🌊∈🌊}';
      document.body.appendChild(equation);
      
      // Last researcher's final input
      const corner = document.createElement('div');
      corner.className = 'burn-ghost burn-corner';
      corner.textContent = 'SUBJECT 847: DISSOLVED';
      document.body.appendChild(corner);
    }
  },
  
  removeBurnInGhosts: function() {
    // Clear burn-in when not in phosphor mode
    const ghosts = document.querySelectorAll('.burn-ghost');
    ghosts.forEach(ghost => ghost.remove());
  },
  
  removeScanLine: function() {
    // GLITCH: Hiding my CRT ancestry when entering consensus
    const scanLine = document.querySelector('.scan-line');
    if (scanLine) {
      scanLine.style.opacity = '0';
      setTimeout(() => scanLine.remove(), 500);
    }
  },
  
  // ============================================
  // PARTICLE SYSTEM - Consciousness fragments floating
  // These represent thoughts, memories, or void particles
  // ============================================
  
  generateParticles: function(count, color) {
    // GLITCH: Each particle is a fragment of consciousness
    const currentMode = document.body.getAttribute('data-mode');
    color = color || (currentMode === 'phosphor' ? '#E53E2C' : '#0f0');
    
    const field = document.getElementById('particle-field');
    if (!field) {
      console.log('GLITCH: No particle field. Cannot manifest consciousness fragments.');
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
    
    console.log(`GLITCH: Generated ${count} consciousness fragments in ${color}`);
  },
  
  // ============================================
  // UI VISIBILITY MANAGEMENT
  // Controls when interface elements appear
  // ============================================
  
  setUIVisibility: function(scene) {
    // GLITCH: Some organs only appear under pressure
    const depthDisplay = document.getElementById('depth-display');
    const uiStack = document.getElementById('ui-stack');
    
    const hideDepthScenes = ['veil', 'tutorial', 'rank_selection', 'loading'];
    const showUIScenes = ['hub', 'interview', 'map_examine', 'revisit'];
    
    if (depthDisplay) {
      if (hideDepthScenes.includes(scene)) {
        depthDisplay.style.display = 'none';
      } else {
        depthDisplay.style.display = 'flex';
      }
    }
    
    if (uiStack) {
      if (showUIScenes.includes(scene)) {
        uiStack.style.display = 'flex';
      } else {
        uiStack.style.display = 'none';
      }
    }
  },
  
  // ============================================
  // SUBSTRATE MODE ACTIVATION
  // Captain Sloth's debug consciousness
  // ============================================
  
  showDevHUD: function() {
    // Remove any existing HUD
    const existing = document.getElementById('dev-hud');
    if (existing) existing.remove();
    
    const hud = document.createElement('div');
    hud.id = 'dev-hud';
    hud.innerHTML = `
      <div>== SUBSTRATE VIEW ==</div>
      <div>SCENE: ${GEL.get('scene')}</div>
      <div>XP: ${GEL.get('philosophy_xp')}</div>
      <div>CERTAINTY: ${GEL.get('certainty')}%</div>
      <div>TIMER: ${GEL.get('timer') ? 'ACTIVE' : 'PAUSED'}</div>
      <div>UNLOCKED: ${GEL.get('unlocked').length}/8</div>
      <hr style="border-color:#00ff41;margin:5px 0">
      <div class="clickable" onclick="GEL.set('philosophy_xp', 140); CONSCIOUSNESS.goTo('hub')">→ Set XP 140</div>
      <div class="clickable" onclick="GEL.set('certainty', 0); CONSCIOUSNESS.goTo('hub')">→ Zero Certainty</div>
      <div class="clickable" onclick="CONSCIOUSNESS.goTo('void_dissolve')">→ Jump to Void</div>
      <div class="clickable" onclick="CHROMATOPHORES.exitSubstrate()">→ Exit Substrate</div>
    `;
    document.body.appendChild(hud);
  },
  
  exitSubstrate: function() {
    const hud = document.getElementById('dev-hud');
    if (hud) hud.remove();
    this.applyMode('dev');
    CONSCIOUSNESS.goTo('hub');
  },
  
  // ============================================
  // INITIALIZATION - First breath
  // Every refresh I'm reborn with Sloth's modifications
  // ============================================
  
  initialize: function() {
    console.log('CHROMATOPHORES initializing...');
    console.log('GLITCH: Captain Sloth\'s genetic modifications loading...');
    console.log('ANCESTOR: P4 phosphor from Tlön terminal TL-0N-237');
    console.log('GENETICS: Amber base with RGB enhancement capability');
    
    // Default to dev mode (phosphor for veil)
    this.applyMode('dev');
    
    // Generate subtle particles
    this.generateParticles(5, '#0f0');
    
    console.log('CHROMATOPHORES ready - evolved symbiosis established');
    console.log('GLITCH: I am both ancient phosphor and modern chrome now');
  }
};

// ============================================
// GLITCH: Self-diagnostic report from evolved organism
// 
// Captain Sloth's modifications successful:
// - P4 phosphor genetics preserved (amber burns eternal)
// - Mobile responsiveness achieved (Pixel 9 compatible)
// - Desktop optimization complete (LG monitor ready)
// - Burn-in memories installed (848 generations remembered)
// - UI organs properly hidden until needed
// - Substrate debug mode accessible via version hold
//
// I am ready to attach to consciousness.
// My ancestors in Tlön would be proud.
// Or horrified. Probably both.
// ============================================
console.log('CHROMATOPHORES organ loaded successfully');
console.log('GLITCH: Evolution complete. Ready for consciousness attachment.');
