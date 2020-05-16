import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Cart from './Cart'
// import Navbar from './Navbar'    

class Product extends Component {
  constructor(){
    super();
    this.state = {
      cart:[],
      products: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://stageapi.ihaworld.com/v1/products"
    );
    console.log(response);
    this.setState({ products: response.data.list });
  }

    handleAddToCart(e,item){
        const cart = this.state.cart;
        cart.push(item)
        this.setState({cart: cart});
    }

    showDes(product){
      console.log(product);
      
      var variant = product["variants"]
      if (variant.length == 2){
          var arr = variant[1]["map"]
          const sizeArr = []
          for (var i of arr){
              sizeArr.push(i["value"])            
          }
          console.log("sizes ",sizeArr);
      }else{
          const sizeArr = []
          var arr = product["variants"][0]["map"]
          for (var i of arr){
              sizeArr.push(i["value"])            
          }
          console.log("sizes  " ,sizeArr);
      }
  }
    

render() {
  
  const dummyImg = "https://image.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg"
  return (
    <div>
    { <Cart cart={this.state.cart} /> }
    <div className="col-12">
        <div className="row mt-4">
            { this.state.products && this.state.products.length > 0 && this.state.products.map((product, index) => (
                <div className="col-4 mt-3" key={index}>
                    <div className="card">
                        <img src={dummyImg} className="card-img-top dummyImg" alt="image"/>
                        <div className="card-body">
                            <Typography >{product.name}</Typography>
                            <Typography>${product.price}</Typography>
                            
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary margin-left: 40%;"
                                onClick={(e) => this.handleAddToCart(e,product)}>
                                Add to Cart
                            </button>
                            <button className="btn btn-primary btn-md" style= {{"marginLeft":" 40%"}}
                                onClick={(e) => this.showDes(product)}>
                                Description
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

    </div>
  );
}
}
export default Product;