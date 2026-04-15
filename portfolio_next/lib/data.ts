export const PERSON = {
  name: 'Ashutosh Suryawanshi',
  headline: 'AI Engineer | Generative AI | RAG Systems | LLM Applications',
  tagline:
    'Fresher AI Engineer specialising in Generative AI, RAG pipelines, and Agentic AI systems. Built production-ready LLM applications achieving 90%+ retrieval accuracy (RAGAS-evaluated) with real observability, deployment, and measurable impact.',
  location: 'Hyderabad, India',
  email: 'ashusurya00@gmail.com',
  phone: '+91 7385645001',
  github: 'https://github.com/Ashusurya00',
  linkedin: 'https://linkedin.com/in/ashutosh-suryawanshi-26aa46378',
  roles: ['AI Engineer', 'GenAI Builder', 'Data Scientist', 'RAG Specialist', 'ML Engineer'],
};

export const STATS = [
  { val: '90%+', label: 'RAG Accuracy' },
  { val: '65%', label: 'Faster Processing' },
  { val: '3+', label: 'Live AI Apps' },
  { val: '4', label: 'Certifications' },
];

export const PROJECTS = [
  {
    slug: 'rag-banking-chatbot',
    title: 'AI Banking RAG Chatbot',
    description:
      'Enterprise-grade Retrieval-Augmented Generation chatbot for banking queries — KYC, fraud detection, loan advisory, and personalised recommendations. Evaluated with RAGAS and traced with LangSmith for full production observability.',
    stack: ['FAISS', 'Sentence Transformers', 'Gemini API', 'RAGAS', 'LangSmith', 'Streamlit', 'Python'],
    metrics: [
      { val: '90%+', label: 'Retrieval Accuracy' },
      { val: '10K+', label: 'Docs Indexed' },
      { val: '<2s', label: 'Avg Latency' },
    ],
    github: 'https://github.com/Ashusurya00/Generative-ai-banking-chatbot',
    demo: 'https://generative-ai-banking-chatbot-gbjdmmgwpwwel3rerqsgru.streamlit.app/',
    icon: '🏦',
    accent: '#00d4aa',
    featured: true,
  },
  {
    slug: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer & Job Matcher',
    description:
      'AI-powered resume scoring system with skill-gap analysis, job-match scoring, and downloadable PDF reports with actionable recommendations powered by LLM APIs.',
    stack: ['Python', 'Streamlit', 'OpenAI API', 'pdfplumber', 'reportlab', 'NLP'],
    metrics: [
      { val: 'LLM', label: 'Scoring' },
      { val: 'PDF', label: 'Export' },
    ],
    github: 'https://github.com/Ashusurya00/AI-resume-analyzer',
    demo: 'https://ai-resume-analyzer-95bnujjzjadh3m46hkhtar.streamlit.app/',
    icon: '📄',
    accent: '#38bdf8',
    featured: true,
  },
  {
    slug: 'multi-agent-system',
    title: 'Multi-Agent AI System',
    description:
      '5-agent orchestration workflow using CrewAI and LangGraph for document understanding, task planning, and automated report generation with persistent memory and tool-calling.',
    stack: ['CrewAI', 'LangGraph', 'LangChain', 'OpenAI API', 'Streamlit', 'Python'],
    metrics: [
      { val: '5', label: 'Agents' },
      { val: '65%', label: 'Faster Processing' },
    ],
    github: 'https://github.com/Ashusurya00/Multi-Agent-System',
    demo: 'https://multi-agent-system-4hey2jhs6vzkewdumxu3uy.streamlit.app/',
    icon: '🤖',
    accent: '#a78bfa',
    featured: true,
  },
  {
    slug: 'insurance-fraud',
    title: 'Insurance Fraud Detection',
    description:
      'ML-based fraud detection and claim analysis pipeline using Python and Scikit-learn with ROC-AUC evaluation on real insurance datasets.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'ROC-AUC', 'Matplotlib'],
    metrics: [],
    github: 'https://github.com/Ashusurya00/insurance-fraud',
    demo: null,
    icon: '🔍',
    accent: '#f87171',
    featured: false,
  },
  {
    slug: 'ecommerce-clone',
    title: 'E-Commerce Web App',
    description:
      'Full-stack responsive e-commerce platform with product listings, cart management, and a Node.js backend with REST API.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'REST API'],
    metrics: [],
    github: 'https://github.com/Ashusurya00/ecommerce-clone',
    demo: null,
    icon: '🛒',
    accent: '#fbbf24',
    featured: false,
  },
];

export const SKILLS = [
  {
    category: 'Generative AI / LLMs',
    icon: '🧠',
    items: [
      { name: 'LangChain', level: 'expert' },
      { name: 'LlamaIndex', level: 'expert' },
      { name: 'RAG Pipelines', level: 'expert' },
      { name: 'OpenAI API', level: 'expert' },
      { name: 'Gemini API', level: 'expert' },
      { name: 'HuggingFace', level: 'expert' },
      { name: 'LangSmith', level: 'expert' },
      { name: 'RAGAS', level: 'expert' },
      { name: 'FAISS', level: 'expert' },
      { name: 'Pinecone', level: 'proficient' },
      { name: 'ChromaDB', level: 'proficient' },
      { name: 'Weaviate', level: 'familiar' },
    ],
  },
  {
    category: 'Agentic AI',
    icon: '🤖',
    items: [
      { name: 'CrewAI', level: 'expert' },
      { name: 'LangGraph', level: 'expert' },
      { name: 'AutoGen', level: 'proficient' },
      { name: 'Multi-Agent Systems', level: 'expert' },
      { name: 'Tool Calling', level: 'expert' },
      { name: 'Agent Memory', level: 'proficient' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    icon: '⚙️',
    items: [
      { name: 'Python', level: 'expert' },
      { name: 'PyTorch', level: 'expert' },
      { name: 'Scikit-learn', level: 'expert' },
      { name: 'TensorFlow', level: 'proficient' },
      { name: 'NLP', level: 'expert' },
      { name: 'Computer Vision', level: 'proficient' },
      { name: 'LoRA / PEFT', level: 'familiar' },
      { name: 'RLHF', level: 'familiar' },
    ],
  },
  {
    category: 'Data Science & Analytics',
    icon: '📊',
    items: [
      { name: 'Pandas', level: 'expert' },
      { name: 'NumPy', level: 'expert' },
      { name: 'EDA', level: 'expert' },
      { name: 'Feature Engineering', level: 'expert' },
      { name: 'SQL', level: 'expert' },
      { name: 'Statistical Analysis', level: 'proficient' },
    ],
  },
  {
    category: 'Data Visualization',
    icon: '📈',
    items: [
      { name: 'Power BI', level: 'expert' },
      { name: 'Matplotlib', level: 'expert' },
      { name: 'Seaborn', level: 'expert' },
      { name: 'Tableau', level: 'proficient' },
      { name: 'Plotly', level: 'proficient' },
    ],
  },
  {
    category: 'Data Engineering',
    icon: '🔧',
    items: [
      { name: 'Kafka', level: 'proficient' },
      { name: 'Airflow', level: 'proficient' },
      { name: 'ETL Pipelines', level: 'proficient' },
      { name: 'DVC', level: 'familiar' },
      { name: 'MLflow', level: 'proficient' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS', level: 'proficient' },
      { name: 'GCP', level: 'proficient' },
      { name: 'Azure', level: 'proficient' },
      { name: 'Docker', level: 'expert' },
      { name: 'Kubernetes', level: 'proficient' },
      { name: 'CI/CD', level: 'proficient' },
    ],
  },
  {
    category: 'APIs & Deployment',
    icon: '🚀',
    items: [
      { name: 'FastAPI', level: 'expert' },
      { name: 'Streamlit', level: 'expert' },
      { name: 'Gradio', level: 'proficient' },
      { name: 'REST APIs', level: 'expert' },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: 'Data Science Intern',
    company: 'SaiKet Systems',
    type: 'B2B Analytics Platform',
    bullets: [
      'Built 3 ML models achieving up to 85% accuracy using Scikit-learn',
      'Evaluated models using ROC-AUC and F1-score metrics',
      'Automated reporting workflows reducing manual effort by 60%',
      'Developed Power BI dashboards tracking 5+ KPIs for business insights',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Codveda',
    type: 'Data Services Company',
    bullets: [
      'Performed EDA on 20K+ records identifying key business trends',
      'Reduced reporting time from 4 hours to 20 minutes using automation',
      'Built analytics dashboards and automated data pipelines',
      'Improved data quality improving downstream ML model performance by 12%',
    ],
  },
];

export const CERTIFICATIONS = [
  { name: 'Generative AI & LLMs', issuer: 'OpenAI Academy', year: '2026' },
  { name: 'Full Stack Data Science', issuer: 'Naresh IT', year: '2026' },
  { name: 'Data Science Mentorship', issuer: 'CampusX', year: '2026' },
  { name: 'Full Stack Development', issuer: 'Internshala', year: '2024' },
];

export const ACHIEVEMENTS = [
  { icon: '🏆', text: 'Winner — Code Debugging Contest, College Tech Fest 2024 (100+ participants)' },
  { icon: '🥉', text: 'Top 3 — AI Hackathon, Inter-college Hackathon 2024 (50+ teams)' },
  { icon: '🤖', text: 'Recognised for AI Automation Innovation' },
];

export const MARQUEE_SKILLS = [
  'LangChain', 'LlamaIndex', 'RAG', 'CrewAI', 'LangGraph',
  'FAISS', 'PyTorch', 'LangSmith', 'RAGAS', 'FastAPI',
  'Docker', 'AWS', 'OpenAI API', 'HuggingFace', 'MLflow', 'Pinecone',
];
