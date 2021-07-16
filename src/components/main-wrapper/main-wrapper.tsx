import React, { useState } from 'react';
import Header from '../header/header';
import Table from '../table/table';
import TextInput from '../text-input/text-input';

const MainWrapper: React.FC = () => {
  const [generatedPacks, updateGeneratedPacks] = useState({
    250: 0,
    500: 0,
    1000: 0,
    2000: 0,
    5000: 0,
  });
  return (
    <>
      <Header />
      <TextInput buttonName="Submit" placeholderText="Enter Order Quantity" />
      <Table generatedPacks={generatedPacks} />
      <TextInput buttonName="Add" placeholderText="Add New Pack Size" />
    </>
  );
};

export default MainWrapper;
