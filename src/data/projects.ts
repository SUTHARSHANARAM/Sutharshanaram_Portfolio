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
    subtitle: "GAN & CNN Crop Diagnostics & Treatment Platform",
    shortDescription: "Deep learning crop disease detection system leveraging GAN synthetic data augmentation and custom CNN pipelines for plant health diagnosis.",
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
      challenge: "Training datasets often exhibit severe class imbalances for rare plant diseases, and field-captured leaf photos have massive light variations, causing standard CNN classification boundaries to overfit.",
      architecture: [
        "Formulated an end-to-end ML pipeline starting with OpenCV pre-processing filters for leaf contour thresholding.",
        "Implemented a Generative Adversarial Network (GAN) architecture to generate high-fidelity synthetic samples, augmenting minority classes.",
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
    subtitle: "Interactive Tech Job Market & Salary Intelligence",
    shortDescription: "Interactive Power BI analytics dashboard scraping, cleaning, and visualizing tech developer hiring trends and salary distributions across 10,000+ job postings.",
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
        "Normalized over 10,000 job listings, standardizing experience requirements and locations.",
        "Built dynamic visualizations that show high correlations between specific skill-sets (e.g. Python+SQL) and higher-tier salary distributions.",
        "Enabled instantaneous filtering of tech-stack salaries by city, experience, and remote status."
      ]
    }
  },
  {
    slug: "ai-first-crm",
    title: "AI First CRM (Healthcare)",
    subtitle: "Intelligent Clinical Operations & Documentation Portal",
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
    subtitle: "Voice-Driven Speech Emotion Recognition & Playlist AI",
    shortDescription: "Browser-based Speech Emotion Recognition (SER) web app analyzing recorded speech via Web Audio API & TensorFlow.js to recommend matching music playlists.",
    techStack: ["TensorFlow.js", "Web Audio API", "JavaScript", "HTML/CSS", "YouTube API"],
    githubUrl: "https://github.com/SUTHARSHANARAM/emotion-music-ai",
    liveUrl: "https://emotion-music-ai.vercel.app",
    highlights: [
      "Built browser **Speech Emotion Recognition (SER)** processing voice speech via Web Audio API",
      "Processed ~2s audio into **STFT spectrograms** fed directly to TensorFlow.js models",
      "Mapped predicted emotions (happy, sad, calm, angry) to **curated music playlists**"
    ],
    uiGraphicType: "music",
    details: {
      goal: "Build a lightweight AI web application that captures 1–2 seconds of recorded speech, classifies the user's emotional state using Speech Emotion Recognition (SER), and recommends matching music playlists.",
      challenge: "Performing raw audio signal processing (downsampling, Short-Time Fourier Transform STFT, spectrogram matrix generation) in client-side JavaScript without backend servers or heavy Python ML dependencies.",
      architecture: [
        "Captured raw microphone audio using HTML5 MediaRecorder and Web Audio API (getUserMedia, AudioContext).",
        "Constructed a client-side STFT spectrogram generator in JavaScript converting PCM audio buffers into 4D tensor matrices [1, 64, 64, 1].",
        "Executed browser-based emotion prediction using TensorFlow.js with zero server latency.",
        "Mapped predicted emotions (happy, sad, angry, calm, excited) to dynamic YouTube & Spotify playlist recommendations."
      ],
      outcomes: [
        "Achieved 100% client-side browser inference with zero backend latency or server bandwidth costs.",
        "Built a clean, glassmorphic UI with animated recording wave bars and instant playlist navigation.",
        "Provided heuristic energy fallback ensuring seamless emotion classification even without pre-trained model weights."
      ]
    }
  },
  {
    slug: "civic-radar",
    title: "CivicRadar AI",
    subtitle: "Real-Time Urban Infrastructure Defect Monitoring Platform",
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
        "Built automated email alert webhooks notifying maintenance teams based on severity thresholds."
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
    subtitle: "High-Performance Power System Simulation Suite",
    shortDescription: "High-performance electrical grid simulation engine solving Newton-Raphson power flow system matrices in under 5ms.",
    techStack: ["Python", "NumPy", "SciPy", "React", "Tailwind CSS"],
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
        "Formulated the grid admittance matrix (Ybus) inside Python using NumPy and SciPy optimization libraries.",
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

