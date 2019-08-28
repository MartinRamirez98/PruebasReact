import React, {Fragment, Component} from 'react';
import Header from './Header';
import {
    Container, Row, Col, Form, FormGroup, Input, Button, Navbar, Nav,
    NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Label, Card
  } from 'reactstrap';

function Menu() {
        return (
            <Fragment>
            <Header></Header>
            <main className="my-5 py-5">

                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Card>
                            <h1>
                                Menu Principal
                            </h1>
                            <span>HOLA</span>
                        </Card>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </main>

            </Fragment>
                

          
        );
    }


export default Menu;