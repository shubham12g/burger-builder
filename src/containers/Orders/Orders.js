import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    fetchedOrders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(res.data);
        this.setState({ loading: false, fetchedOrders: fetchedOrders });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.fetchedOrders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
