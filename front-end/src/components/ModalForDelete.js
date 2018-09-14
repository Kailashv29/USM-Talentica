import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalForDelete extends React.Component {
 
  render() {
    return (
      <div>
        
          <ModalHeader>Information </ModalHeader>
          <ModalBody>
           User has been sucessfully deleted !
          </ModalBody>
          <ModalFooter>           
            <Button color="primary" onClick={this.props.toggle}>Ok</Button>
          </ModalFooter>
       
      </div>
    );
  }
}

export default ModalForDelete;

