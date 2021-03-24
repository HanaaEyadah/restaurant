import { DeleteButtonStyled } from "../styles";
import { Link } from "react-router-dom";

const ViewDishes = ({ cuisineId }) => {
  return (
    <Link to={`/cuisines/${cuisineId}`}>
      <DeleteButtonStyled> View Dishes </DeleteButtonStyled>{" "}
    </Link>
  );
};

export default ViewDishes;
