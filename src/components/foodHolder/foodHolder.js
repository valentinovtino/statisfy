import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './foodHolder.css';

const foodHolder = (props) => {

  const showOptions = props.food.map((food, index) => {
    return <Card food={food} key={index}/>;
  });                                                                                                                                                                                         

  return (
    <div className='card-container'>
      {showOptions}
    </div>
  );
};

export default foodHolder;