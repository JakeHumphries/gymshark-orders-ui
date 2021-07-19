import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Table from '../table/table';
import OrderSubmit from '../order-submit/order-submit';
import AddPack from '../add-pack/add-pack';
import { getPackBreakdown } from '../../api/orders-api';

const MainWrapper: React.FC = () => {
  const [generatedPacks, updateGeneratedPacks] = useState({});

  useEffect(() => {
    const getPacks = async () => {
      const packBreakdown = await getPackBreakdown(`0`);
      updateGeneratedPacks(packBreakdown);
    };
    getPacks();
  }, []);

  return (
    <>
      <Header />
      <OrderSubmit
        buttonName="Submit"
        placeholderText="Enter Order Quantity"
        updateGeneratedPacks={updateGeneratedPacks}
      />
      <Table
        generatedPacks={generatedPacks}
        updateGeneratedPacks={updateGeneratedPacks}
      />
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
