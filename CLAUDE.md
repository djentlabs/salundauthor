# Scott A. Lund Author Website — Project Brief

## Project Overview
Building a professional author website for **Scott A. Lund**, a debut YA fantasy author. This will replace an existing Wix template site at `salundauthor.com` (currently not live). The site owner/webmaster is Jordan (developer identity: **Djent Labs**), the author's son-in-law. The author will **not** self-manage the site — Jordan handles all updates.

All site copy lives in `CONTENT.md`. Reference it for text — don't invent placeholder content.

## Tech Stack (Decisions Already Made)
- **Framework:** Astro (multi-page, file-based routing)
- **Styling:** Tailwind CSS
- **Hosting:** Cloudflare Pages (planned, not yet set up)
- **Version Control:** Git + GitHub (username: `djentlabs`, repo will be `salundauthor`)
- **Multi-machine sync:** GitHub only. **Do not use Google Drive** — causes conflicts with `node_modules` and Git.
- **No CMS:** Author isn't self-editing, so no admin layer needed

## Development Environment
- Windows PC, Node.js and npm installed
- VS Code is the primary workspace (integrated terminal for Git Bash + Claude Code)
- GitHub account: `djentlabs`
- Project path: `C:\Dev\Djent Labs\salundauthor`

## Design References
**Scott's publisher-recommended examples he liked:**
- **Gillian Bronte Adams** (gillianbronteadams.com) — YA epic fantasy author. Warm, personal welcome tone. Books as heroes. Series grouped as branded entity. Blurbs from other authors prominent. Newsletter capture. Traditional serif feel.
- **Mikayla Bridge** (mikaylabridge.com) — Debut YA fantasy author. Modern minimal nav. Multiple prominent endorsements on homepage. Big newsletter CTA. Preorder mechanics.

**What to take from each:**
- From Gillian: personal-voice intro (fireside welcome tone), series positioning, book-cover-forward homepage, endorsement placement, "Welcome" concept as homepage opener
- From Mikayla: streamlined nav, preorder button prominence, newsletter as core conversion goal, clean visual hierarchy
- **Skip from both:** blogs, quizzes, editorial services, shops, heavy Substack/social integration — Scott won't produce ongoing content

**Aesthetic direction:**
- Closer to Gillian's warm/literary feel than Mikayla's trendy minimal
- Palette: cream/off-white background + dark navy + muted burgundy/oxblood accent (continues the literary feel from the original Wix site but more polished)
- Typography: elegant serif for headings, clean readable body font
- Tone: personal, warm, literary — a storyteller inviting you in

## Site Structure (Pages)
1. **Home** — Hero (name + tagline + hook), Welcome/intro paragraph, book covers section, newsletter signup, endorsements section (design ready even before content), brief About teaser
2. **About** — Full bio + portrait, expanded voice
3. **Books** (overview) — Both books side by side, links to individual pages
4. **Books / The Land of Boondoggle** — Individual page for Book One with cover, synopsis, preorder buttons (when links exist)
5. **Books / Heirs of The Gorilla King** — Individual page for Book Two
6. **Contact** — Contact info + social media

**Removed from earlier plan:** dedicated Press and Events pages. Reasoning: neither reference site has them as top-level nav, and empty placeholders were the weakest part of Scott's current Wix site. Endorsements live on Home instead. Events can live as a small section within Home when there are real events.

## Priority Features (from reference site analysis)

1. **Newsletter signup on homepage.** Critical for a debut author pre-launch. Design the section even before a newsletter service is chosen. Placeholder form is fine; wire up ConvertKit/Substack/Beehiiv later.
2. **Preorder CTA readiness.** Book One releases late Q4 2026. As release approaches, retailer links (Amazon, B&N, Bookshop, etc.) need prominent placement — likely a "PREORDER" button block near the hero. Design the component even before links exist.
3. **Blurb/endorsement section.** Homepage should have a section designed to display 2-3 blurbs from other authors or publications. Hide the section entirely until real blurbs arrive, but the design should be ready.
4. **Series positioning.** Refer to the two books as a series, not standalone. A working series name may emerge; for now treat *The Land of Boondoggle* as both Book One's title and the series identifier.
5. **Personal-voice welcome.** Homepage intro should be in Scott's voice (bedtime-stories origin, storyteller identity), not a dry bio. Draft welcome copy is in CONTENT.md.

## Placeholder Handling
The previous Wix site had empty placeholders that looked unprofessional. For sections without real content yet:
- **Prefer to hide the section entirely** (blurbs, events), OR
- **Design an intentional-looking state** if the section must exist (book cover placeholder should be an elegant designed graphic, not an empty gray box)

## Image Assets
All images go in `public/images/`. Expected files:
- `author-portrait.jpg` — photo of Scott
- `book-one-cover.jpg` — The Land of Boondoggle cover (placeholder until real cover is ready; AI generation prompt in CONTENT.md)
- `book-two-cover.jpg` — Heirs of The Gorilla King cover (placeholder; AI generation prompt in CONTENT.md)

## Working Style Preferences
- Jordan is **new to web development.** Explain what you're doing and why, especially design decisions.
- **Ask permission before major architectural changes** (page structure, tech additions, etc.)
- Break work into small chunks with **git commits between them** — easier to review and roll back
- **Show plan before executing** significant changes
- When making design choices, briefly explain the reasoning so Jordan learns
- Mobile-first — expect 50%+ of visitors on phones

## Recommended Build Priority Order
1. Install and configure Tailwind CSS
2. Set up base layout (`Layout.astro`) with shared header and footer components
3. Build polished **Home** page (including newsletter signup section and endorsement section design, even if hidden)
4. Push to GitHub (initial commit + remote setup)
5. Build **About** page
6. Build **Books** overview + individual book pages
7. Build **Contact**
8. Mobile responsiveness pass across all pages
9. Deploy to Cloudflare Pages
10. Point `salundauthor.com` at new site (only after everything is reviewed and approved)

**Do not touch the existing Wix site** during the build. Deploy new site to Cloudflare Pages URL for review before flipping the domain.

## Standing Instructions
- After completing any meaningful chunk of work, offer to commit to git with a clear message
- If about to create a file that already exists or make a big change, confirm first
- If Jordan seems confused about terminology, explain it plainly — no assuming background knowledge
- Prefer simple solutions over clever ones; this is a static marketing site, not a web app
