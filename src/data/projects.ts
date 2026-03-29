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
import spheres from "../imgs/spheres.jpg";
import forestNavigationBg from "../imgs/forest-navigation-bg.png";
import kukaTeleopImage from "../imgs/kuka-teleop-01.png";
import occupancyMappingImage from "../imgs/occupancy-mapping-05.png";
import nlpToxicCover from "../imgs/nlp-toxic-cover.png";
import wikiqaCover from "../imgs/wikiqa-cover.png";
import gaWordCover from "../imgs/ga-word-cover.png";
import prologTriageCover from "../imgs/prolog-triage-cover.png";

export const projects: Project[] = [
  {
    id: "behavior-based-occupancy-mapping",
    title: "Behavior-Based Occupancy Mapping",
    summary: "Autonomous occupancy-grid mapping in simulation",
    description:
      "MSc robotics project using MATLAB and CoppeliaSim to compare manual vs autonomous exploration with real-time occupancy-grid updates and performance metrics.",
    tags: ["MSc", "Robotics", "AI"],
    techStack: ["MATLAB", "CoppeliaSim", "Lua", "ZeroMQ"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: occupancyMappingImage,
    repoUrl: "https://github.com/Za-Qar/behavior-based-occupancy-mapping",
    caseStudyUrl:
      "https://github.com/Za-Qar/behavior-based-occupancy-mapping#visual-walkthrough",
    availabilityNote: "Simulation project with visuals and run details in the repository README."
  },
  {
    id: "wikiqa-seq2seq-chatbot-multi-models",
    title: "WikiQA Seq2Seq Chatbot",
    summary: "Multi-model generative QA chatbot comparison",
    description:
      "MSc NLP project comparing Seq2Seq architectures with and without attention, plus a Streamlit interface for side-by-side model interaction.",
    tags: ["MSc", "NLP", "Deep Learning"],
    techStack: ["Python", "PyTorch", "Seq2Seq", "Streamlit"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: wikiqaCover,
    repoUrl: "https://github.com/Za-Qar/wikiqa-seq2seq-chatbot-multi-models",
    caseStudyUrl: "https://github.com/Za-Qar/wikiqa-seq2seq-chatbot-multi-models#visual-evidence",
    availabilityNote: "Interactive demo is available locally via Streamlit from the repository."
  },
  {
    id: "agent-system-forest-navigation",
    title: "Agent System Forest Navigation",
    summary: "Multi-agent forest navigation and decision logic",
    description:
      "MSc AI agent-system project using AgentSpeak/Jason with environment logic for autonomous navigation behaviour in a forest scenario.",
    tags: ["MSc", "Agents", "AI"],
    techStack: ["AgentSpeak", "Jason", "Java", "Gradle"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: forestNavigationBg,
    repoUrl: "https://github.com/Za-Qar/agent-system-forest-navigation",
    availabilityNote: "Repository is newly published; README and demo assets are in progress."
  },
  {
    id: "ml-london-traffic-emissions",
    title: "London Traffic Emissions ML",
    summary: "Regression models for urban emissions prediction",
    description:
      "MSc project modelling CO2, NOx, PM10, and PM2.5 from LAEI traffic data, comparing Decision Trees, Random Forest, XGBoost, and Ridge.",
    tags: ["MSc", "Machine Learning", "Data Science"],
    techStack: ["Python", "Jupyter Notebook", "scikit-learn", "XGBoost"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: spheres,
    repoUrl: "https://github.com/Za-Qar/machine-learning-london-traffic-emissions",
    availabilityNote: "Notebook project. Public report/demo page will be added next."
  },
  {
    id: "angular-task-board",
    title: "Angular Task Board",
    summary: "Task management app with NgRx and Signals",
    description:
      "Built with modern Angular patterns, including NgRx state, selectors, effects, Signals integration, and dynamic component rendering.",
    tags: ["MSc", "Frontend", "Architecture"],
    techStack: ["Angular", "TypeScript", "NgRx", "RxJS"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: spheres,
    repoUrl: "https://github.com/Za-Qar/angular-task-board",
    availabilityNote: "Repo is public. GitHub Pages deployment setup is planned."
  },
  {
    id: "nlp-toxic-comment-classification",
    title: "Toxic Comment Classification",
    summary: "Text classification experiments for moderation use-cases",
    description:
      "MSc NLP classification project comparing TF-IDF and embedding pipelines across multiple models, with Kaggle submission benchmarking.",
    tags: ["MSc", "NLP", "Machine Learning"],
    techStack: ["Python", "Jupyter Notebook", "spaCy", "scikit-learn"],
    year: 2026,
    featured: true,
    status: "in-progress",
    image: nlpToxicCover,
    repoUrl: "https://github.com/Za-Qar/natural-language-processing-toxic-comment-classification",
    caseStudyUrl:
      "https://github.com/Za-Qar/natural-language-processing-toxic-comment-classification#visuals",
    availabilityNote: "Notebook project with model-comparison visuals and Kaggle benchmark results."
  },
  {
    id: "genetic-algorithm-word-game-solver",
    title: "Genetic Algorithm WORD Solver",
    summary: "Heuristic puzzle solver with interactive GUI",
    description:
      "Intelligent systems project implementing a genetic algorithm for a 4x4 WORD puzzle, with fitness tracking and a Tkinter interface.",
    tags: ["AI", "Search", "Algorithms"],
    techStack: ["Python", "Genetic Algorithm", "Tkinter", "Matplotlib"],
    year: 2026,
    featured: false,
    status: "in-progress",
    image: gaWordCover,
    repoUrl: "https://github.com/Za-Qar/genetic-algorithm-WORD-game-solver",
    caseStudyUrl: "https://github.com/Za-Qar/genetic-algorithm-WORD-game-solver#visuals",
    availabilityNote: "Desktop app project; run locally from the repository."
  },
  {
    id: "prolog-triage-expert-system",
    title: "Prolog Triage Expert System",
    summary: "Rule-based diagnostic reasoning prototype",
    description:
      "A SWI-Prolog expert system that asks symptom/risk questions and provides explainable triage outcomes using symbolic inference rules.",
    tags: ["AI", "Reasoning", "Expert Systems"],
    techStack: ["Prolog", "Knowledge Base", "Rule Engine"],
    year: 2026,
    featured: false,
    status: "in-progress",
    image: prologTriageCover,
    repoUrl: "https://github.com/Za-Qar/prolog-triage-expert-system",
    caseStudyUrl: "https://github.com/Za-Qar/prolog-triage-expert-system#visuals-extracted-from-report",
    availabilityNote: "CLI expert-system project; run in SWI-Prolog from the repository."
  },
  {
    id: "kuka-youbot-teleoperating",
    title: "KUKA youBot Teleoperation",
    summary: "Remote robot teleoperation in simulation",
    description:
      "MATLAB App Designer controls for a KUKA youBot in CoppeliaSim, including base movement, arm-joint control, and RGB camera capture.",
    tags: ["Robotics", "Simulation", "MSc"],
    techStack: ["MATLAB", "CoppeliaSim", "Remote API"],
    year: 2026,
    featured: false,
    status: "in-progress",
    image: kukaTeleopImage,
    repoUrl: "https://github.com/Za-Qar/kuka-youbot-teleoperation-matlab-coppeliasim",
    caseStudyUrl:
      "https://github.com/Za-Qar/kuka-youbot-teleoperation-matlab-coppeliasim#demo-media",
    availabilityNote: "Simulation-based project; see repo demo media for screenshots and video."
  },
  {
    id: "football-organiser-server",
    title: "Football Organiser Server",
    summary: "Backend API for organising football events",
    description:
      "Java backend service for managing football sessions, team coordination, and organiser workflows with structured REST endpoints.",
    tags: ["Backend", "API"],
    techStack: ["Java", "Spring Boot", "Maven"],
    year: 2023,
    featured: false,
    status: "in-progress",
    image: spheres,
    repoUrl: "https://github.com/Za-Qar/football-organiser-server",
    availabilityNote: "Backend service repository without a hosted frontend demo."
  },
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
    status: "live",
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
    status: "live",
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
    status: "live",
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
    status: "in-progress",
    image: planaura,
    availabilityNote: "Concept project with no public host yet."
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
    status: "live",
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
    status: "live",
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
    status: "live",
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
    status: "in-progress",
    image: todoApp,
    availabilityNote: "Mobile build exists but is not publicly hosted yet."
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
    status: "in-progress",
    image: chattie,
    availabilityNote: "Debug exercise project; public demo currently unavailable."
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
    status: "live",
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
    status: "private",
    image: hedge,
    availabilityNote: "Client project, link is private."
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
    status: "in-progress",
    image: meme,
    availabilityNote: "Legacy prototype that is not currently deployed."
  }
];
