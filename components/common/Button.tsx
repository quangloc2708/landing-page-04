import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  children,
  ...props
}) => {
  let baseStyle =
    'px-6 py-2 h-9 lg:h-10 font-title flex items-center justify-center rounded-full text-base  transition-colors duration-200 italic font-black';
  let style = '';

  if (variant === 'primary') {
    style = disabled
      ? 'bg-yellowAccent text-black opacity-40 cursor-not-allowed'
      : 'bg-yellowAccent text-black hover:bg-[#C79B12]';
  }

  if (variant === 'secondary') {
    style = disabled
      ? 'border border-yellowAccent text-gray-500 opacity-40 cursor-not-allowed'
      : 'border border-yellowAccent text-[#D2D2D2] hover:border-[#FFE8AB]';
  }

  return (
    <button className={`${baseStyle} ${style}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
