"use client";
import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import SalesChart from "./SalesChart";
import { faker } from "@faker-js/faker";

const WeeklySalesChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      type: "sales",
      title: "Sales",
      color:
        "text-green-600 border-b-2 border-green-600 dark:text-green-500 dark:border-green-500",
      hoverColor:
        "hover:text-green-600 hover:border-green-600 dark:hover:text-green-500",
      datasets: [
        {
          label: "Sales",
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: "rgb(29,154,121)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    {
      type: "orders",
      title: "Orders",
      color:
        "text-orange-600 border-orange-600 dark:text-orange-500 dark:border-orange-500",
      hoverColor:
        "hover:text-orange-600 hover:border-orange-600 dark:hover:text-orange-500",
      datasets: [
        {
          label: "Orders",
          data: labels.map(() =>
            faker.datatype.number({ min: -1000, max: 1000 })
          ),
          borderColor: "rgb(234 88 12)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  return (
    <div className='bg-gray-800 p-8 rounded-lg'>
      <h2 className='text-xl font-semibold'>Weekly Charts</h2>

      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          {tabs.map((tab, i) => (
            <li className='me-2' key={i}>
              <button
                onClick={() => setChartToDisplay(tab.type)}
                className={
                  chartToDisplay === tab.type
                    ? twMerge(
                        "inline-block p-3 border-b-2 border-transparent rounded-t-lg",
                        tab.color
                      )
                    : twMerge(
                        "inline-block p-3 border-b-2 border-transparent rounded-t-lg",
                        tab.hoverColor
                      )
                }
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* content of tab */}
      <div className='w-full'>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <SalesChart labels={labels} datasets={tab.datasets} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WeeklySalesChart;
