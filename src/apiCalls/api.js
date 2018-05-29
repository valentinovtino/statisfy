export const getFoodData = async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 
}