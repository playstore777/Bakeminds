import { Component } from "react";
import "./AddOption.css";

export default class AddOption extends Component {
    state = {
        error: undefined,
    };
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = "";
        }
    };
    render() {
        return (
            <div>
                {this.state.error && (
                    <p className="AddOptionError">{this.state.error}</p>
                )}
                <form className="AddOption" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button className="AddOptionButton">Add Option</button>
                </form>
            </div>
        );
    }
}
