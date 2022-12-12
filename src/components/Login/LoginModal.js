import React from "react";
import {Modal, Button, FormGroup, FormControl, ModalFooter, FormLabel} from 'react-bootstrap';




class LoginModal extends React.Component {
    render() {
        return (
        <Modal show={true} onHide={this.props.onHide}>
            <Modal.Header>
             <Modal.Title>Login</Modal.Title>
             </Modal.Header>
               <Modal.Body>
                 <form>
                     <FormGroup>
                         <FormLabel>Email</FormLabel>
                         <FormControl type="email" />
                     </FormGroup>
                     <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password"/>
                     </FormGroup>
                    <Button type="submit">Login</Button>
                 </form>
                
            </Modal.Body>
            <Modal.Footer>
                <button onClick={this.props.onHide}> Cancel</button>
                
            </Modal.Footer>

        </Modal>
        );
    }
}

export default LoginModal;