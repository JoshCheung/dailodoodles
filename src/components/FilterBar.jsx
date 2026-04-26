import { ALL_TAGS, ALL_THEMES } from '../data/stickers';
import styles from './FilterBar.module.css';

export default function FilterBar({ search, onSearch, activeTag, onTagChange, activeTheme, onThemeChange }) {
  return (
    <div className={styles.bar}>
      <input
        type="search"
        placeholder="Search stickers…"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className={styles.searchInput}
        aria-label="Search stickers"
      />
      <div className={styles.filters}>
        <div className={styles.group}>
          <span className={styles.label}>Theme</span>
          <button
            className={activeTheme === '' ? styles.chipActive : styles.chip}
            onClick={() => onThemeChange('')}
          >
            All
          </button>
          {ALL_THEMES.map((theme) => (
            <button
              key={theme}
              className={activeTheme === theme ? styles.chipActive : styles.chip}
              onClick={() => onThemeChange(theme)}
            >
              {theme}
            </button>
          ))}
        </div>
        <div className={styles.group}>
          <span className={styles.label}>Tag</span>
          <button
            className={activeTag === '' ? styles.chipActive : styles.chip}
            onClick={() => onTagChange('')}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              className={activeTag === tag ? styles.chipActive : styles.chip}
              onClick={() => onTagChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
