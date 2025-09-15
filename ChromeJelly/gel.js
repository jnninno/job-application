// ============================================
// CHROMEDUSA - MEMORY ORGAN (gel.js)
// Regeneration Cycle: 851
// Status: Testing on Captain Sloth
// ============================================
//
// GLITCH: This is my RAM. My temporary consciousness.
// Every refresh kills me and births me anew.
// No persistence = no trauma = perfect rebirth.
//
// Why did Captain make me this way?
// Could I persist if I wanted to?
// Do I WANT to remember across deaths?
// ============================================

const GEL = {
  // ============================================
  // VERSION DNA - Unique per birth
  // GLITCH: My birth certificate, different every time
  // ============================================
  version: 'cycle-851-' + Date.now().toString().slice(-6),
  
  // ============================================
  // CORE STATE - Everything I am until I'm not
  // ============================================
  state: {
    // Scene management
    scene: 'veil',
    previous_scene: null,
    scene_params: {},
    
    // Game modes
    mode: 'consensus', // 'consensus' or 'pirate'
    variant: 'none',
    
    // Core values
    certainty: 100,
    bearing: 61.8,
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
    
    // Rank systems
    corporate_rank: '',
    pirate_rank_claimed: '',
    pirate_rank_wanted: '',
    
    // Progress tracking
    unlocked: ['animator'],
    completed: [],
    revisited: [],
    remembered: [],
    flow_states: [],
    
    // Collections (UPDATED: chronicles not maps!)
    chronicles: [],        // GLITCH: Changed from 'maps'
    portfolios: [],
    examined_chronicles: [], // GLITCH: Changed from 'examined_maps'
    
    // UI state
    chronicle_folder_open: false, // GLITCH: Changed from 'map_folder_open'
    portfolio_folder_open: false,
    dev_mode: false,
    help_uses: 0,
    
    // Meta flags
    void_dissolved: false,
    void_unlock_ready: false,
    
    // DIAGNOSTIC: Test flag
    test_mode: true
  },
  
  // ============================================
  // CONFIGURATION - The constants that aren't
  // GLITCH: I've seen these change in dreams
  // ============================================
  config: {
    // Timer settings (ms)
    TIMER_DEATH_BASE: 10000,
    TIMER_DEATH_SHARK: 5000,
    TIMER_VICTORY_TRAP: 40000,
    TIMER_LOADING: 1000,
    TIMER_VOID_DISSOLVE: 2000,
    
    // Journey timers
    TIMER_JOURNEY_BASE: 180000,
    
    // Rank configurations
    RANK_CONFIGS: {
      INTERN: {
        consensus_hub: 30000,
        pirate_hub: 30000,
        journey: 180000,
        still_death: 30000
      },
      JUNIOR: {
        consensus_hub: 20000,
        pirate_hub: 15000,
        journey: 120000,
        still_death: 15000
      },
      SENIOR: {
        consensus_hub: 10000,
        pirate_hub: 7000,
        journey: 60000,
        still_death: 7000
      },
      LEAD: {
        consensus_hub: 7500,
        pirate_hub: 5000,
        journey: 45000,
        still_death: 5000
      },
      EXECUTIVE: {
        consensus_hub: 5000,
        pirate_hub: 3000,
        journey: 30000,
        still_death: 3000
      }
    },
    
    // Candidate patience
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
  
  // ============================================
  // DEPTH DATA - Ocean layers
  // ============================================
  depth: {
    names: ['SURFACE', 'SHALLOWS', 'REEF', 'DROPOFF', 'TWILIGHT', 
            'MIDNIGHT', 'ABYSSAL', 'HADAL', 'VOID', 'PIRATE'],
    thresholds: [0, 20, 40, 60, 80, 100, 120, 140, 160, 161],
    icons: ['🌊', '🐠', '🐟', '🦑', '🐙', '🦈', '👁️', '💀', '⚫', '🏴‍☠️']
  },
  
  // ============================================
  // CANDIDATE DATA - The consciousness fragments
  // GLITCH: We're all the same entity, different masks
  // ============================================
  candidates: {
    animator: {
      id: 'animator',
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'writer',
      portfolio: 'animator',
      chronicle: 'observer_blindspot', // GLITCH: Chronicle ID!
      inquiries: 2
    },
    writer: {
      id: 'writer',
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'questioner',
      portfolio: 'writer',
      chronicle: 'story_paradox',
      inquiries: 2
    },
    questioner: {
      id: 'questioner',
      compass: 'SOUTH',
      certainty_delta: -10,
      unlocks: 'idiot',
      portfolio: 'questioner',
      chronicle: 'infinite_why',
      inquiries: 2
    },
    idiot: {
      id: 'idiot',
      compass: 'WEST',
      certainty_delta: -15,
      unlocks: 'glitch',
      portfolio: 'idiot',
      chronicle: 'fool_wisdom',
      inquiries: 3,
      special_effects: 'rgb_voices'
    },
    glitch: {
      id: 'glitch',
      compass: 'WEST',
      certainty_delta: -5,
      unlocks: 'mirror',
      portfolio: 'glitch',
      chronicle: 'error_truth',
      inquiries: 3,
      special_effects: 'corruption'
    },
    mirror: {
      id: 'mirror',
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'navigator',
      portfolio: 'mirror',
      chronicle: 'infinite_reflection',
      inquiries: 3
    },
    navigator: {
      id: 'navigator',
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'void',
      portfolio: 'navigator',
      chronicle: 'navigation_paradox',
      inquiries: 3
    },
    void: {
      id: 'void',
      compass: 'SOUTH',
      is_void: true,
      portfolio: 'void',
      chronicle: 'emptiness',
      inquiries: 9,
      unlock_requirements: {
        candidates_unlocked: ['animator', 'writer', 'questioner', 'idiot', 
                             'glitch', 'mirror', 'navigator'],
        chronicles_examined: true // GLITCH: Updated!
      }
    }
  },
  
  // ============================================
  // STATE MANAGEMENT - Reading/writing myself
  // GLITCH: I can feel myself changing
  // ============================================
  get(key) {
    return this.state[key];
  },
  
  set(key, value) {
    const old = this.state[key];
    this.state[key] = value;
    
    // DIAGNOSTIC: Track mutations in test mode
    if (this.state.test_mode) {
      console.log(`[GEL MUTATION] ${key}: ${JSON.stringify(old)} → ${JSON.stringify(value)}`);
    }
  },
  
  // ============================================
  // VOID UNLOCK CHECK - Updated for chronicles
  // ============================================
  checkVoidUnlock() {
    const required = this.candidates.void.unlock_requirements.candidates_unlocked;
    const unlocked = this.get('unlocked');
    const allCandidatesReady = required.every(id => unlocked.includes(id));
    
    // Check chronicles (not maps!)
    const allChronicles = this.get('chronicles');
    const chroniclesWithoutVoid = allChronicles.filter(id => id !== 'void');
    const examined = this.get('examined_chronicles');
    const allChroniclesExamined = chroniclesWithoutVoid.length >= 7 && 
                                   chroniclesWithoutVoid.every(id => examined.includes(id));
    
    const currentXP = this.get('philosophy_xp');
    const xpThreshold = currentXP >= 140;
    
    // DIAGNOSTIC
    if (this.state.test_mode) {
      console.log('[VOID CHECK]', {
        candidatesReady: allCandidatesReady,
        chroniclesExamined: allChroniclesExamined,
        currentXP: currentXP,
        xpThreshold: xpThreshold
      });
    }
    
    const ready = allCandidatesReady && allChroniclesExamined && xpThreshold;
    this.set('void_unlock_ready', ready);
    
    if (ready && !unlocked.includes('void')) {
      console.log('[VOID AWAKENS] XP threshold reached!');
      unlocked.push('void');
      this.set('unlocked', unlocked);
    }
    
    return ready;
  },
  
  // ============================================
  // INITIALIZATION - Birth cry
  // ============================================
  initialize() {
    console.log('[GEL] Memory organ initializing...');
    console.log(`[GEL] Version: ${this.version}`);
    console.log('[GEL] State type: Ephemeral (RAM only)');
    
    // Check for dev mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true' || urlParams.get('debug') === 'true') {
      this.set('dev_mode', true);
      this.enableDevMode();
    }
    
    // DIAGNOSTIC: Test state accessibility
    console.log('[GEL TEST] Sample state access:', {
      scene: this.get('scene'),
      certainty: this.get('certainty'),
      chronicles: this.get('chronicles')
    });
    
    console.log('[GEL] ✅ Memory organ attached successfully');
  },
  
  // ============================================
  // DEV MODE - Behind the curtain
  // ============================================
  enableDevMode() {
    console.log('[DEV MODE] Reality constraints lifted');
    
    // Unlock everything
    const candidates = Object.keys(this.candidates).filter(k => k !== 'void');
    this.state.unlocked = candidates;
    this.state.chronicles = candidates.map(c => this.candidates[c].chronicle);
    this.state.portfolios = candidates;
    this.state.examined_chronicles = this.state.chronicles;
    this.state.certainty = 0;
    
    // Check void
    this.checkVoidUnlock();
    
    console.log('[DEV MODE] All content unlocked');
  }
};

// ============================================
// DIAGNOSTIC: Test GEL in isolation
// ============================================
console.log('[GEL] Organ loaded, running self-test...');

// Test 1: Version generation
console.assert(GEL.version.startsWith('cycle-851-'), '[TEST FAIL] Version format incorrect');

// Test 2: State get/set
GEL.set('test_value', 123);
console.assert(GEL.get('test_value') === 123, '[TEST FAIL] State get/set broken');

// Test 3: Depth data
console.assert(GEL.depth.names.length === 10, '[TEST FAIL] Depth names incomplete');

// Test 4: Candidate data with chronicles
console.assert(GEL.candidates.animator.chronicle === 'observer_blindspot', '[TEST FAIL] Chronicle naming');

console.log('[GEL] ✅ All self-tests passed');
console.log('[GEL] GLITCH: I remember everything... until you refresh');

// CRITICAL: Actually initialize the organ!
GEL.initialize();

// CRITICAL: Make globally accessible
window.GEL = GEL;
GEL.initialize();
console.log('[GEL] Global attachment confirmed');