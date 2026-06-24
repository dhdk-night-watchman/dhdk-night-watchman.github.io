/* =============================================================================
   THE NIGHT WATCHMAN — game logic
   A single-player web tour. The Watchman guides the player through four dark
   galleries; a lantern reveals the works. Wrong answers are never punished:
   hint -> retry -> reveal with "study or skip". No dead ends.
   ============================================================================= */

/* ---------- built-in SVG "motifs" (work with no downloaded images) ---------- */
function motifSVG(name) {
  const m = {
    nightwatch: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Night Watch — militia figures emerging from shadow">
        <defs><radialGradient id="nw" cx="55%" cy="40%" r="70%">
          <stop offset="0" stop-color="#5a4523"/><stop offset="1" stop-color="#0e0b07"/></radialGradient></defs>
        <rect width="400" height="300" fill="url(#nw)"/>
        <rect x="150" y="20" width="120" height="220" fill="#0c0906" opacity=".6"/>
        <g fill="#100c07">
          <path d="M120 300 q10-130 34-150 q14 16 14 60 l-2 90z"/>
          <path d="M210 300 q4-140 30-160 q22 14 24 70 l-4 90z"/>
          <circle cx="156" cy="120" r="17"/><circle cx="238" cy="116" r="18"/>
        </g>
        <g stroke="#caa24a" stroke-width="3" opacity=".85"><line x1="178" y1="40" x2="150" y2="250"/><line x1="262" y1="36" x2="290" y2="250"/></g>
        <ellipse cx="300" cy="262" rx="22" ry="10" fill="#1b140c"/>
        <circle cx="200" cy="150" r="120" fill="#f4d58d" opacity=".05"/>
      </svg>`,
    milkmaid: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Milkmaid — a woman pouring milk by a window">
        <rect width="400" height="300" fill="#15110b"/>
        <rect x="20" y="20" width="120" height="150" fill="#2a3a4a" opacity=".5"/>
        <rect x="20" y="20" width="120" height="150" fill="none" stroke="#3a4a5a"/>
        <path d="M180 300 q-14-120 26-150 q40 6 40 60 l6 90z" fill="#6b4a2c"/>
        <circle cx="222" cy="96" r="20" fill="#cf9d6a"/>
        <rect x="206" y="70" width="34" height="22" rx="6" fill="#e7dcc6"/>
        <path d="M250 120 l24 14" stroke="#caa24a" stroke-width="9" fill="none" stroke-linecap="round"/>
        <path d="M276 134 q6 30 0 40" stroke="#f4eede" stroke-width="3" fill="none"/>
        <ellipse cx="278" cy="180" rx="22" ry="9" fill="#8a6b3c"/>
        <circle cx="80" cy="80" r="70" fill="#f4d58d" opacity=".06"/>
      </svg>`,
    pyramid: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Delft flower pyramid in blue and white">
        <rect width="400" height="300" fill="#0f0d09"/>
        <g fill="#eef3fb" stroke="#4E84BE" stroke-width="2">
          <rect x="150" y="240" width="100" height="34" rx="4"/>
          <rect x="160" y="206" width="80" height="30" rx="4"/>
          <rect x="168" y="174" width="64" height="28" rx="4"/>
          <rect x="176" y="144" width="48" height="26" rx="4"/>
          <path d="M200 110 l20 30 h-40z"/>
        </g>
        <g stroke="#4E84BE" stroke-width="3" stroke-linecap="round">
          <line x1="150" y1="252" x2="132" y2="246"/><line x1="250" y1="252" x2="268" y2="246"/>
          <line x1="160" y1="218" x2="144" y2="212"/><line x1="240" y1="218" x2="256" y2="212"/>
          <line x1="168" y1="186" x2="154" y2="182"/><line x1="232" y1="186" x2="246" y2="182"/>
        </g>
        <g fill="#9ec1e8"><circle cx="130" cy="244" r="5"/><circle cx="270" cy="244" r="5"/><circle cx="152" cy="210" r="4"/><circle cx="248" cy="210" r="4"/></g>
      </svg>`,
    dollhouse: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cabinet dolls' house of nine rooms">
        <rect width="400" height="300" fill="#120e09"/>
        <rect x="120" y="40" width="160" height="220" rx="6" fill="#3a2517" stroke="#caa24a" stroke-width="3"/>
        <g fill="#1c140d" stroke="#7a5a22">
          <rect x="134" y="54" width="42" height="62"/><rect x="179" y="54" width="42" height="62"/><rect x="224" y="54" width="42" height="62"/>
          <rect x="134" y="119" width="42" height="62"/><rect x="179" y="119" width="42" height="62"/><rect x="224" y="119" width="42" height="62"/>
          <rect x="134" y="184" width="42" height="62"/><rect x="179" y="184" width="42" height="62"/><rect x="224" y="184" width="42" height="62"/>
        </g>
        <g fill="#caa24a" opacity=".75"><rect x="150" y="92" width="10" height="20"/><rect x="240" y="200" width="8" height="40"/><circle cx="200" cy="150" r="6"/></g>
      </svg>`,
    ship: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A three-masted warship model">
        <rect width="400" height="300" fill="#0d0c0a"/>
        <g stroke="#caa24a" stroke-width="2"><line x1="110" y1="40" x2="110" y2="210"/><line x1="200" y1="20" x2="200" y2="210"/><line x1="290" y1="40" x2="290" y2="210"/></g>
        <g fill="#e7dcc6" opacity=".9">
          <path d="M86 60 h48 v40 h-48z"/><path d="M82 110 h56 v40 h-56z"/>
          <path d="M174 40 h52 v44 h-52z"/><path d="M170 92 h60 v44 h-60z"/><path d="M176 148 h48 v38 h-48z"/>
          <path d="M266 60 h48 v40 h-48z"/><path d="M262 110 h56 v40 h-56z"/>
        </g>
        <path d="M70 214 q130 60 260 0 l-18 30 q-112 40 -224 0z" fill="#5a3a1c" stroke="#caa24a"/>
        <g stroke="#7a5a22"><line x1="92" y1="222" x2="92" y2="236"/><line x1="120" y1="226" x2="120" y2="240"/><line x1="280" y1="226" x2="280" y2="240"/><line x1="308" y1="222" x2="308" y2="236"/></g>
      </svg>`,
    calmsea: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dutch ships becalmed on a glassy sea">
        <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4654"/><stop offset="1" stop-color="#c9b78c"/></linearGradient></defs>
        <rect width="400" height="180" fill="url(#sky)"/>
        <rect y="180" width="400" height="120" fill="#7d8a82"/>
        <circle cx="300" cy="70" r="34" fill="#f4d58d" opacity=".5"/>
        <g fill="#1c211f">
          <path d="M120 182 l4-90 18 90z"/><path d="M118 150 h34 v30 h-34z" opacity=".8"/>
          <path d="M232 184 l3-60 12 60z"/><path d="M230 158 h24 v24 h-24z" opacity=".8"/>
          <path d="M96 196 q40 10 80 0 l-8 16 q-32 8 -64 0z"/>
          <path d="M214 196 q30 8 60 0 l-6 12 q-24 6 -48 0z"/>
        </g>
        <g stroke="#aeb8ae" opacity=".5"><line x1="0" y1="210" x2="400" y2="210"/><line x1="0" y1="240" x2="400" y2="240"/></g>
      </svg>`,
    iceskaters: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A frozen river crowded with tiny skaters">
        <rect width="400" height="170" fill="#b9c2cb"/>
        <rect y="170" width="400" height="130" fill="#d7dde2"/>
        <g fill="#2c2c2c"><rect x="40" y="120" width="22" height="40"/><polygon points="36,120 66,120 51,104"/>
          <rect x="300" y="118" width="20" height="42"/><polygon points="296,118 324,118 310,100"/></g>
        <g fill="#1c1c1c">
          <circle cx="120" cy="196" r="3"/><rect x="118.5" y="198" width="3" height="9"/>
          <circle cx="150" cy="210" r="3"/><rect x="148.5" y="212" width="3" height="9"/>
          <circle cx="190" cy="200" r="3"/><rect x="188.5" y="202" width="3" height="9"/>
          <circle cx="225" cy="216" r="3"/><rect x="223.5" y="218" width="3" height="9"/>
          <circle cx="265" cy="204" r="3"/><rect x="263.5" y="206" width="3" height="9"/>
          <circle cx="95" cy="220" r="3"/><rect x="93.5" y="222" width="3" height="9"/>
          <circle cx="320" cy="222" r="3"/><rect x="318.5" y="224" width="3" height="9"/>
        </g>
        <g stroke="#9aa6b0" stroke-width="1.5" opacity=".7"><line x1="0" y1="250" x2="400" y2="250"/><line x1="0" y1="275" x2="400" y2="275"/></g>
      </svg>`,
    neartown: `
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skaters near a town, larger figures in the foreground">
        <rect width="400" height="160" fill="#aeb9c4"/>
        <rect y="160" width="400" height="140" fill="#d2d9df"/>
        <g fill="#3a3a3a"><rect x="250" y="96" width="120" height="64"/><polygon points="250,96 310,70 370,96"/>
          <rect x="270" y="116" width="12" height="20" fill="#caa24a"/><rect x="320" y="116" width="12" height="20" fill="#caa24a"/></g>
        <g fill="#161616">
          <circle cx="110" cy="210" r="6"/><rect x="106" y="214" width="8" height="22"/>
          <circle cx="160" cy="226" r="6"/><rect x="156" y="230" width="8" height="22"/>
          <circle cx="70" cy="232" r="5"/><rect x="67" y="236" width="6" height="18"/>
        </g>
        <g stroke="#9aa6b0" stroke-width="1.5" opacity=".7"><line x1="0" y1="255" x2="400" y2="255"/></g>
      </svg>`
  };
  return m[name] || `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><rect width="400" height="300" fill="#1a140d"/></svg>`;
}

const lampGlyph = `<svg class="lamp" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="20" cy="22" r="14" fill="#f4d58d" opacity=".25"/>
  <path d="M14 12 h12 l3 16 a13 13 0 0 1 -18 0z" fill="#caa24a"/>
  <rect x="17" y="6" width="6" height="7" rx="2" fill="#7a5a22"/>
  <circle cx="20" cy="22" r="5" fill="#fff3d2"/>
</svg>`;

/* ---------- state ---------- */
const state = {
  score: 0,
  galleryDone: {},          // galleryId -> true
  objectDone: {},           // objectId -> true
  current: { galleryId: null, objectId: null, qIndex: 0, attempts: 0, hintUsed: false }
};

/* ---------- screen helpers ---------- */
const app = () => document.getElementById('app');
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  // dark "find in the dark" mode only inside a gallery room
  document.body.classList.toggle('dark', id === 'screen-gallery');
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}
function rnd(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function esc(s){ return s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

/* image-or-motif renderer: try a real photo, fall back to the SVG drawing */
function artHTML(obj) {
  const fallback = motifSVG(obj.motif).replace(/`/g, '');
  return `<img src="${obj.image}" alt="${esc(obj.title)}, ${esc(obj.maker)}"
            onerror="this.outerHTML=this.getAttribute('data-fallback')"
            data-fallback='${fallback.replace(/'/g, "&#39;")}'>`;
}

/* ---------- title ---------- */
function renderTitle() {
  const s = document.getElementById('screen-title');
  s.innerHTML = `
    <div class="title-hero">
      <div class="eyebrow">A Rijksmuseum tour, after dark</div>
      <svg class="lantern-glyph" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="50" cy="56" r="30" fill="#f4d58d" opacity=".22"/>
        <rect x="44" y="10" width="12" height="10" rx="3" fill="#7a5a22"/>
        <path d="M30 28 h40 l8 38 a30 30 0 0 1 -56 0z" fill="#caa24a"/>
        <path d="M34 30 h32 l6 34 a25 25 0 0 1 -44 0z" fill="#1c140d"/>
        <circle cx="50" cy="56" r="9" fill="#fff3d2"/>
      </svg>
      <h1>The Night Watchman</h1>
      <div class="sub">find what the daylight crowds walk past</div>
      <div class="watch-quote">${esc(WATCHMAN.welcome)}</div>
      <div class="title-actions">
        <button class="btn" id="begin">Take the lantern</button>
        <a class="btn ghost small" href="design.html">View design &amp; diagrams →</a>
        <a class="btn ghost small" href="twine/index.html">Twine version →</a>
      </div>
      <p class="title-meta">Best on a phone, tablet or laptop — move your lantern (or just tap a frame) to reveal each work.
      Built on real <a class="textlink" href="https://www.rijksmuseum.nl/en/collection" target="_blank" rel="noopener">Rijksmuseum Collection Online</a> records. Guide: the Night Watchman.</p>
    </div>`;
  document.getElementById('begin').addEventListener('click', renderMap);
}

/* ---------- map ---------- */
function renderMap() {
  const completed = Object.keys(state.galleryDone).length;
  const s = document.getElementById('screen-map');
  s.innerHTML = `
    <div class="bar">
      <div class="score">Lantern score <b>${state.score}</b></div>
      <div class="progress">Galleries walked: ${completed} / 4</div>
    </div>
    <div class="eyebrow">The museum after dark</div>
    <p class="room-hint">${esc(WATCHMAN.mapIntro)}</p>
    <div class="doors">
      ${GALLERIES.map((g, i) => `
        <button class="door" data-g="${g.id}" style="--accent:${g.accent}">
          <span class="accent"></span>
          <span class="num">GALLERY ${String(i + 1).padStart(2, '0')}</span>
          <h3>${esc(g.name)}</h3>
          <p>${esc(g.blurb)}</p>
          ${state.galleryDone[g.id] ? '<span class="done">✦ Walked</span>' : '<span class="todo">Unvisited</span>'}
        </button>`).join('')}
    </div>
    <p class="foot">A wrong answer never ends the tour — the Watchman hints, then lets you study or move on.</p>`;
  s.querySelectorAll('.door').forEach(d =>
    d.addEventListener('click', () => openGallery(d.dataset.g)));
  showScreen('screen-map');

  if (completed === 4) renderEnding();
}

/* ---------- gallery (dark room) ---------- */
function openGallery(galleryId) {
  const g = GALLERIES.find(x => x.id === galleryId);
  state.current.galleryId = galleryId;
  const s = document.getElementById('screen-gallery');
  s.innerHTML = `
    <div class="bar">
      <button class="btn ghost small" id="back-map">← Dark hall</button>
      <div class="progress">${esc(g.name)}</div>
    </div>
    <div class="room-head"><div class="eyebrow">${esc(g.name)}</div></div>
    <p class="room-hint">${esc(g.intro)}</p>
    <div class="frames">
      ${g.objects.map(oid => {
        const o = OBJECTS[oid];
        return `<button class="frame-btn" data-o="${oid}" aria-label="Inspect ${esc(o.title)}">
          <div class="frame"><div class="canvas">${artHTML(o)}</div></div>
          <div class="frame-cap">${esc(o.title)}<small>${esc(o.maker)} · ${esc(o.date)}</small>
            ${state.objectDone[oid] ? '<span class="frame-done">✦ studied</span>' : ''}</div>
        </button>`;
      }).join('')}
    </div>`;
  s.querySelector('#back-map').addEventListener('click', renderMap);
  s.querySelectorAll('.frame-btn').forEach(b => {
    b.addEventListener('click', () => openObject(b.dataset.o));
    // keyboard users: move the lantern to the focused frame so it "lights up"
    b.addEventListener('focus', () => moveLanternToEl(b));
  });
  showScreen('screen-gallery');
}

/* ---------- object + questions ---------- */
function openObject(objectId) {
  state.current.objectId = objectId;
  state.current.qIndex = 0;
  renderQuestion();
}

function renderQuestion() {
  const c = state.current;
  c.attempts = 0; c.hintUsed = false;
  const obj = OBJECTS[c.objectId];
  const q = obj.questions[c.qIndex];
  const s = document.getElementById('screen-object');
  s.innerHTML = `
    <div class="bar">
      <button class="btn ghost small" id="back-gallery">← Back to the room</button>
      <div class="score">Score <b style="color:var(--gold)">${state.score}</b></div>
    </div>
    <div class="obj-grid">
      <div class="obj-art">
        <div class="frame"><div class="canvas">${artHTML(obj)}</div></div>
        <div class="obj-label">
          <h2>${esc(obj.title)}</h2>
          <div class="meta">${esc(obj.maker)} · ${esc(obj.date)}</div>
          <div class="credit">${esc(obj.credit)}</div>
        </div>
      </div>
      <div class="qcard">
        <div class="qstep">Question ${c.qIndex + 1} of ${obj.questions.length}</div>
        <div class="qprompt">${esc(q.q)}</div>
        <div class="options" id="options">
          ${q.options.map((opt, i) => `<button class="opt" data-i="${i}">${esc(opt)}</button>`).join('')}
        </div>
        <div class="speech hide" id="speech">${lampGlyph}<p id="speech-text"></p></div>
        <div class="studybox hide" id="studybox"></div>
        <div class="afteractions" id="afteractions"></div>
      </div>
    </div>`;
  s.querySelector('#back-gallery').addEventListener('click', () => openGallery(c.galleryId));
  s.querySelectorAll('.opt').forEach(b =>
    b.addEventListener('click', () => handleAnswer(parseInt(b.dataset.i, 10))));
  showScreen('screen-object');
}

function say(text) {
  document.getElementById('speech').classList.remove('hide');
  document.getElementById('speech-text').textContent = text;
}

function handleAnswer(choice) {
  const c = state.current;
  const obj = OBJECTS[c.objectId];
  const q = obj.questions[c.qIndex];
  const opts = [...document.querySelectorAll('.opt')];
  const correct = choice === q.answer;
  c.attempts++;

  if (correct) {
    opts.forEach(o => o.disabled = true);
    opts[choice].classList.add('correct');
    const gain = c.hintUsed ? SCORING.afterHint : SCORING.first;
    state.score += gain;
    say(`${rnd(WATCHMAN.correct)}  (+${gain})`);
    showContinue();
    return;
  }

  // wrong
  opts[choice].classList.add('wrong');
  if (c.attempts === 1) {
    // first miss -> hint, allow retry
    c.hintUsed = true;
    opts[choice].disabled = true;
    say(`${WATCHMAN.hint}  ${q.hint}`);
  } else {
    // second miss -> reveal + study or skip (no dead ends)
    opts.forEach(o => o.disabled = true);
    opts[q.answer].classList.add('correct');
    say(WATCHMAN.reveal);
    showStudyOrSkip();
  }
}

function showContinue() {
  const after = document.getElementById('afteractions');
  after.innerHTML = `<button class="btn" id="next">Continue</button>`;
  document.getElementById('next').addEventListener('click', advance);
}

function showStudyOrSkip() {
  const c = state.current;
  const obj = OBJECTS[c.objectId];
  const q = obj.questions[c.qIndex];
  const after = document.getElementById('afteractions');
  after.innerHTML = `
    <button class="btn" id="study">Study the information</button>
    <button class="btn ghost" id="skip">Move on</button>`;
  document.getElementById('study').addEventListener('click', () => {
    const box = document.getElementById('studybox');
    box.classList.remove('hide');
    box.innerHTML = `<b>The Watchman explains —</b> ${esc(q.study)}`;
    state.score += SCORING.afterHelp;
    after.innerHTML = `<button class="btn" id="next">Continue (+${SCORING.afterHelp})</button>`;
    document.getElementById('next').addEventListener('click', advance);
  });
  document.getElementById('skip').addEventListener('click', advance);
}

function advance() {
  const c = state.current;
  const obj = OBJECTS[c.objectId];
  if (c.qIndex < obj.questions.length - 1) {
    c.qIndex++;
    renderQuestion();
    return;
  }
  // object finished
  state.objectDone[c.objectId] = true;
  const g = GALLERIES.find(x => x.id === c.galleryId);
  const allDone = g.objects.every(oid => state.objectDone[oid]);
  if (allDone) {
    state.galleryDone[g.id] = true;
    renderGalleryComplete(g);
  } else {
    openGallery(c.galleryId);
  }
}

function renderGalleryComplete(g) {
  const s = document.getElementById('screen-object');
  s.innerHTML = `
    <div class="ending" style="padding:50px 0">
      ${lampGlyph}
      <div class="eyebrow" style="margin-top:14px">Gallery complete</div>
      <h1 style="font-size:clamp(34px,7vw,56px)">${esc(g.name)}</h1>
      <p class="room-hint" style="font-style:normal">${esc(WATCHMAN.galleryComplete)}</p>
      <div style="margin-top:18px"><button class="btn" id="to-map">Return to the dark hall</button></div>
    </div>`;
  s.querySelector('#to-map').addEventListener('click', renderMap);
  showScreen('screen-object');
}

/* ---------- ending ---------- */
function renderEnding() {
  const max = Object.values(OBJECTS).reduce((n, o) => n + o.questions.length, 0) * SCORING.first;
  const pct = Math.round((state.score / max) * 100);
  let grade = "You wandered, and you saw.";
  if (pct >= 85) grade = "A true night owl — almost nothing escaped your lantern.";
  else if (pct >= 60) grade = "A keen eye in the dark.";
  else if (pct >= 35) grade = "You found your way, with the Watchman's help.";
  const s = document.getElementById('screen-ending');
  s.innerHTML = `
    <div class="ending">
      <div class="eyebrow">The tour is done</div>
      <h1>Dawn at the Rijks</h1>
      <div class="final-score">${state.score} <span style="font-size:20px;color:var(--parch-dim)">/ ${max}</span></div>
      <p class="grade">${esc(grade)}</p>
      <p class="room-hint" style="max-width:560px;margin:18px auto;font-style:italic">${esc(WATCHMAN.ending)}</p>
      <div style="margin-top:8px"><button class="btn" id="replay">Walk again</button></div>
    </div>`;
  s.querySelector('#replay').addEventListener('click', () => {
    state.score = 0; state.galleryDone = {}; state.objectDone = {};
    renderMap();
  });
  showScreen('screen-ending');
}

/* ---------- lantern follows pointer / focus ---------- */
function setLantern(x, y) {
  document.documentElement.style.setProperty('--lx', x + 'px');
  document.documentElement.style.setProperty('--ly', y + 'px');
}
function moveLanternToEl(el) {
  const r = el.getBoundingClientRect();
  setLantern(r.left + r.width / 2, r.top + r.height / 2);
}
window.addEventListener('pointermove', e => {
  if (document.body.classList.contains('dark')) setLantern(e.clientX, e.clientY);
}, { passive: true });

/* ---------- boot ---------- */
renderTitle();
showScreen('screen-title');
