"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const BestSellingProductsChart = () => {
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [45, 24, 10, 21],
        backgroundColor: [
          "rgb(11,24,170, 0.7)",
          "rgb(170,11,133, 0.7)",
          "rgb(5,93,79, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgb(11,24,170, 1)",
          "rgb(170,11,133, 1)",
          "rgb(5,93,79, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='bg-slate-800 p-8 rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Best Selling Charts</h2>
      <div className='flex items-center justify-center h-[300px]'>
        <Pie data={data} />
      </div>
    </div>
  );
};

export default BestSellingProductsChart;
