// components/About.tsx
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
        I’m a full stack developer with a growing focus on AI and DevOps. I love creating things that think, scale, and feel good to use — from smart UIs to solid APIs and smooth CI/CD flows. Whether it’s integrating AI, building internal tools, or automating workflows, I bring creativity and clarity to every layer of the stack.
        </p>
      </div>
    </section>
  );
};

export default About;
