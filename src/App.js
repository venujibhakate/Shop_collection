import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Product from "./components/Product";
import TitleImage from "./components/TitleImage.jpg";

class App extends Component {
  state = {
    products: [],
  };
  async componentDidMount() {
    const response = await axios.get(
      "https://stageapi.ihaworld.com/v1/products",
    
    );
    console.log(response);
    this.setState({ products: response.data.list });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>Ecommerce Shopping Cart Application</h1>
          <hr />
          <img src={TitleImage.jpg} style={{ height: "200px" }} alt="img" />
          <div className="row">
            <Product product={this.state.products} />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
