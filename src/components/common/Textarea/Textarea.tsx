import React from 'react';
import styles from './Textarea.module.css';

type TextareaProps = {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  className?: string;
};

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  rows = 4,
  className = '',
}) => {
  return (
    <div className={`${styles.textareaWrapper} ${className}`}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default Textarea;
