import { Project } from "@/types/project";

export const propertyIntelligence: Project = {
  slug: "enterprise-property-intelligence",
  title: "Enterprise Property Intelligence",
  status: "Confidential",
  locked: true,
  categories: ["AI", "Data", "LLM"],
  heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2850&auto=format&fit=crop",
  readingTime: "5 min read",
  overview: "System architecture designed to ingest real estate unstructured data and convert it into structured intelligence using advanced parsing and vector databases.",
  businessProblem: "Property analysts were manually sifting through thousands of unstructured documents, PDFs, and regional reports to determine property valuations and market trends, making scalable analysis impossible.",
  myRole: [
    "Designed the document ingestion pipeline.",
    "Implemented vector database storage for semantic querying.",
    "Developed an AI analyst agent to answer natural language questions about property portfolios.",
    "Ensured strict security boundaries for multi-tenant data."
  ],
  impact: [
    { value: "Confidential", label: "Documents Analyzed" },
    { value: "Semantic", label: "Search Accuracy" },
    { value: "Production", label: "Vector DB Scale" }
  ],
  technologies: ["n8n", "OpenAI GPT-4", "Pinecone", "FastAPI", "React", "Docker"],
  implementationDuration: "12 Weeks",
  complexity: "Very High",
  challenges: [
    "Accurately chunking and embedding highly complex financial tables within PDFs.",
    "Maintaining low latency for natural language queries against large document stores."
  ]
};
