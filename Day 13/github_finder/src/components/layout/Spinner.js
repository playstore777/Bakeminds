import React, { Fragment } from "react";
import Loading from "../../assets/Loading.gif";

const spinner = () => (
  <Fragment>
    <img
      src={Loading}
      alt="Loading..."
      style={{ width: "100px", margin: "auto" }}
    />
  </Fragment>
);

export default spinner;
