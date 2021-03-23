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
                        <p className="l1">Making</p>
                        <p className="l1">Beautiful</p>
                        <p className="l1">Websites</p>
                    </div>
                </div>
            </div>
            <div className="bodysection b">
                <p className="p2">I love partnering with <br/>small businesses and non-profits <br/>to create beautiful, simple, and high-performing websites.</p>
                    <Link to='/projects'><button className="btn btn-dark viewproj">View Projects</button></Link>
            </div>
            <div className="bodysection c">
                <div className="greybox">
                    <a  className="gitlink" href="http://www.github.com/calebjsmith7">
                        <div className="subbox">
                            <p className="ghub">Click Here <br/>to Visit<br/> My Github</p>
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