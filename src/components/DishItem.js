import DeleteButton from "../Buttons/DeleteButton";
// import { Link } from "react-router-dom";
import { DishWrapper } from "../styles";
import { observer } from "mobx-react";

const DishItem = ({ dish }) => {
  return (
    <DishWrapper>
        <img alt={dish.name} src={dish.img} />
      <p><b>{dish.name}</b></p>
      <p>{dish.description}</p>
      <p className="product-price">{dish.price} KD</p>
      <DeleteButton dishId={dish.id} />
     
    </DishWrapper>
  );
};

export default observer(DishItem);
