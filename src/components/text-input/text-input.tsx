import React from 'react';

type TextInputProps = {
  placeholderText: string;
  buttonName: string;
};

const TextInput: React.FC<TextInputProps> = ({
  buttonName,
  placeholderText,
}) => (
  <div className="mb-4 flex justify-center pt-6">
    <input
      className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder={placeholderText}
    />
    <span>
      {` `}
      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        {buttonName}
      </button>
    </span>
  </div>
);

export default TextInput;
