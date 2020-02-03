import React from 'react';
// import { Circle } from 'react-shapes';
import Image from 'react-bootstrap/Image'
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';

import auth0 from '../../services/auth0';


const BsNavLink = (props) => {
     const { route, title } = props;
     return (
          <Link href={route}>
               <a className="nav-link port-navbar-link"> {title}</a>
          </Link>
     )
}

const Login = () => {
     return (
          <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
     )
}

const Logout = () => {
     return (
          <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
     )
}

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

     toggle() {
          this.setState({
               isOpen: !this.state.isOpen
          });
     }

     render() {

          const { isAuthenticated, user, className } = this.props;

          return (
               <div>
                    <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
                         <NavbarBrand className="port-navbar-brand" href="/">
                         <Image src="../../static/images/linkedin1.jpg" roundedCircle fluid />
                         Laycon Muriziq
                         {/* <Circle r={50} fill={{url:'https://lmtrain.github.io/lm-images/assets/images/futurecar17.jpg'}} stroke={{color:'white'}} strokeWidth={2} /> */}
                         {/* { isAuthenticated &&
                              <span>{user.name}</span>
                         } */}
                         </NavbarBrand>
                         <NavbarToggler onClick={this.toggle} />
                         <Collapse isOpen={this.state.isOpen} navbar>
                              <Nav className="ml-auto" navbar>
                                   <NavItem className="port-navbar-item">
                                        <BsNavLink route="/" title="Home" />              
                                   </NavItem>
                                   <NavItem className="port-navbar-item">
                                        <BsNavLink route="/about" title="About" />                
                                   </NavItem>
                                   <NavItem className="port-navbar-item">
                                        <BsNavLink route="/portfolios" title="Portfolios" />                  
                                   </NavItem>
                                   <NavItem className="port-navbar-item">
                                        <BsNavLink route="/blogs" title="Blogs" />                 
                                   </NavItem>
                                   <NavItem className="port-navbar-item">
                                        <BsNavLink route="/cv" title="Resume" />                 
                                   </NavItem>
                                   {/* <NavItem className="port-navbar-item">
                                        <BsNavLink route="https://github.com/LMTrain" title="GitHub" />                 
                                   </NavItem> */}
                               
                                   {/* <NavItem className="port-navbar-item">
                                        <Login />                 
                                   </NavItem>
                              
                              
                                   <NavItem className="port-navbar-item">
                                        <Logout />                 
                                   </NavItem> */}
                                 
                                   { !isAuthenticated &&
                                        <NavItem className="port-navbar-item">
                                             <Login />                 
                                        </NavItem>
                                   }
                                   { isAuthenticated &&
                                        <NavItem className="port-navbar-item">
                                             <Logout />                 
                                        </NavItem>
                                   }
                              
                              </Nav>           
                         </Collapse>
                    </Navbar>
               </div>
          );

     }
}
  
