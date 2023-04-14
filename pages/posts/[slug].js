import Head from 'next/head';
import PostContent from '@/components/post-details/post-content';
import { getPostData, getAllFiles } from '@/utils/post-utils';
// import { ReactMarkdown } from 'react-markdown';

function PostDetailPage(props) {
  const { post } = props;

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const fileWithETS = `${slug}.md`;

  const fileData = getPostData(fileWithETS);

  // Some Fallback if can't get page...
  if (!fileData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: fileData,
    },
    revalidate: 1000,
  };
}

export function getStaticPaths() {
  const allFilesName = getAllFiles();
  const allFilePaths = allFilesName.map(path => ({ params: { slug: path } }));
  return {
    fallback: true,
    paths: allFilePaths,
  };
}

export default PostDetailPage;
