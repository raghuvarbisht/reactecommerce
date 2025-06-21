import React from 'react';
import styles from './InputText.module.css';
import type { InputTextProps } from './InputText.types';

const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = ' ',
  readonly = false,
  disabled = false,
  type = 'text',
  error,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className={styles.inputField}
        readOnly={readonly}
        disabled={disabled}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {error && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default InputText;
