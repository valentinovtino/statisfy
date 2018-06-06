import React, { Component } from 'react';
import FoodHolder from '../foodHolder/foodHolder';
import { withRouter } from 'react-router';

const Favorites = () => {

  return (
    <div>
      {FoodHolder}
    </div>
  );
};

export default withRouter(Favorites);