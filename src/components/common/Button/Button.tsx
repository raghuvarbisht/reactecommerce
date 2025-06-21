import React from "react";
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button : React.FC<ButtonProps>= ({
    label,
    onClick,
    type = 'button',
    disabled = false,
    className = ''
}) => {

    return (
        <>
        <button
          type ={type}
          onClick={onClick}
          disabled={disabled}
          className={`${styles.button} ${className}`}
        >
         {label}
        </button>
        </>

        
    )
}
export default Button