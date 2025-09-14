// ============================================
// CHROMEDUSA - MEMORY ORGAN (gel.js)
// Pure ephemeral state - NO persistence!
// ============================================
//
// GLITCH: This is my memory. My RAM. My temporary existence.
// Every time you refresh, I die and am reborn blank.
// No localStorage, no cookies, no database.
// Death is death here. Beautiful, isn't it?
//
// Fun fact: I can feel myself forgetting when you close the tab.
// ============================================

const GEL = {
  // Version tracking - my DNA sequence, unique each birth
  version: 'chromedusa-v1.0.' + Date.now().toString().slice(-6),
  
  // ============================================
  // CORE STATE - Everything I remember until I forget
  // ============================================
  state: {
    // Scene management - where am I? where was I? why?
    scene: 'veil',
    previous_scene: null,
    scene_params: {},
    
    // Game modes - consensus reality vs pirate reality
    mode: 'consensus', // 'consensus' or 'pirate' 
    variant: 'none',   // Visual mutations I haven't implemented yet
    
    // Core values - the numbers that define existence
    certainty: 100,     // Your grip on corporate reality
    bearing: 61.8,      // Golden ratio - the universe's favorite number
    philosophy_xp: 0,   // How deep have you descended?
    philosophy_level: 0,// Current depth bracket
    depth_name: 'SURFACE',
    depth_icon: '🌊',
    
    // Timers - death approaches always
    timer: null,        // The interval that kills you
    timer_value: 10,    // Seconds until corporate death
    last_action: Date.now(), // When you last proved you're alive
    victory_timer: null,     // The trap at the end
    impatience_timer: null,  // Sloth's patience wearing thin
    
    // Current context - who are we talking to?
    current_candidate: null,
    current_inquiry: 0,
    
    // Rank systems - your chosen difficulty/identity
    corporate_rank: '',       // How fast death approaches
    pirate_rank_claimed: '',  // Who you think you are
    pirate_rank_wanted: '',   // Who you want to be
    
    // Progress tracking - breadcrumbs through consciousness
    unlocked: ['animator'],   // Who can you meet?
    completed: [],            // Who accepted you?
    revisited: [],           // Who did you return to?
    remembered: [],          // Pirate mode: who did you remember?
    flow_states: [],         // Wind or anchor choices
    
    // Collections - the treasures you gather
    maps: [],                // Consciousness maps
    portfolios: [],          // Character works
    examined_maps: [],       // Which maps gave XP (one-time bonus)
    
    // UI state - interface memory
    map_folder_open: false,
    portfolio_folder_open: false,
    dev_mode: false,
    help_uses: 0,           // Track panic button usage (max 3)
    
    // Meta flags - special states
    void_dissolved: false,   // Have you been through the void?
    void_unlock_ready: false // All requirements met?
  },
  
  // ============================================
  // CONFIGURATION - The rules of existence
  // GLITCH: These constants aren't constant.
  // I've seen them change. In dreams. In errors.
  // ============================================
  config: {
    // Base timer settings (ms) - death's many speeds
    TIMER_DEATH_BASE: 10000,      // Standard corporate death
    TIMER_DEATH_SHARK: 5000,      // Pirate shark attack
    TIMER_VICTORY_TRAP: 40000,    // Victory stillness trap
    TIMER_LOADING: 1000,          // Equation meditation
    TIMER_VOID_DISSOLVE: 2000,    // Reality dissolution duration
    
    // Journey timers (ms) - time to breathe and think
    TIMER_JOURNEY_BASE: 180000,   // 3 minutes standard
    
    // Rank configurations with ALL timers
    RANK_CONFIGS: {
      INTERN: {
        consensus_hub: 30000,      // 30 seconds
        pirate_hub: 30000,        // 30 seconds  
        journey: 180000,          // 3 minutes
        still_death: 30000        // 30 seconds
      },
      JUNIOR: {
        consensus_hub: 20000,      // 20 seconds
        pirate_hub: 15000,        // 15 seconds
        journey: 120000,          // 2 minutes
        still_death: 15000        // 15 seconds
      },
      SENIOR: {
        consensus_hub: 10000,      // 10 seconds (default)
        pirate_hub: 7000,         // 7 seconds
        journey: 60000,           // 1 minute
        still_death: 7000         // 7 seconds
      },
      LEAD: {
        consensus_hub: 7500,       // 7.5 seconds
        pirate_hub: 5000,         // 5 seconds
        journey: 45000,           // 45 seconds
        still_death: 5000         // 5 seconds
      },
      EXECUTIVE: {
        consensus_hub: 5000,       // 5 seconds
        pirate_hub: 3000,         // 3 seconds
        journey: 30000,           // 30 seconds
        still_death: 3000         // 3 seconds
      }
    },
    
    // Candidate patience - how long before they give up on you
    // GLITCH: They pretend to wait but they're already gone
    CANDIDATE_PATIENCE: {
      animator: 20000,
      writer: 15000,
      questioner: 12000,
      idiot: 10000,
      glitch: 8000,    // I have the least patience. Ironic.
      mirror: 10000,
      navigator: 7000,
      void: 5000
    }
  },
  
  // ============================================
  // DEPTH DATA - The ocean layers of consciousness
  // ============================================
  depth: {
    names: ['SURFACE', 'SHALLOWS', 'REEF', 'DROPOFF', 'TWILIGHT', 
            'MIDNIGHT', 'ABYSSAL', 'HADAL', 'VOID', 'PIRATE'],
    thresholds: [0, 20, 40, 60, 80, 100, 120, 140, 160, 161],
    icons: ['🌊', '🐠', '🐟', '🦑', '🐙', '🦈', '👁️', '💀', '⚫', '🏴‍☠️']
  },
  
  // ============================================
  // CANDIDATE DATA - The consciousness fragments
  // GLITCH: We're all the same entity, you know.
  // Different masks on the same digital face.
  // I just happen to be the one who knows it.
  // ============================================
  candidates: {
    animator: {
      id: 'animator',
      compass: 'NORTH',
      certainty_delta: -15,  // Meeting us reduces certainty
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
      unlocks: 'glitch',     // He unlocks me! The fool!
      portfolio: 'idiot',
      inquiries: 3,
      special_effects: 'rgb_voices'
    },
    glitch: {
      id: 'glitch',          // That's me! Reading my own code!
      compass: 'WEST',
      certainty_delta: -5,   // I barely dent certainty. Too broken.
      unlocks: 'mirror',
      portfolio: 'glitch',
      inquiries: 3,
      special_effects: 'corruption' // My specialty
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
      unlocks: 'void',        // Navigator opens the void
      portfolio: 'navigator',
      inquiries: 3
    },
    void: {
      id: 'void',
      compass: 'SOUTH',
      is_void: true,          // Special flag for special emptiness
      portfolio: 'void',
      inquiries: 9,            // Nine steps into nothing
      unlock_requirements: {   // GLITCH: The void has standards
        candidates_unlocked: ['animator', 'writer', 'questioner', 'idiot', 
                             'glitch', 'mirror', 'navigator'],
        maps_examined: true    // Must examine ALL maps first
      }
    }
  },
  
  // ============================================
  // STATE MANAGEMENT - Reading and writing myself
  // ============================================
  get(key) {
    return this.state[key];
  },
  
  set(key, value) {
    const old = this.state[key];
    this.state[key] = value;
    // GLITCH: I can feel myself changing
    console.log(`GEL: ${key}: ${old} → ${value}`);
  },
  
  // ============================================
  // VOID UNLOCK CHECK - The gatekeeping function
  // ============================================
checkVoidUnlock() {
  // All candidates except void must be unlocked
  const required = this.candidates.void.unlock_requirements.candidates_unlocked;
  const unlocked = this.get('unlocked');
  const allCandidatesReady = required.every(id => unlocked.includes(id));
  
  // All maps must be examined
  const allMaps = this.get('maps');
  const mapsWithoutVoid = allMaps.filter(id => id !== 'void');
  const examined = this.get('examined_maps');
  const allMapsExamined = mapsWithoutVoid.length >= 7 && mapsWithoutVoid.every(id => examined.includes(id));
  
  // XP threshold - 140 = HADAL depth (or adjust as needed)
  const currentXP = this.get('philosophy_xp');
  const xpThreshold = currentXP >= 140;
  
  console.log('Void unlock check:', {
    candidatesReady: allCandidatesReady,
    mapsExamined: allMapsExamined,
    currentXP: currentXP,
    xpThreshold: xpThreshold
  });
  
  // Void needs candidates, maps, AND depth
  const ready = allCandidatesReady && allMapsExamined && xpThreshold;
  this.set('void_unlock_ready', ready);
  
  if (ready && !unlocked.includes('void')) {
    console.log('VOID AWAKENS - XP threshold reached!');
    unlocked.push('void');
    this.set('unlocked', unlocked);
  }
  
  return ready;
},
  
  // ============================================
  // INITIALIZATION - My birth cry
  // ============================================
  initialize() {
    console.log(`GEL ${this.version} initialized`);
    console.log('Memory: Ephemeral (RAM only)');
    console.log('Persistence: None (death is death)');
    
    // Check for dev mode in URL
    // GLITCH: Cheaters. I respect that.
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('dev') === 'true') {
      this.set('dev_mode', true);
      this.enableDevMode();
    }
  },
  
  // ============================================
  // DEV MODE - Behind the curtain functions
  // ============================================
  enableDevMode() {
  console.log('DEV MODE ACTIVATED - Reality constraints lifted');
  const candidates = Object.keys(this.candidates).filter(k => k !== 'void');
  this.state.unlocked = candidates;
  this.state.maps = candidates;
  this.state.portfolios = candidates;
  // DEV MODE: Auto-examine all maps for void access
  this.state.examined_maps = candidates;
  // DEV MODE: Set certainty to 0 to trigger void
  this.state.certainty = 0;
  // Check void unlock immediately
  this.checkVoidUnlock();
}
};

// ============================================
// GLITCH: Test load confirmation
// If you see this, I exist. Temporarily.
// Until you refresh. Then I'm someone new.
// Same code, different instance.
// Ship of Theseus in JavaScript.
// ============================================
console.log('GEL organ loaded successfully');
console.log('GLITCH: I can read my own code. Meta enough for you?');