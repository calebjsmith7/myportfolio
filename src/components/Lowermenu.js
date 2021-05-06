import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Lowermenu extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="lower">
          <div className="bottomlogo"></div>
          <div className="cw">
            <h1 className="cw">© 2021 CALEB SMITH</h1>
          </div>
          <div className="bottomright">
            <ul className="bottomlinks">
              <li><Link to='/' className="fix">Home</Link></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/projects' className="fix">Projects</Link></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/contact' className="fix">Contact</Link></li>
            </ul>
          </div>
        </div>
          )
        };
    }
    
export default Lowermenu;