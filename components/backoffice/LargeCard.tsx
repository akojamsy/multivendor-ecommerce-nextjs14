import { Layers } from "lucide-react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Item = {
  title: string;
  price: number;
  color: string;
};

interface Props {
  className?: string;
  item: Item;
}

export const LargeCard: FC<Props> = ({ className, item }) => {
  return (
    <div
      className={twMerge(
        `rounded-lg text-white p-8 flex items-center flex-col gap-y-2 `,
        className
      )}
    >
      <Layers />
      <h4>{item.title}</h4>
      <h2 className='text-base xl:text-xl 2xl:text-3xl'>&#8358;{item.price}</h2>
    </div>
  );
};
