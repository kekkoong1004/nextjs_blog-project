import Head from 'next/head';
import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/utils/post-utils';

export default function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A page to show all the posts we have on this site."
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
