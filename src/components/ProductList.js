import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import TitleImage from "./TitleImage.jpg";
import Filter from "./Filter";
import Product from "./Product";
// import Cart from "./Cart";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      details:[],
      cartItems:[]
    };
    this.handleChangeSort = this.handleChangeSort.bind(this);
    // this.handleAddToCart = this.handleAddToCart.bind(this);
    // this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
   
  }
  async componentDidMount() {
    const response = await axios.get(
      "https://stageapi.ihaworld.com/v1/products"
    );
    console.log(response);
    this.setState({ products: response.data.list, details:response.data.customattributes});
  }
  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }
  listProducts() {
    this.setState((state) => {
      if (state.sort !== "") {
        state.products.sort((a, b) =>
          state.sort === "lowest"
            ? a.price < b.price
              ? 1
              : -1
            : a.price > b.price
            ? 1
            : -1
        );
      } else {
        state.products.sort((a, b) => (a.id < b.id ? 1 : -1));
      }
      return { products: state.products };
    });
  }
  // handleAddToCart(e,product){
  //   this.setState(state => {
  //     const cartItems = state.cartItems;
  //     let productAlreadyInCart = false;
  //     cartItems.forEach(items => {
  //       if(items.id === product.id){
  //         productAlreadyInCart = true;
  //         items.count++;
  //       }
  //     });
  //     if (!productAlreadyInCart){
  //       cartItems.push({...product,count:1});
  //     }
  //     localStorage.setItem("cartItem" , JSON.stringify(cartItems));
  //     return cartItems;
  //   })
  // }
//   handleAddToCart(item){
//     const cart = this.state.cart;
//     cart.push(item)
//     this.setState({cart: cart})
// }
  // handleRemoveFromCart(e,item){
  //   this.setState(state=>{
  //     const cartItems = state.cartItems.filter(elm => elm.id !== item.id)
  //     localStorage.setItem("cartItem" , cartItems);
  //     return cartItems;
  //   })
  // }
  render() {
    return (
        <div className="container">
        
          <img
            src={TitleImage}
            style={{ height: "200px", width: "100%", marginTop: "2%" }}
            alt="img"
          />
          <hr />
          <div className="row">
            <Filter
              size={this.state.size} 
              sort={this.state.sort}
              handleChangeSort={this.handleChangeSort}
              count={this.state.products.length}
            />
            <hr />
            <Product product={this.state.products} details={this.state.details}handleAddToCard={this.handleAddToCart}/>
            </div>
            <div className="col-md-4">
              {/* <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}/> */}
            </div>
          </div>
    );
  }
}

export default ProductList;
