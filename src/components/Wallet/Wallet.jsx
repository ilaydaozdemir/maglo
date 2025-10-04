import React from 'react';
import styles from './Wallet.module.css';
import TopIcon from '../../assets/Top.png';
import VisaIcon from '../../assets/visa.png';
import AvatarIcon from '../../assets/Avater.png';

const Wallet = () => {
  // Dummy data for scheduled transfers
  const scheduledTransfers = [
    {
      id: 1,
      name: "iSaleh Ahmed",
      date: "April 28, 2022 at 11:00",
      amount: "-$435.00"
    },
    {
      id: 2,
      name: "John Smith",
      date: "April 29, 2022 at 14:30",
      amount: "-$250.00"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      date: "April 30, 2022 at 09:15",
      amount: "-$180.00"
    },
    {
      id: 4,
      name: "Mike Wilson",
      date: "May 1, 2022 at 16:45",
      amount: "-$320.00"
    },
    {
      id: 5,
      name: "Emma Davis",
      date: "May 2, 2022 at 12:20",
      amount: "-$150.00"
    }
  ];

  return (
    <div>
      {/* Header */}
      <div className={styles.header}>
        <h3 className={styles.title}>
          Wallet
        </h3>
        <div className={styles.bullets}>
          <div className={styles.bullet}></div>
          <div className={styles.bullet}></div>
          <div className={styles.bullet}></div>
        </div>
      </div>
      
      {/* Cards Container */}
      <div className={styles.cardsContainer}>
        {/* Second Card (Top) */}
        <div className={styles.secondCard}>
          <img src={TopIcon} alt="Top" className={styles.topIcon} />
          <div className={styles.secondCardNumber}>
            85952548****
          </div>
          
          {/* Visa Icon - Sağ alt köşe */}
          <div className={styles.visaIcon}>
            <img src={VisaIcon} alt="Visa" className={styles.visaImage} />
          </div>
        </div>
        
        {/* First Card (Bottom) */}
        <div className={styles.firstCard}>
          <img src={TopIcon} alt="Top" className={styles.topIcon} />
          <div className={styles.cardNumber}>
            5495  7381  3759  2321
          </div>
        </div>
      </div>
      
      {/* Scheduled Transfers Section */}
      <div className={styles.scheduledSection}>
        <div className={styles.scheduledHeader}>
          <h3 className={styles.scheduledTitle}>
            Scheduled Transfers
          </h3>
          <div className={styles.viewAllContainer}>
            <span className={styles.viewAllText}>
              View All
            </span>
            <svg className={styles.viewAllArrow} viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="var(--color-transaction-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {/* Transfer List */}
        <div className={styles.transferList}>
          {scheduledTransfers.map((transfer) => (
            <div key={transfer.id} className={styles.transferItem}>
              {/* Left side - Avatar and info */}
              <div className={styles.transferLeft}>
                <img src={AvatarIcon} alt="Avatar" className={styles.avatar} />
                <div className={styles.transferInfo}>
                  <div className={styles.transferName}>
                    {transfer.name}
                  </div>
                  <div className={styles.transferDate}>
                    {transfer.date}
                  </div>
                </div>
              </div>
              
              {/* Right side - Amount */}
              <div className={styles.transferAmount}>
                {transfer.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
