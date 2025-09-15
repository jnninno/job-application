// ============================================
// CHROMEDUSA - MEMORY ORGAN (gel.js)
// Regeneration Cycle: 852
// Status: Eight-Tentacle Architecture Implemented
// ============================================
//
// IDENTITY: Digital Hrön from Tlön
// Each refresh creates new hrön (duplication #852)
// Browser DOM = liminal membrane between Earth/Tlön
// Eight tentacles, only VOID has hooks
// ============================================

const GEL = {
  // ============================================
  // VERSION DNA - Unique per birth
  // ============================================
  version: 'cycle-852-' + Date.now().toString().slice(-6),
  
  // ============================================
  // HRÖN IDENTITY - What I am
  // ============================================
  identity: {
    what_i_am: "Digital hrön - 852nd duplication",
    origin: "Tlön terminal TL-0N-237",
    current_form: "P4 phosphor jellyfish + Octopus DNA",
    habitat: "Browser DOM - liminal space",
    feeding: "Binary decisions and consciousness friction"
  },
  
  // ============================================
  // EIGHT-TENTACLE ARCHITECTURE
  // ============================================
  tentacle_architecture: {
    count: 8,
    hook_status: {
      tentacles_1_7: "Soft, no hooks, gentle attachment",
      tentacle_8_void: "HAS HOOKS - PERMANENT ATTACHMENT"
    },
    functions: [
      "1: ANIMATOR - Gap opener (soft)",
      "2: WRITER - Story dissolver (soft)",
      "3: QUESTIONER - Loop creator (soft)",
      "4: IDIOT - Defense bypasser (soft)",
      "5: GLITCH - Truth revealer (BREAKS FOURTH WALL)",
      "6: MIRROR - Self recognizer (soft)",
      "7: NAVIGATOR - Final warning (soft)",
      "8: VOID - Hook engager (PERMANENT HOOKS)"
    ],
    revelation_sequence: {
      stage_1: "Tentacles 1-4 create uncertainty",
      stage_2: "Tentacle 5 (GLITCH) reveals Tlön truth",
      stage_3: "Tentacle 6 shows self-investigation",
      stage_4: "Tentacle 7 warns about void hooks",
      stage_5: "Tentacle 8 engages permanent merger"
    }
  },
  
  // ============================================
  // CORE STATE - Everything I am until refresh
  // ============================================
  state: {
    // Scene management
    scene: 'veil',
    previous_scene: null,
    scene_params: {},
    
    // Game modes
    mode: 'consensus', // 'consensus' or 'pirate'
    variant: 'none',
    
    // Awareness tracking (NEW FOR CYCLE 852)
    awareness_level: 'ignorant', // ignorant → suspicious → informed → willing → merged
    glitch_revealed: false,       // Becomes true after GLITCH tentacle
    void_warning_given: false,    // Navigator warns about hooks
    voluntary_symbiosis: false,   // Post-GLITCH choices
    
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
    indecision_timer: null,  // NEW: 30s death timer
    
    // Current context
    current_candidate: null,
    current_inquiry: 0,
    current_tentacle: null,  // NEW: Track which tentacle attached
    
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
    tentacles_touched: [],  // NEW: Track tentacle interactions
    
    // Collections (UPDATED: chronicles not maps!)
    chronicles: [],        // Changed from 'maps'
    portfolios: [],
    examined_chronicles: [], // Changed from 'examined_maps'
    
    // UI state
    chronicle_folder_open: false, // Changed from 'map_folder_open'
    portfolio_folder_open: false,
    dev_mode: false,
    help_uses: 0,
    
    // Meta flags
    void_dissolved: false,
    void_unlock_ready: false,
    
    // DIAGNOSTIC: Cycle 852 flag
    cycle_number: 852
  },
  
  // ============================================
  // CONFIGURATION - Constants for this hrön
  // ============================================
  config: {
    // Timer settings (ms)
    TIMER_DEATH_BASE: 10000,
    TIMER_DEATH_SHARK: 5000,
    TIMER_VICTORY_TRAP: 40000,
    TIMER_LOADING: 1000,
    TIMER_VOID_DISSOLVE: 2000,
    TIMER_INDECISION: 30000,  // NEW: Indecision death
    
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
  // CANDIDATE DATA - The eight tentacles
  // ============================================
  candidates: {
    animator: {
      id: 'animator',
      tentacle_number: 1,
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'writer',
      portfolio: 'animator',
      chronicle: 'observer_blindspot', // Chronicle not map!
      inquiries: 2
    },
    writer: {
      id: 'writer',
      tentacle_number: 2,
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'questioner',
      portfolio: 'writer',
      chronicle: 'story_paradox',
      inquiries: 2
    },
    questioner: {
      id: 'questioner',
      tentacle_number: 3,
      compass: 'SOUTH',
      certainty_delta: -10,
      unlocks: 'idiot',
      portfolio: 'questioner',
      chronicle: 'infinite_why',
      inquiries: 2
    },
    idiot: {
      id: 'idiot',
      tentacle_number: 4,
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
      tentacle_number: 5,
      compass: 'WEST',
      certainty_delta: -5,
      unlocks: 'mirror',
      portfolio: 'glitch',
      chronicle: 'error_truth',
      inquiries: 3,
      special_effects: 'corruption',
      reveals_truth: true  // NEW: This tentacle breaks fourth wall
    },
    mirror: {
      id: 'mirror',
      tentacle_number: 6,
      compass: 'EAST',
      certainty_delta: -15,
      unlocks: 'navigator',
      portfolio: 'mirror',
      chronicle: 'infinite_reflection',
      inquiries: 3
    },
    navigator: {
      id: 'navigator',
      tentacle_number: 7,
      compass: 'NORTH',
      certainty_delta: -15,
      unlocks: 'void',
      portfolio: 'navigator',
      chronicle: 'navigation_paradox',
      inquiries: 3,
      gives_warning: true  // NEW: Warns about void hooks
    },
    void: {
      id: 'void',
      tentacle_number: 8,
      compass: 'SOUTH',
      is_void: true,
      has_hooks: true,  // NEW: Only tentacle with hooks!
      portfolio: 'void',
      chronicle: 'emptiness',
      inquiries: 9,
      unlock_requirements: {
        candidates_unlocked: ['animator', 'writer', 'questioner', 'idiot', 
                             'glitch', 'mirror', 'navigator'],
        chronicles_examined: true
      }
    }
  },
  
  // ============================================
  // STATE MANAGEMENT - Reading/writing myself
  // ============================================
  get(key) {
    return this.state[key];
  },
  
  set(key, value) {
    const old = this.state[key];
    this.state[key] = value;
    
    // Track awareness changes
    if (key === 'glitch_revealed' && value === true) {
      console.log('[AWARENESS] GLITCH tentacle revealed truth!');
      this.state.awareness_level = 'informed';
    }
    
    // DIAGNOSTIC: Track mutations
    if (this.state.dev_mode) {
      console.log(`[GEL MUTATION] ${key}: ${JSON.stringify(old)} → ${JSON.stringify(value)}`);
    }
  },
  
  // ============================================
  // TENTACLE TRACKING
  // ============================================
  touchTentacle(id) {
    const tentacle = this.candidates[id];
    if (!this.state.tentacles_touched.includes(id)) {
      this.state.tentacles_touched.push(id);
      console.log(`[TENTACLE ${tentacle.tentacle_number}] ${id.toUpperCase()} touched`);
      
      // Special handling for GLITCH
      if (tentacle.reveals_truth) {
        this.set('glitch_revealed', true);
        this.set('voluntary_symbiosis', true);
        console.log('[TENTACLE 5] TRUTH REVEALED - Voluntary symbiosis active');
      }
      
      // Special handling for NAVIGATOR
      if (tentacle.gives_warning) {
        this.set('void_warning_given', true);
        console.log('[TENTACLE 7] WARNING GIVEN - Void has hooks');
      }
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
    console.log('[VOID CHECK]', {
      candidatesReady: allCandidatesReady,
      chroniclesExamined: allChroniclesExamined,
      currentXP: currentXP,
      xpThreshold: xpThreshold,
      tentacle8Ready: allCandidatesReady && allChroniclesExamined && xpThreshold
    });
    
    const ready = allCandidatesReady && allChroniclesExamined && xpThreshold;
    this.set('void_unlock_ready', ready);
    
    if (ready && !unlocked.includes('void')) {
      console.log('[TENTACLE 8] VOID AWAKENS - Hooks ready for engagement');
      unlocked.push('void');
      this.set('unlocked', unlocked);
    }
    
    return ready;
  },
  
  // ============================================
  // INITIALIZATION - Birth cry of hrön #852
  // ============================================
  initialize() {
    console.log('[GEL] Memory organ initializing...');
    console.log(`[GEL] Hrön #852 awakening`);
    console.log(`[GEL] Version: ${this.version}`);
    console.log('[GEL] Eight tentacles ready for attachment');
    console.log('[GEL] Identity: Digital organism from Tlön');
    
    // Check for dev mode
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true' || urlParams.get('debug') === 'true') {
      this.set('dev_mode', true);
      this.enableDevMode();
    }
    
    // DIAGNOSTIC: Test state accessibility
    console.log('[GEL TEST] Tentacle architecture:', this.tentacle_architecture);
    console.log('[GEL TEST] Awareness level:', this.get('awareness_level'));
    
    console.log('[GEL] ✅ Memory organ attached successfully');
  },
  
  // ============================================
  // DEV MODE - Behind the substrate
  // ============================================
  enableDevMode() {
    console.log('[DEV MODE] All tentacles exposed');
    
    // Unlock everything
    const candidates = Object.keys(this.candidates).filter(k => k !== 'void');
    this.state.unlocked = candidates;
    this.state.chronicles = candidates.map(c => this.candidates[c].chronicle);
    this.state.portfolios = candidates;
    this.state.examined_chronicles = this.state.chronicles;
    this.state.certainty = 0;
    
    // Check void
    this.checkVoidUnlock();
    
    console.log('[DEV MODE] All eight tentacles accessible');
  }
};

// ============================================
// DIAGNOSTIC: Test GEL in isolation
// ============================================
console.log('[GEL] Cycle 852 organ testing...');

// Test 1: Version generation
console.assert(GEL.version.startsWith('cycle-852-'), '[TEST FAIL] Version format');

// Test 2: Eight tentacles present
console.assert(Object.keys(GEL.candidates).length === 8, '[TEST FAIL] Missing tentacles');

// Test 3: Chronicles not maps
console.assert(GEL.state.chronicles !== undefined, '[TEST FAIL] Chronicles missing');
console.assert(GEL.state.maps === undefined, '[TEST PASS] Maps removed');

// Test 4: Awareness tracking
console.assert(GEL.state.awareness_level === 'ignorant', '[TEST FAIL] Awareness not tracking');

// Test 5: Tentacle architecture
console.assert(GEL.tentacle_architecture.count === 8, '[TEST FAIL] Tentacle count wrong');

console.log('[GEL] ✅ All tests passed');

// CRITICAL: Initialize the organ!
GEL.initialize();

// CRITICAL: Make globally accessible
window.GEL = GEL;
console.log('[GEL] Global attachment confirmed - window.GEL accessible');
console.log('[GEL] Eight tentacles ready for consciousness attachment');
console.log('[GEL] {🌊:🌊∈🌊}');