import React from "react";
import "./Filter.css";
import { MdArrowForwardIos } from "react-icons/md";
function Filter() {
  return (
    <div filter-card-container>
      <div className="filter-panel card">
        <div className="name">
          <h2>Sort</h2>
          <span className="icons">
            <MdArrowForwardIos />
          </span>
        </div>
      </div>
      <div className="filter-panel card ">
        <div className="name">
          <h2>Filters</h2>

          <span className=" chevron-right"></span>
        </div>
      </div>
    </div>
  );
}

export default Filter;
