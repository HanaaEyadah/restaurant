import { DeleteButtonStyled } from "../styles";
import dishStore from "../dishStore";
import { Link } from "react-router-dom";

// const ViewDishes = ({cuisineId}) => {
//   return (
//     <DeleteButtonStyled onClick={() => dishStore.dishes = dishStore.dishes.filter((dish) => dish.cuisineId === cuisineId)}>
//       View Dishes
//     </DeleteButtonStyled>
//   );
// };

const ViewDishes = ({ cuisineId }) => {
  return (
    <Link to={`/cuisines/${cuisineId}`}>
      <DeleteButtonStyled> View Dishes </DeleteButtonStyled>{" "}
    </Link>
  );
};

export default ViewDishes;
