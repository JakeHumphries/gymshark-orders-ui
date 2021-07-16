import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/header';
import TextInput from './components/text-input/text-input';
import Table from './components/table/table';
import MainWrapper from './components/main-wrapper/main-wrapper';

ReactDOM.render(
  <React.StrictMode>
    <MainWrapper />
  </React.StrictMode>,
  document.getElementById(`root`),
);
