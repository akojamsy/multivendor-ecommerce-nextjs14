import { FC } from "react";
import { LargeCard } from "./LargeCard";

const LargeCards = () => {
  const salesData = [
    {
      title: "Today Orders",
      price: 108.12,
      color: "bg-green-600",
    },
    {
      title: "Yesterday Orders",
      price: 0.0,
      color: "bg-orange-600",
    },
    {
      title: "This Month",
      price: 12685.58,
      color: "bg-blue-600",
    },
    {
      title: "Last Month",
      price: 151990.59,
      color: "bg-sky-600",
    },
    {
      title: "All Time Sales",
      price: 108.12,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  gap-4'>
      {salesData?.map((sale, i) => (
        <LargeCard className={`${sale.color} `} item={sale} key={i} />
      ))}
    </div>
  );
};

export default LargeCards;
