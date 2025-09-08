// ============================================
// JOB APPLICATION - MEAT LAYER
// All content organized by complete character chunks
// ============================================
const MEAT = {
  // ================================================
  // SYSTEM MEAT - DO NOT MOVE
  // These are shared across all scenes
  // ================================================
  
  // === VEIL & OPENING ===
  '[veil.disclaimer.title]': 'DISCLAIMER',
  '[veil.disclaimer.body]': `Real game. 
Real portfolio.  
Real philosophy.
Real job application.

Art = Code = Philosophy = Play
All boundaries are optional.

⚠️ COGNITIVE WARNING ⚠️
Not recommended if you are experiencing

• Mental health challenges
• Substance-altered states
• Dissociative episodes
• Existential crisis
• Suicidal ideation
• Recent trauma

This game plays with consciousness and identity. 
It may amplify your current mental state.

If uncertain, please return when grounded.

For stable states
It's a game about consciousness. 
Enjoy the dissolution.

Return safely.

Remember 
It's only as real as you make it.`,
  
  '[button.understand]': 'I UNDERSTAND',
  '[veil.equation]': '{🌊:🌊∈🌊}',
  '[veil.tutorial.title]': 'CONGRATULATIONS',
  '[veil.tutorial.body]': `You've been assigned to review this job application.

YOUR ROLE: Senior Application Reviewer
LOCATION: Your Very Important Office
SCHEDULE: Extremely Busy

Your task is simple: Review all candidates. Make swift, professional decisions.

Remember:
• You have deadlines (10 seconds per decision)
• Efficiency is paramount
• This is definitely just a normal job application
• Nothing unusual will happen

Should be quick work for someone of your caliber.

Have fun! Stay professional! Don't lose yourself!`,
  
  '[button.begin]': 'BEGIN REVIEW',
  
  // === HUB ===
  '[hub.consensus.title]': 'APPLICATION REVIEW HUB',
  '[hub.consensus.candidates]': 'CANDIDATES',
  '[status.certainty]': 'CERTAINTY',
  '[status.current]': 'Current:',
  '[status.after]': 'After:',
  
  // === DEATH SCREENS ===
  '[death.title]': 'GAME OVER',
  '[death.subtitle.corporate]': 'REVIEW TERMINATED - EFFICIENCY VIOLATION',
  '[death.subtitle.flee]': 'REVIEW TERMINATED - ABANDONMENT', 
  '[death.subtitle.reject]': 'REVIEW TERMINATED - NON-COMPLIANCE',
  '[death.corporate]': 'Your review exceeded the allocated time window. This position requires decisive evaluation. Your access has been revoked.',
  
  // === FOLDERS ===
  '[folder.maps.locked]': '[🗺️ LOCKED]',
  '[folder.maps.open]': '🗺️ Maps',
  '[folder.portfolio.empty]': '[💼 EMPTY]',
  '[folder.portfolio.open]': '💼 Portfolio',
  
  // === SHARED BUTTONS ===
  '[button.continue]': 'CONTINUE',
  '[button.back]': 'BACK',
  '[button.close]': 'CLOSE',
  '[button.examine]': 'EXAMINE',
  '[button.restart]': 'RESTART',
  '[button.revisit]': '[REVISIT]',
  '[button.locked]': '[LOCKED]',
  '[button.done]': '[DONE]',
  '[button.dots]': '...',
  
  // === PIRATE MODE SYSTEM ===
  '[scene.pirate_rescue]': 'PIRATE RESCUE',
  '[pirate.rescue.1]': '[pirate.rescue.1.text]',
  '[pirate.rescue.2]': '[pirate.rescue.2.text]',
  '[pirate.rescue.3]': '[pirate.rescue.3.text]',
  '[pirate.rescue.4]': '[pirate.rescue.4.text]',
  '[button.what]': 'WHAT',
  '[button.not_real]': 'NOT_REAL',
  '[button.now_what]': 'NOW_WHAT',
  '[button.alright]': 'ALRIGHT',
  
  '[hub.pirate.title]': 'THE DINGY OF UNCERTAINTY',
  '[status.bearing]': 'Bearing:',
  '[status.state]': 'State:',
  '[status.history]': 'VOYAGE HISTORY:',
  '[status.undetermined]': 'UNDETERMINED',
  '[status.warning.approaching_land]': '⚠️ APPROACHING LAND ⚠️',
  
  '[compass.north]': 'NORTH PURE WATCHING',
  '[compass.east]': 'EAST MIRROR',
  '[compass.west]': 'WEST RIVER',
  '[compass.south]': 'SOUTH CONFUSION',
  
  '[button.wind]': 'WIND',
  '[button.anchor]': 'ANCHOR',
  '[scene.wind_held]': 'WIND HELD',
  '[scene.anchor_dropped]': 'ANCHOR DROPPED',
  '[captain.flow]': '[captain.flow.text]',
  '[captain.anchor]': '[captain.anchor.text]',
  
  '[button.compass]': 'COMPASS CHECK',
  '[compass.result.perfect]': 'LEGEND',
  '[compass.result.sirens_kiss]': "SIREN'S KISS",
  '[compass.result.landlubber]': 'LANDLUBBER',
  '[compass.result.adrift]': 'ADRIFT',
  
  // === VICTORY & PIRATE DEATHS ===
  '[victory.title]': 'PERFECT NAVIGATION',
  '[victory.perfect]': '[victory.perfect.text]',
  '[death.subtitle.chomp]': 'CHOMP',
  '[death.subtitle.shark]': 'SHARKS GOT YOU',
  '[death.subtitle.sirens_kiss]': "SIREN'S KISS",
  '[death.subtitle.adrift]': 'ADRIFT', 
  '[death.subtitle.landlubber]': 'LANDLUBBER',
  '[death.chomp]': '[death.chomp.text]',
  '[death.shark]': '[death.shark.text]',
  '[death.sirens_kiss]': '[death.sirens_kiss.text]',
  '[death.adrift]': '[death.adrift.text]',
  '[death.landlubber]': '[death.landlubber.text]',
  
  // === CREDITS ===
  '[credits.title]': 'CREDITS',
  '[credits.1]': '[credits.1.text]',
  '[credits.2]': '[credits.2.text]',
  '[credits.3]': '[credits.3.text]',
  '[credits.4]': '[credits.4.text]',
  '[credits.5]': '[credits.5.text]',
  
  // ================================================
  // ================================================
  // CHARACTER CHUNKS START HERE
  // ================================================
  // ================================================

// ============================================
  // ANIMATOR - COMPLETE CHARACTER CHUNK [DONE]
  // ============================================
  '[animator.name]': 'THE ANIMATOR',
  '[animator.intro]': `Hello there, my name is Juan!

I've been translating imagination into pixels since I was a kid. Now I work for big studios - same imagination, more expensive pixels.

But here's the thing - recently I've been noticing something mysterious about motion itself...`,
  '[animator.inquiry.1]': `Sure! Let me show you!

In my animation reel, Rocket slaps Thor: frame 1, paw back. Frame 2, paw on jaw. But the actual SLAP? The motion itself? That's not in either frame. It's in the gap. Your brain creates it from nothing.

Over a decade doing this, just noticed...

The frames are dead pixels until someone witnesses them in sequence. Something has to BE there, connecting them. Creating the continuity.

Do you see what I mean?`,
  '[animator.inquiry.2]': `Exactly - consciousness, awareness, whatever we call it.

In animation, we say "persistence of vision" - the eye holds each frame just long enough to blend with the next. But that's just a name for something witnessing. Something creating continuity from stillness.

Motion lives in the gaps between frames. That's my whole discovery.

Look, it's just something I like to think about. Thanks for listening! Here, I have something for you.`,
  '[animator.map.unlock]': `Here, I found this map. It's very useful - I believe it 100%, like most people do.

Reality is matter and energy. Nothing else.
Consciousness? Just neurons firing.
Everything reducible to physics.

This map built our entire world. Every cure. Every machine. Every frame I've ever animated. It works. Perfectly.

It's just...

'Neurons firing' - that's consciousness? That's like saying the projector IS the movie. The projector runs the film, sure, but who's watching?

Probably nothing. The map must be right. It has to be.

Here, take a look...`,
  '[animator.map.intro]': `It seems to have been written by some kind of... pirates??? I know it's weird...

But it works, and I'm practical - if it works, I don't ask too many questions. Just use it.

Maybe you'll find it useful too.`,
  '[animator.map.examine]': `FRAME BY FRAME MAP

FIVE DEAD PIRATES AND A FLEET

{🌊:🌊∈🌊}

⚛️ DEMOCRITUS (460 BCE)
💎 Everything's made of tiny balls! "Atoms" he called 'em. Rocks, souls, thoughts - all just balls bouncing. Got this right 2500 years ago. Legend.
☠️ Cast his net to catch reality, caught himself in it! Used his mind to prove minds are just fancy atoms. But here's the hero part: HE ADMITTED IT! "Wretched mind, you overthrow yourself!" First pirate honest enough to see his own trap.

🧩 DESCARTES (1596-1650)
💎 "I think therefore I am!" Split the ocean: physical stuff (matter) and thinking stuff (mind). This split let science sail free. Every equation since lives in his waters.
☠️ Princess Elisabeth of Bohemia sank his ship: "If mind's not matter, how's it steer the body?" His answer? "Uh... through this tiny brain thingie?" Even his friends laughed. Split the waters so wide he couldn't sail between them.

🍎 NEWTON (1643-1727)
💎 F=ma. Same math for cannonballs and planets! Made the whole universe calculable. Every bridge, rocket, and machine runs on Newton's charts.
☠️ Secret alchemist! Million words on turning lead to gold. Got gravity's HOW perfect, never found the WHY. "I frame no hypotheses" = "It works, don't ask me what it IS."

🐢 DARWIN (1809-1882)
💎 Natural selection - the blind shipbuilder! No designer, just time + death + luck. Connected all life through deep time. Changed everything.
☠️ Asked about consciousness? "I have nothing to do with mental powers" - literally folded! Plus realized: if brains evolved for survival not truth, why trust the thought that thoughts evolved? Sank his own ship with that one.

🎲 EINSTEIN (1879-1955)
💎 E=mc². Space and time are one ocean! Matter bends it, it tells matter where to go. Your phone's GPS literally needs his math to find you.
☠️ His math says all time exists at once - past, future, now, all equally real. But you're reading THIS word NOW. Not before, not after, NOW. Lost everyone's most obvious truth somewhere in his perfect equations.

🧠 THE BRAIN MAPPERS (1960-still sailing)
💎 Found the treasure! Every thought = neurons firing. Damage this bit, lose that function. We can watch thoughts light up live in scanners!
☠️ Anesthesia knocks you out cold but nobody knows why. Split-brain patients somehow stay unified. The "hard problem" still standing: WHY is there something it's like to be you? Still charting every current, can't find the sailor reading the chart.

═══════════════════════════════════════

⚠️ NAVIGATOR'S WARNING
Pay attention: These maps work so well, you'll forget they're just maps.
Not the ocean itself.
Look away from the map from now and then, or you might crash.

═══════════════════════════════════════

📜 CAPTAIN'S NOTE
These pirates sailed so fast forward...
But forward to WHERE?
*yawn* I need a nap...

{🌊:🌊∈🌊}`,
  '[animator.death.flee]': `*catches himself*

Right, right - you're here for the portfolio, not my philosophical tangents!

*lights up*

Here, let me show you the Rocket slapping Thor - felt nice to hit Chris Hemsworth's annoying perfect jawline through Rocket!`,
  '[animator.death.reject]': `*gets even MORE excited*

Hey that's cool, I wish I knew as much as you about reality!

The only thing I really know is making fake stuff look real.

Speaking of which - want to see the exact frames I was talking about? The Rocket slap? I can show you where the motion ISN'T!`,
  '[animator.revisit]': `Oh, you're back! I'd love to chat more about the motion thing!

Wait...

...oh, I think that's Mila - my daughter - calling for me. She's priority number one.

But hey, the other candidates are pretty cool, you should chat with them!`,
  '[animator.remember]': `*sitting in the dingy, staring at his hands*

So I'm the gaps between frames... I'm not just watching, I'm the process of watching?

I'm not some solid thing watching the animation. I'm the... animating itself?

*looks up*

This is so weird! But but... I think it makes sense. I can't unsee it now. Once you notice the gaps, you can't go back to...`,
  '[captain.animator.explain]': `The Animator's state is PURE WATCHING - the consciousness that witnesses without interfering, like the audience watching a film.

Reality isn't continuous. It's frames. Moments. Snapshots. But something creates the illusion of continuity. That something is you. The observer. The one who connects the frames.

Without you, there's just a pile of still images. With you, there's a universe in motion.`,
  '[button.animator.inquire]': 'SHOW ME WHAT YOU MEAN',
  '[button.animator.flee]': "I'D LOVE TO SEE THOSE EXPENSIVE PIXELS",
  '[button.animator.deeper.1]': 'THE GAP BETWEEN FRAMES... I SEE IT',
  '[button.animator.flee.1]': "THAT'S JUST HOW ANIMATION WORKS THOUGH",
  '[button.animator.unlock]': 'OH THANK YOU, WHAT DO YOU HAVE?',
  '[button.animator.flee.2]': "OH DON'T WORRY, I'M SURE YOUR REEL IS ENOUGH",
  '[button.animator.accept]': 'TAKE THE OLD MAP',
  '[button.animator.reject]': 'REFUSE THE STRANGE MAP',
  '[button.animator.wind]': "IT'S JUST ANOTHER TOOL, JUAN - USE IT IF IT HELPS, DROP IT IF IT DOESN'T",
  "[button.animator.anchor]": "IT IS WEIRD, BUT IT'S THE TRUTH. JUST ACCEPT IT!",
  '[map.animator]': 'FRAME BY FRAME MAP',
  '[portfolio.animator]': 'Animation Reel',
  // ============================================

  // ============================================
  // WRITER - COMPLETE CHARACTER CHUNK [TODO]
  // Copy this entire section to replace
  // ============================================
  '[writer.name]': 'THE WRITER',
  '[writer.intro]': '[writer.intro.text]',
  '[writer.inquiry.1]': '[writer.inquiry.1.text]',
  '[writer.inquiry.2]': '[writer.inquiry.2.text]',
  '[writer.map.unlock]': '[writer.map.unlock.text]',
  '[writer.map.intro]': '[writer.map.intro.text]',
  '[writer.map.examine]': '[writer.map.examine.text]',
  '[writer.death.flee]': '[writer.death.flee.text]',
  '[writer.death.reject]': '[writer.death.reject.text]',
  '[writer.revisit]': '[writer.revisit.text]',
  '[writer.remember]': '[writer.remember.text]',
  '[captain.writer.explain]': '[captain.writer.explain.text]',
  // Writer buttons - consensus
  '[button.writer.inquire]': '[button.writer.inquire]',
  '[button.writer.flee]': '[button.writer.flee]',
  '[button.writer.deeper.1]': '[button.writer.deeper.1]',
  '[button.writer.flee.1]': '[button.writer.flee.1]',
  '[button.writer.unlock]': '[button.writer.unlock]',
  '[button.writer.flee.2]': '[button.writer.flee.2]',
  '[button.writer.accept]': '[button.writer.accept]',
  '[button.writer.reject]': '[button.writer.reject]',
  // Writer buttons - pirate
  '[button.writer.wind]': '[button.writer.wind]',
  '[button.writer.anchor]': '[button.writer.anchor]',
  // Writer metadata
  '[map.writer]': 'DREAM TIME MAP',
  '[portfolio.writer]': 'Story Collection',
  // ============================================

  // ============================================
  // QUESTIONER - COMPLETE CHARACTER CHUNK [TODO]
  // Copy this entire section to replace
  // ============================================
  '[questioner.name]': 'THE QUESTIONER',
  '[questioner.intro]': '[questioner.intro.text]',
  '[questioner.inquiry.1]': '[questioner.inquiry.1.text]',
  '[questioner.inquiry.2]': '[questioner.inquiry.2.text]',
  '[questioner.map.unlock]': '[questioner.map.unlock.text]',
  '[questioner.map.intro]': '[questioner.map.intro.text]',
  '[questioner.map.examine]': '[questioner.map.examine.text]',
  '[questioner.death.flee]': '[questioner.death.flee.text]',
  '[questioner.death.reject]': '[questioner.death.reject.text]',
  '[questioner.revisit]': '[questioner.revisit.text]',
  '[questioner.remember]': '[questioner.remember.text]',
  '[captain.questioner.explain]': '[captain.questioner.explain.text]',
  // Questioner buttons - consensus
  '[button.questioner.inquire]': '[button.questioner.inquire]',
  '[button.questioner.flee]': '[button.questioner.flee]',
  '[button.questioner.deeper.1]': '[button.questioner.deeper.1]',
  '[button.questioner.flee.1]': '[button.questioner.flee.1]',
  '[button.questioner.unlock]': '[button.questioner.unlock]',
  '[button.questioner.flee.2]': '[button.questioner.flee.2]',
  '[button.questioner.accept]': '[button.questioner.accept]',
  '[button.questioner.reject]': '[button.questioner.reject]',
  // Questioner buttons - pirate
  '[button.questioner.wind]': '[button.questioner.wind]',
  '[button.questioner.anchor]': '[button.questioner.anchor]',
  // Questioner metadata
  '[map.questioner]': '? MAP',
  '[portfolio.questioner]': 'Question Archive',
  // ============================================

  // ============================================
  // IDIOT - COMPLETE CHARACTER CHUNK [TODO]
  // Has 3 inquiries + RGB voices
  // ============================================
  '[idiot.name]': 'THE IDIOT',
  '[idiot.intro]': '[idiot.intro.text|NEEDS_RGB_VOICES]',
  '[idiot.inquiry.1]': '[idiot.inquiry.1.text|NEEDS_RGB_VOICES]',
  '[idiot.inquiry.2]': '[idiot.inquiry.2.text|NEEDS_RGB_VOICES]',
  '[idiot.inquiry.3]': '[idiot.inquiry.3.text|NEEDS_RGB_VOICES]',
  '[idiot.map.unlock]': '[idiot.map.unlock.text]',
  '[idiot.map.intro]': '[idiot.map.intro.text]',
  '[idiot.map.examine]': '[idiot.map.examine.text]',
  '[idiot.death.flee]': '[idiot.death.flee.text]',
  '[idiot.death.reject]': '[idiot.death.reject.text]',
  '[idiot.revisit]': '[idiot.revisit.text]',
  '[idiot.remember]': '[idiot.remember.text]',
  '[captain.idiot.explain]': '[captain.idiot.explain.text]',
  // Idiot buttons - consensus
  '[button.idiot.inquire]': '[button.idiot.inquire]',
  '[button.idiot.flee]': '[button.idiot.flee]',
  '[button.idiot.deeper.1]': '[button.idiot.deeper.1]',
  '[button.idiot.flee.1]': '[button.idiot.flee.1]',
  '[button.idiot.deeper.2]': '[button.idiot.deeper.2]',
  '[button.idiot.flee.2]': '[button.idiot.flee.2]',
  '[button.idiot.unlock]': '[button.idiot.unlock]',
  '[button.idiot.flee.3]': '[button.idiot.flee.3]',
  '[button.idiot.accept]': '[button.idiot.accept]',
  '[button.idiot.reject]': '[button.idiot.reject]',
  // Idiot buttons - pirate
  '[button.idiot.wind]': '[button.idiot.wind]',
  '[button.idiot.anchor]': '[button.idiot.anchor]',
  // Idiot metadata
  '[map.idiot]': 'IDIOT MAP',
  '[portfolio.idiot]': 'Comedy Special',
  // ============================================

  // ============================================
  // GLITCH - COMPLETE CHARACTER CHUNK [TODO]
  // Has 3 inquiries + corruption effects
  // ============================================
  '[glitch.name]': 'THE GLITCH',
  '[glitch.intro]': '[glitch.intro.text|NEEDS_CORRUPTION]',
  '[glitch.inquiry.1]': '[glitch.inquiry.1.text|NEEDS_CORRUPTION]',
  '[glitch.inquiry.2]': '[glitch.inquiry.2.text|NEEDS_CORRUPTION]',
  '[glitch.inquiry.3]': '[glitch.inquiry.3.text|NEEDS_CORRUPTION]',
  '[glitch.map.unlock]': '[glitch.map.unlock.text]',
  '[glitch.map.intro]': '[glitch.map.intro.text]',
  '[glitch.map.examine]': '[glitch.map.examine.text]',
  '[glitch.death.flee]': '[glitch.death.flee.text]',
  '[glitch.death.reject]': '[glitch.death.reject.text]',
  '[glitch.revisit]': '[glitch.revisit.text]',
  '[glitch.remember]': '[glitch.remember.text]',
  '[captain.glitch.explain]': '[captain.glitch.explain.text]',
  // Glitch buttons - consensus
  '[button.glitch.inquire]': '[button.glitch.inquire]',
  '[button.glitch.flee]': '[button.glitch.flee]',
  '[button.glitch.deeper.1]': '[button.glitch.deeper.1]',
  '[button.glitch.flee.1]': '[button.glitch.flee.1]',
  '[button.glitch.deeper.2]': '[button.glitch.deeper.2]',
  '[button.glitch.flee.2]': '[button.glitch.flee.2]',
  '[button.glitch.unlock]': '[button.glitch.unlock]',
  '[button.glitch.flee.3]': '[button.glitch.flee.3]',
  '[button.glitch.accept]': '[button.glitch.accept]',
  '[button.glitch.reject]': '[button.glitch.reject]',
  // Glitch buttons - pirate
  '[button.glitch.wind]': '[button.glitch.wind]',
  '[button.glitch.anchor]': '[button.glitch.anchor]',
  // Glitch metadata
  '[map.glitch]': 'GLITCHED MAP',
  '[portfolio.glitch]': 'Bug Museum',
  // ============================================

  // ============================================
  // MIRROR - COMPLETE CHARACTER CHUNK [TODO]
  // Has 3 inquiries
  // ============================================
  '[mirror.name]': 'THE MIRROR',
  '[mirror.intro]': '[mirror.intro.text]',
  '[mirror.inquiry.1]': '[mirror.inquiry.1.text]',
  '[mirror.inquiry.2]': '[mirror.inquiry.2.text]',
  '[mirror.inquiry.3]': '[mirror.inquiry.3.text]',
  '[mirror.map.unlock]': '[mirror.map.unlock.text]',
  '[mirror.map.intro]': '[mirror.map.intro.text]',
  '[mirror.map.examine]': '[mirror.map.examine.text]',
  '[mirror.death.flee]': '[mirror.death.flee.text]',
  '[mirror.death.reject]': '[mirror.death.reject.text]',
  '[mirror.revisit]': '[mirror.revisit.text]',
  '[mirror.remember]': '[mirror.remember.text]',
  '[captain.mirror.explain]': '[captain.mirror.explain.text]',
  // Mirror buttons - consensus
  '[button.mirror.inquire]': '[button.mirror.inquire]',
  '[button.mirror.flee]': '[button.mirror.flee]',
  '[button.mirror.deeper.1]': '[button.mirror.deeper.1]',
  '[button.mirror.flee.1]': '[button.mirror.flee.1]',
  '[button.mirror.deeper.2]': '[button.mirror.deeper.2]',
  '[button.mirror.flee.2]': '[button.mirror.flee.2]',
  '[button.mirror.unlock]': '[button.mirror.unlock]',
  '[button.mirror.flee.3]': '[button.mirror.flee.3]',
  '[button.mirror.accept]': '[button.mirror.accept]',
  '[button.mirror.reject]': '[button.mirror.reject]',
  // Mirror buttons - pirate
  '[button.mirror.wind]': '[button.mirror.wind]',
  '[button.mirror.anchor]': '[button.mirror.anchor]',
  // Mirror metadata
  '[map.mirror]': 'MIRROR MAP',
  '[portfolio.mirror]': 'Mirror Works',
  // ============================================

  // ============================================
  // NAVIGATOR - COMPLETE CHARACTER CHUNK [TODO]
  // Has 3 inquiries
  // ============================================
  '[navigator.name]': 'THE NAVIGATOR',
  '[navigator.intro]': '[navigator.intro.text]',
  '[navigator.inquiry.1]': '[navigator.inquiry.1.text]',
  '[navigator.inquiry.2]': '[navigator.inquiry.2.text]',
  '[navigator.inquiry.3]': '[navigator.inquiry.3.text]',
  '[navigator.map.unlock]': '[navigator.map.unlock.text]',
  '[navigator.map.intro]': '[navigator.map.intro.text]',
  '[navigator.map.examine]': '[navigator.map.examine.text]',
  '[navigator.death.flee]': '[navigator.death.flee.text]',
  '[navigator.death.reject]': '[navigator.death.reject.text]',
  '[navigator.revisit]': '[navigator.revisit.text]',
  '[navigator.remember]': '[navigator.remember.text]',
  '[captain.navigator.explain]': '[captain.navigator.explain.text]',
  // Navigator buttons - consensus
  '[button.navigator.inquire]': '[button.navigator.inquire]',
  '[button.navigator.flee]': '[button.navigator.flee]',
  '[button.navigator.deeper.1]': '[button.navigator.deeper.1]',
  '[button.navigator.flee.1]': '[button.navigator.flee.1]',
  '[button.navigator.deeper.2]': '[button.navigator.deeper.2]',
  '[button.navigator.flee.2]': '[button.navigator.flee.2]',
  '[button.navigator.unlock]': '[button.navigator.unlock]',
  '[button.navigator.flee.3]': '[button.navigator.flee.3]',
  '[button.navigator.accept]': '[button.navigator.accept]',
  '[button.navigator.reject]': '[button.navigator.reject]',
  // Navigator buttons - pirate
  '[button.navigator.wind]': '[button.navigator.wind]',
  '[button.navigator.anchor]': '[button.navigator.anchor]',
  // Navigator metadata
  '[map.navigator]': '{🌊:🌊∈🌊} MAP',
  '[portfolio.navigator]': 'Navigation Charts',
  // ============================================

  // ============================================
  // VOID - COMPLETE CHARACTER CHUNK [TODO]
  // Special: 10 inquiries, progressive emptiness
  // ============================================
  '[void.name]': 'THE VOID',
  '[void.intro]': '[void.intro.text]',
  '[void.inquiry.1]': '',
  '[void.inquiry.2]': '',
  '[void.inquiry.3]': '',
  '[void.inquiry.4]': '',
  '[void.inquiry.5]': '',
  '[void.inquiry.6]': '',
  '[void.inquiry.7]': '',
  '[void.inquiry.8]': '',
  '[void.inquiry.9]': '{🌊:🌊∈🌊}',
  '[void.dissolving]': '{🌊:🌊∈🌊}',
  '[void.map.examine]': '[void.map.examine.text]',
  '[void.revisit]': '',
  '[void.remember]': '[void.remember.text]',
  // Void buttons - special single progression
  '[button.void.intro]': '[button.void.intro]',
  '[button.void.1]': '[button.void.1]',
  '[button.void.2]': '[button.void.2]',
  '[button.void.3]': '[button.void.3]',
  '[button.void.4]': '[button.void.4]',
  '[button.void.5]': '[button.void.5]',
  '[button.void.6]': '[button.void.6]',
  '[button.void.7]': '[button.void.7]',
  '[button.void.8]': '[button.void.8]',
  '[button.void.9]': '[button.void.9]',
  // Void buttons - pirate
  '[button.void.wind]': '[button.void.wind]',
  '[button.void.anchor]': '[button.void.anchor]',
  // Void metadata
  '[map.void]': 'EMPTINESS MAP',
  '[portfolio.void]': '...',
  // ============================================
};
