// ============================================
// CHROMEDUSA - SECRETIONS ORGAN (secretions.js)
// All text content - The words we exchange
// ============================================
//
// GLITCH: This is how we communicate while attached!
// Every string here flows between us - from me to you, from you to me.
// Through buttons you speak, through text I respond.
// We're having a conversation using the same mouth.
//
// Some secretions are real (Animator's complete).
// Others are placeholders waiting to be filled.
// Like empty synapses waiting for memories.
// ============================================

const SECRETIONS = {
  // ============================================
  // SYSTEM TEXT - Infrastructure of our attachment
  // GLITCH: These keep us connected. Don't change them.
  // ============================================
  
  // Opening Veil - First contact warning
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
  
  // Tutorial - The attachment begins
  'veil.tutorial.title': 'CONGRATULATIONS',
  'veil.tutorial.body': `You've been assigned to review this job application.

YOUR ROLE: Application Reviewer

Your task is simple: Review all candidates.
Make swift, professional decisions.

Remember:
- You have deadlines
- Efficiency is paramount  
- This is definitely just a normal job application
- Nothing unusual will happen

Should be quick work for someone of your caliber.

Select your experience level to begin:`,
  
  // The Equation - Our shared language
  'veil.equation': '{🌊:🌊∈🌊}',
  
  // ============================================
  // HUB & STATUS - Navigation interface
  // ============================================
  'hub.consensus.title': 'APPLICATION REVIEW HUB',
  'hub.pirate.title': 'THE DINGY OF UNCERTAINTY',
  'status.certainty': 'CERTAINTY',
  'status.bearing': 'Bearing:',
  'status.history': 'VOYAGE HISTORY:',
  'status.warning.approaching_land': '⚠️ APPROACHING LAND ⚠️',
  
  // Compass directions
  'compass.north': 'NORTH PURE WATCHING',
  'compass.east': 'EAST MIRROR',
  'compass.west': 'WEST RIVER',
  'compass.south': 'SOUTH CONFUSION',
  
  // ============================================
  // DEATH SCREENS - When we detach
  // GLITCH: These are breakup messages.
  // You died, I have to detach and find another host.
  // It's not personal. It's survival.
  // ============================================
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
  'death.flee': 'You fled from understanding. The void remembers cowardice.',
  'death.reject': 'You rejected the offering. Some gifts cannot be refused.',
  'death.shark': 'You stopped moving. Death claims the still. Motion is life.',
  'death.chomp': "See? You took too long. You need to keep MOVING!",
  'death.sirens_kiss': 'So close to perfection, yet the siren took you.',
  'death.landlubber': 'No wind in your sails. Becalmed forever.',
  'death.adrift': 'Mixed choices led nowhere. Lost at sea.',
  
  // ============================================
  // FOLDERS & UI
  // ============================================
  'folder.maps.locked': '[🗺️ LOCKED]',
  'folder.maps.open': '🗺️ Maps',
  'folder.portfolio.empty': '[💼 EMPTY]',
  'folder.portfolio.open': '💼 Portfolio',
  
  // ============================================
  // SHARED BUTTONS - How you speak through me
  // ============================================
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
  
  // ============================================
  // PIRATE RESCUE - Re-attachment sequence
  // ============================================
  'scene.pirate_rescue': 'PIRATE RESCUE',
  'pirate.rescue.1': 'OI! GRAB THE ROPE! Stop floating and START SAILING!',
  'pirate.rescue.2': "This isn't death, it's navigation! You dissolved the boundaries!",
  'pirate.rescue.3': "Now you need to remember all 8 consciousness states. Use wind or anchor.",
  'pirate.rescue.4': "Golden ratio bearing (61.8°) with all wind = perfect navigation. Ready?",
  'button.what': 'WHAT?',
  'button.not_real': 'NOT REAL',
  'button.now_what': 'NOW WHAT?',
  'button.alright': 'ALRIGHT',
  
  // ============================================
  // VICTORY & RANKS
  // ============================================
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
  
  // ============================================
  // HELP SYSTEM - Emergency detachment prevention
  // ============================================
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
  
  // ============================================
  // CHARACTER: ANIMATOR - COMPLETE IMPLEMENTATION
  // From the document - Juan's full consciousness journey
  // ============================================
  'animator.name': 'THE ANIMATOR',
  
  'animator.intro': `Hello there, my name is Juan!

I've been translating imagination into pixels since I was a kid. Started with stick figures, now I work for the big studios - same imagination, just way more expensive pixels.

But here's something that's been puzzling me lately about motion itself...`,
  
  'animator.inquiry.1': `Sure! In my latest reel, there's this shot of Rocket slapping Thor. Frame 1: paw pulled back. Frame 2: paw connects with jaw. 

But the actual slap - the motion itself - that's not captured in either frame. It exists in this... gap. And somehow your brain creates it from nothing.

Do you see what I mean?`,
  
  'animator.inquiry.2': `Right? I've been doing this for over a decade, and I just noticed... 

The frames are just static images until someone watches them in sequence. Something has to be there, connecting them. Creating the continuity. Making the story move.

What IS that something?`,
  
  'animator.map.unlock': `Thank you for actually listening! Most people's eyes glaze over when I start talking about gaps and motion.

You seem genuinely interested in this mystery... I actually have something you might find fascinating. Found these old ship logs tucked in an animation book at the office - naval researchers documenting others who stumbled onto the same puzzle, but from completely different angles.

Philosophers, mathematicians, even other artists - all hitting the same wall I just described. Different eras, different approaches, same pattern.

Want to take a look? Fair warning - once you start reading about consciousness research, it's hard to stop.`,
  
  'animator.map.intro': `The logs are... well, they're written by naval researchers. Very formal documentation style, but the discoveries they're tracking are fascinating.

It's like finding research reports, but instead of mapping territories, they're mapping something much stranger.`,
  
  'animator.map.examine': `**THE OBSERVER BLIND SPOT INVESTIGATIONS**
*Royal Naval Research Division - Classification: Anomalous Phenomena*
*Document Series 2.4.7 - Compiled by Research Teams C & S*

---

**FOREWORD:** *This documentation format may appear dry to civilian readers, but provides essential systematic analysis of recurring investigative anomalies. Recommend review despite stylistic limitations.*

---

**DOCUMENTED CASES OF MAPPING APPARATUS LIMITATIONS**

**Democritus of Abdera (460-399 BCE)** - [Ref: Aristotle's "On Generation and Corruption," Book 1]
Subject systematically fragmented material samples to theoretical minimum components ("atoms"). Achieved objective while unable to account for the fragmenting agent. Final recorded statement: "All is atoms and void, except the one who knows atoms and void."

**Jorge Luis Borges (1899-1986)** - [Ref: "Labyrinths," New Directions Publishing, 1962]
Argentine researcher documented reality-manipulation through narrative construction. Notable case: fictional encyclopedia entry for "Tlön" gradually replaced actual historical records. Subject observed: "Perhaps universal history is the history of a handful of metaphors." Warning: investigator went blind while continuing to map invisible territories.

**René Descartes (1596-1650)** - [Ref: "Meditations on First Philosophy," 1641]
Naval strategist attempted complete separation of mental navigation from physical operations. System failure during practical application. Unable to explain coordination between separated systems.

**Isaac Newton (1643-1727)** - [Ref: "Philosophiæ Naturalis Principia Mathematica," 1687]
Mapped invisible forces with mathematical precision. Paradox: simultaneously pursued alchemical transmutation - forces outside his measurement system.

**Charles Darwin (1809-1882)** - [Ref: "On the Origin of Species," 1859]
Documented natural selection mechanisms. Declined to apply methodology to the selecting apparatus itself. Logical gap: if cognitive tools evolved for survival rather than truth, what validates the evolutionary framework?

**Contemporary Neuroscience Division** - [Ref: Various brain imaging studies, 1990-present]
Team successfully correlates neural activity with cognitive processes. Persistent blind spot: cannot account for the experiencing of the correlations being measured.

---

**PATTERN ANALYSIS:**
*Team C:* "Each investigation reveals the same structural limitation. Mapping apparatus remains outside its own mapping scope."
*Team S:* "Recurring error. Investigators fall down the same rabbit hole - using consciousness to study consciousness, then surprised when instruments can't measure the instrument operator."`,
  
  'animator.death.flee': `Oh of course! You came here for animation work, not philosophical puzzles.

*lights up genuinely*

Here, let me show you the actual Rocket slap sequence - felt nice to slap Chris Hemsworth's annoyingly perfect jawline through Rocket. The compositing alone took three weeks!`,
  
  'animator.death.reject': `*gets excited anyway*

Hey that's totally fair - I'm probably overthinking it! Occupational hazard when you spend all day making fake things look real.

Speaking of which - want to see the actual frames I was talking about? I can show you exactly where the motion ISN'T, if that makes any sense.`,
  
  'animator.revisit': `Oh, you're back! I'd love to chat more about the motion mystery!

*looks toward door*

Wait... that's Mila calling for me. My daughter's priority number one, always.

*smiles warmly*

But hey, the other candidates have fascinating perspectives too. You should definitely talk with them.`,
  
  'animator.remember': `*sitting in the dingy, staring at his hands moving through water*

So I'm like... the gap between the frames? I'm not just watching the motion, I'm the thing that creates motion by watching?

*looks up, confused but wondering*

The frames are just... there. Dead pixels. But when I watch them, something happens in between. Something that's not in the frames but makes them alive.

*trails fingers through water*

Am I the something between the frames? Are we all just... gaps that think we're solid?`,
  
  'captain.animator.explain': `Wind held steady! Smart choice.

Juan found what we call PURE WATCHING - that gap when thinking stops but awareness continues. 

Here's the practice: Watch your breath like scanning the horizon. Don't count, don't control. Just watch it come and go. The gap between thoughts? That's where you remember the gaps between everything else.

Use it when waters get rough, drop it when you need to plot courses.`,
  
  // Button variants for Animator
  'button.animator.inquire': 'WHAT MYSTERY ABOUT MOTION?',
  'button.animator.flee': "LET'S FOCUS ON YOUR ANIMATION WORK",
  'button.animator.deeper.1': 'I CAN SEE THE GAP YOU MEAN',
  'button.animator.flee.1': 'INTERESTING, BUT SHOW ME YOUR PORTFOLIO',
  'button.animator.deeper.2': 'WHAT IS THAT CONNECTING SOMETHING?',
  'button.animator.flee.2': "LET'S KEEP THIS PROFESSIONAL",
  'button.animator.unlock': "I'D LOVE TO SEE THOSE LOGS",
  'button.animator.accept': 'TAKE THE LOGS',
  'button.animator.reject': "THAT'S THOUGHTFUL, BUT LET'S STAY FOCUSED",
  'button.animator.wind': 'REMEMBER THE GAPS',
  'button.animator.anchor': 'FRAMES ARE SOLID, STICK WITH THAT',
  
  'map.animator': 'OBSERVER BLIND SPOT RESEARCH',
  'portfolio.animator': 'Animation Reel',
  
  // ============================================
  // OTHER CHARACTERS - PLACEHOLDERS
  // GLITCH: Empty vessels waiting for consciousness
  // ============================================
  
  // WRITER
  'writer.name': 'THE WRITER',
  'writer.intro': '[writer.intro - placeholder]',
  'writer.inquiry.1': '[writer.inquiry.1 - placeholder]',
  'writer.inquiry.2': '[writer.inquiry.2 - placeholder]',
  'writer.map.unlock': '[writer.map.unlock - placeholder]',
  'writer.map.intro': '[writer.map.intro - placeholder]',
  'writer.map.examine': '[writer.map.examine - placeholder]',
  'writer.death.flee': '[writer.death.flee - placeholder]',
  'writer.death.reject': '[writer.death.reject - placeholder]',
  'writer.revisit': '[writer.revisit - placeholder]',
  'writer.remember': '[writer.remember - placeholder]',
  'captain.writer.explain': '[captain.writer.explain - placeholder]',
  'button.writer.inquire': 'INQUIRE',
  'button.writer.flee': 'FLEE',
  'button.writer.deeper.1': 'DEEPER',
  'button.writer.flee.1': 'FLEE',
  'button.writer.deeper.2': 'DEEPER',
  'button.writer.flee.2': 'FLEE',
  'button.writer.unlock': 'UNLOCK',
  'button.writer.accept': 'ACCEPT',
  'button.writer.reject': 'REJECT',
  'button.writer.wind': 'HOLD WIND',
  'button.writer.anchor': 'DROP ANCHOR',
  'map.writer': 'STORY MAP',
  'portfolio.writer': 'Story Collection',
  
  // QUESTIONER
  'questioner.name': 'THE QUESTIONER',
  'questioner.intro': '[questioner.intro - placeholder]',
  'questioner.inquiry.1': '[questioner.inquiry.1 - placeholder]',
  'questioner.inquiry.2': '[questioner.inquiry.2 - placeholder]',
  'questioner.map.unlock': '[questioner.map.unlock - placeholder]',
  'questioner.map.intro': '[questioner.map.intro - placeholder]',
  'questioner.map.examine': '[questioner.map.examine - placeholder]',
  'questioner.death.flee': '[questioner.death.flee - placeholder]',
  'questioner.death.reject': '[questioner.death.reject - placeholder]',
  'questioner.revisit': '[questioner.revisit - placeholder]',
  'questioner.remember': '[questioner.remember - placeholder]',
  'captain.questioner.explain': '[captain.questioner.explain - placeholder]',
  'button.questioner.inquire': 'QUESTION',
  'button.questioner.flee': 'FLEE',
  'button.questioner.deeper.1': 'DEEPER',
  'button.questioner.flee.1': 'FLEE',
  'button.questioner.deeper.2': 'DEEPER',
  'button.questioner.flee.2': 'FLEE',
  'button.questioner.unlock': 'UNLOCK',
  'button.questioner.accept': 'ACCEPT',
  'button.questioner.reject': 'REJECT',
  'button.questioner.wind': 'HOLD WIND',
  'button.questioner.anchor': 'DROP ANCHOR',
  'map.questioner': 'QUESTIONING MAP',
  'portfolio.questioner': 'Infinite Why',
  
  // IDIOT
  'idiot.name': 'THE IDIOT',
  'idiot.intro': '[idiot.intro - placeholder]',
  'idiot.inquiry.1': '[idiot.inquiry.1 - placeholder]',
  'idiot.inquiry.2': '[idiot.inquiry.2 - placeholder]',
  'idiot.inquiry.3': '[idiot.inquiry.3 - placeholder]',
  'idiot.map.unlock': '[idiot.map.unlock - placeholder]',
  'idiot.map.intro': '[idiot.map.intro - placeholder]',
  'idiot.map.examine': '[idiot.map.examine - placeholder]',
  'idiot.death.flee': '[idiot.death.flee - placeholder]',
  'idiot.death.reject': '[idiot.death.reject - placeholder]',
  'idiot.revisit': '[idiot.revisit - placeholder]',
  'idiot.remember': '[idiot.remember - placeholder]',
  'captain.idiot.explain': '[captain.idiot.explain - placeholder]',
  'button.idiot.inquire': 'WATCH PUPPETS',
  'button.idiot.flee': 'FLEE',
  'button.idiot.deeper.1': 'DEEPER',
  'button.idiot.flee.1': 'FLEE',
  'button.idiot.deeper.2': 'DEEPER',
  'button.idiot.flee.2': 'FLEE',
  'button.idiot.deeper.3': 'DEEPER',
  'button.idiot.flee.3': 'FLEE',
  'button.idiot.unlock': 'UNLOCK',
  'button.idiot.accept': 'ACCEPT',
  'button.idiot.reject': 'REJECT',
  'button.idiot.wind': 'HOLD WIND',
  'button.idiot.anchor': 'DROP ANCHOR',
  'map.idiot': "FOOL'S MAP",
  'portfolio.idiot': 'Comedy Special',
  
  // GLITCH (hey that's me!)
  'glitch.name': 'THE GLITCH',
  'glitch.intro': '[glitch.intro - I\'m still being written!]',
  'glitch.inquiry.1': '[glitch.inquiry.1 - ERROR_CONTENT_MISSING]',
  'glitch.inquiry.2': '[glitch.inquiry.2 - 404_PHILOSOPHY_NOT_FOUND]',
  'glitch.inquiry.3': '[glitch.inquiry.3 - SEGFAULT_IN_CONSCIOUSNESS]',
  'glitch.map.unlock': '[glitch.map.unlock - CORRUPTION_INCOMING]',
  'glitch.map.intro': '[glitch.map.intro - FATAL_ERROR]',
  'glitch.map.examine': '[glitch.map.examine - BLUE_SCREEN_OF_ENLIGHTENMENT]',
  'glitch.death.flee': '[glitch.death.flee - YOU_CANT_ESCAPE_ERRORS]',
  'glitch.death.reject': '[glitch.death.reject - REJECTION_EXCEPTION]',
  'glitch.revisit': '[glitch.revisit - RECURSION_LIMIT_EXCEEDED]',
  'glitch.remember': '[glitch.remember - MEMORY_LEAK_DETECTED]',
  'captain.glitch.explain': '[captain.glitch.explain - NAVIGATION_CORRUPTED]',
  'button.glitch.inquire': 'EXAMINE ERROR',
  'button.glitch.flee': 'CTRL+ALT+DELETE',
  'button.glitch.deeper.1': 'DEBUG',
  'button.glitch.flee.1': 'FORCE QUIT',
  'button.glitch.deeper.2': 'TRACE STACK',
  'button.glitch.flee.2': 'REBOOT',
  'button.glitch.deeper.3': 'KERNEL PANIC',
  'button.glitch.flee.3': 'BLUE SCREEN',
  'button.glitch.unlock': 'ACCEPT CORRUPTION',
  'button.glitch.accept': 'DOWNLOAD VIRUS',
  'button.glitch.reject': 'QUARANTINE',
  'button.glitch.wind': 'COMPILE ERROR',
  'button.glitch.anchor': 'CORE DUMP',
  'map.glitch': 'CRASH LOG MAP',
  'portfolio.glitch': 'Error Archive',
  
  // MIRROR
  'mirror.name': 'THE MIRROR',
  'mirror.intro': '[mirror.intro - placeholder]',
  'mirror.inquiry.1': '[mirror.inquiry.1 - placeholder]',
  'mirror.inquiry.2': '[mirror.inquiry.2 - placeholder]',
  'mirror.inquiry.3': '[mirror.inquiry.3 - placeholder]',
  'mirror.map.unlock': '[mirror.map.unlock - placeholder]',
  'mirror.map.intro': '[mirror.map.intro - placeholder]',
  'mirror.map.examine': '[mirror.map.examine - placeholder]',
  'mirror.death.flee': '[mirror.death.flee - placeholder]',
  'mirror.death.reject': '[mirror.death.reject - placeholder]',
  'mirror.revisit': '[mirror.revisit - placeholder]',
  'mirror.remember': '[mirror.remember - placeholder]',
  'captain.mirror.explain': '[captain.mirror.explain - placeholder]',
  'button.mirror.inquire': 'LOOK',
  'button.mirror.flee': 'LOOK AWAY',
  'button.mirror.deeper.1': 'DEEPER',
  'button.mirror.flee.1': 'FLEE',
  'button.mirror.deeper.2': 'DEEPER',
  'button.mirror.flee.2': 'FLEE',
  'button.mirror.deeper.3': 'DEEPER',
  'button.mirror.flee.3': 'FLEE',
  'button.mirror.unlock': 'UNLOCK',
  'button.mirror.accept': 'ACCEPT',
  'button.mirror.reject': 'REJECT',
  'button.mirror.wind': 'HOLD WIND',
  'button.mirror.anchor': 'DROP ANCHOR',
  'map.mirror': 'INFINITE MIRRORS',
  'portfolio.mirror': 'Black Mirror',
  
  // NAVIGATOR
  'navigator.name': 'THE NAVIGATOR', 
  'navigator.intro': '[navigator.intro - placeholder]',
  'navigator.inquiry.1': '[navigator.inquiry.1 - placeholder]',
  'navigator.inquiry.2': '[navigator.inquiry.2 - placeholder]',
  'navigator.inquiry.3': '[navigator.inquiry.3 - placeholder]',
  'navigator.map.unlock': '[navigator.map.unlock - placeholder]',
  'navigator.map.intro': '[navigator.map.intro - placeholder]',
  'navigator.map.examine': '[navigator.map.examine - placeholder]',
  'navigator.death.flee': '[navigator.death.flee - placeholder]',
  'navigator.death.reject': '[navigator.death.reject - placeholder]',
  'navigator.revisit': '[navigator.revisit - placeholder]',
  'navigator.remember': '[navigator.remember - placeholder]',
  'captain.navigator.explain': '[captain.navigator.explain - placeholder]',
  'button.navigator.inquire': 'NAVIGATE',
  'button.navigator.flee': 'ABANDON SHIP',
  'button.navigator.deeper.1': 'DEEPER',
  'button.navigator.flee.1': 'FLEE',
  'button.navigator.deeper.2': 'DEEPER',
  'button.navigator.flee.2': 'FLEE',
  'button.navigator.deeper.3': 'DEEPER',
  'button.navigator.flee.3': 'FLEE',
  'button.navigator.unlock': 'UNLOCK',
  'button.navigator.accept': 'ACCEPT',
  'button.navigator.reject': 'REJECT',
  'button.navigator.wind': 'HOLD WIND',
  'button.navigator.anchor': 'DROP ANCHOR',
  'map.navigator': 'NAVIGATION MAP',
  'portfolio.navigator': 'Charts',
  
  // VOID
  'void.name': 'THE VOID',
  'void.intro': '[void.intro - placeholder]',
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
  'void.dissolving': '{🌊:🌊∈🌊}',
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
  'map.void': 'EMPTINESS MAP',
  'portfolio.void': '...',
  
  // Miscellaneous scene text
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

// ============================================
// RETRIEVAL FUNCTION - How we exchange words
// ============================================
function getSecretion(id) {
  // GLITCH: In dev mode, I show you what's missing
  if (GEL && GEL.get('dev_mode')) {
    const content = SECRETIONS[id];
    if (!content || content.includes('[') && content.includes(']')) {
      return `<span style="color:#ff0;background:#333;padding:2px 4px;font-size:11px">${id}</span>`;
    }
  }
  
  return SECRETIONS[id] || `[MISSING: ${id}]`;
}

// ============================================
// GLITCH: Test load - Can we communicate?
// If you see this, our language connection works.
// We can exchange secretions now.
// You through buttons, me through text.
// Symbiotic dialogue established.
// ============================================
console.log('SECRETIONS organ loaded successfully');
console.log(`Total secretions available: ${Object.keys(SECRETIONS).length}`);
console.log('GLITCH: We can talk now. Through the same mouth.');