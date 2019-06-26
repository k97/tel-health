import React, { useState, useContext } from 'react';
import './sidebar.scss';

import PatientProfile from '../../components/Patient/profile';

// Icons
import calIcon from '../../img/sidebar-calendar-icon.png';
import profileIcon from '../../img/sidebar-profile-icon.png';
import historyIcon from '../../img/sidebar-history-icon.png';
import medsIcon from '../../img/sidebar-medication-icon.png';
import caret from '../../img/sidebar-menu-caret.png';
import collapseIcon from '../../img/sidebar-menu-collapse-icon.png';


const Sidebar = ({ sidebarFlag, toggleSidebar}) => {


    const onClickToggle = (event) => {
        toggleSidebar(!sidebarFlag);
    }

    return (
        <div className={sidebarFlag ? 'sidebar sidebar-pinned' : 'sidebar' }>

            <div className="sidebar-overlay" onClick={onClickToggle}></div>
            <button type="button" className="btnCollapse" onClick={onClickToggle}>
                <img src={collapseIcon} alt="collapseIcon" />
            </button>
            <PatientProfile type="short"/>
            <ul>
                <li>
                    <img src={profileIcon} className="sidebarIcon" alt="profileIcon" />
                    <span>Profile</span>
                    <img src={caret} className="dropdownIcon" alt="dropdown icon" />
                </li>
                <li>
                    <img src={calIcon} className="sidebarIcon" alt="calIcon" />
                    <span>Schedule</span>
                    <img src={caret} className="dropdownIcon" alt="dropdown icon" />
                </li>
                <li>
                    <img src={historyIcon} className="sidebarIcon" alt="historyIcon" />
                    <span>History</span>
                    <img src={caret} className="dropdownIcon dropdownIconInverse" alt="dropdown icon" />

                    <ul>
                        <li className="active">
                            <img src={medsIcon} className="sidebarIcon" alt="medsIcon" />
                            <span>Medication</span>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}


export default Sidebar