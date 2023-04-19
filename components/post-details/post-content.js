import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './post-content.module.css';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;

  //Some fallback...
  if (!post || post === undefined) {
    return <p>Loading....</p>;
  }

  const fullImagePath = `/images/posts/${post.slug}/${post.image}`;

  const componentsRenderer = {
    img: img => {
      console.log(img);
      return (
        <Image
          src={`/images/posts/${post.slug}/${img.src}`}
          alt={img.alt}
          width={600}
          height={400}
          layout="responsive"
        />
      );
    },
    code: code => {
      const match = /language-(\w+)/.exec(code.className || '');
      console.log('Match language---------------------------', match);
      return match ? (
        <SyntaxHighlighter
          // language={match[1]} // Need to disable if use 'light'
          children={code.children[0]}
          style={atomDark}
        ></SyntaxHighlighter>
      ) : (
        <code className={code.className}>{children}</code>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader image={fullImagePath} title={post.title} />
      <ReactMarkdown components={componentsRenderer}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
