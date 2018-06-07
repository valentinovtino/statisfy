import React, {Component} from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { connect } from "react-redux";
import { addToFavorites, removeFavorite } from '../../actions/actions';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ''
    };
  }


  render() {
    const { food, fave, location } = this.props;
    
    const button = location.pathname === '/fave' ? <button className='like-btn'onClick={() => this.props.removeFavorite(this.props.food)}>REMOVE</button> :
    <button className='like-btn'onClick={() => this.props.addToFavorites(this.props.food)}>FAVE</button>;

    return (
      <div className="card" id={food.recipe_id}>
        <div className="top">
          <div className='food-container'>
            <img className="food-img" src={food.image_url}/>
          </div>
          <div className='vote-btns'>
            <img className='vote' src='https://cdn3.iconfinder.com/data/icons/pixo-icons-2/56/1-29-512.png'/>
            {button}
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

Card.propTypes = {
  addToFavorites: PropTypes.func,
  removeFavorite: PropTypes.func,
  food: PropTypes.Object,
  fave: PropTypes.func,
  allState: PropTypes.Object
};

export const mapStateToProps = (state) => ({
  category: state.category
});

export const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (food) => dispatch(addToFavorites(food)),
  removeFavorite: (food, title) => dispatch(removeFavorite(food, title))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));

