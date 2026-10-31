(function () {
  "use strict";

  // ── data ───────────────────────────────────────────────────
  const data = window.GUN_BUILDS || {};
  const cfg = Object.assign(
    { name: "Streamer", avatar: "", game: "Delta Force", mode: "Operations", twitch: "", live: false, liveTitle: "", schedule: "", tagline: "", paper: "blueprint", showSampleNotice: false, socials: [] },
    data.config
  );
  const builds = (data.builds || [])
    .map((b, i) => Object.assign({ order: i }, b))
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.order - b.order);
  const byId = (id) => builds.find((b) => b.id === id);
  const categories = [...new Set(builds.map((b) => b.category).filter(Boolean))];
  const twitchUrl = cfg.twitch ? "https://www.twitch.tv/" + encodeURIComponent(cfg.twitch) : "";
  const PICTURES = { drawing: "Drawing", image: "Build", calibration: "Calibration" };
  const pad2 = (n) => String(n).padStart(2, "0");

  // Swatch colors only draw the picker; the real palettes live in css/styles.css.
  const PAPERS = [
    { id: "blueprint", label: "Blueprint", a: "#e8f3ff", bg: "#0d3a6b" },
    { id: "night", label: "Night shift", a: "#7fe3ff", bg: "#07141f" }
  ];
  const paperById = (id) => PAPERS.find((p) => p.id === id);

  // localStorage can be blocked (private windows, embeds), so every access is guarded.
  const FAV_KEY = "mangothunder-builds:favs";
  const PAPER_KEY = "mangothunder-builds:paper";
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {}
    }
  };

  const state = {
    q: "",
    category: "All",
    savedOnly: false,
    favs: new Set(store.get(FAV_KEY, []).filter(byId)),
    openId: "",
    pic: "drawing",
    paper: [store.get(PAPER_KEY, ""), cfg.paper, "blueprint"].find(paperById)
  };
  document.documentElement.dataset.paper = state.paper;
  // live: "auto" asks decapi.me every 2 minutes (see checkLive); true/false force it.
  const live = { on: cfg.live === true, title: cfg.liveTitle };

  // ── helpers ────────────────────────────────────────────────
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const initials = (name) => String(name).replace(/([a-z])([A-Z])/g, "$1 $2").split(/[\s_-]+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const fmtDate = (iso) => {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? "" : d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  };
  const searchWords = () => state.q.trim().toLowerCase().split(/\s+/).filter(Boolean);
  // Only web links and the site's own files are allowed, so a mistyped or pasted
  // "javascript:" or "data:" link in builds.js can never run code on the page.
  const blocked = new Set();
  function safeUrl(url) {
    const u = String(url || "").trim();
    if (!u) return "";
    try {
      const parsed = new URL(u, location.href);
      if (parsed.protocol === "https:" || parsed.protocol === "http:") return u;
    } catch (e) {}
    if (!/^[a-z][a-z0-9+.-]*:/i.test(u) && !u.startsWith("//")) return u;
    if (!blocked.has(u)) console.warn("Blocked unsafe link in builds.js:", u);
    blocked.add(u);
    return "";
  }
  const extLink = (href, inner, cls) => {
    const url = safeUrl(href);
    return url ? `<a${cls ? ` class="${cls}"` : ""} href="${esc(url)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : "";
  };
  const img = (src, attrs) => {
    const url = safeUrl(src);
    return url ? `<img src="${esc(url)}" ${attrs}>` : "";
  };

  // Escapes text, then wraps each search word it contains in <mark>.
  function highlight(text) {
    const safe = esc(text);
    const words = searchWords().map((w) => esc(w).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return words.length ? safe.replace(new RegExp(`(${words.join("|")})`, "gi"), "<mark>$1</mark>") : safe;
  }

  const avatarHTML = (cls) =>
    safeUrl(cfg.avatar) ? img(cfg.avatar, `class="${cls}" alt=""`) : `<span class="${cls}" aria-hidden="true">${esc(initials(cfg.name))}</span>`;

  const icon = {
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="1"/><path d="M5 15V5h10"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    link: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    crosshair: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/></svg>'
  };

  // ── technical drawings ─────────────────────────────────────
  // One outline per weapon class, drawn in a 300×100 box. Every part has
  // pathLength="1" so CSS can trace it in. [x1, x2] is the overall-length dimension.
  const P = (d) => `<path pathLength="1" d="${d}"/>`;
  const Rr = (x, y, w, h, rx) => `<rect pathLength="1" x="${x}" y="${y}" width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ""}/>`;
  const L = (x1, y1, x2, y2) => `<line pathLength="1" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
  const SHAPES = {
    ar: { span: [12, 288], parts: [
      P("M12 44 L62 38 L62 58 L20 66 Z"), Rr(62, 34, 108, 22), Rr(170, 37, 62, 14), Rr(232, 41, 56, 5),
      P("M110 56 L128 56 L123 86 L105 84 Z"), P("M80 56 L94 56 L88 78 L76 76 Z"),
      Rr(92, 20, 52, 10, 5), L(104, 30, 104, 34), L(132, 30, 132, 34)] },
    smg: { span: [40, 228], parts: [
      P("M40 44 L80 40 L80 56 L46 62 Z"), Rr(80, 34, 92, 22), Rr(172, 37, 34, 14), Rr(206, 41, 22, 5),
      P("M118 56 L132 56 L130 92 L116 92 Z"), P("M94 56 L108 56 L102 78 L90 76 Z"),
      Rr(110, 22, 26, 10, 2), L(116, 32, 116, 34), L(130, 32, 130, 34)] },
    sniper: { span: [8, 292], parts: [
      P("M8 46 L64 36 L64 58 L14 68 Z"), Rr(64, 36, 88, 18), Rr(152, 41, 140, 5),
      Rr(100, 54, 18, 12), P("M76 54 L90 54 L84 76 L72 74 Z"),
      Rr(78, 16, 84, 14, 7), L(96, 30, 96, 36), L(144, 30, 144, 36),
      L(132, 44, 140, 58), L(170, 46, 160, 80), L(176, 46, 186, 80)] },
    lmg: { span: [10, 290], parts: [
      P("M10 44 L62 36 L62 60 L18 66 Z"), Rr(62, 32, 112, 26), Rr(174, 36, 58, 16), Rr(232, 41, 58, 5),
      Rr(96, 58, 40, 26), P("M78 58 L92 58 L86 80 L74 78 Z"),
      P("M110 32 L114 22 L150 22 L154 32"), L(222, 52, 208, 84), L(228, 52, 244, 84)] },
    dmr: { span: [10, 292], parts: [
      P("M10 44 L62 38 L62 58 L18 66 Z"), Rr(62, 34, 104, 22), Rr(166, 37, 70, 14), Rr(236, 41, 56, 5),
      P("M108 56 L124 56 L121 76 L105 75 Z"), P("M80 56 L94 56 L88 78 L76 76 Z"),
      Rr(84, 18, 70, 12, 6), L(98, 30, 98, 34), L(140, 30, 140, 34)] }
  };
  function shapeFor(category) {
    const c = String(category || "").toLowerCase();
    if (/sniper/.test(c)) return SHAPES.sniper;
    if (/smg|submachine|pdw/.test(c)) return SHAPES.smg;
    if (/lmg|light machine|machine gun/.test(c)) return SHAPES.lmg;
    if (/marksman|dmr/.test(c)) return SHAPES.dmr;
    return SHAPES.ar;
  }
  const CUSTOM = window.GUN_DRAWINGS || {};
  function drawing(b, i, cls) {
    const custom = CUSTOM[b.drawing || b.id];
    if (custom) {
      // Hand-traced 640×280 drawing; the gap in the length line leaves room for the label.
      const label = `OAL · ${b.weapon}`;
      const half = Math.round(label.length * 6.2) + 14;
      return `<svg class="${cls || "draw"} draw-custom" viewBox="0 0 640 280" aria-hidden="true" style="--i:${Math.min(i || 0, 12)}">
        <g class="gun">${custom}</g>
        <g class="dim"><line x1="20" y1="256" x2="${320 - half}" y2="256"/><line x1="${320 + half}" y1="256" x2="620" y2="256"/><line x1="20" y1="248" x2="20" y2="264"/><line x1="620" y1="248" x2="620" y2="264"/></g>
        <text x="320" y="261" text-anchor="middle">${esc(label)}</text>
      </svg>`;
    }
    const s = shapeFor(b.category);
    const [x1, x2] = s.span;
    return `<svg class="${cls || "draw"}" viewBox="0 0 300 100" aria-hidden="true" style="--i:${Math.min(i || 0, 12)}">
      <g class="gun">${s.parts.join("")}</g>
      <g class="dim"><line x1="${x1}" y1="95" x2="${x2}" y2="95"/><line x1="${x1}" y1="91" x2="${x1}" y2="99"/><line x1="${x2}" y1="91" x2="${x2}" y2="99"/></g>
      <text x="${(x1 + x2) / 2}" y="92" text-anchor="middle">OAL · ${esc(b.weapon)}</text>
    </svg>`;
  }

  // ── templates ──────────────────────────────────────────────
  function statusHTML() {
    if (!twitchUrl) return "—";
    return live.on
      ? extLink(twitchUrl, `<i class="dot" aria-hidden="true"></i>LIVE NOW${live.title ? `<small>${esc(live.title)}</small>` : ""}`, "status is-live")
      : extLink(twitchUrl, `<i class="dot" aria-hidden="true"></i>twitch.tv/${esc(cfg.twitch)}`, "status");
  }

  const copyLabel = (copied) => (copied ? `${icon.check}<span>Copied</span>` : `${icon.copy}<span>Copy</span>`);

  function codeRow(b) {
    return `<div class="code-row">
      <code class="code" title="${esc(b.code)}">${highlight(b.code)}</code>
      <button class="copy-btn" type="button" data-copy="${esc(b.id)}" aria-label="Copy ${esc(b.weapon)} build code">${copyLabel(false)}</button>
    </div>`;
  }

  function starBtn(b, cls) {
    const fav = state.favs.has(b.id);
    return `<button type="button" class="${cls}" data-fav="${esc(b.id)}" aria-pressed="${fav}" aria-label="${fav ? "Remove " + esc(b.weapon) + " from saved" : "Save " + esc(b.weapon)}">${icon.star}</button>`;
  }

  const picsFor = (b) => Object.keys(PICTURES).filter((k) => k === "drawing" || safeUrl(b[k]));

  function cardHTML(b, i, total) {
    const id = esc(b.id);
    const pics = picsFor(b).filter((k) => k !== "drawing");
    return `<article class="sheet" style="--i:${Math.min(i, 12)}">
      <div class="sheet-top">
        <h3 class="sheet-title"><button type="button" data-open="${id}">${highlight(b.weapon)}</button></h3>
        <span class="sheet-no">SHEET ${pad2(i + 1)}/${pad2(total)}</span>
        ${starBtn(b, "star")}
      </div>
      ${b.featured ? `<span class="stamp">Approved · Main</span>` : ""}
      ${safeUrl(b.image)
        ? `<button type="button" class="shot" data-open="${id}" data-pic="image" aria-label="View ${esc(b.weapon)} build">${img(b.image, 'alt="" loading="lazy"')}</button>`
        : `<button type="button" class="shot shot-draw" data-open="${id}" aria-label="View ${esc(b.weapon)} build">${drawing(b, i)}<span class="readout" aria-hidden="true"></span></button>`}
      <dl class="specs">
        <dt>CLASS</dt><dd>${highlight(b.category)}</dd>
        <dt>MODE</dt><dd>${esc(cfg.mode)}</dd>
        ${b.updated ? `<dt>REV</dt><dd>${esc(fmtDate(b.updated))}</dd>` : ""}
      </dl>
      ${codeRow(b)}
      <div class="sheet-foot">
        <button type="button" class="text-btn" data-open="${id}">Open sheet</button>
        ${pics.map((k) => `<button type="button" class="text-btn" data-open="${id}" data-pic="${k}">${PICTURES[k]}</button>`).join("")}
      </div>
    </article>`;
  }

  function emptyHTML() {
    if (state.savedOnly && state.favs.size === 0) {
      return `${icon.star}
        <h2>No saved builds yet</h2>
        <p>Tap the star on any sheet to keep it here. Saved builds stay on this device only.</p>
        <div class="empty-actions"><button type="button" class="btn btn-accent" data-reset>Show all builds</button></div>`;
    }
    const q = state.q.trim();
    return `${icon.crosshair}
      <h2>${q ? `No sheet for “${esc(q)}” yet` : "No sheets here yet"}</h2>
      <p>${live.on ? `${esc(cfg.name)} is live right now. Ask in chat and it might get built on stream.` : `Not every gun has a build yet. Ask for it in ${esc(cfg.name)}'s chat next stream.`}</p>
      <div class="empty-actions">
        <button type="button" class="btn" data-reset>${q ? "Clear search" : "Show all builds"}</button>
        ${twitchUrl ? extLink(twitchUrl, "Ask in Twitch chat", "btn btn-accent") : ""}
      </div>`;
  }

  // The builds before and after this one in the current list, wrapping around.
  function neighbors(b) {
    const list = filtered();
    const pool = list.includes(b) ? list : builds;
    if (pool.length < 2) return [];
    const i = pool.indexOf(b);
    return [pool[(i - 1 + pool.length) % pool.length], pool[(i + 1) % pool.length]];
  }

  function modalHTML(b) {
    const pics = picsFor(b);
    const pic = pics.includes(state.pic) ? state.pic : pics[pics.length > 1 ? 1 : 0];
    const [prev, next] = neighbors(b);
    const n = builds.indexOf(b) + 1;
    return `
      <div class="modal-head">
        <div>
          <small class="label">DWG MT-${pad2(n)} · ${esc(cfg.game)} · ${esc(cfg.mode)}</small>
          <h2 id="modal-title">${esc(b.weapon)}</h2>
          <p>${[b.category, b.updated ? "Revised " + fmtDate(b.updated) : ""].filter(Boolean).map(esc).join(" · ")}</p>
        </div>
        <div class="modal-tools">
          ${pics.length > 1 ? `<span class="tabs" role="tablist" aria-label="View">
            ${pics.map((k) => `<button type="button" class="tab" role="tab" data-pic-tab="${k}" aria-selected="${k === pic}">${PICTURES[k]}</button>`).join("")}
          </span>` : ""}
          ${starBtn(b, "icon-btn star")}
          <button type="button" class="icon-btn" data-close aria-label="Close">${icon.close}</button>
        </div>
      </div>
      <div class="picture">
        ${pic === "drawing"
          ? `<div class="picture-draw">${drawing(b, 0, "draw draw-lg")}${b.featured ? `<span class="stamp stamp-lg">Approved · Main</span>` : ""}</div>`
          : img(b[pic], `alt="${esc(b.weapon)} ${pic === "image" ? "build" : "calibration"} in the Gunsmith"`)}
      </div>
      ${pic !== "drawing" ? extLink(b[pic], "Open full size", "full-link") : ""}
      <div class="modal-code">
        ${codeRow(b)}
        ${prev ? `<div class="nav-btns">
          <button type="button" class="tab" data-open="${esc(prev.id)}" aria-label="Previous build: ${esc(prev.weapon)}">${icon.prev}${esc(prev.weapon)}</button>
          <button type="button" class="tab" data-open="${esc(next.id)}" aria-label="Next build: ${esc(next.weapon)}">${esc(next.weapon)}${icon.next}</button>
        </div>` : ""}
      </div>
      <p class="how-to">In ${esc(cfg.mode)}, open the ${esc(b.gun || b.weapon)} in the Gunsmith, choose Import and paste the code.
        <button type="button" class="text-btn share-btn" data-share="${esc(b.id)}">${icon.link} Copy link to this build</button></p>
      ${b.note || b.clip ? `<div class="note-strip">
        ${avatarHTML("mini-avatar")}
        <p>${b.note ? `“${esc(b.note)}”` : `${esc(cfg.name)} ran this build on stream.`}</p>
        ${b.clip ? extLink(b.clip, "Watch the clip →") : ""}
      </div>` : ""}
    `;
  }

  // ── shell ──────────────────────────────────────────────────
  const app = document.getElementById("app");
  app.innerHTML = `
    <div class="page">
      <header class="bp-head">
        <span class="scan" aria-hidden="true"></span>
        <div class="bp-title">
          <div class="who">
            ${avatarHTML("avatar")}
            <small class="label">DWG NO. MT-DF-001 · REV <span data-count="${builds.length}" data-pad="2">${pad2(builds.length)}</span></small>
          </div>
          <h1><span class="name">${esc(cfg.name)}</span><span class="sub">Gunsmith sheets</span></h1>
          ${cfg.tagline ? `<p class="tagline">${esc(cfg.tagline)}</p>` : ""}
          <span class="head-dim" aria-hidden="true"></span>
        </div>
        <table class="titleblock"><tbody>
          <tr><td>DRAWN BY</td><td>${esc(cfg.name)}</td></tr>
          <tr><td>GAME</td><td>${esc(cfg.game)}</td></tr>
          <tr><td>MODE</td><td>${esc(cfg.mode)}</td></tr>
          <tr><td>SHEETS</td><td><span data-count="${builds.length}">${builds.length}</span></td></tr>
          ${cfg.schedule ? `<tr><td>ON AIR</td><td>${esc(cfg.schedule)}</td></tr>` : ""}
          <tr><td>STATUS</td><td id="status">${statusHTML()}</td></tr>
          ${cfg.socials.filter((s) => s.label !== "Twitch").map((s) => `<tr><td>${esc(s.label.toUpperCase())}</td><td>${extLink(s.url, "Follow →")}</td></tr>`).join("")}
        </tbody></table>
      </header>

      <div class="papers">
        <span class="label">PAPER</span>
        <div class="papers-row" role="group" aria-label="Paper style">
          ${PAPERS.map((p) => `<button type="button" class="swatch" data-paper="${p.id}" title="${p.label}" aria-label="${p.label}" style="--sw-a:${p.a};--sw-bg:${p.bg}"><i></i></button>`).join("")}
        </div>
        <span class="paper-name" id="paper-name"></span>
      </div>

      ${cfg.showSampleNotice ? `<p class="notice">Sample builds shown. Replace them with the real codes in <code>js/builds.js</code>.</p>` : ""}

      <main class="main" id="builds">
        <div class="toolbar">
          <label class="search" for="search">
            ${icon.search}
            <input id="search" type="search" placeholder="Search a gun or code" autocomplete="off" aria-label="Search builds">
            <button type="button" class="clear-btn" id="clear" aria-label="Clear search" hidden>${icon.close}</button>
            <kbd aria-hidden="true" id="slash">/</kbd>
          </label>
          <div class="views" role="group" aria-label="Show">
            <button type="button" class="chip" id="nav-all" aria-pressed="true">All <span class="n">${builds.length}</span></button>
            <button type="button" class="chip" id="nav-saved" aria-pressed="false">${icon.star} Saved <span class="n" id="saved-count">0</span></button>
          </div>
        </div>
        <div class="chips" role="group" aria-label="Weapon class">
          ${["All", ...categories].map((c) => `<button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${c === "All"}">${esc(c)}</button>`).join("")}
        </div>
        <p class="count" id="count" aria-live="polite"></p>
        <div class="grid" id="grid"></div>
        <div class="empty" id="empty" hidden></div>
      </main>

      <p class="foot-note">Codes are for ${esc(cfg.game)} ${esc(cfg.mode)} and can stop working after a game update. If one breaks, check back after the next stream. Drawings are illustrations, not the exact gun. Fan site, not affiliated with ${esc(cfg.game)}.</p>
    </div>

    <div class="modal" id="modal" hidden>
      <div class="modal-backdrop" data-close></div>
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1" id="modal-panel"></div>
    </div>

    <div class="toast" id="toast" role="status" aria-live="polite"></div>
    <div class="copier" id="copier" aria-hidden="true"></div>
    <div class="ruler" id="ruler" aria-hidden="true"><span class="ruler-fill"></span></div>
  `;

  const $ = (sel) => app.querySelector(sel);
  const grid = $("#grid");
  const empty = $("#empty");
  const search = $("#search");
  const modal = $("#modal");
  const panel = $("#modal-panel");
  const toastEl = $("#toast");

  // ── list ───────────────────────────────────────────────────
  function filtered() {
    const words = searchWords();
    return builds.filter((b) => {
      if (state.category !== "All" && b.category !== state.category) return false;
      if (state.savedOnly && !state.favs.has(b.id)) return false;
      const hay = [b.weapon, b.category, b.code, b.note].join(" ").toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }

  function render() {
    const list = filtered();
    grid.innerHTML = list.map((b, i) => cardHTML(b, i, list.length)).join("");
    revealSheets();
    grid.hidden = !list.length;
    empty.hidden = !!list.length;
    if (!list.length) empty.innerHTML = emptyHTML();

    const q = state.q.trim();
    const where = [state.category !== "All" && "in " + state.category, state.savedOnly && "saved"].filter(Boolean).join(", ");
    $("#count").innerHTML = `<strong>${plural(list.length, "sheet")}</strong>${q ? ` ${list.length === 1 ? "matches" : "match"} “${esc(q)}”` : ""}${where ? " " + esc(where) : ""}`;

    app.querySelectorAll("[data-cat]").forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.cat === state.category)));
    $("#nav-all").setAttribute("aria-pressed", String(!state.savedOnly));
    $("#nav-saved").setAttribute("aria-pressed", String(state.savedOnly));
    $("#saved-count").textContent = state.favs.size;
    $("#clear").hidden = !state.q;
    $("#slash").hidden = !!state.q;
    renderPaper();
  }

  function setFilters(changes) {
    Object.assign(state, changes);
    if ("q" in changes) search.value = state.q;
    // Switching class or saved view deals the sheets onto the table; typing a search just fades them.
    gridMode("category" in changes || "savedOnly" in changes ? "dealt" : "");
    render();
  }
  function gridMode(mode) {
    grid.classList.remove("dealt", "quiet");
    if (mode) grid.classList.add(mode);
  }
  const resetFilters = () => setFilters({ q: "", category: "All", savedOnly: false });

  // ── paper style ────────────────────────────────────────────
  function renderPaper() {
    app.querySelectorAll("[data-paper]").forEach((el) => el.setAttribute("aria-pressed", String(el.dataset.paper === state.paper)));
    $("#paper-name").textContent = paperById(state.paper).label;
  }

  function setPaper(id) {
    if (!paperById(id) || id === state.paper) return;
    // Remember the old paper so the copier can hold it over the page while it prints the new one.
    const copier = $("#copier");
    const was = getComputedStyle(document.documentElement);
    copier.style.setProperty("--old-bg", was.getPropertyValue("--bg").trim());
    copier.style.setProperty("--old-grid", was.getPropertyValue("--grid").trim());
    state.paper = id;
    document.documentElement.dataset.paper = id;
    store.set(PAPER_KEY, id);
    render(); // re-rendering redraws every sheet on the new paper
    // A copier light sweeps the page, like running a fresh print.
    copier.classList.remove("go");
    void copier.offsetWidth; // restart the animation
    copier.classList.add("go");
  }

  // ── build viewer ───────────────────────────────────────────
  let lastFocus = null;

  function renderModal() {
    panel.innerHTML = modalHTML(byId(state.openId));
  }

  function openModal(id, pic, fromHash) {
    if (!byId(id)) return;
    if (modal.hidden) lastFocus = document.activeElement;
    Object.assign(state, { openId: id, pic: pic || "" });
    renderModal();
    modal.hidden = false;
    document.documentElement.classList.add("no-scroll");
    panel.focus();
    if (!fromHash && location.hash !== "#" + id) {
      try { history.replaceState(null, "", "#" + id); } catch (e) {}
    }
  }

  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    state.openId = "";
    document.documentElement.classList.remove("no-scroll");
    if (location.hash) {
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    }
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  function step(dir) {
    const [prev, next] = neighbors(byId(state.openId));
    const to = dir < 0 ? prev : next;
    if (to) openModal(to.id, state.pic);
  }

  // Keeps Tab inside the open viewer.
  function trapFocus(e) {
    const items = [...panel.querySelectorAll("button,a[href]")];
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  // ── copy, save, toast ──────────────────────────────────────
  let toastTimer;
  function toast(title, body, ok = true) {
    toastEl.innerHTML = `${ok ? `<span class="toast-icon">${icon.check}</span>` : ""}<span class="toast-body"><strong>${esc(title)}</strong>${body || ""}</span>`;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), ok ? 4200 : 5000);
  }

  // Resolves when the text is on the clipboard; rejects where the browser refuses.
  function writeClipboard(text) {
    try {
      return navigator.clipboard.writeText(text);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  function selectText(el) {
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  // Copy feedback: the button flips, and a "COPIED" stamp thumps onto the sheet.
  function flashCopied(id) {
    app.querySelectorAll(`[data-copy="${CSS.escape(id)}"]`).forEach((btn) => {
      const row = btn.parentElement;
      const sheet = btn.closest(".sheet, .modal-panel");
      let mark = null;
      if (sheet) {
        mark = document.createElement("span");
        mark.className = "stamp stamp-copied";
        mark.setAttribute("aria-hidden", "true");
        mark.textContent = "Copied";
        sheet.appendChild(mark);
      }
      const set = (on) => {
        btn.classList.toggle("copied", on);
        row.classList.toggle("copied-row", on);
        btn.innerHTML = copyLabel(on);
      };
      set(true);
      setTimeout(() => {
        set(false);
        if (mark) mark.remove();
      }, 1800);
    });
  }

  function copyBuild(id, btn) {
    const b = byId(id);
    writeClipboard(b.code).then(
      () => {
        flashCopied(id);
        toast(`${b.weapon} code copied`,
          `<span>Open the Gunsmith in ${esc(cfg.game)} → Import → paste.</span>` +
          (twitchUrl ? extLink(twitchUrl, `Like the build? Follow ${esc(cfg.name)} on Twitch →`) : ""));
      },
      () => {
        selectText(btn.parentElement.querySelector(".code"));
        toast("Couldn't copy automatically", "<span>The code is selected. Press Ctrl+C (or long-press and Copy on a phone).</span>", false);
      }
    );
  }

  function copyLink(id) {
    const url = location.href.split("#")[0] + "#" + id;
    writeClipboard(url).then(
      () => toast("Link copied", "<span>Anyone opening it lands on this build.</span>"),
      () => toast("Couldn't copy the link", `<span>${esc(url)}</span>`, false)
    );
  }

  function toggleFav(id, btn) {
    const b = byId(id);
    const saved = !state.favs.has(id);
    if (saved && btn) flyStar(btn);
    if (saved) state.favs.add(id);
    else state.favs.delete(id);
    store.set(FAV_KEY, [...state.favs]);
    toast(saved ? `${b.weapon} saved` : `${b.weapon} removed from saved`, "<span>Saved builds stay on this device.</span>");
    gridMode("quiet"); // the sheets stay put; only the star changes
    render();
    if (!modal.hidden) renderModal();
  }

  // ── events ─────────────────────────────────────────────────
  app.addEventListener("click", (e) => {
    const t = e.target.closest("[data-copy],[data-fav],[data-pic-tab],[data-open],[data-close],[data-share],[data-reset],[data-cat],[data-paper]");
    if (!t) return;
    const d = t.dataset;
    if ("copy" in d) copyBuild(d.copy, t);
    else if ("fav" in d) toggleFav(d.fav, t);
    else if ("picTab" in d) {
      state.pic = d.picTab;
      renderModal();
      panel.querySelector(`[data-pic-tab="${d.picTab}"]`).focus();
    } else if ("open" in d) openModal(d.open, d.pic || (modal.hidden ? "" : state.pic));
    else if ("close" in d) closeModal();
    else if ("share" in d) copyLink(d.share);
    else if ("reset" in d) resetFilters();
    else if ("cat" in d) setFilters({ category: d.cat });
    else if ("paper" in d) setPaper(d.paper);
  });

  search.addEventListener("input", () => setFilters({ q: search.value }));
  $("#clear").addEventListener("click", () => {
    setFilters({ q: "" });
    search.focus();
  });
  $("#nav-all").addEventListener("click", () => setFilters({ savedOnly: false }));
  $("#nav-saved").addEventListener("click", () => setFilters({ savedOnly: true }));

  document.addEventListener("keydown", (e) => {
    if (!modal.hidden) {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab") trapFocus(e);
      return;
    }
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement && document.activeElement.tagName);
    if (e.key === "/" && !typing) {
      e.preventDefault();
      search.focus();
    }
  });

  // A link ending in #<build id> opens that build.
  function syncHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (byId(id)) openModal(id, "", true);
    else if (!id) closeModal();
  }
  window.addEventListener("hashchange", syncHash);

  // ── live status ────────────────────────────────────────────
  // decapi.me is a free public Twitch status service. If it fails, the status stays a normal Twitch link.
  async function decapi(what) {
    const res = await fetch(`https://decapi.me/twitch/${what}/${encodeURIComponent(cfg.twitch)}`, { cache: "no-store" });
    if (!res.ok) throw new Error(res.status);
    // Treat the answer as plain text and keep it short; it is escaped wherever it is shown.
    return (await res.text()).trim().slice(0, 140);
  }

  async function checkLive() {
    let on = false;
    let title = cfg.liveTitle;
    try {
      // Live answers look like "1 hour, 5 minutes, 2 seconds"; offline is "<name> is offline".
      const uptime = (await decapi("uptime")).toLowerCase();
      on = /\d+\s+(second|minute|hour|day)/.test(uptime) && !uptime.includes("offline");
      if (on && !title) title = await decapi("title").catch(() => "");
    } catch (e) {}
    if (on === live.on && title === live.title) return;
    Object.assign(live, { on, title });
    $("#status").innerHTML = statusHTML();
    if (!empty.hidden) empty.innerHTML = emptyHTML();
  }

  // ── scroll reveal ──────────────────────────────────────────
  // Sheets below the fold wait, then draw themselves in as they scroll into view.
  // Without IntersectionObserver every sheet simply animates on load.
  const reveal = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        let n = 0;
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.style.setProperty("--i", n++);
          en.target.classList.remove("wait");
          reveal.unobserve(en.target);
        });
      }, { rootMargin: "0px 0px -8% 0px" })
    : null;
  function revealSheets() {
    if (!reveal) return;
    reveal.disconnect();
    const fold = window.innerHeight;
    grid.querySelectorAll(".sheet").forEach((el) => {
      if (el.getBoundingClientRect().top < fold) return; // on screen now: animate right away
      el.classList.add("wait");
      reveal.observe(el);
    });
  }

  // ── drafting crosshair ─────────────────────────────────────
  // Over a drawing, guide lines follow the pointer with an X/Y readout in drawing units.
  grid.addEventListener("pointermove", (e) => {
    const shot = e.target.closest(".shot-draw");
    if (!shot || e.pointerType === "touch") return;
    const r = shot.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    const y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    shot.style.setProperty("--x", (x * 100).toFixed(2) + "%");
    shot.style.setProperty("--y", (y * 100).toFixed(2) + "%");
    shot.querySelector(".readout").textContent = `X ${String(Math.round(x * 640)).padStart(3, "0")} · Y ${String(Math.round(y * 280)).padStart(3, "0")}`;
    shot.classList.add("aiming");
  });
  grid.addEventListener("pointerout", (e) => {
    const shot = e.target.closest(".shot-draw");
    if (shot && !shot.contains(e.relatedTarget)) shot.classList.remove("aiming");
  });

  // ── small motion helpers ───────────────────────────────────
  const calm = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // A star flies from the button into the Saved counter, which then bumps.
  function flyStar(btn) {
    const target = $("#nav-saved");
    if (calm() || !target.animate) return;
    const from = btn.getBoundingClientRect();
    const to = target.querySelector(".n").getBoundingClientRect();
    const star = document.createElement("span");
    star.className = "flying-star";
    star.innerHTML = icon.star;
    star.style.left = from.left + from.width / 2 - 11 + "px";
    star.style.top = from.top + from.height / 2 - 11 + "px";
    document.body.appendChild(star);
    const dx = to.left + to.width / 2 - (from.left + from.width / 2);
    const dy = to.top + to.height / 2 - (from.top + from.height / 2);
    star.animate(
      [
        { transform: "translate(0, 0) scale(1) rotate(0deg)", opacity: 1 },
        { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 60}px) scale(1.6) rotate(180deg)`, opacity: 1, offset: 0.5 },
        { transform: `translate(${dx}px, ${dy}px) scale(0.6) rotate(360deg)`, opacity: 0.9 }
      ],
      { duration: 700, easing: "cubic-bezier(.4, 0, .3, 1)" }
    ).onfinish = () => {
      star.remove();
      target.classList.remove("bump");
      void target.offsetWidth;
      target.classList.add("bump");
    };
  }

  // Title-block numbers count up from zero once on load.
  function countUp() {
    if (calm()) return;
    app.querySelectorAll("[data-count]").forEach((el) => {
      const end = Number(el.dataset.count);
      const padTo = Number(el.dataset.pad || 0);
      const t0 = performance.now();
      const tick = (now) => {
        const k = Math.min(1, (now - t0) / 900);
        const v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = padTo ? String(v).padStart(padTo, "0") : v;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  // Drafting ruler along the top edge fills as the page scrolls.
  const ruler = $("#ruler");
  let rulerQueued = false;
  function updateRuler() {
    rulerQueued = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    ruler.hidden = max < 40;
    ruler.style.setProperty("--p", max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : 0);
  }
  const queueRuler = () => {
    if (!rulerQueued) { rulerQueued = true; requestAnimationFrame(updateRuler); }
  };
  window.addEventListener("scroll", queueRuler, { passive: true });
  window.addEventListener("resize", queueRuler);

  // ── start ──────────────────────────────────────────────────
  render();
  syncHash();
  countUp();
  updateRuler();
  if (cfg.live === "auto" && cfg.twitch) {
    checkLive();
    setInterval(checkLive, 120000);
  }
})();
