import { Project } from "@/types/project";

export const enterpriseCrm: Project = {
  slug: "enterprise-crm-automation",
  title: "Enterprise CRM Automation",
  status: "Confidential",
  locked: true,
  categories: ["Automation", "CRM", "Data"],
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2850&auto=format&fit=crop",
  readingTime: "4 min read",
  overview: "High-level architecture involving multi-stage data synchronization, LLM-based entity extraction, and automated workflow triggers across a distributed organization.",
  businessProblem: "The organization struggled with highly fragmented customer data across disparate systems. Sales and operations teams spent thousands of hours manually updating records, leading to data staleness, human error, and delayed follow-ups.",
  myRole: [
    "Architected the overarching data synchronization strategy.",
    "Built robust error-handling and retry mechanisms for external APIs.",
    "Integrated specialized LLMs for accurate entity extraction from unstructured emails.",
    "Deployed the system with comprehensive logging and alerting."
  ],
  impact: [
    { value: "Confidential", label: "Volume Processed" },
    { value: "Zero", label: "Manual Data Entry" },
    { value: "Real-time", label: "Sync Latency" }
  ],
  technologies: ["n8n", "FastAPI", "Python", "Supabase", "Docker", "Stripe API", "PostgreSQL"],
  implementationDuration: "8 Weeks",
  complexity: "Enterprise",
  challenges: [
    "Dealing with strictly rate-limited legacy APIs.",
    "Ensuring data consistency across distributed systems during partial outages."
  ]
};
