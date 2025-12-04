"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ImageGallery.module.css";

const galleryItems = [
  {
    id: "family",
    primary: "/images/family.webp",
    hover: "/images/community.avif",
    title: "Family Values",
    description:
      "A devoted husband and father, raising a family with strong values in Cook County for 25 years.",
  },
  {
    id: "blue",
    primary: "/images/blue.avif",
    hover: "/images/working.avif",
    title: "Back the Blue",
    description:
      "Strong supporter of law enforcement and public safety in our communities.",
  },
  {
    id: "working",
    primary: "/images/working.avif",
    hover: "/images/blue.avif",
    title: "Hard Working",
    description:
      "Dedicated to serving the community through tireless effort and commitment.",
  },
  {
    id: "leader",
    primary: "/images/leader.avif",
    hover: "/images/candidate.avif",
    title: "A Real Leader",
    description:
      "Bringing common sense leadership and conservative values to Cook County.",
  },
  {
    id: "community",
    primary: "/images/community.avif",
    hover: "/images/family.webp",
    title: "Community Service",
    description:
      "Serving in Economic Development Commission and Planning & Zoning Commission for Hoffman Estates.",
  },
  {
    id: "great",
    primary: "/images/hero.avif",
    hover: "/images/withpeople.avif",
    title: "Make Cook County Great Again",
    description:
      "It's time to bring conservative values and fiscal responsibility back to Cook County.",
  },
];

function GalleryCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={item.primary}
          alt={item.title}
          fill
          style={{
            objectFit: "cover",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.3s",
          }}
        />
        <Image
          src={item.hover}
          alt={`${item.title} - alternate`}
          fill
          style={{
            objectFit: "cover",
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
        <div className={styles.cardOverlay}></div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.cardDesc}>{item.description}</p>
        </div>
      </div>
      <div
        className={`${styles.cardBorder} ${
          isHovered ? styles.cardBorderActive : ""
        }`}
      ></div>
    </div>
  );
}

export default function ImageGallery() {
  return (
    <section className={styles.gallery} id="gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Meet Daniel Lee</h2>
          <p className={styles.subheading}>
            A real leader for real people. Hover over each image to learn more
            about Daniel's commitment to our community.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
