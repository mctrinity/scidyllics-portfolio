import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <p>&copy; 2025 Scidyllics. All rights reserved.</p>
      <div className={styles.footerLinks}>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
