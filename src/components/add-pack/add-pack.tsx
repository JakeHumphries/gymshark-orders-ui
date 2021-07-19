import React, { useState } from 'react';
import { addPackSize } from '../../api/orders-api';

type OrderSubmitProps = {
  placeholderText: string;
  buttonName: string;
  generatedPacks: Record<string, unknown>;
  updateGeneratedPacks: React.Dispatch<React.SetStateAction<any>>;
};

const AddPack: React.FC<OrderSubmitProps> = ({
  buttonName,
  placeholderText,
  generatedPacks,
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
            const result = await addPackSize(term);
            if (result) {
              updateGeneratedPacks({ ...generatedPacks, [term]: 0 });
            }
          }}
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        >
          {buttonName}
        </button>
      </span>
    </div>
  );
};

export default AddPack;
