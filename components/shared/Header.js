// import React, { useState } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import Link from 'next/link';

// const BsNavLink = (props) => {
//      const { route, title } = props;
//      return (
//           <Link href={route}>
//                <a className="nav-link port-navbar-link"> {title}</a>
//           </Link>
//      )
// }
// const Example = (props) => {
//   const [collapsed, setCollapsed] = useState(true);

//   const toggleNavbar = () => setCollapsed(!collapsed);

//   return (
//     <div>
//           <Navbar className="port-navbar port-default" absolute color="transparent" light>
//                <NavbarBrand className="port-navbar-brand" >
//                     <BsNavLink route="/" title="Laycon Muriziq" />
//                </NavbarBrand>
//                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
//                <Collapse isOpen={!collapsed} navbar>
//                     <Nav navbar>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="/" title="Home" />              
//                     </NavItem>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="/about" title="About" />
//                     {/* <NavLink href="/about">About</NavLink> */}
//                     </NavItem>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="/portfolios" title="Portfolios" />
//                     {/* <NavLink href="/portfolios">Portfolios</NavLink> */}
//                     </NavItem>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="/blogs" title="Blogs" />
//                     {/* <NavLink href="/blogs">Blogs</NavLink> */}
//                     </NavItem>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="/cv" title="Resume" />
//                     {/* <NavLink href="/cv">Resume</NavLink> */}
//                     </NavItem>
//                     <NavItem className="port-navbar-item">
//                          <BsNavLink route="https://github.com/LMTrain" title="GitHub" />
//                     {/* <NavLink href="https://github.com/LMTrain">GitHub</NavLink> */}
//                     </NavItem>
//                     </Nav>
//                </Collapse>
//           </Navbar>
//     </div>
//   );
// }

// export default Example;
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

  const BsNavLink = (props) => {
    const { route, title } = props;
    return (
         <Link href={route}>
              <a className="nav-link port-navbar-link"> {title}</a>
         </Link>
     )
}

export default class Example extends React.Component {
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

          return (

               <div>
                    <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
                         <NavbarBrand className="port-navbar-brand" href="/">
                         <Image src="../../static/images/linkedin1.jpg" roundedCircle fluid />
                         {/* <Circle r={50} fill={{url:'https://lmtrain.github.io/lm-images/assets/images/futurecar17.jpg'}} stroke={{color:'white'}} strokeWidth={2} /> */}
                              Laycon Muriziq
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
                                   <NavItem className="port-navbar-item">
                                             <BsNavLink route="https://github.com/LMTrain" title="GitHub" />                 
                                   </NavItem>
                              
                              </Nav>           
                         </Collapse>
                    </Navbar>
               </div>
          );

     }
}
  
