import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(){
        super();
        this.state={
            "cartItems": []
        }
    }

    componentWillMount(){
       this.setState({cartItems: this.props.cart})
    }

    DeleteItem(i){
        const items = this.state.cartItems;
        items.splice(i, 1)
        this.setState({cartItems: items})
    }

    render() {
        // console.log("?>>>",this.state.cartItems);
        return (
            <div className="container cartItems">
               { this.state.cartItems && this.state.cartItems.length > 0 && <div className="col-md-8 panel panel-primary">
                    <div className="panel-heading text-center">Shopping Cart Items</div>
                    <div className="panel-body">
                        {this.state.cartItems && this.state.cartItems.length > 0 && this.state.cartItems.map ((item,i) => {
                            return(
                                <div className="card card-body" key={i}>
                                    <span>{item.name}</span>
                                    <span>{item.price}</span>
                                    <span className="text-danger" style={{"cursor": "pointer"}} onClick={()=> this.DeleteItem(i)}>Delete</span>
                                </div> 
                            )}
                        )}
                    </div>
                </div>}
            </div>
        )
    }
}
