import React, { Component, Fragment } from "react";
// import "../Product/Product.css";

export class CardProduct extends Component {
  state = {
    order: 0,
  };

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
    );
  };
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/65228fe9-bd3e-4ede-b4de-3c3792ef5800"
            alt="product image"
          />
        </div>
        <p className="product-title">Ayam Utuh Frozen 0.6 - 0.7 Kg [1 Ekor]</p>
        <p className="product-price">Rp 410,000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
