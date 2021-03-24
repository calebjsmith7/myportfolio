import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lowermenu from './components/Lowermenu';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
            <div>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
            </div>
      
        </div>
      </Router>
    );
  }
}

export default App;
