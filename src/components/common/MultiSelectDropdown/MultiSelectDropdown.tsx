import React, { useState, useEffect, useRef } from 'react';
import styles from './MultiSelectDropdown.module.css';
import type { MultiSelectDropdownProps } from './MultiSelectDropdown.types';

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label,
  name,
  selectedValues,
  onChange,
  options,
  placeholder = '',
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSelect = (value: string) => {
    const newSelection = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];
    onChange(newSelection);
  };

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <div
        className={`${styles.container} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.selectedChips}>
          {selectedValues.length > 0
            ? selectedValues
                .map((val) => options.find((opt) => opt.value === val)?.label)
                .filter(Boolean)
                .map((label, index) => (
                  <span key={index} className={styles.chip}>
                    {label}
                  </span>
                ))
            : <span style={{ color: '#aaa' }}>{placeholder || 'Select...'}</span>}
        </div>
        <label
          htmlFor={name}
          className={`${styles.label} ${isOpen || selectedValues.length ? styles.floating : ''}`}
        >
          {label}
        </label>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className={styles.options}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.value}
                  className={styles.option}
                  onClick={() => toggleSelect(option.value)}
                >
                  <input
                    type="checkbox"
                    checked={selectedValues.includes(option.value)}
                    readOnly
                  />
                  {option.label}
                </li>
              ))
            ) : (
              <li className={styles.option}>No options found</li>
            )}
          </ul>
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default MultiSelectDropdown;
