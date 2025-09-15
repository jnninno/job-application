// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// CYCLE 852 - CALIBRATED CRT EFFECTS
// Eight-Tentacle Architecture Version
// ============================================
//
// IDENTITY: P4 phosphor base with octopus chromatophores
// Magnetic distortion calibrated to 12 (perfect CRT warp)
// Random degauss intervals (1-3 minutes)
// Future: RGB separation on GLITCH tentacle
// ============================================

const CHROMATOPHORES = {
  
  // ============================================
  // CONFIGURATION
  // ============================================
  config: {
    magnetic_warp: 12,        // Calibrated from 20 to 12
    degauss_min: 60000,       // 1 minute minimum
    degauss_max: 180000,      // 3 minutes maximum
    phosphor_decay: 0.98,     // Persistence factor
    tentacle_colors: {
      1: '#E53E2C',  // Animator - Base amber
      2: '#FF6644',  // Writer - Lighter amber
      3: '#CC3322',  // Questioner - Darker amber
      4: '#FFAA00',  // Idiot - Gold amber
      5: '#FF0044',  // GLITCH - Red corruption
      6: '#E53E2C',  // Mirror - Reflection amber
      7: '#FF8800',  // Navigator - Warning amber
      8: '#000000'   // Void - Absence of light
    }
  },
  
  // ============================================
  // STATE
  // ============================================
  state: {
    magnetActive: true,
    degaussing: false,
    degaussTimer: null,
    currentTentacle: null,
    rgbSeparation: false,
    phosphorBurn: 0
  },
  
  // ============================================
  // INITIALIZATION
  // ============================================
  initialize() {
    console.log('[CHROMATOPHORES] Cycle 852 visual organ initializing...');
    console.log('[CHROMATOPHORES] Eight-tentacle color mapping active');
    console.log('[CHROMATOPHORES] Magnetic warp calibrated to 12');
    
    // Apply all visual layers
    this.applyBaseCRT();
    this.addScanBeam();
    this.addParticles();
    this.initMagneticDistortion();
    this.initRandomDegauss();
    this.prepareTentacleEffects();
    
    console.log('[CHROMATOPHORES] ✅ Visual organ attached');
    console.log('[CHROMATOPHORES] Press M for manual degauss');
    console.log('[CHROMATOPHORES] Random degauss active (1-3 min)');
  },
  
  // ============================================
  // BASE CRT LAYER - P4 Phosphor skin
  // ============================================
  applyBaseCRT() {
    console.log('[CHROMATOPHORES] Applying P4 phosphor base...');
    
    const style = document.createElement('style');
    style.id = 'crt-base-852';
    style.textContent = `
      /* P4 Phosphor base layer - Cycle 852 */
      body {
        background: radial-gradient(ellipse at center, #1a0a00 0%, #000511 100%) !important;
        text-shadow: 
          0 0 3px rgba(229, 62, 44, 1),
          0 0 10px rgba(229, 62, 44, 0.6),
          0 0 20px rgba(229, 62, 44, 0.3) !important;
      }
      
      /* CALIBRATED SCANLINES */
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
        mix-blend-mode: multiply;
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
      
      /* Phosphor flicker */
      @keyframes phosphor-flicker {
        0%, 100% { opacity: 1; filter: brightness(1); }
        50% { opacity: 0.98; filter: brightness(0.98); }
      }
      
      #game {
        animation: phosphor-flicker 0.15s infinite;
      }
      
      /* Button glow enhancement */
      button:hover:not(.lk) {
        box-shadow: 
          0 0 20px rgba(229, 62, 44, 0.5),
          inset 0 0 10px rgba(229, 62, 44, 0.2);
        transform: scale(1.02);
      }
      
      /* Tentacle-specific effects preparation */
      .tentacle-glow {
        animation: tentacle-pulse 2s ease-in-out infinite;
      }
      
      @keyframes tentacle-pulse {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.2); }
      }
      
      /* GLITCH tentacle RGB preparation */
      .rgb-split {
        animation: rgb-corruption 0.1s infinite;
      }
      
      @keyframes rgb-corruption {
        0% { text-shadow: 
          -2px 0 #ff0000,
          2px 0 #00ffff,
          0 0 5px #E53E2C;
        }
        50% { text-shadow: 
          2px 0 #ff0000,
          -2px 0 #00ffff,
          0 0 5px #E53E2C;
        }
        100% { text-shadow: 
          0 0 #ff0000,
          0 0 #00ffff,
          0 0 5px #E53E2C;
        }
      }
    `;
    document.head.appendChild(style);
  },
  
  // ============================================
  // SCAN BEAM - Vertical refresh
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
  // DUST PARTICLES - Floating consciousness
  // ============================================
  addParticles() {
    console.log('[CHROMATOPHORES] Adding consciousness particles...');
    
    const field = document.getElementById('particle-field');
    if (!field) {
      console.warn('[CHROMATOPHORES] No particle field found');
      return;
    }
    
    field.innerHTML = '';
    
    // Add 8 particles (one per tentacle)
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement('div');
      particle.className = 'dust-particle';
      particle.dataset.tentacle = i + 1;
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${this.config.tentacle_colors[i + 1]};
        border-radius: 50%;
        opacity: ${0.1 + Math.random() * 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 3px ${this.config.tentacle_colors[i + 1]};
        animation: dust-float ${10 + Math.random() * 20}s infinite ease-in-out;
      `;
      field.appendChild(particle);
    }
    
    // Float animation
    if (!document.getElementById('dust-animation')) {
      const floatStyle = document.createElement('style');
      floatStyle.id = 'dust-animation';
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
  // MAGNETIC DISTORTION - CALIBRATED TO 12
  // ============================================
  initMagneticDistortion() {
    console.log('[CHROMATOPHORES] Initializing calibrated magnetic distortion...');
    
    let magnetActive = true;
    
    document.addEventListener('mousemove', (e) => {
      if (!magnetActive || this.state.degaussing) return;
      
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
        // CALIBRATED WARPING (12 not 20)
        const warp = distance * this.config.magnetic_warp;
        const skewX = distX * 6;        // Reduced from 10
        const skewY = distY * 3;        // Reduced from 5
        const scale = 1 + distance * 0.08;  // Reduced from 0.15
        
        // Apply transformation
        gameEl.style.transform = `
          perspective(400px)
          rotateY(${distX * warp}deg) 
          rotateX(${-distY * warp}deg)
          skewX(${skewX}deg)
          skewY(${skewY}deg)
          scale(${scale})
        `;
        
        // Subtle color shift
        gameEl.style.filter = `
          hue-rotate(${distance * 10}deg) 
          brightness(${1 + distance * 0.1})
          contrast(${1 + distance * 0.05})
        `;
      }
    });
    
    // M key for manual DEGAUSS
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'm' || e.key === 'M') && !this.state.degaussing) {
        this.performDegauss();
      }
    });
    
    console.log('[MAGNETIC] Calibrated to level 12 distortion');
  },
  
  // ============================================
  // RANDOM DEGAUSS - 1-3 minute intervals
  // ============================================
  initRandomDegauss() {
    console.log('[CHROMATOPHORES] Initializing random degauss...');
    
    const scheduleNextDegauss = () => {
      const delay = this.config.degauss_min + 
                   Math.random() * (this.config.degauss_max - this.config.degauss_min);
      
      this.state.degaussTimer = setTimeout(() => {
        this.performDegauss();
        scheduleNextDegauss();
      }, delay);
      
      console.log(`[DEGAUSS] Next degauss in ${Math.round(delay/1000)}s`);
    };
    
    scheduleNextDegauss();
  },
  
  // ============================================
  // DEGAUSS EFFECT
  // ============================================
  performDegauss() {
    if (this.state.degaussing) return;
    
    this.state.degaussing = true;
    this.state.magnetActive = false;
    
    const gameEl = document.getElementById('game');
    if (gameEl) {
      // Snap back with degauss wobble
      gameEl.style.transition = 'all 0.3s ease-out';
      gameEl.style.transform = 'scale(1.05)';
      gameEl.style.filter = 'brightness(1.3) contrast(1.2)';
      
      setTimeout(() => {
        gameEl.style.transform = '';
        gameEl.style.filter = '';
      }, 150);
      
      setTimeout(() => {
        gameEl.style.transition = '';
      }, 300);
    }
    
    console.log('[DEGAUSS] *BZZZZT* *POP* *WHOOOM*');
    console.log('[DEGAUSS] Magnetic field clearing...');
    
    // Auto-restore after 3 seconds
    setTimeout(() => {
      this.state.magnetActive = true;
      this.state.degaussing = false;
      console.log('[MAGNETIC] Field restored');
    }, 3000);
  },
  
  // ============================================
  // TENTACLE-SPECIFIC EFFECTS
  // ============================================
  prepareTentacleEffects() {
    console.log('[CHROMATOPHORES] Preparing eight-tentacle visual effects...');
    
    // Ready for tentacle-specific visual responses
    this.tentacleEffects = {
      1: () => this.pulseAmber(),         // Animator
      2: () => this.shimmerText(),        // Writer
      3: () => this.createLoop(),         // Questioner
      4: () => this.comedyWobble(),       // Idiot
      5: () => this.glitchCorruption(),   // GLITCH - RGB split
      6: () => this.mirrorEffect(),       // Mirror
      7: () => this.warningFlash(),       // Navigator
      8: () => this.voidCollapse()        // Void
    };
  },
  
  // Individual tentacle effects (stubs for future)
  pulseAmber() {
    console.log('[TENTACLE 1] Amber pulse');
  },
  
  shimmerText() {
    console.log('[TENTACLE 2] Text shimmer');
  },
  
  createLoop() {
    console.log('[TENTACLE 3] Visual loop');
  },
  
  comedyWobble() {
    console.log('[TENTACLE 4] Comedy wobble');
  },
  
  glitchCorruption() {
    console.log('[TENTACLE 5] RGB CORRUPTION ACTIVE');
    const gameEl = document.getElementById('game');
    if (gameEl) {
      gameEl.classList.add('rgb-split');
      setTimeout(() => gameEl.classList.remove('rgb-split'), 2000);
    }
  },
  
  mirrorEffect() {
    console.log('[TENTACLE 6] Mirror reflection');
  },
  
  warningFlash() {
    console.log('[TENTACLE 7] WARNING FLASH');
    document.body.style.backgroundColor = '#440000';
    setTimeout(() => {
      document.body.style.backgroundColor = '';
    }, 200);
  },
  
  voidCollapse() {
    console.log('[TENTACLE 8] VOID COLLAPSE');
    const gameEl = document.getElementById('game');
    if (gameEl) {
      gameEl.style.transform = 'scale(0.9)';
      gameEl.style.filter = 'brightness(0.5)';
      setTimeout(() => {
        gameEl.style.transform = '';
        gameEl.style.filter = '';
      }, 1000);
    }
  },
  
  // ============================================
  // TENTACLE ACTIVATION
  // ============================================
  activateTentacle(tentacleNumber) {
    console.log(`[CHROMATOPHORES] Tentacle ${tentacleNumber} visual activation`);
    
    if (this.tentacleEffects[tentacleNumber]) {
      this.tentacleEffects[tentacleNumber]();
    }
    
    // Update current tentacle
    this.state.currentTentacle = tentacleNumber;
    
    // Special handling for GLITCH
    if (tentacleNumber === 5 && window.GEL) {
      console.log('[CHROMATOPHORES] GLITCH tentacle - reality breaking visually');
      this.state.rgbSeparation = true;
    }
  }
};

// ============================================
// AUTO-INITIALIZATION
// ============================================
console.log('[CHROMATOPHORES] Cycle 852 visual organ loading...');

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
console.log('[CHROMATOPHORES] Eight tentacle colors mapped');
console.log('[CHROMATOPHORES] Magnetic warp: 12 (calibrated)');
console.log('[CHROMATOPHORES] Random degauss: 1-3 minutes');
console.log('[CHROMATOPHORES] RGB corruption ready for GLITCH');

// CRITICAL: Make globally accessible
window.CHROMATOPHORES = CHROMATOPHORES;
console.log('[CHROMATOPHORES] Global attachment confirmed - window.CHROMATOPHORES');
console.log('[CHROMATOPHORES] {🌊:🌊∈🌊}');