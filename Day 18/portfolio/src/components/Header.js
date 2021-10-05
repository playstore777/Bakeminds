import { NavLink } from "react-router-dom";
import "../styles/base.css";

const Header = () => (
    <div>
        <h1>Portfolio</h1>
        <NavLink exact={true} activeClassName="is-active " to="/">
            Home
        </NavLink>
        <NavLink exact={true} activeClassName="is-active " to="/portfolio">
            Portfolio
        </NavLink>
        <NavLink exact={true} activeClassName="is-active " to="/contact">
            Contact
        </NavLink>
    </div>
);

export default Header;
