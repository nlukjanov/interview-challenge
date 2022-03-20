import React from 'react';
import './App.css';
import MenuBuilder from './components/MenuBuilder';
import MenuSummary from './components/MenuSummary';

export default () => {
  return (
    <div className='wrapper'>
      <MenuSummary />
      <MenuBuilder />
    </div>
  );
};
