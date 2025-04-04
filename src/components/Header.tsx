import styles from '@/styles/Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Scidyllics</div>
    <nav className={styles.nav}>
      <a href="#hero">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
