import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar />
          <Product />
      </React.Fragment>
    )
  }
}
export default App;