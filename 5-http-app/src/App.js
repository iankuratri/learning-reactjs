import React, { Component } from "react";
import "./App.css";
import _http from "./services/httpService";
import config from "./config.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await _http.get(config.apiEndpoint);

    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "new post", body: "this is my new post" };
    const { data: post } = await _http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "Updated post";

    await _http.put(`${config.apiEndpoint}/${post.id}`, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await _http.delete(`${config.apiEndpoint}""/${post.id}`);
      // throw new Error("");
    } catch (ex) {
      // ex.response - this property is set when we successfuly get a response from the server otherwise null
      // ex.request - this property is set if we can successfuly sent request to a server otherwise null

      // expected and unexpected erros
      // Expected: (404: not found, 400: bad request) - CLIENT ERRORS
      // - Display a specific error message
      // Unexpected: (network issue, server down, db down, bug)

      if (ex.response && ex.response.status === 404) {
        toast.warn("This post has already been deleted.");
      }
      // moved to axios error handling
      // else {
      //   console.log("Logging the error", ex);
      //   alert("An unexpected error occurred.");
      // }
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return <button onClick={methodDoesNotExist}>Break the world</button>;
    // return (
    //   <React.Fragment>
    //     <ToastContainer />
    //     <button className="btn btn-primary" onClick={this.handleAdd}>
    //       Add
    //     </button>
    //     <table className="table">
    //       <thead>
    //         <tr>
    //           <th>Title</th>
    //           <th>Update</th>
    //           <th>Delete</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {this.state.posts.map((post) => (
    //           <tr key={post.id}>
    //             <td>{post.title}</td>
    //             <td>
    //               <button
    //                 className="btn btn-info btn-sm"
    //                 onClick={() => this.handleUpdate(post)}
    //               >
    //                 Update
    //               </button>
    //             </td>
    //             <td>
    //               <button
    //                 className="btn btn-danger btn-sm"
    //                 onClick={() => this.handleDelete(post)}
    //               >
    //                 Delete
    //               </button>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </React.Fragment>
    // );
  }
}

export default App;
