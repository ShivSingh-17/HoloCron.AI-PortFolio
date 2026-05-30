# Product Requirements Document (PRD)

## Project: Cinematic 3D Star Wars Portfolio
**Design Language:** Awwwards-winning, premium WebGL aesthetic. Deep dark space (`#050505`), cinematic film grain, massive bold typography, and fluid motion. Accents of Lightsaber Blue (`#007BFF`) and Sith Red (`#D2042D`).

---

## 1. Technical Stack
* **Framework:** Next.js 14 (App Router) + TypeScript
* **Styling & Effects:** Tailwind CSS, CSS Film Grain/Noise overlays
* **Animation & Interactions:** Framer Motion (Scroll reveals, layout transitions)
* **3D Rendering (Active Background):** Three.js + React Three Fiber (R3F) + Drei
* **AI Integration:** Vercel AI SDK + Google Gemini API (Free Tier)

## 2. Global UI/UX Requirements (The "Tenbinlabs" Vibe)
* **Custom Fluid Cursor:** Hide the default browser cursor. Implement a custom cursor using Framer Motion that leaves a smooth, glowing trail (e.g., a subtle blue or red orb that scales up when hovering over interactive elements).
* **Active 3D Background:** The global background must be an R3F `<Canvas>`. It should feature a moving, depth-rich starfield AND a central, slowly rotating abstract 3D object (wireframe sphere or low-poly geometry) that reacts slightly to mouse coordinates.
* **Cinematic Overlay:** Add a fixed CSS layer with a subtle noise/film grain to give the entire site a premium, textured look.
* **Typography:** Oversized, tracking-tight, sans-serif fonts for headings (like Inter or Space Grotesk). Stark white or off-white against the dark background.

## 3. Core Page Sections (All content must be visible, not hidden)

### A. Hero Section (Two-Column Asymmetrical)
* **Left Side:** Massive typography stating "Hi, I'm Shiv Prakash Singh", subtext "AI Engineer & Full-Stack Developer". Followed by glowing social icons (GitHub, LinkedIn, Email) and a prominent "Contact" button.
* **Right Side:** Render `/hero-portrait.png`. Wrap the image in a `react-parallax-tilt` component so it moves dynamically with the cursor. Add a subtle glassmorphic glow/shadow behind it to separate it from the 3D background.

### B. The Arsenal (Skills)
* Map all skills from the provided `resume.md`.
* Display them in a modern "Bento Box" grid layout. Use glassmorphism (translucent dark panels with a slight white/gray border) that illuminates when hovered.

### C. Galactic Timeline (Experience)
* Extract professional experience from `resume.md`.
* Create a sleek vertical timeline. Use Framer Motion `whileInView` so each timeline node (Edunet, CAMai, Simplifying Skills) fades in and slides up as the user scrolls down.

### D. The Archives (Projects)
* Hardcode 5 massive, visually striking cards for the top projects.
* Include a glowing "View on GitHub" button (`target="_blank"`) on each. 

## 4. AI Holocron Chatbot (Widget)
* **Trigger:** A sleek Floating Action Button (FAB) at the bottom right.
* **UI:** A dark, frosted-glass chat overlay. Must include 3 pre-filled suggestion chips (e.g., "Summarize your AI skills").
* **Backend:** Next.js API route (`app/api/chat/route.ts`).
* **Strict Constraint:** Ensure the template literal for the `systemPrompt` uses standard backticks without invalid Unicode escape sequences (NO backslashes before the string). Feed the full `resume.md` context into the prompt to ensure the AI acts as a professional guide.