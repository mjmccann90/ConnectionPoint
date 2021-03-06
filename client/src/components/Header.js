import React, { useState, useContext } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { UserProfileContext } from '../providers/UserProfileProvider';
import "./Header.css"





export default function Header() {
    const { isLoggedIn, logout, isAdmin } = useContext(UserProfileContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={RRNavLink} to="/">ConnectionPoint</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn && !isAdmin && 
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/">Jobs</NavLink>
                                </NavItem>



                                {/* <NavItem>
                                    <NavLink tag={RRNavLink} to="/application">Applications</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/compatiblity" >Compatibilty</NavLink>
                                </NavItem>
                            </>
                        }

                        {isLoggedIn && isAdmin &&
                            <>

                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/managerView">ManagerView</NavLink>
                                </NavItem>



                                {/* <NavItem>
                                    <NavLink tag={RRNavLink} to="/application">Applications</NavLink>
                                </NavItem> */}
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/compatiblity">Compatiblity</NavLink>
                                </NavItem>
                            </>
                        }
                        {!isLoggedIn &&
                            <>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                    <NavItem className="logout">
                        <a aria-current="page" 
                            style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                    </NavItem>
                </Collapse>
            </Navbar>
        </div>
    );
}