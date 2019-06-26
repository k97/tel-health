import React, { useContext } from 'react'
import PatientContext from '../../context/Patient/patientContext';

import './profile.scss';

const PatientProfile = ({type}) => {

    const patientContext = useContext(PatientContext);
    const patient = patientContext.identity;

    return (
        <React.Fragment>
            {
                <section className={type =='short' ? "shortProfile" : "longProfile"}>
                    <img src={patient.avatar} className="avatar" alt="avatar" />
                    <div className="profileMeta">
                        <span className="firstName">{patient.firstname}, </span>
                        <span className="lastName">{patient.lastname}</span>
                        <div className="profileMiscShort">
                            {patient.dob} {patient.age} {patient.gender}
                        </div>

                        <div className="profileMiscLong">
                            <span>
                                <strong>{patient.gender}, aged {patient.age} ({patient.dob})</strong>
                            </span>
                            <span><strong>UR:</strong> {patient.urNo}</span>
                            <span><strong>Address:</strong> {patient.address}</span>
                        </div>
                    </div>
                </section>

            }
        </React.Fragment>
    )
}

export default PatientProfile
