import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import ProductDetail from "./components/ProductDetails";
import DishList from "./components/DishList";
import CuisineList from "./components/CuisineList";
import DishDetails from "./components/DishDetails";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
import CuisineItem from "./components/CuisineItem";
const theme = {
  light: {
    mainColor: "#00264d", // main font color
    backgroundColor: "#e6f2ff", // main background color
    blue: "#00264d",
  },
  dark: {
    mainColor: "#e6f2ff", // main font color
    backgroundColor: "#00264d", // main background color
    purple: "#e6f2ff",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={["/dishes", "/cuisines/:cuisineId"]}>
          <DishList />
        </Route>
        <Route path="/cuisines">
          <CuisineList />
        </Route>
        {/* <Route path="/dishes/:dishId">
          <DishDetails  />
        </Route> */}
        {/* <Route path="/cuisines/:cuisineSlug">
          <CuisineItem  />
        </Route>  */}
      </Switch>
    </ThemeProvider>
  );
}

export default App;
