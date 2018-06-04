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

  render() {
    const { food } = this.props;

    return (
      <div className="card">
        <div className="top">
          <div>
            <img className="food-img" src={food.image_url}/>
          </div>
          <div className='vote-btns'>
              <img src='../images/thumbs-up.png'/>
              <img src='../../images/thumps-down.svg'/>
          </div>
        </div>

        <div className='bottom'>
          <h1 className="food-title">{food.title}</h1>
          <a href={food.source_url}>Recipe</a>
        </div>
      </div>
    );
  }
}

export default Card;