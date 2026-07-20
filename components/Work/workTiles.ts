export type WorkProject = {
  title: string;
  description: string;
  subtitle: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
};

export const workProjects: WorkProject[] = [
  {
    description: "I built as Founding Engineer",
    title: "Cosmio AI",
    subtitle: "Data analysis platform that turns raw data into decisions. Agent-powered root cause analysis, collaborative notebooks, and hypothesis testing — all in one place.",
    images: [
      { src: "/static/images/cosmio-knowledge.png", width: 1024, height: 576 },
      { src: "/static/images/cosmio-analysis.png", width: 1024, height: 576 },
      { src: "/static/images/cosmio-rca.png", width: 1024, height: 576 },
    ],
  },
  {
    description: "I co-founded as CTO",
    title: "stamo.ai",
    subtitle: "Agentic platform that researches your brand, suggests AR templates, and generates custom face-tracking filters for TikTok, Instagram, and Snapchat — autonomously.",
    images: [
      { src: "/static/images/stamo-product-1.svg", width: 1024, height: 576 },
      { src: "/static/images/stamo-product-2.svg", width: 1024, height: 576 },
      { src: "/static/images/stamo-product-4.svg", width: 1024, height: 576 },
    ],
  },
];
