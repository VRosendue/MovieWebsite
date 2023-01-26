import React from "react";
import {Modal, Button, FormGroup, FormControl, ModalFooter, FormLabel} from 'react-bootstrap';
import './Login.css';


//Keycloak authorization
//Firebase


class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.email, this.state.password);
    }

    render() {
        return (
        <div>
            <div className={`overlay ${this.props.show ? 'visible' : 'hidden'}`}></div>
        <Modal show={true} onHide={this.props.onHide} className="center-modal">
            <Modal.Header>
             <Modal.Title>Login</Modal.Title>
             </Modal.Header>
               <Modal.Body>
                 <form onSubmit={this.handleSubmit}>
                     <FormGroup>
                         <FormLabel>Email</FormLabel>
                         <FormControl type="email" onChange={this.handleEmailChange} value={this.state.email}/>
                     </FormGroup>
                     <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
                     </FormGroup>
                    <Button type="submit">Login</Button>
                 </form>
                
            </Modal.Body>
            <Modal.Footer>
                <button onClick={this.props.onHide}> Cancel</button>
                
            </Modal.Footer>

        </Modal>
        </div>
        );
    }
}

export default LoginModal;