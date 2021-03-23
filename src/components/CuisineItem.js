import { DishWrapper, CuisineImage } from "../styles";
import { observer } from "mobx-react";
import ViewDishes from "../Buttons/ViewDishes";


const CuisineItem = ({ cuisine }) => {
  return (
    <DishWrapper>
      {/* <Link to={`/cuisines/${cuisine.id}`}> */}
      <img alt={cuisine.name} src={cuisine.img} />
      {/* </Link> */}
      <p><b>{cuisine.name}</b></p>
     
      <h1>
        {console.log(`cuisine id ${cuisine.id}, image URL ${cuisine.img}`)}
      </h1>
      {/* <img src={cuisine.img} /> */}
      <ViewDishes cuisineId={cuisine.id} onClick />
    </DishWrapper>
  );
};

export default observer(CuisineItem);
