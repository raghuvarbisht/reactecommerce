import React from 'react';
import styles from './FileInput.module.css';


type FileInputProps = {
  label?: string;
  accept?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
  className?: string;
};

const FileInput: React.FC<FileInputProps> = ({
  label = 'Upload File',
  accept = '',
  multiple = false,
  onChange,
  className = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files);
  };

  return (
    <div className={`${styles.fileInputWrapper} ${className}`} >
      <label className={styles.fileLabel}>
        {label}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden-input"
        />
      </label>
    </div>
  );
};

export default FileInput;
