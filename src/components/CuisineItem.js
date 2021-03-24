import { DishWrapper, CuisineImage } from "../styles";
import { observer } from "mobx-react";
import ViewDishes from "../Buttons/ViewDishes";
import { Link } from "react-router-dom";

const CuisineItem = ({ cuisine }) => {
  return (
    <DishWrapper>
      <Link to={`/cuisines/${cuisine.id}`}>
        <img alt={cuisine.name} src={cuisine.img} />
      </Link>
      <p>
        <b>{cuisine.name}</b>
      </p>
      <ViewDishes cuisineId={cuisine.id} onClick />
    </DishWrapper>
  );
};

export default observer(CuisineItem);
