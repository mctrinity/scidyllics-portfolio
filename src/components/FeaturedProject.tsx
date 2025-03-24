import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/FeaturedProject.module.css';

type Project = {
  Title: string;
  Description: string;
  LiveURL: string;
  GitHubURL: string;
  ImageURL: string;
};

const FeaturedProject = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_SHEET_BEST_URL as string)
      .then((res) => res.json())
      .then((data: Project[]) => {
        setProjects(data);
      })
      .catch((err) => console.error('Failed to load project data', err));
  }, []);

  if (!projects.length) return null;

  return (
    <section id="projects" className={styles.wrapper}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
              <img
                src={project.ImageURL}
                alt={project.Title}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h2 className={styles.title}>{project.Title}</h2>
              <p className={styles.description}>{project.Description}</p>
              <div className={styles.buttons}>
                <a
                  href={project.LiveURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Live Demo
                </a>
                <a
                  href={project.GitHubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buttonAlt}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedProject;
