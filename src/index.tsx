import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import TextInput from './components/text-input/text-input';
import Table from './components/table/table';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <TextInput buttonName="Submit" placeholderText="Enter Order Quantity" />
    <Table />
    <TextInput buttonName="Add" placeholderText="Add New Pack Size" />
  </React.StrictMode>,
  document.getElementById(`root`),
);
