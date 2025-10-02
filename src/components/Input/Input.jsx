import React from 'react';
import styles from './Input.module.css';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value = '', 
  onChange = () => {},
  name = '',
  label = '',
  error = '',
  ...props 
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
