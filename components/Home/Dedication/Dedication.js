import React from "react";
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from "../Dedication/Dedication.module.scss";

const Dedication = () => {
  return (
    <section className={styles.dedication}>
      <div className={`container ${styles.container}`}>
        <h1>DEDICATION TO QUALITY</h1>
        <div className={styles.wrapper}>
          <Link href="/about">
            <a>
              <div className={styles.imgWrap}>
                <Image
                  src="/../public/static/images/hero-image.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className={styles.boxInfo}>
                <h2>FIND REPLACEMENT PARTS</h2>
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div className={styles.imgWrap}>
                <Image
                  src="/../public/static/images/hero-image.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className={styles.boxInfo}>
                <h2>FIND REPLACEMENT PARTS</h2>
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div className={styles.imgWrap}>
                <Image
                  src="/../public/static/images/hero-image.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className={styles.boxInfo}>
                <h2>FIND REPLACEMENT PARTS</h2>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dedication;
