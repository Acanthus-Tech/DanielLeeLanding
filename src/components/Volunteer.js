"use client";

import { useState } from "react";
import styles from "./Volunteer.module.css";

const volunteerOptions = [
  { id: "walk", label: "Walk the Precincts" },
  { id: "yardsign", label: "Place Yard Sign" },
  { id: "texts", label: "Receive Text Messages" },
  { id: "contact", label: "Contact Voters" },
  { id: "general", label: "General Volunteer" },
];

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    options: [],
  });

  const handleOptionToggle = (optionId) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options.includes(optionId)
        ? prev.options.filter((id) => id !== optionId)
        : [...prev.options, optionId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer form submitted:", formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.volunteer} id="volunteer">
        <div className={styles.successContainer}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Thanks for Submitting!</h2>
          <p className={styles.successText}>
            We appreciate your support. A member of our team will contact you
            soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.volunteer} id="volunteer">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>GET INVOLVED</span>
          </div>
          <h2 className={styles.heading}>Even More Ways You Could Help</h2>
          <p className={styles.subheading}>
            Join our team of dedicated volunteers working to elect Daniel Lee.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Volunteer Sign-Up</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone" className={styles.inputLabel}>
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="(555) 555-5555"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>
                How would you like to help?
              </label>
              <div className={styles.checkboxGroup}>
                {volunteerOptions.map((option) => (
                  <label key={option.id} className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={formData.options.includes(option.id)}
                      onChange={() => handleOptionToggle(option.id)}
                      className={styles.checkbox}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
