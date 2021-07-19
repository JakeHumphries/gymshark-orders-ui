import React, { useState } from 'react';
import Header from '../header/header';
import Table from '../table/table';
import OrderSubmit from '../order-submit/order-submit';
import AddPack from '../add-pack/add-pack';

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
      <OrderSubmit
        buttonName="Submit"
        placeholderText="Enter Order Quantity"
        updateGeneratedPacks={updateGeneratedPacks}
      />
      <Table generatedPacks={generatedPacks} />
      <AddPack
        buttonName="Add"
        placeholderText="Add New Pack Size"
        updateGeneratedPacks={updateGeneratedPacks}
        generatedPacks={generatedPacks}
      />
    </>
  );
};

export default MainWrapper;
