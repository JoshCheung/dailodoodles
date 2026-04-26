import { useState, useMemo } from 'react';
import { stickers } from '../data/stickers';
import StickerCard from '../components/StickerCard';
import FilterBar from '../components/FilterBar';
import styles from './Gallery.module.css';

export default function Gallery() {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [activeTheme, setActiveTheme] = useState('');

  const filtered = useMemo(() => {
    return stickers.filter((s) => {
      const matchesSearch =
        search === '' ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchesTag = activeTag === '' || s.tags.includes(activeTag);
      const matchesTheme = activeTheme === '' || s.theme === activeTheme;
      return matchesSearch && matchesTag && matchesTheme;
    });
  }, [search, activeTag, activeTheme]);

  return (
    <main>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Dailo Doodles</h1>
        <p className={styles.heroSub}>ABC-inspired stickers for your laptop, water bottle, and life.</p>
      </section>
      <FilterBar
        search={search}
        onSearch={setSearch}
        activeTag={activeTag}
        onTagChange={setActiveTag}
        activeTheme={activeTheme}
        onThemeChange={setActiveTheme}
      />
      {filtered.length === 0 ? (
        <p className={styles.empty}>No stickers match your search. Try different filters!</p>
      ) : (
        <div className={styles.masonry}>
          {filtered.map((sticker) => (
            <div key={sticker.id} className={styles.masonryItem}>
              <StickerCard sticker={sticker} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
