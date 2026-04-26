import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/stickers/Logo.png" alt="" className={styles.logoImg} />
        <span className={styles.logoText}>Dailo Doodles</span>
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Shop
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          About
        </NavLink>
        <NavLink to="/faq" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          FAQ
        </NavLink>
        {/* <NavLink to="/shipping" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Shipping
        </NavLink>
        <NavLink to="/custom-order" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>
          Custom Order
        </NavLink> */}
      </nav>
    </header>
  );
}
