import React, {Component} from 'react';
import Card from '../Card/Card';
import './foodHolder.css';
import PropTypes from 'prop-types';
import { category } from '../../reducers/reducer';

class foodHolder extends Component {

  render(props) {
   
    let showOptions;
    
    const { location, food, favorites, category } = this.props;
    const cardData = location.pathname === '/fave' ? favorites : food[category];
    const removeFave = location.pathname ==='/fave' ? this.props.removeFavorite : null;
    const addFave = location.pathname !== '/fave' ? this.props.addToFavorites : null;

    
    showOptions = cardData.map((food, index) => {
      return <Card 
        food={food} 
        key={index} 
         />;
    });     
  
    
    return (
      <div className='card-container'>
        {showOptions}
      </div>
    );
  }
}

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