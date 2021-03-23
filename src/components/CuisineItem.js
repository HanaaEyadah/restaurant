import { DishWrapper, CuisineImage} from "../styles";
import { observer } from "mobx-react";
import ViewDishes from "../Buttons/ViewDishes";
import cuisines from "../cuisines";
import { Link } from "react-router-dom";

const CuisineItem = ({cuisine} ) => {
  return (
    <DishWrapper>
        <Link to={`/cuisines/${cuisine.id}`}>
        <CuisineImage alt={cuisine.name} src={cuisine.image} />
      </Link>
      <p>{cuisine.name}</p>
      <p>{cuisine.description}</p>
     <h1>{console.log(cuisine.id)}</h1>
     <ViewDishes cuisineId={cuisine.id}/>
    </DishWrapper>
  );
};

export default observer(CuisineItem);




