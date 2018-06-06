import React from 'react';
import { cleanData } from '../../apiCalls/helper';
import Card from '../Card/Card';
import './foodHolder.css';
import PropTypes from 'prop-types';

const foodHolder = (props) => {
  let showOptions;

  if (props.allState.click === false) {
    showOptions = props.food.map((food, index) => {
      return <Card allState={props.allState} food={food} key={index} addToFavorites={props.addToFavorites}/>;
    });     
  }
  if (props.allState.click === true) {
    showOptions = props.favorites.map((fave, index) => {
      return <Card allState={props.allState} key={index} fave={fave} id={props.recipe_id} removeFavorite={props.removeFavorite}/>;
    });
  }

  return (
    <div className='card-container'>
      {showOptions}
    </div>
  );
};

foodHolder.propTypes = {
  addToFavorites: PropTypes.func,
  removeFavorite: PropTypes.func,
  food: PropTypes.Array,
  fave: PropTypes.Array,
  allState: PropTypes.Object,
  favorites: PropTypes.Array,
  recipe_id: PropTypes.number
};

export default foodHolder;