import {
  Container, Row, Col, Form, FormGroup, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Label
} from 'reactstrap';

import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './Header';
import React, { Fragment, Component } from 'react';

class Login extends Component {

  render() {
    let { location } = this.props;

    return (
      <Router>
        <div>
          <Switch location={this.props.location}>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu}></Route>
          </Switch>
        </div>
      </Router>

    );

  }
}

function Home(){
  return (
    
      <Fragment>
        <Header></Header>
        <main className="my-5 py-5">
          <Row className="position-relative w-100 align-items-right">
            <Col md='2'>
            </Col>
            <Col md="8">
              <Jumbotron>
                <Row>
                  <Col md="5"></Col>
                  <Col md="2"><Label style={{ fontSize: 25, paddingBottom: 30 }}><b>LogIn</b></Label></Col>
                  <Col md="5"></Col>

                </Row>
                <Form>
                  <FormGroup row>
                    <Label for="usuario" sm={2}>Usuario:</Label>
                    <Col sm='10'>
                      <Input type="email" name="email" id="usuario" placeholder="Ingrese su usuario"></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="contraseña" sm={2}>Contraseña:</Label>
                    <Col sm='10'>
                      <Input type="password" name="password" id="contraseña" placeholder="Ingrese su contraseña"></Input>
                    </Col>
                  </FormGroup>
                  <Row style={{ paddingTop: 30 }}>
                    <Col sm="5"></Col>
                    <Col sm="2">
                      <Button><Link to="/menu">Submit</Link></Button>
                    </Col>
                  </Row>
                </Form>
              </Jumbotron>
            </Col>
            <Col md='2'>
            </Col>
          </Row>
        </main>
      </Fragment>
    
  );
}

export default Login;
