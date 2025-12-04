import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.logoWrapper}>
              <div className={styles.flag}>
                <img src="/images/Flag.svg" />
              </div>
              <h3 className={styles.logo}>Daniel Lee</h3>
            </div>
            <p className={styles.tagline}>for Cook County Commissioner</p>
            <p className={styles.description}>
              Bringing conservative values, fiscal responsibility, and common
              sense leadership to Cook County.
            </p>
            <p className={styles.quote}>"Your Vote Matters!"</p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://ova.elections.il.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Register to Vote
                </a>
              </li>{" "}
              <li>
                <a href="/legal" className={styles.link}>
                  Terms and Conditions / Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span className={styles.contactText}>
                1996 Raleigh Place
                <br />
                Hoffman Estates, IL 60169
              </span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <a
                href="mailto:info@citizens4daniellee.com"
                className={styles.link}
              >
                info@citizens4daniellee.com
              </a>
            </div>

            <div className={styles.social}>
              <a
                href="https://www.facebook.com/people/Citizens-for-Daniel-Lee/61576082322493/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                f
              </a>
              <a
                href="https://youtube.com/@citizens4daniellee?si=4kH6GSJVdD6L0X1Z"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>
            Paid for by Citizens for Daniel Lee.
          </p>
          <a
            href="https://ova.elections.il.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            Register to Vote
          </a>
        </div>
      </div>
    </footer>
  );
}
