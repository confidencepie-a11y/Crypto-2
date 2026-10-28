CRYPTO WALLET UI
================

Files
-----
index.html    Page structure (includes the Vero splash screen markup)
style.css     All styling, including the splash screen animation (no Tailwind or other dependencies)
script.js     Assets/Accounts toggle, bottom nav active state, splash screen timer
manifest.json Web app manifest (standalone mode, black theme)
README.txt    This file

How to run
----------
Keep all files in the same folder and open index.html in a browser.
For best results on a phone, serve the folder (e.g. "npx serve") and use
"Add to Home Screen" to install it as an app.

What changed
------------
- Pure black (#000000) background; purple fade and dot pattern removed.
- All top header buttons removed.
- Layout rebuilt on a consistent spacing scale; every element resized
  to be smaller and evenly spaced.
- Balance uses DM Sans (a soft, PayPal-style typeface) with lighter weight.
- Bottom nav is now a compact, centered liquid-glass pill (blur, saturation,
  inner highlights) instead of a full-width bar.

Notes
-----
The DM Sans font loads from Google Fonts; offline it falls back to the
system font. The manifest uses an inline SVG icon; swap in your own PNG
icons (192x192 and 512x512) for production.

Update 2
--------
- Bottom nav rebuilt as a full-width dark glass bar (Home / Crypto / Pay Bill / Cards).
- All money amounts use the --font-money font (Instrument Sans) via the .money class.
  To change the font, edit --font-money in style.css and the Google Fonts link in index.html.
- Added in-app promotion card with a 2D cartoon illustration (inline SVG).

Update 3
--------
- Added a Vero splash screen shown on every launch for 10 seconds, then it
  fades into the wallet. The logo is an inline SVG (vector) with a layered
  build-up animation: capsules slide in with trailing layers, lock together,
  then the "vero" wordmark appears.
- To change the duration, edit SPLASH_MS at the bottom of script.js (milliseconds).
- The animation timings live in the "Vero splash screen" section at the bottom of style.css.
- If the device has "reduce motion" turned on, the finished logo is shown without movement.
