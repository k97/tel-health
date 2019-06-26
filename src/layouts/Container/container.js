import React from "react";
import "./container.scss";

import PatientProfile from "../../components/Patient/profile";
import FilterPatients from "../../components/Filter/filter";
import TimelineMedication from '../../components/Timeline/timeline';

const Container = ({}) => {
  return (
    <div className="content">
      <PatientProfile />
      <FilterPatients />
      <TimelineMedication />
    </div>
  );
};

export default Container;
