const siteMetadata = {
  title: "Mate Papava",
  author: "Mate Papava",
  headerTitle: "MP",
  description: "Software Developer at OPPA",
  language: "en-us",
  theme: "dark", // system, dark or light
  siteUrl: "https://portfolio-coral-omega-78.vercel.app",
  siteRepo: "https://github.com/Matheus-The-one/portfolio",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.webp",
  socialBanner: "/static/images/twitter-card.png",
  email: "matepapava123@gmail.com",
  github: "https://github.com/Matheus-The-one",
  twitter: "",
  facebook: "",
  linkedin: "https://www.linkedin.com/in/mate-papava-918896249/",
  spotify: "https://open.spotify.com/user/12162121994?si=e685b3546f414967",
  steam: "",
  locale: "en-US",
  comment: {
    provider: "giscus",
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || "",
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || "",
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || "",
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || "",
      mapping: "pathname",
      reactions: "1",
      metadata: "0",
      theme: "light",
      darkTheme: "transparent_dark",
      themeURL: "",
    },
  },
};

module.exports = siteMetadata;
