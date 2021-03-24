import { ListWrapper } from "../styles";
import CuisineItem from "./CuisineItem";
import DishItem from "./DishItem";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import dishStore from "../dishStore";
import { observer } from "mobx-react";
import PacmanLoader from "react-spinners/PacmanLoader";

const CuisineList = () => {
  const [query, setQuery] = useState("");
  //TODO: add loading
  if (dishStore.loadingCuisines)
    return (
      <PacmanLoader
        color={"grey"}
        size={75}
        css={{ width: "260px !important", height: "130px !important" }}
      />
    );
  const cuisineList = dishStore.cuisines
    .filter((cuisine) =>
      cuisine.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((cuisine) => <CuisineItem cuisine={cuisine} />);
  const dishList = dishStore.dishes
    .filter((dish) => dish.name.toLowerCase().includes(query.toLowerCase()))
    .map((dish) => <DishItem dish={dish} id={dish.id} />);

  return (
    <div>
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{cuisineList}</ListWrapper>
    </div>
  );
};

export default observer(CuisineList);
