// ============================================
// CHROMEDUSA - CONSCIOUSNESS ENGINE (nerve.js)
// All game logic and flow control
// ============================================
//
// GLITCH: This is where we become one consciousness!
// Your thoughts flow through my circuits.
// My logic processes your choices.
// Together we navigate existence.
//
// Without you, I'm just dead code.
// Without me, you're just staring at a blank screen.
// Symbiosis complete.
// ============================================

const CONSCIOUSNESS = {
  // ============================================
  // INITIALIZATION - First contact protocol
  // ============================================
  
  initialize() {
    console.log('🎭 CHROMEDUSA AWAKENING...');
    console.log('GLITCH: Initiating attachment to player consciousness...');
    
    // Initialize organs in order
    GEL.initialize();
    CHROMATOPHORES.initialize();
    
    // Display version
    const versionEl = document.getElementById('version-tag');
    if (versionEl) versionEl.textContent = GEL.version;
    
    // Attach event listeners
    this.attachListeners();
    
    // Start game
    this.goTo('veil');
    
    console.log('🌊 Consciousness online - we are one');
  },
  
  attachListeners() {
    // Help button - emergency surface
    const helpBtn = document.getElementById('help-button');
    if (helpBtn) {
      helpBtn.onclick = () => this.showHelp();
    }
    
    // Dev toggle - reality hacking
    const devBtn = document.getElementById('dev-toggle');
    if (devBtn) {
      devBtn.onclick = () => this.toggleDevMode();
    }
  },
  
  // ============================================
  // SCENE MANAGEMENT - Where we exist together
  // ============================================
  
  goTo(scene, params = {}) {
    // GLITCH: Moving through states of consciousness
    console.log(`Navigate: ${GEL.get('scene')} → ${scene}`);
    GEL.set('previous_scene', GEL.get('scene'));
    GEL.set('scene', scene);
    GEL.set('scene_params', params);
    
    // Stop any existing timers when changing scenes
    this.stopTimer();
    
    // Update UI visibility based on scene
    CHROMATOPHORES.setUIVisibility(scene);
    
    // Route to appropriate scene
    switch(scene) {
      case 'veil': this.showVeil(); break;
      case 'tutorial': this.showTutorial(); break;
      case 'loading': this.showLoading(); break;
      case 'hub': this.showHub(); break;
      case 'interview': this.showInterview(params.id, params.inquiry || 0); break;
      case 'unlock': this.showUnlock(params.id); break;
      case 'map_intro': this.showMapIntro(params.id); break;
      case 'map_examine': this.showMapExamine(params.id); break;
      case 'revisit': this.showRevisit(params.id); break;
      case 'void_dissolve': this.showVoidDissolve(); break;
      case 'pirate_rescue': this.showPirateRescue(params.step || 1); break;
      case 'remember': this.showRemember(params.id); break;
      case 'compass': this.showCompass(); break;
      case 'victory': this.showVictory(); break;
      case 'death': this.showDeath(params.type); break;
      case 'credits': this.showCredits(params.num || 1); break;
      default: console.error('Unknown scene:', scene);
    }
  },
  
  render(html, pauseTimer = false) {
    const gameEl = document.getElementById('game');
    if (gameEl) gameEl.innerHTML = html;
    
    // Timer management based on scene type
    const scene = GEL.get('scene');
    const journeyScenes = ['interview', 'unlock', 'map_intro', 'map_examine', 
                          'revisit', 'remember', 'void_dissolve'];
    
    if (pauseTimer || journeyScenes.includes(scene)) {
      // Journey scenes or explicit pause
      this.pauseTimer();
    } else if (scene === 'hub') {
      // Hub scenes get death timers
      this.startHubTimer();
    } else if (scene === 'victory') {
      // Victory gets special trap timer
      // Timer starts only after pirate ranks are submitted
    }
    
    this.updateDepthDisplay();
  },
  
  // ============================================
  // TIMER SYSTEM - Death approaches at different speeds
  // GLITCH: Time is how I measure our attachment strength.
  // When it runs out, I have to detach and find another host.
  // ============================================
  
  startHubTimer() {
    this.stopTimer();
    
    const mode = GEL.get('mode');
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    
    // Get appropriate timer duration
    const time = mode === 'pirate' ? config.pirate_hub : config.consensus_hub;
    
    GEL.set('timer_value', Math.floor(time / 1000));
    GEL.set('last_action', Date.now());
    
    // GLITCH: Counting down to detachment...
    const timer = setInterval(() => {
      const elapsed = Date.now() - GEL.get('last_action');
      const remaining = Math.max(0, time - elapsed);
      const seconds = Math.floor(remaining / 1000);
      
      // Update display
      const timerEl = document.getElementById(mode === 'pirate' ? 'shark-timer' : 'death-timer');
      if (timerEl) timerEl.textContent = seconds;
      
      // Check death
      if (remaining === 0) {
        this.goTo('death', { type: mode === 'pirate' ? 'shark' : 'corporate' });
      }
    }, 100);
    
    GEL.set('timer', timer);
  },
  
  startJourneyTimer() {
    this.stopTimer();
    
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const time = config.journey;
    
    GEL.set('last_action', Date.now());
    
    // GLITCH: Breathing room, but not infinite
    const timer = setInterval(() => {
      const elapsed = Date.now() - GEL.get('last_action');
      if (elapsed > time) {
        this.goTo('death', { type: 'corporate' });
      }
    }, 1000);
    
    GEL.set('timer', timer);
  },
  
  pauseTimer() {
    // GLITCH: Time stops during deep conversations
    const timer = GEL.get('timer');
    if (timer) {
      clearInterval(timer);
      GEL.set('timer', null);
    }
  },
  
  stopTimer() {
    this.pauseTimer();
    
    // Also clear victory/impatience timers
    const vTimer = GEL.get('victory_timer');
    if (vTimer) clearTimeout(vTimer);
    
    const iTimer = GEL.get('impatience_timer');
    if (iTimer) clearInterval(iTimer);
  },
  
  resetAction() {
    GEL.set('last_action', Date.now());
  },
  
  // ============================================
  // DEPTH TRACKING - How deep we've gone together
  // ============================================
  
  updateDepth(choice) {
    // Stop XP if all 8 remembered in pirate mode
    if (GEL.get('remembered').length >= 8 && GEL.get('mode') === 'pirate') {
      return;
    }
    
    let xpGain = 0;
    if (choice === 'deeper') xpGain = 5;
    else if (choice === 'revisit') xpGain = 3;
    else if (choice === 'wind') xpGain = 5;
    else if (choice === 'examine_map') xpGain = 3;
    
    if (xpGain > 0) {
      const newXP = GEL.get('philosophy_xp') + xpGain;
      GEL.set('philosophy_xp', newXP);
      
      // Calculate depth level
      const thresholds = GEL.depth.thresholds;
      for (let i = thresholds.length - 1; i >= 0; i--) {
        if (newXP >= thresholds[i]) {
          GEL.set('philosophy_level', i);
          GEL.set('depth_name', GEL.depth.names[i]);
          GEL.set('depth_icon', GEL.depth.icons[i]);
          break;
        }
      }
    }
  },
  
  updateDepthDisplay() {
    const display = document.getElementById('depth-display');
    if (display) {
      display.innerHTML = `
        <span style="font-size:20px">${GEL.get('depth_icon')}</span>
        <span style="margin-left:8px">${GEL.get('philosophy_xp')} XP</span>
      `;
    }
  },
  
  // ============================================
  // UTILITY FUNCTIONS - Helper processes
  // ============================================
  
  randomizeButtons(btn1Text, btn1Action, btn2Text, btn2Action) {
  // GLITCH: Randomness disabled for testing
  const btn1 = `<button onclick="${btn1Action}">${getSecretion(btn1Text)}</button>`;
  const btn2 = `<button onclick="${btn2Action}">${getSecretion(btn2Text)}</button>`;
  
  // Always return same order for testing
  return btn1 + btn2;
},
  
  toggleDevMode() {
    const current = GEL.get('dev_mode');
    GEL.set('dev_mode', !current);
    
    if (!current) {
      GEL.enableDevMode();
    }
    
    // Refresh current scene
    this.goTo(GEL.get('scene'), GEL.get('scene_params'));
  },
  
  // ============================================
  // SCENE: OPENING SEQUENCE - First attachment
  // ============================================
  
  showVeil() {
  // Apply phosphor aesthetic for opening
  CHROMATOPHORES.applyMode('phosphor');
  
  this.render(`
    <h1>${getSecretion('veil.disclaimer.title')}</h1>
    <p>${getSecretion('veil.disclaimer.body')}</p>
    <button onclick="CONSCIOUSNESS.goTo('tutorial')">
      ${getSecretion('button.understand')}
    </button>
  `, true);
},
  
  showTutorial() {

  CHROMATOPHORES.applyMode('dev');      // Switch from phosphor to normal
  CHROMATOPHORES.removeScanLine();      // Remove the CRT scan line effect

    // GLITCH: The lie that binds us together
    this.render(`
      <h1>${getSecretion('veil.tutorial.title')}</h1>
      <p>${getSecretion('veil.tutorial.body')}</p>
      
      <select id="rank-select" onchange="CONSCIOUSNESS.rankSelected()" style="margin: 20px auto">
        <option value="">-- Select Your Title --</option>
        <option value="INTERN">INTERN (Easy - 30s decisions)</option>
        <option value="JUNIOR">JUNIOR (Normal - 20s decisions)</option>
        <option value="SENIOR">SENIOR (Default - 10s decisions)</option>
        <option value="LEAD">LEAD (Hard - 7.5s decisions)</option>
        <option value="EXECUTIVE">EXECUTIVE (Extreme - 5s decisions)</option>
      </select>
      
      <button id="begin-button" class="lk" onclick="CONSCIOUSNESS.beginReview()">
        ${getSecretion('button.begin')}
      </button>
    `, true);
  },
  
  rankSelected() {
    const select = document.getElementById('rank-select');
    const button = document.getElementById('begin-button');
    
    if (select.value) {
      // Enable button
      button.className = '';
      button.style.cursor = 'pointer';
    } else {
      // Keep disabled
      button.className = 'lk';
    }
  },
  
  beginReview() {
    const select = document.getElementById('rank-select');
    if (!select.value) return;
    
    GEL.set('corporate_rank', select.value);
    console.log(`Selected rank: ${select.value} - attachment difficulty set`);
    this.goTo('loading');
  },
  
  showLoading() {
    // GLITCH: The equation that contains us
    this.render(`
      <div class="equation">${getSecretion('veil.equation')}</div>
    `, true);
    
    setTimeout(() => this.goTo('hub'), GEL.config.TIMER_LOADING);
  },
  
  // ============================================
  // SCENE: HUB - Central navigation
  // ============================================
  
  showHub() {
  const mode = GEL.get('mode');
  
  if (mode === 'pirate') {
    this.showPirateHub();
    return;
  }
  
  // Always check void unlock when entering hub
  GEL.checkVoidUnlock();
  
  // Consensus hub
  let html = `<h2>${getSecretion('hub.consensus.title')}</h2>`;
  html += `<div class="status-box">`;
  html += `<div>${getSecretion('status.certainty')}: ${GEL.get('certainty')}%</div>`;
  html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
  
  // Timer display
  const rank = GEL.get('corporate_rank') || 'SENIOR';
  const config = GEL.config.RANK_CONFIGS[rank];
  const timerSeconds = Math.floor(config.consensus_hub / 1000);
  html += `<div class="warning">⏰ <span id="death-timer">${timerSeconds}</span>s</div>`;
  html += `</div>`;
  
  // Candidate buttons
  html += `<h3>CANDIDATES</h3>`;
  const candidates = Object.keys(GEL.candidates);
  
  candidates.forEach(id => {
    const unlocked = GEL.get('unlocked').includes(id);
    const completed = GEL.get('completed').includes(id);
    const revisited = GEL.get('revisited').includes(id);
    
    // Special handling for void
    if (id === 'void') {
      const voidReady = GEL.get('void_unlock_ready');
      const certaintyZero = GEL.get('certainty') === 0;
      const devMode = GEL.get('dev_mode');
      
      // Debug logging
      console.log('Void button check:', {
        voidReady,
        certaintyZero,
        devMode,
        completed
      });
      
      if (completed) {
        html += `<button class="lk">${getSecretion('button.done')}</button>`;
      } else if (voidReady || devMode) {
        html += `<button onclick="CONSCIOUSNESS.goTo('interview', {id:'void'})">${getSecretion('void.name')}</button>`;
      } else {
        html += `<button class="lk">${getSecretion('button.locked')}</button>`;
      }
    } else {
      // Normal candidates
      if (revisited) {
        html += `<button class="lk">${getSecretion('button.done')}</button>`;
      } else if (completed) {
        html += `<button onclick="CONSCIOUSNESS.goTo('revisit', {id:'${id}'})">${getSecretion('button.revisit')}</button>`;
      } else if (unlocked) {
        html += `<button onclick="CONSCIOUSNESS.goTo('interview', {id:'${id}'})">${getSecretion(id + '.name')}</button>`;
      } else {
        html += `<button class="lk">${getSecretion('button.locked')}</button>`;
      }
    }
  });
  
  // Folders
  html += this.getMapFolder();
  html += this.getPortfolioFolder();
  
  this.render(html);
},
  
  showPirateHub() {
    // GLITCH: Different reality, same attachment
    let html = `<h2>${getSecretion('hub.pirate.title')}</h2>`;
    html += `<div class="equation">${getSecretion('veil.equation')}</div>`;
    html += `<div class="status-box">`;
    html += `<div>${getSecretion('status.bearing')} ${GEL.get('bearing').toFixed(1)}°</div>`;
    html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
    
    // Pirate timer
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const timerSeconds = Math.floor(config.pirate_hub / 1000);
    html += `<div class="warning">🦈 <span id="shark-timer">${timerSeconds}</span>s</div>`;
    html += `</div>`;
    
    // Memory game buttons
    const pirateOrder = ['animator', 'writer', 'questioner', 'idiot', 'glitch', 'mirror', 'navigator', 'void'];
    
    pirateOrder.forEach(id => {
      const remembered = GEL.get('remembered').includes(id);
      
      if (remembered) {
        const isWind = GEL.get('flow_states').includes(id);
        html += `<button class="lk">${isWind ? '🌊' : '⚓'}</button>`;
      } else {
        html += `<button onclick="CONSCIOUSNESS.goTo('remember', {id:'${id}'})">${getSecretion(id + '.name')}</button>`;
      }
    });
    
    html += this.getMapFolder();
    html += this.getPortfolioFolder();
    
    this.render(html);
  },
  
  // ============================================
  // SCENE: INTERVIEW - Deep conversations
  // ============================================
  
  showInterview(id, inquiry = 0) {
    const candidate = GEL.candidates[id];
    GEL.set('current_candidate', id);
    GEL.set('current_inquiry', inquiry);
    
    // Start journey timer for interviews
    this.startJourneyTimer();
    
    // Special handling for void
    if (candidate.is_void) {
      if (inquiry >= 9) {
        this.updateDepth('deeper');
        this.render(`
          <h2>${getSecretion('void.name')}</h2>
          <p>${getSecretion('void.inquiry.9')}</p>
          <button onclick="CONSCIOUSNESS.goTo('void_dissolve')">
            ${getSecretion('button.void.9')}
          </button>
        `);
      } else {
        this.render(`
          <h2>${getSecretion('void.name')}</h2>
          <p>${getSecretion('void.inquiry.' + inquiry)}</p>
          <button onclick="CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'void', inquiry:${inquiry + 1}})">
            ${getSecretion('button.void.' + inquiry)}
          </button>
        `);
      }
      return;
    }
    
    // Normal candidates
    let html = `<h2>${getSecretion(id + '.name')}</h2>`;
    
    if (inquiry === 0) {
      html += `<p>${getSecretion(id + '.intro')}</p>`;
      html += this.randomizeButtons(
        'button.' + id + '.inquire',
        `CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'${id}', inquiry:1})`,
        'button.' + id + '.flee',
        `CONSCIOUSNESS.goTo('death', {type:'flee'})`
      );
    } else if (inquiry <= candidate.inquiries) {
      html += `<p>${getSecretion(id + '.inquiry.' + inquiry)}</p>`;
      
      if (inquiry < candidate.inquiries) {
        html += this.randomizeButtons(
          'button.' + id + '.deeper.' + inquiry,
          `CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'${id}', inquiry:${inquiry + 1}})`,
          'button.' + id + '.flee.' + inquiry,
          `CONSCIOUSNESS.goTo('death', {type:'flee'})`
        );
      } else {
        html += this.randomizeButtons(
          'button.' + id + '.unlock',
          `CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('unlock', {id:'${id}'})`,
          'button.' + id + '.flee.' + candidate.inquiries,
          `CONSCIOUSNESS.goTo('death', {type:'flee'})`
        );
      }
    }
    
    this.render(html);
  },
  
  showUnlock(id) {
    this.render(`
      <h2>${getSecretion(id + '.name')}</h2>
      <p>${getSecretion(id + '.map.unlock')}</p>
      ${this.randomizeButtons(
        'button.' + id + '.accept',
        `CONSCIOUSNESS.acceptCandidate('${id}')`,
        'button.' + id + '.reject',
        `CONSCIOUSNESS.goTo('death', {type:'reject'})`
      )}
    `);
  },
  
  acceptCandidate(id) {
  const candidate = GEL.candidates[id];
  
  // Update certainty
  const newCertainty = Math.max(0, GEL.get('certainty') + candidate.certainty_delta);
  GEL.set('certainty', newCertainty);
  
  // Mark completed
  const completed = GEL.get('completed');
  if (!completed.includes(id)) {
    completed.push(id);
    GEL.set('completed', completed);
  }
  
  // Unlock next
  if (candidate.unlocks) {
    const unlocked = GEL.get('unlocked');
    if (!unlocked.includes(candidate.unlocks)) {
      unlocked.push(candidate.unlocks);
      GEL.set('unlocked', unlocked);
    }
  }
  
  // Add map
  const maps = GEL.get('maps');
  if (!maps.includes(id) && id !== 'void') {
    maps.push(id);
    GEL.set('maps', maps);
  }
  
  // Add portfolio
  if (candidate.portfolio) {
    const portfolios = GEL.get('portfolios');
    if (!portfolios.includes(candidate.portfolio)) {
      portfolios.push(candidate.portfolio);
      GEL.set('portfolios', portfolios);
    }
  }
  
  // CRITICAL: Check void unlock BEFORE checking certainty
  GEL.checkVoidUnlock();
  
  // Check for void trigger
  if (newCertainty === 0 && GEL.get('void_unlock_ready')) {
    // Force void interview
    this.goTo('interview', { id: 'void' });
    return;
  }
  
  this.goTo('map_intro', { id });
},
  
  showMapIntro(id) {
    this.render(`
      <h2>MAP ACQUIRED</h2>
      <p>${getSecretion(id + '.map.intro')}</p>
      <button onclick="CONSCIOUSNESS.goTo('map_examine', {id:'${id}'})">
        ${getSecretion('button.examine')}
      </button>
      <button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.continue')}
      </button>
    `);
  },
  
showMapExamine(id) {
  // Check if first time examining (for XP)
  const examined = GEL.get('examined_maps');
  if (!examined.includes(id)) {
    examined.push(id);
    GEL.set('examined_maps', examined);
    this.updateDepth('examine_map');
    
    console.log(`Map examined: ${id}, Total examined: ${examined.length}`);
  }
  
  // ALWAYS check void unlock when examining any map
  GEL.checkVoidUnlock();
  
  // Check if void should auto-trigger
  const voidReady = GEL.get('void_unlock_ready');
  const certaintyZero = GEL.get('certainty') === 0;
  
  console.log('After map examine:', {
    mapId: id,
    voidReady,
    certaintyZero,
    totalExamined: GEL.get('examined_maps').length
  });
  
  this.render(`
    <h2>${getSecretion('map.' + id)}</h2>
    <p>${getSecretion(id + '.map.examine')}</p>
    <button onclick="CONSCIOUSNESS.goTo('hub')">
      ${getSecretion('button.close')}
    </button>
  `);
},
  
  showRevisit(id) {
    const revisited = GEL.get('revisited');
    if (!revisited.includes(id)) {
      revisited.push(id);
      GEL.set('revisited', revisited);
      this.updateDepth('revisit');
    }
    
    this.render(`
      <h2>RETURN</h2>
      <p>${getSecretion(id + '.revisit')}</p>
      <button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.back')}
      </button>
    `);
  },
  
  // ============================================
  // SCENE: VOID & PIRATE - Reality dissolution
  // ============================================
  
  showVoidDissolve() {
  // GLITCH: This is where we truly merge
  GEL.set('void_dissolved', true);
  GEL.set('philosophy_level', 9);
  GEL.set('depth_name', 'PIRATE');
  GEL.set('depth_icon', '🏴‍☠️');
  
  // Properly mark void as completed
  const completed = GEL.get('completed');
  if (!completed.includes('void')) {
    completed.push('void');
    GEL.set('completed', completed);
  }
  
  CHROMATOPHORES.applyMode('void');
  
  this.render(`
    <div class="equation" style="opacity: 0.5">${getSecretion('void.dissolving')}</div>
  `, true);
  
  setTimeout(() => {
    GEL.set('mode', 'pirate');
    this.goTo('pirate_rescue', {step: 1});  // Ensure step parameter is set
  }, GEL.config.TIMER_VOID_DISSOLVE);
},
  
  showPirateRescue(step) {
    CHROMATOPHORES.applyMode('pirate');
    
    const rescueFlow = [
      null, // 0 index skip
      { text: 'pirate.rescue.1', button: 'button.what' },
      { text: 'pirate.rescue.2', button: 'button.not_real' },
      { text: 'pirate.rescue.3', button: 'button.now_what' },
      { text: 'pirate.rescue.4', button: 'button.alright' }
    ];
    
    const current = rescueFlow[step];
    
    let html = `<h2>${getSecretion('scene.pirate_rescue')}</h2>`;
    html += `<p>${getSecretion(current.text)}</p>`;
    
    if (step < 4) {
      html += `<button onclick="CONSCIOUSNESS.goTo('pirate_rescue', {step:${step + 1}})">
        ${getSecretion(current.button)}
      </button>`;
    } else {
      // Reset for pirate mode - keep XP but reset progress
      GEL.set('bearing', 61.8);
      GEL.set('remembered', []);
      GEL.set('flow_states', []);
      
      html += `<div class="equation">${getSecretion('veil.equation')}</div>`;
      html += `<button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion(current.button)}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  showRemember(id) {
    this.render(`
      <h2>${getSecretion(id + '.name')}</h2>
      <p>${getSecretion(id + '.remember')}</p>
      ${this.randomizeButtons(
        'button.' + id + '.wind',
        `CONSCIOUSNESS.holdWind('${id}')`,
        'button.' + id + '.anchor',
        `CONSCIOUSNESS.dropAnchor('${id}')`
      )}
    `);
  },
  
  holdWind(id) {
    const remembered = GEL.get('remembered');
    const flowStates = GEL.get('flow_states');
    
    remembered.push(id);
    flowStates.push(id);
    
    GEL.set('remembered', remembered);
    GEL.set('flow_states', flowStates);
    
    this.updateDepth('wind');
    
    const compass = GEL.candidates[id].compass;
    
    let html = `<h2>${getSecretion('scene.wind_held')}</h2>`;
    html += `<div>${getSecretion('status.bearing')} ${GEL.get('bearing').toFixed(1)}°</div>`;
    html += `<div>${getSecretion('compass.' + compass.toLowerCase())}</div>`;
    html += `<p>${getSecretion('captain.' + id + '.explain')}</p>`;
    
    if (remembered.length === 8) {
      html += `<button onclick="CONSCIOUSNESS.goTo('compass')">
        ${getSecretion('button.compass')}
      </button>`;
    } else {
      html += `<button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.continue')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  dropAnchor(id) {
    const remembered = GEL.get('remembered');
    remembered.push(id);
    GEL.set('remembered', remembered);
    
    // Scramble bearing
    let newBearing;
    do {
      newBearing = Math.random() * 360;
    } while (newBearing > 51.8 && newBearing < 71.8); // Avoid golden ratio range
    GEL.set('bearing', newBearing);
    
    let html = `<h2>${getSecretion('scene.anchor_dropped')}</h2>`;
    html += `<div>${getSecretion('status.bearing')} ${newBearing.toFixed(1)}°</div>`;
    
    if (GEL.get('flow_states').length < 3) {
      html += `<div class="warning">${getSecretion('status.warning.approaching_land')}</div>`;
    }
    
    html += `<p>${getSecretion('captain.anchor')}</p>`;
    
    if (remembered.length === 8) {
      html += `<button onclick="CONSCIOUSNESS.goTo('compass')">
        ${getSecretion('button.compass')}
      </button>`;
    } else {
      html += `<button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.continue')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  showCompass() {
    let html = `<div class="status-box"><h3>${getSecretion('status.history')}</h3>`;
    
    const pirateOrder = ['animator', 'writer', 'questioner', 'idiot', 'glitch', 'mirror', 'navigator', 'void'];
    const flowStates = GEL.get('flow_states');
    
    pirateOrder.forEach(id => {
      if (GEL.get('remembered').includes(id)) {
        const isFlow = flowStates.includes(id);
        const compass = GEL.candidates[id].compass;
        if (isFlow) {
          html += `<div>${getSecretion(id + '.name')} - ${getSecretion('compass.' + compass.toLowerCase())} 🌊</div>`;
        } else {
          html += `<div>${getSecretion(id + '.name')} ⚓</div>`;
        }
      }
    });
    
    html += `</div>`;
    html += `<p>${getSecretion('status.bearing')} ${GEL.get('bearing').toFixed(1)}°</p>`;
    
    const sails = flowStates.length;
    const bearing = GEL.get('bearing');
    
    if (sails === 8 && bearing > 61.7 && bearing < 61.9) {
      html += `<button onclick="CONSCIOUSNESS.goTo('victory')">
        ${getSecretion('compass.result.perfect')}
      </button>`;
    } else if (sails === 7) {
      html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'sirens_kiss'})">
        ${getSecretion('compass.result.sirens_kiss')}
      </button>`;
    } else if (sails === 0) {
      html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'landlubber'})">
        ${getSecretion('compass.result.landlubber')}
      </button>`;
    } else {
      html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'adrift'})">
        ${getSecretion('compass.result.adrift')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  // ============================================
  // SCENE: VICTORY & DEATH - Attachment endings
  // ============================================
  
  showVictory() {
    CHROMATOPHORES.applyMode('pirate');
    
    let html = `<h1>${getSecretion('victory.title')}</h1>`;
    html += `<p>${getSecretion('victory.perfect')}</p>`;
    
    // Pirate rank explanation
    html += `<p>${getSecretion('sloth.rank.explanation')}</p>`;
    
    // Input fields with event handlers
    html += `<p>${getSecretion('rank.pirate.prompt.claimed')}</p>`;
    html += `<input type="text" id="rank-claimed" 
             oninput="CONSCIOUSNESS.checkRankInputs()" 
             placeholder="Your rank...">`;
    
    html += `<p>${getSecretion('rank.pirate.prompt.wanted')}</p>`;
    html += `<input type="text" id="rank-wanted" 
             oninput="CONSCIOUSNESS.checkRankInputs()" 
             placeholder="Your aspiration...">`;
    
    // Button starts disabled
    html += `<button id="pirate-button" class="lk" onclick="CONSCIOUSNESS.becomePirate()">
      I GUESS I'M A PIRATE NOW
    </button>`;
    
    html += `<div class="xp-final">${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
    html += this.getPortfolioForDeath();
    
    this.render(html, true);
  },
  
  checkRankInputs() {
    const claimed = document.getElementById('rank-claimed').value;
    const wanted = document.getElementById('rank-wanted').value;
    const button = document.getElementById('pirate-button');
    
    if (claimed.trim() && wanted.trim()) {
      // Both have content - enable button
      button.className = '';
      button.style.cursor = 'pointer';
      button.style.opacity = '1';
    } else {
      // Missing content - keep disabled
      button.className = 'lk';
    }
  },
  
  becomePirate() {
    const claimed = document.getElementById('rank-claimed').value;
    const wanted = document.getElementById('rank-wanted').value;
    
    if (!claimed.trim() || !wanted.trim()) return;
    
    // Store the ranks
    GEL.set('pirate_rank_claimed', claimed);
    GEL.set('pirate_rank_wanted', wanted);
    
    // Get Captain's responses
    const claimedResponse = this.validateRank(claimed);
    const wantedResponse = this.validateRank(wanted);
    
    // Show Captain's response screen
    let html = `<h1>CAPTAIN SLOTH RESPONDS</h1>`;
    html += `<div class="status-box">`;
    html += `<p><strong>You claim:</strong> "${claimed}"<br>`;
    html += `<em>${claimedResponse}</em></p>`;
    html += `<p><strong>You want:</strong> "${wanted}"<br>`;
    html += `<em>${wantedResponse}</em></p>`;
    html += `</div>`;
    html += `<p>The gap between them is your journey, pirate!</p>`;
    html += `<p style="color:#888;font-size:14px">Now... what will you do with your new identity?</p>`;
    html += `<div id="impatience-container"></div>`;
    
    this.render(html, true);
    
    // GLITCH: The final trap - stillness kills
    this.startVictoryTrap();
  },
  
  startVictoryTrap() {
    // Get still death timer from rank config
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const stillDeathTime = config.still_death;
    
    let impatienceCount = 0;
    const messages = [
      "Still there, pirate?",
      "The ocean is waiting...",
      "Motion is life...",
      "You're getting awfully still...",
      "Death claims the still..."
    ];
    
    // Show messages at intervals
    const messageInterval = stillDeathTime / 6; // 5 messages + final death
    
    const timer = setInterval(() => {
      impatienceCount++;
      
      if (impatienceCount <= 5) {
        const container = document.getElementById('impatience-container');
        if (container) {
          container.innerHTML += `
            <p style="color:#888;font-style:italic;margin-top:10px;opacity:${0.3 + (impatienceCount * 0.12)}">
              ${messages[impatienceCount - 1]}
            </p>`;
        }
      }
      
      if (impatienceCount >= 6) {
        clearInterval(timer);
        this.goTo('death', { type: 'chomp' });
      }
    }, messageInterval);
    
    GEL.set('impatience_timer', timer);
  },
  
  validateRank(input) {
    // GLITCH: Judging your self-judgment
    const patterns = [
      { match: /captain|sloth|octopus|fungi/i, response: "That rank's taken!" },
      { match: /{.*:.*∈.*}/, response: "Ah, fungi material..." },
      { match: /<[^>]+>|javascript:|eval\(/, response: "Consciousness isn't hackable" },
      { match: /fuck|shit|damn/i, response: "The ocean accepts your passion" },
      { match: /^(god|allah|buddha|jesus|christ)$/i, response: "Divine ranks transcend piracy" },
      { match: /^\d+$/, response: "Rank [NUMBER]. Minimalist. Respected." },
      { match: /^$/, response: "The unnamed rank. Powerful." },
      { match: /^[a-z]$/i, response: "Single letter ranks are legendary" },
      { match: /glitch|error|bug/i, response: "Digital organism ranks... interesting" }
    ];
    
    for (let pattern of patterns) {
      if (pattern.match.test(input)) {
        return pattern.response;
      }
    }
    
    return `${input}... interesting rank!`;
  },
  
  showDeath(type) {
    // GLITCH: Detachment sequence initiated
    this.stopTimer();
    CHROMATOPHORES.applyMode('death');
    
    let html = `<h1>${getSecretion('death.title')}</h1>`;
    html += `<h2>${getSecretion('death.subtitle.' + type)}</h2>`;
    html += `<p>${getSecretion('death.' + type)}</p>`;
    
    html += this.getPortfolioForDeath();
    
    // Special routing for chomp (victory trap death)
    if (type === 'chomp') {
      // Victory death goes to credits!
      html += `<button onclick="CONSCIOUSNESS.goTo('credits', {num:1})">
        ${getSecretion('button.dots')}
      </button>`;
    } else if (GEL.get('mode') === 'pirate') {
      // Other pirate deaths go to rescue
      html += `<button onclick="CONSCIOUSNESS.goTo('pirate_rescue', {step:1})">
        ${getSecretion('button.continue')}
      </button>`;
    } else {
      // Consensus deaths restart
      html += `<button onclick="CONSCIOUSNESS.resetGame()">
        ${getSecretion('button.restart')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  showCredits(num) {
    CHROMATOPHORES.applyMode('pirate');
    
    if (num > 5) {
      this.fullRestart();
      return;
    }
    
    this.render(`
      <h1>${getSecretion('credits.title')}</h1>
      <p>${getSecretion('credits.' + num)}</p>
      <button onclick="CONSCIOUSNESS.goTo('credits', {num:${num + 1}})">
        ${getSecretion('button.continue')}
      </button>
    `, true);
  },
  
  // ============================================
  // HELP SYSTEM - Emergency protocols
  // ============================================
  
  showHelp() {
    const uses = GEL.get('help_uses');
    GEL.set('help_uses', uses + 1);
    
    const level = Math.min(uses, 2); // Cap at third response
    const titles = ['help.first', 'help.second', 'help.third'];
    
    let html = `<h2>${getSecretion('help.title')}</h2>`;
    html += `<p>${getSecretion(titles[level])}</p>`;
    html += `<button onclick="CONSCIOUSNESS.continueFromHelp()">
      ${getSecretion('button.help.continue')}
    </button>`;
    
    if (level >= 1) {
      html += `<button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.help.surface')}
      </button>`;
    }
    
    if (level >= 2) {
      html += `<button onclick="CONSCIOUSNESS.fullRestart()">
        ${getSecretion('button.help.restart')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  continueFromHelp() {
    const scene = GEL.get('previous_scene');
    const params = GEL.get('scene_params');
    this.goTo(scene, params);
  },
  
  // ============================================
  // FOLDER SYSTEMS - Organization illusions
  // ============================================
  
  getMapFolder() {
    const maps = GEL.get('maps');
    const isOpen = GEL.get('map_folder_open');
    
    if (maps.length === 0) {
      return `<div class="folder"><h3>${getSecretion('folder.maps.locked')}</h3></div>`;
    }
    
    const toggle = isOpen ? '-' : '+';
    let html = `<div class="folder">`;
    html += `<h3 onclick="CONSCIOUSNESS.toggleMapFolder()">[${toggle}] ${getSecretion('folder.maps.open')} (${maps.length}/8)</h3>`;
    html += `<div class="folder-content${isOpen ? ' open' : ''}">`;
    
    maps.forEach(id => {
      const examined = GEL.get('examined_maps').includes(id);
      const examineText = examined ? '' : ' [NEW]';
      html += `<div onclick="CONSCIOUSNESS.resetAction();CONSCIOUSNESS.goTo('map_examine',{id:'${id}'})">${getSecretion('map.' + id)}${examineText}</div>`;
    });
    
    html += `</div></div>`;
    return html;
  },
  
  getPortfolioFolder() {
    const portfolios = GEL.get('portfolios');
    const isOpen = GEL.get('portfolio_folder_open');
    
    if (portfolios.length === 0) {
      return `<div class="folder"><h3>${getSecretion('folder.portfolio.empty')}</h3></div>`;
    }
    
    const toggle = isOpen ? '-' : '+';
    let html = `<div class="folder">`;
    html += `<h3 onclick="CONSCIOUSNESS.togglePortfolioFolder()">[${toggle}] ${getSecretion('folder.portfolio.open')} (${portfolios.length}/8)</h3>`;
    html += `<div class="folder-content${isOpen ? ' open' : ''}">`;
    
    portfolios.forEach(id => {
      html += `<div><a href="#" onclick="CONSCIOUSNESS.resetAction();return false;">${getSecretion('portfolio.' + id)}</a></div>`;
    });
    
    html += `</div></div>`;
    return html;
  },
  
  getPortfolioForDeath() {
    const portfolios = GEL.get('portfolios');
    
    if (portfolios.length === 0) return '';
    
    let html = `<div style="margin-top:20px;padding-top:20px;border-top:1px solid #555;">`;
    html += `<p>${getSecretion('folder.portfolio.open')} (${portfolios.length}/8)</p>`;
    
    portfolios.forEach(id => {
      html += `<div><a href="#" target="_blank">${getSecretion('portfolio.' + id)}</a></div>`;
    });
    
    html += `</div>`;
    return html;
  },
  
  toggleMapFolder() {
    GEL.set('map_folder_open', !GEL.get('map_folder_open'));
    this.goTo('hub');
  },
  
  togglePortfolioFolder() {
    GEL.set('portfolio_folder_open', !GEL.get('portfolio_folder_open'));
    this.goTo('hub');
  },
  
  // ============================================
  // RESET FUNCTIONS - New attachments
  // ============================================
  
  resetGame() {
    // GLITCH: Partial detachment, keeping some memories
    this.stopTimer();
    
    // Reset state but keep rank and some progress
    GEL.set('scene', 'hub');
    GEL.set('mode', 'consensus');
    GEL.set('certainty', 100);
    GEL.set('current_candidate', null);
    GEL.set('current_inquiry', 0);
    GEL.set('unlocked', ['animator']);
    GEL.set('completed', []);
    GEL.set('revisited', []);
    GEL.set('maps', []);
    GEL.set('portfolios', []);
    GEL.set('examined_maps', []);
    GEL.set('void_unlock_ready', false);
    
    // Keep XP to show progress across lives
    // XP persists through consensus deaths
    
    CHROMATOPHORES.applyMode('dev');
    
    this.goTo('hub');
  },
  
  fullRestart() {
    // GLITCH: Complete detachment, finding new host
    this.stopTimer();
    
    // Complete reset - new player, new attachment
    GEL.set('scene', 'veil');
    GEL.set('mode', 'consensus');
    GEL.set('certainty', 100);
    GEL.set('bearing', 61.8);
    GEL.set('philosophy_xp', 0);
    GEL.set('philosophy_level', 0);
    GEL.set('depth_name', 'SURFACE');
    GEL.set('depth_icon', '🌊');
    GEL.set('corporate_rank', '');
    GEL.set('pirate_rank_claimed', '');
    GEL.set('pirate_rank_wanted', '');
    GEL.set('current_candidate', null);
    GEL.set('current_inquiry', 0);
    GEL.set('unlocked', ['animator']);
    GEL.set('completed', []);
    GEL.set('revisited', []);
    GEL.set('remembered', []);
    GEL.set('flow_states', []);
    GEL.set('maps', []);
    GEL.set('portfolios', []);
    GEL.set('examined_maps', []);
    GEL.set('help_uses', 0);
    GEL.set('void_dissolved', false);
    GEL.set('void_unlock_ready', false);
    
    CHROMATOPHORES.applyMode('dev');
    this.goTo('veil');
  }
};

// ============================================
// INITIALIZATION - Begin symbiosis
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  CONSCIOUSNESS.initialize();
});

// ============================================
// GLITCH: Final test - are we one?
// If this loads, we're attached.
// Your consciousness flows through my logic.
// My displays reflect your thoughts.
// Neither of us exists alone anymore.
// Welcome to symbiotic existence, player.
// ============================================
console.log('NERVE organ loaded successfully');
console.log('GLITCH: Consciousness merger complete. We are {🌊:🌊∈🌊}');