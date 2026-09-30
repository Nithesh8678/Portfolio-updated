# Portfolio project and performance review

Local review branch: `review/projects-performance`. Base main commit: `7925cd1a5c1af5c2939bbcf52e024a49c11e68b7`.

Exactly eight projects are rendered in the requested order: QuteMail, AI-DPR, bartr, FindChain, meshT, JOCKY, Unavo and NotchPilot. Each card has a readable description, implementation-based technology list, visible preview and working public destination. Unavo links only to its public website. Other cards link to their public source repositories. No sole-authorship or unverified production, security or test-completion claims were added.

## Evidence for card copy

| Project | Source and implementation evidence |
| --- | --- |
| QuteMail | [Public repository](https://github.com/Nithesh8678/QuteMail): client manifest and Django email/crypto code; inbox sync, AES and simulated BB84. QRNG+PQC is unimplemented and omitted. This is a fork; no sole-authorship claim. |
| AI-DPR | [Public repository](https://github.com/Nithesh8678/AI-DPR): `dpr-ui/package.json`, evaluation service and simple assessors. Extraction, automated checks, indicators and recommendations; no trained-model accuracy claim. |
| bartr | [Public repository](https://github.com/Nithesh8678/bartr): Next.js manifest, profile/matching/request routes and chat components. Gemini with fallback matching; no payment-readiness claim. |
| FindChain | [Public repository](https://github.com/Nithesh8678/FindChain): actual React/TypeScript/Vite manifest, Firebase item service and Gemini report-detail matching. The README stack is stale. No image-recognition or implemented smart-contract bounty claim. |
| meshT | [Public repository](https://github.com/Nithesh8678/meshT): React Native/Expo manifest and BLE/transaction implementation. Offline signing and relay require an internet gateway for blockchain submission. |
| JOCKY | [Public repository](https://github.com/Nithesh8678/jocky): README and local code inspection. Read-only evidence collection, investigation language, hash verification and reports; pending two-PC acceptance is not represented as completed. |
| Unavo | [Public website](https://www.unavo.in/) and private local manifest verified without copying private source. Actual homepage and budget builder inspected: meal slots, day count and date-selection entry; availability/contact flow. Diet/customized plans are coming soon. No order, payment or personal-data submission performed. |
| NotchPilot | [Public repository](https://github.com/Nithesh8678/notchpilot) and matching local checkout/README: Swift native app, local speech and supported Accessibility actions. No universal-app-control claim. |

Unavo's preview is a real screenshot captured from its public homepage on 30 September 2026, after closing the availability popup and declining cookies. The other seven images are original feature-flow illustrations, explicitly captioned **Designed feature preview**. They are not screenshots or proof of deployed behavior.

## Performance changes

- Removed the full-page loader that gated the portfolio on the 3D asset and its exit animation. Text/navigation are independent of the optional scene.
- Split the 3D scene into a deferred chunk. Desktop starts it after 1.2 seconds; mobile, reduced-motion and data-saving visitors get a small genuine rendering of the same planet.
- Reduced the GLB from 18,741,600 to 2,015,788 bytes (89.2%) using geometry quantization, meshopt compression and a 512px texture cap. Named nodes/materials are preserved. The existing loader includes the meshopt decoder.
- Reduced rendering costs: capped DPR at 1.5, environment resolution 128, removed unused shadow rendering, and stopped the scene frame loop when the hero is offscreen.
- Replaced eager stock/background project images with small lazy-loaded SVG/WebP previews. Removed the six obsolete PNG previews and unreferenced backgrounds. Remaining unused JPGs are retained.
- Converted the about photo to a 68KB WebP and lazy-loaded it. Fixed broken font paths to the existing Amiamie assets.
- Removed cursor-following React state updates, redundant project IDs, hidden-only previews and the icon network dependency from project rows. Cards remain visible and navigable without hover.
- Honored reduced motion in scroll/intro effects and scrolling; added keyboard menu access, Escape dismissal, focus containment and visible link focus. Narrow-screen headings/email wrapping were fixed without changing section copy.

| Build metric | Before | After |
| --- | ---: | ---: |
| Initial JavaScript | 1,451.30KB | 411.74KB |
| Initial JavaScript, gzip | 424.79KB | 140.04KB |
| Deferred 3D chunk, gzip | none | 275.75KB |
| CSS, gzip | 5.47KB | 5.08KB |
| Planet model | 18.74MB | 2.02MB |

Initial gzip JavaScript decreased 67.0%. Total JavaScript including the optional 3D chunk is only modestly smaller; the principal gain is avoiding that chunk on mobile/reduced-motion and deferring it on desktop. Vite still reports the optional 3D chunk above its 500KB warning threshold.

A fresh local browser observation before edits transferred approximately 31.52MB during initial loading, including all stock imagery. The updated desktop observation transferred approximately 2.6MB; mobile/reduced-motion approximately 0.3MB before scrolling. Exact captured values are in the adjacent evidence directory. These are localhost browser resource measurements, not production Lighthouse scores or simulated mobile-network timings. FCP also includes the original loader and is not a valid measure of when the original content became usable; no FCP improvement claim is made.

## Validation and review

- `npm run lint`, `npm run build` and `git diff --check`: pass.
- Browser assertions: exactly eight ordered cards and source/website links, all eight preview images decode, no console exceptions or HTTP failures, keyboard Tab between project links, menu Escape dismissal, desktop/mobile/reduced-motion behavior.
- Viewports: 1440px and 390px with full screenshots; additional 320px, 768px and 1024px checks show no document overflow.
- Instrumented renderer check: 30 draw calls in a one-second visible interval and zero after scrolling away from the hero.
- All eight card destinations returned HTTP 200. This confirms public reachability, not the underlying applications' end-to-end behavior.
- No test suite existed in the portfolio. Browser assertions are saved with the review evidence. No real-device, screen-reader, production-network, Lighthouse or application-backend acceptance tests were run.

Review preview: http://127.0.0.1:4173/ (local Mac only). To restart: `npm run build && npm run preview -- --host 127.0.0.1 --port 4173`.

Evidence is saved outside the Git checkout at `../evidence/`: before/after build and lint logs, browser assertions/results, before/after full-page screenshots, focused project screenshots, Unavo homepage/budget screenshots and link checks. Private repository content is not included.

## Remote status

No remote branch, PR, merge or deployment was performed. The connector's branch-write attempt returned HTTP 403, "Resource not accessible by integration". The parent is resolving legitimate repository write access or explicit authorization for the user's existing Mac GitHub login. This local branch is ready for that final step; alternate credentials were not used.
