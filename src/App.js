import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
// import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import ProductDetail from "./components/ProductDetails";
import DishList from "./components/DishList";
import { ThemeProvider } from "styled-components";
import {Link} from "react-router-dom";
const theme = {
        light: {
          mainColor: "#320145", // main font color
          backgroundColor: "#bcaec2", // main background color
          purple: "#66068a",
        },
        dark: {
          mainColor: "#bcaec2", // main font color
          backgroundColor: "#320145", // main background color
          purple: "#66068a",
        },
      }

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme}/>
      <Switch>
        <Route exact path="/">
          <Link to = "/dishes">
          <h1> Hello</h1>
          </Link>
        </Route> 
        {/* <Route path="/products/:productSlug">
          <ProductDetail  />
        </Route>  */}
        <Route path="/dishes"> 
        <DishList/>
        </Route>
      </Switch>
    </ThemeProvider>
  ); 
}

export default App;










