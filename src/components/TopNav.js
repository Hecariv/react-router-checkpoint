import React, {Component} from 'react'
import {Link, withRouter} from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Example extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/login">ProfileHub</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {this.props.location.pathname === "/profile" ? (
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link to={"/login"} className="nav-link">Logout</Link>
                                    </NavItem>
                                </Nav>
                        ) : (
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to={"/login"} className="nav-link">Login</Link>
                                </NavItem>
                                <NavItem>
                                    <Link  to={"/signup"} className="nav-link">Signup</Link>
                                </NavItem>
                            </Nav>
                        )}

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(Example)