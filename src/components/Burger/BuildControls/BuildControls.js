import React, { Component } from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

class BuildControls extends Component {
  controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
  ];

  render() {
    return (
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>{this.props.price.toFixed(2)}</strong>
        </p>
        <p>Choose your ingredients!</p>
        {this.controls.map((ctrl) => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            clickedMore={() => this.props.ingredientAdded(ctrl.type)}
            clickedLess={() => this.props.ingredientRemoved(ctrl.type)}
            disabled={this.props.disabled[ctrl.type]}
          />
        ))}
        <button
          className={classes.OrderButton}
          disabled={!this.props.purchasable}
          onClick={this.props.ordered}
        >
          Order Now
        </button>
      </div>
    );
  }
}

export default BuildControls;
