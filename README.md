# Career-Prep
Promotional video for the Career Prep Conference, built with [Remotion](https://remotion.dev).

**Rendered videos:** `videos/career-prep-promo.mp4` (1920×1080) and `videos/career-prep-promo-vertical.mp4` (1080×1920, for Reels/TikTok/Shorts). 22 seconds, 30 fps, no audio.

## Edit
- **Copy** (event name, date, venue, stats, URL): `src/content.ts` — date, venue, stats and URL are placeholders.
- **Colors / fonts / motion timing:** `src/theme.ts`
- **Scene lengths:** `SCENES` in `src/Promo.tsx`
- Scene plan: `storyboard.md`

## Run
```bash
npm install
npm run studio            # live preview
npm run render            # -> out/career-prep-promo.mp4
npm run render:vertical   # -> out/career-prep-promo-vertical.mp4
```
If Remotion can't download its headless Chrome, point it at a local one: `REMOTION_BROWSER=/path/to/chrome npm run render`.

Remotion is free for individuals and small teams; larger companies need a license (remotion.dev/license).
