import Link from 'next/link';
import Image from 'next/image';
import styles from './post-item.module.css';

function PostItem(props) {
  const { image, title, date, excerpt, slug } = props.post;
  const fullImagePath = `/images/posts/${slug}/${image}`;
  const readableDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image
            src={fullImagePath}
            alt={title}
            width={365}
            height={210}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{readableDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
