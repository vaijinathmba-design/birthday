/**
 * ============================================================================
 * A LITTLE UNIVERSE MADE JUST FOR XYZ ✨
 * Interactive Birthday Experience Script & Data Engine
 * ============================================================================
 * 
 * CUSTOMIZATION GUIDE:
 * You can easily personalize this entire experience by editing the 
 * `birthdayData` object below!
 */

const birthdayData = {
  // 1. Core Profile
  name: "XYZ",
  subtitle: "You weren't supposed to find this website… but since you're here, you might as well explore. 👀",
  heroPhoto: "photos/hero.jpg",

  // 2. Memory Museum & Timeline Photos
  photos: [
    {
      image: "photos/photo1.jpg",
      caption: "That day we laughed till our stomachs hurt 😂",
      date: "August 2024",
      location: "Our Favorite Café",
      memory: "We sat down for 'just 20 minutes' and ended up talking about aliens, past lives, and ordering three rounds of dessert.",
      friendComment: "Core memory unlocked! We were completely out of our minds 😂"
    },
    {
      image: "photos/photo2.jpg",
      caption: "Why were we like this? 💀",
      date: "November 2023",
      location: "Road Trip",
      memory: "Took the wrong turn 4 times, played the same 3 songs on repeat, and somehow it was the best trip of the entire year.",
      friendComment: "Still can't believe you convinced us that shortcut was real."
    },
    {
      image: "photos/photo3.jpg",
      caption: "100% Main Character Energy 👑",
      date: "May 2024",
      location: "Sunset Point",
      memory: "The lighting was too good not to stop the entire world for a 15-minute photoshoot.",
      friendComment: "Yes, this photo single-handedly broke our group chat."
    },
    {
      image: "photos/photo4.jpg",
      caption: "The chaotic midnight food run 🍕",
      date: "January 2024",
      location: "Downtown",
      memory: "It was 1:30 AM, freezing cold, and you suddenly announced that pizza was a medical necessity.",
      friendComment: "You were not wrong though, the pizza was legendary."
    },
    {
      image: "photos/photo5.jpg",
      caption: "We definitely thought this was a good idea 🕶️",
      date: "September 2023",
      location: "Beach Weekend",
      memory: "Attempted to take an aesthetic candid photo, got hit by a rogue wave 2 seconds later.",
      friendComment: "The scream was audible from 2 miles away."
    },
    {
      image: "photos/photo6.jpg",
      caption: "Golden hour and golden memories ✨",
      date: "April 2024",
      location: "Rooftop Party",
      memory: "When the vibes were immaculate, the playlist was perfect, and nobody wanted the night to end.",
      friendComment: "Look at that genuine smile! 🥹"
    }
  ],

  // 3. Chronological Timeline Milestones
  timeline: [
    {
      year: "THEN (2020)",
      era: "The Beginning",
      title: "Where It All Started",
      story: "First awkward conversations, discovering mutual weirdness, and instantly realizing this friendship was forever.",
      image: "photos/photo1.jpg"
    },
    {
      year: "THEN (2022)",
      era: "The Chaos Era",
      title: "Unstoppable Duo",
      story: "Surviving college/work stress, 3 AM phone calls, and planning 50 trips we still haven't taken.",
      image: "photos/photo2.jpg"
    },
    {
      year: "THEN (2024)",
      era: "The Glow Up",
      title: "Peak Main Character",
      story: "Entering your era of absolute confidence, undeniable style, and taking over every room you walk into.",
      image: "photos/photo3.jpg"
    },
    {
      year: "NOW (2026)",
      era: "Today & Beyond",
      title: "Another Glorious Chapter",
      story: "Celebrating the incredible human you have grown into. The best is truly yet to come!",
      image: "photos/hero.jpg"
    }
  ],

  // 4. Friend Messages on the Wall
  friends: [
    {
      name: "XYZ's Bestie 01",
      role: "Chief Chaos Partner",
      avatar: "🌸",
      style: "note-style-pink",
      excerpt: "Happy Birthday to the human sunshine! You make every single room 10x brighter.",
      message: "Happy Birthday XYZ! I genuinely cannot imagine my life without your chaotic texts, your unmatched advice, and your ability to turn an ordinary Tuesday into an unforgettable memory. Here's to 100 more adventures together! 💖",
      reactions: { "❤️": 14, "✨": 9, "😂": 12, "🥹": 8 }
    },
    {
      name: "XYZ's Friend 02",
      role: "Partner in Crime",
      avatar: "🍕",
      style: "note-style-yellow",
      excerpt: "Please never stop ordering extra food 'just to try it' 😂",
      message: "To the only person I trust with the aux cord and food choices: Happy Birthday! Keep being your unapologetically loud, hilarious, beautiful self. Hope you get spoiled rotten today! 🎂🥂",
      reactions: { "❤️": 10, "✨": 5, "😂": 18, "🥹": 4 }
    },
    {
      name: "XYZ's Friend 03",
      role: "Soul Sister",
      avatar: "🦋",
      style: "note-style-lavender",
      excerpt: "You deserve all the love, happiness, and dessert in the world today 🥹",
      message: "Dearest XYZ, you have a heart of pure gold. Thank you for listening without judging, cheering without hesitation, and always showing up. May this year bring you everything your sweet heart desires! ✨",
      reactions: { "❤️": 16, "✨": 11, "😂": 3, "🥹": 15 }
    },
    {
      name: "XYZ's Friend 04",
      role: "Overthinking Companion",
      avatar: "☕",
      style: "note-style-mint",
      excerpt: "Happy Birthday! Today is the ONE day you're not allowed to overthink anything.",
      message: "Happy Birthday legend! Stop stressing, eat 3 slices of cake, and let everyone treat you like the royalty you are. So proud of you always! 👑",
      reactions: { "❤️": 12, "✨": 7, "😂": 16, "🥹": 6 }
    },
    {
      name: "XYZ's Friend 05",
      role: "Hype Squad Captain",
      avatar: "👑",
      style: "note-style-peach",
      excerpt: "The world is simply more fun with you around! 🥳",
      message: "XYZ, your energy is infectious! Never lose that spark that makes you so uniquely YOU. Have the happiest, wildest birthday ever! 🎉✨",
      reactions: { "❤️": 9, "✨": 13, "😂": 8, "🥹": 7 }
    },
    {
      name: "XYZ's Friend 06",
      role: "Emergency Contact",
      avatar: "💌",
      style: "note-style-blue",
      excerpt: "Sending the biggest hug across the cosmos! ♡",
      message: "Happy Birthday to one of the most genuine, caring, and funny souls on this planet. May your year be filled with dream trips, good coffee, and endless joy! 🌷",
      reactions: { "❤️": 15, "✨": 10, "😂": 4, "🥹": 11 }
    }
  ],

  // 5. Personality Machine Questions
  personalityQuestions: [
    {
      prompt: "Your ideal chaotic weekend looks like...",
      options: [
        { text: "Sleeping for 14 hours straight & rejecting all calls", trait: "overthinker" },
        { text: "Going out, making 6 new best friends in the bathroom line", trait: "main_character" },
        { text: "A spontaneous road trip with zero itinerary", trait: "plot_twist" },
        { text: "Cooking a 5-course meal and binge-watching comfort shows", trait: "sunshine" }
      ]
    },
    {
      prompt: "Someone in the group chat texts: 'We need to talk...'",
      options: [
        { text: "Immediate full-blown panic: 'What did I do in 2019?'", trait: "overthinker" },
        { text: "Calling them 8 times in 2 seconds with zero hesitation", trait: "main_character" },
        { text: "Sending a meme and ghosting for 45 minutes", trait: "plot_twist" },
        { text: "'Are you okay? Do you need tea/snacks?'", trait: "sunshine" }
      ]
    },
    {
      prompt: "You're getting ready for an event. How long do you take?",
      options: [
        { text: "2 hours, 4 outfit changes, and a mini existential crisis", trait: "main_character" },
        { text: "Ready in 10 minutes but then sit on the bed scrolling for 40 min", trait: "overthinker" },
        { text: "Change into something completely different as I walk out the door", trait: "plot_twist" },
        { text: "Whatever feels coziest, plus perfume and lip gloss", trait: "sunshine" }
      ]
    },
    {
      prompt: "Your relationship with food & snacking:",
      options: [
        { text: "'I'm not hungry' *proceeds to eat half your fries*", trait: "plot_twist" },
        { text: "Food is my primary love language and emotional anchor", trait: "sunshine" },
        { text: "Must take 14 aesthetic photos before anyone touches a fork", trait: "main_character" },
        { text: "Spends 45 minutes reading the menu only to order the usual", trait: "overthinker" }
      ]
    },
    {
      prompt: "When friends need cheering up, you usually:",
      options: [
        { text: "Show up with their favorite food and endless hugs", trait: "sunshine" },
        { text: "Write an inspiring 10-paragraph essay on why they're iconic", trait: "main_character" },
        { text: "Distract them with unhinged humor and wild stories", trait: "plot_twist" },
        { text: "Offer a deeply structured 4-step problem solving plan", trait: "overthinker" }
      ]
    },
    {
      prompt: "Your official secret superpower:",
      options: [
        { text: "Making everyone feel like family within 5 minutes", trait: "sunshine" },
        { text: "Turning any boring situation into a cinematic moment", trait: "main_character" },
        { text: "Unpredictable comedic timing that saves the day", trait: "plot_twist" },
        { text: "Remembering tiny details everyone else forgot", trait: "overthinker" }
      ]
    }
  ],

  // 6. How Well Do You Know Yourself? Trivia
  triviaQuestions: [
    {
      prompt: "What is XYZ's absolute ultimate comfort food?",
      options: ["Pizza / Pasta 🍕", "Ice Cream & Waffles 🍨", "Spicy Street Food 🌶️", "Anything someone else pays for 😂"],
      correct: 0,
      note: "Nothing beats a warm cheesy slice on a cozy evening!"
    },
    {
      prompt: "What is XYZ's most frequently used emoji in chats?",
      options: ["😭 (The dramatic sob)", "✨ (The aesthetic sparkle)", "😂 (The wheeze)", "💅 (The main character)"],
      correct: 0,
      note: "Accurate! Used for laughter, shock, sadness, and literally everything else."
    },
    {
      prompt: "When XYZ says 'I'll be ready in 5 minutes', it actually means:",
      options: ["Still in a towel choosing playlist (25 min)", "Already at the door waiting", "Taking a quick nap", "Has not even started ironed clothes"],
      correct: 0,
      note: "Standard universal protocol for XYZ's timeline."
    },
    {
      prompt: "What is XYZ's greatest vulnerability?",
      options: ["Saying 'no' to cute dogs 🐶", "Late night impulse shopping 🛍️", "Overthinking text message tones 💭", "All of the above! 🎯"],
      correct: 3,
      note: "100% true across all dimensions of reality."
    },
    {
      prompt: "What makes XYZ genuinely the happiest?",
      options: ["Deep midnight talks with favorite people 🌙", "Finishing a long day and getting cozy 🛏️", "Traveling to new places ✈️", "All the above combined with good snacks 💖"],
      correct: 3,
      note: "You truly know yourself suspiciously well! 🕵️‍♀️✨"
    }
  ],

  // 7. Things We Love About You (Constellation Stars)
  qualities: [
    { title: "Kindness", icon: "🌸", desc: "You have a rare, natural way of making everyone around you feel valued and safe." },
    { title: "Chaos", icon: "⚡", desc: "Your spontaneous ideas and wild energy turn every normal day into an unforgettable adventure." },
    { title: "Loyalty", icon: "🛡️", desc: "You fiercely protect and support the people you love. Having you in our corner is a superpower." },
    { title: "Humor", icon: "😂", desc: "Your witty remarks and infectious giggles can cure the worst mood in seconds." },
    { title: "Intelligence", icon: "🧠", desc: "Deeply thoughtful, emotionally perceptive, and always giving the most profound perspectives." },
    { title: "Energy", icon: "☀️", desc: "You bring pure warmth and electricity into every space you step into." },
    { title: "Creativity", icon: "🎨", desc: "You see the magic, beauty, and humor in things that most people overlook." },
    { title: "Smile", icon: "✨", desc: "Your genuine, crinkly-eyed smile is genuinely one of the sweetest sights on earth." },
    { title: "Friendship", icon: "💌", desc: "The kind of friend who remembers the small details and shows up when it matters most." },
    { title: "Your Weirdness", icon: "🦄", desc: "Never lose the unhinged quirks that make you so uniquely, delightfully YOU!" }
  ],

  // 8. Tiny Things About XYZ (Scrapbook Notes)
  tinyThings: [
    {
      tag: "YOU ALWAYS...",
      text: "Say you're not hungry and then casually steal 50% of everyone else's fries.",
      doodle: "🍟✨"
    },
    {
      tag: "YOU HAVE...",
      text: "An Olympic-level talent for overthinking simple 3-word text messages.",
      doodle: "🧠💭"
    },
    {
      tag: "YOU SOMEHOW...",
      text: "Turn a simple 10-minute grocery run into a chaotic 2-hour comedy show.",
      doodle: "🛒😂"
    },
    {
      tag: "YOUR SUPERPOWER:",
      text: "Making people feel comfortable and like old friends within 5 minutes of meeting you.",
      doodle: "💖🌟"
    },
    {
      tag: "OFFICIAL WEAKNESS:",
      text: "Buying cute stationary / clothes because 'the aesthetic was calling my soul'.",
      doodle: "🛍️💅"
    },
    {
      tag: "CORE TRUTH:",
      text: "You care ten times more than you admit, and that's what makes you so special.",
      doodle: "🥺♡"
    }
  ],

  // 9. Reasons to Celebrate
  reasons: [
    {
      counter: "01",
      headline: "Because you make people laugh effortlessly",
      detail: "Even on the most chaotic days, your humor and comedic timing turn stressful moments into core memories."
    },
    {
      counter: "02",
      headline: "Because you care more than you admit",
      detail: "Beneath the jokes and memes, you have one of the biggest, softest hearts in the entire world."
    },
    {
      counter: "03",
      headline: "Because you make ordinary days better",
      detail: "Just having you present turns boring errands, long car rides, and quiet dinners into peak entertainment."
    },
    {
      counter: "04",
      headline: "Because you're impossible to replace",
      detail: "There isn't a single person in the cosmos with your exact blend of warmth, chaos, and charm."
    },
    {
      counter: "05",
      headline: "Because you are simply, beautifully YOU",
      detail: "Here's to celebrating everything you were, everything you are, and everything you will become!"
    }
  ],

  // 10. Birthday Fate Predictions
  predictions: [
    {
      icon: "🍕",
      title: "THE DELICIOUS BLESSING",
      text: "You will receive an unreasonable amount of delicious treats today, and zero calories will count."
    },
    {
      icon: "👑",
      title: "THE ROYAL PROCLAMATION",
      text: "Your main character energy will reach an unprecedented 99.8% today. Act accordingly."
    },
    {
      icon: "✈️",
      title: "THE ADVENTURE ORACLE",
      text: "This upcoming year contains at least 3 spontaneous trips that will change your life."
    },
    {
      icon: "🎁",
      title: "THE COSMIC GIFT",
      text: "A secret wish you made months ago will quietly come true before this year ends."
    },
    {
      icon: "😂",
      title: "THE CHAOS FORECAST",
      text: "Someone will attempt to roast you today and fail miserably because you are simply too iconic."
    },
    {
      icon: "✨",
      title: "THE GLOW-UP PROPHECY",
      text: "Your confidence and peace of mind will hit an all-time high over the next 12 months."
    }
  ],

  // 11. Choose Your Gift Boxes
  gifts: [
    {
      icon: "🎁",
      label: "Gift Box 01",
      type: "Compliment",
      title: "A Golden Compliment 🌸",
      message: "You have an undeniable radiance. When you're happy, everyone around you feels the sunshine!"
    },
    {
      icon: "🎀",
      label: "Gift Box 02",
      type: "Prediction",
      title: "A Lucky Prediction 🍀",
      message: "This year will surprise you with unexpected wins, deep friendships, and effortless happiness."
    },
    {
      icon: "💌",
      label: "Gift Box 03",
      type: "Secret Pass",
      title: "VIP Life Pass 🎫",
      message: "This pass entitles XYZ to: Free hugs, unlimited snacks from friends, and winning every argument today!"
    },
    {
      icon: "✨",
      label: "Gift Box 04",
      type: "Cosmic Wish",
      title: "The Ultimate Wish 🎂",
      message: "May all the kindness and love you put into the universe come right back to you tenfold."
    }
  ],

  // 12. Secret Drawer Letter (Emotional Easter Egg)
  secretMessage: `
    <p>Okay, jokes and memes aside…</p>
    <p>We tease you about stealing food and overthinking every little detail, but in all seriousness, having you in our lives is one of the greatest blessings anyone could ask for.</p>
    <p>Your empathy, your stubborn loyalty to the people you love, your electric energy, and the quiet comfort you bring when someone is having a rough day are irreplaceable qualities.</p>
    <p>Thank you for being someone we can laugh with till our ribs ache, cry with without feeling silly, and celebrate without holding back.</p>
    <p>Never change who you are. The world is so lucky to have you. 💖</p>
  `,

  // 13. Final Grand Finale Letter
  finalLetter: `
    <p>I hope this year gives you more reasons to laugh till your stomach hurts, more memories to hold onto forever, more wild adventures to tell stories about, and a whole lot more moments that make you feel genuinely, deeply happy.</p>
    <p>You make the world brighter, warmer, and so much more fun just by existing in it. Never forget how loved, appreciated, and cherished you are.</p>
  `
};

/* ============================================================================
   FALLBACK AESTHETIC SVG IMAGE GENERATOR
   Ensures the website never breaks if custom images are missing!
   ============================================================================ */
function createSampleImage(type) {
  const pal = {
    hero: { bg: "%23FCE7EC", text: "👑 XYZ • MAIN CHARACTER", sub: "Tap to customize photo in script.js", icon: "✨" },
    photo1: { bg: "%23FFF0F4", text: "Café Memories ☕", sub: "August 2024", icon: "🌸" },
    photo2: { bg: "%23F4F0FA", text: "Chaos Road Trip 🚗", sub: "November 2023", icon: "🕶️" },
    photo3: { bg: "%23FEECE3", text: "Sunset Golden Hour 🌅", sub: "May 2024", icon: "✨" },
    photo4: { bg: "%23E1ECF7", text: "Midnight Pizza Run 🍕", sub: "January 2024", icon: "🌙" },
    photo5: { bg: "%23E6F6EE", text: "Beach Adventures 🏖️", sub: "September 2023", icon: "🌊" },
    photo6: { bg: "%23F7EBD2", text: "Rooftop Celebrations 🥂", sub: "April 2024", icon: "🎉" },
    photo7: { bg: "%23FDE2E8", text: "Sweet Moments 💖", sub: "Core Memory", icon: "♡" },
    photo8: { bg: "%23E8E1F5", text: "Unforgettable Days 🌟", sub: "With Best Friends", icon: "★" }
  };
  const c = pal[type] || pal.hero;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="${c.bg}"/><circle cx="300" cy="240" r="120" fill="%23FFFFFF" opacity="0.6"/><text x="300" y="260" font-family="'Fredoka', sans-serif" font-size="80" text-anchor="middle" fill="%23E87A90">${c.icon}</text><text x="300" y="420" font-family="'Fredoka', sans-serif" font-size="28" font-weight="bold" text-anchor="middle" fill="%232C2830">${c.text}</text><text x="300" y="460" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" text-anchor="middle" fill="%238E8698">${c.sub}</text></svg>`;
}

/* ============================================================================
   WEB AUDIO API SYNTHESIZER & SOUND FX ENGINE
   Generates dreamy lo-fi ambient background chords & tactile sound effects!
   100% offline, zero external file dependencies or broken audio links!
   ============================================================================ */
class UniverseAudioEngine {
  constructor() {
    this.ctx = null;
    this.isBgmPlaying = false;
    this.sfxEnabled = true;
    this.bgmTimer = null;
    this.bgmStep = 0;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft bell/chime note
  playTone(freq, duration = 0.5, type = 'sine', gainVal = 0.15) {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio context policy fallback
    }
  }

  sfxPop() {
    this.playTone(587.33, 0.15, 'sine', 0.2); // D5
  }

  sfxSparkle() {
    if (!this.sfxEnabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 0.3, 'triangle', 0.12), i * 60);
    });
  }

  sfxEnvelope() {
    if (!this.sfxEnabled) return;
    this.playTone(392.00, 0.25, 'sine', 0.15); // G4
    setTimeout(() => this.playTone(523.25, 0.3, 'sine', 0.18), 100);
    setTimeout(() => this.playTone(659.25, 0.4, 'sine', 0.2), 200);
    setTimeout(() => this.sfxSparkle(), 300);
  }

  sfxChime() {
    this.playTone(880.00, 0.4, 'sine', 0.15); // A5
  }

  sfxBlow() {
    if (!this.sfxEnabled) return;
    this.initContext();
    if (!this.ctx) return;
    try {
      // Noise buffer for realistic blowing sound
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, this.ctx.currentTime + 0.4);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
    } catch (e) {}
  }

  sfxVictory() {
    if (!this.sfxEnabled) return;
    const chords = [
      [523.25, 659.25, 783.99], // C major
      [587.33, 739.99, 880.00], // D major
      [659.25, 830.61, 987.77], // E major
      [1046.50, 1318.51, 1567.98] // High C major fanfare
    ];
    chords.forEach((chord, step) => {
      setTimeout(() => {
        chord.forEach(freq => this.playTone(freq, 0.6, 'triangle', 0.15));
      }, step * 220);
    });
  }

  toggleBgm() {
    this.initContext();
    this.isBgmPlaying = !this.isBgmPlaying;
    if (this.isBgmPlaying) {
      this.startLoFiBgm();
      return true;
    } else {
      this.stopLoFiBgm();
      return false;
    }
  }

  startLoFiBgm() {
    if (this.bgmTimer) clearInterval(this.bgmTimer);
    // Dreamy pastel chord progression: Cmaj7 -> Am7 -> Dm7 -> G7
    const progression = [
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [293.66, 349.23, 440.00, 523.25], // Dm7
      [196.00, 246.94, 293.66, 349.23]  // G7
    ];
    this.bgmStep = 0;

    const playChord = () => {
      if (!this.isBgmPlaying || !this.ctx) return;
      const chord = progression[this.bgmStep % progression.length];
      chord.forEach((freq, idx) => {
        setTimeout(() => {
          if (!this.isBgmPlaying) return;
          this.playTone(freq, 1.8, 'sine', 0.04);
        }, idx * 120);
      });
      this.bgmStep++;
    };

    playChord();
    this.bgmTimer = setInterval(playChord, 2200);
  }

  stopLoFiBgm() {
    if (this.bgmTimer) {
      clearInterval(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
}

const audio = new UniverseAudioEngine();

/* ============================================================================
   CANVAS PARTICLE ENGINE (AMBIENT PARTICLES + CELEBRATION FX)
   ============================================================================ */
class UniverseParticleEngine {
  constructor() {
    this.ambientCanvas = document.getElementById('ambientCanvas');
    this.fxCanvas = document.getElementById('fxCanvas');
    this.ambientCtx = this.ambientCanvas ? this.ambientCanvas.getContext('2d') : null;
    this.fxCtx = this.fxCanvas ? this.fxCanvas.getContext('2d') : null;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.ambientParticles = [];
    this.fxParticles = [];

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initAmbient();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if (this.ambientCanvas) {
      this.ambientCanvas.width = this.width;
      this.ambientCanvas.height = this.height;
    }
    if (this.fxCanvas) {
      this.fxCanvas.width = this.width;
      this.fxCanvas.height = this.height;
    }
  }

  initAmbient() {
    this.ambientParticles = [];
    const count = Math.min(45, Math.floor(this.width / 25));
    const colors = ['rgba(255, 190, 205, 0.4)', 'rgba(232, 225, 245, 0.4)', 'rgba(255, 235, 180, 0.35)', 'rgba(195, 230, 250, 0.35)'];
    
    for (let i = 0; i < count; i++) {
      this.ambientParticles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 4 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        alpha: Math.random() * 0.6 + 0.2,
        pulse: Math.random() * 0.02
      });
    }
  }

  burstHearts(x, y, count = 12) {
    const emojis = ['💗', '✨', '🌸', '♡', '⭐'];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 / count) * i + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 5 + 3;
      this.fxParticles.push({
        type: 'emoji',
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 12 + 14,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 4
      });
    }
  }

  burstConfetti(x, y, count = 60) {
    const colors = ['#FF6B8B', '#FF8EA5', '#FFD166', '#06D6A0', '#118AB2', '#9B5DE5', '#F15BB5'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 3;
      this.fxParticles.push({
        type: 'confetti',
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        w: Math.random() * 8 + 6,
        h: Math.random() * 5 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.015 + 0.008,
        gravity: 0.18,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 8
      });
    }
  }

  launchGrandCelebration() {
    // Continuous firework bursts across the screen
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const x = Math.random() * (this.width - 200) + 100;
        const y = Math.random() * (this.height * 0.6) + 80;
        this.burstConfetti(x, y, 70);
        this.burstHearts(x, y, 20);
        audio.sfxSparkle();
      }, i * 300);
    }
  }

  spawnButterflySwarm() {
    const emojis = ['🦋', '🌸', '✨'];
    for (let i = 0; i < 25; i++) {
      this.fxParticles.push({
        type: 'butterfly',
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * this.width,
        y: this.height + 40,
        vx: (Math.random() - 0.5) * 4,
        vy: -Math.random() * 4 - 3,
        size: Math.random() * 16 + 20,
        alpha: 1,
        decay: 0.006,
        rotation: 0,
        vRot: 0
      });
    }
  }

  animate() {
    // 1. Draw Ambient Particles
    if (this.ambientCtx) {
      this.ambientCtx.clearRect(0, 0, this.width, this.height);
      for (let p of this.ambientParticles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(p.pulse) * 0.01;

        if (p.y < -10) p.y = this.height + 10;
        if (p.x < -10) p.x = this.width + 10;
        if (p.x > this.width + 10) p.x = -10;

        this.ambientCtx.beginPath();
        this.ambientCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ambientCtx.fillStyle = p.color;
        this.ambientCtx.fill();
      }
    }

    // 2. Draw Active FX Particles
    if (this.fxCtx) {
      this.fxCtx.clearRect(0, 0, this.width, this.height);
      for (let i = this.fxParticles.length - 1; i >= 0; i--) {
        const p = this.fxParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.rotation += p.vRot;

        if (p.gravity) {
          p.vy += p.gravity;
        }

        if (p.type === 'butterfly') {
          p.vx += (Math.random() - 0.5) * 0.8;
        }

        this.fxCtx.save();
        this.fxCtx.globalAlpha = Math.max(0, p.alpha);
        this.fxCtx.translate(p.x, p.y);
        this.fxCtx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'emoji' || p.type === 'butterfly') {
          this.fxCtx.font = `${p.size}px sans-serif`;
          this.fxCtx.textAlign = 'center';
          this.fxCtx.textBaseline = 'middle';
          this.fxCtx.fillText(p.emoji, 0, 0);
        } else if (p.type === 'confetti') {
          this.fxCtx.fillStyle = p.color;
          this.fxCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        }

        this.fxCtx.restore();

        if (p.alpha <= 0 || p.y > this.height + 60) {
          this.fxParticles.splice(i, 1);
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

let particles;

/* ============================================================================
   CUSTOM CURSOR CONTROLLER
   ============================================================================ */
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const updateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
    requestAnimationFrame(updateCursor);
  };
  updateCursor();

  // Add hover scale class on interactive targets
  const interactiveSelector = 'button, a, .universe-item, .room-interactive-item, .memory-polaroid-item, .friend-sticky-note, .interactive-gift-box, .constellation-star, .secret-drawer-easter-egg';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactiveSelector)) {
      cursor.classList.add('hovering');
    } else {
      cursor.classList.remove('hovering');
    }
  });

  // Burst tiny hearts occasionally on click
  window.addEventListener('click', (e) => {
    if (particles && Math.random() > 0.3) {
      particles.burstHearts(e.clientX, e.clientY, 4);
    }
  });
}

/* ============================================================================
   POPULATE ALL DYNAMIC CONTENT FROM `birthdayData`
   ============================================================================ */
function populateDynamicContent() {
  // 1. Recipient Names
  const nameEls = [
    document.getElementById('entranceRecipientName'),
    document.getElementById('heroMainName'),
    document.getElementById('finaleNameSpan'),
    document.getElementById('finalLetterName')
  ];
  nameEls.forEach(el => {
    if (el) el.textContent = birthdayData.name;
  });

  // 2. Memory Museum Grid
  const museumGrid = document.getElementById('memoryMuseumGrid');
  if (museumGrid) {
    museumGrid.innerHTML = '';
    birthdayData.photos.forEach((photo, idx) => {
      const rot = (idx % 2 === 0 ? 1 : -1) * (2 + (idx % 4));
      const card = document.createElement('div');
      card.className = 'memory-polaroid-item';
      card.style.setProperty('--rot', `${rot}deg`);
      card.innerHTML = `
        <div class="polaroid-img-holder">
          <img src="${photo.image}" alt="Memory ${idx + 1}" class="polaroid-img" onerror="this.onerror=null; this.src=createSampleImage('photo${idx + 1}');" />
        </div>
        <div class="polaroid-caption-area">
          <span class="polaroid-date">${photo.date} • ${photo.location}</span>
          <p class="polaroid-handwriting">${photo.caption}</p>
        </div>
      `;

      // Click opens modal
      card.addEventListener('click', () => {
        openMemoryModal(photo);
        audio.sfxPop();
      });

      // Double-click Easter Egg #4 (Heart Fountain)
      card.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        if (particles) {
          particles.burstHearts(e.clientX, e.clientY, 20);
          audio.sfxSparkle();
          showToast("Double-tap love burst! 💗✨");
        }
      });

      museumGrid.appendChild(card);
    });
  }

  // 3. Horizontal Timeline
  const timelineTrack = document.getElementById('timelineTrack');
  if (timelineTrack) {
    timelineTrack.innerHTML = '';
    birthdayData.timeline.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'timeline-milestone-card';
      card.innerHTML = `
        <div class="milestone-badge-row">
          <span class="milestone-year">${item.year}</span>
          <span class="milestone-era">${item.era}</span>
        </div>
        <div class="milestone-img-wrapper">
          <img src="${item.image}" alt="${item.title}" class="milestone-img" onerror="this.onerror=null; this.src=createSampleImage('photo${idx + 1}');" />
        </div>
        <h4 class="milestone-title">${item.title}</h4>
        <p class="milestone-story">${item.story}</p>
      `;
      timelineTrack.appendChild(card);
    });
  }

  // 4. Friend Message Wall
  const friendWall = document.getElementById('friendCorkboard');
  if (friendWall) {
    friendWall.innerHTML = '';
    birthdayData.friends.forEach((friend, idx) => {
      const note = document.createElement('div');
      note.className = `friend-sticky-note ${friend.style}`;
      note.innerHTML = `
        <div class="friend-pin">📌</div>
        <div class="friend-header-row">
          <span class="friend-avatar-small">${friend.avatar}</span>
          <span class="friend-name-tag">${friend.name}</span>
        </div>
        <p class="friend-excerpt">"${friend.excerpt}"</p>
        <div class="friend-card-footer">
          <span>${friend.role}</span>
          <span>Tap to read letter →</span>
        </div>
      `;

      note.addEventListener('click', () => {
        openFriendModal(friend);
        audio.sfxPop();
      });

      friendWall.appendChild(note);
    });
  }

  // 5. Constellation Stars
  const starsLayer = document.getElementById('constellationStarsLayer');
  const svgLines = document.getElementById('constellationSvg');
  if (starsLayer && svgLines) {
    starsLayer.innerHTML = '';
    svgLines.innerHTML = '';

    const starCoords = [
      { x: 15, y: 30 }, { x: 30, y: 20 }, { x: 45, y: 40 }, { x: 25, y: 65 },
      { x: 50, y: 75 }, { x: 65, y: 30 }, { x: 80, y: 22 }, { x: 75, y: 60 },
      { x: 88, y: 70 }, { x: 55, y: 15 }
    ];

    // Connect adjacent star points with SVG lines
    for (let i = 0; i < starCoords.length - 1; i++) {
      const p1 = starCoords[i];
      const p2 = starCoords[i + 1];
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', `${p1.x}%`);
      line.setAttribute('y1', `${p1.y}%`);
      line.setAttribute('x2', `${p2.x}%`);
      line.setAttribute('y2', `${p2.y}%`);
      line.setAttribute('class', 'constellation-line');
      svgLines.appendChild(line);
    }

    birthdayData.qualities.forEach((q, idx) => {
      const pos = starCoords[idx % starCoords.length];
      const star = document.createElement('div');
      star.className = 'constellation-star';
      star.style.left = `${pos.x}%`;
      star.style.top = `${pos.y}%`;
      star.innerHTML = `
        <div class="star-glow-halo">
          <span class="star-symbol">${q.icon}</span>
        </div>
        <span class="star-label-popup">${q.title}</span>
      `;

      star.addEventListener('click', () => {
        star.classList.add('discovered');
        openConstellationModal(q, idx + 1);
        audio.sfxSparkle();
        updateConstellationProgress();
      });

      starsLayer.appendChild(star);
    });
  }

  // 6. Tiny Things Scrapbook
  const tinyGrid = document.getElementById('tinyThingsGrid');
  if (tinyGrid) {
    tinyGrid.innerHTML = '';
    birthdayData.tinyThings.forEach(item => {
      const card = document.createElement('div');
      card.className = 'scrapbook-note-card';
      card.innerHTML = `
        <div class="washi-tape-top"></div>
        <div class="note-category-tag">${item.tag}</div>
        <p class="note-handwriting-body">"${item.text}"</p>
        <div class="note-emoji-doodle">${item.doodle}</div>
      `;
      tinyGrid.appendChild(card);
    });
  }

  // 7. Choose Your Gift Boxes
  const giftRow = document.getElementById('giftBoxesRow');
  if (giftRow) {
    giftRow.innerHTML = '';
    birthdayData.gifts.forEach(gift => {
      const box = document.createElement('div');
      box.className = 'interactive-gift-box';
      box.innerHTML = `
        <span class="gift-box-icon">${gift.icon}</span>
        <span class="gift-box-label">${gift.label}</span>
      `;
      box.addEventListener('click', (e) => {
        if (particles) {
          particles.burstConfetti(e.clientX, e.clientY, 35);
          audio.sfxSparkle();
        }
        openSurpriseNoteModal(gift.title, gift.message);
      });
      giftRow.appendChild(box);
    });
  }

  // 8. Final Heart Collage
  const heartCollage = document.getElementById('heartCollageGrid');
  if (heartCollage) {
    heartCollage.innerHTML = '';
    birthdayData.photos.forEach((photo, idx) => {
      const cell = document.createElement('div');
      cell.className = 'heart-photo-cell';
      cell.innerHTML = `<img src="${photo.image}" alt="Memory" onerror="this.onerror=null; this.src=createSampleImage('photo${idx + 1}');" />`;
      heartCollage.appendChild(cell);
    });
  }

  // 9. Final Letters
  const finalBody = document.getElementById('finalLetterBody');
  if (finalBody) {
    finalBody.innerHTML = birthdayData.finalLetter;
  }
  const secretBody = document.getElementById('secretLetterContent');
  if (secretBody) {
    secretBody.innerHTML = birthdayData.secretMessage;
  }
}

/* ============================================================================
   MODALS LOGIC
   ============================================================================ */
function openMemoryModal(photo) {
  const modal = document.getElementById('memoryModal');
  const img = document.getElementById('modalMemoryImg');
  const date = document.getElementById('modalMemoryDate');
  const loc = document.getElementById('modalMemoryLocation');
  const title = document.getElementById('modalMemoryTitle');
  const desc = document.getElementById('modalMemoryDesc');
  const comment = document.getElementById('modalFriendComment');

  if (img) img.src = photo.image;
  if (date) date.textContent = `📅 ${photo.date}`;
  if (loc) loc.textContent = `📍 ${photo.location}`;
  if (title) title.textContent = photo.caption;
  if (desc) desc.textContent = photo.memory;
  if (comment) comment.querySelector('.comment-text').textContent = `"${photo.friendComment}"`;

  if (modal) modal.classList.remove('hidden');
}

function openFriendModal(friend) {
  const modal = document.getElementById('friendMessageModal');
  const avatar = document.getElementById('friendAvatarEmoji');
  const name = document.getElementById('friendNameDisplay');
  const body = document.getElementById('friendMessageBody');

  if (avatar) avatar.textContent = friend.avatar;
  if (name) name.textContent = friend.name;
  if (body) body.textContent = `"${friend.message}"`;

  if (modal) modal.classList.remove('hidden');
}

function openConstellationModal(quality, index) {
  const modal = document.getElementById('constellationCardModal');
  const icon = document.getElementById('starCardIcon');
  const title = document.getElementById('starCardTitle');
  const body = document.getElementById('starCardBody');
  const idxEl = document.getElementById('starCardIndex');

  if (icon) icon.textContent = quality.icon;
  if (title) title.textContent = quality.title;
  if (body) body.textContent = quality.desc;
  if (idxEl) idxEl.textContent = `Star ${index} of ${birthdayData.qualities.length}`;

  if (modal) modal.classList.remove('hidden');
}

function openSurpriseNoteModal(heading, bodyText) {
  const modal = document.getElementById('surpriseNoteModal');
  const headEl = document.getElementById('noteHeading');
  const bodyEl = document.getElementById('noteBody');

  if (headEl) headEl.textContent = heading;
  if (bodyEl) bodyEl.textContent = bodyText;
  if (modal) modal.classList.remove('hidden');
}

function closeAllModals() {
  const modals = document.querySelectorAll('.universe-modal');
  modals.forEach(m => m.classList.add('hidden'));
  const constellationModal = document.getElementById('constellationCardModal');
  if (constellationModal) constellationModal.classList.add('hidden');
}

function showToast(message) {
  const toast = document.getElementById('universeToast');
  const msgEl = document.getElementById('toastMsg');
  if (toast && msgEl) {
    msgEl.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3200);
  }
}

/* ============================================================================
   CHAPTER 01: INTERACTIVE BIRTHDAY ROOM MECHANICS
   ============================================================================ */
function initBirthdayRoom() {
  const roomLog = document.getElementById('roomLogText');

  // 1. Birthday Cake Click
  const cake = document.getElementById('roomCake');
  if (cake) {
    cake.addEventListener('click', (e) => {
      const candles = cake.querySelectorAll('.room-candle');
      const isLit = candles[0].classList.contains('lit');
      candles.forEach(c => c.classList.toggle('lit'));

      if (isLit) {
        audio.sfxBlow();
        if (roomLog) roomLog.textContent = "Candles blown out! (Save your biggest wish for Chapter 10! 🎂)";
      } else {
        audio.sfxSparkle();
        if (particles) particles.burstHearts(e.clientX, e.clientY, 10);
        if (roomLog) roomLog.textContent = "Candles relit! Warmth fills the room ✨";
      }
    });
  }

  // 2. Room Gift Box
  const gift = document.getElementById('roomGift');
  if (gift) {
    gift.addEventListener('click', (e) => {
      audio.sfxEnvelope();
      if (particles) particles.burstConfetti(e.clientX, e.clientY, 30);
      openSurpriseNoteModal(
        "A Tiny Secret Note! 🎁",
        "Whoever is reading this: you are officially the reason someone smiled today. Never forget that! 💖"
      );
    });
  }

  // 3. Wall Photo Frame
  const frame = document.getElementById('roomFrame');
  if (frame) {
    frame.addEventListener('click', () => {
      openMemoryModal(birthdayData.photos[0]);
    });
  }

  // 4. Balloons
  const balloons = document.getElementById('roomBalloons');
  if (balloons) {
    balloons.addEventListener('click', (e) => {
      audio.sfxPop();
      if (particles) particles.burstHearts(e.clientX, e.clientY, 15);
      if (roomLog) roomLog.textContent = "Balloons released into the stratosphere! 🎈✨";
    });
  }

  // 5. Flower Vase
  const flower = document.getElementById('roomFlower');
  if (flower) {
    flower.addEventListener('click', (e) => {
      audio.sfxSparkle();
      if (particles) particles.burstHearts(e.clientX, e.clientY, 8);
      if (roomLog) roomLog.textContent = "🌸 Compliment bloomed: You brighten every single room you walk into!";
    });
  }

  // 6. Gramophone Player
  const gramophone = document.getElementById('roomGramophone');
  const recordDisc = document.getElementById('roomRecordDisc');
  if (gramophone) {
    gramophone.addEventListener('click', () => {
      const isPlaying = audio.toggleBgm();
      const musicBtn = document.getElementById('musicToggleBtn');
      const musicLabel = document.getElementById('musicBtnLabel');
      if (musicBtn && musicLabel) {
        musicBtn.classList.toggle('playing', isPlaying);
        musicLabel.textContent = isPlaying ? "LO-FI: PAUSE" : "LO-FI: PLAY";
      }
      if (recordDisc) {
        recordDisc.style.animation = isPlaying ? "spinSlow 2s linear infinite" : "none";
      }
      if (roomLog) roomLog.textContent = isPlaying ? "♫ Playing dreamy birthday lo-fi melodies..." : "♫ Music paused.";
    });
  }

  // 7. Fairy Lights
  const fairyLights = document.getElementById('fairyLightsInteractive');
  if (fairyLights) {
    fairyLights.addEventListener('click', () => {
      audio.sfxChime();
      const bulbs = fairyLights.querySelectorAll('.light-bulb');
      bulbs.forEach(b => {
        b.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
      });
      if (roomLog) roomLog.textContent = "✨ Fairy lights sparkle in new colors!";
    });
  }
}

/* ============================================================================
   CHAPTER 05: THE PERSONALITY MACHINE MINI-GAME
   ============================================================================ */
function initPersonalityMachine() {
  let currentStep = 0;
  const scores = { main_character: 0, sunshine: 0, plot_twist: 0, overthinker: 0 };

  const quizBox = document.getElementById('personalityQuizBox');
  const resultCard = document.getElementById('personalityResultCard');
  const stepCounter = document.getElementById('personalityStepCounter');
  const progressFill = document.getElementById('personalityProgressFill');
  const questionTitle = document.getElementById('personalityQuestionTitle');
  const optionsList = document.getElementById('personalityOptionsList');

  const renderQuestion = () => {
    const q = birthdayData.personalityQuestions[currentStep];
    if (!q) {
      showResults();
      return;
    }

    if (stepCounter) stepCounter.textContent = `Question ${currentStep + 1} of ${birthdayData.personalityQuestions.length}`;
    if (progressFill) progressFill.style.width = `${((currentStep + 1) / birthdayData.personalityQuestions.length) * 100}%`;
    if (questionTitle) questionTitle.textContent = q.prompt;

    if (optionsList) {
      optionsList.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option-btn';
        btn.innerHTML = `
          <span class="quiz-option-letter">${letters[idx]}</span>
          <span class="quiz-option-text">${opt.text}</span>
        `;
        btn.addEventListener('click', (e) => {
          audio.sfxPop();
          if (particles) particles.burstHearts(e.clientX, e.clientY, 5);
          scores[opt.trait] = (scores[opt.trait] || 0) + 1;
          currentStep++;
          renderQuestion();
        });
        optionsList.appendChild(btn);
      });
    }
  };

  const showResults = () => {
    if (quizBox) quizBox.classList.add('hidden');
    if (resultCard) resultCard.classList.remove('hidden');

    audio.sfxVictory();
    if (particles) particles.launchGrandCelebration();

    const breakdown = document.getElementById('personalityStatsBreakdown');
    if (breakdown) {
      breakdown.innerHTML = `
        <div class="stat-row">
          <div class="stat-label-bar"><span>👑 Main Character Energy</span><span>92%</span></div>
          <div class="stat-track"><div class="stat-fill" style="width: 92%;"></div></div>
        </div>
        <div class="stat-row">
          <div class="stat-label-bar"><span>☀️ Human Sunshine Radiance</span><span>96%</span></div>
          <div class="stat-track"><div class="stat-fill" style="width: 96%;"></div></div>
        </div>
        <div class="stat-row">
          <div class="stat-label-bar"><span>⚡ Certified Plot Twist / Chaos</span><span>84%</span></div>
          <div class="stat-track"><div class="stat-fill" style="width: 84%;"></div></div>
        </div>
        <div class="stat-row">
          <div class="stat-label-bar"><span>🧠 Professional Overthinker</span><span>88%</span></div>
          <div class="stat-track"><div class="stat-fill" style="width: 88%;"></div></div>
        </div>
      `;
    }
  };

  const retakeBtn = document.getElementById('retakePersonalityBtn');
  if (retakeBtn) {
    retakeBtn.addEventListener('click', () => {
      currentStep = 0;
      Object.keys(scores).forEach(k => scores[k] = 0);
      if (resultCard) resultCard.classList.add('hidden');
      if (quizBox) quizBox.classList.remove('hidden');
      renderQuestion();
    });
  }

  const copyBtn = document.getElementById('copyPersonalityBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(`✨ Scientific Birthday Diagnosis: XYZ is 92% Main Character & 96% Human Sunshine! 👑🎂`);
      showToast("Diagnosis copied to clipboard! 📋✨");
    });
  }

  renderQuestion();
}

/* ============================================================================
   CHAPTER 06: HOW WELL DO YOU KNOW YOURSELF TRIVIA
   ============================================================================ */
function initTriviaQuiz() {
  let qIndex = 0;
  let score = 0;

  const card = document.getElementById('triviaCard');
  const scoreCard = document.getElementById('triviaScoreCard');
  const indexEl = document.getElementById('triviaIndex');
  const promptEl = document.getElementById('triviaPrompt');
  const choicesEl = document.getElementById('triviaChoices');
  const progressFill = document.getElementById('triviaProgressFill');

  const renderQuiz = () => {
    const q = birthdayData.triviaQuestions[qIndex];
    if (!q) {
      if (card) card.classList.add('hidden');
      if (scoreCard) scoreCard.classList.remove('hidden');
      const scoreTitle = document.getElementById('scoreTitle');
      if (scoreTitle) scoreTitle.textContent = `SCORE: ${score} / ${birthdayData.triviaQuestions.length}`;
      audio.sfxVictory();
      if (particles) particles.launchGrandCelebration();
      return;
    }

    if (indexEl) indexEl.textContent = `${qIndex + 1} / ${birthdayData.triviaQuestions.length}`;
    if (promptEl) promptEl.textContent = q.prompt;
    if (progressFill) progressFill.style.width = `${((qIndex + 1) / birthdayData.triviaQuestions.length) * 100}%`;

    if (choicesEl) {
      choicesEl.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'trivia-choice-btn';
        btn.textContent = opt;

        btn.addEventListener('click', (e) => {
          const isCorrect = (idx === q.correct);
          if (isCorrect) {
            btn.classList.add('correct');
            score++;
            audio.sfxSparkle();
            if (particles) particles.burstHearts(e.clientX, e.clientY, 8);
          } else {
            btn.classList.add('wrong');
            audio.sfxPop();
          }

          // Disable siblings
          Array.from(choicesEl.children).forEach(c => c.disabled = true);

          setTimeout(() => {
            qIndex++;
            renderQuiz();
          }, 1100);
        });

        choicesEl.appendChild(btn);
      });
    }
  };

  const retryBtn = document.getElementById('retryTriviaBtn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      qIndex = 0;
      score = 0;
      if (scoreCard) scoreCard.classList.add('hidden');
      if (card) card.classList.remove('hidden');
      renderQuiz();
    });
  }

  renderQuiz();
}

/* ============================================================================
   CHAPTER 07: CONSTELLATION PROGRESS
   ============================================================================ */
function updateConstellationProgress() {
  const discoveredCount = document.querySelectorAll('.constellation-star.discovered').length;
  const total = birthdayData.qualities.length;
  const progressText = document.getElementById('constellationProgressText');
  if (progressText) {
    progressText.textContent = `Stars Discovered: ${discoveredCount} / ${total} ✨`;
  }
  if (discoveredCount === total) {
    showToast("🌟 You found all 10 stars! The universe smiles on you!");
  }
}

/* ============================================================================
   CHAPTER 09: FUN STATION (REASONS + FATE TAROT)
   ============================================================================ */
function initFunStation() {
  // Reasons Carousel
  let currentReason = 0;
  const counterEl = document.getElementById('reasonCounterNum');
  const headlineEl = document.getElementById('reasonHeadline');
  const detailEl = document.getElementById('reasonDetail');
  const nextBtn = document.getElementById('nextReasonBtn');
  const prevBtn = document.getElementById('prevReasonBtn');

  const updateReason = (idx) => {
    const r = birthdayData.reasons[idx];
    if (!r) return;
    if (counterEl) counterEl.textContent = r.counter;
    if (headlineEl) headlineEl.textContent = r.headline;
    if (detailEl) detailEl.textContent = r.detail;
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      audio.sfxPop();
      currentReason = (currentReason + 1) % birthdayData.reasons.length;
      updateReason(currentReason);
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      audio.sfxPop();
      currentReason = (currentReason - 1 + birthdayData.reasons.length) % birthdayData.reasons.length;
      updateReason(currentReason);
    });
  }

  // Fate Generator Tarot
  const fateBtn = document.getElementById('generateFateBtn');
  const tarotCard = document.getElementById('fortuneTarotCard');
  const fateIcon = document.getElementById('fateIcon');
  const fateTitle = document.getElementById('fateTitle');
  const fateText = document.getElementById('fateText');

  if (fateBtn && tarotCard) {
    fateBtn.addEventListener('click', (e) => {
      audio.sfxEnvelope();
      if (particles) particles.burstHearts(e.clientX, e.clientY, 10);

      const randomFate = birthdayData.predictions[Math.floor(Math.random() * birthdayData.predictions.length)];
      if (fateIcon) fateIcon.textContent = randomFate.icon;
      if (fateTitle) fateTitle.textContent = randomFate.title;
      if (fateText) fateText.textContent = `"${randomFate.text}"`;

      tarotCard.classList.add('flipped');
    });

    tarotCard.addEventListener('click', () => {
      tarotCard.classList.toggle('flipped');
    });
  }

  // Secret Drawer Easter Egg Trigger
  const secretTrigger = document.getElementById('secretDrawerTrigger');
  const secretModal = document.getElementById('secretDrawerModal');
  if (secretTrigger && secretModal) {
    secretTrigger.addEventListener('click', () => {
      audio.sfxEnvelope();
      secretModal.classList.remove('hidden');
    });
  }
}

/* ============================================================================
   CHAPTER 10: THE GRAND FINALE CELEBRATION
   ============================================================================ */
function initGrandFinale() {
  const buildup = document.getElementById('finaleBuildup');
  const cakeStage = document.getElementById('finaleCakeStage');
  const celebrationCard = document.getElementById('finaleCelebrationCard');
  const stepBtn = document.getElementById('finaleStepBtn');
  const makeWishBtn = document.getElementById('makeWishBtn');
  const giantCake = document.getElementById('giantCake');

  if (stepBtn) {
    stepBtn.addEventListener('click', () => {
      audio.sfxEnvelope();
      if (buildup) buildup.classList.add('hidden');
      if (cakeStage) cakeStage.classList.remove('hidden');
    });
  }

  if (makeWishBtn) {
    makeWishBtn.addEventListener('click', (e) => {
      audio.sfxBlow();

      // Extinguish giant candles
      if (giantCake) {
        const flames = giantCake.querySelectorAll('.giant-flame');
        flames.forEach(f => f.style.display = 'none');
      }

      // Massive celebration particles
      setTimeout(() => {
        audio.sfxVictory();
        if (particles) particles.launchGrandCelebration();
        if (cakeStage) cakeStage.classList.add('hidden');
        if (celebrationCard) celebrationCard.classList.remove('hidden');
      }, 700);
    });
  }

  // Replay
  const replayBtn = document.getElementById('replayExperienceBtn');
  if (replayBtn) {
    replayBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      audio.sfxSparkle();
    });
  }

  // Share Link
  const shareBtn = document.getElementById('shareUniverseBtn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      audio.sfxPop();
      if (navigator.share) {
        try {
          await navigator.share({
            title: `A Little Universe Made Just For ${birthdayData.name} ✨`,
            text: `Explore this magical birthday universe made with love! 💖🎂`,
            url: window.location.href
          });
        } catch (e) {
          copyShareLink();
        }
      } else {
        copyShareLink();
      }
    });
  }

  const copyShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast("Link copied! Now go make someone else jealous. 😂✨");
  };
}

/* ============================================================================
   5+ HIDDEN EASTER EGGS ENGINE
   ============================================================================ */
function initEasterEggs() {
  // Easter Egg 2: Butterfly 3-click swarm
  const butterfly = document.getElementById('easterButterfly');
  let butterflyClicks = 0;
  if (butterfly) {
    butterfly.addEventListener('click', (e) => {
      butterflyClicks++;
      audio.sfxSparkle();
      if (butterflyClicks === 3) {
        if (particles) particles.spawnButterflySwarm();
        showToast("🦋 You summoned the secret butterfly swarm!");
        butterflyClicks = 0;
      }
    });
  }

  // Easter Egg 5: Definitely Don't Click This
  const dontClickBtn = document.getElementById('dontClickBtn');
  if (dontClickBtn) {
    dontClickBtn.addEventListener('click', (e) => {
      audio.sfxSparkle();
      if (particles) {
        particles.burstConfetti(window.innerWidth / 2, window.innerHeight / 2, 100);
      }
      document.body.style.animation = 'screenShake 0.5s ease';
      setTimeout(() => { document.body.style.animation = ''; }, 500);
      showToast("🎉 WHY DID YOU CLICK IT?! Now you're showered in glitter! 😂");
    });
  }

  // Light Up All Stars Bonus
  const revealAllBtn = document.getElementById('revealAllStarsBtn');
  if (revealAllBtn) {
    revealAllBtn.addEventListener('click', () => {
      document.querySelectorAll('.constellation-star').forEach(s => s.classList.add('discovered'));
      updateConstellationProgress();
      audio.sfxSparkle();
    });
  }
}

/* ============================================================================
   CHAPTER SCROLL OBSERVER & HUD UPDATES
   ============================================================================ */
function initScrollObserver() {
  const sections = document.querySelectorAll('.chapter-section');
  const hudNum = document.getElementById('hudChapterNum');
  const hudName = document.getElementById('hudChapterName');
  const railDots = document.querySelectorAll('.rail-dot');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chapter = entry.target.getAttribute('data-chapter') || '00';
        const title = entry.target.getAttribute('data-chapter-title') || 'Universe';

        if (hudNum) hudNum.textContent = chapter;
        if (hudName) hudName.textContent = title;

        const targetId = entry.target.id;
        railDots.forEach(dot => {
          if (dot.getAttribute('data-target') === targetId) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));

  // Rail dot click navigation
  railDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        audio.sfxPop();
      }
    });
  });

  // Start Exploring Hero Button
  const startBtn = document.getElementById('startExploringBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const room = document.getElementById('chapterRoom');
      if (room) room.scrollIntoView({ behavior: 'smooth' });
      audio.sfxPop();
    });
  }
}

/* ============================================================================
   INITIALIZATION & ENTRANCE SCREEN UNLOCK
   ============================================================================ */
document.addEventListener('DOMContentLoaded', () => {
  particles = new UniverseParticleEngine();
  initCustomCursor();
  populateDynamicContent();
  initBirthdayRoom();
  initPersonalityMachine();
  initTriviaQuiz();
  initFunStation();
  initGrandFinale();
  initEasterEggs();
  initScrollObserver();

  // 1. Opening Surprise Envelope Logic
  const openSurpriseBtn = document.getElementById('openSurpriseBtn');
  const envelope = document.getElementById('physicalEnvelope');
  const entranceScreen = document.getElementById('entranceScreen');

  const unlockUniverse = (e) => {
    if (envelope) envelope.classList.add('opening');
    audio.sfxEnvelope();

    if (particles) {
      const rect = envelope.getBoundingClientRect();
      particles.burstConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 70);
      particles.burstHearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
    }

    setTimeout(() => {
      if (entranceScreen) entranceScreen.classList.add('unlocked');
      document.body.classList.remove('universe-locked');
      // Start ambient music gently
      audio.toggleBgm();
      const musicBtn = document.getElementById('musicToggleBtn');
      const musicLabel = document.getElementById('musicBtnLabel');
      if (musicBtn && musicLabel) {
        musicBtn.classList.add('playing');
        musicLabel.textContent = "LO-FI: PAUSE";
      }
    }, 1100);
  };

  if (openSurpriseBtn) openSurpriseBtn.addEventListener('click', unlockUniverse);
  if (envelope) envelope.addEventListener('click', unlockUniverse);

  // 2. HUD Sound & Music Buttons
  const sfxBtn = document.getElementById('soundFxBtn');
  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      audio.sfxEnabled = !audio.sfxEnabled;
      sfxBtn.querySelector('.hud-text').textContent = audio.sfxEnabled ? "SFX: ON" : "SFX: OFF";
      audio.sfxPop();
    });
  }

  const musicBtn = document.getElementById('musicToggleBtn');
  if (musicBtn) {
    musicBtn.addEventListener('click', () => {
      const isPlaying = audio.toggleBgm();
      musicBtn.classList.toggle('playing', isPlaying);
      const musicLabel = document.getElementById('musicBtnLabel');
      if (musicLabel) {
        musicLabel.textContent = isPlaying ? "LO-FI: PAUSE" : "LO-FI: PLAY";
      }
    });
  }

  // 3. Modal Close Handlers
  document.querySelectorAll('.modal-close-btn, .modal-backdrop, #constellationCloseBtn, #noteDismissBtn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });
});
