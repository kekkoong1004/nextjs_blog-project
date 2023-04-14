import PostItem from './post-item';
import styles from './post-grid.module.css';

function PostGrid(props) {
  props.posts.forEach(element => {});
  return (
    <ul className={styles.grid}>
      {props.posts.map(post => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
