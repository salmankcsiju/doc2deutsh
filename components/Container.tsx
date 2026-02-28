import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  const base =
    'mx-auto flex w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8';
  const combined = className ? `${base} ${className}` : base;

  return <div className={combined}>{children}</div>;
};

export default Container;

