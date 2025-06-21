export interface InputTextProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    type?: string;
    error?: string;
  }
  