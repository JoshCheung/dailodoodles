import styles from './CustomOrder.module.css';

const GOOGLE_FORM_URL = 'https://forms.google.com/YOUR_FORM_ID';

export default function CustomOrder() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Custom Orders</h1>
      <div className={styles.content}>
        <p className={styles.intro}>
          Want a specific sticker in bulk? Have a custom design in mind? We love working on
          custom projects — events, gifts, merch, you name it.
        </p>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>How it works</h2>
          <ol className={styles.steps}>
            <li>Fill out the order form below with your idea and quantity.</li>
            <li>We'll review and get back to you within 2–3 business days.</li>
            <li>We'll send a proof for your approval before printing.</li>
            <li>Once approved, your order ships within 7–10 business days.</li>
          </ol>
        </div>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Fill Out the Order Form →
        </a>
        <p className={styles.or}>— or —</p>
        <p className={styles.dmText}>
          DM us on Instagram{' '}
          <a href="https://www.instagram.com/dailo.doodles" target="_blank" rel="noopener noreferrer" className={styles.link}>
            @dailo.doodles
          </a>{' '}
          and we'll chat!
        </p>
      </div>
    </main>
  );
}
