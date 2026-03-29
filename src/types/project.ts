export enum ProjectStatus {
  Live = "live",
  InProgress = "in-progress",
  Private = "private"
}

export enum ProjectTag {
  Agents = "Agents",
  AI = "AI",
  Algorithms = "Algorithms",
  API = "API",
  Architecture = "Architecture",
  Backend = "Backend",
  Branding = "Branding",
  ClientWork = "Client Work",
  Concept = "Concept",
  DataScience = "Data Science",
  DeepLearning = "Deep Learning",
  Design = "Design",
  Education = "Education",
  ExpertSystems = "Expert Systems",
  Featured = "Featured",
  Frontend = "Frontend",
  FunBuild = "Fun Build",
  Game = "Game",
  Hackathon = "Hackathon",
  MachineLearning = "Machine Learning",
  Mobile = "Mobile",
  MSc = "MSc",
  NLP = "NLP",
  Product = "Product",
  Productivity = "Productivity",
  Realtime = "Realtime",
  Reasoning = "Reasoning",
  Robotics = "Robotics",
  Search = "Search",
  Simulation = "Simulation",
  Team = "Team",
  Web = "Web",
  WordPress = "WordPress"
}

export enum ProjectTechStack {
  AgentSpeak = "AgentSpeak",
  Angular = "Angular",
  APIIntegration = "API Integration",
  BrandDesign = "Brand Design",
  Branding = "Branding",
  Canvas = "Canvas",
  ContentStrategy = "Content Strategy",
  CoppeliaSim = "CoppeliaSim",
  CryptoJS = "CryptoJS",
  CSS = "CSS",
  FormUX = "Form UX",
  GeneticAlgorithm = "Genetic Algorithm",
  GoogleMapsAPI = "Google Maps API",
  Gradle = "Gradle",
  HTML = "HTML",
  Jason = "Jason",
  Java = "Java",
  JavaScript = "JavaScript",
  JupyterNotebook = "Jupyter Notebook",
  KnowledgeBase = "Knowledge Base",
  Lua = "Lua",
  MATLAB = "MATLAB",
  Matplotlib = "Matplotlib",
  Maven = "Maven",
  NgRx = "NgRx",
  NodeJs = "Node.js",
  Nodemailer = "Nodemailer",
  OOP = "OOP",
  ProductDesign = "Product Design",
  Prolog = "Prolog",
  Python = "Python",
  PyTorch = "PyTorch",
  React = "React",
  ReactNative = "React Native",
  RedditAPI = "Reddit API",
  RemoteAPI = "Remote API",
  RuleEngine = "Rule Engine",
  RxJS = "RxJS",
  ScikitLearn = "scikit-learn",
  Seq2Seq = "Seq2Seq",
  SpaCy = "spaCy",
  SpringBoot = "Spring Boot",
  Streamlit = "Streamlit",
  Tkinter = "Tkinter",
  TypeScript = "TypeScript",
  UIDesign = "UI Design",
  Web = "Web",
  WebSockets = "WebSockets",
  WordPress = "WordPress",
  XGBoost = "XGBoost",
  ZeroMQ = "ZeroMQ"
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: ProjectTag[];
  techStack: ProjectTechStack[];
  year: number;
  featured: boolean;
  status: ProjectStatus;
  image: string;
  demoUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  availabilityNote?: string;
}
