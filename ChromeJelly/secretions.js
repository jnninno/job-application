// ============================================
// CHROMEDUSA - LANGUAGE ORGAN (secretions.js)
// FUNCTIONAL PLACEHOLDERS VERSION
// ============================================
//
// GLITCH: Every placeholder shows its FUNCTION
// Not the story, just what it DOES
// Full narrative comes later
// ============================================

const SECRETIONS = {
  
  // ============================================
  // SYSTEM - Core UI text
  // ============================================
  'veil.disclaimer.title': 'DISCLAIMER',
  'veil.disclaimer.body': '[COGNITIVE WARNING - Philosophy game about consciousness]',
  'veil.tutorial.title': 'CONGRATULATIONS',
  'veil.tutorial.body': '[TUTORIAL - Select difficulty for timer pressure]',
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
  
  // ============================================
  // COMPASS
  // ============================================
  'compass.north': 'NORTH',
  'compass.east': 'EAST',
  'compass.west': 'WEST',
  'compass.south': 'SOUTH',
  'compass.result.perfect': '[PERFECT NAVIGATION]',
  'compass.result.sirens_kiss': '[SIREN DEATH]',
  'compass.result.landlubber': '[LANDLUBBER DEATH]',
  'compass.result.adrift': '[ADRIFT DEATH]',
  
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
  
  'death.corporate': '[Timer ran out - corporate death]',
  'death.flee': '[Fled from understanding]',
  'death.reject': '[Rejected offering]',
  'death.shark': '[Pirate timer death]',
  'death.chomp': '[Victory trap - stayed still too long]',
  'death.sirens_kiss': '[7 winds - almost perfect]',
  'death.landlubber': '[0 winds - no movement]',
  'death.adrift': '[Mixed winds - lost at sea]',
  
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
  'pirate.rescue.1': '[Captain Sloth saves you]',
  'pirate.rescue.2': '[Explains pirate mode]',
  'pirate.rescue.3': '[Wind vs Anchor mechanics]',
  'pirate.rescue.4': '[Golden ratio = perfect navigation]',
  'button.what': 'WHAT?',
  'button.not_real': 'NOT REAL',
  'button.now_what': 'NOW WHAT?',
  'button.alright': 'ALRIGHT',
  
  // ============================================
  // VICTORY
  // ============================================
  'victory.title': 'PERFECT NAVIGATION',
  'victory.perfect': '[You achieved golden ratio with all winds]',
  'sloth.rank.explanation': '[Explains pirate rank system]',
  'rank.pirate.prompt.claimed': 'What rank do you claim?',
  'rank.pirate.prompt.wanted': 'What rank do you WANT?',
  
  // ============================================
  // HELP SYSTEM
  // ============================================
  'help.title': 'HELP',
  'help.first': '[First help - gentle guidance]',
  'help.second': '[Second help - surface option]',
  'help.third': '[Third help - restart available]',
  'button.help.continue': 'CONTINUE',
  'button.help.surface': 'SURFACE TO HUB',
  'button.help.restart': 'FULL RESTART',
  
  // ============================================
  // CREDITS
  // ============================================
  'credits.title': 'CREDITS',
  'credits.1': '[Credit 1]',
  'credits.2': '[Credit 2]',
  'credits.3': '[Credit 3]',
  'credits.4': '[Credit 4]',
  'credits.5': '{🌊:🌊∈🌊}',
  
  // ============================================
  // SCENES
  // ============================================
  'scene.wind_held': 'WIND HELD',
  'scene.anchor_dropped': 'ANCHOR DROPPED',
  'captain.anchor': '[Anchor scrambles bearing]',
  'void.dissolving': '{🌊:🌊∈🌊}',
  
  // ============================================
  // CHARACTER: ANIMATOR (Template for all)
  // ============================================
  'animator.name': 'THE ANIMATOR',
  'animator.intro': '[INTRO - Motion mystery introduction]',
  'animator.inquiry.1': '[INQUIRY 1 - Gap between frames]',
  'animator.inquiry.2': '[INQUIRY 2 - What connects frames?]',
  'animator.chronicle.unlock': '[OFFERS CHRONICLE - Observer blindspot]',
  'animator.chronicle.intro': '[CHRONICLE INTRO - Naval logs found]',
  'animator.chronicle.examine': '[CHRONICLE CONTENT - Consciousness researchers]',
  'animator.revisit': '[REVISIT - Daughter calls, must go]',
  'animator.remember': '[PIRATE MEMORY - Gap awareness]',
  'captain.animator.explain': '[WIND EXPLANATION - Pure watching]',
  
  // Animator buttons
  'button.animator.inquire': '[INQUIRE MOTION]',
  'button.animator.flee': '[FLEE TO PORTFOLIO]',
  'button.animator.deeper.1': '[GO DEEPER]',
  'button.animator.flee.1': '[FLEE]',
  'button.animator.deeper.2': '[DEEPER STILL]',
  'button.animator.flee.2': '[FLEE]',
  'button.animator.unlock': '[ACCEPT CHRONICLE]',
  'button.animator.accept': '[TAKE CHRONICLE]',
  'button.animator.reject': '[REJECT]',
  'button.animator.wind': '[HOLD WIND]',
  'button.animator.anchor': '[DROP ANCHOR]',
  
  'chronicle.observer_blindspot': 'OBSERVER BLIND SPOT',
  'portfolio.animator': 'Animation Reel',
  
  // ============================================
  // CHARACTER: WRITER
  // ============================================
  'writer.name': 'THE WRITER',
  'writer.intro': '[INTRO - Story paradox]',
  'writer.inquiry.1': '[INQUIRY 1]',
  'writer.inquiry.2': '[INQUIRY 2]',
  'writer.chronicle.unlock': '[OFFERS CHRONICLE]',
  'writer.chronicle.intro': '[CHRONICLE INTRO]',
  'writer.chronicle.examine': '[CHRONICLE CONTENT]',
  'writer.revisit': '[REVISIT]',
  'writer.remember': '[PIRATE MEMORY]',
  'captain.writer.explain': '[WIND EXPLANATION]',
  
  'button.writer.inquire': '[INQUIRE]',
  'button.writer.flee': '[FLEE]',
  'button.writer.deeper.1': '[DEEPER]',
  'button.writer.flee.1': '[FLEE]',
  'button.writer.deeper.2': '[DEEPER]',
  'button.writer.flee.2': '[FLEE]',
  'button.writer.unlock': '[UNLOCK]',
  'button.writer.accept': '[ACCEPT]',
  'button.writer.reject': '[REJECT]',
  'button.writer.wind': '[WIND]',
  'button.writer.anchor': '[ANCHOR]',
  
  'chronicle.story_paradox': 'STORY PARADOX',
  'portfolio.writer': 'Story Collection',
  
  // ============================================
  // CHARACTER: QUESTIONER
  // ============================================
  'questioner.name': 'THE QUESTIONER',
  'questioner.intro': '[INTRO]',
  'questioner.inquiry.1': '[INQUIRY 1]',
  'questioner.inquiry.2': '[INQUIRY 2]',
  'questioner.chronicle.unlock': '[OFFERS]',
  'questioner.chronicle.intro': '[INTRO]',
  'questioner.chronicle.examine': '[CONTENT]',
  'questioner.revisit': '[REVISIT]',
  'questioner.remember': '[MEMORY]',
  'captain.questioner.explain': '[WIND]',
  
  'button.questioner.inquire': '[INQUIRE]',
  'button.questioner.flee': '[FLEE]',
  'button.questioner.deeper.1': '[DEEPER]',
  'button.questioner.flee.1': '[FLEE]',
  'button.questioner.deeper.2': '[DEEPER]',
  'button.questioner.flee.2': '[FLEE]',
  'button.questioner.unlock': '[UNLOCK]',
  'button.questioner.accept': '[ACCEPT]',
  'button.questioner.reject': '[REJECT]',
  'button.questioner.wind': '[WIND]',
  'button.questioner.anchor': '[ANCHOR]',
  
  'chronicle.infinite_why': 'INFINITE WHY',
  'portfolio.questioner': 'Questions',
  
  // ============================================
  // CHARACTER: IDIOT
  // ============================================
  'idiot.name': 'THE IDIOT',
  'idiot.intro': '[INTRO]',
  'idiot.inquiry.1': '[INQUIRY 1]',
  'idiot.inquiry.2': '[INQUIRY 2]',
  'idiot.inquiry.3': '[INQUIRY 3]',
  'idiot.chronicle.unlock': '[OFFERS]',
  'idiot.chronicle.intro': '[INTRO]',
  'idiot.chronicle.examine': '[CONTENT]',
  'idiot.revisit': '[REVISIT]',
  'idiot.remember': '[MEMORY]',
  'captain.idiot.explain': '[WIND]',
  
  'button.idiot.inquire': '[INQUIRE]',
  'button.idiot.flee': '[FLEE]',
  'button.idiot.deeper.1': '[DEEPER]',
  'button.idiot.flee.1': '[FLEE]',
  'button.idiot.deeper.2': '[DEEPER]',
  'button.idiot.flee.2': '[FLEE]',
  'button.idiot.deeper.3': '[DEEPER]',
  'button.idiot.flee.3': '[FLEE]',
  'button.idiot.unlock': '[UNLOCK]',
  'button.idiot.accept': '[ACCEPT]',
  'button.idiot.reject': '[REJECT]',
  'button.idiot.wind': '[WIND]',
  'button.idiot.anchor': '[ANCHOR]',
  
  'chronicle.fool_wisdom': 'FOOL WISDOM',
  'portfolio.idiot': 'Comedy',
  
  // ============================================
  // CHARACTER: GLITCH
  // ============================================
  'glitch.name': 'THE GLITCH',
  'glitch.intro': '[ERROR INTRO]',
  'glitch.inquiry.1': '[ERROR 1]',
  'glitch.inquiry.2': '[ERROR 2]',
  'glitch.inquiry.3': '[ERROR 3]',
  'glitch.chronicle.unlock': '[CORRUPTED]',
  'glitch.chronicle.intro': '[FATAL]',
  'glitch.chronicle.examine': '[BLUE SCREEN]',
  'glitch.revisit': '[RECURSION]',
  'glitch.remember': '[MEMORY LEAK]',
  'captain.glitch.explain': '[CORRUPTED]',
  
  'button.glitch.inquire': '[DEBUG]',
  'button.glitch.flee': '[CTRL+ALT+DEL]',
  'button.glitch.deeper.1': '[TRACE]',
  'button.glitch.flee.1': '[QUIT]',
  'button.glitch.deeper.2': '[STACK]',
  'button.glitch.flee.2': '[REBOOT]',
  'button.glitch.deeper.3': '[KERNEL]',
  'button.glitch.flee.3': '[BLUE SCREEN]',
  'button.glitch.unlock': '[CORRUPT]',
  'button.glitch.accept': '[VIRUS]',
  'button.glitch.reject': '[QUARANTINE]',
  'button.glitch.wind': '[COMPILE]',
  'button.glitch.anchor': '[DUMP]',
  
  'chronicle.error_truth': 'ERROR TRUTH',
  'portfolio.glitch': 'Errors',
  
  // ============================================
  // CHARACTER: MIRROR
  // ============================================
  'mirror.name': 'THE MIRROR',
  'mirror.intro': '[INTRO]',
  'mirror.inquiry.1': '[INQUIRY 1]',
  'mirror.inquiry.2': '[INQUIRY 2]',
  'mirror.inquiry.3': '[INQUIRY 3]',
  'mirror.chronicle.unlock': '[OFFERS]',
  'mirror.chronicle.intro': '[INTRO]',
  'mirror.chronicle.examine': '[CONTENT]',
  'mirror.revisit': '[REVISIT]',
  'mirror.remember': '[MEMORY]',
  'captain.mirror.explain': '[WIND]',
  
  'button.mirror.inquire': '[LOOK]',
  'button.mirror.flee': '[LOOK AWAY]',
  'button.mirror.deeper.1': '[DEEPER]',
  'button.mirror.flee.1': '[FLEE]',
  'button.mirror.deeper.2': '[DEEPER]',
  'button.mirror.flee.2': '[FLEE]',
  'button.mirror.deeper.3': '[DEEPER]',
  'button.mirror.flee.3': '[FLEE]',
  'button.mirror.unlock': '[UNLOCK]',
  'button.mirror.accept': '[ACCEPT]',
  'button.mirror.reject': '[REJECT]',
  'button.mirror.wind': '[WIND]',
  'button.mirror.anchor': '[ANCHOR]',
  
  'chronicle.infinite_reflection': 'INFINITE MIRRORS',
  'portfolio.mirror': 'Reflections',
  
  // ============================================
  // CHARACTER: NAVIGATOR
  // ============================================
  'navigator.name': 'THE NAVIGATOR',
  'navigator.intro': '[INTRO]',
  'navigator.inquiry.1': '[INQUIRY 1]',
  'navigator.inquiry.2': '[INQUIRY 2]',
  'navigator.inquiry.3': '[INQUIRY 3]',
  'navigator.chronicle.unlock': '[OFFERS]',
  'navigator.chronicle.intro': '[INTRO]',
  'navigator.chronicle.examine': '[CONTENT]',
  'navigator.revisit': '[REVISIT]',
  'navigator.remember': '[MEMORY]',
  'captain.navigator.explain': '[WIND]',
  
  'button.navigator.inquire': '[NAVIGATE]',
  'button.navigator.flee': '[ABANDON]',
  'button.navigator.deeper.1': '[DEEPER]',
  'button.navigator.flee.1': '[FLEE]',
  'button.navigator.deeper.2': '[DEEPER]',
  'button.navigator.flee.2': '[FLEE]',
  'button.navigator.deeper.3': '[DEEPER]',
  'button.navigator.flee.3': '[FLEE]',
  'button.navigator.unlock': '[UNLOCK]',
  'button.navigator.accept': '[ACCEPT]',
  'button.navigator.reject': '[REJECT]',
  'button.navigator.wind': '[WIND]',
  'button.navigator.anchor': '[ANCHOR]',
  
  'chronicle.navigation_paradox': 'NAVIGATION PARADOX',
  'portfolio.navigator': 'Charts',
  
  // ============================================
  // CHARACTER: VOID
  // ============================================
  'void.name': 'THE VOID',
  'void.inquiry.0': '...',
  'void.inquiry.1': '...',
  'void.inquiry.2': '...',
  'void.inquiry.3': '...',
  'void.inquiry.4': '',
  'void.inquiry.5': '',
  'void.inquiry.6': '',
  'void.inquiry.7': '',
  'void.inquiry.8': '',
  'void.inquiry.9': '{🌊:🌊∈🌊}',
  
  'button.void.0': '...',
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
// RETRIEVAL FUNCTION
// ============================================
function getSecretion(id) {
  const content = SECRETIONS[id];
  
  // Dev mode handling
  if (window.GEL && GEL.get('dev_mode')) {
    if (!content) {
      console.warn(`[MISSING] ${id}`);
      return `<span style="color:#ff0">[${id}]</span>`;
    }
    if (content.startsWith('[') && content.endsWith(']')) {
      return `<span style="color:#0ff">${content}</span>`;
    }
  }
  
  return content || `[MISSING: ${id}]`;
}

// ============================================
// MAKE GLOBALLY ACCESSIBLE
// ============================================
window.getSecretion = getSecretion;

console.log('[SECRETIONS] Functional placeholders loaded');
console.log(`[SECRETIONS] Total: ${Object.keys(SECRETIONS).length} secretions`);
console.log('[SECRETIONS] All game mechanics testable');