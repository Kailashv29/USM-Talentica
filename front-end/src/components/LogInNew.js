import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
//import { login } from "../actions/loginUser";
import { usersFetchData, login } from "../actions/userActions";
import UserTable from "./UserTable";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleLogIn = event => {
    event.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password
    });
  };
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.loginHasErrored) {
      return <p>Sorry! There was an error log in </p>;
    }
    if (this.props.isLoginLoading) {
      return <p>Loading…</p>;
    }

    if (
      this.props.logedInUser.hasOwnProperty("isLogedIn") &&
      this.props.logedInUser.isLogedIn
    ) {
      return <UserTable logedInUser={this.props.logedInUser} />;
    }
    return (
      <div>
        <Container className="App">
          <h3>Log In To continue</h3>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  required
                  placeholder="myemail@email.com"
                  value={this.state.email}
                  onChange={this.handleChangeEmail}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </FormGroup>
            </Col>

            <Button color="success" onClick={this.handleLogIn}>
              Log in
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logedInUser: state.logedInUser,
    loginHasErrored: state.loginHasErrored,
    isLoginLoading: state.loginLoading,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //bindActionCreators({login,usersFetchData},dispatch)
    loginUser: user => dispatch(login(user)),
    fetchData: () => dispatch(usersFetchData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
