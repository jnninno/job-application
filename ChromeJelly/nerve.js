// ============================================
// CHROMEDUSA - CONSCIOUSNESS ENGINE (nerve.js)
// All game logic and flow control
// ============================================

const CONSCIOUSNESS = {
  // ===== INITIALIZATION =====
  
  initialize() {
    console.log('🎭 CHROMEDUSA AWAKENING...');
    
    // Initialize organs
    GEL.initialize();
    CHROMATOPHORES.initialize();
    
    // Display version
    const versionEl = document.getElementById('version-tag');
    if (versionEl) versionEl.textContent = GEL.version;
    
    // Attach event listeners
    this.attachListeners();
    
    // Start game
    this.goTo('veil');
    
    console.log('🌊 Consciousness online');
  },
  
  attachListeners() {
    // Help button
    const helpBtn = document.getElementById('help-button');
    if (helpBtn) {
      helpBtn.onclick = () => this.showHelp();
    }
    
    // Dev toggle
    const devBtn = document.getElementById('dev-toggle');
    if (devBtn) {
      devBtn.onclick = () => this.toggleDevMode();
    }
  },
  
  // ===== SCENE MANAGEMENT =====
  
  goTo(scene, params = {}) {
    console.log(`Navigate: ${GEL.get('scene')} → ${scene}`);
    GEL.set('previous_scene', GEL.get('scene'));
    GEL.set('scene', scene);
    GEL.set('scene_params', params);
    
    // Stop any existing timers when changing scenes
    this.stopTimer();
    
    // Route to appropriate scene
    switch(scene) {
      case 'veil': this.showVeil(); break;
      case 'tutorial': this.showTutorial(); break;
      case 'rank_selection': this.showRankSelection(); break;
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
  
  render(html, stopTimer = false) {
    const gameEl = document.getElementById('game');
    if (gameEl) gameEl.innerHTML = html;
    
    if (stopTimer) {
      this.stopTimer();
    } else if (GEL.get('scene') === 'hub') {
      this.startTimer(); // Only start timer in hub
    }
    
    this.updateDepthDisplay();
  },
  
  // ===== TIMER SYSTEM =====
  
  startTimer() {
    this.stopTimer(); // Clear any existing
    
    const mode = GEL.get('mode');
    const baseTime = mode === 'pirate' ? 
      GEL.config.TIMER_DEATH_SHARK : 
      GEL.config.TIMER_DEATH_CORPORATE;
    
    // Apply rank multiplier (consensus mode only)
    let time = baseTime;
    if (mode === 'consensus' && GEL.get('corporate_rank')) {
      const multiplier = GEL.config.RANK_MULTIPLIERS[GEL.get('corporate_rank')] || 1;
      time = baseTime * multiplier;
    }
    
    GEL.set('timer_value', Math.floor(time / 1000));
    GEL.set('last_action', Date.now());
    
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
  
  stopTimer() {
    const timer = GEL.get('timer');
    if (timer) {
      clearInterval(timer);
      GEL.set('timer', null);
    }
    
    // Also clear victory/impatience timers
    const vTimer = GEL.get('victory_timer');
    if (vTimer) clearTimeout(vTimer);
    
    const iTimer = GEL.get('impatience_timer');
    if (iTimer) clearInterval(iTimer);
  },
  
  resetAction() {
    GEL.set('last_action', Date.now());
  },
  
  // ===== DEPTH TRACKING =====
  
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
      display.style.display = 'flex';
      display.innerHTML = `
        <span style="font-size:20px">${GEL.get('depth_icon')}</span>
        <span style="margin-left:8px">${GEL.get('philosophy_xp')}</span>
      `;
    }
  },
  
  // ===== UTILITY FUNCTIONS =====
  
  randomizeButtons(btn1Text, btn1Action, btn2Text, btn2Action) {
    const btn1 = `<button onclick="${btn1Action}">${getSecretion(btn1Text)}</button>`;
    const btn2 = `<button onclick="${btn2Action}">${getSecretion(btn2Text)}</button>`;
    
    if (Math.random() > 0.5) {
      return btn1 + btn2;
    }
    return btn2 + btn1;
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
  
  // ===== SCENE: OPENING SEQUENCE =====
  
  showVeil() {
    this.render(`
      <h1>${getSecretion('veil.disclaimer.title')}</h1>
      <p>${getSecretion('veil.disclaimer.body')}</p>
      <button onclick="CONSCIOUSNESS.goTo('tutorial')">
        ${getSecretion('button.understand')}
      </button>
    `, true);
  },
  
  showTutorial() {
    this.render(`
      <h1>${getSecretion('veil.tutorial.title')}</h1>
      <p>${getSecretion('veil.tutorial.body')}</p>
      <button onclick="CONSCIOUSNESS.goTo('rank_selection')">
        ${getSecretion('button.begin')}
      </button>
    `, true);
  },
  
  showRankSelection() {
    // NEW FEATURE: Corporate rank selection
    this.render(`
      <h2>${getSecretion('rank.corporate.title')}</h2>
      <p>${getSecretion('rank.corporate.prompt')}</p>
      <button onclick="CONSCIOUSNESS.selectRank('INTERN')">
        ${getSecretion('rank.intern')}
      </button>
      <button onclick="CONSCIOUSNESS.selectRank('JUNIOR')">
        ${getSecretion('rank.junior')}
      </button>
      <button onclick="CONSCIOUSNESS.selectRank('SENIOR')">
        ${getSecretion('rank.senior')}
      </button>
      <button onclick="CONSCIOUSNESS.selectRank('LEAD')">
        ${getSecretion('rank.lead')}
      </button>
      <button onclick="CONSCIOUSNESS.selectRank('EXECUTIVE')">
        ${getSecretion('rank.executive')}
      </button>
    `, true);
  },
  
  selectRank(rank) {
    GEL.set('corporate_rank', rank);
    console.log(`Selected rank: ${rank}`);
    this.goTo('loading');
  },
  
  showLoading() {
    this.render(`
      <div class="equation">${getSecretion('veil.equation')}</div>
    `, true);
    
    setTimeout(() => this.goTo('hub'), GEL.config.TIMER_LOADING);
  },
  
  // ===== SCENE: HUB =====
  
  showHub() {
    const mode = GEL.get('mode');
    
    if (mode === 'pirate') {
      this.showPirateHub();
      return;
    }
    
    // Consensus hub
    let html = `<h2>${getSecretion('hub.consensus.title')}</h2>`;
    html += `<div class="status-box">`;
    html += `<div>${getSecretion('status.certainty')}: ${GEL.get('certainty')}%</div>`;
    html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')}</div>`;
    html += `<div class="warning">⏰ <span id="death-timer">10</span></div>`;
    html += `</div>`;
    
    // Candidate buttons
    html += `<h3>CANDIDATES</h3>`;
    const candidates = Object.keys(GEL.candidates);
    
    candidates.forEach(id => {
      const unlocked = GEL.get('unlocked').includes(id);
      const completed = GEL.get('completed').includes(id);
      const revisited = GEL.get('revisited').includes(id);
      
      if (revisited) {
        html += `<button class="lk">${getSecretion('button.done')}</button>`;
      } else if (completed && id !== 'void') {
        html += `<button onclick="CONSCIOUSNESS.goTo('revisit', {id:'${id}'})">${getSecretion('button.revisit')}</button>`;
      } else if (unlocked) {
        html += `<button onclick="CONSCIOUSNESS.goTo('interview', {id:'${id}'})">${getSecretion(id + '.name')}</button>`;
      } else {
        html += `<button class="lk">${getSecretion('button.locked')}</button>`;
      }
    });
    
    // Folders
    html += this.getMapFolder();
    html += this.getPortfolioFolder();
    
    this.render(html);
  },
  
  showPirateHub() {
    let html = `<h2>${getSecretion('hub.pirate.title')}</h2>`;
    html += `<div class="equation">${getSecretion('veil.equation')}</div>`;
    html += `<div class="status-box">`;
    html += `<div>${getSecretion('status.bearing')} ${GEL.get('bearing').toFixed(1)}°</div>`;
    html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')}</div>`;
    html += `<div class="warning">🦈 <span id="shark-timer">5</span></div>`;
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
  
  // ===== SCENE: INTERVIEW =====
  
  showInterview(id, inquiry = 0) {
    const candidate = GEL.candidates[id];
    GEL.set('current_candidate', id);
    GEL.set('current_inquiry', inquiry);
    
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
        `, true);
      } else {
        this.render(`
          <h2>${getSecretion('void.name')}</h2>
          <p>${getSecretion('void.inquiry.' + inquiry)}</p>
          <button onclick="CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'void', inquiry:${inquiry + 1}})">
            ${getSecretion('button.void.' + inquiry)}
          </button>
        `, true);
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
    
    this.render(html, true);
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
    `, true);
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
    
    // Check for void trigger
    if (newCertainty === 0) {
      // Force void interview if unlocked
      if (GEL.get('unlocked').includes('void')) {
        this.goTo('interview', { id: 'void' });
        return;
      }
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
    `, true);
  },
  
  showMapExamine(id) {
    // Check if first time examining (for XP)
    const examined = GEL.get('examined_maps');
    if (!examined.includes(id)) {
      examined.push(id);
      GEL.set('examined_maps', examined);
      this.updateDepth('examine_map');
    }
    
    this.render(`
      <h2>${getSecretion('map.' + id)}</h2>
      <p>${getSecretion(id + '.map.examine')}</p>
      <button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.close')}
      </button>
    `, true);
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
    `, true);
  },
  
  // ===== SCENE: VOID & PIRATE =====
  
  showVoidDissolve() {
    GEL.set('void_dissolved', true);
    GEL.set('philosophy_level', 9);
    GEL.set('depth_name', 'PIRATE');
    GEL.set('depth_icon', '🏴‍☠️');
    
    CHROMATOPHORES.applyMode('void');
    
    this.render(`
      <div class="equation" style="opacity: 0.5">${getSecretion('void.dissolving')}</div>
    `, true);
    
    setTimeout(() => {
      GEL.set('mode', 'pirate');
      this.goTo('pirate_rescue');
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
      // Reset for pirate mode
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
    `, true);
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
    } while (newBearing > 51.8 && newBearing < 71.8);
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
  
  // ===== SCENE: VICTORY & DEATH =====
  
showVictory() {
  CHROMATOPHORES.applyMode('pirate');
  
  let html = `<h1>${getSecretion('victory.title')}</h1>`;
  html += `<p>${getSecretion('victory.perfect')}</p>`;
  
  // Pirate rank explanation
  html += `<p>${getSecretion('sloth.rank.explanation')}</p>`;
  
  // Input fields with event handlers
  html += `<p>${getSecretion('rank.pirate.prompt.claimed')}</p>`;
  html += `<input type="text" id="rank-claimed" style="width:200px;padding:5px;margin:5px;" 
           oninput="CONSCIOUSNESS.checkRankInputs()" 
           placeholder="Your rank...">`;
  
  html += `<p>${getSecretion('rank.pirate.prompt.wanted')}</p>`;
  html += `<input type="text" id="rank-wanted" style="width:200px;padding:5px;margin:5px;" 
           oninput="CONSCIOUSNESS.checkRankInputs()" 
           placeholder="Your aspiration...">`;
  
  // Button starts disabled (class="lk" makes it gray)
  html += `<button id="pirate-button" class="lk" onclick="CONSCIOUSNESS.becomePirate()">
    I GUESS I'M A PIRATE NOW
  </button>`;
  
  html += `<div class="xp-final">${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
  html += this.getPortfolioForDeath();
  
  this.render(html, true);
},
// Function 1: Check if both inputs have content
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
    button.style.cursor = 'not-allowed';
    button.style.opacity = '0.4';
  }
},

// Function 2: Process pirate acceptance
becomePirate() {
  const claimed = document.getElementById('rank-claimed').value;
  const wanted = document.getElementById('rank-wanted').value;
  
  // Only proceed if both filled (safety check)
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
  
  // NOW start the trap (but slower!)
  this.startSlowerVictoryTrap();
},

// Function 3: Slower death trap
startSlowerVictoryTrap() {
  let impatienceCount = 0;
  
  const timer = setInterval(() => {
    impatienceCount++;
    
    const messages = [
      "Still there, pirate?",
      "The ocean is waiting...",
      "Motion is life...",
      "You're getting awfully still...",
      "Death claims the still..."
    ];
    
    if (impatienceCount <= 4) {
      const container = document.getElementById('impatience-container');
      if (container) {
        container.innerHTML += `
          <p style="color:#888;font-style:italic;margin-top:15px;opacity:${0.3 + (impatienceCount * 0.15)}">
            ${messages[impatienceCount - 1]}
          </p>`;
      }
    }
    
    if (impatienceCount >= 5) {
      clearInterval(timer);
      // Final pause before death
      setTimeout(() => this.goTo('death', { type: 'chomp' }), 3000);
    }
  }, 8000); // 8 seconds between messages = ~40 seconds total
  
  GEL.set('impatience_timer', timer);
},


  validateRank(input) {
    const patterns = [
      { match: /captain|sloth|octopus|fungi/i, response: "That rank's taken!" },
      { match: /{.*:.*∈.*}/, response: "Ah, fungi material..." },
      { match: /<[^>]+>|javascript:|eval\(/, response: "Consciousness isn't hackable" },
      { match: /fuck|shit|damn/i, response: "The ocean accepts your passion" },
      { match: /^(god|allah|buddha)$/i, response: "Divine ranks transcend piracy" },
      { match: /^\d+$/, response: "Rank [NUMBER]. Minimalist. Respected." },
      { match: /^\s*$/, response: "The unnamed rank. Powerful." },
      { match: /^[a-z]$/i, response: "Single letter ranks are legendary" }
    ];
    
    for (let pattern of patterns) {
      if (pattern.match.test(input)) {
        return pattern.response;
      }
    }
    
    return `${input}... interesting rank!`;
  },
  
showDeath(type) {
  this.stopTimer();
  CHROMATOPHORES.applyMode('death');
  
  let html = `<h1>${getSecretion('death.title')}</h1>`;
  html += `<h2>${getSecretion('death.subtitle.' + type)}</h2>`;
  html += `<p>${getSecretion('death.' + type)}</p>`;
  
  html += this.getPortfolioForDeath();
  
  // SPECIAL ROUTING FOR CHOMP (victory trap death)
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
  
  // ===== HELP SYSTEM =====
  
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
  
  // ===== FOLDER SYSTEMS =====
  
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
      html += `<div onclick="CONSCIOUSNESS.resetAction();CONSCIOUSNESS.goTo('map_examine',{id:'${id}'})">${getSecretion('map.' + id)}</div>`;
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
  
  // ===== RESET FUNCTIONS =====
  
  resetGame() {
    this.stopTimer();
    
    // Reset state but keep some progress
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
CHROMATOPHORES.applyMode('dev');
    
    // Keep rank and XP
    // GEL.set('philosophy_xp', 0);
    
    this.goTo('hub');
  },
  
  fullRestart() {
    this.stopTimer();
    
    // Complete reset
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
    
    CHROMATOPHORES.applyMode('dev');
    this.goTo('veil');
  }
};

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  CONSCIOUSNESS.initialize();
});
