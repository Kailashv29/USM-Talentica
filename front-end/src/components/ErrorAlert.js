import React from "react";
import { Alert, Button } from "reactstrap";

class ErrorAlert extends React.Component {
  render() {
    return (
      <div>
        <Alert color="danger">
          Invalid Password or Email !
          <Button
            className="btn btn-info float-right"
            onClick={this.props.showErrorMessage}
          >
            Ok
          </Button>
        </Alert>
      </div>
    );
  }
}
export default ErrorAlert;
