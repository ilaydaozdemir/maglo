import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ size = 'medium', color = 'primary' }) => {
  return (
    <div className={`${styles.spinner} ${styles[size]} ${styles[color]}`}>
      <div className={styles.spinnerInner}></div>
    </div>
  );
};

export default Spinner;
