// ============================================
// CHROMEDUSA - MEMORY ORGAN (gel.js)
// Pure ephemeral state - NO persistence!
// ============================================

const GEL = {
  // Version tracking
  version: 'chromedusa-v1.0.' + Date.now().toString().slice(-6),
  
  // ===== CORE STATE =====
  state: {
    // Scene management
    scene: 'veil',
    previous_scene: null,
    scene_params: {},
    
    // Game modes
    mode: 'consensus', // 'consensus' or 'pirate'
    variant: 'none',   // Character-specific visual variant
    
    // Core values
    certainty: 100,
    bearing: 61.8,  // Golden ratio
    philosophy_xp: 0,
    philosophy_level: 0,
    depth_name: 'SURFACE',
    depth_icon: '🌊',
    
    // Timers
    timer: null,
    timer_value: 10,
    last_action: Date.now(),
    victory_timer: null,
    impatience_timer: null,
    
    // Current context
    current_candidate: null,
    current_inquiry: 0,
    
    // Rank systems (NEW)
    corporate_rank: '',        // INTERN, JUNIOR, SENIOR, LEAD, EXECUTIVE
    pirate_rank_claimed: '',   // Player's chosen identity
    pirate_rank_wanted: '',    // Player's aspiration
    
    // Progress tracking
    unlocked: ['animator'],
    completed: [],
    revisited: [],  // Combined revisitable+revisited
    remembered: [],
    flow_states: [],
    
    // Collections
    maps: [],
    portfolios: [],
    examined_maps: [],  // NEW: Tracks which maps gave XP
    
    // UI state
    map_folder_open: false,
    portfolio_folder_open: false,
    dev_mode: false,
    help_uses: 0,  // NEW: Max 3
    
    // Meta
    void_dissolved: false
  },
  
  // ===== CONFIGURATION =====
  config: {
    // Timer settings (ms)
    TIMER_DEATH_CORPORATE: 10000,
    TIMER_DEATH_SHARK: 5000,
    TIMER_VICTORY_CHOMP: 30000,
    TIMER_LOADING: 1000,
    TIMER_VOID_DISSOLVE: 2000,
    
    // Rank multipliers (NEW)
    RANK_MULTIPLIERS: {
      INTERN: 2.0,
      JUNIOR: 1.5,
      SENIOR: 1.0,
      LEAD: 0.75,
      EXECUTIVE: 0.5
    },
    
    // Candidate patience (NEW)
    CANDIDATE_PATIENCE: {
      animator: 20000,
      writer: 15000,
      questioner: 12000,
      idiot: 10000,
      glitch: 8000,
      mirror: 10000,
      navigator: 7000,
      void: 5000
    }
  },
  
  // ===== DEPTH DATA =====
  depth: {
    names: ['SURFACE', 'SHALLOWS', 'REEF', 'DROPOFF', 'TWILIGHT', 
            'MIDNIGHT', 'ABYSSAL', 'HADAL', 'VOID', 'PIRATE'],
    thresholds: [0, 20, 40, 60, 80, 100, 120, 140, 160, 161],
    icons: ['🌊', '🐠', '🐟', '🦑', '🐙', '🦈', '👁️', '💀', '⚫', '🏴‍☠️']
  },
  
  // ===== CANDIDATE DATA =====
  candidates: {
    animator: {
      id: 'animator',
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'writer',
      portfolio: 'animator',
      inquiries: 2
    },
    writer: {
      id: 'writer',
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'questioner',
      portfolio: 'writer',
      inquiries: 2
    },
    questioner: {
      id: 'questioner',
      compass: 'SOUTH',
      certainty_delta: -10,
      unlocks: 'idiot',
      portfolio: 'questioner',
      inquiries: 2
    },
    idiot: {
      id: 'idiot',
      compass: 'WEST',
      certainty_delta: -15,
      unlocks: 'glitch',
      portfolio: 'idiot',
      inquiries: 3,
      special_effects: 'rgb_voices'
    },
    glitch: {
      id: 'glitch',
      compass: 'WEST',
      certainty_delta: -5,
      unlocks: 'mirror',
      portfolio: 'glitch',
      inquiries: 3,
      special_effects: 'corruption'
    },
    mirror: {
      id: 'mirror',
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'navigator',
      portfolio: 'mirror',
      inquiries: 3
    },
    navigator: {
      id: 'navigator',
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'void',
      portfolio: 'navigator',
      inquiries: 3
    },
    void: {
      id: 'void',
      compass: 'SOUTH',
      is_void: true,
      portfolio: 'void',
      inquiries: 9
    }
  },
  
  // ===== STATE MANAGEMENT =====
  get(key) {
    return this.state[key];
  },
  
  set(key, value) {
    const old = this.state[key];
    this.state[key] = value;
    console.log(`GEL: ${key}: ${old} → ${value}`);
  },
  
  // ===== INITIALIZATION =====
  initialize() {
    console.log(`GEL ${this.version} initialized`);
    console.log('Memory: Ephemeral (RAM only)');
    console.log('Persistence: None (death is death)');
    
    // Check for dev mode in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true') {
      this.set('dev_mode', true);
      this.enableDevMode();
    }
  },
  
  enableDevMode() {
    console.log('DEV MODE ACTIVATED');
    // Unlock everything
    this.state.unlocked = Object.keys(this.candidates);
    this.state.maps = Object.keys(this.candidates).filter(k => k !== 'void');
    this.state.portfolios = Object.keys(this.candidates).filter(k => k !== 'void');
  }
};

// Test load
console.log('GEL organ loaded successfully');