import React from 'react';

interface ButtonProps {

  primary?: boolean;
  btnClass?: string ;
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
  const mode = primary ? 'btn-primary' : 'btn-secondary';
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
