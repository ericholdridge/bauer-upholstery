import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerBox}>
          <div className={styles.footerBoxWrapper}>
            <h4>
              BAUER <br></br>RV UPHOLSTERY
            </h4>
            <Link href="">
              <a>Home</a>
            </Link>
            <Link href="">
              <a>About</a>
            </Link>
            <Link href="">
              <a>Services</a>
            </Link>
            <Link href="">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className={styles.footerBox}>
          <div className={styles.footerBoxWrapper}>
            <h4>
              BAUER <br></br>RV UPHOLSTERY
            </h4>
            <Link href="">
              <a>Home</a>
            </Link>
            <Link href="">
              <a>About</a>
            </Link>
            <Link href="">
              <a>Services</a>
            </Link>
            <Link href="">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className={styles.footerBox}>
          <div className={styles.footerBoxWrapper}>
            <h4>
              BAUER <br></br>RV UPHOLSTERY
            </h4>
            <Link href="">
              <a>Home</a>
            </Link>
            <Link href="">
              <a>About</a>
            </Link>
            <Link href="">
              <a>Services</a>
            </Link>
            <Link href="">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
