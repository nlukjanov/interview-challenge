import React from 'react';

const MenuSummary = ({ selectedItems }) => {
  let totalDietaries = [];
  selectedItems.map((item) => {
    totalDietaries = [...totalDietaries, ...item.dietaries];
  });
  const countedDietaries = totalDietaries.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  console.log('countedDietaries', countedDietaries);
  return (
    <div className='menu-summary'>
      <div className='container'>
        <div className='row'>
          <div className='col-6 menu-summary-left'>
            <span>{selectedItems?.length} items</span>
          </div>
          <div className='col-6 menu-summary-right'>
            {Object.keys(countedDietaries).map((dietary) => {
              return (
                <span key={dietary}>
                  {countedDietaries[dietary]}x
                  <span className='dietary'>{dietary}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSummary;
