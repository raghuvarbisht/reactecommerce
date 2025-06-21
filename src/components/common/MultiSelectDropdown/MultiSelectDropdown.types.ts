export interface DropdownOption {
    label: string;
    value: string;
  }
  
  export interface MultiSelectDropdownProps {
    label: string;
    name: string;
    selectedValues: string[];
    onChange: (selected: string[]) => void;
    options: DropdownOption[];
    placeholder?: string;
    error?: string;
  }
  