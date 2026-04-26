import { Link } from 'react-router-dom';
import styles from './StickerCard.module.css';

export default function StickerCard({ sticker }) {
  return (
    <Link to={`/sticker/${sticker.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={sticker.image}
          alt={sticker.name}
          className={styles.image}
          loading="lazy"
          onError={(e) => { e.target.src = '/stickers/placeholder.png'; }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{sticker.name}</h3>
        <p className={styles.size}>{sticker.size}</p>
        <p className={styles.price}>${sticker.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
