import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './foodHolder.css';

const foodHolder = (props) => {
  {console.log(props)}
  let showOptions;

  if (props.allState.click === false) {
    showOptions = props.food.map((food, index) => {
      return <Card allState={props.allState} food={food} key={index} addToFavorites={props.addToFavorites}/>;
    });     
  }
  if (props.allState.click === true) {
    showOptions = props.favorites.map((fave) => {
      return <Card allState={props.allState} fave={fave} addToFavorites={props.addToFavorites}/>;
    });
  }

  return (
    <div className='card-container'>
      {showOptions}
    </div>
  );
};

export default foodHolder;