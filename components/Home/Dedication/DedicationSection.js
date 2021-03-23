import React from "react";
// Styles
import styles from "../Dedication/Dedication.module.scss";
// Components
import DedicationCard from "./DedicationCard";

const DedicationSection = () => {
  return (
    <section className={`container ${styles.dedication}`}>
      <div className={styles.container}>
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
