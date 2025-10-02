import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick = () => {},
  type = 'button',
  disabled = false,
  icon = null,
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
