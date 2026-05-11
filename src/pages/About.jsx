import styles from './About.module.css';

export default function About() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>About Dailo Doodles</h1>
      <div className={styles.content}>
        <p>
          "Dailo" (大佬) is Cantonese for "big homie", and that's exactly the energy we're bringing
          to your sticker collection. Dailo Doodles is an ABC-owned small shop making cute, meme-worthy
          stickers for anyone who grew up between two cultures.
        </p>
        <p>
          Our stickers celebrate the food, animals, traditions, and inside jokes that shaped the
          American Born Chinese experience. Each design is
          hand-drawn and die-cut for maximum vibes.
        </p>
        <p>
          Slap 'em on your laptop. Your water bottle. Your mom's car. No bad choices.
        </p>
        <p className={styles.note}>
          More about us coming soon! Follow along on{' '}
          <a
            href="https://www.instagram.com/dailo.doodles"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Instagram
          </a>{' '}
          @dailo.doodles.
        </p>
      </div>
    </main>
  );
}
