 import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [option, setOption] = useState("ALL");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const updatedFoods = [ ...foods, newFood]
    setFoods(updatedFoods);
  }

  function updateFoodHeat(id){
    
    const heat = foods.map(food => {
     return food.id === id ? { ...food, heatLevel: food.heatLevel+ 1 } : food
    })
    console.log(heat)
    setFoods(heat)
  }

  function handleSelection(event){
    let value = event.target.value
    setOption(value)
  }
  
  const filteredFoods = foods.filter(food => option === 'ALL' ? true : food.cuisine === option)
  console.log(filteredFoods)

  const foodList = filteredFoods.map((food) => (
    
    <li key={food.id} onClick={()=>updateFoodHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleSelection}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
