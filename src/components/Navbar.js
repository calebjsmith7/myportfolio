import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({title}) =>{
    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
              $(".navbar").css("background" , "#2b2b2bd0");
              $(".nbg").css("background" , "none");
            }
            else{
                $(".navbar").css("background" , "none");
                $(".nbg").css("background" , "#2b2b2b5b");  	
            }
        })
      })
      function handleCollapse() {
        var nav = document.getElementById("navbarSupportedContent");
        var btn = document.getElementById("navbarbtn");
        nav.classList.remove("show");
        btn.classList.add("collapsed");
    }
    return (
        <nav className="navbar fixed-top navbar-dark navv">
            <button className="navbar-toggler n ml-auto" id="navbarbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="customicon"><i class="fas fa-bars"></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto n nbg">
                    <li className="nav-item active"><Link to='/' className="nav-link l">HOME <span className="sr-only">(current)</span></Link></li>
                    <li className="nav-item active"><Link to='/projects' className="nav-link l">PROJECTS</Link></li>
                    <li className="nav-item active"><Link to='/contact' className="nav-link l">CONTACT ME</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar