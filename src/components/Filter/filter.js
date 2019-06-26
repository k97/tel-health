import React from "react";
import "./filter.scss";
import calIcon from "../../img/main-calendar-icon.png";

const FilterPatients = () => {

  const onChange = () => {}

  return (
    <div className="patientForm">
      {/* medication */}
      <span className="form-control">
        <input type="text" placeholder="Filter medication" />
      </span>

      {/* severity */}
      <span className="form-control">
        <input type="text" placeholder="Filter severity" />
      </span>

      {/* TODO: Date Picker Component */}
      <span className="form-control">
        <div className="input-group">
          <div className="input-group-area">
            <input
              type="text"
              value="18 Dec 2018 - 19 Dec 2019"
              onChange={onChange}
              placeholder="Filter dates"
            />
          </div>
          <div className="input-group-icon">
            <img src={calIcon} alt="Calendar" />
          </div>
        </div>
      </span>
    </div>
  );
};

export default FilterPatients;
