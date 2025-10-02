import React from 'react';
import styles from './Input.module.css';

const Input = ({ 
  type = 'text', 
  placeholder = '', 
  value = '', 
  onChange = () => {},
  name = '',
  label = '',
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
        className={styles.input}
        {...props}
      />
    </div>
  );
};

export default Input;
