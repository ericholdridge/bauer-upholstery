import Image from "next/image";
import React from "react";
import Button from "../../Utils/Button";

// Styles
import styles from "../Hero/Hero.module.scss";
import btnStyles from "../../Utils/Button.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.heroImage}>
          <div className={styles.overlay}></div>
          <Image
            src="/hero-image.jpg"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className={styles.heroContent}>
            <h1>
              PROVIDING QUALITY REPLACEMENT PARTS<br></br> & MATERIALS FOR
              FLEXSTEEL SEATING.
            </h1>
            <div className={styles.buttonInfo}>
              <Button text="LEARN MORE" className={btnStyles.btn} />
              <Button text="VIEW PRODUCTS" className={btnStyles.btn2}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
