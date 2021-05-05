import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
            <div className="bodysection a">
                <div className="tint">
                    <h1 className="big">Caleb Smith</h1>
                    <h1 className="medium">Web Developer</h1>
                    <div className="p1">
                        <p className="l1">Making Beautiful Websites</p>
                    </div>
                </div>
            </div>
            <div className="bodysection b">
                <div className="btext">
                    <h1 className="p2">I love partnering with small businesses and non-profits to create beautiful, simple, and high-performing websites.</h1>
                    <Link to='/projects'><button className="btn viewproj">View Projects</button></Link>
                </div>
            </div>
            <div className="bodysection c">
                <div className="greybox">
                    <a  className="gitlink" href="http://www.github.com/calebjsmith7">
                        <div className="subbox">
                            <h2 className="ghub">Click Here to Visit My Github</h2>
                            <i className="gh fab fa-github"></i>
                        </div>
                    </a>
                </div>
            </div>
            <div className="bodysection d">
                <h1 className="tech">Technologies</h1>
                <div className="iconbox">
                    <div className="icons">
                        <div className="icon fab fa-js-square"></div>
                        <div className="icon fab fa-react"></div>
                        <div className="icon fab fa-bootstrap"></div>
                    </div>
                    <div className="icons">
                        <div className="icon fab fa-github"></div>
                        <div className="icon fab fa-wordpress-simple"></div>
                        <div className="icon fab fa-java"></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;