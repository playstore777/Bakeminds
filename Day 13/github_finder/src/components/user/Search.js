import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onChange = (e) =>
    this.setState({
      text: e.target.value,
    });

  render() {
    return (
      <div>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            style={{ width: "100%", backgroundColor: "black", color: "white" }}
            onClick={() => this.props.onSubmit(this.state.text)}
          />
          <input
            type="submit"
            value="clear"
            style={{
              width: "100%",
              backgroundColor: "white",
              color: "black",
              textAlign: "center",
            }}
            onClick={() => {
              this.setState({ text: "" });
              this.props.clear();
            }}
          />
        </form>
      </div>
    );
  }
}

export default Search;
