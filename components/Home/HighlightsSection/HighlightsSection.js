import React from "react";
import styles from "./Highlights.module.scss";
import Image from "next/image";

const HighlightsSection = () => {
  return (
    <section className={styles.highlights}>
      <div className={styles.container}>
        <div className={styles.boxWrapper}>
          <div className={styles.box}>
            <Image
              src="/hero-image.jpg"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
          <div className={styles.textBox}>
            <div className={styles.textWrap}>
              <h1>Ultraleather</h1>
              <p>
                Our covers are cut and sewn using only the highest quality
                leather materials. Ultraleather, as we call it, is at the core
                of our cover kits. It’s the only material we use. Period. Our
                customers deserve a seat cover that will last them for years to
                come.
              </p>
              <div className={styles.btn}>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxWrapper}>
          <div className={styles.textBox}>
            <div className={styles.textWrap}>
              <h1>OEM Parts</h1>
              <p>
                Our OEM parts are sourced directly from Flexsteel factories and
                suppliers. This ensures the most accurate fittings in all of our
                customers seating products. We do the hard work so you don’t
                have to.
              </p>
              <div className={styles.btn}>
                <button>LEARN MORE</button>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <Image
              src="/hero-image.jpg"
              layout="fill"
              objectFit="cover"
              quality={75}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
