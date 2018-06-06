import React from 'react';
import FoodHolder from '../foodHolder/foodHolder';
import { withRouter } from 'react-router';

const Sweet = () => {

  return (
    <div>
      {FoodHolder}
    </div>
  );
};

export default withRouter(Sweet);