import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./DedicationCard.module.scss";

const DedicationCard = ({ imgSrc, cardHeading, cardInfo }) => {
  return (
    <Link href="/about">
      <a className={styles.a}>
        <div className={styles.imgWrap}>
          <Image src={imgSrc} layout="fill" objectFit="cover" quality={100} />
        </div>
        <div className={styles.boxInfo}>
          <h2>{cardHeading}</h2>
          <p>{cardInfo}</p>
        </div>
      </a>
    </Link>
  );
};

export default DedicationCard;
