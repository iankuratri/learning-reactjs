import React, { Component } from "react";

// stateless functional component
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        <span className="mr-3">Counter App</span>
        <span className="badge badge-pill badge-warning">{totalCounters}</span>
      </span>
    </nav>
  );
};

export default Navbar;

// class component

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <span className="navbar-brand mb-0 h1">
//           <span className="mr-3">Counter App</span>
//           <span className="badge badge-pill badge-warning">
//             {this.props.totalCounters}
//           </span>
//         </span>
//       </nav>
//     );
//   }
// }

// export default Navbar;
