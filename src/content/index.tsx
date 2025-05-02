// Types
interface NavItem {
  label: string;
  href: string;
}

// Features
interface FeatureItem {
  title: string;
  description: string;
  href: string;
  icon?: string; // Optional icon identifier for use with Lucide icons
}
interface FeatureOverview {
  title: string;
  description: string;
  href: string;
}
export const navItems: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Guidelines", href: "#" },
];

export const howItWorksFeatures: FeatureItem[] = [
  {
    title: "Upload Your Excel",
    description:
      "Simply upload your Excel files containing Raw and Master sheets. Our platform seamlessly handles multi-store and multi-month data formats with zero configuration required.",
    href: "#upload",
    icon: "Upload"
  },
  {
    title: "Smart Structuring",
    description:
      "Watch as our intelligent engine automatically identifies and maps your business hierarchy—from individual products to departments to SBUs—creating a perfectly structured data foundation.",
    href: "#structure",
    icon: "Database"
  },
  {
    title: "Visual & Narrative Insights",
    description:
      "Experience your data come to life through dynamic charts and AI-generated narratives, instantly customized for any organizational level and time period you select.",
    href: "#insights",
    icon: "BarChart2"
  },
  {
    title: "Insights Ready",
    description:
      "Access comprehensive business intelligence through interactive analytical visualizations paired with contextual explanations that make complex data accessible for everyone from analysts to CFOs.",
    href: "#ready",
    icon: "PieChart"
  }
];
export const featureOverview: FeatureOverview[] = [
  {
    title: "CFO-Level Narratives",
    description: "Instantly generated executive summaries with visuals and profit insights.",
    href: "#cfo-narratives",
  },
  {
    title: "Comparison Engine",
    description: "Compare stores, months, KPIs with dynamic graphs and narrative analysis.",
    href: "#comparison-engine",
  },
  {
    title: "Trend Analysis",
    description: "Track month-to-month or quarter-to-quarter performance trends.",
    href: "#trend-analysis",
  },
  {
    title: "Interactive Chatbot",
    description: "Ask finance questions in natural language and get instant visual+text answers.",
    href: "#chatbot",
  },
];