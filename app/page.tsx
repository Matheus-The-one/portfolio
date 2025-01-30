import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import { ScrollProvider } from "@/components/Providers/ScrollProvider";
import RecentPosts from "@/components/RecentPosts";
import SectionContainer from "@/components/SectionContainer";
import TopTracks from "@/components/Spotify/TopTracks";
import Works from "@/components/Work/Works";
import { allCoreContent, sortedBlogPost } from "@/lib/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import { Suspense } from "react";
import Head from "next/head";

export default function Page() {
  const sortedPosts = sortedBlogPost(allBlogs);
  const posts = allCoreContent(sortedPosts);

  return (
    <>
      <Head>
        <title>
          Mate Papava - Full Stack Developer, AI Expert & Software Engineer |
          Stamo AI
        </title>
        <meta
          name="description"
          content="Mate Papava is a full-stack developer and AI expert, specializing in innovative solutions at Stamo AI. With expertise in NLP and text-to-video AI models, Mate is shaping the future of AI-driven content creation and automation."
        />
        <meta
          name="keywords"
          content="Mate Papava, mate papava ,stamo ai, stamo ai, stamo technologies, full stack developer, ai expert, software engineer, ai solutions, nlp, text-to-video, ai-driven content, ai development, next.js, typescript, python, programming, web development, software engineering, ai startup"
        />
        <meta
          property="og:title"
          content="Mate Papava - Full Stack Developer, AI Expert & Software Engineer | Stamo AI"
        />
      </Head>
      <ScrollProvider>
        <Hero />
        <Intro />
        <Works />
        <SectionContainer>
          <RecentPosts posts={posts} />
          <Suspense fallback="loading..">
            <TopTracks />
          </Suspense>
        </SectionContainer>
      </ScrollProvider>
    </>
  );
}
