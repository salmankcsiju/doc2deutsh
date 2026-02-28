import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  className?: string;
};

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary';

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-slate-900 focus-visible:ring-primary',
  secondary:
    'bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary',
  outline:
    'border border-primary text-primary hover:bg-primary/5 focus-visible:ring-primary'
};

const Button = ({
  children,
  href,
  type = 'button',
  variant = 'primary',
  className
}: ButtonProps) => {
  const variantClass = variantStyles[variant];
  const combined = className
    ? `${baseStyles} ${variantClass} ${className}`
    : `${baseStyles} ${variantClass}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combined}>
      {children}
    </button>
  );
};

export default Button;

