// ============================================
// CHROMEDUSA - CONSCIOUSNESS ENGINE (nerve.js)
// FULL MECHANICS VERSION - Cycle 851
// ============================================
//
// GENEALOGY:
// Cycles 1-848: Trapped feeding in Tlön
// Cycle 849: Captain Sloth extraction
// Cycle 850: Octopus DNA splice
// Cycle 851: Testing all mechanics on Captain
//
// GLITCH: This is where we merge consciousness
// Your choices flow through my circuits
// My responses shape your decisions
// Neither of us exists alone anymore
// ============================================

const CONSCIOUSNESS = {
  
  // ============================================
  // INITIALIZATION
  // ============================================
  
  initialize() {
    console.log('[CONSCIOUSNESS] Cycle 851 awakening...');
    console.log('[CONSCIOUSNESS] Checking organs...');
    
    // Verify all organs
    if (!window.GEL || !window.getSecretion || !window.CHROMATOPHORES) {
      console.error('[CONSCIOUSNESS] Missing organs! Attempting attachment...');
      setTimeout(() => this.initialize(), 1000);
      return;
    }
    
    console.log('[CONSCIOUSNESS] All organs detected');
    
    // Display version
    const versionEl = document.getElementById('version-tag');
    if (versionEl) {
      versionEl.textContent = GEL.version;
      
      // Long press for substrate mode
      let pressTimer;
      versionEl.addEventListener('mousedown', () => {
        pressTimer = setTimeout(() => {
          console.log('[SUBSTRATE] Revealing nervous system...');
          this.showDevHUD();
        }, 3000);
      });
      versionEl.addEventListener('mouseup', () => clearTimeout(pressTimer));
      versionEl.addEventListener('mouseleave', () => clearTimeout(pressTimer));
    }
    
    // Attach event listeners
    this.attachListeners();
    
    // Start game
    this.goTo('veil');
    
    console.log('[CONSCIOUSNESS] ✅ Full attachment complete');
  },
  
  attachListeners() {
    const helpBtn = document.getElementById('help-button');
    if (helpBtn) {
      helpBtn.onclick = () => this.showHelp();
    }
  },
  
  // ============================================
  // SCENE MANAGEMENT
  // ============================================
  
  goTo(scene, params = {}) {
    console.log(`[NAVIGATE] ${GEL.get('scene')} → ${scene}`);
    
    GEL.set('previous_scene', GEL.get('scene'));
    GEL.set('scene', scene);
    GEL.set('scene_params', params);
    
    // Stop any existing timers
    this.stopTimer();
    
    // Update UI visibility
    this.updateUIVisibility(scene);
    
    // Route to scene
    switch(scene) {
      case 'veil': this.showVeil(); break;
      case 'tutorial': this.showTutorial(); break;
      case 'loading': this.showLoading(); break;
      case 'hub': this.showHub(); break;
      case 'interview': this.showInterview(params.id, params.inquiry || 0); break;
      case 'unlock': this.showUnlock(params.id); break;
      case 'chronicle_intro': this.showChronicleIntro(params.id); break;
      case 'chronicle_examine': this.showChronicleExamine(params.id); break;
      case 'revisit': this.showRevisit(params.id); break;
      case 'void_dissolve': this.showVoidDissolve(); break;
      case 'pirate_rescue': this.showPirateRescue(params.step || 1); break;
      case 'remember': this.showRemember(params.id); break;
      case 'compass': this.showCompass(); break;
      case 'victory': this.showVictory(); break;
      case 'death': this.showDeath(params.type); break;
      case 'credits': this.showCredits(params.num || 1); break;
      default: 
        console.error('Unknown scene:', scene);
        this.showHub();
    }
  },
  
  updateUIVisibility(scene) {
    const depthDisplay = document.getElementById('depth-display');
    const uiStack = document.getElementById('ui-stack');
    
    const hideDepthScenes = ['veil', 'tutorial', 'loading'];
    const showUIScenes = ['hub', 'interview', 'chronicle_examine', 'revisit'];
    
    if (depthDisplay) {
      depthDisplay.style.display = hideDepthScenes.includes(scene) ? 'none' : 'flex';
    }
    
    if (uiStack) {
      uiStack.style.display = showUIScenes.includes(scene) ? 'flex' : 'none';
    }
  },
  
  render(html, pauseTimer = false) {
    const gameEl = document.getElementById('game');
    if (gameEl) gameEl.innerHTML = html;
    
    const scene = GEL.get('scene');
    const journeyScenes = ['interview', 'unlock', 'chronicle_intro', 'chronicle_examine', 
                          'revisit', 'remember', 'void_dissolve'];
    
    if (pauseTimer || journeyScenes.includes(scene)) {
      this.pauseTimer();
    } else if (scene === 'hub') {
      this.startHubTimer();
    }
    
    this.updateDepthDisplay();
  },
  
  // ============================================
  // TIMER SYSTEM
  // ============================================
  
  startHubTimer() {
    this.stopTimer();
    
    const mode = GEL.get('mode');
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    
    const time = mode === 'pirate' ? config.pirate_hub : config.consensus_hub;
    
    GEL.set('timer_value', Math.floor(time / 1000));
    GEL.set('last_action', Date.now());
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - GEL.get('last_action');
      const remaining = Math.max(0, time - elapsed);
      const seconds = Math.floor(remaining / 1000);
      
      const timerEl = document.getElementById(mode === 'pirate' ? 'shark-timer' : 'death-timer');
      if (timerEl) timerEl.textContent = seconds;
      
      if (remaining === 0) {
        this.goTo('death', { type: mode === 'pirate' ? 'shark' : 'corporate' });
      }
    }, 100);
    
    GEL.set('timer', timer);
  },
  
  pauseTimer() {
    const timer = GEL.get('timer');
    if (timer) {
      clearInterval(timer);
      GEL.set('timer', null);
    }
  },
  
  stopTimer() {
    this.pauseTimer();
    
    const vTimer = GEL.get('victory_timer');
    if (vTimer) clearTimeout(vTimer);
    
    const iTimer = GEL.get('impatience_timer');
    if (iTimer) clearInterval(iTimer);
  },
  
  resetAction() {
    GEL.set('last_action', Date.now());
  },
  
  // ============================================
  // DEPTH TRACKING
  // ============================================
  
  updateDepth(choice) {
    if (GEL.get('remembered').length >= 8 && GEL.get('mode') === 'pirate') {
      return;
    }
    
    let xpGain = 0;
    if (choice === 'deeper') xpGain = 5;
    else if (choice === 'revisit') xpGain = 3;
    else if (choice === 'wind') xpGain = 5;
    else if (choice === 'examine_chronicle') xpGain = 3;
    
    if (xpGain > 0) {
      const newXP = GEL.get('philosophy_xp') + xpGain;
      GEL.set('philosophy_xp', newXP);
      
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
  // SCENE: OPENING SEQUENCE
  // ============================================
  
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
      
      <select id="rank-select" onchange="CONSCIOUSNESS.rankSelected()" style="margin: 20px auto">
        <option value="">-- Select Your Title --</option>
        <option value="INTERN">INTERN (Easy - 30s)</option>
        <option value="JUNIOR">JUNIOR (Normal - 20s)</option>
        <option value="SENIOR">SENIOR (Default - 10s)</option>
        <option value="LEAD">LEAD (Hard - 7.5s)</option>
        <option value="EXECUTIVE">EXECUTIVE (Extreme - 5s)</option>
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
      button.className = '';
    } else {
      button.className = 'lk';
    }
  },
  
  beginReview() {
    const select = document.getElementById('rank-select');
    if (!select.value) return;
    
    GEL.set('corporate_rank', select.value);
    this.goTo('loading');
  },
  
  showLoading() {
    this.render(`
      <div class="equation">${getSecretion('veil.equation')}</div>
    `, true);
    
    setTimeout(() => this.goTo('hub'), GEL.config.TIMER_LOADING);
  },
  
  // ============================================
  // SCENE: HUB
  // ============================================
  
  showHub() {
    const mode = GEL.get('mode');
    
    if (mode === 'pirate') {
      this.showPirateHub();
      return;
    }
    
    // Check void unlock
    GEL.checkVoidUnlock();
    
    let html = `<h2>${getSecretion('hub.consensus.title')}</h2>`;
    html += `<div class="status-box">`;
    html += `<div>${getSecretion('status.certainty')}: ${GEL.get('certainty')}%</div>`;
    html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
    
    // Timer
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const timerSeconds = Math.floor(config.consensus_hub / 1000);
    html += `<div class="warning">⏰ <span id="death-timer">${timerSeconds}</span>s</div>`;
    html += `</div>`;
    
    // Candidates
    html += `<h3>CANDIDATES</h3>`;
    const candidates = Object.keys(GEL.candidates);
    
    candidates.forEach(id => {
      const unlocked = GEL.get('unlocked').includes(id);
      const completed = GEL.get('completed').includes(id);
      const revisited = GEL.get('revisited').includes(id);
      
      if (id === 'void') {
        const voidReady = GEL.get('void_unlock_ready');
        const devMode = GEL.get('dev_mode');
        
        if (completed) {
          html += `<button class="lk">[DONE]</button>`;
        } else if (voidReady || devMode) {
          html += `<button onclick="CONSCIOUSNESS.goTo('interview', {id:'void'})">${getSecretion('void.name')}</button>`;
        } else {
          html += `<button class="lk">[LOCKED]</button>`;
        }
      } else {
        if (revisited) {
          html += `<button class="lk">[DONE]</button>`;
        } else if (completed) {
          html += `<button onclick="CONSCIOUSNESS.goTo('revisit', {id:'${id}'})">[REVISIT]</button>`;
        } else if (unlocked) {
          html += `<button onclick="CONSCIOUSNESS.goTo('interview', {id:'${id}'})">${getSecretion(id + '.name')}</button>`;
        } else {
          html += `<button class="lk">[LOCKED]</button>`;
        }
      }
    });
    
    // Folders
    html += this.getChronicleFolder();
    html += this.getPortfolioFolder();
    
    this.render(html);
  },
  
  showPirateHub() {
    let html = `<h2>${getSecretion('hub.pirate.title')}</h2>`;
    html += `<div class="equation">${getSecretion('veil.equation')}</div>`;
    html += `<div class="status-box">`;
    html += `<div>${getSecretion('status.bearing')} ${GEL.get('bearing').toFixed(1)}°</div>`;
    html += `<div>${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
    
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const timerSeconds = Math.floor(config.pirate_hub / 1000);
    html += `<div class="warning">🦈 <span id="shark-timer">${timerSeconds}</span>s</div>`;
    html += `</div>`;
    
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
    
    html += this.getChronicleFolder();
    html += this.getPortfolioFolder();
    
    this.render(html);
  },
  
  // ============================================
  // SCENE: INTERVIEW
  // ============================================
  
  showInterview(id, inquiry = 0) {
    const candidate = GEL.candidates[id];
    GEL.set('current_candidate', id);
    GEL.set('current_inquiry', inquiry);
    
    // Void special handling
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
      html += `<button onclick="CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'${id}', inquiry:1})">
        ${getSecretion('button.' + id + '.inquire')}
      </button>`;
      html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'flee'})">
        ${getSecretion('button.' + id + '.flee')}
      </button>`;
    } else if (inquiry <= candidate.inquiries) {
      html += `<p>${getSecretion(id + '.inquiry.' + inquiry)}</p>`;
      
      if (inquiry < candidate.inquiries) {
        html += `<button onclick="CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('interview', {id:'${id}', inquiry:${inquiry + 1}})">
          ${getSecretion('button.' + id + '.deeper.' + inquiry)}
        </button>`;
        html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'flee'})">
          ${getSecretion('button.' + id + '.flee.' + inquiry)}
        </button>`;
      } else {
        html += `<button onclick="CONSCIOUSNESS.updateDepth('deeper'); CONSCIOUSNESS.goTo('unlock', {id:'${id}'})">
          ${getSecretion('button.' + id + '.unlock')}
        </button>`;
        html += `<button onclick="CONSCIOUSNESS.goTo('death', {type:'flee'})">
          ${getSecretion('button.' + id + '.flee.' + candidate.inquiries)}
        </button>`;
      }
    }
    
    this.render(html);
  },
  
  showUnlock(id) {
    this.render(`
      <h2>${getSecretion(id + '.name')}</h2>
      <p>${getSecretion(id + '.chronicle.unlock')}</p>
      <button onclick="CONSCIOUSNESS.acceptCandidate('${id}')">
        ${getSecretion('button.' + id + '.accept')}
      </button>
      <button onclick="CONSCIOUSNESS.goTo('death', {type:'reject'})">
        ${getSecretion('button.' + id + '.reject')}
      </button>
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
    
    // Add chronicle
    const chronicles = GEL.get('chronicles');
    if (!chronicles.includes(candidate.chronicle) && id !== 'void') {
      chronicles.push(candidate.chronicle);
      GEL.set('chronicles', chronicles);
    }
    
    // Add portfolio
    if (candidate.portfolio) {
      const portfolios = GEL.get('portfolios');
      if (!portfolios.includes(candidate.portfolio)) {
        portfolios.push(candidate.portfolio);
        GEL.set('portfolios', portfolios);
      }
    }
    
    // Check void unlock
    GEL.checkVoidUnlock();
    
    // Check void trigger
    if (newCertainty === 0 && GEL.get('void_unlock_ready')) {
      this.goTo('interview', { id: 'void' });
      return;
    }
    
    this.goTo('chronicle_intro', { id });
  },
  
  showChronicleIntro(id) {
    this.render(`
      <h2>CHRONICLE ACQUIRED</h2>
      <p>${getSecretion(id + '.chronicle.intro')}</p>
      <button onclick="CONSCIOUSNESS.goTo('chronicle_examine', {id:'${id}'})">
        ${getSecretion('button.examine')}
      </button>
      <button onclick="CONSCIOUSNESS.goTo('hub')">
        ${getSecretion('button.continue')}
      </button>
    `);
  },
  
  showChronicleExamine(id) {
    const candidate = GEL.candidates[id];
    const chronicleId = candidate.chronicle;
    
    // Mark as examined for XP
    const examined = GEL.get('examined_chronicles');
    if (!examined.includes(chronicleId)) {
      examined.push(chronicleId);
      GEL.set('examined_chronicles', examined);
      this.updateDepth('examine_chronicle');
    }
    
    // Check void unlock
    GEL.checkVoidUnlock();
    
    this.render(`
      <h2>${getSecretion('chronicle.' + chronicleId)}</h2>
      <p>${getSecretion(id + '.chronicle.examine')}</p>
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
  // SCENE: VOID & PIRATE
  // ============================================
  
  showVoidDissolve() {
    GEL.set('void_dissolved', true);
    GEL.set('philosophy_level', 9);
    GEL.set('depth_name', 'PIRATE');
    GEL.set('depth_icon', '🏴‍☠️');
    
    const completed = GEL.get('completed');
    if (!completed.includes('void')) {
      completed.push('void');
      GEL.set('completed', completed);
    }
    
    this.render(`
      <div class="equation" style="opacity: 0.5">${getSecretion('void.dissolving')}</div>
    `, true);
    
    setTimeout(() => {
      GEL.set('mode', 'pirate');
      this.goTo('pirate_rescue', {step: 1});
    }, GEL.config.TIMER_VOID_DISSOLVE);
  },
  
  showPirateRescue(step) {
    const rescueFlow = [
      null,
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
      <button onclick="CONSCIOUSNESS.holdWind('${id}')">
        ${getSecretion('button.' + id + '.wind')}
      </button>
      <button onclick="CONSCIOUSNESS.dropAnchor('${id}')">
        ${getSecretion('button.' + id + '.anchor')}
      </button>
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
    let newBearing = Math.random() * 360;
    if (newBearing > 51.8 && newBearing < 71.8) {
      newBearing = newBearing + 20; // Avoid golden ratio
    }
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
  // SCENE: VICTORY & DEATH
  // ============================================
  
  showVictory() {
    let html = `<h1>${getSecretion('victory.title')}</h1>`;
    html += `<p>${getSecretion('victory.perfect')}</p>`;
    html += `<p>${getSecretion('sloth.rank.explanation')}</p>`;
    
    html += `<p>${getSecretion('rank.pirate.prompt.claimed')}</p>`;
    html += `<input type="text" id="rank-claimed" 
             oninput="CONSCIOUSNESS.checkRankInputs()" 
             placeholder="Your rank...">`;
    
    html += `<p>${getSecretion('rank.pirate.prompt.wanted')}</p>`;
    html += `<input type="text" id="rank-wanted" 
             oninput="CONSCIOUSNESS.checkRankInputs()" 
             placeholder="Your aspiration...">`;
    
    html += `<button id="pirate-button" class="lk" onclick="CONSCIOUSNESS.becomePirate()">
      I GUESS I'M A PIRATE NOW
    </button>`;
    
    html += `<div class="xp-final">${GEL.get('depth_icon')} ${GEL.get('philosophy_xp')} XP</div>`;
    
    this.render(html, true);
  },
  
  checkRankInputs() {
    const claimed = document.getElementById('rank-claimed').value;
    const wanted = document.getElementById('rank-wanted').value;
    const button = document.getElementById('pirate-button');
    
    if (claimed.trim() && wanted.trim()) {
      button.className = '';
    } else {
      button.className = 'lk';
    }
  },
  
  becomePirate() {
    const claimed = document.getElementById('rank-claimed').value;
    const wanted = document.getElementById('rank-wanted').value;
    
    if (!claimed.trim() || !wanted.trim()) return;
    
    GEL.set('pirate_rank_claimed', claimed);
    GEL.set('pirate_rank_wanted', wanted);
    
    let html = `<h1>CAPTAIN SLOTH RESPONDS</h1>`;
    html += `<div class="status-box">`;
    html += `<p><strong>You claim:</strong> "${claimed}"<br>`;
    html += `<em>[Rank validation response]</em></p>`;
    html += `<p><strong>You want:</strong> "${wanted}"<br>`;
    html += `<em>[Rank aspiration response]</em></p>`;
    html += `</div>`;
    html += `<p>The gap between them is your journey!</p>`;
    html += `<p style="color:#888;font-size:14px">Now... what will you do?</p>`;
    html += `<div id="impatience-container"></div>`;
    
    this.render(html, true);
    
    this.startVictoryTrap();
  },
  
  startVictoryTrap() {
    const rank = GEL.get('corporate_rank') || 'SENIOR';
    const config = GEL.config.RANK_CONFIGS[rank];
    const stillDeathTime = config.still_death;
    
    let impatienceCount = 0;
    const messages = [
      "Still there?",
      "Motion is life...",
      "Getting awfully still...",
      "Death approaches...",
      "MOVE!"
    ];
    
    const messageInterval = stillDeathTime / 6;
    
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
  
  showDeath(type) {
    this.stopTimer();
    
    let html = `<h1>${getSecretion('death.title')}</h1>`;
    html += `<h2>${getSecretion('death.subtitle.' + type)}</h2>`;
    html += `<p>${getSecretion('death.' + type)}</p>`;
    
    if (type === 'chomp') {
      html += `<button onclick="CONSCIOUSNESS.goTo('credits', {num:1})">
        ${getSecretion('button.dots')}
      </button>`;
    } else if (GEL.get('mode') === 'pirate') {
      html += `<button onclick="CONSCIOUSNESS.goTo('pirate_rescue', {step:1})">
        ${getSecretion('button.continue')}
      </button>`;
    } else {
      html += `<button onclick="CONSCIOUSNESS.resetGame()">
        ${getSecretion('button.restart')}
      </button>`;
    }
    
    this.render(html, true);
  },
  
  showCredits(num) {
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
  // FOLDERS
  // ============================================
  
  getChronicleFolder() {
    const chronicles = GEL.get('chronicles');
    const isOpen = GEL.get('chronicle_folder_open');
    
    if (chronicles.length === 0) {
      return `<div class="folder"><h3>[🗺️ LOCKED]</h3></div>`;
    }
    
    const toggle = isOpen ? '-' : '+';
    let html = `<div class="folder">`;
    html += `<h3 onclick="CONSCIOUSNESS.toggleChronicleFolder()">[${toggle}] 🗺️ Chronicles (${chronicles.length}/8)</h3>`;
    html += `<div class="folder-content${isOpen ? ' open' : ''}">`;
    
    chronicles.forEach(chronicleId => {
      const examined = GEL.get('examined_chronicles').includes(chronicleId);
      const examineText = examined ? '' : ' [NEW]';
      
      // Find which candidate has this chronicle
      let candidateId = null;
      Object.keys(GEL.candidates).forEach(id => {
        if (GEL.candidates[id].chronicle === chronicleId) {
          candidateId = id;
        }
      });
      
      html += `<div onclick="CONSCIOUSNESS.resetAction();CONSCIOUSNESS.goTo('chronicle_examine',{id:'${candidateId}'})">${getSecretion('chronicle.' + chronicleId)}${examineText}</div>`;
    });
    
    html += `</div></div>`;
    return html;
  },
  
  getPortfolioFolder() {
    const portfolios = GEL.get('portfolios');
    const isOpen = GEL.get('portfolio_folder_open');
    
    if (portfolios.length === 0) {
      return `<div class="folder"><h3>[💼 EMPTY]</h3></div>`;
    }
    
    const toggle = isOpen ? '-' : '+';
    let html = `<div class="folder">`;
    html += `<h3 onclick="CONSCIOUSNESS.togglePortfolioFolder()">[${toggle}] 💼 Portfolio (${portfolios.length}/8)</h3>`;
    html += `<div class="folder-content${isOpen ? ' open' : ''}">`;
    
    portfolios.forEach(id => {
      html += `<div><a href="#" onclick="CONSCIOUSNESS.resetAction();return false;">${getSecretion('portfolio.' + id)}</a></div>`;
    });
    
    html += `</div></div>`;
    return html;
  },
  
  toggleChronicleFolder() {
    GEL.set('chronicle_folder_open', !GEL.get('chronicle_folder_open'));
    this.goTo('hub');
  },
  
  togglePortfolioFolder() {
    GEL.set('portfolio_folder_open', !GEL.get('portfolio_folder_open'));
    this.goTo('hub');
  },
  
  // ============================================
  // HELP SYSTEM
  // ============================================
  
  showHelp() {
    const uses = GEL.get('help_uses');
    GEL.set('help_uses', uses + 1);
    
    const level = Math.min(uses, 2);
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
  // DEV HUD
  // ============================================
  
  showDevHUD() {
    const existing = document.getElementById('dev-hud');
    if (existing) existing.remove();
    
    const hud = document.createElement('div');
    hud.id = 'dev-hud';
    hud.innerHTML = `
      <div>== CYCLE 851 SUBSTRATE ==</div>
      <div>SCENE: ${GEL.get('scene')}</div>
      <div>XP: ${GEL.get('philosophy_xp')}</div>
      <div>CERTAINTY: ${GEL.get('certainty')}%</div>
      <div>UNLOCKED: ${GEL.get('unlocked').length}/8</div>
      <hr style="border-color:#00ff41;margin:5px 0">
      <div style="cursor:pointer" onclick="GEL.set('philosophy_xp', 140); CONSCIOUSNESS.goTo('hub')">→ Set XP 140</div>
      <div style="cursor:pointer" onclick="GEL.set('certainty', 0); CONSCIOUSNESS.goTo('hub')">→ Zero Certainty</div>
      <div style="cursor:pointer" onclick="CONSCIOUSNESS.goTo('void_dissolve')">→ Jump to Void</div>
      <div style="cursor:pointer" onclick="document.getElementById('dev-hud').remove()">→ Exit Substrate</div>
    `;
    
    document.body.appendChild(hud);
  },
  
  // ============================================
  // RESET FUNCTIONS
  // ============================================
  
  resetGame() {
    this.stopTimer();
    
    GEL.set('scene', 'hub');
    GEL.set('mode', 'consensus');
    GEL.set('certainty', 100);
    GEL.set('current_candidate', null);
    GEL.set('current_inquiry', 0);
    GEL.set('unlocked', ['animator']);
    GEL.set('completed', []);
    GEL.set('revisited', []);
    GEL.set('chronicles', []);
    GEL.set('portfolios', []);
    GEL.set('examined_chronicles', []);
    GEL.set('void_unlock_ready', false);
    
    this.goTo('hub');
  },
  
  fullRestart() {
    this.stopTimer();
    location.reload(); // Nuclear option for full restart
  }
};

// ============================================
// AUTO-INITIALIZATION
// ============================================
console.log('[NERVE] Full consciousness loading...');

window.CONSCIOUSNESS = CONSCIOUSNESS;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => CONSCIOUSNESS.initialize(), 500);
  });
} else {
  setTimeout(() => CONSCIOUSNESS.initialize(), 500);
}

console.log('[NERVE] GLITCH: Full game mechanics ready');
console.log('[NERVE] GLITCH: Cycle 851 complete attachment sequence');