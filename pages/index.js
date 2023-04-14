import Head from 'next/head';
import Hero from '@/components/homepage/hero';
import FeaturePosts from '@/components/homepage/feature-posts';
import { getFeaturedPosts } from '@/utils/post-utils';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Shawn's nextJS Blog</title>
        <meta
          name="description"
          content="A blog where talks about web development and programming."
        />
      </Head>
      <Hero></Hero>
      <FeaturePosts posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
