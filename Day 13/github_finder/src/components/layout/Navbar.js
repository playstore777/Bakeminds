import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <div className="navbar bg-primary">
        <h1>
          <i className={props.icon}> {props.title}</i>
        </h1>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Navbar;
