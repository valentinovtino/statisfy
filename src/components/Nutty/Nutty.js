import React, { Component } from 'react';
import FoodHolder from '../foodHolder/foodHolder';
import { withRouter } from 'react-router';

const Nutty = () => {

  return (
    <div>
      {FoodHolder}
    </div>
  );
};

export default withRouter(Nutty);