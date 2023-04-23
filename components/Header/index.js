import Link from "next/link";
import styles from "./styles.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.navLogo}>
          <Link href="/">
            <h2>Cinemarine</h2>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navLink}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navLink}>
              <Link href="/Movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
