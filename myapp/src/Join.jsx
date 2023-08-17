import React from "react";
import styles from "./about.module.css";
import discord from "./assets/discord.png";
import insta from "./assets/insta.png";
import telegran from "./assets/telegram.png";

function Join() {
  return (
    <div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.discord}>
            <img
              className={styles.discordlogo}
              src={discord}
              alt="Discord Logo"
            />
          </div>
          <div className={styles.jointext}>Join Our Discord Community</div>
        </div>
        <div className={styles.card}>
          <div className={styles.insta}>
            <img
              className={styles.instalogo}
              src={insta}
              alt="Instagram Logo"
            />
          </div>
          <div className={styles.jointext}>Follow our Instagram</div>
        </div>
        <div className={styles.card}>
          <div className={styles.insta}>
            <img
              className={styles.instalogo}
              src={telegran}
              alt="Telegram Logo"
            />
          </div>
          <div className={styles.jointext}>Join our Telegram</div>
        </div>
      </div>
      <p className={styles.footer}>
        © Copyrights by We are devs . All rights reserved.
      </p>
    </div>
  );
}

export default Join;
