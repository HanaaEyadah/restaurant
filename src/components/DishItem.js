import DeleteButton from "../Buttons/DeleteButton";
// import { Link } from "react-router-dom";
import { DishWrapper } from "../styles";
import { observer } from "mobx-react";

const DishItem = ({ dish }) => {
  return (
    <DishWrapper>
      {/* <Link to={`/dishes/${dish}`}>
        <img alt={dish.name} src={dish.image} />
      </Link> */}
      <p>{dish.name}</p>
      <p className="product-price">{dish.price} KD</p>
      <DeleteButton dishId={dish.id} />
      <h1>
        {console.log(`dish ID: ${dish.id}, cuisine name: ${dish.cuisine.name}`)}
      </h1>
    </DishWrapper>
  );
};

export default observer(DishItem);
