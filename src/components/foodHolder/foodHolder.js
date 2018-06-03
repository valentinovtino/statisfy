import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './foodHolder.css';

const foodHolder = () => {
    const { food } = this.props;
    {console.log(food)}
  const showHouses = food.map((food, index) => {
    return <Card food={food} key={index}/>;
  });

  return (
    <div className='card-container'>
      {showHouses}
    </div>
  );
};

export default foodHolder;