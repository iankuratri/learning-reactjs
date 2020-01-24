import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",

    // for rendering tags
    tags: ["tag1", "tag2", "tag3"]
  };

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

  handleIncrement = product => {
    console.log("product:", product);

    // console.log("Increment Clicked", this.state.count);
    // to change the state (to make react js aware of state changes)
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      // wrap the code inside a div or React.Fragment
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        {/* or oyu can use inline styles like that style={ {fontSize: 50, fontWeight: "bold"} } */}
        {/* style={this.styles} */}

        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          // onClick={this.handleIncrement}
          // for passing event or argument to a function
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
