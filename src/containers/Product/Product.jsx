import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "../CardProduct/CardProduct";

export class Product extends Component {
  state = {
    order: 0,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://docplayer.info/docs-images/114/211610078/images/1-0.jpg" alt="" />
          </div>
          <div className="troley">
            <img src="https://cdn-icons-png.flaticon.com/512/3770/3770807.png" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
