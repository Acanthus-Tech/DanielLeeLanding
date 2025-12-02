"use client";

import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.flag}>
            <img src="/images/Flag.svg" />
          </div>
          <a href="/" className={styles.logoText}>
            <span className={styles.lee}>LEE</span> for Commissioner
          </a>
        </div>

        <div className={styles.desktopMenu}>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.navLink}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={styles.navLink}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("video")}
            className={styles.navLink}
          >
            Video
          </button>
          <button
            onClick={() => scrollToSection("volunteer")}
            className={styles.navLink}
          >
            Volunteer
          </button>
          <button
            onClick={() => scrollToSection("donation")}
            className={styles.donateBtn}
          >
            Donate
          </button>
        </div>

        <button
          className={styles.mobileMenuBtn}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            onClick={() => scrollToSection("about")}
            className={styles.mobileNavLink}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={styles.mobileNavLink}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("video")}
            className={styles.mobileNavLink}
          >
            Video
          </button>
          <button
            onClick={() => scrollToSection("volunteer")}
            className={styles.mobileNavLink}
          >
            Volunteer
          </button>
          <button
            onClick={() => scrollToSection("donation")}
            className={styles.mobileDonateBtn}
          >
            Donate
          </button>
        </div>
      )}
    </nav>
  );
}
