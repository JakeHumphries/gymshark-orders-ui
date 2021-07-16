import React, { useState } from 'react';

const Table: React.FC = () => {
  const [packSizes] = useState({
    250: 0,
    500: 0,
    1000: 0,
    2000: 0,
    5000: 0,
  });

  function renderTableData(): JSX.Element[] {
    return Object.entries(packSizes).map((packsize) => (
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{packsize[0]}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{packsize[1]}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </td>
      </tr>
    ));
  }

  return (
    <div className="flex overflow-x-auto justify-center">
      <div className="bg-white shadow-md rounded my-6">
        <table className="table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Pack Size</th>
              <th className="py-3 px-6 text-left">Amount </th>
              <th className="py-3 px-6 text-center"> </th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
