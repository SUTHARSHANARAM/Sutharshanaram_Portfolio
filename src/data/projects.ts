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
    title: "LoadFlow Operations Suite",
    subtitle: "Multi-Tenant Freight Brokerage & Logistics Management Platform",
    shortDescription: "Full-stack multi-tenant freight brokerage platform connecting Shippers, Brokers, and Carriers with RBAC, automated carrier compliance engine, and versioned rate confirmations.",
    techStack: ["React", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "JWT Auth"],
    githubUrl: "https://github.com/SUTHARSHANARAM/loadflow-operations-suite",
    liveUrl: "https://loadflow-operations-suite-eta.vercel.app/",
    highlights: [
      "Built 8-stage **Load State Machine** (Posted → Rate Confirmed → In Transit → Delivered → Closed)",
      "Engineered automated **Carrier Compliance Engine** flagging insurance & authority mismatches",
      "Implemented fine-grained **RBAC middleware** enforcing permission catalog across 3 tenant roles"
    ],
    uiGraphicType: "grid",
    details: {
      goal: "Develop a multi-tenant freight brokerage operations platform connecting Shippers, Brokers, and Carriers with automated compliance enforcement, role-based access control (RBAC), versioned rate confirmations, and a complete shipment lifecycle state machine.",
      challenge: "Enforcing complex multi-tenant data scoping and role-based permissions across Shippers, Brokers, and Carriers while maintaining strict compliance blocks (insurance expiry, authority validation) at the API layer without compromising system responsiveness.",
      architecture: [
        "Constructed an async FastAPI microservices backend with custom PermissionChecker RBAC middleware evaluating atomic granular permissions (load.create, load.assign_carrier, rate.confirm).",
        "Engineered an automated Carrier Compliance Engine auto-flagging loads for expired insurance or mismatched equipment before dispatch.",
        "Built an 8-state shipment lifecycle state machine (Posted, Assigned, Confirmed, Dispatched, In Transit, Delivered, POD Verified, Closed) with timestamped audit logging.",
        "Designed a responsive React 19 + TypeScript frontend with Vite and role-specific dashboards for Shippers, Brokers, and Carriers."
      ],
      outcomes: [
        "Achieved complete multi-tenant scoping preventing cross-organization data access across all API endpoints.",
        "Implemented versioned rate confirmation workflows requiring mutual signatures before load dispatch.",
        "Deployed full-stack application on Vercel and Render with live Swagger OpenAPI documentation."
      ]
    }
  }
];

