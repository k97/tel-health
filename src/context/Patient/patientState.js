import React, { useReducer } from 'react'

import { identity, medications, TOGGLE_SIDEBAR, SET_PROFILE, SET_TIMELINE } from './patientInfo';
import PatientContext from './patientContext';
import PatientReducer from './patientReducer';

const PatientState = props => {

    const initialState = {
        identity: identity, // Patient profile
        medication: medications, // Patient medication timeline
        isSidebarCollapsed: false //sidebar control flag
    }

    const [state, dispatch] = useReducer(PatientReducer, initialState);


    // Method for sidebar Toggle
    const setSidebar = posVal => dispatch( { type: TOGGLE_SIDEBAR, payload: posVal });

    return <PatientContext.Provider value={{
        identity: state.identity,
        medication: state.medication,
        isSidebarCollapsed: state.isSidebarCollapsed,
        setSidebar
    }}>
        {props.children}
    </PatientContext.Provider>
}


export default PatientState;