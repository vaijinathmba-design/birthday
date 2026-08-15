# ✨ A Little Universe Made Just For XYZ ✨

A premium, highly interactive digital birthday experience crafted specifically for **XYZ**.

This is not a generic birthday template — it is an explorable digital storybook, memory museum, personality analyzer, and interactive celebration packed with animations, games, and secrets.

---

## 🌟 Features Included

1. **The Entrance (Opening Experience)**: Mysterious wax-sealed envelope with physical opening physics, stardust explosion, and smooth transition into the universe.
2. **Hero Chapter**: Staggered typography, scrapbook photo frame with washi tape, pins, and floating interactive items (drifting balloons, rotating flowers, flying butterflies, stars).
3. **Chapter 01 (The Birthday Room)**: Explorable cozy room with interactive objects (candle lighter, present note popper, memory frame zoom, balloon release, flower blooms, fairy light color changer, and vinyl player).
4. **Chapter 02 (The Memory Museum)**: Organically tilted polaroids, film strips, washi tapes, and vintage modal zooms. (Double-click any photo for a heart burst Easter egg!).
5. **Chapter 03 (Photo Timeline)**: Draggable horizontal time-traveler strip (`THEN → THEN → NOW`).
6. **Chapter 04 (Friend Message Wall)**: Interactive corkboard with colored sticky notes, post-cards, folded letters, and real-time emoji reactions.
7. **Chapter 05 (The XYZ Personality Machine)**: Interactive 6-step questionnaire with animated transitions and a custom diagnosis breakdown card with copyable badge.
8. **Chapter 06 (How Well Do You Know Yourself? Quiz)**: 5 trivia questions with instant feedback and score trophy celebration.
9. **Chapter 07 (Constellation of Compliments)**: Celestial night sky with 10 glowing connected stars that reveal cherished qualities when tapped.
10. **Chapter 08 (Tiny Things About XYZ)**: Realistic scrapbook observation cards with washi tape and cute illustrated doodles.
11. **Chapter 09 (The Birthday Fun Station)**:
    - **Reasons to Celebrate Counter**: 01 to 05 step counter with smooth cycling.
    - **Birthday Fate Generator**: 3D tarot card flip with randomized cosmic predictions.
    - **Choose Your Gift**: 4 illustrated 3D gift boxes that burst open with confetti.
    - **The Secret Drawer (Hidden Easter Egg)**: A discreet lock (`psst... 🔐`) unlocking an intimate, heartfelt letter.
12. **Chapter 10 (The Grand Finale)**:
    - Suspenseful buildup $\to$ Giant 3-tier birthday cake $\to$ "Make a Wish" candle blowout $\to$ full-screen celebration explosion (fireworks, confetti, balloons, victory fanfare) $\to$ gold foil final letter $\to$ animated heart photo collage morph.
13. **Audio Synthesizer Engine**: Built-in procedural Web Audio API synthesizer for lo-fi dreamy ambient chords and tactile sound effects (works 100% offline without external file dependencies).
14. **5+ Hidden Easter Eggs**:
    - *Easter Egg 1*: The Secret Drawer lock (`psst... 🔐`).
    - *Easter Egg 2*: Click the hero butterfly 3 times to trigger a butterfly swarm!
    - *Easter Egg 3*: Blow out or relight the cake in Chapter 01.
    - *Easter Egg 4*: Double-click any photo in the museum for a heart fountain.
    - *Easter Egg 5*: "Definitely don't click this" button with screen shake and party emoji rain.

---

## 🛠️ How to Customize Everything

All customizable information is neatly organized in **one configuration object** at the very top of [`script.js`](file:///C:/Users/vaiji/.gemini/antigravity/scratch/xyz-birthday-universe/script.js).

Open `script.js` in your editor and modify `birthdayData`:

```javascript
const birthdayData = {
  // 1. Friend's Name
  name: "XYZ", // Replace with your friend's real name or nickname

  // 2. Photos
  heroPhoto: "photos/hero.jpg",
  photos: [
    {
      image: "photos/photo1.jpg",
      caption: "That day we laughed till our stomachs hurt 😂",
      date: "August 2024",
      location: "Our Favorite Café",
      memory: "Your custom story here...",
      friendComment: "Friend's comment here..."
    },
    // Add or edit more photos...
  ],

  // 3. Timeline Milestones
  timeline: [
    { year: "THEN (2020)", era: "The Beginning", title: "Where It All Started", story: "...", image: "photos/photo1.jpg" },
    // ...
  ],

  // 4. Friend Messages & Names
  friends: [
    {
      name: "Friend's Name",
      role: "Chief Chaos Partner",
      avatar: "🌸",
      style: "note-style-pink",
      excerpt: "Short preview...",
      message: "Full personal letter..."
    },
    // ...
  ],

  // 5. Personality Machine & Quizzes
  personalityQuestions: [ ... ],
  triviaQuestions: [ ... ],

  // 6. Compliments & Reasons
  qualities: [ ... ],
  tinyThings: [ ... ],
  reasons: [ ... ],
  predictions: [ ... ],
  gifts: [ ... ],

  // 7. Heartfelt Letters
  secretMessage: "<p>Your secret emotional letter...</p>",
  finalLetter: "<p>Your grand finale letter...</p>"
};
```

---

## 📸 Adding Real Photos

1. Simply place your photos in the [`/photos`](file:///C:/Users/vaiji/.gemini/antigravity/scratch/xyz-birthday-universe/photos) directory:
   - `hero.jpg` (Main portrait for the hero universe)
   - `photo1.jpg` to `photo8.jpg` (Gallery & memory snapshots)
2. **Built-in Fallback**: If you don't have photos ready right away, the website will automatically generate beautiful pastel magazine-style placeholders so nothing ever looks broken.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any modern browser (Chrome, Safari, Edge, Firefox), or run a lightweight local static server:

```powershell
# In PowerShell / Command Prompt:
cd "C:\Users\vaiji\.gemini\antigravity\scratch\xyz-birthday-universe"
npx serve
# or
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📱 Mobile Sharing

When sharing with XYZ on WhatsApp or Instagram, send her the link. The website is mobile-first, supporting smooth vertical scrolling, swipeable galleries, large tap targets, and touch interactions.
