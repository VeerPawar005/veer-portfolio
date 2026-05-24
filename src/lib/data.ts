// ============================================================
// PORTFOLIO DATA — Edit this file to customize all content
// ============================================================

export const personalInfo = {
  name: 'Veer Pawar',
  tagline: 'AI Engineer',
  roles: [
    'AI Engineer',
    'RAG Pipeline Architect',
    'Agentic AI Developer',
    'Computer Vision Engineer',
    'ML Systems Builder',
  ],
  email: 'veerpawar3123@gmail.com',
  phone: '+91 70202 68024',
  location: 'Wardha, Maharashtra — Open to Pan-India Relocation',
  linkedin: 'https://linkedin.com/in/veer-pawar-4a560a257',
  github: 'https://github.com/veerpawar', // update if different
  cgpa: '8.0',
  grad_year: '2026',
  college: 'CSMSS CHH Shahu College of Engineering',
  degree: 'B.Tech — Artificial Intelligence & Data Science',
  about: `Final-year AI & Data Science engineer (graduating 2026, CGPA 8.0/10) with real production experience — not just classroom projects. During my internship at Cloudzen, I designed and shipped an end-to-end agentic OCR + FAISS + LLM pipeline that cut manual procurement effort by ~40%.

I'm comfortable across the full stack: from raw data ingestion and model training to REST API deployment and cross-team delivery. I build systems that actually go live and make measurable impact — voice agents that negotiate over live phone lines, computer vision deployed on CCTV infrastructure, NLP pipelines powering real-time analytics.

I don't just experiment with AI. I ship it.`,
  badges: [
    'SIH 2025 National Finalist',
    'International Agri Hackathon Runner-Up',
    '2× National Hackathon Finalist',
  ],
  resumeUrl: '/Veer_Pawar_Resume_2026.pdf',
}

export const stats = [
  { label: 'Production Systems Shipped', value: 5, suffix: '+' },
  { label: 'Manual Effort Reduced', value: 40, suffix: '%' },
  { label: 'CGPA / 10', value: 8.0, suffix: '', decimals: 1 },
  { label: 'SKUs Tracked at 99% Uptime', value: 300, suffix: '+' },
]

export const skills = [
  {
    category: 'Core AI / ML',
    icon: '🧠',
    color: 'accent',
    items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'YOLOv8', 'CNN', 'Transfer Learning', 'VGG16'],
  },
  {
    category: 'LLM & RAG',
    icon: '⚡',
    color: 'accent-2',
    items: ['LLM Integration', 'RAG Pipelines', 'FAISS', 'Sentence Embeddings', 'Prompt Engineering', 'OCR', 'Agentic AI', 'Intent Detection'],
  },
  {
    category: 'Computer Vision',
    icon: '👁️',
    color: 'accent-3',
    items: ['YOLOv8', 'VGG16', 'OpenCV', 'FER-2013', 'Real-time Detection', 'BoT-SORT', 'Video Analytics', 'CCTV Systems'],
  },
  {
    category: 'Data & APIs',
    icon: '🔌',
    color: 'accent',
    items: ['FastAPI', 'Flask', 'REST APIs', 'ETL Pipelines', 'SQL', 'PySpark', 'Data Modeling', 'Web Scraping'],
  },
  {
    category: 'NLP & Voice',
    icon: '🎙️',
    color: 'accent-2',
    items: ['TF-IDF', 'NLP Pipelines', 'Sentiment Analysis', 'STT/TTS (Sarvam)', 'LiveKit', 'Multilingual AI', 'Redis', 'Intent Classification'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'accent-3',
    items: ['AWS', 'Redis', 'Task Scheduling', 'REST Deployment', 'API Architecture', 'System Design'],
  },
  {
    category: 'Viz & Analytics',
    icon: '📊',
    color: 'accent',
    items: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Dashboard Design', 'Data Pipelines'],
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'Cloudzen Innovations Pvt. Ltd.',
    duration: 'Dec 2025 – July 2026',
    type: 'Full-time Internship',
    color: 'accent',
    project: 'AI Voice Agent — Transport Procurement Platform',
    stack: ['Python', 'LiveKit', 'FastAPI', 'Sarvam STT/TTS', 'LLM', 'Sentence Transformers', 'Redis', 'RAG'],
    highlights: [
      'Built a real-time AI voice agent that autonomously calls freight suppliers, negotiates transport rates across target/yellow/red threshold zones, and manages the full call lifecycle — from identity confirmation to rate closure — over a live phone line.',
      'Designed a 3-layer intent detection pipeline: deterministic rule-matching → multilingual embedding similarity (intfloat/multilingual-e5-small with cosine scoring) → LLM classification — achieving reliable intent recognition across Hindi, Marathi, and English.',
      'Implemented a lightweight RAG system that chunks and indexes logistics JSON/text data at startup, scores chunks via token-overlap ranking, and injects relevant context into the LLM prompt at each turn.',
      'Integrated Sarvam STT (saarika:v2.5) and TTS (bulbul:v3) with per-language voice, pace, and pitch tuning across 11 Indian language codes with FastAPI + LiveKit + Redis-backed call-task queuing.',
    ],
    impact: '40% reduction in manual procurement effort · 11 Indian languages supported · Full call lifecycle automation',
  },
]

export const projects = [
  {
    id: 1,
    title: 'AI Garbage & Spill Detection System',
    tagline: 'Real-time CCTV incident response at 24 FPS',
    category: 'Computer Vision',
    categoryColor: 'accent-3',
    problem: 'Facilities management teams were missing waste spill incidents on CCTV, causing compliance failures and delayed cleanup responses.',
    solution: 'Fine-tuned YOLOv8 on 2,000+ self-annotated images and deployed real-time detection on live CCTV infrastructure with automated crew dispatch alerts.',
    impact: '24 FPS throughput · Sub-2-second automated crew dispatch · Zero missed incidents in production',
    stack: ['YOLOv8', 'Python', 'OpenCV', 'CCTV', 'Task Scheduling', 'Real-time Inference'],
    highlights: [
      '2,000+ self-annotated training images',
      '24 FPS real-time throughput on live CCTV',
      'Sub-2-second automated dispatch alerts',
      'Deployed on facility infrastructure',
    ],
    gradient: 'from-cyan-500/20 to-emerald-500/20',
    accent: '#00FF9D',
  },
  {
    id: 2,
    title: 'Student Engagement Tracking via Facial Cues',
    tagline: '87%+ emotion accuracy at <100ms latency',
    category: 'Deep Learning',
    categoryColor: 'accent-2',
    problem: 'Educators lacked objective real-time data on student engagement, making it hard to identify when students were confused, bored, or disengaged.',
    solution: 'Trained VGG16 on FER-2013 dataset for 7-class emotion classification. Served via Flask REST API, runs on standard hardware without GPU.',
    impact: '87%+ emotion classification accuracy · Under 100ms latency · No GPU required in inference',
    stack: ['VGG16', 'CNN', 'TensorFlow', 'Transfer Learning', 'Flask', 'FER-2013', 'REST API'],
    highlights: [
      '87%+ accuracy across 7 emotion classes',
      'Sub-100ms API response time',
      'Runs on CPU hardware in production',
      'Flask REST API serving',
    ],
    gradient: 'from-violet-500/20 to-blue-500/20',
    accent: '#7B61FF',
  },
  {
    id: 3,
    title: 'Text Sentiment Analysis — NLP Pipeline',
    tagline: '91%+ accuracy with full BI dashboard',
    category: 'NLP',
    categoryColor: 'accent',
    problem: 'Businesses sitting on mountains of customer review data had no scalable way to extract sentiment signals and visualize trends in real time.',
    solution: 'Built an end-to-end pipeline from raw data ingestion through TF-IDF + Logistic Regression / Random Forest classification to a live Power BI dashboard.',
    impact: '91%+ binary classification accuracy · Large-scale review data · Live Power BI dashboard',
    stack: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF', 'SQL', 'Power BI', 'ETL'],
    highlights: [
      '91%+ binary classification accuracy',
      'Random Forest + Logistic Regression ensemble',
      'Full ETL from raw ingestion to dashboard',
      'Live Power BI visualization',
    ],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: '#00D4FF',
  },
  {
    id: 4,
    title: 'Automated Price Tracker — Multi-Platform ETL',
    tagline: '300+ SKUs tracked at 99% uptime for 3 months',
    category: 'Data Engineering',
    categoryColor: 'accent-3',
    problem: 'Tracking competitive pricing across multiple e-commerce platforms manually is error-prone, slow, and doesn\'t scale.',
    solution: 'Built a scheduled ETL system with deduplication, schema validation, and event-triggered email alerts on configurable price-drop thresholds across 4 platforms.',
    impact: '300+ SKUs · 4 platforms · 99% uptime over 3 months · Event-triggered alerts',
    stack: ['Python', 'ETL', 'Web Scraping', 'Automation', 'Email Alerts', 'Scheduling'],
    highlights: [
      '300+ SKUs across 4 platforms',
      '99% uptime over 3 months',
      'Deduplication + schema validation',
      'Configurable price-drop threshold alerts',
    ],
    gradient: 'from-orange-500/20 to-yellow-500/20',
    accent: '#F59E0B',
  },
  {
    id: 5,
    title: 'Single Object Tracking System',
    tagline: 'Real-time 30 FPS object tracking with MOTA/MOTP',
    category: 'Video Analytics',
    categoryColor: 'accent-2',
    problem: 'Traditional detection models lose track of objects across video frames in dynamic environments, breaking downstream analytics pipelines.',
    solution: 'Implemented BoT-SORT for real-time single object tracking at 30 FPS with full MOTA/MOTP evaluation and temporal data modeling for sequential stream processing.',
    impact: '30 FPS real-time tracking · MOTA/MOTP evaluated · Dynamic environment robustness',
    stack: ['BoT-SORT', 'Python', 'Video Analytics', 'Sequential Data', 'MOTA/MOTP'],
    highlights: [
      '30 FPS in dynamic video environments',
      'MOTA/MOTP evaluation framework',
      'Temporal data modeling',
      'Sequential stream processing',
    ],
    gradient: 'from-pink-500/20 to-purple-500/20',
    accent: '#EC4899',
  },
]

export const certifications = [
  {
    title: 'Machine Learning, Deep Learning & Data Analytics Using Python',
    issuer: 'NPTEL',
    badge: 'Verified',
    color: 'accent',
    icon: '🎓',
  },
  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    badge: 'Certified',
    color: 'accent-2',
    icon: '🐍',
  },
  {
    title: 'SQL',
    issuer: 'HackerRank',
    badge: 'Certified',
    color: 'accent-3',
    icon: '🗄️',
  },
]

export const education = [
  {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'CSMSS CHH Shahu College of Engineering, Aurangabad',
    score: 'CGPA 8.0 / 10',
    year: '2022 – 2026',
    coursework: 'Machine Learning · Deep Learning · NLP · Computer Vision · Data Analytics · Database Management · Data Engineering',
  },
  {
    degree: 'HSC — Science',
    institution: 'R.K. High School & Jr. College',
    score: '78%',
    year: '2022',
  },
  {
    degree: 'SSC — CBSE',
    institution: 'G.C.P.S. Pulgaon',
    score: '82%',
    year: '2020',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]
