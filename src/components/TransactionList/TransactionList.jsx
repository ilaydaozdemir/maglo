import React from 'react';
import styles from './TransactionList.module.css';
import Table1Icon from '../../assets/table1.png';

const TransactionList = () => {
  const transactions = [
    {
      id: 1,
      name: 'Iphone 13 Pro MAX',
      business: 'Apple. Inc',
      type: 'Mobile',
      amount: '$420.84',
      date: '14 Apr 2022'
    },
    {
      id: 2,
      name: 'Iphone 13 Pro MAX',
      business: 'Apple. Inc',
      type: 'Mobile',
      amount: '$420.84',
      date: '14 Apr 2022'
    },
    {
      id: 3,
      name: 'Iphone 13 Pro MAX',
      business: 'Apple. Inc',
      type: 'Mobile',
      amount: '$420.84',
      date: '14 Apr 2022'
    }
  ];

  return (
    <div className={styles.transactionList}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Transaction</h3>
        <div className={styles.viewAll}>
          <span className={styles.viewAllText}>View All</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="var(--color-transaction-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      </div>
      
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>NAME/BUSINESS</div>
          <div className={styles.headerCell}>TYPE</div>
          <div className={styles.headerCell}>AMOUNT</div>
          <div className={styles.headerCell}>DATE</div>
        </div>
        
        {transactions.map((transaction) => (
          <div key={transaction.id} className={styles.tableRow}>
            <div className={styles.cell}>
              <div className={styles.nameBusiness}>
                <img src={Table1Icon} alt="Transaction" className={styles.transactionIcon} />
                <div className={styles.nameBusinessInfo}>
                  <div className={styles.name}>{transaction.name}</div>
                  <div className={styles.business}>{transaction.business}</div>
                </div>
              </div>
            </div>
            <div className={styles.cell}>
              <span className={styles.type}>{transaction.type}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.amount}>{transaction.amount}</span>
            </div>
            <div className={styles.cell}>
              <span className={styles.date}>{transaction.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
