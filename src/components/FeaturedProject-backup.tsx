import { motion } from 'framer-motion';
import styles from '@/styles/FeaturedProject.module.css';

const FeaturedProject = () => {
  return (
    // <section className={styles.wrapper}>
    <section id="projects" className={styles.wrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className={styles.imageWrapper}>
          <img
            src="https://raw.githubusercontent.com/mctrinity/langchain-fibonacci/main/langchain-fibonacci.webp"
            alt="LangChain Fibonacci"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>LangChain as a Coding Assistant: Fibonacci & Unit Testing</h2>
          <p className={styles.description}>
            A walkthrough of using LangChain as an AI coding assistant to implement and test the Fibonacci sequence — combining code generation and unit testing with LLM agents.
          </p>
          <div className={styles.buttons}>
            <a href="https://app.readytensor.ai/publications/langchain-as-a-coding-assistant-fibonacci-unit-testing-T08j5PKJNXfQ" target="_blank" rel="noopener noreferrer" className={styles.button}>
              Live Demo
            </a>
            <a href="https://github.com/mctrinity/langchain-fibonacci" target="_blank" rel="noopener noreferrer" className={styles.buttonAlt}>
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
