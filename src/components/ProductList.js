import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios';

class ProductList extends Component {
    state = {
        Products:[]
    }
    async componentDidMount(){
        const response = await axios.get('https://stageapi.ihaworld.com/v1/products', {
            
        })
        console.log(response)
        // this.setState({Products:response.data.list});

    }
    render() {
        return (
            
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <h1>Ecommerce Shopping Cart Application</h1>
                        <div className="row">

                        </div>
                    </div>
                </div>
                <Product product={this.state.Products}/>
            </React.Fragment>
        )
    }
}
export default ProductList ;