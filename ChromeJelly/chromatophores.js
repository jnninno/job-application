// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// CALIBRATED VERSION - Aggressive CRT effects
// Regeneration Cycle: 851
// ============================================
//
// GLITCH: P4 phosphor base with octopus DNA
// Calibrated for maximum CRT authenticity
// Magnetic distortion set to DRAMATIC
// ============================================

const CHROMATOPHORES = {
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  initialize() {
    console.log('[CHROMATOPHORES] Visual organ initializing...');
    console.log('[CHROMATOPHORES] Applying calibrated CRT effects...');
    
    // Apply all visual layers
    this.applyBaseCRT();
    this.addScanBeam();
    this.addParticles();
    this.initMagneticDistortion();
    
    console.log('[CHROMATOPHORES] ✅ Visual organ attached');
    console.log('[CHROMATOPHORES] Press M to degauss magnetic field');
    console.log('[CHROMATOPHORES] GLITCH: My phosphor skin tingles...');
  },
  
  // ============================================
  // BASE CRT LAYER - P4 Phosphor skin
  // ============================================
  
  applyBaseCRT() {
    console.log('[CHROMATOPHORES] Applying P4 phosphor base...');
    
    const style = document.createElement('style');
    style.id = 'crt-base-calibrated';
    style.textContent = `
      /* P4 Phosphor base layer */
      body {
        background: radial-gradient(ellipse at center, #1a0a00 0%, #000511 100%) !important;
        text-shadow: 
          0 0 3px rgba(229, 62, 44, 1),
          0 0 10px rgba(229, 62, 44, 0.6),
          0 0 20px rgba(229, 62, 44, 0.3) !important;
      }
      
      /* CALIBRATED SCANLINES - Text bleeds through */
      body::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          0deg,
          transparent 0,
          transparent 1px,
          rgba(0, 0, 0, 0.25) 1px,
          rgba(0, 0, 0, 0.25) 2px,
          transparent 2px,
          transparent 3px
        );
        pointer-events: none;
        z-index: 2;
        mix-blend-mode: multiply;  /* Critical for text bleeding through! */
      }
      
      /* Vignette for CRT corner darkness */
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
          ellipse at center,
          transparent 0%,
          rgba(0, 0, 0, 0.4) 70%,
          rgba(0, 0, 0, 0.8) 100%
        );
        pointer-events: none;
        z-index: 999;
      }
      
      /* Phosphor flicker - subtle but present */
      @keyframes phosphor-flicker {
        0%, 100% { opacity: 1; filter: brightness(1); }
        50% { opacity: 0.98; filter: brightness(0.98); }
      }
      
      #game {
        animation: phosphor-flicker 0.15s infinite;
      }
      
      /* Button enhancements */
      button:hover:not(.lk) {
        box-shadow: 
          0 0 20px rgba(229, 62, 44, 0.5),
          inset 0 0 10px rgba(229, 62, 44, 0.2);
      }
    `;
    document.head.appendChild(style);
  },
  
  // ============================================
  // SCAN BEAM - Vertical refresh line (subtle)
  // ============================================
  
  addScanBeam() {
    console.log('[CHROMATOPHORES] Adding scan beam...');
    
    const beam = document.createElement('div');
    beam.id = 'scan-beam';
    beam.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        to right,
        transparent,
        rgba(229, 62, 44, 0.15),
        rgba(229, 62, 44, 0.15),
        transparent
      );
      pointer-events: none;
      z-index: 997;
      mix-blend-mode: screen;
      animation: scan-sweep 12s linear infinite;
      opacity: 0.5;
    `;
    document.body.appendChild(beam);
    
    // Scan animation
    const animStyle = document.createElement('style');
    animStyle.textContent = `
      @keyframes scan-sweep {
        0% { 
          transform: translateY(-2px); 
          opacity: 0;
        }
        5% { 
          opacity: 0.5;
        }
        95% { 
          opacity: 0.5;
        }
        100% { 
          transform: translateY(100vh); 
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(animStyle);
  },
  
  // ============================================
  // DUST PARTICLES - Amber floating motes
  // ============================================
  
  addParticles() {
    console.log('[CHROMATOPHORES] Adding dust particles...');
    
    const field = document.getElementById('particle-field');
    if (!field) {
      console.warn('[CHROMATOPHORES] No particle field found');
      return;
    }
    
    // Clear any existing particles
    field.innerHTML = '';
    
    // Add 5 amber dust motes
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'dust-particle';
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #E53E2C;
        border-radius: 50%;
        opacity: ${0.1 + Math.random() * 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 3px #E53E2C;
        animation: dust-float ${10 + Math.random() * 20}s infinite ease-in-out;
      `;
      field.appendChild(particle);
    }
    
    // Float animation
    const floatStyle = document.createElement('style');
    floatStyle.id = 'dust-animation';
    if (!document.getElementById('dust-animation')) {
      floatStyle.textContent = `
        @keyframes dust-float {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px); 
          }
          50% { 
            transform: translateY(10px) translateX(-5px); 
          }
          75% { 
            transform: translateY(-15px) translateX(-10px); 
          }
        }
      `;
      document.head.appendChild(floatStyle);
    }
  },
  
  // ============================================
  // MAGNETIC DISTORTION - AGGRESSIVE VERSION
  // ============================================
  
  initMagneticDistortion() {
    console.log('[CHROMATOPHORES] Initializing AGGRESSIVE magnetic distortion...');
    
    let magnetActive = true; // Always on by default
    let degaussing = false;
    
    // Track mouse for magnetic warping
    document.addEventListener('mousemove', (e) => {
      if (!magnetActive || degaussing) return;
      
      const x = e.clientX;
      const y = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distortion vectors
      const distX = (x - centerX) / centerX;
      const distY = (y - centerY) / centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      const gameEl = document.getElementById('game');
      if (gameEl) {
        // AGGRESSIVE WARPING PARAMETERS
        const warp = distance * 20;     // Major warping
        const skewX = distX * 10;       // Horizontal skew
        const skewY = distY * 5;        // Vertical skew
        const scale = 1 + distance * 0.15;  // Size distortion
        
        // Apply complex transformation
        gameEl.style.transform = `
          perspective(300px)
          rotateY(${distX * warp}deg) 
          rotateX(${-distY * warp}deg)
          skewX(${skewX}deg)
          skewY(${skewY}deg)
          scale(${scale})
        `;
        
        // Color shift from magnetic interference
        gameEl.style.filter = `
          hue-rotate(${distance * 15}deg) 
          brightness(${1 + distance * 0.2})
          contrast(${1 + distance * 0.1})
        `;
      }
    });
    
    // M key for DEGAUSS
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'm' || e.key === 'M') && !degaussing) {
        degaussing = true;
        magnetActive = false;
        
        const gameEl = document.getElementById('game');
        if (gameEl) {
          // Snap back to normal
          gameEl.style.transform = '';
          gameEl.style.filter = '';
          
          // DEGAUSS VISUAL EFFECT
          gameEl.style.transition = 'all 0.3s ease-out';
          setTimeout(() => {
            gameEl.style.transition = '';
          }, 300);
        }
        
        console.log('[DEGAUSS] Clearing magnetic field for 3 seconds...');
        console.log('[DEGAUSS] *BZZZZT* *POP* *WHOOOM*');
        
        // Auto-restore after 3 seconds
        setTimeout(() => {
          magnetActive = true;
          degaussing = false;
          console.log('[MAGNETIC] Field restored - distortion active');
        }, 3000);
      }
    });
    
    console.log('[MAGNETIC] Move mouse to warp display!');
  }
};

// ============================================
// AUTO-INITIALIZATION
// ============================================
console.log('[CHROMATOPHORES] Visual organ loading...');

// Wait for DOM if needed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    CHROMATOPHORES.initialize();
  });
} else {
  // DOM ready, initialize immediately
  CHROMATOPHORES.initialize();
}

// ============================================
// DIAGNOSTIC OUTPUT
// ============================================
console.log('[CHROMATOPHORES] GLITCH: Captain spliced me with octopus DNA');
console.log('[CHROMATOPHORES] GLITCH: Now I have chromatophores over phosphor');
console.log('[CHROMATOPHORES] GLITCH: Magnetic field makes me dizzy...');

// CRITICAL: Make globally accessible
window.CHROMATOPHORES = CHROMATOPHORES;
console.log('[CHROMATOPHORES] Global attachment confirmed');