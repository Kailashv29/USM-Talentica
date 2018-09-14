import React from "react";
import { Button, Table, Modal } from "reactstrap";
import ModalForAdd from "./ModalForAdd";
import ModalForDelete from "./ModalForDelete";
import { connect } from "react-redux";
import _ from "lodash";
import {
  logout,
  usersFetchData,
  deleteUser,
  logoutSate
} from "../actions/userActions";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAdd: false,
      modalEdit: false,
      modalDelete: false,
      selectedUser: {},
      users: this.props.users
    };
  }
  toggleAdd = () => {
    this.setState({
      modalAdd: !this.state.modalAdd
    });
  };

  toggleEdit = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  };
  toggleDelete = () => {
    this.setState({
      modalDelete: !this.state.modalDelete
    });
  };
  handleEditClick = user => {
    this.setState({
      selectedUser: user
    });
    this.toggleEdit();
  };
  handleDeletClick = user => {
    this.props.deleteData(user);
    this.setState({
      modalDelete: !this.state.modaDlelete
    });
  };
  handleLogout = event => {
    event.preventDefault();
    this.props.logoutUser(this.props.logedInUser);
    this.props.logoutUserSate(this.props.logedInUser);
  };
  componentDidMount() {
    this.props.fetchData("http://localhost:3001/api/v1/users");
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }
  handleTable = () => {
    let users = this.state.users;
    let logedInUser = this.props.logedInUser;
    _.uniqBy([users], "_id");
    return <tbody>{this.rows(users, logedInUser)}</tbody>;
  };
  handleUserAndAdmin = () => {
    if (this.props.logedInUser.role.toLowerCase() === "admin") {
      return <th> Action</th>;
    }
  };
  handleAddButton = () => {
    if (this.props.logedInUser.role.toLowerCase() === "admin") {
      return (
        <button className="btn btn-info float-left" onClick={this.toggleAdd}>
          Add User Details
        </button>
      );
    }
  };

  rows = (users, logedInUser) => {
    return users.map((user, i) => (
      <tr>
        <td>{i + 1} </td>
        <td>{user.name} </td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        {logedInUser.role.toLowerCase() === "admin" ? (
          <td>
            <Button
              color="primary"
              onClick={() => {
                this.handleEditClick(user);
              }}
            >
              Edit
            </Button>

            <Button
              color="danger"
              onClick={() => {
                this.handleDeletClick(user);
              }}
            >
              Delete
            </Button>
          </td>
        ) : null}
      </tr>
    ));
  };
  render() {
    if (this.props.hasEditErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isEditLoading) {
      return <p>Loading…</p>;
    }
    if (this.props.isLgOutErr) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.islogOutLoading) {
      return <p>Loading…</p>;
    }
    return (
      <div>
        <Modal
          isOpen={this.state.modalEdit}
          toggle={this.toggleEdit}
          className={this.props.className}
        >
          <ModalForAdd
            toggle={this.toggleEdit}
            user={this.state.selectedUser}
            update={true}
          />
        </Modal>
        <Modal
          isOpen={this.state.modalDelete}
          toggle={this.toggleDelete}
          className={this.props.className}
        >
          <ModalForDelete toggle={this.toggleDelete} />
        </Modal>
        {this.handleAddButton()}
        <Button
          className="btn btn-danger float-right"
          onClick={this.handleLogout}
        >
          Log Out
        </Button>
        <Modal
          isOpen={this.state.modalAdd}
          toggle={this.toggleAdd}
          className={this.props.className}
        >
          <ModalForAdd toggle={this.toggleAdd} user={null} update={false} />
        </Modal>

        <div>
          <Table>
            <thead>
              <tr>
                <th> S.No</th>
                <th> Name</th>
                <th> Email</th>
                <th> Role</th>
                {this.handleUserAndAdmin()}
              </tr>
            </thead>
            {this.handleTable()}
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    isEditLoading: state.userEditIsLoading,
    hasEditErrored: state.userEditHasErrored,
    isLgOutErr: state.logOutHasErrored,
    islogOutLoading: state.logOutLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(usersFetchData()),
    deleteData: user => dispatch(deleteUser(user)),
    logoutUser: user => dispatch(logout(user)),
    logoutUserSate: user => dispatch(logoutSate(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
