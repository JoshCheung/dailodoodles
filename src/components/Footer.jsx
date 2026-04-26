import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>© 2026 Dailo Doodles. All rights reserved.</p>
      <a
        href="https://www.instagram.com/dailo.doodles"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instagram}
        aria-label="Dailo Doodles on Instagram"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
        </svg>
        @dailo.doodles
      </a>
    </footer>
  );
}
