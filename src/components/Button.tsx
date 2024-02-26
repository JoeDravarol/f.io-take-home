import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string | undefined;
  children: React.ReactNode;
}

const Button = ({ className, children, ...delegated }: ButtonProps) => {
  return (
    <button className={`button ${className}`} {...delegated}>
      {children}
    </button>
  );
};

export default Button;
