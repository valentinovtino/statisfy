import React, { Component } from 'react';
import FoodHolder from '../foodHolder/foodHolder';
import { withRouter } from 'react-router';

const Savory = () => {

  return (
    <div>
        <h1>SAVORY</h1>
      {FoodHolder}
    </div>
  )
}

export default withRouter(Savory);