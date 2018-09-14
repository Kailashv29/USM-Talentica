import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

import { addUser, editUser } from "../actions/userActions";

class ModalForAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: this.props.user ? this.props.user.name : "",
      emailValue: this.props.user ? this.props.user.email : "",
      passwordValue: this.props.user ? this.props.user.password : "",
      roleValue: this.props.user ? this.props.user.role : ""
    };
  }

  handleChangeName = event => {
    this.setState({ nameValue: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ emailValue: event.target.value });
  };
  handleChangePassword = event => {
    this.setState({ passwordValue: event.target.value });
  };
  handleChangeRole = event => {
    this.setState({ roleValue: event.target.value });
  };
  handleAdd = event => {
    event.preventDefault();
    const name = this.state.nameValue;
    const email = this.state.emailValue;
    const role = this.state.roleValue;
    const password = this.state.passwordValue;
    const data = {
      _id: this.props.update ? this.props.user._id : null,
      name,
      role,
      email,
      password
    };
    if (!this.props.update) {
      this.props.addData(data);
      this.props.toggle();
    } else {
      this.props.editData(data);
      this.props.toggle();
    }
  };

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    if (this.props.hasEditErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isEditLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <ModalHeader toggle={this.props.toggle}>Enter Details</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={2}> Name </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={this.state.nameValue}
                  onChange={this.handleChangeName}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Role</Label>

              <Col sm={10}>
                <Input
                  type="text"
                  placeholder="Role"
                  value={this.state.roleValue}
                  onChange={this.handleChangeRole}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={this.state.emailValue}
                  onChange={this.handleChangeEmail}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Password</Label>
              <Col sm={10}>
                <Input
                  type="password"
                  placeholder="Password"
                  value={this.state.passwordValue}
                  onChange={this.handleChangePassword}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="success" onClick={this.handleAdd}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.userIsLoading,
    addedUser: state.addedUser,
    logedInUser: state.logedInUser,
    hasErrored: state.userHasErrored,
    isEditLoading: state.userEditIsLoading,
    hasEditErrored: state.userEditHasErrored
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addData: user => dispatch(addUser(user)),
    editData: user => dispatch(editUser(user))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalForAdd);
