import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on navigation
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <Link to="/shop" className={styles.logo} onClick={handleNavClick}>
        <img src="/stickers/Logo.png" alt="" className={styles.logoImg} />
        <span className={styles.logoText}>Dailo Doodles</span>
      </Link>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className={menuOpen ? styles.barTop_open : styles.barTop} />
        <span className={menuOpen ? styles.barMid_open : styles.barMid} />
        <span className={menuOpen ? styles.barBot_open : styles.barBot} />
      </button>

      <nav className={menuOpen ? styles.navOpen : styles.nav}>
        <NavLink to="/shop" end className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleNavClick}>
          Shop
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleNavClick}>
          About
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? styles.activeLink : styles.link} onClick={handleNavClick}>
          FAQ
        </NavLink>
      </nav>
    </header>
  );
}
