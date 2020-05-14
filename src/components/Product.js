import React from "react";
import Typography from "@material-ui/core/Typography";
// import util from'../util'


function Product(props) {
  const  {product}  = props;
  // const dummyImg = "https://image.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-600w-1417347668.jpg"
  const dummyImg = "https://image.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg"
  
  return (
    <div className="col-12">
      <div className="row mt-4">
        {product.map((products, index) => (
          <div className="col-4 mt-3" key={index}>
            <div className="card">
              <img src={dummyImg} className="card-img-top dummyImg" alt="image" />
              <div className="card-body">
                <Typography>{products.name}</Typography>
                <Typography>${products.price}</Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;