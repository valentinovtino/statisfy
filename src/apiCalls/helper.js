export const cleanData = (foodData) => {
  return foodData.map((food) => {
    return {
      title: food.title, 
      img: food.image_url, 
      recipe: food.source_url, 
      id: food.recipe_id
    };
  });
};
