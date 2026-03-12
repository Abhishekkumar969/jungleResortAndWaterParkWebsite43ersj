import React from "react";
import Navbar from "../../components/navigation-temp";
import Footer from "../../components/footer-temp";

import BirthdayHero from "../../components/birthdays/birthday-hero";
import BirthdayStages from "../../components/birthdays/birthday-stages";
import BirthdayPackages from "../../components/birthdays/birthday-packages";
import BirthdayAddons from "../../components/birthdays/birthday-addons";
import BirthdayBooking from "../../components/birthdays/birthday-booking";

import styles from "../../styles/birthdays-page.module.css";

export default function BirthdaysPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      
      <BirthdayHero />
      <BirthdayStages />
      <BirthdayPackages />
      <BirthdayAddons />
      <BirthdayBooking />

      <Footer />
    </main>
  );
}