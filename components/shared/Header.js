import React from 'react';
// import { Circle } from 'react-shapes';
import Image from 'react-bootstrap/Image'
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  NavItem} from 'reactstrap';

import auth0 from '../../services/auth0';


const BsNavLink = (props) => {     
     const { route, title } = props;
     return (
          <ActiveLink activeClassName="active" route={route}>
               <a className="nav-link port-navbar-link"> {title} </a>
          </ActiveLink>        
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
        
        this.state = {
          isOpen: false,
          dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

     toggle() {
          this.setState({
               isOpen: !this.state.isOpen
          });
     }

     toggleDropdown() {
          this.setState({
               dropdownOpen: !this.state.dropdownOpen
          });
     }

     renderBlogMenu() {
          const { isSiteOwner } = this.props;

          if (isSiteOwner) {
               return (
                    <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                         <DropdownToggle className="port-navbar-link" nav caret style={{color: "brown"}}>
                               <b>Blog</b>
                         </DropdownToggle>
                         <DropdownMenu>                            
                              <DropdownItem><BsNavLink route="/blogs" title="Blogs" /></DropdownItem>
                              <DropdownItem><BsNavLink route="/blogs/new" title="Create a Blog" /></DropdownItem>
                              <DropdownItem><BsNavLink route="/blogs/dashboard" title="Blogs Dashboard" /></DropdownItem>
                         </DropdownMenu>
                  </Dropdown>

               )
          }
          return (
               <NavItem className="port-navbar-item">
                    <BsNavLink route="/blogs" title="Blogs" />
               </NavItem>
          )
     }

     render() {         
          const { isAuthenticated, user, className, userName } = this.props;
          const { isOpen } = this.state;

          const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';
          return (
               <div>
                    <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} color="transparent" dark expand="md">
                         <NavbarBrand className="port-navbar-brand" href="/">
                         <Image src="../../static/images/linkedin1.jpg" width="120" height="160" roundedCircle fluid />
                         <span>LAYCON MURIZIQ</span>
                         {/* <span>{userName}</span> */}
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
                                   
                                        {/* <BsNavLink route="/blogs" title="Blogs" /> */}
                                        {this.renderBlogMenu()}                 
                                  
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
  
