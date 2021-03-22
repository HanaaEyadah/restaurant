import { DeleteButtonStyled } from "../styles";
import dishStore from "../dishStore"

const ViewDishes = ({cuisineId}) => {
  return (
    <DeleteButtonStyled onClick={() => dishStore.dishes = dishStore.dishes.filter((dish) => dish.cuisineId === cuisineId)}>
      View Dishes
    </DeleteButtonStyled>
  );
};

export default ViewDishes;