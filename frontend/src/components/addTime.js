import "../css/Profile.css";
import React from "react";

function AddTime(props) {
  return (
    <button
      className="button text-blueGray-700"
      style={{ backgroundColor: "#9EBC9E" }}
      onClick={props.onClick}
    >
      {props.label}
      Add Life Event
    </button>
  );
}

export default AddTime;
