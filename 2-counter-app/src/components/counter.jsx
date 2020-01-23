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

  renderTages() {
    if (!this.state.tags.length) return <p>There are not tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      // wrap the code inside a div or React.Fragment
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        {/* or oyu can use inline styles like that style={ {fontSize: 50, fontWeight: "bold"} } */}
        {/* style={this.styles} */}

        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>

        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}

        {!this.state.tags.length && "Please create a new tag!"}
        {this.renderTages()}
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
