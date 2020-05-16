// import React, { Component } from 'react'

// class Cart extends Component {
//     render() {
//         // const {cartItems} =  this.props;
//         return (
//         //     <div className="alert alert-info">
//         //         {cartItems.length === 0 ? "Cart is Empty" : <div> you have {cartItems.lenght}}
//         //         product in the cart.{cartItems.length > 0 &&
//         //         <div>
//         //             <ul>
//         //                 {cartItems.map(item =>
//         //                 <li>
//         //                     <b>{item.title}</b>
//         //                     REMOVE {item.count}
//         //                     <button className="btn btn-primary"
//         //                     onClick={(e) => this.handleRemoveFromCart(e,item)}>Remove
//         //                     </button>
//         //                 </li>
//         //                 )}
//         //             </ul>
//         //             </div>
//         //         }
//         //     </div>
//         //     </div>
//         // )  )
//         ) 
//     }
// }
// export default Cart;

import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                
                {this.props.cart && this.props.cart.length > 0 && this.props.cart.map ((item,index) => 

                {
                    console.log("vv" , item)
                    return(
                        <div>
                            <h1>{item.name}</h1>
                           </div> 
                    )
                }
                )}
            </div>
        )
    }
}
