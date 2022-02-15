import React, { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { message } = this.props;

    return (
      <div>
        <button onClick={this.handleDecrement}>Decrement</button>
        {message} {count}
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
