// import { action, makeObservable, observable } from "mobx";
import { makeAutoObservable } from "mobx";
import axios from "axios";

class DishStore {
  dishes = [];
  cuisines = [];
  loading = true;
  loadingCuisines = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchDishes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/dishes");
      this.dishes = res.data;
      this.loading = false;
      console.log(res.data);
    } catch (error) {
      console.error("DishStore -> fetchDishes -> error", error);
    }
  };

  fetchCuisines = async () => {
    try {
      const res = await axios.get("http://localhost:8000/cuisines");
      this.cuisines = res.data;
      this.loadingCuisines = false;
      console.log(res.data);
    } catch (error) {
      console.error("DishStore -> fetchCuisines -> error", error);
    }
  };

  createDish = async (newDish) => {
    try {
      const res = await axios.post("http://localhost:8000/dishes", newDish);
      res.data.cuisine = { id: newDish.cuisineId };
      this.dishes.push(res.data);
      console.log("DishStore -> createDish -> this.dishes", this.dishes);
    } catch (error) {
      console.error("DishStore -> createDish -> error", error);
    }
  };

  deleteDish = async (dishId) => {
    try {
      await axios.delete(`http://localhost:8000/dishes/${dishId}`);
      this.dishes = this.dishes.filter((dish) => dish.id !== dishId);
    } catch (error) {
      console.error("DishStore -> deleteDish -> error", error);
    }
  };
}

const dishStore = new DishStore();
dishStore.fetchDishes();
dishStore.fetchCuisines();

export default dishStore;
