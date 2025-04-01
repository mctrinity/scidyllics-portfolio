import styles from '@/styles/Header.module.css';

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logo}>Scidyllics</div>
    <nav className={styles.nav}>
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Contact</a>
    </nav>
  </header>
);

export default Header;
