import React from "react";
import DedicationCard from "./DedicationCard";

// Styles
import styles from "../Dedication/Dedication.module.scss";

const DedicationSection = () => {
  return (
    <section className={styles.dedication}>
      <div className={`container ${styles.container}`}>
        <h1>DEDICATION TO QUALITY</h1>
        <div className={styles.wrapper}>
          <DedicationCard imgSrc="/hero-image.jpg" cardHeading="ULTRALEATHER" cardInfo="Highest Quality Leather Seats"/>
          <DedicationCard imgSrc="/hero-image.jpg" cardHeading="REPLACEMENT PARTS" cardInfo="OEM Replacement Seating Parts" />
          <DedicationCard imgSrc="/hero-image.jpg" cardHeading="INDUSTRY EXPERIENCE" cardInfo="20+ Years In The RV Industry" />
        </div>
      </div>
    </section>
  );
};

export default DedicationSection;
