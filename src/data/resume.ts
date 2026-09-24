export interface Experience {
  role: string
  company: string
  location: string
  period: string
  type: string
  badgeColor: string
  companyLogo: string
  summary: string
  impactNarrative: string
  highlights: string[]
  technologies: string[]
  metrics?: { label: string; value: string; detail: string }[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  category: "Full-Stack & Applied AI" | "Clinical Healthtech AI" | "Sustainable AI & IoT"
  period: string
  technologies: string[]
  summary: string
  keyAchievements: string[]
  metrics: string
  githubUrl?: string
  pipelineStages: { stage: string; description: string; tech: string }[]
  architecturePoints: string[]
}

export interface ResearchPaper {
  title: string
  conference: string
  location: string
  technologies: string[]
  summary: string
  impact: string
  presentationVenue: string
  points: string[]
}

export interface Certification {
  title: string
  issuer: string
  category: "Cybersecurity" | "Applied AI & Cloud" | "Software Systems"
  highlight?: boolean
}

export const RESUME_DATA = {
  name: "Mandira K Shetty",
  title: "Software Development Engineer",
  subtitle: "Full-Stack & Applied Systems",
  tagline: "Building production software and applied AI systems.",
  location: "Bengaluru, India",
  email: "mandira.kshetty@gmail.com",
  phone: "Available upon request (Provided during interview stage)",
  phoneStatus: "Available upon request",
  linkedin: "https://linkedin.com/in/mandirakshetty",
  github: "https://github.com/mandirakshetty",
  social: {
    github: "https://github.com/mandirakshetty",
    linkedin: "https://linkedin.com/in/mandirakshetty",
  },
  summary:
    "Recent Computer Science Engineering graduate with three technical internships across fintech, telecom, and healthtech, building production backend systems and applying AI/ML to real operational problems, from fraud detection to automated log analysis. Comfortable owning a feature end-to-end, from architecture through deployment.",

  education: {
    institution: "M. S. Ramaiah University Of Applied Sciences",
    degree: "B.Tech in Computer Science Engineering",
    cgpa: "9.29 / 10",
    period: "Nov 2022 – Jun 2026",
    location: "Bengaluru, India",
    distinction: "Relevant Coursework",
    coursework: [
      "Data Structures & Algorithms",
      "AI / ML",
      "Data Science",
      "Object-Oriented Programming",
      "Computer Networks",
      "Software Engineering",
    ],
  },

  stats: [
    { label: "B.Tech CSE CGPA", value: "9.29", suffix: "/10", highlight: "Academic Excellence" },
    { label: "Technical Internships", value: "3", suffix: "", highlight: "Broadridge • TechM • Graphene" },
    { label: "Peer-Reviewed Research", value: "1", suffix: "", highlight: "ICASF '25 Abu Dhabi" },
    { label: "Query Optimization", value: "87", suffix: "%", highlight: "15s down to 2s in Production" },
  ],

  experiences: [
    {
      role: "Software Engineering Intern",
      company: "Broadridge Financial Solutions",
      companyLogo: "/images/brodridgeLogo.svg",
      location: "Bengaluru, India",
      period: "Jan 2026 – July 2026",
      type: "Full-Stack & Systems",
      badgeColor: "from-pink-500 to-rose-500",
      summary:
        "Built full-stack release-scheduling features, ITSM integrations, and query optimizations for a production fintech portal.",
      impactNarrative:
        "Collaborated in an Agile team across the full SDLC to build full-stack features for a release-scheduling portal, integrating ITSM workflows and optimizing database queries from 15 seconds to 2 seconds.",
      highlights: [
        "Collaborated in an Agile team across the full SDLC to build full-stack features (React, FastAPI, PostgreSQL) for a release-scheduling portal, integrating ITSM (CRQ) and optimizing queries to cut response time from 15s to 2s.",
        "Built a RAG-style LLM chatbot using OpenAI APIs integration and a Scikit-learn classifier to auto-categorize releases, plus a Jira ID lookup tool and bug-template generator that reduced manual ticket-creation effort from 25 mins to 5 mins per employee.",
        "Diagnosed and resolved critical bugs, backend processing failures, and trade-capture validation discrepancies through testing, ensuring the stability and reliability of production financial systems.",
      ],
      technologies: [
        "React.js",
        "FastAPI",
        "PostgreSQL",
        "OpenAI API",
        "Scikit-learn",
        "RAG Automation",
        "ITSM / CRQ",
        "Jira",
      ],
      metrics: [
        { label: "Query Latency", value: "87% Drop", detail: "15s down to 2s" },
        { label: "Ticket Turnaround", value: "80% Saved", detail: "25 min to 5 min" },
        { label: "Production Tier", value: "Fintech Grade", detail: "Zero Trade Validation Discrepancy" },
      ],
    },
    {
      role: "Machine Learning Trainee",
      company: "Tech Mahindra",
      companyLogo: "/images/tech-mahindra-seeklogo.png",
      location: "Bengaluru, India",
      period: "Sep 2025 – Dec 2025",
      type: "Distributed Log Intelligence",
      badgeColor: "from-violet-500 to-indigo-500",
      summary:
        "Designed the ML architecture for RAG-based telecom log analysis and semantic retrieval.",
      impactNarrative:
        "Developed the machine learning architecture for a RAG-based log analysis system in telecom monitoring, using Sentence Transformers and FAISS for semantic search across enterprise application logs.",
      highlights: [
        "Architected semantic search retrieval on dense high-dimensional vectors (FAISS) indexing millions of distributed telecom server logs.",
        "Built a Streamlit monitoring dashboard for automated root-cause analysis, cutting troubleshooting time by 70% through log-similarity matching and knowledge-base retrieval.",
        "Empowered SRE and Network Operations engineering squads with instant contextual incident retrieval.",
      ],
      technologies: [
        "Python",
        "Sentence Transformers",
        "FAISS (Vector Search)",
        "Semantic Search",
        "Streamlit",
        "RAG Architecture",
      ],
      metrics: [
        { label: "Troubleshooting Speed", value: "-70% Time", detail: "Automated Root-Cause" },
        { label: "Search Index", value: "Dense FAISS", detail: "Sub-50ms Similarity Retrieval" },
      ],
    },
    {
      role: "Software & AI Intern",
      company: "Graphene Health Tech Pvt. Ltd.",
      companyLogo: "/images/graphene_services_pte_ltd_logo.jpeg",
      location: "Bengaluru, India",
      period: "Sep 2024",
      type: "Full-Stack & Generative AI",
      badgeColor: "from-fuchsia-500 to-pink-500",
      summary:
        "Built a document analysis chatbot and Streamlit workflow on Google's Gemma-2B-it model.",
      impactNarrative:
        "Built a chatbot on Google's Gemma-2B-it model with prompt engineering, plus a Streamlit interface for PDF upload, content-based Q&A, chat history, and custom commands.",
      highlights: [
        "Built a chatbot on Google's GEMMA-2B-it model with prompt engineering for medical summaries and document insights.",
        "Developed full Streamlit client interface supporting drag-and-drop PDF extraction, conversational history, and custom commands.",
      ],
      technologies: [
        "Google Gemma-2B-it",
        "Prompt Engineering",
        "Streamlit",
        "Python",
        "Document Parsing",
      ],
      metrics: [
        { label: "Model Architecture", value: "Gemma-2B-it", detail: "On-Premises Reasoning" },
        { label: "Input Format", value: "Multi-page PDF", detail: "Zero-Latency Synthesis" },
      ],
    },
  ] as Experience[],

  projects: [
    {
      id: "continuous-auth-banking",
      title: "AI-Driven Continuous Authentication Platform for Digital Banking",
      subtitle: "Full-Stack Banking Platform with XGBoost, Isolation Forest & SHAP XAI",
      category: "Full-Stack & Applied AI",
      period: "2025 – 2026",
      summary:
        "A secure, end-to-end digital banking platform (Flask, MySQL) with login, balance checks, and fund transfers, integrating XGBoost and Isolation Forest models for real-time fraud detection at 92.7% accuracy and sub-100ms latency.",
      keyAchievements: [
        "Built secure banking infrastructure with SHA-256 hashed authentication, session token validation, and account ledgers.",
        "Integrated multi-model ML ensemble (Isolation Forest anomaly filter + XGBoost fraud probability scorer) executing in <100ms.",
        "Implemented SHAP-based Explainable AI (XAI) to justify each trust decision (Allow / OTP / Block) with transparent attribution for security audits.",
      ],
      technologies: [
        "Python",
        "Flask",
        "MySQL",
        "XGBoost",
        "Isolation Forest",
        "SHAP (Explainable AI)",
        "SHA-256",
        "REST API",
      ],
      metrics: "92.7% Accuracy • <100ms Latency • SHAP Justified Trust",
      githubUrl: "",
      pipelineStages: [
        { stage: "Telemetry Ingestion", description: "Stream behavioral keystroke, cadence, and transaction payloads.", tech: "Flask REST API" },
        { stage: "Anomaly Boundary", description: "Unsupervised Isolation Forest flags sudden behavioral drift.", tech: "Scikit-Learn" },
        { stage: "Fraud Scoring", description: "Tuned XGBoost model calculates transaction risk probability.", tech: "XGBoost Classifier" },
        { stage: "SHAP Explainability", description: "TreeExplainer produces real-time regulatory compliance factors.", tech: "SHAP Kernel" },
      ],
      architecturePoints: [
        "Full-stack financial workflow: Session state management → Cryptographic SHA-256 validation → MySQL ACID ledger checks.",
        "Dual-engine inference pipeline: Isolation Forest acts as first-line anomaly detector, funneling edge cases into tuned XGBoost classifier.",
        "Instant SHAP value decomposition converts model decisions into human-interpretable compliance factors (Allow / OTP / Block).",
      ],
    },
    {
      id: "parkinsons-stage-prediction",
      title: "Parkinson's Disease Stage Prediction System",
      subtitle: "High-Dimensional Biomarker Analytics & Clinical Prognosis Dashboard",
      category: "Clinical Healthtech AI",
      period: "2025",
      summary:
        "Conducted predictive modeling and analytics on the international PPMI dataset to forecast Parkinson's disease stages using XGBoost after 98% dimensionality reduction, identifying top clinical predictors through feature-importance analysis.",
      keyAchievements: [
        "Eliminated 98% of high-dimensional clinical noise using PCA and variance pruning while retaining diagnostic variance.",
        "Trained XGBoost multiclass model forecasting progression stages with calibrated probability distributions.",
        "Engineered interactive Streamlit clinician dashboard enabling real-time biomarker evaluation and progression radar.",
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "NumPy", "PPMI Dataset"],
      metrics: "98% Feature Reduction • PPMI International Cohort • Clinician UI",
      githubUrl: "",
      pipelineStages: [
        { stage: "Data Preprocessing", description: "Clinical trial missingness imputation, normalization, and outlier capping.", tech: "Pandas & NumPy" },
        { stage: "Feature Pruning", description: "Variance thresholding, PCA, and correlation clustering (98% reduction).", tech: "Scikit-learn" },
        { stage: "Progression Model", description: "Multiclass gradient boosting tuned with cross-validation.", tech: "XGBoost" },
        { stage: "Clinician Dashboard", description: "Biomarker score sliders and progression risk radar.", tech: "Streamlit UI" },
      ],
      architecturePoints: [
        "Curated longitudinal clinical observations from the international PPMI bio-repository.",
        "Mitigated high-dimensional sparsity through progressive variance pruning and principal component decomposition.",
        "Delivered transparent decision rankings identifying dominant motor and non-motor progression indicators.",
      ],
    },
  ] as Project[],

  research: {
    title:
      "Machine-Learning-Driven Eco-Routing System for Multimodal Sustainable Urban Travel in Bengaluru",
    conference: "3rd International Conference on Advancing Sustainable Futures (ICASF 2025)",
    location: "Abu Dhabi, UAE",
    presentationVenue: "Presented at ICASF 2025 • Abu Dhabi",
    technologies: [
      "Python",
      "XGBoost",
      "Random Forest",
      "Scikit-learn",
      "Google Maps Distance Matrix API",
      "Streamlit",
    ],
    summary:
      "Built an ML route-optimization platform (XGBoost, Random Forest) with a full-stack dashboard for real-time recommendations, reducing predicted CO2 emissions by 40% versus traditional baselines; presented findings at the 3rd International Conference on Advancing Sustainable Futures (ICASF 2025), Abu Dhabi.",
    impact: "40% CO₂ Emission Reduction",
    points: [
      "Synthesized multimodal transit modalities (Metro Rail, BMTC electric & diesel buses, micro-mobility, and pedestrian networks) into a unified weighted graph.",
      "Trained XGBoost and Random Forest regressors dynamically predicting route energy consumption based on real-time traffic density, stop frequency, and elevation profiles.",
      "Engineered real-time routing engine with interactive Streamlit map visualizations powered by Google Maps API.",
      "Formally peer-reviewed and presented internationally before energy & mobility researchers at ICASF 2025, Abu Dhabi.",
    ],
  } as ResearchPaper,

  leadership: {
    role: "President",
    organization: "The Startup Society, RUAS",
    period: "Oct 2024 – Aug 2025",
    scale: "300+ Active Student Members",
    summary:
      "Led a 300+ member university club, organizing workshops, competitions, and speaker sessions to build a campus startup culture.",
    highlights: [
      "Led a 300+ member club, organizing workshops, competitions, and speaker sessions to build a campus startup culture.",
      "Coordinated student-focused workshops, competitions, and speaker sessions around startups, engineering, and innovation.",
      "Helped create a stronger campus entrepreneurship community through consistent events and member engagement.",
    ],
  },

  skills: {
    // HORIZONTAL RAIL FOR LANGUAGES:
    languagesHorizontal: [
      { name: "Python", level: "Primary", tag: "Advanced", icon: "https://ccimageapi.netlify.app/images/python.svg" },
      { name: "Java", level: "Core", tag: "Proficient", icon: "https://ccimageapi.netlify.app/images/java.svg" },
      { name: "C", level: "Systems", tag: "Proficient", icon: "https://ccimageapi.netlify.app/images/c.svg" },
      { name: "JavaScript", level: "Full-Stack", tag: "Proficient", icon: "https://ccimageapi.netlify.app/images/js.svg" },
      { name: "TypeScript", level: "Typed Web", tag: "Proficient", icon: "https://ccimageapi.netlify.app/images/typescript.svg" },
      { name: "React", level: "UI Systems", tag: "Advanced", icon: "https://ccimageapi.netlify.app/images/react.svg" },
      { name: "MySQL", level: "Relational DB", tag: "Advanced", icon: "https://ccimageapi.netlify.app/images/MySQL.svg" },
      { name: "HTML5", level: "Web Standards", tag: "Proficient", icon: "https://ccimageapi.netlify.app/images/html5.svg" },
    ],

    // VERTICAL STRUCTURED BOXES:
    verticalBoxes: [
      {
        title: "Full-Stack & Systems Engineering",
        subtitle: "Backend Services & Interactive UIs",
        icon: "terminal",
        badgeColor: "from-pink-500 to-rose-500",
        items: [
          { name: "FastAPI", detail: "High-performance async REST APIs, Pydantic" },
          { name: "React.js", detail: "Declarative stateful interfaces, hooks, modern web" },
          { name: "Flask", detail: "Microservice backends, cryptographic endpoints" },
          { name: "REST API Design", detail: "Resource modeling, HTTP semantics, auth headers" },
          { name: "SDLC & Agile", detail: "Sprint planning, code reviews, enterprise delivery" },
        ],
      },
      {
        title: "Applied AI, ML & RAG Systems",
        subtitle: "Vector Search & Predictive Pipelines",
        icon: "brain",
        badgeColor: "from-violet-500 to-indigo-500",
        items: [
          { name: "RAG Architecture", detail: "Dense vector search, contextual LLM grounding" },
          { name: "FAISS & Sentence Transformers", detail: "High-throughput semantic similarity search" },
          { name: "XGBoost & Random Forest", detail: "Supervised classification & progression ranking" },
          { name: "Isolation Forest (Anomaly)", detail: "Unsupervised fraud detection, outlier filtering" },
          { name: "Explainable AI (SHAP)", detail: "Local feature attribution, regulatory governance" },
          { name: "Google Gemma-2B & OpenAI", detail: "Prompt engineering, document synthesis" },
        ],
      },
      {
        title: "Databases & Cloud Infrastructure",
        subtitle: "Relational Indexing & Scalable Storage",
        icon: "database",
        badgeColor: "from-cyan-500 to-blue-500",
        items: [
          { name: "PostgreSQL", detail: "Query execution optimization (87% latency reduction)" },
          { name: "MySQL", detail: "ACID transactions, relational constraints" },
          { name: "Google Cloud Platform (GCP)", detail: "Cloud compute, storage buckets, deployments" },
          { name: "SQLite & Sybase", detail: "Embedded storage & enterprise financial DBs" },
          { name: "JSON / NoSQL", detail: "Semi-structured document modeling" },
        ],
      },
      {
        title: "DevOps, Tooling & Core CSE",
        subtitle: "Foundations & Engineering Practices",
        icon: "wrench",
        badgeColor: "from-amber-500 to-pink-500",
        items: [
          { name: "Data Structures & Algorithms", detail: "Graph traversal, dynamic programming, sorting" },
          { name: "Object-Oriented Design (OOP)", detail: "Design patterns, modular architectures, SOLID" },
          { name: "Git & GitHub Actions", detail: "Version control, automated CI/CD workflows" },
          { name: "Jira & ITSM (CRQ)", detail: "Enterprise change-request ticket orchestration" },
          { name: "Claude Code & Copilot", detail: "AI-accelerated software engineering" },
          { name: "Postman & VS Code", detail: "Contract testing, debugging & profiling" },
        ],
      },
    ],
  },

  certifications: [
    {
      title: "Introduction To Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Cybersecurity",
      highlight: true,
    },
    {
      title: "IT Fundamentals for Cybersecurity",
      issuer: "IBM",
      category: "Cybersecurity",
      highlight: true,
    },
    {
      title: "Fundamentals Of Cyber Security",
      issuer: "Google",
      category: "Cybersecurity",
      highlight: true,
    },
    {
      title: "AI Essentials",
      issuer: "Google",
      category: "Applied AI & Cloud",
      highlight: true,
    },
    {
      title: "Gen AI Academy",
      issuer: "Google Cloud & Hack2Skill",
      category: "Applied AI & Cloud",
      highlight: true,
    },
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      category: "Software Systems",
      highlight: false,
    },
  ] as Certification[],
}
