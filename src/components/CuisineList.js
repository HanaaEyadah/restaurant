import { ListWrapper } from "../styles";
import CuisineItem from "./CuisineItem";
import DishItem from "./DishItem";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import dishStore from "../dishStore"
import { observer } from "mobx-react";
import cuisines from "../cuisines";


const CuisineList = () => {
  const [query, setQuery] = useState("");
  const cuisineList = cuisines
    .filter((cuisine) =>
      cuisine.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((cuisine) => (
      <CuisineItem
        cuisine={cuisine}
        id={cuisine.id}
      />
    ));
    const dishList = dishStore.dishes
    .filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    )
    // const dishList = dishStore.dishes
    // .filter((dish) =>
    // dish.cuisineId === cuisineId )
    .map((dish) => (
      <DishItem
        dish={dish}
        id={dish.id}
      />
    ));

  return (
    <div>
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{cuisineList}</ListWrapper>
    </div>
  );
};

export default observer(CuisineList);