import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, value, icon, isActive, onClick }) => {
  return (
    <div 
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <div className={styles.cardLeft}>
        <div className={styles.iconContainer}>
          <img 
            src={icon} 
            alt={title} 
            className={styles.cardIcon}
          />
        </div>
      </div>
      
      <div className={styles.cardRight}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardValue}>{value}</p>
      </div>
    </div>
  );
};

export default Card;
