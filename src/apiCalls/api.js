export const getFoodData = async (url) => {
  try {
    const response = await fetch(url);
    const foodData = await response.json(); 
    
    return foodData;
  } catch (error) {
    throw new Error(error);
  }
};