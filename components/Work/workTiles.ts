export type WorkTile = {
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  images?: {
    src: string;
    width: number;
    height: number;
  }[];
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are things`,
    title: `I've worked on`,
    image: {
      src: "/static/images/cosmio-landing.png",
      width: 1024,
      height: 576,
    },
    images: [
      { src: "/static/images/cosmio-landing.png", width: 1024, height: 576 },
      { src: "/static/images/cosmio-dashboard.png", width: 1024, height: 576 },
    ],
  },
  {
    description: "I built as Founding Engineer",
    title: "Cosmio AI",
    image: {
      src: "/static/images/cosmio-landing.png",
      width: 1024,
      height: 576,
    },
    images: [
      { src: "/static/images/cosmio-landing.png", width: 1024, height: 576 },
      { src: "/static/images/cosmio-dashboard.png", width: 1024, height: 576 },
    ],
  },
  {
    description: `I co-founded as CTO`,
    title: "stamo.ai",
    image: {
      src: "/static/images/stamo-landing.png",
      width: 1024,
      height: 576,
    },
    images: [
      { src: "/static/images/stamo-landing.png", width: 1024, height: 576 },
      { src: "/static/images/stamo-product-1.svg", width: 1024, height: 576 },
      { src: "/static/images/stamo-product-2.svg", width: 1024, height: 576 },
    ],
  },
];
