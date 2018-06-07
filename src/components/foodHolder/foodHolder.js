import React, {Component} from 'react';
import Card from '../Card/Card';
import './foodHolder.css';
import PropTypes from 'prop-types';

class foodHolder extends Component {

  render() {
    let showOptions;  
    const { location, food, favorites, category } = this.props;
    const cardData = location.pathname === '/fave' ? 
      favorites : food[category];
    
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
  food: PropTypes.array,
  fave: PropTypes.array,
  favorites: PropTypes.array,
  location: PropTypes.string,
  category: PropTypes.string
};

export default foodHolder;