import PostGrid from '../posts/post-grid';
import styles from './feature-posts.module.css';

function FeaturePosts(props) {
  return (
    <section className={styles.latest}>
      <h2>Feature Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturePosts;
