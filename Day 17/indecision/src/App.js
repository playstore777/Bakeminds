import React, { Component } from "react";
import Header from "./components/Header/Header";
import Action from "./components/Action/Action";
import Options from "./components/Options/Options";
import AddOption from "./components/AddOption/AddOption";
import "./App.css";

export default class IndecisionApp extends Component {
    constructor() {
        super();
        this.state = {
            options: ["asfdaf", "asafdafdsaf", "asfdasda"],
        };
    }

    componentDidMount() {
        try {
            console.log("object");
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("object");
        console.log("prevState", prevState);
        console.log("currState", this.state);
        if (prevState.options.length !== this.state.options.length) {
            console.log("here?");
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleAddOption = (value) => {
        // console.log(value, typeof value);
        if (!value) {
            return "Please enter a valid option!";
        }
        if (this.state.options.indexOf(value) > -1) {
            return "This option already exists!";
        }
        if (value) {
            const options = [...this.state.options];
            options.push(value.trim());
            this.setState({ options });
        }
    };

    handleDeleteOption = (option) => {
        // let option = e.target.value;
        // console.log("e ", e);
        let index = this.state.options.indexOf(option);
        let options = this.state.options;
        options.splice(index, 1);
        this.setState({ options });
    };

    handleDeleteAllOption = () => {
        this.setState({ options: [] });
    };

    click = () => {
        console.log("clicked");
    };
    render() {
        return (
            <div className="IndecisionApp">
                <Header />
                <Action title="What Should I Do?" onClick={this.click} />
                <Options
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteAllOption={this.handleDeleteAllOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
