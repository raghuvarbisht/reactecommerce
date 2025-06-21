import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';
import type { DropdownProps } from './Dropdown.types';

const Dropdown: React.FC<DropdownProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label || '';

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <div
        className={`${styles.dropdownContainer} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selected}>{selectedLabel || ' '}</div>
        <label
          htmlFor={name}
          className={`${styles.label} ${
            isOpen || value ? styles.floating : ''
          }`}
        >
          {label}
        </label>
      </div>
      {isOpen && (
        <ul className={styles.options}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${styles.option} ${
                option.value === value ? styles.selected : ''
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Dropdown;
