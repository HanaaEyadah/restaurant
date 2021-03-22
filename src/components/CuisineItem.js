import { DishWrapper } from "../styles";
import { observer } from "mobx-react";
import ViewDishes from "../Buttons/ViewDishes";

const CuisineItem = ({cuisine, id} ) => {
  return (
    <DishWrapper>
      <p>{cuisine.name}</p>
      <p>{cuisine.description}</p>
     <h1>{console.log(cuisine.id)}</h1>
     <ViewDishes cuisineId={cuisine.id}/>
    </DishWrapper>
  );
};

export default observer(CuisineItem);




