# THE STEP UP — Complete Build Specification
**Version 2.0 · Tiquer Media LLC · May 2026**
**Updated: Visual Art section replaced with John's Recovery Arc + Jekyll & Hyde prompt**

---

## 0. What this document is

This is the complete build specification for **The Step Up** — a creative-prompt board for an AA meeting. "The Step Up" reads as a Saturday-night open-mic invite to outsiders; insiders catch the AA double meaning ("step up to share" / "the next step").

Single-page web app. Brief landing/intro at top. Color-coded board of 25 creative prompts across 5 categories. Each prompt links to media and asks a recovery-themed sharing question. Optional toggle lets the chair mark prompts as "claimed/shared" during a meeting.

Published by Tiquer Media LLC. Sibling aesthetic to WeHold: Source Serif 4 + Inter, iris-purple-anchored palette with five secondary category-accent colors. Not a WeHold product; should not contradict WeHold's aesthetic.

---

## 1. Project metadata

| Field | Value |
|---|---|
| **Display name** | The Step Up |
| **Tagline** | Tonight's prompts. Step up when you're ready. |
| **GitHub org** | tiquermedia |
| **Repo name** | the-step-up |
| **Live URL** | tiquermedia.github.io/the-step-up |
| **Footer publisher line** | A project published by Tiquer Media LLC |
| **Copyright** | © 2026 Jeffrey J. Cravens · Tiquer Media LLC |

---

## 2. Design system

### Colors
| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#0D1117` | Page background |
| `--color-surface` | `#161B22` | Card background |
| `--color-border` | `#21262D` | Card/section borders |
| `--color-text-primary` | `#E6EDF3` | Headlines, body |
| `--color-text-muted` | `#8B949E` | Labels, bylines |
| `--color-accent-iris` | `#7C5CFC` | Primary brand accent |
| `--color-music` | `#22D3EE` | Music category |
| `--color-poetry` | `#A78BFA` | Poetry/Writing category |
| `--color-art` | `#F59E0B` | Visual Art category |
| `--color-dance` | `#34D399` | Dance category |
| `--color-film` | `#F87171` | Film category |

### Typography
- **Display/headlines:** Source Serif 4 (Google Fonts), `font-weight: 300` for elegance
- **Body/UI:** Inter (Google Fonts)
- **Prompt question text:** Source Serif 4, italic, ~18px
- **Category labels:** Inter, uppercase, tracking-widest, 11px

### Card design
- Dark surface `#161B22` with 1px border `#21262D`
- Top border 3px in category accent color
- Subtle hover: `transform: translateY(-2px)`, border brightens
- "Claimed" state: overlay dims card to 40% opacity, checkmark appears

---

## 3. Page architecture

### Section 1 — Hero / Intro
- Full-width dark header
- Site name in Source Serif 4 display, large
- Tagline: *"Tonight's prompts. Step up when you're ready."*
- Brief intro paragraph (see copy below)
- Small instruction line: *"Choose a card. Share when you're ready. Mark it claimed when you're done."*
- Optional: "Reset Board" button for the chair (clears all claimed states)

### Section 2 — Prompt Board
- CSS grid, responsive: 1 col mobile → 2 col tablet → 3 col desktop
- Prompts grouped by category with sticky category headers
- Each category: colored glyph icon + category name label

### Section 3 — Visual Art: John's Recovery Arc
- SPECIAL DISPLAY — not a standard card grid
- Full-width section with dark parchment-like background: `#0A0806`
- Section headline: **"Face it. Trace it. Replace it."**
- Attribution line: *"An original digital art sequence by a member of this group"*
- Subhead: *"John created these eight images using AI — one prompt at a time — to trace his own journey through addiction into recovery. He shared them with us to open a conversation."*
- Layout: **single vertical flowing column**, centered, images stacked with generous spacing
- Each image: full-width (max ~600px), with label and prompt subtly displayed
- After the 8 images: **Jekyll & Hyde Shadow** as a standalone prompt card (see below)

### Section 4 — Footer
```
© 2026 Jeffrey J. Cravens · Tiquer Media LLC
A project published by Tiquer Media LLC
[This is a creative sharing tool for use in recovery meeting settings.
It is not affiliated with Alcoholics Anonymous or any AA entity.]
```

---

## 4. Intro copy

```
The Step Up is a creative prompt board for this meeting.
Each card points to a piece of art — a song, a poem, a painting, a film, a dance —
and asks one question about your recovery.

You don't have to analyze it. You don't have to have the right answer.
You just have to be willing to step up and share what it brought up.

Pick a card that pulls at you. If nothing pulls, wait. Something will.
```

---

## 5. The 25 prompt cards

### MUSIC (cyan accent — `#22D3EE`)
*Glyph: music note SVG*

**Card M1 — Amazing Grace**
- Media: https://www.youtube.com/watch?v=CDdvReNKKuk (Aretha Franklin, live)
- Prompt: *"This song has been sung at bedsides, in prisons, at funerals, and at the first meeting someone ever walked into sober. When did grace show up somewhere you didn't expect it?"*
- AA share question: *Where have you found grace in your recovery?*

**Card M2 — What a Wonderful World**
- Media: https://www.youtube.com/watch?v=CWzrABouyeE (Louis Armstrong)
- Prompt: *"Louis Armstrong recorded this in 1967 during a brutal year for America. What do you notice now — in the world, in your life — that you couldn't see before you got sober?"*
- AA share question: *What have you been able to see or feel in recovery that was invisible before?*

**Card M3 — Three Little Birds**
- Media: https://www.youtube.com/watch?v=zaGUr6wzyT8 (Bob Marley)
- Prompt: *"'Don't worry about a thing.' Is that acceptance or denial? What's the difference for you in recovery?"*
- AA share question: *How do you tell the difference between acceptance and avoidance?*

**Card M4 — Lean on Me**
- Media: https://www.youtube.com/watch?v=fOZ-MySzAac (Bill Withers)
- Prompt: *"Bill Withers wrote this about neighbors in a small town. Who have you leaned on in recovery — and who has leaned on you?"*
- AA share question: *Who are the people in your recovery community you couldn't do without?*

**Card M5 — Beautiful Day**
- Media: https://www.youtube.com/watch?v=co6WMzDOh1o (U2)
- Prompt: *"Bono wrote this about a man who has lost everything but finds joy anyway. What does a 'beautiful day' look like for you in sobriety?"*
- AA share question: *What does an ordinary good day look like now that it didn't before?*

**Card M6 — Take Me Home, Country Roads**
- Media: https://www.youtube.com/watch?v=1vrEljMfXYo (John Denver)
- Prompt: *"Where is 'home' for you — not a place, but a feeling? When do you feel most at home in your life today?"*
- AA share question: *What does it feel like to belong somewhere — or to yourself — in recovery?*

**Card M7 — Say You Won't Let Go**
- Media: https://www.youtube.com/watch?v=0yW7w8F2TVA (James Arthur)
- Prompt: *"A love song about holding on. What have you held onto in recovery when everything in you wanted to let go?"*
- AA share question: *What keeps you coming back, even on the hard days?*

---

### POETRY / WRITING (violet accent — `#A78BFA`)
*Glyph: open book / pen SVG*

**Card P1 — "won't you celebrate with me" — Lucille Clifton**
- Media: https://www.poetryfoundation.org/poems/50974/wont-you-celebrate-with-me
- Prompt: *"Clifton asks us to celebrate surviving — surviving ourselves, surviving the world. What have you made out of nothing? What have you shaped into something that could shelter you?"*
- AA share question: *What has recovery helped you survive that you didn't know you could?*

**Card P2 — "The Summer Day" — Mary Oliver**
- Media: https://www.loc.gov/programs/poetry-and-literature/poet-laureate/poet-laureate-projects/poetry-180/all-poems/item/poetry-180-133/the-summer-day/
- Prompt: *"'What is it you plan to do with your one wild and precious life?' What does your answer to that question look like now versus before?"*
- AA share question: *What do you want to do with the time you've been given back?*

**Card P3 — "Still I Rise" — Maya Angelou**
- Media: https://www.poetryfoundation.org/poems/46446/still-i-rise
- Prompt: *"Angelou wrote this out of a history of oppression and survival. What have you risen from? What tried to keep you down?"*
- AA share question: *What have you had to rise above to get where you are in recovery?*

**Card P4 — Rumi — "The Guest House"**
- Media: https://www.poetryfoundation.org/poems/149981/the-guest-house
- Prompt: *"Rumi says each emotion is a visitor — even depression, meanness, and malice come as guides. What uninvited guest showed up in your life that ended up teaching you something?"*
- AA share question: *What difficult emotion have you had to sit with in recovery that turned out to be a teacher?*

**Card P5 — "The Road Not Taken" — Robert Frost**
- Media: https://www.poetryfoundation.org/poems/44272/the-road-not-taken
- Prompt: *"Most people think this poem is about bold choices. But Frost's narrator admits the paths looked about the same — and that the story we tell later is what we make of it. What story are you telling about how you got here?"*
- AA share question: *How do you make meaning out of the path that brought you into recovery?*

---

### VISUAL ART (amber accent — `#F59E0B`)
*Glyph: eye / frame SVG*

**Standard card VA1 — Jekyll & Hyde Shadow**
*(This card lives as a standard prompt card in the Visual Art category grid)*

- Image: `images/jekyll-hyde.jpg` (pen-and-ink illustration: a Victorian gentleman in top hat, coat; his shadow on the wall behind him is a monstrous creature — claws, hunched, wild)
- Artist credit: *"you cannot hyde your shadow" — digital ink illustration, ellaWilliams (DeviantArt)*
- Prompt: *"The shadow on the wall is part of the same person casting it. It can't be separated — only acknowledged. What is the shadow side of you that recovery has asked you to face?"*
- AA share question: *What part of yourself did you try to keep hidden — from others or from yourself — before you got sober?*

> **Note to Claude Code:** The standard Visual Art grid has only this one card (VA1). The full 8-image John's Recovery Arc collection is rendered as a SEPARATE special section (see Section 3 above and Section 6 below). It is not a card — it is a featured gallery.

---

### DANCE (green accent — `#34D399`)
*Glyph: figure in motion SVG*

**Card D1 — Mia Michaels "Addiction" — SYTYCD**
- Media: https://www.youtube.com/watch?v=i-IH7-DAfIM
- Prompt: *"This contemporary dance piece was choreographed about addiction — the pull, the surrender, the violence of it. Watch it and share: what does your body remember about what active addiction felt like?"*
- AA share question: *If your body could tell the story of your addiction — not in words — what would it look like?*

**Card D2 — Alvin Ailey — "Revelations"**
- Media: https://www.youtube.com/watch?v=cT7rouGfwrc
- Prompt: *"Revelations is about the African American experience of suffering, endurance, and joy — the whole arc in one piece. What's the arc of your own story? Where are you in it?"*
- AA share question: *Where are you in your own arc — still in the struggle, or in the joy, or somewhere between?*

**Card D3 — Misty Copeland — Swan Lake**
- Media: https://www.youtube.com/watch?v=u4dMxAiENJY
- Prompt: *"Misty Copeland was told she started too late, her body was wrong, she'd never make it. She became a principal dancer at ABT. What has recovery proved possible that you were told — or told yourself — couldn't happen?"*
- AA share question: *What have you done in recovery that you didn't think was possible for someone like you?*

---

### FILM (coral accent — `#F87171`)
*Glyph: film frame SVG*

**Card F1 — The Shawshank Redemption**
- Media: https://www.youtube.com/watch?v=6hB3S9bIaco (trailer)
- Prompt: *"'Get busy living, or get busy dying.' Andy never stopped imagining a life beyond the walls. What kept you imagining a life beyond the walls of your addiction?"*
- AA share question: *What kept you holding onto hope when hope seemed crazy?*

**Card F2 — It's a Wonderful Life**
- Media: https://www.youtube.com/watch?v=LMFvevxVlSw (trailer)
- Prompt: *"George Bailey spends the whole film believing his life doesn't matter — until he sees what the world would look like without him. Who or what in your life would look different without you?"*
- AA share question: *What or who has your sobriety made possible that wouldn't exist otherwise?*

**Card F3 — Dead Poets Society**
- Media: https://www.youtube.com/watch?v=vdB-8eLEW8g (O Captain clip)
- Prompt: *"Keating tells his students to seize the day because we are all food for worms. Not despair — urgency. What does 'carpe diem' mean to you in recovery?"*
- AA share question: *What are you no longer willing to waste time on — and what do you want more of?*

**Card F4 — A Star Is Born (2018)**
- Media: https://www.youtube.com/watch?v=nSbzyEJ8X9E (trailer)
- Prompt: *"This film doesn't shy away from what addiction does to someone who has everything the world thinks should make them happy. What did addiction take from you that the world couldn't see it taking?"*
- AA share question: *What did you lose to addiction that wasn't visible from the outside?*

**Card F5 — Andrea Gibson — "Come See Me in the Good Light" (documentary)**
- Media: https://www.youtube.com/watch?v=BqTKkqhK1Bc
- Prompt: *"Andrea Gibson has written about surviving what should have killed them — with radical openness. What would you say to yourself at your worst moment, if you could go back?"*
- AA share question: *What would you tell yourself at your lowest point, now that you're here?*

---

## 6. SPECIAL SECTION: John's Recovery Arc

**Section headline:** Face it. Trace it. Replace it.

**Section intro text:**
> *A member of this group created these eight images using AI — one emotional state at a time — to trace his own journey through addiction and into recovery. He used the prompts below exactly as he texted them, and then he shared the images with us. We thought you might want to share what they bring up.*

**Layout:** Single vertical column, centered. Each image displayed at full width (max 560px), with a phase label above and a sharing prompt below. Generous vertical spacing between images (~80px). Subtle horizontal rule between each image.

**Background:** `#0A0806` (near-black, warm undertone — slightly different from the main page background to signal this is a distinct space)

**Image filenames** (to be uploaded to `/images/johns-arc/` in the repo):
```
01-loneliness.jpg
02-despair.jpg
03-tortured-guilt.jpg
04-anger.jpg
05-hopelessness.jpg
06-hope-higher-power.jpg
07-acceptance.jpg
08-surrender-serenity.jpg
```

**IMAGE UPLOAD NOTE FOR CLAUDE CODE:**
> Jeff will upload these 8 images manually to the repo in the `/images/johns-arc/` folder. Build the HTML/CSS structure to display them in order. Use the filenames above. If images are not yet uploaded, display styled placeholder boxes with the phase label so the page renders cleanly. Do NOT block the build on missing images.

---

### The 8 images in sequence:

---

**Image 1 — Loneliness**
*John's prompt: "Make an abstract art picture of a dark interpretation of loneliness"*

Label: **LONELINESS**
Sharing prompt: *"A figure alone in the dark, surrounded by dripping shadows. When did loneliness become a companion you couldn't shake? What did being alone with yourself feel like at your worst?"*

---

**Image 2 — Despair**
*John's prompt: "Now do one for despair"*

Label: **DESPAIR**
Sharing prompt: *"The darkness here has a different color — orange and heat, like something burning. Despair isn't quiet; sometimes it's fire. What did despair feel like in your body — not just your mind?"*

---

**Image 3 — Tortured Guilt**
*John's prompt: "Now do one for tortured guilt"*

Label: **TORTURED GUILT**
Sharing prompt: *"Red. Chains. The figure is tangled in itself. Guilt can chain us to what we did, or it can move us toward making things right. Where has guilt lived in your recovery — as a cage or as a compass?"*

---

**Image 4 — Anger**
*John's prompt: "Now introduce anger into it"*

Label: **ANGER**
Sharing prompt: *"The scream. Chains breaking loose. Anger is one of the few emotions that feels like power — but in addiction, it was usually a cover. What was underneath your anger? What was it protecting?"*

---

**Image 5 — Hopelessness**
*John's prompt: "Now go back to hopelessness"*

Label: **HOPELESSNESS**
Sharing prompt: *"After the fire and the scream — the quiet. This one feels like collapse, like nothing left to fight with. Have you been in this place? What does hopelessness feel like — and what did it take to take the next step anyway?"*

---

**Image 6 — Hope & Help from a Higher Power**
*John's prompt: "Now introduce hope and help from a higher power"*

Label: **HOPE**
Sharing prompt: *"The first real light. Still dark around the edges — but something breaking through from above. Where did hope first crack through for you? Was it something someone said? Something you felt? Something you couldn't explain?"*

---

**Image 7 — Acceptance**
*John's prompt: "Now introduce acceptance"*

Label: **ACCEPTANCE**
Sharing prompt: *"The figure is sitting up now. Face turned toward the light. Not rescued — but open. What did acceptance feel like when it finally came? What did you have to let go of to get there?"*

---

**Image 8 — Surrender & Serenity**
*John's prompt: "And now surrender and serenity"*

Label: **SURRENDER & SERENITY**
Sharing prompt: *"Lotus. Full light. Still in the same tangled world — but settled inside it. Not escape. Presence. What does serenity mean to you today? When do you feel it? What does it feel like in your body when you're in it?"*

---

### Section closing line (below Image 8):

> *"Face it, trace it, replace it."*
> *— John, member of this group*

---

## 7. Jekyll & Hyde prompt card (Visual Art grid)

This is a single standard prompt card in the Visual Art category — rendered in the main card grid like all other cards.

- **Image filename:** `images/jekyll-hyde.jpg`
- **Title on card:** You Cannot Hyde Your Shadow
- **Artist credit:** *After "you cannot hyde your shadow" — ellaWilliams*
- **Prompt text:** *"The shadow on the wall is part of the same person casting it. It can't be separated — only acknowledged. What is the shadow side of you that recovery has asked you to face?"*
- **AA share question:** *What part of yourself did you try to keep hidden — from others or from yourself — before you got sober?*

---

## 8. Image files required

Place all images in `/images/` at the repo root.

| File | Description |
|---|---|
| `images/jekyll-hyde.jpg` | Pen-and-ink illustration of Victorian gentleman with monster shadow |
| `images/johns-arc/01-loneliness.jpg` | Recovery arc — Loneliness |
| `images/johns-arc/02-despair.jpg` | Recovery arc — Despair |
| `images/johns-arc/03-tortured-guilt.jpg` | Recovery arc — Tortured Guilt |
| `images/johns-arc/04-anger.jpg` | Recovery arc — Anger |
| `images/johns-arc/05-hopelessness.jpg` | Recovery arc — Hopelessness |
| `images/johns-arc/06-hope-higher-power.jpg` | Recovery arc — Hope |
| `images/johns-arc/07-acceptance.jpg` | Recovery arc — Acceptance |
| `images/johns-arc/08-surrender-serenity.jpg` | Recovery arc — Surrender & Serenity |

**Jeff will upload all of these manually after the initial build.**
**Claude Code should build the page with placeholder containers if images are missing.**

---

## 9. Technical requirements

- **Stack:** Vanilla HTML + CSS + minimal vanilla JS. No React, no build step, no npm. The page should open by double-clicking `index.html` on any computer.
- **Fonts:** Google Fonts CDN — Source Serif 4 + Inter
- **CSS:** Single stylesheet `style.css`
- **JS:** Single file `main.js` — handles only: (a) claim/release toggle on cards, (b) Reset Board button
- **Responsiveness:** Mobile-first. 1 column → 2 → 3 at appropriate breakpoints
- **Accessibility:** Semantic HTML, aria-labels on interactive elements, sufficient color contrast
- **No external dependencies** beyond Google Fonts CDN
- **No backend, no database** — claimed state lives only in localStorage for the session

---

## 10. Repo + deployment instructions for Claude Code

1. Create GitHub repo `tiquermedia/the-step-up` (public)
2. Build the site in the local folder
3. Push all code to `main` branch
4. Enable GitHub Pages → Source: `main`, root `/`
5. Return the live URL: `https://tiquermedia.github.io/the-step-up`

---

## 11. Prompt to paste into Claude Code

Copy and paste the following exactly into Claude Code to kick off the build:

```
Read THE-STEP-UP-SPEC-V2.md in this folder. Build the complete site described. 

Key things to know:
- Vanilla HTML/CSS/JS only. No frameworks, no build tools.
- The site has a main prompt board (25 cards across 5 categories) AND a special full-width gallery section for "John's Recovery Arc" (8 images in a flowing vertical column with labels and sharing prompts).
- Images are listed in the spec but Jeff will upload them manually. Build placeholder containers with styled boxes if images are missing — do NOT block the build.
- Push everything to a new GitHub repo at tiquermedia/the-step-up and enable GitHub Pages.
- Do not ask me questions. Make reasonable decisions and build.
```

---

*End of specification — Version 2.0*
*The Step Up · Tiquer Media LLC · May 2026*
