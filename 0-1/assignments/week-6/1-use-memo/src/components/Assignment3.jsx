/*
  Assignment 3:
    You have been given a list of items you shopped from the grocery store
    You need to calculate the total amount of money you spent
*/

import {useMemo, useState} from 'react';

const Assignment3 = () => {
  const [items, setItems] = useState([
    {name: 'Haldi', value: 10},
    {name: 'Chilli', value: 20},
    {name: 'Potato', value: 30},
    {name: 'Tomato', value: 40},
    // Add more items as needed
  ]);

  const totalValue = useMemo(() => {
    return items.reduce((total, item) => (total += item.value), 0);
  }, [items]);

  return (
    <div>
      <ul
        style={{
          'text-align': 'left',
          margin: '30px 0 0 180px',
          'font-size': '18px',
        }}
      >
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - Price: ${item.value}
          </li>
        ))}
      </ul>

      <h3>Total Value: ${totalValue}</h3>
    </div>
  );
};

export default Assignment3;
