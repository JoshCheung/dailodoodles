import { useParams, Link } from 'react-router-dom';
import { stickers } from '../data/stickers';
import styles from './StickerDetail.module.css';

export default function StickerDetail() {
  const { id } = useParams();
  const sticker = stickers.find((s) => s.id === id);

  if (!sticker) {
    return (
      <main className={styles.notFound}>
        <p>Sticker not found.</p>
        <Link to="/" className={styles.back}>← Back to shop</Link>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.back}>← Back to shop</Link>
      <div className={styles.layout}>
        <div className={styles.imageWrapper}>
          <img
            src={sticker.image}
            alt={sticker.name}
            className={styles.image}
            onError={(e) => { e.target.src = '/stickers/placeholder.png'; }}
          />
        </div>
        <div className={styles.details}>
          <h1 className={styles.name}>{sticker.name}</h1>
          <p className={styles.price}>${sticker.price.toFixed(2)}</p>
          <p className={styles.size}>Size: {sticker.size}</p>
          <p className={styles.description}>{sticker.description}</p>
          {sticker.variants.length > 0 && (
            <div className={styles.variants}>
              <span className={styles.variantLabel}>Options:</span>
              {sticker.variants.map((v) => (
                <span key={v} className={styles.variantChip}>{v}</span>
              ))}
            </div>
          )}
          <div className={styles.tags}>
            {sticker.tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <p className={styles.orderNote}>
            Want this sticker?{' '}
            <Link to="/custom-order" className={styles.orderLink}>Place a custom order</Link>
            {' '}or DM us on{' '}
            <a href="https://www.instagram.com/dailo.doodles" target="_blank" rel="noopener noreferrer" className={styles.orderLink}>
              Instagram
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
