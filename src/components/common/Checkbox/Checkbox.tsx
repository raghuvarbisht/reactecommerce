import React from 'react';
import styles from './Checkbox.module.css';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox: React.FC<CheckboxProps> = ({ label, name, checked, onChange }) => {
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.customBox}></span>
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};

export default Checkbox;
