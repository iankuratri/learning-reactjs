import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  // imageUrl: "https://picsum.photos/200",

  // for rendering tags
  // tags: ["tag1", "tag2", "tag3"]
  // };

  // styles = {
  //   fontSize: 50,
  //   fontWeight: "bold"
  // };

  // renderTages() {
  //   if (!this.state.tags.length) return <p>There are not tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // constructor() {
  // super();
  // // this is not allowed before super
  // // solution to bind event handlers to this
  // this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  // console.log("product:", product);
  // console.log("Increment Clicked", this.state.value);
  // to change the state (to make react js aware of state changes)
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    const { counter, onDelete, onIncrement } = this.props;

    // console.log("counter", counter);

    return (
      // wrap the code inside a div or React.Fragment
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        {/* or oyu can use inline styles like that style={ {fontSize: 50, fontWeight: "bold"} } */}
        {/* style={this.styles} */}

        {/* Show children prop */}
        {/* {this.props.children} */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          // onClick={this.handleIncrement}
          // for passing event or argument to a function
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>

        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* 
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> 

        {!this.state.tags.length && "Please create a new tag!"}
        {this.renderTages()}
        */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
