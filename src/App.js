import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
// import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ProductList/>
        </React.Fragment>
    )
  }
}
export default App;