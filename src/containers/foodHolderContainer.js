import { connect } from "react-redux";
import FoodHolder from '../components/foodHolder/foodHolder';
import { withRouter } from 'react-router';

export const mapStateToProps = (state) => ({
  food: state.food
});

export default withRouter(connect(mapStateToProps)(FoodHolder));