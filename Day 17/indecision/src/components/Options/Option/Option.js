import classes from "./Option.module.css";

const Option = (props) => (
    <div className={classes.Option}>
        <div className={classes.OptionText}>{props.option}</div>
        <div
            className={classes.OptionButton}
            onClick={() => props.handleDeleteOption(props.option)}
        >
            Remove
        </div>
    </div>
);

export default Option;
