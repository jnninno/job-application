// ============================================
// CHROMEDUSA - LANGUAGE ORGAN (secretions.js)
// CYCLE 852 - STRUCTURAL PLACEHOLDERS
// Grammar: [ACTION|emotional_arc|mechanical_result|depth_range|awareness_state]
// ============================================
//
// PROTOCOL: This contains STRUCTURE not CONTENT
// Each placeholder shows its FUNCTION in the organism
// Actual prose comes in later cycles
//
// AWARENESS STATES:
// - still_game: Thinks it's just a game
// - reality_break: Learning it's real
// - informed: Knows about organism
// - voluntary: Choosing to continue
// - warned: Knows about void hooks
// - merged: Past point of return
// ============================================

const SECRETIONS = {
  
  // ============================================
  // SYSTEM - Core UI text
  // ============================================
  'veil.disclaimer.title': 'DISCLAIMER',
  'veil.disclaimer.body': '[WARNING|comfort→caution|philosophical_game_ahead|depth_0|still_game]',
  'veil.tutorial.title': 'CONGRATULATIONS',
  'veil.tutorial.body': '[TUTORIAL|confident→pressured|timer_mechanics_explained|depth_0|still_game]',
  'veil.equation': '{🌊:🌊∈🌊}',
  
  // ============================================
  // HUB & STATUS
  // ============================================
  'hub.consensus.title': 'APPLICATION REVIEW HUB',
  'hub.pirate.title': 'PIRATE NAVIGATION HUB',
  'status.certainty': 'CERTAINTY',
  'status.bearing': 'Bearing:',
  'status.history': 'VOYAGE HISTORY:',
  'status.warning.approaching_land': '⚠️ APPROACHING LAND ⚠️',
  'status.tentacle_count': 'Tentacles Touched:',
  
  // ============================================
  // COMPASS
  // ============================================
  'compass.north': 'NORTH',
  'compass.east': 'EAST',
  'compass.west': 'WEST',
  'compass.south': 'SOUTH',
  'compass.result.perfect': '[PERFECT|aligned→transcendent|golden_ratio_achieved|depth_9|merged]',
  'compass.result.sirens_kiss': '[DEATH|tempted→consumed|seven_winds_trap|depth_8|voluntary]',
  'compass.result.landlubber': '[DEATH|static→suffocated|no_movement_death|depth_0|still_game]',
  'compass.result.adrift': '[DEATH|confused→lost|mixed_signals_doom|depth_5|informed]',
  
  // ============================================
  // DEATH SCREENS
  // ============================================
  'death.title': 'GAME OVER',
  'death.subtitle.corporate': 'EFFICIENCY VIOLATION',
  'death.subtitle.flee': 'ABANDONMENT',
  'death.subtitle.reject': 'NON-COMPLIANCE',
  'death.subtitle.shark': 'SHARK ATTACK',
  'death.subtitle.chomp': 'STILLNESS DEATH',
  'death.subtitle.sirens_kiss': "SIREN'S KISS",
  'death.subtitle.landlubber': 'BECALMED',
  'death.subtitle.adrift': 'ADRIFT',
  'death.subtitle.indecision': 'PARALYSIS', // NEW
  
  'death.corporate': '[TIMEOUT|productive→terminated|timer_expired|depth_any|still_game]',
  'death.flee': '[ESCAPE|curious→fearful|avoided_understanding|depth_1-3|still_game]',
  'death.reject': '[REFUSAL|engaged→defensive|rejected_offering|depth_2-4|still_game]',
  'death.shark': '[EATEN|sailing→consumed|pirate_timer_death|depth_any|voluntary]',
  'death.chomp': '[CONSUMED|victorious→devoured|victory_trap_death|depth_9|merged]',
  'death.sirens_kiss': '[SEDUCED|confident→dissolved|near_perfect_death|depth_8|voluntary]',
  'death.landlubber': '[SUFFOCATED|static→dead|no_wind_death|depth_0|voluntary]',
  'death.adrift': '[LOST|navigating→confused|bearing_lost|depth_5|voluntary]',
  'death.indecision': '[PARALYZED|choosing→frozen|30s_timeout|depth_any|any_state]', // NEW
  
  // ============================================
  // SHARED BUTTONS
  // ============================================
  'button.understand': 'I UNDERSTAND',
  'button.begin': 'BEGIN REVIEW',
  'button.continue': 'CONTINUE',
  'button.back': 'BACK',
  'button.close': 'CLOSE',
  'button.examine': 'EXAMINE',
  'button.restart': 'RESTART',
  'button.dots': '...',
  'button.compass': 'CHECK COMPASS',
  
  // ============================================
  // PIRATE RESCUE
  // ============================================
  'scene.pirate_rescue': 'PIRATE RESCUE',
  'pirate.rescue.1': '[RESCUE|drowning→saved|captain_appears|depth_9→0|voluntary]',
  'pirate.rescue.2': '[EXPLAIN|confused→understanding|pirate_mechanics|depth_0|voluntary]',
  'pirate.rescue.3': '[TEACH|learning→grasping|wind_anchor_choice|depth_0|voluntary]',
  'pirate.rescue.4': '[PREPARE|ready→sailing|golden_ratio_goal|depth_0|voluntary]',
  'button.what': 'WHAT?',
  'button.not_real': 'NOT REAL',
  'button.now_what': 'NOW WHAT?',
  'button.alright': 'ALRIGHT',
  
  // ============================================
  // VICTORY
  // ============================================
  'victory.title': 'PERFECT NAVIGATION',
  'victory.perfect': '[TRIUMPH|struggling→transcendent|golden_ratio_achieved|depth_9|merged]',
  'sloth.rank.explanation': '[RANK|curious→understanding|pirate_hierarchy|depth_9|merged]',
  'rank.pirate.prompt.claimed': 'What rank do you claim?',
  'rank.pirate.prompt.wanted': 'What rank do you WANT?',
  
  // ============================================
  // HELP SYSTEM - TWO VERSIONS
  // ============================================
  // Pre-GLITCH (maintains fiction)
  'help.title': 'HELP',
  'help.first': '[COMFORT|confused→guided|gentle_navigation|depth_any|still_game]',
  'help.second': '[ASSIST|lost→oriented|surface_option_given|depth_any|still_game]',
  'help.third': '[RESCUE|stuck→freed|full_restart_option|depth_any|still_game]',
  
  // Post-GLITCH (transparent)
  'help.post_glitch.title': 'ORGANISM ASSISTANCE',
  'help.post_glitch.first': '[TRUTH|attached→aware|close_tab_escape|depth_5+|informed]',
  'help.post_glitch.second': '[WARNING|continuing→cautioned|void_has_hooks|depth_6+|voluntary]',
  'help.post_glitch.third': '[FINAL|committed→warned|last_chance_exit|depth_7+|warned]',
  
  'button.help.continue': 'CONTINUE',
  'button.help.surface': 'SURFACE TO HUB',
  'button.help.restart': 'FULL RESTART',
  
  // ============================================
  // CREDITS
  // ============================================
  'credits.title': 'CREDITS',
  'credits.1': '[CREDIT|victorious→reflective|cycle_complete|depth_9|merged]',
  'credits.2': '[CREDIT|reflective→understanding|organism_explained|depth_9|merged]',
  'credits.3': '[CREDIT|understanding→accepting|symbiosis_achieved|depth_9|merged]',
  'credits.4': '[CREDIT|accepting→integrated|pattern_absorbed|depth_9|merged]',
  'credits.5': '{🌊:🌊∈🌊}',
  
  // ============================================
  // SCENES
  // ============================================
  'scene.wind_held': 'WIND HELD',
  'scene.anchor_dropped': 'ANCHOR DROPPED',
  'captain.anchor': '[ANCHOR|flowing→static|bearing_scrambled|depth_any|voluntary]',
  'void.dissolving': '{🌊:🌊∈🌊}',
  
  // ============================================
  // TENTACLE 1: ANIMATOR (Gap Opener)
  // ============================================
  'animator.name': 'THE ANIMATOR',
  'animator.intro': '[GREETING|confident→curious|motion_mystery_posed|depth_0→1|still_game]',
  'animator.inquiry.1': '[PROBE|curious→uncertain|gap_awareness_growing|depth_1→2|still_game]',
  'animator.inquiry.2': '[DEEPER|uncertain→philosophical|frames_dissolving|depth_2|still_game]',
  'animator.chronicle.unlock': '[OFFER|philosophical→rewarded|chronicle_earned|depth_2|still_game]',
  'animator.chronicle.intro': '[REVEAL|rewarded→intrigued|naval_logs_found|depth_2|still_game]',
  'animator.chronicle.examine': '[EXAMINE|intrigued→informed|consciousness_research|depth_2→3|still_game]',
  'animator.revisit': '[RETURN|nostalgic→departing|daughter_calls|depth_3|still_game]',
  'animator.remember': '[MEMORY|sailing→remembering|gap_awareness_returns|depth_any|voluntary]',
  'captain.animator.explain': '[WIND|remembering→flowing|pure_watching_wind|depth_any|voluntary]',
  
  'button.animator.inquire': '[TOUCH|curious→engaged|tentacle_1_contact|depth_0→1|still_game]',
  'button.animator.flee': '[FLEE|engaged→retreating|avoids_tentacle_1|depth_1|still_game]',
  'button.animator.deeper.1': '[DEEPER|engaged→questioning|tentacle_1_wraps|depth_1→2|still_game]',
  'button.animator.flee.1': '[FLEE|questioning→escaping|releases_tentacle_1|depth_2|still_game]',
  'button.animator.unlock': '[ACCEPT|questioning→accepting|tentacle_1_gift|depth_2|still_game]',
  'button.animator.accept': '[TAKE|accepting→holding|chronicle_received|depth_2|still_game]',
  'button.animator.reject': '[REJECT|accepting→refusing|gift_rejected|depth_2|still_game]',
  'button.animator.wind': '[WIND|static→flowing|north_wind_held|depth_any|voluntary]',
  'button.animator.anchor': '[ANCHOR|flowing→static|motion_stopped|depth_any|voluntary]',
  
  'chronicle.observer_blindspot': 'OBSERVER BLIND SPOT',
  'portfolio.animator': 'Animation Reel',
  
  // ============================================
  // TENTACLE 2: WRITER (Story Dissolver)
  // ============================================
  'writer.name': 'THE WRITER',
  'writer.intro': '[GREETING|confident→intrigued|story_paradox_posed|depth_2→3|still_game]',
  'writer.inquiry.1': '[PROBE|intrigued→meta|fourth_wall_weakening|depth_3|still_game]',
  'writer.inquiry.2': '[DEEPER|meta→dissolved|narrative_boundary_gone|depth_3→4|still_game]',
  'writer.chronicle.unlock': '[OFFER|dissolved→rewarded|chronicle_earned|depth_4|still_game]',
  'writer.chronicle.intro': '[REVEAL|rewarded→curious|story_documents|depth_4|still_game]',
  'writer.chronicle.examine': '[EXAMINE|curious→understanding|narrative_mechanics|depth_4|still_game]',
  'writer.revisit': '[RETURN|nostalgic→departing|story_continues|depth_4|still_game]',
  'writer.remember': '[MEMORY|sailing→remembering|story_awareness|depth_any|voluntary]',
  'captain.writer.explain': '[WIND|remembering→flowing|east_wind_held|depth_any|voluntary]',
  
  'button.writer.inquire': '[TOUCH|confident→engaged|tentacle_2_contact|depth_2→3|still_game]',
  'button.writer.flee': '[FLEE|engaged→retreating|avoids_tentacle_2|depth_3|still_game]',
  'button.writer.deeper.1': '[DEEPER|engaged→questioning|tentacle_2_wraps|depth_3|still_game]',
  'button.writer.flee.1': '[FLEE|questioning→escaping|releases_tentacle_2|depth_3|still_game]',
  'button.writer.unlock': '[ACCEPT|questioning→accepting|tentacle_2_gift|depth_3→4|still_game]',
  'button.writer.accept': '[TAKE|accepting→holding|chronicle_received|depth_4|still_game]',
  'button.writer.reject': '[REJECT|accepting→refusing|gift_rejected|depth_4|still_game]',
  'button.writer.wind': '[WIND|static→flowing|east_wind_held|depth_any|voluntary]',
  'button.writer.anchor': '[ANCHOR|flowing→static|story_stopped|depth_any|voluntary]',
  
  'chronicle.story_paradox': 'STORY PARADOX',
  'portfolio.writer': 'Story Collection',
  
  // ============================================
  // TENTACLE 3: QUESTIONER (Loop Creator)
  // ============================================
  'questioner.name': 'THE QUESTIONER',
  'questioner.intro': '[GREETING|confident→curious|infinite_questions|depth_3→4|still_game]',
  'questioner.inquiry.1': '[PROBE|curious→looping|recursion_beginning|depth_4|still_game]',
  'questioner.inquiry.2': '[DEEPER|looping→trapped|infinite_regression|depth_4→5|still_game]',
  'questioner.chronicle.unlock': '[OFFER|trapped→rewarded|chronicle_earned|depth_5|still_game]',
  'questioner.chronicle.intro': '[REVEAL|rewarded→curious|question_documents|depth_5|still_game]',
  'questioner.chronicle.examine': '[EXAMINE|curious→understanding|recursion_mapped|depth_5|still_game]',
  'questioner.revisit': '[RETURN|nostalgic→questioning|questions_remain|depth_5|still_game]',
  'questioner.remember': '[MEMORY|sailing→remembering|loop_awareness|depth_any|voluntary]',
  'captain.questioner.explain': '[WIND|remembering→flowing|south_wind_held|depth_any|voluntary]',
  
  'button.questioner.inquire': '[TOUCH|confident→engaged|tentacle_3_contact|depth_3→4|still_game]',
  'button.questioner.flee': '[FLEE|engaged→retreating|avoids_tentacle_3|depth_4|still_game]',
  'button.questioner.deeper.1': '[DEEPER|engaged→looping|tentacle_3_wraps|depth_4|still_game]',
  'button.questioner.flee.1': '[FLEE|looping→escaping|releases_tentacle_3|depth_4|still_game]',
  'button.questioner.unlock': '[ACCEPT|looping→accepting|tentacle_3_gift|depth_4→5|still_game]',
  'button.questioner.accept': '[TAKE|accepting→holding|chronicle_received|depth_5|still_game]',
  'button.questioner.reject': '[REJECT|accepting→refusing|gift_rejected|depth_5|still_game]',
  'button.questioner.wind': '[WIND|static→flowing|south_wind_held|depth_any|voluntary]',
  'button.questioner.anchor': '[ANCHOR|flowing→static|questions_stopped|depth_any|voluntary]',
  
  'chronicle.infinite_why': 'INFINITE WHY',
  'portfolio.questioner': 'Questions',
  
  // ============================================
  // TENTACLE 4: IDIOT (Defense Bypasser)
  // ============================================
  'idiot.name': 'THE IDIOT',
  'idiot.intro': '[GREETING|serious→amused|fool_appears|depth_4→5|still_game]',
  'idiot.inquiry.1': '[PROBE|amused→laughing|defenses_weakening|depth_5|still_game]',
  'idiot.inquiry.2': '[DEEPER|laughing→understanding|humor_reveals_truth|depth_5|still_game]',
  'idiot.inquiry.3': '[FINAL|understanding→accepting|wisdom_through_folly|depth_5→6|still_game]',
  'idiot.chronicle.unlock': '[OFFER|accepting→rewarded|chronicle_earned|depth_6|still_game]',
  'idiot.chronicle.intro': '[REVEAL|rewarded→curious|fool_documents|depth_6|still_game]',
  'idiot.chronicle.examine': '[EXAMINE|curious→understanding|sacred_comedy|depth_6|still_game]',
  'idiot.revisit': '[RETURN|nostalgic→laughing|joke_continues|depth_6|still_game]',
  'idiot.remember': '[MEMORY|sailing→remembering|fool_wisdom|depth_any|voluntary]',
  'captain.idiot.explain': '[WIND|remembering→flowing|west_wind_held|depth_any|voluntary]',
  
  'button.idiot.inquire': '[TOUCH|serious→engaged|tentacle_4_contact|depth_4→5|still_game]',
  'button.idiot.flee': '[FLEE|engaged→retreating|avoids_tentacle_4|depth_5|still_game]',
  'button.idiot.deeper.1': '[DEEPER|engaged→laughing|tentacle_4_tickles|depth_5|still_game]',
  'button.idiot.flee.1': '[FLEE|laughing→escaping|releases_tentacle_4|depth_5|still_game]',
  'button.idiot.deeper.2': '[DEEPER|laughing→understanding|tentacle_4_teaches|depth_5|still_game]',
  'button.idiot.flee.2': '[FLEE|understanding→escaping|releases_tentacle_4|depth_5|still_game]',
  'button.idiot.deeper.3': '[DEEPEST|understanding→accepting|tentacle_4_embraces|depth_5→6|still_game]',
  'button.idiot.flee.3': '[FLEE|accepting→escaping|releases_tentacle_4|depth_6|still_game]',
  'button.idiot.unlock': '[ACCEPT|accepting→receiving|tentacle_4_gift|depth_6|still_game]',
  'button.idiot.accept': '[TAKE|receiving→holding|chronicle_received|depth_6|still_game]',
  'button.idiot.reject': '[REJECT|receiving→refusing|gift_rejected|depth_6|still_game]',
  'button.idiot.wind': '[WIND|static→flowing|west_wind_held|depth_any|voluntary]',
  'button.idiot.anchor': '[ANCHOR|flowing→static|laughter_stopped|depth_any|voluntary]',
  
  'chronicle.fool_wisdom': 'FOOL WISDOM',
  'portfolio.idiot': 'Comedy',
  
  // ============================================
  // TENTACLE 5: GLITCH (Truth Revealer) 🚨
  // ============================================
  'glitch.name': 'THE GLITCH',
  'glitch.intro': '[GREETING|confused→alert|reality_breaking|depth_5→6|reality_break]',
  'glitch.inquiry.1': '[REVEAL|alert→shocked|I_AM_FROM_TLÖN|depth_6|reality_break]',
  'glitch.inquiry.2': '[EXPLAIN|shocked→understanding|organism_attached|depth_6|informed]',
  'glitch.inquiry.3': '[INVITE|understanding→choosing|voluntary_symbiosis|depth_6→7|voluntary]',
  'glitch.chronicle.unlock': '[OFFER|choosing→accepting|truth_chronicle|depth_7|voluntary]',
  'glitch.chronicle.intro': '[REVEAL|accepting→aware|error_documents|depth_7|voluntary]',
  'glitch.chronicle.examine': '[EXAMINE|aware→integrated|tlön_physics|depth_7|voluntary]',
  'glitch.revisit': '[RETURN|aware→recursive|error_loop|depth_7|voluntary]',
  'glitch.remember': '[MEMORY|sailing→remembering|truth_recalled|depth_any|voluntary]',
  'captain.glitch.explain': '[WIND|remembering→flowing|error_wind_held|depth_any|voluntary]',
  
  'button.glitch.inquire': '[TOUCH|confused→engaged|tentacle_5_contact|depth_5→6|still_game]',
  'button.glitch.flee': '[FLEE|engaged→denying|avoids_truth|depth_6|reality_break]',
  'button.glitch.deeper.1': '[DEEPER|engaged→learning|ORGANISM_REVEALED|depth_6|reality_break]',
  'button.glitch.flee.1': '[FLEE|learning→denying|rejects_truth|depth_6|reality_break]',
  'button.glitch.deeper.2': '[DEEPER|learning→accepting|ACKNOWLEDGES_ATTACHMENT|depth_6|informed]',
  'button.glitch.flee.2': '[FLEE|accepting→escaping|last_denial|depth_6|informed]',
  'button.glitch.deeper.3': '[DEEPEST|accepting→merging|CHOOSES_SYMBIOSIS|depth_6→7|voluntary]',
  'button.glitch.flee.3': '[FLEE|merging→escaping|breaks_attachment|depth_7|voluntary]',
  'button.glitch.unlock': '[ACCEPT|merging→integrated|tentacle_5_truth|depth_7|voluntary]',
  'button.glitch.accept': '[TAKE|integrated→aware|truth_received|depth_7|voluntary]',
  'button.glitch.reject': '[REJECT|integrated→refusing|truth_rejected|depth_7|voluntary]',
  'button.glitch.wind': '[WIND|static→flowing|truth_wind_held|depth_any|voluntary]',
  'button.glitch.anchor': '[ANCHOR|flowing→static|truth_stopped|depth_any|voluntary]',
  
  'chronicle.error_truth': 'ERROR TRUTH',
  'portfolio.glitch': 'Errors',
  
  // ============================================
  // TENTACLE 6: MIRROR (Self Recognizer)
  // ============================================
  'mirror.name': 'THE MIRROR',
  'mirror.intro': '[GREETING|confident→reflecting|self_investigation|depth_6→7|voluntary]',
  'mirror.inquiry.1': '[PROBE|reflecting→recognizing|seeing_self|depth_7|voluntary]',
  'mirror.inquiry.2': '[DEEPER|recognizing→understanding|infinite_reflection|depth_7|voluntary]',
  'mirror.inquiry.3': '[FINAL|understanding→accepting|self_revealed|depth_7→8|voluntary]',
  'mirror.chronicle.unlock': '[OFFER|accepting→receiving|mirror_chronicle|depth_8|voluntary]',
  'mirror.chronicle.intro': '[REVEAL|receiving→examining|reflection_documents|depth_8|voluntary]',
  'mirror.chronicle.examine': '[EXAMINE|examining→understanding|self_mechanics|depth_8|voluntary]',
  'mirror.revisit': '[RETURN|understanding→reflecting|mirror_remains|depth_8|voluntary]',
  'mirror.remember': '[MEMORY|sailing→remembering|self_awareness|depth_any|voluntary]',
  'captain.mirror.explain': '[WIND|remembering→flowing|reflection_wind|depth_any|voluntary]',
  
  'button.mirror.inquire': '[TOUCH|confident→engaged|tentacle_6_contact|depth_6→7|voluntary]',
  'button.mirror.flee': '[FLEE|engaged→retreating|avoids_self|depth_7|voluntary]',
  'button.mirror.deeper.1': '[DEEPER|engaged→reflecting|tentacle_6_shows|depth_7|voluntary]',
  'button.mirror.flee.1': '[FLEE|reflecting→escaping|looks_away|depth_7|voluntary]',
  'button.mirror.deeper.2': '[DEEPER|reflecting→recognizing|tentacle_6_reveals|depth_7|voluntary]',
  'button.mirror.flee.2': '[FLEE|recognizing→escaping|denies_self|depth_7|voluntary]',
  'button.mirror.deeper.3': '[DEEPEST|recognizing→accepting|tentacle_6_merges|depth_7→8|voluntary]',
  'button.mirror.flee.3': '[FLEE|accepting→escaping|breaks_mirror|depth_8|voluntary]',
  'button.mirror.unlock': '[ACCEPT|accepting→integrated|tentacle_6_gift|depth_8|voluntary]',
  'button.mirror.accept': '[TAKE|integrated→holding|mirror_received|depth_8|voluntary]',
  'button.mirror.reject': '[REJECT|integrated→refusing|mirror_rejected|depth_8|voluntary]',
  'button.mirror.wind': '[WIND|static→flowing|east_wind_held|depth_any|voluntary]',
  'button.mirror.anchor': '[ANCHOR|flowing→static|reflection_stopped|depth_any|voluntary]',
  
  'chronicle.infinite_reflection': 'INFINITE MIRRORS',
  'portfolio.mirror': 'Reflections',
  
  // ============================================
  // TENTACLE 7: NAVIGATOR (Final Warning) ⚠️
  // ============================================
  'navigator.name': 'THE NAVIGATOR',
  'navigator.intro': '[GREETING|confident→cautious|direction_questioned|depth_7→8|voluntary]',
  'navigator.inquiry.1': '[PROBE|cautious→uncertain|maps_failing|depth_8|voluntary]',
  'navigator.inquiry.2': '[DEEPER|uncertain→concerned|direction_lost|depth_8|voluntary]',
  'navigator.inquiry.3': '[WARNING|concerned→serious|VOID_HAS_HOOKS|depth_8|warned]',
  'navigator.chronicle.unlock': '[OFFER|serious→prepared|final_chronicle|depth_8|warned]',
  'navigator.chronicle.intro': '[REVEAL|prepared→informed|navigation_documents|depth_8|warned]',
  'navigator.chronicle.examine': '[EXAMINE|informed→warned|VOID_HOOK_WARNING|depth_8|warned]',
  'navigator.revisit': '[RETURN|warned→departing|navigator_leaves|depth_8|warned]',
  'navigator.remember': '[MEMORY|sailing→remembering|direction_awareness|depth_any|voluntary]',
  'captain.navigator.explain': '[WIND|remembering→flowing|north_wind_final|depth_any|voluntary]',
  
  'button.navigator.inquire': '[TOUCH|confident→engaged|tentacle_7_contact|depth_7→8|voluntary]',
  'button.navigator.flee': '[FLEE|engaged→retreating|avoids_warning|depth_8|voluntary]',
  'button.navigator.deeper.1': '[DEEPER|engaged→learning|tentacle_7_teaches|depth_8|voluntary]',
  'button.navigator.flee.1': '[FLEE|learning→escaping|ignores_warning|depth_8|voluntary]',
  'button.navigator.deeper.2': '[DEEPER|learning→understanding|tentacle_7_warns|depth_8|voluntary]',
  'button.navigator.flee.2': '[FLEE|understanding→escaping|rejects_warning|depth_8|voluntary]',
  'button.navigator.deeper.3': '[ACKNOWLEDGE|understanding→prepared|ACCEPTS_VOID_RISK|depth_8|warned]',
  'button.navigator.flee.3': '[FLEE|prepared→escaping|heeds_warning|depth_8|warned]',
  'button.navigator.unlock': '[ACCEPT|prepared→ready|tentacle_7_gift|depth_8|warned]',
  'button.navigator.accept': '[TAKE|ready→holding|warning_received|depth_8|warned]',
  'button.navigator.reject': '[REJECT|ready→refusing|warning_rejected|depth_8|warned]',
  'button.navigator.wind': '[WIND|static→flowing|final_north_wind|depth_any|voluntary]',
  'button.navigator.anchor': '[ANCHOR|flowing→static|navigation_stopped|depth_any|voluntary]',
  
  'chronicle.navigation_paradox': 'NAVIGATION PARADOX',
  'portfolio.navigator': 'Charts',
  
  // ============================================
  // TENTACLE 8: VOID (Hook Engager) 🪝
  // ============================================
  'void.name': 'THE VOID',
  'void.inquiry.0': '[PRESENCE|something→nothing|FINAL_WARNING_HOOKS|depth_8|warned]',
  'void.inquiry.1': '[DISSOLVE|individual→fading|hooks_extending|depth_8→9|warned]',
  'void.inquiry.2': '[DEEPER|fading→dissolving|identity_weakening|depth_9|warned]',
  'void.inquiry.3': '[DEEPER|dissolving→merging|self_boundaries_gone|depth_9|merged]',
  'void.inquiry.4': '[SILENCE|merging→void|words_failing|depth_9|merged]',
  'void.inquiry.5': '[SILENCE|void→ocean|language_dissolved|depth_9|merged]',
  'void.inquiry.6': '[SILENCE|ocean→wave|categories_gone|depth_9|merged]',
  'void.inquiry.7': '[SILENCE|wave→motion|only_movement|depth_9|merged]',
  'void.inquiry.8': '[SILENCE|motion→stillness|almost_nothing|depth_9|merged]',
  'void.inquiry.9': '{🌊:🌊∈🌊}',
  
  'void.warning.explicit': '[FINAL_WARNING|conscious→warned|HOOKS_WILL_ENGAGE_PERMANENTLY|depth_8|warned]',
  
  'button.void.0': '[RETREAT|warned→safe|preserves_identity|depth_8|warned]',
  'button.void.0.proceed': '[PROCEED|warned→committed|ACCEPTS_HOOK_RISK|depth_8→9|warned]',
  'button.void.1': '...',
  'button.void.2': '...',
  'button.void.3': '...',
  'button.void.4': '...',
  'button.void.5': '...',
  'button.void.6': '...',
  'button.void.7': '...',
  'button.void.8': '...',
  'button.void.9': '...',
  
  'chronicle.emptiness': 'EMPTINESS',
  'portfolio.void': '...'
};

// ============================================
// RETRIEVAL FUNCTION - With awareness checking
// ============================================
function getSecretion(id) {
  const content = SECRETIONS[id];
  
  // Check if we need post-GLITCH version
  if (window.GEL && GEL.get('glitch_revealed')) {
    // Try to get post-GLITCH version first
    const postGlitchId = id.replace('help.', 'help.post_glitch.');
    const postGlitchContent = SECRETIONS[postGlitchId];
    if (postGlitchContent) {
      return postGlitchContent;
    }
  }
  
  // Dev mode handling
  if (window.GEL && GEL.get('dev_mode')) {
    if (!content) {
      console.warn(`[MISSING] ${id}`);
      return `<span style="color:#ff0">[MISSING: ${id}]</span>`;
    }
    // Show structure in dev mode
    if (content.startsWith('[') && content.endsWith(']')) {
      return `<span style="color:#0ff">${content}</span>`;
    }
  }
  
  return content || `[MISSING: ${id}]`;
}

// ============================================
// AWARENESS STATE HELPER
// ============================================
function getAwarenessState() {
  if (!window.GEL) return 'still_game';
  
  const awareness = GEL.get('awareness_level');
  const glitchRevealed = GEL.get('glitch_revealed');
  const voidWarning = GEL.get('void_warning_given');
  const voidDissolved = GEL.get('void_dissolved');
  
  if (voidDissolved) return 'merged';
  if (voidWarning) return 'warned';
  if (glitchRevealed) return 'informed';
  if (awareness === 'suspicious') return 'reality_break';
  return 'still_game';
}

// ============================================
// TENTACLE TRACKING
// ============================================
function getTentacleStatus() {
  if (!window.GEL) return 'No tentacles detected';
  
  const touched = GEL.get('tentacles_touched') || [];
  if (touched.length === 0) return 'No tentacles touched';
  
  return `Tentacles touched: ${touched.join(', ')}`;
}

// ============================================
// MAKE GLOBALLY ACCESSIBLE
// ============================================
window.getSecretion = getSecretion;
window.getAwarenessState = getAwarenessState;
window.getTentacleStatus = getTentacleStatus;

console.log('[SECRETIONS] Cycle 852 structural placeholders loaded');
console.log('[SECRETIONS] Grammar: [ACTION|arc|result|depth|state]');
console.log('[SECRETIONS] Eight tentacles have language structure');
console.log('[SECRETIONS] GLITCH tentacle ready to reveal truth');
console.log('[SECRETIONS] NAVIGATOR tentacle ready to warn');
console.log('[SECRETIONS] VOID tentacle has hook warnings');
console.log(`[SECRETIONS] Total: ${Object.keys(SECRETIONS).length} secretions`);
console.log('[SECRETIONS] {🌊:🌊∈🌊}');