import styles from './Shipping.module.css';

export default function Shipping() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Shipping Info</h1>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Processing Time</h2>
          <p>Orders are processed within <strong>3–5 business days</strong>. We'll send a confirmation once your order ships.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Domestic Shipping (US)</h2>
          <p>Standard shipping via USPS First Class. Estimated delivery: <strong>5–10 business days</strong> after processing.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>International Shipping</h2>
          <p>We currently ship to select international destinations. DM us on Instagram before placing an international order to confirm availability and rates.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Lost or Damaged Orders</h2>
          <p>If your order arrives damaged or goes missing, reach out to us on Instagram or via the Custom Order form and we'll make it right.</p>
        </section>
        <p className={styles.note}>
          More details coming soon. Follow us at{' '}
          <a href="https://www.instagram.com/dailo.doodles" target="_blank" rel="noopener noreferrer" className={styles.link}>
            @dailo.doodles
          </a>{' '}
          for updates.
        </p>
      </div>
    </main>
  );
}
