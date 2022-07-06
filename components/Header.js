import styles from "/styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isToggle, setIsToggle] = useState(false);
  const contentClassname = isToggle
    ? `${styles["nav_links"]} ${styles.nav_toggle}`
    : styles.nav_links;

  return (
    <div className={styles.header}>
      <img
        src="/assets/shared/logo.svg"
        alt="logo"
        className={styles.header_logo}
      ></img>
      <hr className={styles.hr} />
      <ul className={contentClassname}>
        <li
          className={styles.nav_closeIcon}
          onClick={() => setIsToggle(!isToggle)}
        >
          <img src="/assets/shared/icon-close.svg" alt="close icon" />
        </li>
        <li className={`${currentPath === "/" ? styles.active : ""}`}>
          <Link href="/">
            <a>
              <span>00</span>Home
            </a>
          </Link>
        </li>
        <li
          className={`${currentPath === "/destination" ? styles.active : ""}`}
        >
          <Link href="/destination">
            <a>
              <span>01</span>Destination
            </a>
          </Link>
        </li>
        <li className={`${currentPath === "/crew" ? styles.active : ""}`}>
          <Link href="/crew">
            <a>
              <span>02</span>Crew
            </a>
          </Link>
        </li>
        <li className={`${currentPath === "/technology" ? styles.active : ""}`}>
          <Link href="/technology">
            <a>
              <span>03</span>Technology
            </a>
          </Link>
        </li>
      </ul>
      <img
        src="/assets/shared/icon-hamburger.svg"
        alt="menu icon"
        className={styles.header_hamburger}
        onClick={() => setIsToggle(!isToggle)}
      />
    </div>
  );
}

export default Header;
