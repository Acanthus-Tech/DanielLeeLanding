"use client";

import { useState } from "react";
import styles from "./YouTube.module.css";

export default function YouTube() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoId = "aFHzXYfEme8?si=ecjHxsoefFyfwK91";

  //www.citizens4daniellee.com/
  https: return (
    <section className={styles.youtube} id="video">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.label}>WATCH</p>
          <h2 className={styles.heading}>Daniel's Message to You</h2>
          <p className={styles.subheading}>
            Hear directly from Daniel about his vision for Cook County and why
            your vote matters.
          </p>
        </div>

        <div className={styles.videoWrapper}>
          {!isPlaying ? (
            <div
              className={styles.placeholder}
              onClick={() => setIsPlaying(true)}
            >
              <div className={styles.playButton}>
                <span className={styles.playIcon}>▶</span>
              </div>
              <div className={styles.playText}>
                <p className={styles.playTitle}>Click to Play</p>
                <p className={styles.playSubtitle}>Campaign Video Message</p>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="Daniel Lee Campaign Video"
              className={styles.iframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className={styles.channelLink}>
          <a
            href="https://www.youtube.com/@Citizens4DanielLee"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Visit our YouTube Channel →
          </a>
        </div>
      </div>
    </section>
  );
}
