import {
    Container, Row, Col, Form, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem
  } from 'reactstrap';

import React from 'react';

const Header =()=>(
    <header>
        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white" style={{height:80}}>
            <Container>
                <Row noGutters className="position-relative w-100 align-items-center">
                    <Col md="3">
                    </Col>
                    <Col md="6">
                        <span style={{fontFamily:"Nunito", fontSize:25, alignSelf:"auto"}}>
                            <b>Bienvenido al Sistema de Servicios de Maquinarias</b>
                        </span>
                    </Col>
                    <Col md="3">
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </header>
);

export default Header;