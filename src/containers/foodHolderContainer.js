import { connect } from "react-redux";
import FoodHolder from '../components/foodHolder/foodHolder';
import { withRouter } from 'react-router';
import { addToFavorites, removeFavorite } from '../actions/actions';

export const mapStateToProps = (state) => ({
  food: state.food,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  addToFavorites: (food) => dispatch(addToFavorites(food)),
  removeFavorite: (food, title) => dispatch(removeFavorite(food, title))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodHolder));