import classes from "./Action.module.css";

const Action = (props) => (
    <button className={classes.ActionButton} onClick={props.onClick}>
        <h1>{props.title}</h1>
    </button>
);

export default Action;
