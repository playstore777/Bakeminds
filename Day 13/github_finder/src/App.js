import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true,
    });

    let res = await axios.get("https://api.github.com/users");
    // console.log("res.data : ", res, "loading: ", this.state.loading);

    this.setState({
      users: res.data,
      loading: false,
    });
    // console.log("users : ", this.state.users, "loading: ", this.state.loading);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar icon="fab fa-github" title="Github Finder" />
          <Users data={this.state.users} />
        </header>
      </div>
    );
  }
}

export default App;
