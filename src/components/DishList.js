import { ListWrapper } from "../styles";
import DishItem from "./DishItem";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import dishStore from "../dishStore"
import { observer } from "mobx-react";
import AddButton from "../Buttons/AddButton";

const DishList = () => {
  const [query, setQuery] = useState("");

  const dishList = dishStore.dishes
    .filter((dish) =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((dish) => (
      <DishItem
        dish={dish}
        id={dish.id}
      />
    ));
  return (
    <div>
      {/* <SearchBar setQuery={setQuery} /> */}
      <ListWrapper>{dishList}</ListWrapper>
      <AddButton />
    </div>
  );
};

export default observer(DishList);