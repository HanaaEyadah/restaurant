import React from "react";
import Modal from "react-modal";
import dishStore from "../dishStore";
import { useState } from "react";
import { CreateButtonStyled } from "../styles";

const DishModal = ({ isOpen, closeModal, createDish }) => {
  const [dish, setDish] = useState({
    name: "",
    price: 0,
    description: "",
    cuisineId: 1,
    // image: "",
  });
  const handleChange = (event) => {
    setDish({ ...dish, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dishStore.createDish(dish);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Dish Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              name="price"
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="img"
            onChange={handleChange}
          />
        </div>
        <div className="col-6">
          <label for="cuisines">Select a cuisine</label>
          <select
            name="cuisineId"
            onChange={handleChange}
            className="form-control"
            id="cuisines"
          >
            <option value="1">Italian</option>
            <option value="2">American</option>
            <option value="3">Lebanese</option>
            <option value="4">Indian</option>
          </select>
        </div>
        <CreateButtonStyled className="btn float-right">
          Create
        </CreateButtonStyled>
      </form>
    </Modal>
    //check react modal
  );
};

export default DishModal;
