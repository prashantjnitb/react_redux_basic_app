import React from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './header.css'
import { clearSession } from '../../_redux/AuthActions'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.clearUserSession = this.clearUserSession.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  clearUserSession = (event) => {
    this.props.dispatch(clearSession());
  }

  render() {
    const { current_user } = this.props
    const location = window.location ? window.location : {pathname: ""};
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand tag={Link} to="/">React App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {(current_user===null || current_user===undefined) && (
              <Nav className="ml-auto" navbar>
                { !(location.pathname==="/users/sign_in") && ( 
                  <NavItem>
                    <NavLink tag={Link} to="/users/sign_in">Login</NavLink>
                  </NavItem>
                )}
                { !(location.pathname==="/users/sign_up") && ( 
                <NavItem>
                  <NavLink tag={Link} to="/users/sign_up">Signup</NavLink>
                </NavItem>
                )}
              </Nav>
            )}
            {(current_user!==null && current_user!==undefined) && (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <a className="nav-link cursor_pointer" onClick={this.clearUserSession}>Logout</a>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
        { current_user && (
          <div className="alert alert-success">
            <strong>Success!</strong> You have logged in successfully.
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
 current_user: state.auth.current_user,
})

export default connect(mapStateToProps)(Header);