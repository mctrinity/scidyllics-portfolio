import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* Newsletter Signup */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Stay up to date</h3>
          <form className={styles.signup}>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className={styles.input}
            />
            <button type="submit" className={styles.submitButton}>
              →
            </button>
          </form>
        </div>

        {/* Sitemap */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Sitemap</h3>
          <ul className={styles.linkList}>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className={styles.location}>
            <h3 className={styles.heading}>Location</h3>
            <p>Based in the Philippines<br />Available worldwide 🌍</p>
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Find me online</h3>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="20" height="20" fill="#00ffff" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0zM8 8.98h4.78v2.05h.07c.66-1.23 2.28-2.53 4.7-2.53C21.4 8.5 24 10.42 24 15.29V24h-5v-7.41c0-1.77-.04-4.05-2.47-4.05-2.48 0-2.86 1.93-2.86 3.93V24H8z" /></svg>
            </a>
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" fill="#00ffff" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.978.24 2.43.403a4.92 4.92 0 011.77 1.05 4.93 4.93 0 011.05 1.77c.163.452.35 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.978-.403 2.43a4.92 4.92 0 01-1.05 1.77 4.93 4.93 0 01-1.77 1.05c-.452.163-1.26.35-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.978-.24-2.43-.403a4.92 4.92 0 01-1.77-1.05 4.93 4.93 0 01-1.05-1.77c-.163-.452-.35-1.26-.403-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.978.403-2.43a4.92 4.92 0 011.05-1.77 4.93 4.93 0 011.77-1.05c.452-.163 1.26-.35 2.43-.403C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.053.07 5.744.127 4.67.32 3.84.63a7.11 7.11 0 00-2.6 1.63A7.114 7.114 0 00.63 4.84c-.31.83-.503 1.904-.56 3.213C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.947.057 1.309.25 2.383.56 3.213a7.11 7.11 0 001.63 2.6 7.11 7.11 0 002.6 1.63c.83.31 1.904.503 3.213.56C8.332 23.988 8.736 24 12 24s3.668-.012 4.947-.07c1.309-.057 2.383-.25 3.213-.56a7.11 7.11 0 002.6-1.63 7.11 7.11 0 001.63-2.6c.31-.83.503-1.904.56-3.213.058-1.279.07-1.683.07-4.947 0-3.264-.012-3.668-.07-4.947-.057-1.309-.25-2.383-.56-3.213a7.11 7.11 0 00-1.63-2.6A7.114 7.114 0 0019.16.63c-.83-.31-1.904-.503-3.213-.56C15.668.012 15.264 0 12 0z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom legal area */}
      <div className={styles.bottomSection}>
        <p>© {new Date().getFullYear()} Scidyllics</p>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
