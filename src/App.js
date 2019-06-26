import React, { useState, useContext } from 'react';

// Layout Imports
import Header from './layouts/Header/header';
import Sidebar from './layouts/Sidebar/sidebar';
import Container from './layouts/Container/container';

// State/SCSS Import
import PatientState from './context/Patient/patientState';
import './App.scss';

const App = () => {

  const [ isSidebarCollapsed, setSidebar ] = useState(false);
  const [ patientMedication ] = useState([]);

  const toggleSidebar = (flag) => {
    setSidebar(flag);
  }

  //Refer to the PatientState for app state
  return (
    <PatientState>
      <React.Fragment>
        <Header />
        <main className={isSidebarCollapsed ? 'main-pinned' : ''}>
          <Sidebar sidebarFlag={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
          <Container />
        </main>
      </React.Fragment>
    </PatientState>
  );
}

export default App;
