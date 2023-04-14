import Image from 'next/image';
import styles from './hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/hero.jpg"
          alt="This is a image of programmer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Shawn</h1>
      <p>
        I am doing web development, specialized in React, NextJS, React Native
        and NodeJS.
      </p>
    </section>
  );
}

export default Hero;
