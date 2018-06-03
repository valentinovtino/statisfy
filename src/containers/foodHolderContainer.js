import { connect } from "react-redux";
import FoodHolder from '../components/foodHolder/foodHolder';

export const mapStateToProps = (state) => ({
  food: state.food
});

export default connect(mapStateToProps)(FoodHolder);