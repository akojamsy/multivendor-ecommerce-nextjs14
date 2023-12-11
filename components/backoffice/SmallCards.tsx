import { FC } from "react";
import { SmallCard } from "./SmallCard";
import { Check, RefreshCcwIcon, ShoppingCart, Truck } from "lucide-react";

const SmallCards = () => {
  const salesData = [
    {
      title: "Total Orders",
      sales: 800,
      color: "bg-orange-600",
      icon: <ShoppingCart />,
    },
    {
      title: "Orders Pending",
      sales: 500,
      color: "bg-green-600",
      icon: <RefreshCcwIcon />,
    },
    {
      title: "Order Processing",
      sales: 100,
      color: "bg-blue-600",
      icon: <Truck />,
    },
    {
      title: "Orders Delivered",
      sales: 250,
      color: "bg-sky-600",
      icon: <Check />,
    },
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4  gap-4 my-10 shadow-lg'>
      {salesData?.map((sale, i) => (
        <SmallCard className={`bg-gray-800`} item={sale} key={i} />
      ))}
    </div>
  );
};

export default SmallCards;
