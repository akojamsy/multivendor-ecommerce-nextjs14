"use client";
import React, { useState } from "react";
import data from "../../data.json";

const CustomDataTable = () => {
  const arr: number[] = Array.from({ length: 5 }, (_, index) => index + 1);

  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentlyDisplayedData = data.slice(startIndex, endIndex);
  const numberOfPages = Math.ceil(data.length / PAGE_SIZE);
  const itemStartIndex = startIndex + 1;
  const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

  const handlePageChange = (page: number) => {
    console.log(`Page ${page}`);
  };
  return (
    <div>
      <h2 className='text-xl font-semibold mb-4'>Recent Orders</h2>
      <div>
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='p-4'>
                  <div className='flex items-center'>
                    <input
                      id='checkbox-all-search'
                      type='checkbox'
                      className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label htmlFor='checkbox-all-search' className='sr-only'>
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Color
                </th>
                <th scope='col' className='px-6 py-3'>
                  Category
                </th>
                <th scope='col' className='px-6 py-3'>
                  Price
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentlyDisplayedData?.map((data, i) => (
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='w-4 p-4'>
                    <div className='flex items-center'>
                      <input
                        id='checkbox-table-search-1'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                      <label
                        htmlFor='checkbox-table-search-1'
                        className='sr-only'
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className='px-6 py-4'>{data?.first_name}</td>
                  <td className='px-6 py-4'>{data?.last_name}</td>
                  <td className='px-6 py-4'>${data?.gender}</td>
                  <td className='px-6 py-4'>
                    <button className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav
            className='flex items-center flex-column flex-wrap md:flex-row justify-between pt-4'
            aria-label='Table navigation'
          >
            <span className='text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto'>
              Showing{" "}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {startIndex + 1}-{endIndex}
              </span>{" "}
              of{" "}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {data.length}
              </span>
            </span>
            <ul className='inline-flex -space-x-px rtl:space-x-reverse text-sm h-8'>
              <li>
                <button
                  className='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: numberOfPages }, (_, i) => (
                <li>
                  <button
                    onClick={() => setCurrentPage(i + 1)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400  
                    dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === i + 1
                        ? "bg-blue-600 "
                        : "bg-white dark:bg-gray-800 "
                    }`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li>
                <button
                  className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === numberOfPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CustomDataTable;
