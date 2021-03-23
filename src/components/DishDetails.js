import { Link, Redirect, useParams } from "react-router-dom";
import DeleteButton from "../Buttons/DeleteButton";
import { DetailWrapper } from "../styles";
import dishStore from "../dishStore"
import { observer } from "mobx-react";

const DishDetails = () => {
  const { dishId } = useParams();
  const dish = dishStore.dishes.find((dish) => dish.id === dishId);

  if (!dish) return <Redirect to="/dishes" />;

  return (
    <DetailWrapper>
      <Link to="/dishes">Back to Dishes</Link>
       {/* <Link to={`/dishes/${dishId}`}> {dish.name}</Link> */}
      <h1>{dish.name}</h1>
      {/* <img src={dish.image} alt={dish.name} /> */}
      <p>{dish.description}</p>
      <p>{dish.price} KD</p>
      <DeleteButton dishId={dish.id} />
    </DetailWrapper>
  );
};

export default observer(DishDetails);




