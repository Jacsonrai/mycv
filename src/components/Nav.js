import React,{Component} from 'react';
import {HashLink as Link} from 'react-router-hash-link';




class Nav extends Component {
  componentDidMount() {
    const M =window.M

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, 'options');
      });

  
  
  }  
    render(){
        return(
            <div>
            <nav>
                <div className='container'>
                <div className='nav-wrapper'>
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <Link to='/' className='brand-logo'>
            MyFolio
        </Link>
        <ul className='right hide-on-med-and-down'>
            <li>
                <Link to='/'>
                    <i className="fas fa-home"></i>Home
                </Link>
             </li>
             <li>
                <Link to='/resume'>
                    <i className="fas fa-copy"></i>Resume
                </Link>
             </li>
             <li>
                <Link to='/Project'>
                    <i className="fas fa-id-badge"></i>Project
                </Link>
             </li>
             <li>
                <Link to='/Contact'>
                    <i className="fas fa-address-card"></i>Contact
                </Link>
             </li>
              </ul>
                </div>
                 </div>
                 </nav>
                 <ul id="slide-out" className="sidenav">
                 <li><a href="/">MyFolio</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/project">Project</a></li>
                <li><a href="/contact">Contact</a></li>
 
 
                 </ul>
 
                 </div>
                 
 
        )
    }
  
}
export default Nav;
