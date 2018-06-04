import React, {Component} from 'react';
import { connect } from 'react-redux';

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
      <div>
        <img src={food.image_url}/>
        <h1>Name: {food.title}</h1>
        <p> Recipe: {food.source_url}</p>
      </div>
    );
  }
}

export default Card;