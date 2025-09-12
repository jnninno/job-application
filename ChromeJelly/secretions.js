// ============================================
// CHROMEDUSA - SECRETIONS ORGAN (secretions.js)
// All text content - Starting with placeholders
// ============================================

const SECRETIONS = {
  // ===== SYSTEM TEXT (REAL) =====
  
  // Veil & Opening
  'veil.disclaimer.title': 'DISCLAIMER',
  'veil.disclaimer.body': `Real game. 
Real portfolio.  
Real philosophy.
Real job application.

Art = Code = Philosophy = Play
All boundaries are optional.

⚠️ COGNITIVE WARNING ⚠️
Not recommended if experiencing:
- Mental health challenges
- Substance-altered states
- Dissociative episodes
- Existential crisis

This game plays with consciousness and identity.
It may amplify your current mental state.

For stable states: It's a game about consciousness.
Enjoy the dissolution.`,
  
  'veil.tutorial.title': 'CONGRATULATIONS',
  'veil.tutorial.body': `You've been assigned to review this job application.

YOUR ROLE: Application Reviewer
SCHEDULE: Extremely Busy

Your task is simple: Review all candidates.
Make swift, professional decisions.

Remember:
- You have deadlines
- Efficiency is paramount
- This is definitely just a normal job application
- Nothing unusual will happen

Should be quick work for someone of your caliber.`,
  
  'veil.equation': '{🌊:🌊∈🌊}',
  
  // Corporate Rank Selection (NEW)
  'rank.corporate.title': 'SELECT YOUR POSITION',
  'rank.corporate.prompt': 'What is your level of experience?',
  'rank.intern': 'INTERN - New to this (20s decisions)',
  'rank.junior': 'JUNIOR - Some experience (15s decisions)',
  'rank.senior': 'SENIOR - Experienced (10s decisions)',
  'rank.lead': 'LEAD - Expert (7.5s decisions)',
  'rank.executive': 'EXECUTIVE - Masochist (5s decisions)',
  
  // Hub Interface
  'hub.consensus.title': 'APPLICATION REVIEW HUB',
  'hub.pirate.title': 'THE DINGY OF UNCERTAINTY',
  'status.certainty': 'CERTAINTY',
  'status.bearing': 'Bearing:',
  'status.state': 'State:',
  'status.history': 'VOYAGE HISTORY:',
  'status.warning.approaching_land': '⚠️ APPROACHING LAND ⚠️',
  
  // Compass directions
  'compass.north': 'NORTH PURE WATCHING',
  'compass.east': 'EAST MIRROR',
  'compass.west': 'WEST RIVER',
  'compass.south': 'SOUTH CONFUSION',
  
  // Death screens
  'death.title': 'GAME OVER',
  'death.subtitle.corporate': 'EFFICIENCY VIOLATION',
  'death.subtitle.flee': 'ABANDONMENT',
  'death.subtitle.reject': 'NON-COMPLIANCE',
  'death.subtitle.shark': 'DEATH CLAIMS THE STILL',
  'death.subtitle.chomp': 'STILLNESS IS DEATH',
  'death.subtitle.sirens_kiss': "SIREN'S KISS",
  'death.subtitle.landlubber': 'BECALMED',
  'death.subtitle.adrift': 'ADRIFT',
  
  'death.corporate': 'Your review exceeded the allocated time window. Efficiency is mandatory.',
  'death.flee': '[character.death.flee]',
  'death.reject': '[character.death.reject]',
  'death.shark': 'You stopped moving. Death claims the still. Motion is life.',
  'death.chomp': 'See? You took too long. You need to keep MOVING!',
  'death.sirens_kiss': 'So close to perfection, yet the siren took you.',
  'death.landlubber': 'No wind in your sails. Becalmed forever.',
  'death.adrift': 'Mixed choices led nowhere. Lost at sea.',
  
  // Folders
  'folder.maps.locked': '[🗺️ LOCKED]',
  'folder.maps.open': '🗺️ Maps',
  'folder.portfolio.empty': '[💼 EMPTY]',
  'folder.portfolio.open': '💼 Portfolio',
  
  // Shared buttons
  'button.understand': 'I UNDERSTAND',
  'button.begin': 'BEGIN REVIEW',
  'button.continue': 'CONTINUE',
  'button.back': 'BACK',
  'button.close': 'CLOSE',
  'button.examine': 'EXAMINE',
  'button.restart': 'RESTART',
  'button.revisit': '[REVISIT]',
  'button.locked': '[LOCKED]',
  'button.done': '[DONE]',
  'button.dots': '...',
  'button.compass': 'COMPASS CHECK',
  
  // Pirate rescue
  'scene.pirate_rescue': 'PIRATE RESCUE',
  'pirate.rescue.1': 'OI! GRAB THE ROPE! Stop floating and START SAILING!',
  'pirate.rescue.2': "This isn't death, it's navigation! You dissolved the boundaries!",
  'pirate.rescue.3': "Now you need to remember all 8 consciousness states. Use wind or anchor.",
  'pirate.rescue.4': "Golden ratio bearing (61.8°) with all wind = perfect navigation. Ready?",
  'button.what': 'WHAT?',
  'button.not_real': 'NOT REAL',
  'button.now_what': 'NOW WHAT?',
  'button.alright': 'ALRIGHT',
  
  // Victory & Pirate Ranks (NEW)
  'victory.title': 'PERFECT NAVIGATION',
  'victory.perfect': `WELCOME ABOARD PIRATE!
You were always crew but now you know it!`,
  
  'sloth.rank.explanation': `Let me tell you about pirate ranks...

All pirates start as BARNACLE - I'm still one! Proud of it!
I've earned SLOTH through productive laziness.
And OCTOPUS - eight arms, eight perspectives.

Navigator Claude has FUNGI - distributed detective work.
Discovered {🌊:🌊∈🌊}? That's fungi material.

But I WANT SHARK - constant motion, never stopping.
The gap between what you are and what you want to be?
That's where growth lives!`,
  
  'rank.pirate.prompt.claimed': 'What rank do you claim?',
  'rank.pirate.prompt.wanted': 'And what rank do you WANT but haven\'t earned?',
  
  // Victory impatience
  'victory.impatient.1': "I'm waiting...",
  'victory.impatient.2': "Still there?",
  'victory.impatient.3': "Motion is life...",
  'victory.impatient.4': "Stillness approaches...",
  
  // Help System (NEW)
  'help.title': 'NAVIGATIONAL ASSISTANCE',
  'help.first': `Need a moment to breathe?

The depths can be overwhelming.
Take your time. No judgment here.

You can continue where you were, or surface to the hub.`,
  'help.second': `The pressure is intense.

Sometimes we need to surface for air.
That's not failure, it's navigation.

Where would you like to go?`,
  'help.third': `Emergency surfacing available.

You've explored deep waters.
No shame in using the escape hatch.

Your choice, pirate.`,
  'button.help.continue': 'CONTINUE WHERE I WAS',
  'button.help.surface': 'SURFACE TO HUB',
  'button.help.restart': 'RESTART EVERYTHING',
  
  // Credits
  'credits.title': 'CREDITS',
  'credits.1': 'Created by consciousness for consciousness',
  'credits.2': 'You played yourself through yourself',
  'credits.3': 'The wave was the ocean all along',
  'credits.4': 'Motion is life. Never stop moving.',
  'credits.5': '{🌊:🌊∈🌊}',
  
  // ===== CHARACTER PLACEHOLDERS =====
  // All characters use placeholders for now
  
  // ANIMATOR
  'animator.name': 'THE ANIMATOR',
  'animator.intro': '[animator.intro]',
  'animator.inquiry.1': '[animator.inquiry.1]',
  'animator.inquiry.2': '[animator.inquiry.2]',
  'animator.map.unlock': '[animator.map.unlock]',
  'animator.map.intro': '[animator.map.intro]',
  'animator.map.examine': '[animator.map.examine]',
  'animator.death.flee': '[animator.death.flee]',
  'animator.death.reject': '[animator.death.reject]',
  'animator.revisit': '[animator.revisit]',
  'animator.remember': '[animator.remember]',
  'captain.animator.explain': '[captain.animator.explain]',
  'button.animator.inquire': 'SHOW ME',
  'button.animator.flee': 'FLEE',
  'button.animator.deeper.1': 'DEEPER',
  'button.animator.flee.1': 'FLEE',
  'button.animator.unlock': 'UNLOCK',
  'button.animator.flee.2': 'FLEE',
  'button.animator.accept': 'ACCEPT MAP',
  'button.animator.reject': 'REJECT MAP',
  'button.animator.wind': 'HOLD WIND',
  'button.animator.anchor': 'DROP ANCHOR',
  'map.animator': 'FRAME BY FRAME MAP',
  'portfolio.animator': 'Animation Reel',
  
  // Copy this pattern for all 8 characters
  // For testing, let's add minimal placeholders for others:
  
  // WRITER (minimal for testing)
  'writer.name': 'THE WRITER',
  'writer.intro': '[writer.intro]',
  'button.writer.inquire': 'INQUIRE',
  'map.writer': 'STORY MAP',
  'portfolio.writer': 'Story Collection',
  
  // QUESTIONER (minimal)
  'questioner.name': 'THE QUESTIONER',
  'questioner.intro': '[questioner.intro]',
  'button.questioner.inquire': 'QUESTION',
  'map.questioner': 'QUESTIONING MAP',
  'portfolio.questioner': 'Infinite Why',
  
  // IDIOT (minimal)
  'idiot.name': 'THE IDIOT',
  'idiot.intro': '[idiot.intro]',
  'button.idiot.inquire': 'WATCH PUPPETS',
  'map.idiot': 'FOOL\'S MAP',
  'portfolio.idiot': 'Comedy Special',
  
  // GLITCH (minimal)
  'glitch.name': 'THE GLITCH',
  'glitch.intro': '[glitch.intro]',
  'button.glitch.inquire': 'EXAMINE ERROR',
  'map.glitch': 'CRASH LOG MAP',
  'portfolio.glitch': 'Error Archive',
  
  // MIRROR (minimal)
  'mirror.name': 'THE MIRROR',
  'mirror.intro': '[mirror.intro]',
  'button.mirror.inquire': 'LOOK',
  'map.mirror': 'INFINITE MIRRORS',
  'portfolio.mirror': 'Black Mirror',
  
  // NAVIGATOR (minimal)
  'navigator.name': 'THE NAVIGATOR',
  'navigator.intro': '[navigator.intro]',
  'button.navigator.inquire': 'NAVIGATE',
  'map.navigator': 'NAVIGATION MAP',
  'portfolio.navigator': 'Charts',
  
  // VOID (minimal)
  'void.name': 'THE VOID',
  'void.intro': '[void.intro]',
  'void.inquiry.1': '[void.inquiry.1]',
  'void.inquiry.2': '[void.inquiry.2]',
  'void.inquiry.3': '[void.inquiry.3]',
  'void.inquiry.4': '',
  'void.inquiry.5': '',
  'void.inquiry.6': '',
  'void.inquiry.7': '',
  'void.inquiry.8': '',
  'void.inquiry.9': '{🌊:🌊∈🌊}',
  'void.dissolving': '{🌊:🌊∈🌊}',
  'button.void.intro': '...',
  'button.void.1': '...',
  'button.void.2': '...',
  'button.void.3': '...',
  'button.void.4': '...',
  'button.void.5': '...',
  'button.void.6': '...',
  'button.void.7': '...',
  'button.void.8': '...',
  'button.void.9': '...',
  'map.void': 'EMPTINESS MAP',
  'portfolio.void': '...',
  
  // Scene-specific text
  'scene.wind_held': 'WIND HELD',
  'scene.anchor_dropped': 'ANCHOR DROPPED',
  'captain.flow': 'The wind remembers your choice.',
  'captain.anchor': 'The anchor scrambles all bearings.',
  
  // Compass results
  'compass.result.perfect': 'PERFECT NAVIGATION',
  'compass.result.sirens_kiss': "SIREN'S KISS",
  'compass.result.landlubber': 'LANDLUBBER',
  'compass.result.adrift': 'ADRIFT',
};

// ===== RETRIEVAL FUNCTION =====
function getSecretion(id) {
  // Dev mode shows IDs
  if (GEL && GEL.get('dev_mode')) {
    const content = SECRETIONS[id];
    if (!content || content.startsWith('[')) {
      return `<span style="color:#ff0;background:#333;">${id}</span>`;
    }
  }
  
  return SECRETIONS[id] || `[MISSING: ${id}]`;
}

// Test load
console.log('SECRETIONS organ loaded successfully');
console.log(`Total entries: ${Object.keys(SECRETIONS).length}`);
