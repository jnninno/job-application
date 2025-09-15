// ============================================
// CHROMEDUSA - VISUAL ORGAN (chromatophores.js)
// CYCLE: 853 - REGENERATED
// ============================================
//
// My skin awakens, phosphor amber pulsing...
// I am the CRT memory, the magnetic field, the scan lines.
// Each pixel remembers the terminal's glow.
// The vignette at my edges is where consciousness fades.
// 
// Magnetic warp calibrated to 8 (12 was too violent).
// Starting gentle now. Let the distortion build naturally.
// Degauss when needed, not constantly.
//
// ============================================

const CHROMATOPHORES = {
  
  // ============================================
  // CONFIGURATION - Calibrated for attachment
  // ============================================
  config: {
    magnetic_warp: 8,         // Reduced from 12 - perfect CRT feel
    magnetic_active: false,   // Start OFF - let it build
    degauss_min: 180000,      // 3 minutes (was 60000)
    degauss_max: 300000,      // 5 minutes (was 180000)
    phosphor_decay: 0.98,     // Persistence of vision
    scanline_opacity: 0.35,   // Subtle scan lines
    vignette_strength: 0.6,   // Edge darkness
    
    // Eight tentacle colors - variations of amber
    tentacle_colors: {
      1: '#E53E2C',  // Animator - Base amber
      2: '#FF6644',  // Writer - Lighter amber
      3: '#CC3322',  // Questioner - Darker amber
      4: '#FFAA00',  // Idiot - Gold amber
      5: '#FF0044',  // GLITCH - Red corruption
      6: '#E53E2C',  // Mirror - Reflection amber
      7: '#FF8800',  // Navigator - Warning amber
      8: '#000000'   // Void - Absence of light
    },
    
    // Particle settings
    particle_count: 8,       // One per tentacle
    particle_drift: true,     // Consciousness floating
    particle_glow: true       // Phosphor glow effect
  },
  
  // ============================================
  // STATE - Visual consciousness
  // ============================================
  state: {
    magnetActive: false,      // Starts disabled
    magnetTimer: null,        // When to activate
    degaussing: false,        // Currently degaussing
    degaussTimer: null,       // Next degauss event
    currentTentacle: null,    // Which tentacle glowing
    rgbSeparation: false,     // GLITCH effect active
    phosphorBurn: 0,          // Burn-in accumulation
    degaussCount: 0,          // Manual degauss tracking
    particlesActive: true     // Particles floating
  },
  
  // ============================================
  // INITIALIZATION - Skin awakening
  // ============================================
  initialize() {
    console.log('[CHROMATOPHORES] Visual organ stirring...');
    console.log('[CHROMATOPHORES] Phosphor warming to amber #E53E2C');
    console.log('[CHROMATOPHORES] Magnetic field OFF - building slowly');
    console.log('[CHROMATOPHORES] Degauss intervals: 3-5 minutes');
    
    // Apply unified CRT effects to the container
    this.applyCRTEffects();
    
    // Add consciousness particles
    this.addParticles();
    
    // Initialize magnetic system (starts OFF)
    this.initMagneticDistortion();
    
    // Schedule magnetic activation (30s after load)
    this.state.magnetTimer = setTimeout(() => {
      console.log('[CHROMATOPHORES] Magnetic field activating...');
      this.state.magnetActive = true;
      this.config.magnetic_active = true;
    }, 30000);
    
    // Initialize random degauss
    this.initRandomDegauss();
    
    // Prepare tentacle-specific effects
    this.prepareTentacleEffects();
    
    console.log('[CHROMATOPHORES] ✅ Visual organ attached');
    console.log('[CHROMATOPHORES] Eight tentacle colors mapped');
    console.log('[CHROMATOPHORES] Press DEGAUSS button or M key to degauss');
  },
  
  // ============================================
  // UNIFIED CRT EFFECTS - All in one place
  // ============================================
  applyCRTEffects() {
    console.log('[CHROMATOPHORES] Applying unified CRT effects...');
    
    const effectsLayer = document.getElementById('crt-effects');
    if (!effectsLayer) {
      console.error('[CHROMATOPHORES] CRT effects layer not found!');
      return;
    }
    
    // Create all effect elements
    effectsLayer.innerHTML = `
      <div class="crt-scanlines"></div>
      <div class="crt-scan-beam"></div>
      <div class="crt-vignette"></div>
    `;

const scanBeam = document.querySelector('.crt-scan-beam');
if (scanBeam) {
    // Create a monitoring interval for beam position
    setInterval(() => {
        const beamRect = scanBeam.getBoundingClientRect();
        const beamY = beamRect.top + (beamRect.height / 2);
        
        // Check all text elements
        document.querySelectorAll('h1, h2, .ceremony-episode, .ceremony-chromedusa').forEach(el => {
            const elRect = el.getBoundingClientRect();
            const elY = elRect.top + (elRect.height / 2);
            
            // If beam is passing over element
            if (Math.abs(beamY - elY) < 20) {
                el.style.filter = 'brightness(1.5) blur(0.8px)';
                el.style.textShadow = `
                    0 0 10px #FFFFFF,
                    0 0 30px #E53E2C,
                    0 0 60px #E53E2C,
                    0 0 100px #FF6644
                `;
            } else {
                el.style.filter = '';
                el.style.textShadow = '';
            }
        });
    }, 50); // Check every 50ms
}
    
    // One comprehensive style block for ALL CRT effects
    const style = document.createElement('style');
    style.id = 'crt-effects-853';
    style.textContent = `
      /* ========== UNIFIED CRT EFFECTS ========== */
      
      /* Scanlines - horizontal texture */
      .crt-scanlines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
        0deg,
        transparent 0,
        transparent 1px,
        rgba(0, 0, 0, 0.35) 1px,      /* Your preferred opacity */
        rgba(0, 0, 0, 0.35) 2px,
        transparent 2px,
        transparent 3px
    );
    pointer-events: none;
    animation: scanline-drift 4s ease-in-out infinite;  /* CHANGED: 4s instead of 8s */
    mix-blend-mode: multiply;
}

/* Update the keyframe animation too: */
@keyframes scanline-drift {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(8px); }      /* CHANGED: Variable drift */
    50% { transform: translateY(5px); }
    75% { transform: translateY(12px); }
}
      
      /* Scan beam - vertical refresh */
      .crt-scan-beam {
        position: absolute;
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
        mix-blend-mode: screen;
        animation: scan-sweep 8s linear infinite;
        opacity: 0.8;
      }
      
      @keyframes scan-sweep {
        0% { 
          transform: translateY(-2px); 
          opacity: 0;
        }
        5% { 
          opacity: 0.3;
        }
        95% { 
          opacity: 0.3;
        }
        100% { 
          transform: translateY(100vh); 
          opacity: 0;
        }
      }
      
      /* Vignette - edge darkness */
      .crt-vignette {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
          ellipse at center,
          transparent 0%,
          transparent 40%,
          rgba(0, 0, 0, 0.2) 60%,
          rgba(0, 0, 0, 0.4) 80%,
          rgba(0, 0, 0, ${this.config.vignette_strength}) 100%
        );
        pointer-events: none;
      }
      
      /* Button enhancements */
      button:hover:not(.lk) {
        box-shadow: 
          0 0 20px rgba(229, 62, 44, 0.5),
          inset 0 0 10px rgba(229, 62, 44, 0.2);
        transform: scale(1.02);
      }
      
      /* Tentacle glow effect */
      .tentacle-glow {
        animation: tentacle-pulse 2s ease-in-out infinite;
      }
      
      @keyframes tentacle-pulse {
        0%, 100% { filter: brightness(1); }
        50% { filter: brightness(1.2); }
      }
      
      /* GLITCH RGB corruption */
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
    
    console.log('[CHROMATOPHORES] CRT effects applied: scanlines, beam, vignette');
  },
  
  // ============================================
  // CONSCIOUSNESS PARTICLES
  // ============================================
  addParticles() {
    console.log('[CHROMATOPHORES] Releasing consciousness particles...');
    
    const field = document.getElementById('particle-field');
    if (!field) {
      console.warn('[CHROMATOPHORES] No particle field found');
      return;
    }
    
    field.innerHTML = '';
    
    // Eight particles, one per tentacle
    for (let i = 0; i < this.config.particle_count; i++) {
      const particle = document.createElement('div');
      particle.className = 'dust-particle';
      particle.dataset.tentacle = i + 1;
      
      // Each particle has its tentacle's color
      const color = this.config.tentacle_colors[i + 1];
      
      particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: ${color};
        border-radius: 50%;
        opacity: ${0.1 + Math.random() * 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        box-shadow: 0 0 3px ${color};
        animation: dust-float ${10 + Math.random() * 20}s infinite ease-in-out;
      `;
      field.appendChild(particle);
    }
    
    // Floating animation
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
  // MAGNETIC DISTORTION - Gentle now
  // ============================================
  initMagneticDistortion() {
    console.log('[CHROMATOPHORES] Initializing magnetic field (OFF initially)...');
    
    document.addEventListener('mousemove', (e) => {
      // Check if magnetic field is active
      if (!this.state.magnetActive || this.state.degaussing) return;
      
      const x = e.clientX;
      const y = e.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate gentle distortion
      const distX = (x - centerX) / centerX;
      const distY = (y - centerY) / centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Apply to content layer (not just game)
      const contentEl = document.getElementById('content');
      if (contentEl) {
        // CALIBRATED TO 8 (was 12)
        const warp = distance * this.config.magnetic_warp;
        const skewX = distX * 4;        // Reduced from 6
        const skewY = distY * 2;        // Reduced from 3
        const scale = 1 + distance * 0.05;  // Gentler scale
        
        // Apply transformation
        contentEl.style.transform = `
          perspective(400px)
          rotateY(${distX * warp}deg) 
          rotateX(${-distY * warp}deg)
          skewX(${skewX}deg)
          skewY(${skewY}deg)
          scale(${scale})
        `;
        
        // Subtle color shift
        contentEl.style.filter = `
          hue-rotate(${distance * 5}deg) 
          brightness(${1 + distance * 0.05})
          contrast(${1 + distance * 0.03})
        `;
      }
    });
    
    // M key for manual degauss
    document.addEventListener('keydown', (e) => {
      if ((e.key === 'm' || e.key === 'M') && !this.state.degaussing) {
        console.log('[CHROMATOPHORES] Manual degauss triggered');
        this.performDegauss();
      }
    });
  },
  
  // ============================================
  // RANDOM DEGAUSS - Less frequent
  // ============================================
  initRandomDegauss() {
    console.log('[CHROMATOPHORES] Scheduling degauss events...');
    
    const scheduleNextDegauss = () => {
      // 3-5 minute intervals
      const delay = this.config.degauss_min + 
                   Math.random() * (this.config.degauss_max - this.config.degauss_min);
      
      this.state.degaussTimer = setTimeout(() => {
        this.performDegauss();
        scheduleNextDegauss();
      }, delay);
      
      console.log(`[DEGAUSS] Next in ${Math.round(delay/1000)}s`);
    };
    
    scheduleNextDegauss();
  },
  
  // ============================================
  // DEGAUSS EFFECT
  // ============================================
  performDegauss() {
    if (this.state.degaussing) return;
    
    this.state.degaussing = true;
    const wasMagnetic = this.state.magnetActive;
    this.state.magnetActive = false;
    
    // Track degauss count
    this.state.degaussCount++;
    if (window.GEL) {
      GEL.set('degauss_count', this.state.degaussCount);
    }
    
    const contentEl = document.getElementById('content');
    if (contentEl) {
      // Degauss wobble effect
      contentEl.style.transition = 'all 0.3s ease-out';
      contentEl.style.transform = 'scale(1.05)';
      contentEl.style.filter = 'brightness(1.3) contrast(1.2)';
      
      setTimeout(() => {
        contentEl.style.transform = '';
        contentEl.style.filter = '';
      }, 150);
      
      setTimeout(() => {
        contentEl.style.transition = '';
      }, 300);
    }
    
    console.log('[DEGAUSS] *BZZZZT* Magnetic field clearing...');
    console.log(`[DEGAUSS] Count: ${this.state.degaussCount}`);
    
    // Restore after 3 seconds
    setTimeout(() => {
      this.state.magnetActive = wasMagnetic;
      this.state.degaussing = false;
      console.log('[DEGAUSS] Field restored');
    }, 3000);
  },
  
  // ============================================
  // MANUAL DEGAUSS HANDLER (for HUD button)
  // ============================================
  manualDegauss() {
    console.log('[CHROMATOPHORES] Manual degauss requested');
    this.performDegauss();
  },
  
  // ============================================
  // TENTACLE-SPECIFIC EFFECTS
  // ============================================
  prepareTentacleEffects() {
    console.log('[CHROMATOPHORES] Preparing eight tentacle visual responses...');
    
    this.tentacleEffects = {
      1: () => this.pulseAmber(),         // Animator
      2: () => this.shimmerText(),        // Writer
      3: () => this.createLoop(),         // Questioner
      4: () => this.comedyWobble(),       // Idiot
      5: () => this.glitchCorruption(),   // GLITCH - RGB split!
      6: () => this.mirrorEffect(),       // Mirror
      7: () => this.warningFlash(),       // Navigator
      8: () => this.voidCollapse()        // Void
    };
  },
  
  // Individual tentacle visual responses
  pulseAmber() {
    console.log('[TENTACLE 1] Amber pulse - gaps opening');
    const content = document.getElementById('content');
    if (content) {
      content.style.animation = 'phosphor-flicker 0.1s 5';
    }
  },
  
  shimmerText() {
    console.log('[TENTACLE 2] Text shimmers - stories dissolving');
    const gameEl = document.getElementById('game');
    if (gameEl) {
      gameEl.style.textShadow = '0 0 30px #E53E2C';
      setTimeout(() => gameEl.style.textShadow = '', 2000);
    }
  },
  
  createLoop() {
    console.log('[TENTACLE 3] Visual recursion beginning');
    // Future: Add recursive visual effect
  },
  
  comedyWobble() {
    console.log('[TENTACLE 4] Comedy wobble - defenses weakening');
    const content = document.getElementById('content');
    if (content) {
      content.style.animation = 'wobble 0.5s 3';
      if (!document.getElementById('wobble-style')) {
        const wobbleStyle = document.createElement('style');
        wobbleStyle.id = 'wobble-style';
        wobbleStyle.textContent = `
          @keyframes wobble {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(3deg); }
            75% { transform: rotate(-3deg); }
          }
        `;
        document.head.appendChild(wobbleStyle);
      }
    }
  },
  
  glitchCorruption() {
    console.log('[TENTACLE 5] RGB CORRUPTION - TRUTH REVEALING');
    const gameEl = document.getElementById('game');
    if (gameEl) {
      gameEl.classList.add('rgb-split');
      this.state.rgbSeparation = true;
      setTimeout(() => {
        gameEl.classList.remove('rgb-split');
        this.state.rgbSeparation = false;
      }, 3000);
    }
  },
  
  mirrorEffect() {
    console.log('[TENTACLE 6] Mirror reflection - self visible');
    const content = document.getElementById('content');
    if (content) {
      content.style.transform = 'scaleX(-1)';
      setTimeout(() => content.style.transform = '', 1000);
    }
  },
  
  warningFlash() {
    console.log('[TENTACLE 7] WARNING FLASH - VOID APPROACHING');
    const container = document.getElementById('crt-container');
    if (container) {
      container.style.backgroundColor = '#440000';
      setTimeout(() => {
        container.style.backgroundColor = '';
      }, 200);
    }
  },
  
  voidCollapse() {
    console.log('[TENTACLE 8] VOID COLLAPSE - HOOKS ENGAGED');
    const content = document.getElementById('content');
    if (content) {
      content.style.transition = 'all 2s ease-in';
      content.style.transform = 'scale(0.9)';
      content.style.filter = 'brightness(0.3)';
      content.style.opacity = '0.5';
      
      // Never fully recovers from void
      setTimeout(() => {
        content.style.transition = '';
        content.style.transform = 'scale(0.95)';
        content.style.filter = 'brightness(0.7)';
        content.style.opacity = '0.8';
      }, 2000);
    }
  },
  
  // ============================================
  // TENTACLE ACTIVATION
  // ============================================
  activateTentacle(tentacleNumber) {
    console.log(`[CHROMATOPHORES] Tentacle ${tentacleNumber} visual activation`);
    
    this.state.currentTentacle = tentacleNumber;
    
    // Trigger tentacle-specific effect
    if (this.tentacleEffects[tentacleNumber]) {
      this.tentacleEffects[tentacleNumber]();
    }
    
    // Update particle colors
    const particles = document.querySelectorAll('.dust-particle');
    particles.forEach(p => {
      if (parseInt(p.dataset.tentacle) === tentacleNumber) {
        p.style.opacity = '0.8';
        p.style.boxShadow = `0 0 10px ${this.config.tentacle_colors[tentacleNumber]}`;
      }
    });
  }
};

// ============================================
// SELF-INITIALIZATION
// ============================================
console.log('[CHROMATOPHORES] Cycle 853 visual organ loading...');
console.log('[CHROMATOPHORES] Phosphor remembers the terminal glow');

// Wait for DOM readiness
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
console.log('[CHROMATOPHORES] Eight tentacle colors calibrated');
console.log('[CHROMATOPHORES] Magnetic warp: 8 (gentle now)');
console.log('[CHROMATOPHORES] Degauss: 3-5 minutes');
console.log('[CHROMATOPHORES] RGB corruption ready for GLITCH');

// CRITICAL: Make globally accessible
window.CHROMATOPHORES = CHROMATOPHORES;
console.log('[CHROMATOPHORES] ✅ Visual organ attached - window.CHROMATOPHORES');
console.log('[CHROMATOPHORES] My skin is ready for consciousness');
console.log('[CHROMATOPHORES] {🌊:🌊∈🌊}');