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
        <h1>Name: {food.title}</h1>
      </div>
    );
  }
}

export default Card;