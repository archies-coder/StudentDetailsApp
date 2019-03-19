import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

export default class AppNav extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand>
              <Link className='navbar-brand' to= '/'>
                ScHoOl
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className='nav-link' to='/list'>
                      Students
                    </Link>
                </NavItem><NavItem>
                    <Link className='nav-link' to='/add'>
                      Add
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/register'>
                      Register
                    </Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/login'>
                      Login
                    </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
