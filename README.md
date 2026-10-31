# MangoThunder Builds

Delta Force Operations gun builds from [MangoThunder](https://www.twitch.tv/mangothunder)'s stream,
laid out as blueprint spec sheets with copy-paste Gunsmith codes.

A static site with no build step: open `index.html` or host the folder anywhere (GitHub Pages works).

## Editing

- `js/builds.js`: the site settings (`config`: name, Twitch channel, live status, schedule, socials,
  default paper style) and the builds (`builds`: one entry per gun with weapon, category and import code).
- `js/drawings.js`: the hand-traced outline for each gun, keyed by the build's `id`.
  A build without one gets a generic drawing for its weapon class.

## Security

- `index.html` sets a Content Security Policy: the page only runs its own scripts, loads fonts from Google Fonts,
  and talks to nothing but decapi.me (for the Twitch live check). Inline styles are allowed because the page
  sets animation timing and drawing line widths per element.
- Every link in `js/builds.js` must be an `https://`/`http://` link or a file in this repo.
  Anything else (like `javascript:`) is dropped and a warning shows in the browser console.
- All text from `builds.js` and from Twitch is shown as plain text, never as HTML.
