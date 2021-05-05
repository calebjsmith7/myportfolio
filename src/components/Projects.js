import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

class Projects extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="projectspage">
          <div className="projectsa">
              <h2 className="projectstitle">Projects</h2>
              <div className="projectsboxcontainer">
                  <a href="https://kennedy-84a26.web.app/"><div className="projectsbox proj1"></div></a>
                  <div className="projectsbox proj2"></div>
                  <div className="projectsbox proj3">Coming Soon...</div>
              </div>
          </div>
        </div>
    );
  }
}

export default Projects;