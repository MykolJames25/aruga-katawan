import React from 'react';
import { Link } from 'react-router-dom';
import './sitenav.css';

class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.changeBackgroundOpacity = this.changeBackgroundOpacity.bind(this);
        this.state = {
            backgroundColorFade: 1
        }
    }
    changeBackgroundOpacity(value: number) {
        this.setState({ backgroundColorFade: value })
    }

    render() {
        return (
            <nav style={{ backgroundColor: `rgba(36, 159, 166, ${this.state.backgroundColorFade})` }} >
                <div className="logoContainer">
                    <Link onClick={() => this.changeBackgroundOpacity(1)} className="logo" to="/aruga-katawan/">
                        <img style={{ height: 50 }} src={require("../logo.svg")} />
                        <div style={{ fontSize: 30 }} >ArugaKatawan</div>
                    </Link>
                </div>
                <div className="nav-link">
                    <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/physiotherapy">&nbsp;Ang Physiotherapy&nbsp;</Link>
                    <div className="dropdown">
                        <button  className="dropbtn">&nbsp;Ating Katawan&nbsp; <span style={{fontStyle:"normal"}}>&or;</span></button>
                        <div className="dropdown-content">
                            <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/katawan">&nbsp;Ang Katawan&nbsp;</Link>
                            <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/injuries">&nbsp;Mga Injuries&nbsp;</Link>
                        </div>
                    </div>
                    <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/remedyo">&nbsp;Mga Remedyo&nbsp;</Link>
                    <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/hanap-pt">&nbsp;Hanap-PT&nbsp;</Link>
                    <Link onClick={() => this.changeBackgroundOpacity(1)} to="/aruga-katawan/about">&nbsp;About&nbsp;</Link>
                </div>
            </nav>
        );
    }
}

export default Nav;
