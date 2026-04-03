import React from "react";
import Navbar from "../../components/navigation-temp";

import BirthdayHero from "../../components/birthdays/birthday-hero";
import BirthdayStages from "../../components/birthdays/birthday-stages";

import styles from "../../styles/birthdays-page.module.css";

export default function BirthdaysPage() {
  return (
    <main className={styles.page}>
      <Navbar />

      <BirthdayHero />
      <BirthdayStages />
    </main>
  );
}