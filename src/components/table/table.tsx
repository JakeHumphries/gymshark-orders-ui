/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { deletePackSize } from '../../api/orders-api';

type TableProps = {
  generatedPacks: Record<string, unknown>;
  updateGeneratedPacks: React.Dispatch<React.SetStateAction<any>>;
};

const Table: React.FC<TableProps> = ({
  generatedPacks,
  updateGeneratedPacks,
}) => {
  const [render, causeRender] = useState(true);

  function renderTableData(): JSX.Element[] {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return Object.entries(generatedPacks as {}).map((packsize) => (
      <tr className="border-b border-gray-200">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{packsize[0]}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{packsize[1] as number}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-indigo-500 hover:scale-110">
              <button
                type="button"
                onClick={async () => {
                  const result = await deletePackSize(packsize[0]);
                  if (result) {
                    delete generatedPacks[packsize[0]];
                    updateGeneratedPacks(generatedPacks);
                    causeRender(!render);
                  }
                }}
              >
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
              </button>
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
