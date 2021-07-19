import React, { useState } from 'react';
import { getPackBreakdown } from '../../api/orders-api';

type OrderSubmitProps = {
  placeholderText: string;
  buttonName: string;
  updateGeneratedPacks: React.Dispatch<
    React.SetStateAction<{
      250: number;
      500: number;
      1000: number;
      2000: number;
      5000: number;
    }>
  >;
};

const OrderSubmit: React.FC<OrderSubmitProps> = ({
  buttonName,
  placeholderText,
  updateGeneratedPacks,
}) => {
  const [term, setTerm] = useState(``);

  return (
    <div className="mb-4 flex justify-center pt-6">
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder={placeholderText}
        onChange={(e) => setTerm(e.target.value)}
      />
      <span>
        {` `}
        <button
          type="button"
          onClick={async () => {
            const packBreakdown: any = await getPackBreakdown(term);
            updateGeneratedPacks(packBreakdown);
          }}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonName}
        </button>
      </span>
    </div>
  );
};

export default OrderSubmit;
