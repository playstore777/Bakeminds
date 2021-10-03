import classes from "./Options.module.css";
import Option from "./Option/Option";

const Options = (props) => {
    let options = [];
    if (props.options.length < 1) {
        options = "Please add an option to get started!";
    } else {
        options = props.options.map((option) => (
            <Option
                key={option}
                option={option}
                handleDeleteOption={props.handleDeleteOption}
            />
        ));
    }

    return (
        <div className={classes.Options}>
            <div className={classes.OptionsHeader}>
                <b>Your Options</b>
                <p onClick={props.handleDeleteAllOption}>Remove All</p>
            </div>
            <div className={classes.OptionsBody}>{options}</div>
        </div>
    );
};

export default Options;
