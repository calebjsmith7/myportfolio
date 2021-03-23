import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({title}) =>{
    return (
        <nav className="navbar fixed-top navbar-expand-xl navbar-light navv">
            <button className="navbar-toggler n" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto n">
                    <li className="nav-item active"><Link to='/' className="nav-link l">HOME <span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item active"><Link to='/projects' className="nav-link l">PROJECTS</Link></li>
                    <li className="nav-item active"><Link to='/contact' className="nav-link l">CONTACT ME</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar