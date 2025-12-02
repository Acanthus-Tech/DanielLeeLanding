import styles from "./Donation.module.css";

export default function Donation() {
  return (
    <section className={styles.donation} id="donation">
      <div className={styles.flagBackground}>
        <img src="/images/Flag.svg" />
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>SUPPORT THE CAMPAIGN</span>
          </div>
          <h2 className={styles.heading}>Donate to Daniel's Campaign</h2>
          <p className={styles.subheading}>
            Your contribution helps bring conservative values and fiscal
            responsibility to Cook County. Every donation makes a difference.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardIcon}>✉️</div>
          <h3 className={styles.cardTitle}>To Donate to Daniel's Campaign</h3>
          <p className={styles.cardSubtitle}>Send a check to:</p>

          <div className={styles.address}>
            <span className={styles.pin}>📍</span>
            <address className={styles.addressText}>
              <strong>Citizens for Daniel Lee</strong>
              <br />
              1996 Raleigh Place
              <br />
              Hoffman Estates, IL 60169
            </address>
          </div>

          <p className={styles.disclaimer}>
            Paid for by Citizens for Daniel Lee. Contributions are not tax
            deductible for federal income tax purposes.
          </p>

          <a
            href="https://www.citizens4daniellee.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateBtn}
          >
            Donate Online
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <p className={styles.statNumber}>25+</p>
            <p className={styles.statLabel}>Years in Cook County</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statNumber}>2</p>
            <p className={styles.statLabel}>Commission Appointments</p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statNumber}>24</p>
            <p className={styles.statLabel}>Years of Marriage</p>
          </div>
        </div>
      </div>
    </section>
  );
}
