import React from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/../public/static/images/bauerUpholsteryLogo.svg"
              alt="Bauer RV Upholstery"
              width={400}
              height={200}
            />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/upholstery">
              <a>Upholstery</a>
            </Link>
          </li>
          <li>
            <Link href="/parts">
              <a>Parts</a>
            </Link>
          </li>
          <li>
            <Link href="/contactus">
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
