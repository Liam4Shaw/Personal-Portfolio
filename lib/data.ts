export const meta = {
  name: "Liam Shaw",
  title: "Applied AI · Analytics · Software",
  description:
    "Final-year CS + Business Analytics student at FLAME University. I build applied AI systems, analytics workflows, and software end-to-end — and care as much about business impact and practical execution as about the engineering.",
  email: "liamshaw421@gmail.com",
  phone: "+91 93303 77645",
  location: "Kolkata, India",
  github: "https://github.com/Liam4Shaw",
  website: "https://liamshaw.in",
  resumeUrl: "/Liam_Shaw_Resume.pdf",
}

export type Tag =
  | "AI" | "NLP" | "ML" | "Analytics"
  | "Generative AI" | "CRM" | "Full-Stack"
  | "Research" | "Product Analytics"

export interface Metric { value: string; label: string }

export interface ProjectDetail {
  problem: string
  approach: string
  architecture: string
  results: string
  challenges: string
  differently: string
  insight: string
}

export interface ProjectScreenshots {
  /** Maps a screenshot path to a short caption shown inline in the case study */
  images: { src: string; caption: string; placement: "problem" | "approach" | "architecture" | "results" | "challenges" | "differently" | "insight" | "header" }[]
}

export interface Project {
  id: string
  title: string
  subtitle: string
  summary: string
  role: string
  period: string
  tags: Tag[]
  metrics: Metric[]
  stack: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  /** Thumbnail shown in the project list row */
  listImage?: string
  screenshots?: ProjectScreenshots
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: "moodtrack",
    title: "MoodTrack",
    subtitle: "Multimodal Music Emotion Analysis",
    summary:
      "Graduation research project. A segment-level emotion recognition system that jointly models audio spectrograms and lyrics to track how a song's emotional character evolves over time — deployed as a full Flask web application with recommendations.",
    role: "Solo Researcher & Engineer",
    period: "2025 – 2026",
    tags: ["AI", "NLP", "ML", "Research"],
    metrics: [
      { value: "0.774", label: "Arousal CCC (late-fusion)" },
      { value: "0.533", label: "Personalised CCC (MERP)" },
      { value: "1,802", label: "Songs · DEAM dataset" },
      { value: "277",   label: "Listener profiles · MERP" },
    ],
    stack: ["PyTorch", "CNN-BiLSTM", "DistilBERT", "librosa", "HuggingFace", "Flask", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    listImage: "/screenshots/moodtrack-trajectory.png",
    screenshots: {
      images: [
        {
          src: "/screenshots/moodtrack-trajectory.png",
          caption: "Emotion trajectory chart — dual-line arousal/valence output from the late-fusion model with ground-truth overlay",
          placement: "results",
        },
        {
          src: "/screenshots/moodtrack-spectogram.png",
          caption: "Log-mel spectrogram + mood classification view — the audio pathway input to the CNN-BiLSTM tower",
          placement: "architecture",
        },
        {
          src: "/screenshots/moodtrack-recommendation.png",
          caption: "Persona-aware recommendation interface — nearest-neighbour engine weighted by valence (1.5×) across listener archetypes",
          placement: "insight",
        },
      ],
    },
    detail: {
      problem:
        "Most music emotion recognition systems reduce a full track to a single static label, discarding all temporal dynamics. Real listening is dynamic — a song shifts, builds, resolves. The challenge was building a system that tracks emotional trajectories at sub-second resolution while handling the structural difficulty that audio and lyrics carry fundamentally different types of emotional signal.",
      approach:
        "I trained three architectures on DEAM (1,802 songs with continuous 0.5-second arousal/valence annotations): an audio-only CNN-BiLSTM baseline, an early-fusion multimodal model, and a late-fusion dual-tower model with learned scalar fusion gates. Separately, I trained a personalised tri-branch model on MERP (277 listener profiles, 54 songs) to test whether demographic conditioning produces distinct perceived emotion trajectories.",
      architecture:
        "The late-fusion model runs two independent towers: a CNN-BiLSTM processing 128-bin log-mel spectrograms, and a DistilBERT encoder processing lyrics. Their outputs are combined via learned scalar gates α and β — trained jointly with the regression objective, not hand-tuned. They converged to α = 0.77 (audio-dominant for arousal) and β = 0.36 (lyric-dominant for valence), independently recovering a known music-psychology finding from data alone. The personalised model adds a ProfileMLP conditioned on 12-dimensional demographic vectors with a PersonalisationAttention layer.",
      results:
        "Late-fusion: arousal CCC 0.774, valence CCC 0.441. Personalised model: arousal CCC 0.533 across 5 listener archetypes with statistically differentiated trajectories. Deployed as a Flask + vanilla JS web app: real-time MP3 upload, Chart.js dual-line trajectory visualisation with ground-truth overlay, and a persona-aware nearest-neighbour recommendation engine (weighted Euclidean distance, valence 1.5× weighted).",
      challenges:
        "DEAM has only 12 of its 1,802 tracks with recoverable lyrics — early-fusion used hash-based fallback embeddings; late-fusion required DistilBERT embeddings pre-computed on Linux to avoid a Rust tokeniser crash on Windows. The personalisation model also required careful handling of subjective annotation noise in MERP.",
      differently:
        "Replace scalar gates with cross-attention fusion varying attention per time-step rather than per song. Expand the lyric dataset via a lyrics API at preprocessing time. Build the personalisation evaluation split from the start rather than retrofitting it.",
      insight:
        "The fusion gates converged to values consistent with music psychology literature purely from gradient descent — an implicit sanity check on the model. Designing architectures that surface interpretable priors from data, rather than hard-coding assumptions, is underrated and generally more trustworthy.",
    },
  },
  {
    id: "scoutai",
    title: "ScoutAI",
    subtitle: "Generative AI Football Scouting Platform",
    summary:
      "Full-stack NLP platform for professional football analytics. Plain-language queries via NL2SQL, chain-of-thought AI scouting reports, ML player profiling with PCA and Random Forest, and four agentic capabilities — all over a 370 MB football database.",
    role: "Team (2 members) — backend, AI pipeline, ML subsystem",
    period: "Early 2026",
    tags: ["Generative AI", "NLP", "ML", "Full-Stack"],
    metrics: [
      { value: "4",      label: "Agentic capabilities" },
      { value: "370 MB", label: "Football database" },
      { value: "20+",    label: "REST endpoints" },
      { value: "8",      label: "SPA frontend modules" },
    ],
    stack: ["FastAPI", "LLaMA 3.1 (Groq)", "Ollama", "SQLite", "SQLAlchemy", "scikit-learn", "RAG", "JWT", "diskcache"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
    // No screenshots yet — placeholder will render
    detail: {
      problem:
        "Football analysts need to ask intuitive questions over enormous relational databases: 'find me a left-footed midfielder aged under 23 with high pressing intensity.' Translating that intent into correct, safe SQL and surfacing the result as a readable insight requires technical skill most scouts don't have — and is slow even for those who do.",
      approach:
        "Built a dual-path system: an NL2SQL pipeline for structured database queries, and a RAG-grounded LLM pipeline for open-ended scouting narratives. The ML subsystem operates independently with PCA + Random Forest for dimensionality reduction and feature importance, plus cosine-similarity nearest-neighbour search for tactically similar player discovery.",
      architecture:
        "FastAPI backend with 20+ endpoints and 14 ORM-mapped tables. NL2SQL: user query → schema-prompted LLaMA 3.1 (Groq, temp = 0) → error-correction loop → SELECT-only SQL guard → SQLite execution → natural-language result. Groq Cloud primary; Ollama/Mistral local fallback. RAG grounds LLM inference in archetype statistics. Session state via diskcache (1-hour TTL, 4-turn context window). JWT + bcrypt auth with optional Supabase integration.",
      results:
        "Four agentic capabilities delivered: scout-note preference extraction (async LLM), profile-contextualised query prompts, autonomous transfer-recommendation agent orchestrating search/similarity/report in sequence, and JWT-bound cross-request identity resolution. Full 8-module SPA frontend served from FastAPI.",
      challenges:
        "NL2SQL reliability — LLMs inconsistently generate queries referencing non-existent columns or incorrect JOINs. Solved with schema-injection system prompt, a SQL validator catching invalid references before execution, and a self-correction retry loop feeding error messages back to the LLM.",
      differently:
        "Replace diskcache sessions with a vector database for semantic memory across sessions — so the assistant recalls scout preferences without re-extracting them each conversation. Add streaming responses so long scouting reports feel interactive.",
      insight:
        "RAG fundamentally changes what you ask the LLM to do. Without it, you're asking the model to recall statistics it can't reliably remember. With RAG, you're asking it to reason about statistics you've already retrieved and injected. The LLM becomes an interpreter of your data — that shift is what makes scouting reports actually trustworthy.",
    },
  },
  {
    id: "fakenews",
    title: "Hybrid Fake News Detection",
    subtitle: "RoBERTa + 26 AMR Semantic Features",
    summary:
      "A hybrid NLP classifier combining RoBERTa transformer embeddings with 26 hand-engineered Abstract Meaning Representation features. Outperforms pure-transformer baselines by ~18 percentage points on FakeNewsNet (23,196 articles).",
    role: "Team (2 members) — feature engineering, modelling, evaluation",
    period: "Dec 2025",
    tags: ["NLP", "ML", "Research"],
    metrics: [
      { value: "87.07%", label: "Test accuracy" },
      { value: "26",     label: "AMR semantic features" },
      { value: "23,196", label: "Articles · FakeNewsNet" },
      { value: "+3%",    label: "Threshold opt. gain" },
    ],
    stack: ["RoBERTa", "PyTorch", "spaCy", "AMR Parsing", "Focal Loss", "FakeNewsNet"],
    githubUrl: "#",
    featured: true,
    detail: {
      problem:
        "Fake news detection has a structural weakness: models trained on surface language patterns can be fooled by well-written misinformation. Transformers capture semantics but miss structural tells — passive voice obscuring agency, unusual named-entity distributions, fragmented causal chains. AMR graphs make these structural features explicit.",
      approach:
        "Combine RoBERTa's deep contextual understanding with 26 hand-engineered AMR structural features in a hybrid classifier, expecting each pathway to contribute orthogonal signal — what was said vs. how it was structured.",
      architecture:
        "Dual-pathway: RoBERTa 768-dim [CLS] embeddings + 26 AMR features from spaCy dependency parse graphs (entity density/coreference: 6, syntactic passivisation/tree depth: 8, semantic modality markers: 7, sentiment/style: 5). Both concatenated before the classification head. Focal loss for 3:1 class imbalance. Threshold optimisation: 0.5 → 0.1.",
      results:
        "87.07% test accuracy on FakeNewsNet. Ablation: RoBERTa alone ~69%; combined 87.07%. Focal loss ~2% over cross-entropy; threshold optimisation +3% — the simplest change with the largest single-step impact. Feature importance confirmed passivisation patterns and entity-type distributions as top AMR discriminators.",
      challenges:
        "AMR feature extraction required precomputation and caching at scale (23,196 articles). 3:1 class imbalance made threshold selection critical — a naive model achieves ~75% just by always predicting 'real', making the 0.1 threshold counterintuitive but empirically correct.",
      differently:
        "Explore GNNs operating directly on full AMR graph structures rather than reducing them to scalar vectors — the current flattening step discards significant structural information. Also experiment with multi-task learning jointly training fake news detection and claim verification.",
      insight:
        "The hybrid outperforms either modality alone because AMR features are orthogonal to semantic content — they capture how something is said, not what. That orthogonality is the key to hybrid model gains, and it suggests a general principle: features that are structurally independent of your primary signal are worth adding even if individually weaker.",
    },
  },
  {
    id: "moodle-dashboard",
    title: "Moodle Insight Dashboard",
    subtitle: "Client Work · FLAME Centre for Digital Learning",
    summary:
      "Deployed analytics dashboard for FLAME University's Centre for Digital Learning. Replaced a manual Excel-based workflow — CSV export, manual scoring, spreadsheet flagging — with a seconds-to-insight web application tracking pre-orientation student engagement.",
    role: "Solo Developer — client engagement, product design, engineering",
    period: "2024 – 2025",
    tags: ["Analytics", "Full-Stack", "Product Analytics"],
    metrics: [
      { value: "Deployed", label: "Active production use" },
      { value: "Hours → s", label: "Workflow time reduction" },
      { value: "4 sessions", label: "Stakeholder co-design" },
      { value: "Local-first", label: "Privacy-safe architecture" },
    ],
    stack: ["JavaScript", "HTML/CSS", "Moodle API", "Weighted Scoring", "Client-side"],
    featured: true,
    listImage: "/screenshots/moodle-overview.png",
    screenshots: {
      images: [
        {
          src: "/screenshots/moodle-overview.png",
          caption: "Main dashboard overview — engagement summary across all pre-orientation modules",
          placement: "header",
        },
        {
          src: "/screenshots/moodle-student-table.png",
          caption: "Student progress summary table — traffic-light status system flagging at-risk students",
          placement: "results",
        },
        {
          src: "/screenshots/moodle-detail-modal.png",
          caption: "Student progress detail modal — per-module breakdown for individual student review",
          placement: "challenges",
        },
        {
          src: "/screenshots/moodle-course-modal.png",
          caption: "Course modal — module-level engagement data for CDL staff",
          placement: "architecture",
        },
      ],
    },
    detail: {
      problem:
        "FLAME's Centre for Digital Learning was tracking pre-orientation engagement by hand: exporting Moodle CSVs, opening them in Excel, calculating engagement scores manually. The process consumed hours of staff time every cycle. The fundamental problem wasn't the tool — it was that there was no tool at all for the specific workflow they needed.",
      approach:
        "I went local-first as a deliberate MVP strategy. Moodle API access wasn't immediately available, and every conversation about student data started with privacy concerns. Building client-side meant we could ship without waiting on IT infrastructure decisions or data governance approvals. Four sit-down sessions with the CDL team ruthlessly cut features that didn't earn their place.",
      architecture:
        "A fully client-side web application — no server, no database, no backend. Users load a CSV exported from Moodle; the application parses it in-browser, applies the weighted scoring algorithm, and renders the full dashboard with traffic-light status flags. The course modal provides drill-down into per-module engagement. All data stays on the user's machine.",
      results:
        "Deployed and in active use by the CDL team. Replaces an hours-long Excel workflow with seconds-to-insight. The weighted scoring algorithm and traffic-light flagging system both came directly from stakeholder sessions: 'we just want to see who's red.' That simplicity is the point — the system surfaces exactly what the team asked for.",
      challenges:
        "The primary constraints were non-technical: privacy concerns shaped architecture decisions more than capability did. Shipping client-side removed an entire category of objection. Feature prioritisation was genuinely difficult — the CDL team had a long wish list and four sessions to decide what actually mattered. The discipline of cutting features is harder than the discipline of building them.",
      differently:
        "With Moodle API access, the CSV import step disappears — the dashboard would pull live data. I'd also add a simple export to PDF for the CDL team's reporting workflow. The scoring weights could be made configurable in the UI rather than baked in to the logic.",
      insight:
        "The most consequential design decision wasn't technical — it was choosing to build client-side. That single choice removed IT approval as a blocker, removed privacy as an objection, and let the project ship in weeks rather than months. Constraints that look like limitations are often load-bearing: they force you toward decisions that actually work.",
    },
  },
  {
    id: "multimodal-mer",
    title: "Multimodal Music Emotion Recognition",
    subtitle: "ResNet-18 + DistilRoBERTa · Gated Fusion",
    summary:
      "4-quadrant emotion classifier using gated late-fusion of ResNet-18 audio encoding with DistilRoBERTa lyric encoding. The sigmoid gate dynamically weights each modality per sample — Q2 (Angry) F1 = 0.91.",
    role: "Team (4 members) — architecture design, fusion mechanism",
    period: "Dec 2025",
    tags: ["AI", "NLP", "ML", "Research"],
    metrics: [
      { value: "78%",   label: "Test accuracy" },
      { value: "0.91",  label: "Q2 Angry F1 score" },
      { value: "2,000", label: "MERGE-Balanced tracks" },
      { value: "+18pp", label: "SpecAugment gain" },
    ],
    stack: ["ResNet-18", "DistilRoBERTa", "SpecAugment", "Gated Attention", "AdamW", "PyTorch"],
    githubUrl: "#",
    featured: false,
    detail: {
      problem:
        "Single-modality emotion classifiers either process audio (missing lyrical meaning) or lyrics (missing timbre and energy). The challenge: build a fusion that lets each modality contribute according to the emotional information it actually carries — not a fixed weighted average.",
      approach:
        "Gated late-fusion: ResNet-18 processes log-mel spectrograms; DistilRoBERTa encodes lyric context via [CLS] token. A learned sigmoid gate α dynamically weights audio vs. lyric contribution per sample, trained end-to-end with the classification objective.",
      architecture:
        "ResNet-18 adapted from 3-channel RGB to 1-channel grayscale by averaging pretrained weights. 128-bin Mel-spectrograms (1, 128, 1292). DistilRoBERTa BPE tokenisation. Fused 256-dim embedding to 4-class softmax. SpecAugment (frequency + time masking) applied during training.",
      results:
        "78% test accuracy on 300-song held-out set. Q2 (Angry) F1 = 0.91 — highest confidence where audio energy and aggressive vocabulary both fire. Gate up-weighted lyrics for Sad, audio for Angry. SpecAugment reduced the train-validation gap by ~18pp.",
      challenges:
        "Lyric extraction via Genius API failed for ~15% of tracks — required MusicBrainz fallback. The gate occasionally collapsed to a constant value during early training — resolved by adding entropy regularisation to the gate's loss term.",
      differently:
        "Replace the scalar gate with cross-attention over token-level lyric features rather than just [CLS] pooling — letting the model focus on emotionally charged phrases rather than treating the whole lyric as one vector.",
      insight:
        "SpecAugment was the highest-impact intervention — more than architecture changes. The model was overfitting to recording artefacts rather than emotional content. When a model overfits badly, the first question should be 'what is it actually learning?' — not 'how do I make it more complex?'",
    },
  },
]

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  type: string
  highlight?: string
  bullets: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: "aceplus",
    company: "ACEplus",
    role: "Analytics & CRM Intern",
    period: "May – Jul 2025",
    location: "Derek O'Brien & Associates · Kolkata · Hybrid",
    type: "internship",
    bullets: [
      "Designed Zone_Module_Action naming convention; audited 50+ inconsistent CleverTap event keys; authored 50+ event spec + 3-phase migration plan — formally adopted by the engineering team.",
      "Cohort analysis revealed workshop-driven users earned ~2× more in-app ACEs than organic signups — adopted by the product team to reprioritise school engagement programmes.",
      "Python + FuzzyWuzzy batch script resolved ~15% of inconsistent school-name profile fields, improving segmentation for school-specific campaigns and coach reports.",
      "Configured and tested CleverTap retention/re-engagement journeys (push, in-app, email, WhatsApp); validated offline event-caching and new feature integrations via Jira.",
    ],
    tags: ["CleverTap", "Python", "Cohort Analysis", "CRM", "Jira", "FuzzyWuzzy"],
  },
  {
    id: "mandrake",
    company: "Mandrake Tech",
    role: "Software Intern",
    period: "Oct 2024 – Jan 2025",
    location: "Pune",
    type: "internship",
    bullets: [
      "Built a containerised URL-shortening service (Spring Boot, PostgreSQL, JWT auth); Docker + Maven configuration removed environment-parity issues across the dev team.",
      "Implemented REST-integrated frontend interfaces; owned the full request lifecycle from client UI through API routing to database persistence.",
    ],
    tags: ["Spring Boot", "Docker", "PostgreSQL", "JWT", "Maven", "REST"],
  },
  {
    id: "willwali",
    company: "Willwali",
    role: "Software Developer Intern",
    period: "May – Jul 2024",
    location: "Remote · Kuala Lumpur",
    type: "internship",
    bullets: [
      "Part of the inaugural intern cohort at an early-stage Malaysian legal-tech startup automating will-writing across multiple legal jurisdictions.",
      "Flask/Jinja CRUD microservices; 90%+ test coverage (unittest + pytest); identified and documented 30+ bugs in the Bubble will-creation MVP.",
      "Validated automated will outputs against Hindu Succession Act, Islamic Faraid distribution, and Malaysian inheritance law edge cases.",
      "Established team Git workflows, PEP 8 standards, docstrings, function annotations, and README documentation.",
    ],
    tags: ["Flask", "Python", "pytest", "Bubble.io", "Git"],
  },
  {
    id: "flame-sports",
    company: "FLAME Sports",
    role: "Sports Analytics & Reporting",
    period: "2025 – 2026",
    location: "FLAME University, Pune",
    type: "analytics",
    bullets: [
      "Consolidated club activity and media performance datasets across multiple sports verticals from disparate reporting sources.",
      "Derived comparative insights across clubs, time periods, and audience segments — including a Football Club breakout with 98.2% non-follower view share identified as an organic reach anomaly.",
      "18.91M total views · 6.57M accounts reached · 79,100+ followers gained · 72.4% non-follower view share.",
      "Produced final analytical reports surfacing performance trends and benchmarks across all sport verticals.",
    ],
    tags: ["Data Analysis", "Reporting", "Insight Generation", "Excel"],
  },
]

export interface SkillGroup { label: string; skills: string[] }
export const skillGroups: SkillGroup[] = [
  {
    label: "ML & Deep Learning",
    skills: ["PyTorch", "scikit-learn", "CNN-BiLSTM", "ResNet-18", "XGBoost", "PCA", "KMeans", "Random Forest"],
  },
  {
    label: "NLP & Transformers",
    skills: ["RoBERTa", "DistilBERT", "HuggingFace", "NL2SQL", "RAG", "AMR Parsing", "Semantic Search"],
  },
  {
    label: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "C++", "HTML/CSS"],
  },
  {
    label: "Frameworks & Infrastructure",
    skills: ["FastAPI", "Flask", "Spring Boot", "React", "Docker", "Node.js", "SQLAlchemy"],
  },
  {
    label: "Analytics & CRM",
    skills: ["CleverTap", "Cohort Analysis", "Funnel Analysis", "pandas", "NumPy", "Matplotlib", "FuzzyWuzzy", "Excel"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "Jira", "SQLite", "PostgreSQL", "Bubble.io", "Jupyter", "HuggingFace Hub"],
  },
]

export interface Education { institution: string; degree: string; period: string; highlights: string[] }
export const education: Education[] = [
  {
    institution: "FLAME University, Pune",
    degree: "B.Sc. (Hons) Computer Science · Minor: Business Analytics",
    period: "2022 – 2026",
    highlights: [
      "Full Academic Scholarship",
    ],
  },
  {
    institution: "La Martiniere for Boys, Kolkata",
    degree: "ISC / ICSE",
    period: "2007 – 2022",
    highlights: ["ISC 2022 — 95%", "ICSE 2020 — 92.4%", "SAT — 1540 / 1600 (99th percentile)"],
  },
]

export interface Certification { name: string; issuer: string; year: string }
export const certifications: Certification[] = [
  { name: "CS50x: Introduction to Computer Science", issuer: "HarvardX · edX", year: "2021" },
  { name: "Building AI Literacy", issuer: "LinkedIn Learning", year: "Mar 2025" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2021" },
]
