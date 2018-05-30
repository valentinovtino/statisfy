export const getFood = (food) => {
  return {
    type: 'GET_FOOD',
    food: food
  };
};