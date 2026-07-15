export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: "/static/images/cosmio-landing.png",
      width: 600,
      height: 770,
    },
  },
  {
    description: "I built as Founding Engineer",
    title: "Cosmio AI",
    image: {
      src: "/static/images/cosmio-landing.png",
      width: 600,
      height: 554,
    },
  },
  {
    description: `Agent-powered analytics`,
    title: "Cosmio Dashboard",
    image: {
      src: "/static/images/cosmio-dashboard.png",
      width: 600,
      height: 717,
    },
  },
  {
    description: `I co-founded as CTO`,
    title: "stamo.ai",
    image: {
      src: "/static/images/project/stamoai.png",
      width: 600,
      height: 717,
    },
  },
];
