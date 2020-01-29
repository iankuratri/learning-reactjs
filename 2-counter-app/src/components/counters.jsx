import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm mt-3 ml-2 mb-2"
        >
          Reset
        </button>

        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter)}
          >
            {/* children prop */}
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
