import { connect } from 'react-redux';
import { getFood } from '../actions/actions';
import App from '../components/app/App';
import { withRouter } from 'react-router';

export const mapDispatchToProps = (dispatch) => ({
  storeFood: (food) => dispatch(getFood(food))
});

export const mapStateToProps = (state) => ({
  food: state.food
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));