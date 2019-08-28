import {
  Container, Row, Col, Form, FormGroup, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem, Jumbotron, Label, Alert,
} from 'reactstrap';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

// CommonJS
//const Swal = require('sweetalert2');
import SweetAlert from 'sweetalert2-react';
import Menu from '../Menu/Menu';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Header from './Header';
import React, { Fragment, Component } from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      loginSuccess: 0,
    };

  }

  onShowAlert = () => {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false })
      }, 2000)
    });
  }

  handleClick = () => {
    const user = this.state.user;
    const pass = this.state.pass;
    console.log(user);
    console.log(pass);
    if (user == "martin123" && pass == "admin") {
      console.log("Entro");
      this.setState({ loginSuccess: 1 });
    } else {
      console.log("No Entro");
      this.setState({ loginSuccess: 2 });

    }
  };

  render() {
    let { location } = this.props;

    return (
      <Router>
        <div>
          <Switch location={this.props.location}>
            <Route exact path="/" component={this.Home} />
            <Route path="/menu" component={Menu}></Route>
          </Switch>
        </div>
      </Router>

    );

  }

  renderComp = () => {
    if (this.state.loginSuccess === 1) {
      return (<Redirect to="/menu"></Redirect>);
    } else if (this.state.loginSuccess === 2) {
      let timerInterval
      Swal.fire({
        title: 'Datos Incorrectos',
        html: 'Esto deberia ser una alerta pero weno xd',
        timer: 700,
        onBeforeOpen: () => {
          Swal.showLoading()
         
        },
        onClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
    }
    this.state.loginSuccess=0;
  }

  Home = () => {
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
                      <Input type="email" name="email" id="usuario" onChange={(event) => { this.setState({ user: event.target.value }) }} placeholder="Ingrese su usuario"></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="contraseña" sm={2}>Contraseña:</Label>
                    <Col sm='10'>
                      <Input type="password" name="password" id="contraseña" onChange={(event) => this.setState({ pass: event.target.value })} placeholder="Ingrese su contraseña"></Input>
                    </Col>
                  </FormGroup>
                  <Row style={{ paddingTop: 30, paddingBottom: 30 }}>
                    <Col sm="5"></Col>
                    <Col sm="2">
                      <Button label="Submit" className="btn-success" primary={true} onClick={this.handleClick}>Submit</Button>
                    </Col>
                  </Row>
                  {this.renderComp()}
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
}


export default Login;

/* <Link to="/menu">Submit</Link> */