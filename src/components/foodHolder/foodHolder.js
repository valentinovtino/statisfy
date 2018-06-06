import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './foodHolder.css';

const foodHolder = (props) => {

  const showHouses = props.food.map((food, index) => {
    return <Card food={food} key={index}/>;
  });                                                                                                                                                                                         

  return (
    <div className='card-container'>
      {showHouses}
    </div>
  );
};

export default foodHolder;