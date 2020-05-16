import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Cart from "./Cart";


class Product extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  handleAddToCart(e, item) {
    // console.log(item)
    const cart = this.state.cart;
    cart.push(item);
    this.setState({ cart: cart });
  }

  render() {
    console.log(this.state.cart);
    const { product } = this.props;
    const dummyImg =
      "https://image.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg";
    return (
      <div>
        <Cart cart={this.state.cart} />

        <div className="col-12">
          {/* <Cart cart={this.state.cart} /> */}
          <div className="row mt-4">
            {product.map((products, index) => (
              // console.log(products)
              <div className="col-4 mt-3" key={index}>
                <div className="card">

                    <img
                      src={dummyImg}
                      className="card-img-top dummyImg"
                      alt="image"
                    />
                 
                  <Typography style={{ textAlign: "center" }}>
                    {products.name}
                  </Typography>
                  <div className="card-body">
                    <Typography>${products.price}</Typography>
                    {/* <Typography>{products.customattributes}</Typography> */}

                    <button
                      className="btn btn-primary"
                      onClick={(e) => this.handleAddToCart(e, products)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* 
        <div className="col-12">
          <div className="row mt-4">
            {details.map((detail) => (
              <div>
                <Link
                  to={{
                    pathname: "/details",
                    state: {
                      details: detail.value,
                    },
                  }}
                >
                  <Button variant="contained" color="primary">
                    Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    );
  }
}
export default Product;
