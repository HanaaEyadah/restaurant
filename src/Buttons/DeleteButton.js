import { DeleteButtonStyled } from "../styles";
import dishStore from "../dishStore"

const DeleteButton = ({dishId}) => {
  return (
    <DeleteButtonStyled onClick={() => dishStore.deleteDish(dishId)}>
      Delete
    </DeleteButtonStyled>
  );
};

export default DeleteButton;