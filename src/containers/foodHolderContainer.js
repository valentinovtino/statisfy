import { connect } from "react-redux";
import FoodHolder from '../components/foodHolder/foodHolder';
import { withRouter } from 'react-router';
import { addToFavorites } from '../actions/actions';

export const mapStateToProps = (state) => ({
  food: state.food
});

export const mapDispatchToProps = dispatch => ({
  addToFavorites: (food) => dispatch(addToFavorites(food))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FoodHolder));