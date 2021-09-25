import React, { Component } from "react";

export class Navbar extends Component {
  state = {
    image_url: "https://avatars.githubusercontent.com/u/1?v=4",
    profile_url: "https://github.com/mojombo",
  };
  render() {
    return (
      <div>
        <div className="navbar bg-primary">
          <h1>
            <i className="fab fa-github"> GitHub Finder</i>
          </h1>
        </div>
      </div>
    );
  }
}

export default Navbar;
