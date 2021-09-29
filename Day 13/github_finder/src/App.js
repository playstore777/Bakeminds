import axios from "axios";
import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import ShowAlert from "./components/layout/ShowAlert";
import Search from "./components/user/Search";
import Users from "./components/user/Users";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./components/user/User";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   this.setState({
  //     loading: true,
  //   });

  //   let res = await axios.get("https://api.github.com/users");
  //   // console.log("res.data : ", res, "loading: ", this.state.loading);

  //   this.setState({
  //     users: res.data,
  //     loading: false,
  //   });
  //   // console.log("users : ", this.state.users, "loading: ", this.state.loading);
  // }

  showAlert = (msg, type) => {
    this.setState({
      loading: false,
      alert: { msg, type },
    });
    // console.log(this.state.loading);

    setTimeout(
      () =>
        this.setState({
          alert: null,
          loading: false,
        }),
      // console.log("5 secs done!"),
      5000
    );
  };

  onSubmit = async (value) => {
    if (this.state.alert === null) {
      // console.log("e");

      if (value === "") {
        this.showAlert("Please enter something", "light");
        return;
      }

      // e.preventDefault();

      this.setState({
        loading: true,
      });

      // console.log(value);
      let res = await axios.get(
        `https://api.github.com/search/users?q=${value}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );
      // console.log("res.data : ", res.data, "loading: ", this.state.loading);

      this.setState({
        users: res.data,
        loading: false,
      });
    }
  };

  clear = () => this.setState({ users: [] });

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar icon="fab fa-github" title="Github Finder" />
            {this.state.alert !== null ? (
              <ShowAlert alert={this.state.alert} />
            ) : null}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search onSubmit={this.onSubmit} clear={this.clear} />
                    <Users
                      data={this.state.users}
                      loading={this.state.loading}
                    />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:userName"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
