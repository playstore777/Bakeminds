import React, { Component } from "react";

export class VisibilityToggle extends Component {
    state = {
        show: true,
        visibility: "visible",
    };

    // toggleHandler = () => this.setState({ show: !this.state.show });
    // this.setState((prevState) => {
    //     let updatedState = !prevState;
    //     console.log(updatedState);
    //     return {
    //         show: !prevState,
    //     };
    // });

    toggleHandler = () => {
        if (this.state.show) {
            this.setState({ show: false, visibility: "hidden" });
        } else {
            this.setState({ show: true, visibility: "visible" });
        }
        // this.setState(() => {
        //     if (this.state.show) {
        //         console.log("here");
        //         return {
        //             visibility: "visible",
        //             show: true,
        //         };
        //     } else {
        //         return {
        //             visibility: "hidden",
        //             show: false,
        //         };
        //     }
        // });
    };

    render() {
        return (
            <div style={{ margin: "10px" }}>
                {/* {this.state.show ? <p>Can you see me?</p> : null} */}
                <button onClick={this.toggleHandler}>
                    {this.state.show ? "Hide the text" : "Show the text"}
                </button>
                <p style={{ visibility: this.state.visibility }}>
                    Can you see me?
                </p>
            </div>
        );
    }
}

export default VisibilityToggle;
