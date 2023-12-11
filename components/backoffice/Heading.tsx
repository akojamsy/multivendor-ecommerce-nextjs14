interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <div className='pb-8 text-2xl font-semibold text-slate-50'>{title}</div>
  );
};
