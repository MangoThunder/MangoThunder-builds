/*
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE to change the site. No other file needs touching.
 * ─────────────────────────────────────────────────────────────
 *
 *  config  – streamer name, Twitch channel, socials, paper style
 *  builds  – one object per loadout. Copy an existing one and change it.
 *
 *  Paper styles (config.paper sets the one visitors see first;
 *  they can switch with the two swatches under the header):
 *    "blueprint"  classic white lines on blueprint blue (default)
 *    "night"      cyan lines on near-black
 *
 *  Each build gets a technical drawing. Builds with a hand-traced outline
 *  in js/drawings.js (same id) use that; the rest get a generic drawing
 *  picked from their category (assault rifle, SMG, marksman rifle, LMG, sniper rifle).
 *
 *  Build fields
 *    id          unique, lowercase letters/numbers/hyphens (used in share links)
 *    weapon      gun name, e.g. "M4A1"
 *    gun         optional, the gun's name in the game when "weapon" adds a label,
 *                e.g. weapon "SKS Budget" with gun "SKS"
 *    category    e.g. "Assault Rifle", "SMG" (each value becomes a filter chip)
 *    code        the full import code exactly as the game gives it
 *    image       optional, Gunsmith screenshot, e.g. "images/guns/m4a1.webp"
 *    calibration optional, Calibrate-screen screenshot
 *    note        optional, a sentence from MangoThunder about the build
 *    clip        optional, link to a Twitch/YouTube clip of the build
 *    featured    optional, true = listed first
 *    updated     optional, "YYYY-MM-DD"
 */
window.GUN_BUILDS = {
  config: {
    name: "MangoThunder",
    avatar: "",                       // profile picture, e.g. "images/avatar.png" (blank = initials)
    game: "Delta Force",
    mode: "Operations",
    twitch: "mangothunder_",          // twitch.tv/<this>
    live: "auto",                     // "auto" = "Live now" box turns on by itself while streaming; true/false forces it
    liveTitle: "",
    schedule: "",                     // optional, e.g. "Tue–Sat · 8pm ET"
    tagline: "Every Delta Force gun build I run on stream, one sheet per gun. Copy the code, import it in the Gunsmith, deploy.",
    paper: "blueprint",
    showSampleNotice: false,          // true shows a "sample builds" banner
    socials: [
      { label: "Twitch", url: "https://www.twitch.tv/mangothunder_" }
    ]
  },

  builds: [
    { id: "kc-17", weapon: "KC-17", category: "Assault Rifle",
      code: "KC-17 Assault Rifle-Operations (Extraction Mode)-6LDG32S0F1274DR0HHHLC" },
    { id: "k437", weapon: "K437", category: "Assault Rifle",
      code: "K437 Assault Rifle-Operations (Extraction Mode)-6LH29G00F1274DR0HHHLC" },
    { id: "m700", weapon: "M700", category: "Sniper Rifle",
      code: "M700 Sniper Rifle-Operations (Extraction Mode)-6LPHQFG0F1274DR0HHHLC" },
    { id: "sr-25", weapon: "SR-25", category: "Marksman Rifle",
      code: "SR-25 Marksman Rifle-Operations (Extraction Mode)-6LPHS200F1274DR0HHHLC" },
    { id: "sks", weapon: "SKS", category: "Marksman Rifle",
      code: "SKS Marksman Rifle-Operations (Extraction Mode)-6LPHTBG0F1274DR0HHHLC" },
    { id: "sks-budget", weapon: "SKS Budget", gun: "SKS", category: "Marksman Rifle",
      code: "SKS Marksman Rifle-Operations (Extraction Mode)-6LPHUCS0F1274DR0HHHLC" },
    { id: "rm277", weapon: "RM277", category: "Assault Rifle",
      code: "RM277-Operations (Extraction Mode)-6LPHVJG0F1274DR0HHHLC" },
    { id: "mk4", weapon: "MK4", category: "SMG",
      code: "MK4 Submachine Gun-Operations (Extraction Mode)-6LPI01S0F1274DR0HHHLC" }
  ]
};
