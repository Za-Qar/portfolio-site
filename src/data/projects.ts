import type { Project } from "../types/project";
import societly from "../imgs/societly.jpg";
import shooty from "../imgs/shooty.jpg";
import notes from "../imgs/notes.jpg";
import planaura from "../imgs/planaura.jpg";
import quiz from "../imgs/quiz.jpg";
import rm from "../imgs/rm.jpg";
import ment from "../imgs/ment.jpg";
import todoApp from "../imgs/todoApp.jpg";
import chattie from "../imgs/chattie.jpg";
import drang from "../imgs/drang.jpg";
import hedge from "../imgs/hedge.jpg";
import meme from "../imgs/meme.jpg";

export const projects: Project[] = [
  {
    id: "societly",
    title: "SoCietly",
    summary: "Post-bootcamp social platform",
    description:
      "Built in an agile team of five to support events and community engagement after the School of Code bootcamp.",
    tags: ["Featured", "Team"],
    techStack: ["React", "Node.js", "Google Maps API", "Nodemailer"],
    year: 2022,
    featured: true,
    image: societly,
    demoUrl: "https://societly.netlify.app",
    repoUrl: "https://github.com/Za-Qar/SoCietly-backend"
  },
  {
    id: "shooty",
    title: "Shooty Mc Beard Face",
    summary: "Object-oriented JavaScript game",
    description:
      "A two-day hackathon game with custom classes, game-state logic, and combat interactions for player and AI.",
    tags: ["Game", "Hackathon"],
    techStack: ["JavaScript", "Canvas", "OOP"],
    year: 2021,
    featured: true,
    image: shooty,
    demoUrl: "https://shooty-mc-beard-face.netlify.app"
  },
  {
    id: "todos-counters-notes",
    title: "Todos Counters Notes",
    summary: "Life-organization app suite",
    description:
      "A productivity app with animated interactions and layered encryption before storage for stronger user trust.",
    tags: ["Featured", "Productivity"],
    techStack: ["React", "Node.js", "CryptoJS"],
    year: 2022,
    featured: true,
    image: notes,
    demoUrl: "https://todos-counter-notes.netlify.app",
    repoUrl: "https://github.com/Za-Qar/todos_counters_notes-backend"
  },
  {
    id: "planaura",
    title: "Planaura",
    summary: "Cause-driven Chromium browser concept",
    description:
      "Designed and presented a browser concept donating 70% of earnings to environmental and social causes.",
    tags: ["Concept", "Product"],
    techStack: ["Product Design", "Branding", "Web"],
    year: 2023,
    featured: false,
    image: planaura
  },
  {
    id: "trivia-quizer",
    title: "Trivia Quizer",
    summary: "Replayable quiz game",
    description:
      "Used the Open Trivia API and answer-shuffling logic to keep gameplay varied across sessions.",
    tags: ["Game"],
    techStack: ["JavaScript", "API Integration"],
    year: 2021,
    featured: false,
    image: quiz,
    demoUrl: "https://trivia-quiz-game.netlify.app"
  },
  {
    id: "rainmakers",
    title: "RainMakers",
    summary: "Brand and website for weather-tech company",
    description:
      "Created a complete visual identity and responsive marketing website for a Germany-based startup.",
    tags: ["Design", "Branding"],
    techStack: ["HTML", "CSS", "Brand Design"],
    year: 2020,
    featured: false,
    image: rm,
    demoUrl: "https://rain-makers.org"
  },
  {
    id: "mentor-mentee-matcher",
    title: "Mentor Mentee Matcher",
    summary: "Compatibility-first mentorship platform",
    description:
      "Built in a five-person team over four days to match mentors and mentees using skills and personality criteria.",
    tags: ["Team", "Hackathon"],
    techStack: ["React", "Node.js", "Form UX"],
    year: 2022,
    featured: false,
    image: ment,
    demoUrl: "https://mentor-matcher.netlify.app",
    repoUrl: "https://github.com/Za-Qar/mentor_matcher-backend"
  },
  {
    id: "todo-react-native",
    title: "Todo List React Native",
    summary: "Mobile todo organizer",
    description:
      "Straightforward cross-platform todo app built for users who prefer managing tasks on their phone.",
    tags: ["Mobile"],
    techStack: ["React Native"],
    year: 2022,
    featured: false,
    image: todoApp
  },
  {
    id: "chattie",
    title: "Chattie Chat App",
    summary: "Real-time chat exercise",
    description:
      "A debugging-focused project that uses websockets for real-time room chat with low setup friction.",
    tags: ["Realtime"],
    techStack: ["WebSockets", "JavaScript"],
    year: 2021,
    featured: false,
    image: chattie
  },
  {
    id: "drang-strenge-muse",
    title: "Drang Strenge Muse",
    summary: "University exhibition website",
    description:
      "A graduation project showcase website used to share student work with employers, family, and peers.",
    tags: ["Education", "Web"],
    techStack: ["HTML", "CSS", "Content Strategy"],
    year: 2019,
    featured: false,
    image: drang,
    demoUrl: "https://exhibition-drang-strenge-muse.netlify.app/"
  },
  {
    id: "hedge-eagle",
    title: "Hedge Eagle",
    summary: "Startup website build",
    description:
      "Designed and built a WordPress website for a London startup in hedge funding and investment.",
    tags: ["WordPress", "Client Work"],
    techStack: ["WordPress", "UI Design"],
    year: 2020,
    featured: false,
    image: hedge
  },
  {
    id: "meme-website",
    title: "Meme Website",
    summary: "Infinite meme feed with Reddit API",
    description:
      "Built a playful feed experience where users can browse memes continuously and interact with posts.",
    tags: ["API", "Fun Build"],
    techStack: ["JavaScript", "Reddit API"],
    year: 2021,
    featured: false,
    image: meme
  }
];
