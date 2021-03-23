import { ListWrapper } from "../styles";
import DishItem from "./DishItem";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import dishStore from "../dishStore";
import { observer } from "mobx-react";
import AddButton from "../Buttons/AddButton";
import { useParams } from "react-router";
import PacmanLoader from "react-spinners/PacmanLoader";

const DishList = () => {
  const [query, setQuery] = useState("");
  // const [cuisineId, setCuisineId] = useState(2);
  const [cuisineName, setCuisineName] = useState("");
  const { cuisineId } = useParams();
  if (dishStore.loading) return <PacmanLoader color={"blue"} size={150} />;

  const dishList = dishStore.dishes
    // .filter((dish) => dish.name.toLowerCase().includes(query.toLowerCase()))
    // // const dishList = dishStore.dishes
    // // .filter((dish) =>
    // // dish.cuisineId === cuisineId )
    // .map((dish) => <DishItem dish={dish} id={dish.id} />);

    .filter(
      (dish) =>
        // dish.name.toLowerCase().includes(query.toLowerCase()) ||
        dish.cuisine.id === +cuisineId || !cuisineId

      // || dish.cuisine.name.toLowerCase().includes(cuisineName.toLowerCase())
    )
    .map((dish) => <DishItem dish={dish} />);
  return (
    <div>
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{dishList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(DishList);
