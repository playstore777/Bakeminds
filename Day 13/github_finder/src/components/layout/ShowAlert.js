import React from "react";

const ShowAlert = ({ alert }) => {
  return (
    <div className={alert.type}>
      <p>{alert.msg}</p>
    </div>
  );
};

export default ShowAlert;
