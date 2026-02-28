type TestimonialCardProps = {
  quote: string;
  doctor: string;
  degree: string;
  city: string;
};

const TestimonialCard = ({
  quote,
  doctor,
  degree,
  city
}: TestimonialCardProps) => {
  return (
    <article className='flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-card'>
      <p className='text-sm text-slate-700'>
        {quote}
      </p>
      <div className='mt-4 border-t border-slate-200 pt-3 text-sm'>
        <p className='font-semibold text-slate-900'>
          {doctor}
        </p>
        <p className='text-slate-700'>
          {degree}
        </p>
        <p className='text-slate-500'>
          {city}
        </p>
      </div>
    </article>
  );
};

export default TestimonialCard;

