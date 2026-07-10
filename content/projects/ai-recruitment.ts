import { Project } from "@/types/project";

export const aiRecruitment: Project = {
  slug: "ai-recruitment-automation-platform",
  title: "AI Recruitment Automation Platform",
  status: "Production",
  locked: false,
  categories: ["Automation", "AI", "Recruitment", "LLM"],
  heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop",
  readingTime: "8 min read",
  overview: "An end-to-end AI recruitment pipeline that ingests CVs, performs multi-faceted LLM evaluation against job criteria, generates structured scoring matrices in Google Sheets, and provides decision-support capabilities for recruiters.",
  businessProblem: "Traditional recruitment required manually opening and reading every single CV, leading to inconsistent candidate evaluation across the team. With a massive applicant volume, the initial screening process was highly time-consuming, bottlenecking the hiring pipeline, while human recruiters still needed adequate context to make the final hiring decisions.",
  myRole: [
    "Designed and implemented the automation pipeline.",
    "Built the CV ingestion workflow via webhooks.",
    "Created the resume ETL pipeline for consistent data formatting.",
    "Developed LLM-based evaluation logic.",
    "Generated structured candidate scoring using 30+ fields.",
    "Produced formatted Google Sheets outputs for easy review.",
    "Created the recruiter decision-support system."
  ],
  impact: [
    { value: "2,000+", label: "CVs Processed Weekly" },
    { value: "10,000+", label: "Applications Analyzed" },
    { value: "30+", label: "Evaluation Attributes" },
    { value: "30-65+", label: "Hours Saved Weekly" },
    { value: "Human-in-the-Loop", label: "Decision Support", isText: true },
    { value: "Production", label: "Automation Pipeline", isText: true }
  ],
  technologies: ["n8n", "OpenAI GPT-4o", "PostgreSQL", "Google Workspace API", "Greenhouse ATS API"],
  implementationDuration: "6 Weeks",
  complexity: "High",
  architectureLayers: [
    { label: "LinkedIn Jobs", iconName: "Briefcase" },
    { label: "Resume Collection", iconName: "FileText" },
    { label: "Webhook", iconName: "Webhook" },
    { label: "n8n", iconName: "Workflow" },
    { label: "Resume ETL", iconName: "Database" },
    { label: "LLM", iconName: "BrainCircuit" },
    { label: "Structured JSON", iconName: "Braces" },
    { label: "Evaluation Engine", iconName: "Target" },
    { label: "Google Sheets", iconName: "Table" },
    { label: "Recruiter Review", iconName: "UserCheck", color: "text-amber-400" },
    { label: "Interview", iconName: "Video", color: "text-amber-400" },
    { label: "Hiring", iconName: "CheckCircle2", color: "text-amber-400" }
  ],
  timeline: [
    { label: "Candidate applies", description: "Submission through LinkedIn Jobs portal.", zone: "Automation Zone", iconName: "Briefcase" },
    { label: "Pipeline detects submission", description: "Triggered via LinkedIn webhooks.", zone: "Automation Zone", iconName: "Webhook" },
    { label: "Resume collected", description: "Raw PDF/DOCX file downloaded and stored.", zone: "Automation Zone", iconName: "FileDown" },
    { label: "Resume parsed", description: "Text extraction using OCR and layout analysis.", zone: "Automation Zone", iconName: "ScanText" },
    { label: "Prompt engineering", description: "Applying job-specific criteria schemas.", zone: "Automation Zone", iconName: "Code2" },
    { label: "LLM evaluation", description: "Analyzing skills, experience, and cultural fit.", zone: "Automation Zone", iconName: "BrainCircuit" },
    { label: "30 structured attributes", description: "Generating a strict JSON output matching the schema.", zone: "Automation Zone", iconName: "Braces" },
    { label: "Scoring", description: "Calculating an overall candidate match score.", zone: "Automation Zone", iconName: "Target" },
    { label: "Google Sheets", description: "Appending rows with detailed candidate insights.", zone: "Automation Zone", iconName: "Table" },
    { label: "Recruiter review", description: "Human recruiters evaluate the LLM insights.", zone: "Human Decision Zone", iconName: "UserCheck" },
    { label: "Interview scheduling", description: "Coordinating calls with shortlisted candidates.", zone: "Human Decision Zone", iconName: "Calendar" },
    { label: "Hiring", description: "Final hiring decision made by the human team.", zone: "Human Decision Zone", iconName: "CheckCircle2" }
  ],
  gallery: [
    { id: "1", url: "/n8n.png", caption: "n8n Workflow Execution", category: "Workflow" }
  ],
  hasDashboard: true,
  lessons: [
    "LLM hallucinations must be mitigated with strict JSON schemas.",
    "OCR quality dictates the downstream accuracy of the entire pipeline."
  ],
  future: [
    "Integrating a vector database for semantic search over historical candidates.",
    "Real-time interview scheduling via bidirectional ATS sync."
  ],
  faqs: [
    { question: "Did the AI make hiring decisions?", answer: "No. The system strictly acted as a decision-support tool. Human recruiters conducted all interviews and made the final hiring decisions." },
    { question: "How did you handle rate limits?", answer: "Implemented exponential backoff and queue management within n8n to ensure reliable processing even during traffic spikes." }
  ]
};
