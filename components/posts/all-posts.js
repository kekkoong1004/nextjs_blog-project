import styles from './all-posts.module.css';
import PostGrid from './post-grid';

function AllPosts(props) {
  return (
    <section className={styles.posts}>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
