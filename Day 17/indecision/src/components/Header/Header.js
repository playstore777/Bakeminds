import classes from "./Header.module.css";

const Header = () => (
    <div className={classes.Header}>
        <h1 className={classes.Title}>Indecision</h1>
        <h4 className={classes.Subtitle}>
            Put your life in the hands of a computer
        </h4>
    </div>
);

export default Header;
