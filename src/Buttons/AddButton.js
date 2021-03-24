import React, { useState } from "react";
import DishModal from "../Modals/DishModal";
import { CreateButtonStyled } from "../styles";

function AddButton() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <CreateButtonStyled onClick={openModal}>Add Dish</CreateButtonStyled>
      <DishModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default AddButton;
