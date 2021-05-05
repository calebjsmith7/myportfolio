import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { valHooks } from 'jquery';
import * as emailjs from 'emailjs-com';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

class Contact extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    explain: '',
  }

  handleSubmit(e){
    e.preventDefault();

    const { fname, lname, email, phone, explain } = this.state;

    let templateParams = {
      from_name: email,
      to_name: 'calebjoelsmith@gmail.com',
      subject: 'web inquiry',
      name: fname + " " + lname,
      email: email,
      phone: phone,
      explain: explain
    }
    emailjs.send(
      'service_tzr50ao',
      'template_6bx4zh9',
      templateParams,
      'user_3ECwm7FTp2wFAry5GWeJF'
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      explain: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({
      [param]: e.target.value
    });
  }
 
  render() {

    return (
        <div className="contactpage">
          <div className="contact-middle">
          <h5 className="emailus">EMAIL US FOR MORE INFO</h5>
          <form name="contact" className="contact form-group" onSubmit={this.handleSubmit.bind(this)}>
          
            <br/>
            <label for="fname" className="form-label">First Name</label><br/>
            <input type="text" className="form-control" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange.bind(this, 'fname')} placeholder="First Name" required></input><br/>
            <label for="lname" className="form-label">Last Name</label><br/>
            <input type="text" className="form-control" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange.bind(this, 'lname')} placeholder="Last Name" required></input><br/>
            <label for="email" className="form-label">Email Address</label><br/>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required></input><br/>
            <label for="phone" className="form-label">Phone Number</label><br/>
            <input type="tel" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="Phone Number" required></input><br/>
            <label for="explain" className="form-label">Additional Info</label><br/>
            <textarea type="textarea" className="form-control" id="explanation" name="explanation" value={this.state.explain} onChange={this.handleChange.bind(this, 'explain')} placeholder="Enter More Information Here" required></textarea>
            <br />
            <input type="submit" className="submit" value="Submit"></input>

          </form>
          </div>
        </div>
    );
  }
}

export default Contact;