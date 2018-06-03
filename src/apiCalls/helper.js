export const cleanData = (data) => {
  return data.map((food) => {
    return {
      title: food.title, 
      img: food.image_url, 
      recipe: food.source_url, 
      id: food.recipe_id
    };
  });
};
