import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosBusiness } from 'react-icons/io';
import './sitenav.css';

function Nav() {
    return (
        <nav >
            <div className="logoContainer">
                <Link className="logo" to="/">
                    <IoIosBusiness />
                    <h3>Logo</h3>
                </Link>
            </div>
            <div className="nav-link">
                <Link to="/physiotherapy">&nbsp;Ang Physiotherapy&nbsp;</Link>
                <Link to="/katawan">&nbsp;Ang Katawan&nbsp;</Link>
                <Link to="/remedyo">&nbsp;Mga Remedyo&nbsp;</Link>
                <Link to="/hanap-pt">&nbsp;Hanap-PT&nbsp;</Link>
                <Link to="/about">&nbsp;About&nbsp;</Link>
            </div>
        </nav>
    );
}

export default Nav;
