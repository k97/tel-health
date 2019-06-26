import React, { useContext } from "react";
import PatientContext from "../../context/Patient/patientContext";

import "./timeline.scss";
import dropdownIcon from '../../img/sidebar-menu-caret.png';

const TimelineMedication = () => {

  const patientContext = useContext(PatientContext);
  const medi = patientContext.medication;

  // Method to cell className
  const renderSeverity = (val) => {
    switch(val) {
        case 'H':
            return (<span className="cell-severity-h">{val}</span>);
        case 'M':
            return (<span className="cell-severity-m">{val}</span>);
      default:
        return (<span></span>);
    }
  }

  // Method to tag table row className
  const rowSeverity = (val) => {
    switch(val) {
        case 'H':
            return "row-severity-h";
        case 'M':
                return "row-severity-m";
      default:
        return "";
    }
  }

  // Method to create table body
  const createTableBody = (val) => {
    let row = [];

    for (var i of val) {
        row.push(
            <tr>
                <td colspan="8" className="date-cell">{i.date}</td>
            </tr>
        );
        let innerRows = []
        for(var j of i.intake) {
            innerRows.push(
                <tr className={rowSeverity(j.severity)}>
                    <td>{j.time}</td>
                    <td>{j.name}</td>
                    <td>{j.dose}</td>
                    <td>{j.unit}</td>
                    <td>{j.type}</td>
                    <td>{renderSeverity(j.severity)}</td>
                    <td>{j.incident}</td>
                    <td>
                        <span className="dropdown-caret">
                            <img src={dropdownIcon} alt="dropdown"/>
                        </span>
                    </td>
                </tr>
            );
        }
        row.push(innerRows);
    }

    return row;
  };

  return (
    <React.Fragment>
      <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Medication</th>
                <th>Recorded Dose</th>
                <th>Unit</th>
                <th>Type</th>
                <th>Severity</th>
                <th>Incident</th>
                <th></th>
            </tr>
        </thead>
        {createTableBody(medi)}
      </table>
    </React.Fragment>
  );
};

export default TimelineMedication;
