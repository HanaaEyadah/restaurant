import { ListWrapper } from "../styles";
import CuisineItem from "./CuisineItem";
// import SearchBar from "./SearchBar";
import { useState } from "react";
import dishStore from "../dishStore"
import { observer } from "mobx-react";


const CuisineList = () => {
  const [query, setQuery] = useState("");

  const cuisineList = dishStore.cuisines
    .filter((cuisine) =>
      cuisine.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((cuisine) => (
      <CuisineItem
        cuisine={cuisine}
        id={cuisine.id}
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