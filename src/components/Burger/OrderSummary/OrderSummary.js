import React, { Component, Fragment } from "react";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] DidUpdate");
  }

  render() {
    const summary = Object.keys(this.props.ingredients).map((igKeys) => {
      return (
        <li key={igKeys}>
          <span style={{ textTransform: "capitalize" }}>{igKeys}: </span>
          {this.props.ingredients[igKeys]}
        </li>
      );
    });

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul>{summary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
