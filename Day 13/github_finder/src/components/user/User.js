import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export class User extends Component {
  state = {
    user: {},
    loading: false,
  };

  getUser = async (userName) => {
    this.setState({
      loading: true,
    });

    //   console.log(value);
    let res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    console.log(
      "res.data from User : ",
      res.data,
      "loading: ",
      this.state.loading
    );

    this.setState({
      user: res.data,
      loading: false,
    });
  };

  componentDidMount() {
    console.log("props from User: ", this.props);
    this.getUser(this.props.match.params.userName);
  }
  render() {
    let user = this.state.user;
    return (
      <div>
        <Link to={"/"}>Back To Home</Link>
        {/* <button onClick={this.props.history.goBack}>Back To Home</button> */}
        <div>
          Hireable:{" "}
          {user.hireable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </div>
        <div className="card" style={{ padding: "5%" }}>
          <span
            style={{
              //   display: "flex",
              //   justifyContent: "center",
              //   alignItems: "center",
              margin: "20px",
            }}
          >
            <img
              src={user.avatar_url}
              style={{
                width: "20%",
                borderRadius: "50%",
                display: "block",
              }}
              alt="avatar"
            />
          </span>
          <ul>
            <li>Name : {user.login}</li>
            <li>Name : {user.login}</li>
            <li>Name : {user.login}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default User;
