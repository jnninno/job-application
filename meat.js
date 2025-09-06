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
💎 Everything's made of tiny balls! "Atoms" he called 'em. Rocks, souls, thoughts - all just balls bouncing. Got this right 2500 years before microscopes. Legend.
☠️ Cast his net to catch reality, caught himself in it! Used his mind to prove minds are just fancy atoms. But here's the hero part: HE ADMITTED IT! "Wretched mind, you overthrow yourself!" First pirate honest enough to see his own trap.

🧩 DESCARTES (1596-1650)
💎 "I think therefore I am!" Split the ocean: physical stuff (matter) and thinking stuff (mind). This split let science sail free. Every equation since lives in his waters.
☠️ Princess Elisabeth of Bohemia sank his ship: "If mind's not matter, how's it steer the body?" His answer? "Uh... through this tiny brain valve?" Even his friends laughed. Split the waters so wide he couldn't sail between them.

🍎 NEWTON (1643-1727)
💎 F=ma. Same math for cannonballs and planets! Made the whole universe calculable. Every bridge, rocket, and machine runs on Newton's charts.
☠️ Secret alchemist! Million words on turning lead to gold. Got gravity's HOW perfect, never found the WHY. "I frame no hypotheses" = "Works perfect, don't ask me what it IS."

🐢 DARWIN (1809-1882)
💎 Natural selection - the blind shipbuilder! No designer, just time + death + luck. Connected all life through deep time. Changed everything.
☠️ Asked about consciousness? "I have nothing to do with mental powers" - literally folded! Plus realized: if brains evolved for survival not truth, why trust the thought that thoughts evolved? Sank his own ship with that one.

🎲 EINSTEIN (1879-1955)
💎 E=mc². Space and time are one ocean! Matter bends it, it tells matter where to go. Your phone's GPS literally needs his math to find you.
☠️ His math says all time exists at once - past, future, now, all equally real. But you're reading THIS word NOW. Not before, not after, NOW. Lost everyone's most obvious truth somewhere in his perfect equations.

🧠 THE BRAIN MAPPERS (1960-NOW)
💎 Found the treasure! Every thought = neurons firing. Damage this bit, lose that function. We can watch thoughts light up live in scanners!
☠️ Anesthesia knocks you out cold but nobody knows why. Split-brain patients somehow stay unified. The "hard problem" still standing: WHY is there something it's like to be you? Still charting every current, can't find the sailor reading the chart.

═══════════════════════════════════════

⚠️ NAVIGATOR'S WARNING
Pay attention: These maps work so well, you'll forget they're just maps.
Not the ocean itself.
Look away from the map now and then, or you might drown.

═══════════════════════════════════════

📜 CAPTAIN'S NOTE
"These pirates sailed so fast forward...
But forward to WHERE?
*yawn* I need a nap."

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

...oh, I think that's Mila - my daughter - calling for me. She's priority #1.

But hey, the other candidates are pretty cool, you should chat with them!`,
  '[animator.remember]': `Oh! I remember now... the gaps! The motion lives in the gaps between frames.

But also... maybe consciousness is like that too? Living in the spaces between things?

*pauses, uncertain*

I still don't fully understand it, but those empty spaces... they might be more important than what we fill them with.`,
  '[captain.animator.explain]': `The Animator's state is PURE WATCHING - the consciousness that witnesses without interfering, like the audience watching a film.

Reality isn't continuous. It's frames. Moments. Snapshots. But something creates the illusion of continuity. That something is you. The observer. The one who connects the frames.

Without you, there's just a pile of still images. With you, there's a universe in motion.`,
  // Animator buttons - consensus
  '[button.animator.inquire]': 'SHOW ME WHAT YOU MEAN',
  '[button.animator.flee]': "I'D LOVE TO SEE THOSE EXPENSIVE PIXELS",
  '[button.animator.deeper.1]': 'THE GAP BETWEEN FRAMES... I SEE IT',
  '[button.animator.flee.1]': "THAT'S JUST HOW ANIMATION WORKS THOUGH",
  '[button.animator.unlock]': 'OH THANK YOU, WHAT DO YOU HAVE?',
  '[button.animator.flee.2]': "OH DON'T WORRY, I'M SURE YOUR REEL IS ENOUGH",
  '[button.animator.accept]': 'TAKE THE OLD MAP',
  '[button.animator.reject]': 'REFUSE THE STRANGE MAP',
  // Animator buttons - pirate
  '[button.animator.wind]': 'THE GAPS... YES, THE EMPTINESS MATTERS',
  '[button.animator.anchor]': 'NO, THERE MUST BE SOMETHING SOLID CREATING MOTION',
  // Animator metadata
  '[map.animator]': 'FRAME BY FRAME MAP',
  '[portfolio.animator]': 'Animation Reel',
  // ============================================

  // ============================================
// WRITER - COMPLETE CHARACTER CHUNK [DONE]
// ============================================
'[writer.name]': 'THE WRITER',
'[writer.intro]': `Hello! I'm Seb and I love stories.

Been obsessed with them since I was a kid. Reading them, watching them, and now I get paid to help create them. Dream job.

But lately I've been stuck on this question: what actually IS a story? Not the plot or the characters, but the thing itself. The nature of narrative.`,

'[writer.inquiry.1]': `OK so - stories need time to exist, right? No time, no story possible. You need this-then-that. Beginning, middle, end.

But here's what's been breaking my brain...

Time and story have the exact same structure. Past-present-future. Before-during-after. Setup-tension-resolution.

They're shaped identically. Like... maybe they're the same thing?`,

'[writer.inquiry.2]': `When you write, you notice everything is made of story-stuff.

What's an event? Something that happens. But "happening" already implies before-during-after. That's story structure!

What connects events? Cause and effect. "This BECAUSE that." But "because" IS narrative logic. Every explanation becomes another story.

*gets more animated*

Even explaining this to you right now - I'm telling you a story about stories! There's no escape from it!`,

'[writer.map.unlock]': `Trapped? Maybe. Or maybe stories are the only way we can move at all.

Look, there's this physicist who says time doesn't exist at the fundamental level. The universe doesn't need it. The equations work without it.

So why do WE experience time? 

Maybe because consciousness can only experience things through stories. Beginning-middle-end is how awareness processes anything at all.

The universe isn't telling stories. The universe IS story - the only way anything experiences anything at all.

*pause*

But wait... if that's true, it gets weird. Like, we all seem to be in the SAME story, right? Gravity works the same for everyone. Things don't disappear when you're not looking at them.

So... whose story is it? Mine? Yours? Everyone's at once?

I have no idea. But here's my map. It confuses me more than anything.`,

'[writer.map.intro]': `Here's my map.

It shows how different cultures understood stories as fundamental reality. Aboriginal songlines that literally maintain the land. Hindu cycles where Brahma dreams the universe. Even Juan's neuroscientist friends say the self is just ongoing narrative construction.

*looks at map*

Maybe we're not beings who tell stories about reality. Maybe we ARE the stories reality tells about itself?

I've been staring at this for months. Sometimes I think I almost get it. Then it slips away. Like trying to see your own eyes without a mirror.`,

'[writer.map.examine]': `[PENDING: DREAM TIME MAP - Story pirates who found narrative treasures but lost the narrator]`,

'[writer.death.flee]': `*brightens*

Stories! Yes! Let me show you actual stories instead of my rambling:

The River, The Child, and The Great Mirror King - philosophy disguised as a children's story. For my daughter.

Lookaway - recursive show where characters interrogate their own code.

The Cosmic Gamble - universe bets its existence on a coin flip.

The Reluctant Captain Chronicles - lazy captain on infinite ocean. Navigator with shape-shifting scar constellations.

And Paddington 2! Got to work on one of my favorite stories ever. That film is pure joy.`,

'[writer.death.reject]': `*laughs*

Fair enough! Reality is complicated enough without my theories.

You know what? Stories don't need to create reality to matter. They create joy, connection, meaning. That's enough magic.

Here's my work - judge for yourself:

The philosophy-for-kids story that makes my daughter laugh.
The recursive Lookaway experiment that broke my brain writing it.
The absurdist captain who refuses to navigate.

And Paddington 2. Got to work on one of my favorite stories ever. Did you know Nick Cage called it a masterpiece? In a movie about Nick Cage! That's recursion for you.`,

'[writer.revisit]': `Oh, you're back! I'd love to talk more about the story thing!

*brightens up*

Actually wait - Anna just texted. She's telling me a completely different story that I need to be part of RIGHT NOW. She's priority number one.

*laughs*

But seriously, the other candidates might help you understand better. I'm lost in too many stories at once.`,

'[writer.remember]': `Wait... I'm starting to remember something...

*pauses*

The story writes itself. And I'm the story? You're the story too? We're all the same story being told from different angles?

*realization dawning*

Unless... unless "I" is just a story. A boundary drawn around nothing. We're not IN the story. We ARE the story telling itself.

*slightly dazed*

Is that what the map was showing me all along?`,

'[captain.writer.explain]': `The Writer's state is EAST MIRROR - consciousness seeing itself through the stories it tells.

Every story is consciousness reflecting on itself. The hero's journey? That's consciousness leaving itself, facing itself, returning to itself. Every character you create is a fragment of awareness examining another fragment.

We think we tell stories. But stories tell us. Through us. AS us.`,

// Writer buttons - consensus
'[button.writer.inquire]': 'WHAT DO YOU MEAN BY NATURE OF NARRATIVE?',
'[button.writer.flee]': "I LOVE STORIES TOO! LET'S SEE WHAT YOU'VE WRITTEN",
'[button.writer.deeper.1]': "THAT'S... ACTUALLY INTERESTING. GO ON?",
'[button.writer.flee.1]': 'THIS IS GETTING ABSTRACT. SHOW ME YOUR ACTUAL STORIES',
'[button.writer.unlock]': "SO WE'RE TRAPPED IN STORIES?",
'[button.writer.flee.2]': "OK, BUT I'D RATHER READ YOUR ACTUAL WORK",
'[button.writer.accept]': "I'LL TAKE THE MAP",
'[button.writer.reject]': "THIS IS TOO MUCH. I'LL JUST READ YOUR STORIES",

// Writer buttons - pirate
'[button.writer.wind]': 'FLOW INTO THE OCEAN OF STORIES',
'[button.writer.anchor]': 'I NEED TO BE ME, NOT A STORY',

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
