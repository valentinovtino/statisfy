import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  handleFavorite = () => {
    this.props.addToFavorites(this.props.food);
  }

  handleRemoveFavorite = () => {
    this.props.removeFavorite(this.props.fave, this.props.fave.title);
  }

  render() {
    const { food, fave, allState } = this.props;
    // const clickProp = allState.click;
    return (
      this.props.food ?

        <div className="card">
          <div className="top">
            <div className='food-container'>
              <img className="food-img" src={food.image_url}/>
            </div>
            <div className='vote-btns'>
              <img className='vote' src='https://cdn3.iconfinder.com/data/icons/pixo-icons-2/56/1-29-512.png'/>
              <button className='like-btn'onClick={this.handleFavorite}>FAVE</button>
            </div>
          </div>

          <div className='bottom'>
            <h1 className="food-title">{food.title}</h1>
            <a className='link' href={food.source_url}>Recipe</a>
          </div>
        </div> :
      

        <div className="card">
          <div className="top">
            <div className='food-container'>
              <img className="food-img" src={fave.image_url}/>
            </div>
            <div className='vote-btns'>
              <img className='vote' src='https://cdn3.iconfinder.com/data/icons/pixo-icons-2/56/1-29-512.png'/>
              <button className='remove-btn' onClick={this.handleRemoveFavorite}>Remove</button>
            </div>
          </div>

          <div className='bottom'>
            <h1 className="food-title">{fave.title}</h1>
            <a className='link' href={fave.source_url}>Recipe</a>
          </div>
        </div>

    );
  }
}

Card.propTypes = {
  addToFavorites: PropTypes.func,
  removeFavorite: PropTypes.func,
  food: PropTypes.Object,
  fave: PropTypes.func,
  allState: PropTypes.Object
};

export default Card;