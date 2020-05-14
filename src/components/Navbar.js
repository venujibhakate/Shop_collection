import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

class Navbar extends Component {
  render() {
  return (
    <div>
      <AppBar position="static">
          <Typography variant="h6" color="inherit" style={{textAlign:'center'}}>
            Products
          </Typography>
      </AppBar>
    </div>
  );
}
}
export default Navbar;
