import DeleteButton from "../Buttons/DeleteButton";
// import { Link } from "react-router-dom";
import { DishWrapper } from "../styles";
import { observer } from "mobx-react";

const DishItem = ({dish, id} ) => {
  return (
    <DishWrapper>
      {/* <Link to={`/dishes/${dish}`}>
        <img alt={dish.name} src={dish.image} />
      </Link> */}
      <p>{dish.name}</p>
      <p className="product-price">{dish.price} KD</p>
      <DeleteButton dishId={dish.id} id={id}  />
     <h1>{console.log(dish.id)}</h1>
    </DishWrapper>
  );
};

export default observer(DishItem);




