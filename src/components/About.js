import Image from 'next/image'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.textContent}>
            <p className={styles.label}>ABOUT DANIEL</p>
            <h2 className={styles.heading}>God, Family, and Country</h2>
            <p className={styles.text}>
              Daniel is a 30-year resident of Cook County. With his wife of 24 years, Allyson, they have raised two wonderful children in the community. Their son Danny, Jr. has recently graduated from West Point and was commissioned as a Second Lieutenant in the U.S. Army, and their youngest Anna is in her second year at Illinois State University, studying psychology.
            </p>
            <p className={styles.text}>
              Daniel and Allyson understand the importance of family values and good education for children. As a small business owner, Daniel brings common sense to fiscal responsibility.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/family.avif"
              alt="Daniel Lee with his family"
              width={500}
              height={400}
              className={styles.image}
            />
            <div className={styles.decorGold}></div>
            <div className={styles.decorBlue}></div>
          </div>
        </div>

        <div className={`${styles.section} ${styles.reverse}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/working.avif"
              alt="Daniel Lee at work"
              width={500}
              height={400}
              className={styles.image}
            />
            <div className={`${styles.decorBlue} ${styles.decorLeft}`}></div>
            <div className={`${styles.decorGold} ${styles.decorRight}`}></div>
          </div>
          <div className={styles.textContent}>
            <p className={styles.label}>EXPERIENCE</p>
            <h2 className={styles.heading}>Responsibility & Accountability</h2>
            <p className={styles.text}>
              As a small business owner, Daniel serves as a commissioner in the Economic Development Commission and Planning & Zoning Commission for the Village of Hoffman Estates.
            </p>
            <p className={styles.text}>
              He knows how to bring efficient business skills and responsible budget management to our government. Cook County's current budget challenges require a common sense solution to reduce runaway spending.
            </p>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>👥</div>
            <h4 className={styles.valueTitle}>Community Service</h4>
            <p className={styles.valueText}>Church, Scout Troop, neighborhood organizations, Lions Club, Jaycees, and IL Parents Association of West Point.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💼</div>
            <h4 className={styles.valueTitle}>Business Leadership</h4>
            <p className={styles.valueText}>Small business owner bringing common sense and fiscal responsibility to government.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🌍</div>
            <h4 className={styles.valueTitle}>Think Global, Work Local</h4>
            <p className={styles.valueText}>Exporting U.S. agricultural products and advocating for bringing manufacturing jobs back to America.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🇺🇸</div>
            <h4 className={styles.valueTitle}>Conservative Values</h4>
            <p className={styles.valueText}>Unapologetically conservative, bringing a breath of fresh air to one-party ruled Cook County.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
