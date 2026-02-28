import { ReactNode } from 'react';
import Container from './Container';

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({
  id,
  title,
  eyebrow,
  description,
  children,
  className
}: SectionProps) => {
  const base = 'py-12 sm:py-16 lg:py-20';
  const combined = className ? `${base} ${className}` : base;

  return (
    <section id={id} className={combined}>
      <Container>
        <div className='max-w-3xl'>
          {eyebrow && (
            <p className='mb-2 text-xs font-semibold uppercase tracking-wide text-secondary'>
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className='text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl'>
              {title}
            </h2>
          )}
          {description && (
            <p className='mt-3 text-sm text-slate-600 sm:text-base'>
              {description}
            </p>
          )}
        </div>
        <div className='mt-8'>
          {children}
        </div>
      </Container>
    </section>
  );
};

export default Section;

