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
  const { cuisineId } = useParams();
  if (dishStore.loading)
    return (
      <PacmanLoader
        color={"grey"}
        size={75}
        css={{ width: "260px !important", height: "130px !important" }}
      />
    );

  const dishList = dishStore.dishes
    .filter(
      (dish) =>
        // dish.name.toLowerCase().includes(query.toLowerCase()) ||
        dish.cuisine.id === +cuisineId || !cuisineId
    )
    .map((dish) => <DishItem dish={dish} />);
  return (
    <div>
    <AddButton />
      <ListWrapper>{dishList}</ListWrapper>
    </div>
  );
};

export default observer(DishList);
