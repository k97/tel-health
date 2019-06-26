import React from 'react'
import logo from '../../img/header-logo-icon.png';
import caret from '../../img/header-caret-icon.png';
import './header.scss';


const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="brandWrapper">
                    <div className="brandHeader">
                        <img src={logo} className="appLogo" alt="logo" />
                        <span className="appTitle">My Care Manager</span>
                    </div>
                    <div className="appProfile">
                    <img src={caret} className="appDropdown" alt="caret-icon" /> Will Grant
                    </div>
                </div>

                {/* TODO: Could be a tab component by itself */}
                <div className="headerTabset">
                    <div className="tab">
                        Patient Details
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}



export default Header