import React, {Component} from 'react';
import { connect } from 'react-redux';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }

  handleFavorite = () => {
    this.props.addToFavorites(this.props.food)
  }

  render() {
    const { food } = this.props;

    return (
      <div className="card">
        <div className="top">
          <div className='food-container'>
            <img className="food-img" src={food.image_url}/>
          </div>
          <div className='vote-btns'>
            <img className='vote' src='https://cdn3.iconfinder.com/data/icons/pixo-icons-2/56/1-29-512.png'/>
            <button onClick={this.handleFavorite}>FAVE</button>
          </div>
        </div>

        <div className='bottom'>
          <h1 className="food-title">{food.title}</h1>
          <a className='link' href={food.source_url}>Recipe</a>
        </div>
      </div>
    );
  }
}

export default Card;