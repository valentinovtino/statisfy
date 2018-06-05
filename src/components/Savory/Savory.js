import React, { Component } from 'react';
import FoodHolder from '../foodHolder/foodHolder';
import { withRouter } from 'react-router';

const Savory = () => {

  return (
    <div>   
      {FoodHolder}
    </div>
  )
}

export default withRouter(Savory);