import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/img/fy-logo.png';

class Navbar extends Component {
    gridMode() {
        localStorage.setItem('mode', 'grid');
    }

    scrollMode() {
        localStorage.setItem('mode', 'scroll');
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-custom">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src={Logo} alt="Fredrik Yumo Logo" />
                </Link>
                <ul className="navbar-nav">
                    <div className="row">
                        <li className="nav-item">
                            <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" className="icon" onClick={this.gridMode}>
                                <g id="Page-1" strokeWidth="1" fillRule="evenodd">
                                    <g id="grid-icon" transform="translate(1.000000, 1.000000)" stroke="#FFFFFF">
                                        <rect id="Rectangle-Copy-8" x="21.3333333" y="21.3333333" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-7" x="10.6666667" y="21.3333333" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-6" x="0" y="21.3333333" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-5" x="21.3333333" y="10.6666667" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-4" x="10.6666667" y="10.6666667" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-3" x="0" y="10.6666667" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy-2" x="21.3333333" y="0" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle-Copy" x="10.6666667" y="0" width="10.4421053" height="10.4421053"></rect>
                                        <rect id="Rectangle" x="0" y="0" width="10.4421053" height="10.4421053"></rect>
                                    </g>
                                </g>
                            </svg>
                        </li>
                        <li className="nav-item">
                            <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg" className="icon" onClick={this.scrollMode}>
                                <g id="Page-1" strokeWidth="1" fillRule="evenodd">
                                    <g id="scroll-icon" transform="translate(1.000000, 1.000000)" stroke="#FFFFFF">
                                        <rect id="Rectangle" x="0" y="0" width="32" height="16"></rect>
                                        <rect id="Rectangle-Copy" x="0" y="16" width="32" height="16"></rect>
                                    </g>
                                </g>
                            </svg>
                        </li>
                    </div>
                </ul>
            </nav>
        );
    }
}

export default Navbar;