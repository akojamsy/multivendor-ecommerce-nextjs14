import { Layers } from "lucide-react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type Item = {
  title: string;
  sales: number;
  color: string;
  icon?: React.ReactNode;
};

interface Props {
  className?: string;
  item: Item;
}

export const SmallCard: FC<Props> = ({ className, item }) => {
  return (
    <div
      className={twMerge(
        `rounded-lg text-white p-5 flex items-center flex-row gap-x-4 `,
        className
      )}
    >
      <div
        className={twMerge(
          `w-12 h-12 rounded-full flex justify-center items-center `,
          item.color
        )}
      >
        {item.icon}
      </div>
      <div>
        <p className='text-gray-300'>{item.title}</p>
        <h2 className='text-sm xl:text-lg 2xl:text-2xl font-semibold'>
          &#8358;{item.sales}
        </h2>
      </div>
    </div>
  );
};
