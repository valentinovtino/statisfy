import { connect } from 'react-redux';
import { getFood } from '../actions/actions';
import App from '../components/app/App';

export const mapDispatchToProps = (dispatch) => ({
  storeFood : (food) => dispatch(getFood(food))
});

export default connect(null, mapDispatchToProps)(App);