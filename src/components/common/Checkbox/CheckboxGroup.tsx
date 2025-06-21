import React from 'react';
import Checkbox from './Checkbox';

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
  selected,
  onChange,
}) => {
  const handleToggle = (value: string) => {
    const updated =
      selected.includes(value)
        ? selected.filter((v) => v !== value)
        : [...selected, value];
    onChange(updated);
  };

  return (
    <div style={{ marginBottom: '1rem' ,border:"1px solid blue" , padding:"10px" , width:"250px"}}>
      <strong>{label}</strong>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          name={name}
          label={option.label}
          checked={selected.includes(option.value)}
          onChange={() => handleToggle(option.value)}
        />
      ))}
    </div>
  );
};

export default CheckboxGroup;
