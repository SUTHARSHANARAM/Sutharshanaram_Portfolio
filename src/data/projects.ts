export interface ProjectDetails {
  goal: string;
  challenge: string;
  architecture: string[];
  outcomes: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  details: ProjectDetails;
  uiGraphicType: "crm" | "plant" | "dashboard" | "grid" | "music" | "radar";
}

export const projectsData: Project[] = [
  {
    slug: "plant-disease-detection",
    title: "GAN-Enhanced Plant Disease Detection",
    subtitle: "GAN & CNN crop diagnostics & treatment platform",
    shortDescription: "GAN-enhanced crop disease detection achieving 94.6% accuracy using GAN data augmentation and custom CNN pipelines.",
    techStack: ["Python", "Streamlit", "GAN", "CNN", "scikit-learn", "OpenCV"],
    githubUrl: "https://github.com/SUTHARSHANARAM/GAN-ENHANCED-PLANT-DISEASE-DETECTION-AND-TREATMENT-SUGGESTION-SYSTEM",
    liveUrl: "https://plant-disease-detect.vercel.app",
    highlights: [
      "Built deep learning system achieving **94.6%** crop diagnostic accuracy",
      "Generated **1,500+** GAN augmented leaf images to train rare classes",
      "Implemented OpenCV image pre-processing in under **150ms** pipelines"
    ],
    uiGraphicType: "plant",
    details: {
      goal: "Develop a full-stack deep learning web application to diagnose plant diseases from leaf images and suggest precise treatment remedies to farmers, preventing crop failure.",
      challenge: "Training datasets often exhibit severe class imbalances for rare plant diseases, and field-captured leaf photos have massive light variations, which causes standard CNN classification boundaries to overfit.",
      architecture: [
        "Formulated an end-to-end ML pipeline starting with OpenCV pre-processing filters for leaf contour thresholding.",
        "Implemented a Generative Adversarial Network (GAN) architecture to generate high-fidelity synthetic samples, successfully augmenting minority classes.",
        "Designed and trained a Convolutional Neural Network (CNN) classifier from scratch using scikit-learn for metric splits.",
        "Engineered an interactive dashboard interface using Streamlit to present diagnostic results and remedial recipes."
      ],
      outcomes: [
        "Expanded the training dataset volume dynamically using synthetic GAN images.",
        "Validated model generalization using confusion matrices, precision benchmarks, and accuracy grids.",
        "Deployed the full machine learning inference pipeline as a functional, secure web application."
      ]
    }
  },
  {
    slug: "job-market-dashboard",
    title: "AI-Powered Job Market Analytics Dashboard",
    subtitle: "Structured visual intelligence of tech market scales",
    shortDescription: "Interactive Power BI dashboard analytics scraping and mapping 10,000+ active developer hiring trends and salary distributions.",
    techStack: ["Power BI", "Python (pandas)", "BeautifulSoup", "SQL", "Excel"],
    githubUrl: "https://github.com/SUTHARSHANARAM/AI-Powered-Job-Market-Analytics-Dashboard",
    liveUrl: "https://app.powerbi.com/view?r=job-market-dashboard-mock",
    highlights: [
      "Scraped and normalized **10,000+** active IT job postings",
      "Engineered **Power BI** visuals showcasing complex dynamic rankings",
      "Identified salary correlations across **15+** major developer stacks"
    ],
    uiGraphicType: "dashboard",
    details: {
      goal: "Analyze current hiring demand patterns in tech roles to map out high-value skills and salary trends for job seekers and recruitment teams.",
      challenge: "Job listings are unstructured text files with disparate salary notations (hourly vs. annual), locations, and inconsistent listings of required technologies.",
      architecture: [
        "Wrote Python BeautifulSoup scripts to fetch job data from multiple tech boards.",
        "Leveraged pandas library to parse salary strings, clean location tags, and isolate primary skill keywords.",
        "Engineered custom Power BI data connections linking relational spreadsheets of keywords and locations.",
        "Built DAX queries for real-time ranking matrices, calculating dynamic percentiles and skill clusters."
      ],
      outcomes: [
        "Normalised over 10,000 job listings, standardizing experience requirements and locations.",
        "Built dynamic visualizations that show high correlations between specific skill-sets (e.g. Python+SQL) and higher-tier salary distributions.",
        "Enabled instantaneous filtering of tech-stack salaries by city, experience, and remote status."
      ]
    }
  },
  {
    slug: "ai-first-crm",
    title: "AI First CRM (Healthcare)",
    subtitle: "Intelligent clinical operations & documentation portal",
    shortDescription: "HIPAA-inspired clinical data portal integrating automated clinical notes summarization via LangChain and LLM pipelines.",
    techStack: ["Next.js", "FastAPI", "Firebase Auth", "PostgreSQL", "LangChain"],
    githubUrl: "https://github.com/SUTHARSHANARAM/hcp-crm-agent",
    liveUrl: "https://hcp-crm-agent.vercel.app/",
    highlights: [
      "Reduced clinician transcript mapping time by **40%** using LLMs",
      "Integrated **LangChain** structures with zero database schema leakage",
      "Secured medical logs matching strict **HIPAA-inspired** guidelines"
    ],
    uiGraphicType: "crm",
    details: {
      goal: "Build a modern, highly secure patient portal that allows clinical workers to easily catalog appointments, capture patient symptoms, and auto-summarize transcripts into medical forms.",
      challenge: "Coordinating LLM integrations while ensuring zero leakage of sensitive medical details, and keeping user experience fast during lengthy text analysis steps.",
      architecture: [
        "Built dynamic dashboard routes in Next.js App Router for strict separation of clinician and admin workspaces.",
        "Structured LangChain prompt sequences in FastAPI using schema validators (Pydantic) to ensure the LLM outputs strict JSON.",
        "Integrated Firebase Authentication with local server token checks to secure patient records API endpoints.",
        "Configured a PostgreSQL database mapping relational appointments, records, and patient tags."
      ],
      outcomes: [
        "Reduced clinical documentation overhead for testing clinicians by over 40% in mockup walkthroughs.",
        "Implemented real-time layout skeleton screens to keep apparent latency low during backend AI processing.",
        "Achieved absolute type-safety across database operations using TypeScript."
      ]
    }
  },
  {
    slug: "emotion-music-ai",
    title: "Emotion Music AI",
    subtitle: "Mood-driven smart media player recommendations",
    shortDescription: "Real-time facial sentiment expression classifier recommending Spotify playback queues under 300ms analysis loops.",
    techStack: ["React", "OpenCV", "Python", "FastAPI", "Spotify Web API"],
    githubUrl: "https://github.com/SUTHARSHANARAM/emotion-music-ai",
    liveUrl: "https://emotion-music-ai.vercel.app",
    highlights: [
      "Classified user webcam facial expressions in under **300ms** loops",
      "Connected **Spotify Web API** to auto-inject mood-based song queues",
      "Implemented local **OpenCV** frame transformations in python backends"
    ],
    uiGraphicType: "music",
    details: {
      goal: "Bridge human mood states with media applications by scanning expression keypoints and instantly building custom audio queues that align with the user's emotional state.",
      challenge: "Processing video feeds in a client browser and communicating with heavy AI servers can introduce visible lag, causing audio recommendations to feel disconnected.",
      architecture: [
        "Implemented lightweight browser capture using HTML5 Camera APIs, sending downsampled frames to local FastAPI servers.",
        "Deployed OpenCV Harr-Cascade cascades for initial face detection, feeding crop matrices into an emotional classifier.",
        "Linked Spotify's Web API authorization flow to enable real-time user authentication and playlist injection.",
        "Constructed a high-fidelity dark-themed audio player styled with Framer Motion audio wave visuals."
      ],
      outcomes: [
        "Attained real-time mood recognition response rates of under 300ms from face detection to track selection.",
        "Constructed a fluid, interactive UI displaying micro-visualizer waves reacting to music BPM.",
        "Engineered smooth fallback options letting users manually select mood anchors if webcam access is disabled."
      ]
    }
  },
  {
    slug: "civic-radar",
    title: "CivicRadar AI",
    subtitle: "Real-time urban issue detection & analytics monitoring platform",
    shortDescription: "AI & computer-vision powered urban infrastructure monitoring platform mapping civic reports, road defects, and municipal analytics.",
    techStack: ["Python", "FastAPI", "React", "OpenCV", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/SUTHARSHANARAM/CivicRadar_AI",
    liveUrl: "https://civic-radar-ai.vercel.app/",
    highlights: [
      "Scraped and processed **1,000+** geotagged urban infrastructure logs",
      "Engineered real-time **interactive radar map UI** with severity tags",
      "Implemented automated civic issue routing using **FastAPI & PostgreSQL**"
    ],
    uiGraphicType: "radar",
    details: {
      goal: "Build a smart civic monitoring system that detects urban infrastructure defects (potholes, garbage accumulation, lighting failures) and routes actionable reports to local municipal authorities.",
      challenge: "Processing high-volume crowdsourced complaint feeds with geotagged media while filtering duplicates and classifying defect urgency in real-time.",
      architecture: [
        "Constructed a FastAPI microservice backend using OpenCV and image processing filters for defect verification.",
        "Engineered an interactive React dashboard featuring real-time radar mapping and location pin clustering.",
        "Structured a PostgreSQL spatial database schema mapping issue coordinates, status tags, and resolution histories.",
        "Built automated email/SMS alert webhooks notifying maintenance teams based on severity thresholds."
      ],
      outcomes: [
        "Reduced manual issue verification times for simulated city council teams.",
        "Engineered a responsive, high-contrast dark dashboard for night-mode municipal monitoring.",
        "Provided transparent ticket status tracking for public citizens."
      ]
    }
  },
  {
    slug: "load-flow-operation-suite",
    title: "Load Flow Operation Suite",
    subtitle: "High-performance power system simulation interface",
    shortDescription: "High-performance electrical grid simulation solving Newton-Raphson system matrices in under 5ms.",
    techStack: ["Python", "numpy", "scipy", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/SUTHARSHANARAM/loadflow-operations-suite",
    liveUrl: "https://loadflow-operations-suite-eta.vercel.app/",
    highlights: [
      "Solved high-dimensional Newton-Raphson system matrices in **5ms**",
      "Rendered interactive **SVG** node graphs for real-time bus grids",
      "Flagged potential line overflows using color-coded **Tailwind CSS** alerts"
    ],
    uiGraphicType: "grid",
    details: {
      goal: "Create a web-based grid evaluation dashboard that engineers can use to calculate active/reactive power patterns and evaluate grid margins during overload events.",
      challenge: "Power flow solutions require solving high-dimensional system matrices of non-linear algebraic equations. Standard algorithms drift and fail to converge when nodes exceed single digits.",
      architecture: [
        "Formulated the grid admittance matrix (Ybus) inside Python using numpy and scipy optimization libraries.",
        "Implemented the Newton-Raphson solver with dynamic jacobian updates for rapid mathematical convergence.",
        "Constructed an interactive React interface rendering a custom, draggable SVG grid of power transmission lines.",
        "Devised a real-time warning panel utilizing Tailwind states (amber/red alerts) when node voltages deviate by 5%."
      ],
      outcomes: [
        "Achieved mathematical convergence for standard IEEE 14-bus grids in less than 5ms.",
        "Constructed a robust dashboard explaining voltage angles and load profiles in real-time.",
        "Designed a print-ready export system detailing grid admittance matrices and line losses."
      ]
    }
  }
];
