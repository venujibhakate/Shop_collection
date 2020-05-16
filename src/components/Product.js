import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Cart from './Cart'
import Navbar from './Navbar'

class Product extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            products: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://stageapi.ihaworld.com/v1/products");
        this.setState({products: response.data.list});
    }

    handleAddToCart(e, item) {
        const cart = this.state.cart;
        cart.push(item)
        this.setState({cart: cart});
    }

    showDes(product) {
    
            var des = product["customattributes"][0]["value"]
            var test = des.split("&nbsp;")[0]
            var d = test.slice(0, 100)
            if (d.startsWith("<p>") == true){
                var text = d.split("<p>")[1]
                return text 
            }     
            return d 
    }

    render() {

        const dummyImg = "https://image.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg"
        return (
            <div> {
                < Cart cart = {
                    this.state.cart
                } />
            }
                <div className="col-12">
                    <div className="row mt-4">
                        {
                        this.state.products && this.state.products.length > 0 && this.state.products.map((product, index) => (
                            <div className="col-4 mt-3"
                                key={index}>
                                <div className="card">
                                    <img src={dummyImg}
                                        className="card-img-top dummyImg"
                                        alt="image"/>
                                    <div className="card-body">
                                        <span> <b>Name : </b> { product.name} </span><br/>
                                        <span> <b>Price : </b> { product.price} </span><br/>
                                        <span> <b>Description : </b> {this.showDes(product)}...  </span><br/>
                                    </div>
                                    <div className="card-footer">
                                        <div>
                                            <button className="btn btn-primary margin-left: 40%;"
                                                onClick={
                                                    (e) => this.handleAddToCart(e, product)
                                                }>
                                                Add to Cart
                                            </button>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        ))
                    } </div>
                </div>

            </div>
        );
    }
}
export default Product;
