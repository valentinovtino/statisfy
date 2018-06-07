import { connect } from 'react-redux';
import { getFood, storeCategory } from '../actions/actions';
import App from '../components/app/App';
import { withRouter } from 'react-router';

export const mapDispatchToProps = (dispatch) => ({
  storeFood: (food, category) => dispatch(getFood(food, category)),
  storeCategory: (category) => dispatch(storeCategory(category))
});

export const mapStateToProps = (state) => ({
  food: state.food,
  favorites: state.favorites,
  category: state.category
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));