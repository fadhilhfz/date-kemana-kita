import React from "react";
import filterIcon from "../static/img/filter.png";
import "../css/FilterButton.css";

export default function FilterButton({}) {
  return (
    <button className="btn-filter crs-pointer" src={filterIcon}>
      <img
        src={filterIcon}
        alt="filter"
        style={{ height: "19px", width: "auto" }}
      />
    </button>
  );
}
