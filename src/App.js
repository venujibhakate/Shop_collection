import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import Product from "./components/Product";
import TitleImage from "../src/components/TitleImage.jpg";

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
          <img src={TitleImage} style={{ height: "200px",width:'100%' , marginTop:'2%'}} alt="img" />
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
