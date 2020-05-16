import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ProductList from './Product'
import Cart from "./Cart";

class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      showCarts: false,
      // cart:[{name: "Pale Grey Kurta with Pants and Printed Slip Dress"}, {name: "Pale Grey Kurta with Pants and Printed Slip Dress"}]
    };
  }

  handleClick() {
    this.setState({ showCarts: !this.state.showCarts});
  }


  render() {
    console.log("cart ", this.props.cart)
    return (
      <div>
        <AppBar position="static">
            <div>
              <h4 variant="h6" color="inherit" style={{textAlign:"center"}}>
                Products
              </h4>
            </div>
            
        </AppBar>
        {this.state.showCarts ? <Cart cart={this.props.cart} />  : 
        <ProductList /> }
      </div>
    );
  }
}
export default Navbar;
