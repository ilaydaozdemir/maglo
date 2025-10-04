import React from "react";
import styles from "./Wallet.module.css";
import TopIcon from "../../assets/Top.png";
import VisaIcon from "../../assets/visa.png";
import AvatarIcon from "../../assets/Avater.png";
import { scheduledTransfers } from "../../data/dashboardData";

const Wallet = () => {
  return (
    <div>
      <div className={styles.header}>
        <h3 className={styles.title}>Wallet</h3>
        <div className={styles.bullets}>
          <div className={styles.bullet}></div>
          <div className={styles.bullet}></div>
          <div className={styles.bullet}></div>
        </div>
      </div>

      {/* Cards Container */}
      <div className={styles.cardsContainer}>
        <div className={styles.secondCard}>
          <img src={TopIcon} alt="Top" className={styles.topIcon} />
          <div className={styles.secondCardNumber}>85952548****</div>

          <div className={styles.visaIcon}>
            <img src={VisaIcon} alt="Visa" className={styles.visaImage} />
          </div>
        </div>

        <div className={styles.firstCard}>
          <img src={TopIcon} alt="Top" className={styles.topIcon} />
          <div className={styles.cardNumber}>5495 7381 3759 2321</div>
        </div>
      </div>

      {/* Scheduled Transfers Section */}
      <div className={styles.scheduledSection}>
        <div className={styles.scheduledHeader}>
          <h3 className={styles.scheduledTitle}>Scheduled Transfers</h3>
          <div className={styles.viewAllContainer}>
            <span className={styles.viewAllText}>View All</span>
            <svg
              className={styles.viewAllArrow}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="var(--color-transaction-link)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Transfer List */}
        <div className={styles.transferList}>
          {scheduledTransfers.map((transfer) => (
            <div key={transfer.id} className={styles.transferItem}>
              <div className={styles.transferLeft}>
                <img src={AvatarIcon} alt="Avatar" className={styles.avatar} />
                <div className={styles.transferInfo}>
                  <div className={styles.transferName}>{transfer.name}</div>
                  <div className={styles.transferDate}>{transfer.date}</div>
                </div>
              </div>

              <div className={styles.transferAmount}>-{transfer.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
