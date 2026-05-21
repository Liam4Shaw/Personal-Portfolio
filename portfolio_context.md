# Liam Shaw — Full Portfolio Content & Context

This document is a comprehensive consolidation of all the content, projects, experience, skills, biography, and technical architecture of Liam Shaw's professional portfolio site (`liamshaw.in`). Use this file directly as context for any AI agents, LLMs, resumes, or profile updates.

---

## 1. Biography & Meta-Information

*   **Name:** Liam Shaw
*   **Professional Title:** Applied AI · Analytics · Software
*   **Location:** Kolkata, India
*   **Email:** liamshaw421@gmail.com
*   **Phone:** +91 93303 77645
*   **GitHub:** [https://github.com/Liam4Shaw](https://github.com/Liam4Shaw)
*   **Website:** [https://liamshaw.in](https://liamshaw.in)
*   **Resume Path:** `/Liam_Shaw_Resume_OnePage.pdf`
*   **Current Status (Local Time 2026):** Final-year B.Sc. (Hons) Computer Science student at FLAME University, Pune (Minor: Business Analytics).
*   **Availability:** Open to opportunities (internships + full-time) from May 2026 onwards.

### Core Value Proposition & Elevator Pitch
> "I build systems that help people make better decisions. Audio-to-emotion models, AI scouting platforms, engagement analytics for universities — the common thread is turning messy data into something a person can act on. I build applied AI systems, analytics workflows, and software end-to-end — and care as much about business impact and practical execution as about the engineering."

---

## 2. Core Philosophy & Design Principles

Liam's approach to building products and conducting research is guided by four load-bearing principles:

1.  **Research that Ships:** Every AI/ML project must end with a running, usable application, not just a static table of results. For instance, *MoodTrack* is deployed as a Flask web application, and *ScoutAI* is a full-stack platform.
2.  **Data as a Decision Tool:** Coming from a dual Computer Science and Business Analytics background, the immediate question is always: *what decision does this data change?* Data is valuable for its strategic impact, not just its statistical interest.
3.  **Constraints as Design Input:** Pragmatic decision-making in the face of constraints leads to successful shipping. For example, building the Moodle dashboard client-side (local-first) removed data privacy concerns and IT approvals, enabling deployment in weeks instead of months.
4.  **Generalist with Depth:** Moving fluidly across NLP research, backend engineering, CRM analytics, and client-facing work. The common thread is to understand the problem clearly, pick the right tool, and execute cleanly.

---

## 3. Detailed Projects & Technical Case Studies

### A. MoodTrack — Multimodal Music Emotion Analysis (Graduation Project)
*   **Tagline:** Multimodal Music Emotion Analysis & Recommendation
*   **Role:** Solo Researcher & Engineer
*   **Period:** 2025 – 2026 (Graduation Research)
*   **Featured:** Yes
*   **Core Metrics:**
    *   `0.774` - Arousal CCC (late-fusion)
    *   `0.533` - Personalised CCC (MERP)
    *   `1,802` - Songs · DEAM dataset
    *   `277` - Listener profiles · MERP
*   **Tech Stack:** PyTorch, CNN-BiLSTM, DistilBERT, librosa, HuggingFace, Flask, Chart.js
*   **Case Study Details:**
    *   **The Problem:** Most music emotion recognition (MER) systems reduce a full track to a single static label, discarding temporal dynamics. Listening is inherently dynamic—songs shift, build, and resolve. The challenge was tracking emotional trajectories at sub-second (0.5-second) resolution while fusing audio and lyrics, which fundamentally carry different emotional signals.
    *   **The Approach:** Trained three architectures on the DEAM dataset (1,802 songs with continuous 0.5s arousal/valence annotations): an audio-only CNN-BiLSTM baseline, an early-fusion model, and a late-fusion dual-tower model with learned scalar fusion gates. Additionally, trained a personalised tri-branch model on the MERP dataset (277 listener profiles, 54 songs) to test whether demographic conditioning produces distinct perceived emotion trajectories.
    *   **The Architecture:** The late-fusion model runs two independent towers: a CNN-BiLSTM processing 128-bin log-mel spectrograms, and a DistilBERT encoder processing lyrics. Their outputs are combined via learned scalar gates $\alpha$ and $\beta$ (trained jointly with the regression objective). They converged to $\alpha = 0.77$ (audio-dominant for arousal) and $\beta = 0.36$ (lyric-dominant for valence), independently recovering a known music-psychology finding from data alone. The personalised model adds a `ProfileMLP` conditioned on 12-dimensional demographic vectors with a `PersonalisationAttention` layer.
    *   **The Results:** Achieved late-fusion arousal CCC of 0.774 and valence CCC of 0.441. The personalised model attained an arousal CCC of 0.533 across 5 listener archetypes with statistically differentiated trajectories. Deployed as a Flask + vanilla JS web app supporting real-time MP3 upload, Chart.js dual-line trajectory visualization with ground-truth overlay, and a persona-aware nearest-neighbour recommendation engine (weighted Euclidean distance, valence 1.5× weighted).
    *   **Challenges Faced:** DEAM has only 12 tracks with recoverable lyrics; early-fusion required hash-based fallback embeddings. The late-fusion DistilBERT embeddings had to be precomputed on Linux to bypass a Rust tokenizer crash on Windows. Personalization model required careful handling of highly subjective annotation noise in MERP.
    *   **Next-Step Improvements (What to do differently):** Replace the scalar gates with cross-attention fusion that varies attention per time-step rather than per song. Integrate a lyrics API at preprocessing time to expand the text dataset. Build the personalization evaluation split from the start rather than retrofitting it.
    *   **Key Insight:** The fusion gates converged to values consistent with music psychology literature purely from gradient descent, acting as an implicit sanity check. surafcing interpretable priors from data, rather than hard-coding assumptions, is underrated and highly trustworthy.

---

### B. ScoutAI — Generative AI Football Scouting Platform
*   **Tagline:** Generative AI Football Scouting Platform
*   **Role:** Team (2 members) — Backend, AI pipeline, ML subsystem
*   **Period:** Early 2026
*   **Featured:** Yes
*   **Core Metrics:**
    *   `4` - Agentic capabilities
    *   `370 MB` - Football database size
    *   `20+` - REST endpoints
    *   `8` - SPA frontend modules
*   **Tech Stack:** FastAPI, LLaMA 3.1 (Groq), Ollama, SQLite, SQLAlchemy, scikit-learn, RAG, JWT, diskcache
*   **Case Study Details:**
    *   **The Problem:** Football analysts need to ask intuitive, plain-language questions over massive relational databases (e.g., *"find me a left-footed midfielder aged under 23 with high pressing intensity"*). Translating that intent into correct, safe SQL and surfacing readable insights requires technical skill that most scouts do not possess.
    *   **The Approach:** Built a dual-path system: an NL2SQL pipeline for structured database queries, and a RAG-grounded LLM pipeline for open-ended scouting narratives. An independent ML subsystem handles dimensionality reduction and tactical player matching.
    *   **The Architecture:** FastAPI backend with 20+ endpoints and 14 ORM-mapped tables. The NL2SQL pipeline takes a user query $\rightarrow$ schema-prompted LLaMA 3.1 (Groq, temperature = 0) $\rightarrow$ error-correction loop $\rightarrow$ SELECT-only SQL guard $\rightarrow$ SQLite execution $\rightarrow$ natural-language result. It utilizes Groq Cloud as primary and local Ollama/Mistral as fallback. Session state is managed via `diskcache` (1-hour TTL, 4-turn context window). Authentication is JWT + bcrypt with optional Supabase integration. The ML subsystem uses PCA + Random Forest for feature importance and cosine similarity for finding tactically similar players.
    *   **The Results:** Delivered four key agentic capabilities: async LLM scout-note preference extraction, profile-contextualized query prompts, an autonomous transfer-recommendation agent that orchestrates search/similarity/reports in sequence, and JWT-bound cross-request identity resolution. An 8-module Single Page Application (SPA) frontend is served directly from FastAPI.
    *   **Challenges Faced:** NL2SQL reliability was an issue, with LLMs occasionally generating queries referencing non-existent columns or incorrect JOINs. Solved with a schema-injection system prompt, a SQL validator that intercepts invalid references before execution, and a self-correction retry loop that feeds SQLite error messages back to the LLM.
    *   **Next-Step Improvements (What to do differently):** Replace diskcache sessions with a vector database for semantic memory across sessions so the assistant recalls scout preferences long-term. Add streaming responses so long scouting reports feel highly interactive.
    *   **Key Insight:** RAG fundamentally shifts the LLM's role. Without it, you are asking the model to recall statistics it cannot reliably remember. With RAG, you are asking it to reason about statistics you have already retrieved and injected. The LLM becomes an interpreter of data rather than a database itself—this shift makes the reports trustworthy.

---

### C. Hybrid Fake News Detection
*   **Tagline:** RoBERTa + 26 AMR Semantic Features
*   **Role:** Team (2 members) — Feature engineering, modelling, evaluation
*   **Period:** Dec 2025
*   **Featured:** Yes
*   **Core Metrics:**
    *   `87.07%` - Test accuracy
    *   `26` - AMR structural semantic features
    *   `23,196` - Articles analyzed (FakeNewsNet)
    *   `+3%` - Threshold optimization gain
*   **Tech Stack:** RoBERTa, PyTorch, spaCy, AMR Parsing, Focal Loss, FakeNewsNet
*   **Case Study Details:**
    *   **The Problem:** Traditional fake news detectors are structurally vulnerable to well-written misinformation because they overfit to surface vocabulary. Deep transformers capture semantic meaning but miss structural signals—such as passive voice obscuring agency, unusual named-entity distributions, and fragmented causal chains. Abstract Meaning Representation (AMR) graphs make these structural traits explicit.
    *   **The Approach:** Combine RoBERTa’s deep contextual representation with 26 hand-engineered structural features in a hybrid classifier, allowing the model to leverage orthogonal signals—what was said (semantics) vs. how it was said (structure).
    *   **The Architecture:** Dual-pathway network combining RoBERTa’s 768-dimensional `[CLS]` embedding with a 26-dimensional structural feature vector. The structural features are extracted from spaCy dependency parse graphs across four groups: entity density/coreference (6), syntactic passivization/tree depth (8), semantic modality markers (7), and sentiment/style (5). The representations are concatenated before entering the classification head. Focal loss is used to combat the 3:1 class imbalance, and threshold optimization is set to 0.1 (down from 0.5).
    *   **The Results:** Achieved 87.07% test accuracy on FakeNewsNet. In ablation studies, RoBERTa alone scored ~69%, meaning the addition of AMR features contributed an ~18 percentage point boost. Focal loss contributed ~2% over cross-entropy, and threshold optimization added another 3%. Feature importance analyses confirmed passivization patterns and entity-type distributions as the top structural discriminators.
    *   **Challenges Faced:** AMR feature extraction was computationally expensive, requiring precomputation and robust caching at scale across 23,196 articles. The 3:1 class imbalance made threshold selection critical; a naive model achieved ~75% simply by predicting "real," making the 0.1 threshold counterintuitive but empirically optimal.
    *   **Next-Step Improvements (What to do differently):** Explore Graph Neural Networks (GNNs) operating directly on full AMR graph structures rather than flattening them to scalar vectors, which discards topological information. Also experiment with multi-task learning, jointly training fake news detection and claim verification.
    *   **Key Insight:** The hybrid model outperforms single-modality baselines because AMR features are mathematically orthogonal to semantic content. This highlights a broader ML design principle: features that are structurally independent of your primary signal are worth adding even if they are individually weaker.

---

### D. Moodle Insight Dashboard (Client Work)
*   **Tagline:** Client Work · FLAME Centre for Digital Learning
*   **Role:** Solo Developer — Client engagement, product design, engineering
*   **Period:** 2024 – 2025
*   **Featured:** Yes
*   **Core Metrics:**
    *   `Deployed` - Active production use by CDL staff
    *   `Hours → seconds` - Workflow time reduction
    *   `4 sessions` - Stakeholder co-design meetings
    *   `Local-first` - Privacy-safe client-side architecture
*   **Tech Stack:** JavaScript, HTML/CSS, Moodle API, Weighted Scoring, Client-side
*   **Case Study Details:**
    *   **The Problem:** FLAME University's Centre for Digital Learning (CDL) tracked pre-orientation student engagement manually. Staff exported Moodle CSVs, opened them in Excel, calculated engagement scores, and manually flagged inactive students. The process consumed hours of staff time every cycle and delayed targeted interventions.
    *   **The Approach:** Adopted a local-first, client-side strategy. Direct Moodle API access was delayed, and student data privacy was a primary administrative concern. Building a zero-backend, zero-database application allowed the project to bypass data governance bottlenecks and ship quickly. Conducted four collaborative co-design sessions with the CDL team to cut unnecessary features and align the UI with their exact workflow.
    *   **The Architecture:** A fully client-side web application. Users upload a Moodle-exported CSV; the app parses it entirely in the browser, runs a customized weighted scoring algorithm, and renders a dashboard with a traffic-light status flagging system. A detailed course modal allows drill-down into per-module engagement. Zero data leaves the user's machine.
    *   **The Results:** Deployed and actively used by the CDL team, reducing an hours-long manual task to a seconds-to-insight upload. The traffic-light flagging system ("we just want to see who is red") aligned perfectly with CDL's operational needs, enabling immediate outreach to disengaged students.
    *   **Challenges Faced:** Constraints were primarily administrative rather than technical. Privacy concerns dictated the client-side architecture. Feature prioritization was difficult, as the CDL team had an extensive wishlist. The discipline of ruthlessly cutting features during the 4 sessions was the most challenging but necessary part of the project.
    *   **Next-Step Improvements (What to do differently):** Integrate direct live Moodle API access to remove the CSV export/import steps entirely. Add an automated "Export to PDF" button for official reporting workflows. Make the scoring weights configurable in the UI rather than hardcoded.
    *   **Key Insight:** Choosing a client-side architecture was the most consequential decision. It bypassed IT approval, addressed privacy concerns instantly, and enabled deployment in weeks instead of months. Constraints that look like limitations are often load-bearing—they force decisions that actually work.

---

### E. Multimodal Music Emotion Recognition (Research Project)
*   **Tagline:** ResNet-18 + DistilRoBERTa · Gated Fusion
*   **Role:** Team (4 members) — Architecture design, fusion mechanism
*   **Period:** Dec 2025
*   **Featured:** False
*   **Core Metrics:**
    *   `78%` - Test accuracy
    *   `0.91` - Q2 (Angry) F1 score
    *   `2,000` - Tracks (MERGE-Balanced dataset)
    *   `+18pp` - SpecAugment generalization gain
*   **Tech Stack:** ResNet-18, DistilRoBERTa, SpecAugment, Gated Attention, AdamW, PyTorch
*   **Case Study Details:**
    *   **The Problem:** Single-modality classifiers are limited: audio-only models miss lyrical context, while text-only models miss acoustic energy, timbre, and tempo. The challenge was building a fusion architecture that dynamically weights the contribution of each modality per sample, rather than applying a static, hardcoded average.
    *   **The Approach:** Implemented gated late-fusion. A ResNet-18 processes log-mel spectrograms, while a DistilRoBERTa encodes lyrics. A learned, sigmoid-activated gate $\alpha$ dynamically balances the weight of audio vs. lyrics per sample, trained end-to-end.
    *   **The Architecture:** ResNet-18 adapted from 3-channel RGB to 1-channel grayscale by averaging pretrained weights. Log-mel spectrograms are structured as $(1, 128, 1292)$. DistilRoBERTa processes lyrics using Byte-Pair Encoding (BPE). The outputs are fused into a 256-dimensional vector before passing to a 4-class emotion softmax. SpecAugment (frequency and time masking) is applied during training.
    *   **The Results:** Achieved 78% test accuracy on a 300-song held-out set. Attained a Q2 (Angry) F1 score of 0.91, showing highest confidence where audio energy and aggressive lyrical content coincide. The gate successfully learned to up-weight lyrics for "Sad" songs and audio for "Angry" tracks. SpecAugment reduced the train-val gap by ~18 percentage points.
    *   **Challenges Faced:** Lyrical extraction via the Genius API failed for ~15% of tracks, requiring a fallback to the MusicBrainz database. The learned gate occasionally collapsed to a constant value early in training; this was resolved by introducing entropy regularization to the gate's loss term.
    *   **Next-Step Improvements (What to do differently):** Replace the scalar gate with token-level cross-attention rather than pooling the entire lyric into a single `[CLS]` vector, allowing the model to highlight emotionally charged words and phrases.
    *   **Key Insight:** SpecAugment had a higher impact on performance than any architecture tweak, resolving severe overfitting to recording artifacts rather than emotional content. When a model overfits, the first step should always be understanding what it is actually learning, rather than increasing architectural complexity.

---

## 4. Professional Experience & Internships

### A. ACEplus (Derek O'Brien & Associates) — Analytics & CRM Intern
*   **Period:** May – Jul 2025
*   **Location:** Kolkata · Hybrid
*   **Type:** Internship
*   **Key Highlight:** Workshop cohort earned ~2× more in-app ACEs (engagement points) than organic installs.
*   **Responsibilities & Achievements:**
    *   Designed a `Zone_Module_Action` naming convention to resolve data clutter. Audited 50+ inconsistent CleverTap event keys and authored a comprehensive event spec and a 3-phase database migration plan, which was formally adopted by the engineering team.
    *   Conducted cohort analyses revealing that school workshop-driven users earned ~2× more in-app engagement points (ACEs) than organic signups, leading the product team to reprioritize offline school engagement programs.
    *   Wrote a Python batch script using the `FuzzyWuzzy` library to resolve ~15% of inconsistent school-name profile fields, directly improving segmentation accuracy for school-specific campaigns and coach reports.
    *   Configured and rigorously tested CleverTap user journeys (push, in-app, email, WhatsApp); validated offline event-caching and new features via Jira.
*   **Tags:** CleverTap, Python, Cohort Analysis, CRM, Jira, FuzzyWuzzy

### B. Mandrake Tech — Software Intern
*   **Period:** Oct 2024 – Jan 2025
*   **Location:** Pune, India
*   **Type:** Internship
*   **Responsibilities & Achievements:**
    *   Built a containerized URL-shortening microservice using Spring Boot, PostgreSQL, and JWT authentication.
    *   Configured Docker and Maven to eliminate environment-parity issues across the development team, standardizing the build pipeline.
    *   Implemented REST-integrated frontend interfaces, owning the full request lifecycle from client UI through API routing to database persistence.
*   **Tags:** Spring Boot, Docker, PostgreSQL, JWT, Maven, REST

### C. Willwali — Software Developer Intern
*   **Period:** May – Jul 2024
*   **Location:** Remote · Kuala Lumpur, Malaysia
*   **Type:** Internship
*   **Key Highlight:** 90%+ test coverage; identified and documented 30+ bugs in the live MVP.
*   **Responsibilities & Achievements:**
    *   Part of the inaugural intern cohort at an early-stage legal-tech startup automating will-writing across multiple Southeast Asian legal jurisdictions.
    *   Developed Flask/Jinja CRUD microservices. Wrote 50+ unit and end-to-end tests achieving 90%+ coverage (`unittest` + `pytest`). Identified, isolated, and documented 30+ bugs in the Bubble.io will-creation MVP.
    *   Validated automated legal outputs against the Hindu Succession Act, Islamic Faraid distribution, and Malaysian inheritance law edge cases.
    *   Established team Git workflows, PEP 8 standards, docstrings, function annotations, and clean README documentation.
*   **Tags:** Flask, Python, pytest, Bubble.io, Git

### D. FLAME Sports — Sports Analytics & Reporting
*   **Period:** 2025 – 2026
*   **Location:** FLAME University, Pune
*   **Type:** Analytics
*   **Key Highlight:** 18.91M total views · 6.57M accounts reached.
*   **Responsibilities & Achievements:**
    *   Consolidated diverse club activities and media performance datasets across multiple sports verticals from disparate reporting sources into a unified database.
    *   Derived comparative insights across clubs, time periods, and audience segments—including identifying a Football Club breakout with a 98.2% non-follower view share as an organic reach anomaly.
    *   Produced comprehensive final analytical reports: 18.91M views, 6.57M accounts reached, 79,100+ followers gained, and 72.4% non-follower view share.
*   **Tags:** Data Analysis, Reporting, Insight Generation, Excel

---

## 5. Skills & Core Competencies

*   **ML & Deep Learning:** PyTorch, scikit-learn, CNN-BiLSTM, ResNet-18, XGBoost, PCA, KMeans, Random Forest
*   **NLP & Transformers:** RoBERTa, DistilBERT, HuggingFace, NL2SQL, RAG, AMR Parsing, Semantic Search
*   **Languages:** Python, Java, JavaScript, SQL, C++, HTML/CSS
*   **Frameworks & Infrastructure:** FastAPI, Flask, Spring Boot, React, Next.js, Docker, Node.js, SQLAlchemy
*   **Analytics & CRM:** CleverTap, Cohort Analysis, Funnel Analysis, pandas, NumPy, Matplotlib, FuzzyWuzzy, MS Excel
*   **Tools & Platforms:** Git, Jira, SQLite, PostgreSQL, Bubble.io, Jupyter, HuggingFace Hub, Vercel

---

## 6. Education & Academic Merits

### A. FLAME University, Pune
*   **Degree:** B.Sc. (Hons) Computer Science · Minor: Business Analytics
*   **Period:** 2022 – 2026
*   **Merits & Highlights:**
    *   Recipient of a **Full Academic Scholarship** (100% tuition waiver).
    *   Graduation Project: *MoodTrack — Multimodal & Multilingual Music Emotion Analysis*.
    *   Supervised by **Prof. Manoranjan Dash**, School of Computing and Data Sciences.

### B. La Martiniere for Boys, Kolkata
*   **Degree:** ISC / ICSE (High School)
*   **Period:** 2007 – 2022
*   **Merits & Highlights:**
    *   ISC (Grade 12) Score: **95%**
    *   ICSE (Grade 10) Score: **92.4%**
    *   SAT Score: **1540 / 1600** (99th percentile globally)

### C. Certifications
*   **CS50x: Introduction to Computer Science** — HarvardX · edX (2021)
*   **Building AI Literacy** — LinkedIn Learning (Mar 2025)
*   **Responsive Web Design** — freeCodeCamp (2021)

---

## 7. Site Architecture & Development Operations

The portfolio website is built as a state-of-the-art single-page web app with the following stack:
*   **Frontend Framework:** Next.js 14 (App Router) + TypeScript
*   **Styling:** Tailwind CSS (fully custom theme configured in `tailwind.config.ts`)
*   **Animations:** Framer Motion (smooth fade-ins, slide-ins, and page transitions)
*   **Media Assets:** Pre-rendered screenshots, vector iconography, and grayscale portrait (`public/Liam_Shaw_Formal_Headshot.png` and `/headshot.png`).
*   **Data Integrity (Single Source of Truth):**
    All content—including details of projects, metrics, work timeline, education, and skills—is dynamically loaded from a single file: `lib/data.ts`. The UI components (`about.tsx`, `projects.tsx`, `experience.tsx`, etc.) consume this data to keep the site modular.

### Directory Structure
```
liam-portfolio/
├── app/
│   ├── globals.css        # Global CSS, HSL color tokens, typography
│   ├── layout.tsx         # Root layout, Google Fonts (Inter/Outfit), SEO meta tags
│   └── page.tsx           # Page assembly (imports components)
├── components/
│   ├── nav.tsx            # Sticky navigation with scroll tracking & mobile menu
│   ├── hero.tsx           # Hero section & core proposition
│   ├── about.tsx          # About prose, availability, & principle cards
│   ├── projects.tsx       # Grid of project cards
│   ├── project-panel.tsx  # Dynamic sliding detail panel displaying complete case study text
│   ├── experience.tsx     # Timeline for internships & roles
│   ├── skills.tsx         # Skill groupings using TagPill components
│   ├── education.tsx      # Academic details & certifications
│   ├── contact.tsx        # Contact info & social links footer
│   └── ui.tsx             # Shared animations (FadeIn), tags, and custom components
├── lib/
│   ├── data.ts            # SINGLE SOURCE OF TRUTH (All site data/text)
│   └── utils.ts           # Tail-wind merge class merger utility: cn()
└── public/
    └── Liam_Shaw_Resume_OnePage.pdf   # Downloadable resume PDF
```

### Local Setup & Execution
1.  Install dependencies: `npm install`
2.  Run the local development server: `npm run dev` (hosts on `http://localhost:3000`)
3.  Compile static build: `npm run build`

### Deployment Workflow
*   **Frontend:** Deployed to Vercel (linked directly to the `liamshaw.in` domain).
*   **DNS Configuration:**
    *   `liamshaw.in` $\rightarrow$ A Record $\rightarrow$ `76.76.21.21`
    *   `www.liamshaw.in` $\rightarrow$ CNAME $\rightarrow$ `cname.vercel-dns.com`
*   **Backend Demo Services:** Deployed to Render (e.g. Python/Flask app for MoodTrack using Gunicorn).
