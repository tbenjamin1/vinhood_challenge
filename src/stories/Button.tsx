import React from 'react';
import './button.css';

interface ButtonProps {
 
  primary?: boolean;
  btnClass?: 'btn' ;
  backgroundColor?: string;
  type?:"button" | "submit" | "reset" | undefined;
  size?: 'small' | 'medium' | 'large';
 
  label: string;
 
  onClick?: () => void;
}


export const Button = ({
  primary = false,
  size = 'medium',
  btnClass,
  backgroundColor,
  label,
  type,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button

      className={[ `${btnClass}`, ].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
