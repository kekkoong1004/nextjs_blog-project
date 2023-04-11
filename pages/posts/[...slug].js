import { useRouter } from 'next/router';

function PostDetailPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Post detail page</h1>
    </>
  );
}

export default PostDetailPage;
