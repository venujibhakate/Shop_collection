import React from "react";
// import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography";
// import {Link} from 'react-router-dom';
// import {Grid} from '@material-ui/core'
// import { withStyles } from '@material-ui/core/styles';


function Product(props) {
  const { product } = props;
  return (
    <div className="col-12">
      <div className="row mt-4">
        {product.map((products, index) => (
          <div className="col-4 mt-3" key={index}>
            <div className="card">
              <img src={products.images} className="card-img-top" alt="image" />
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
