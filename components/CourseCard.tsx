type CourseCardProps = {
  title: string;
  bullets: string[];
  outcome: string;
};

const CourseCard = ({ title, bullets, outcome }: CourseCardProps) => {
  return (
    <article className='flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-card'>
      <h2 className='text-lg font-semibold text-slate-900'>
        {title}
      </h2>
      <ul className='mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700'>
        {bullets.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className='mt-4 border-t border-slate-200 pt-3'>
        <p className='text-sm font-medium text-slate-900'>
          Outcome
        </p>
        <p className='mt-1 text-sm text-slate-700'>
          {outcome}
        </p>
      </div>
    </article>
  );
};

export default CourseCard;

