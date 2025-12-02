"use client";

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero2.avif"
          alt="Daniel Lee for Cook County Commissioner"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <p className={styles.tagline}>FOR COOK COUNTY COMMISSIONER</p>
        <h1 className={styles.title}>Daniel Lee</h1>
        <p className={styles.subtitle}>God, Family, and Country</p>
        <p className={styles.description}>
          A 25-year Cook County resident bringing conservative values, fiscal
          responsibility, and common sense leadership to our community.
        </p>

        <div className={styles.buttons}>
          <button
            className={styles.donateBtn}
            onClick={() => scrollToSection("donation")}
          >
            Donate Now
          </button>
          <a
            href="https://ova.elections.il.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            Register to Vote
          </a>
        </div>

        <p className={styles.verse}>Isaiah 8:6</p>
      </div>
    </section>
  );
}
