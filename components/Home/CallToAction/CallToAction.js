import React from "react";
import styles from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <section className={styles.callToAction}>
      <div className={`container ${styles.container}`}>
        <h1>NEED A CUSTOM PROJECT?</h1>
        <p>We’ll tackle any project brought to us, no matter the difficulty.</p>
        <div className={styles.contactUs}>
          <button>CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
