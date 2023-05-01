import {useState, useEffect, useCallback, useContext, useRef, useMemo} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupText, Label, NavLink } from 'reactstrap';
import './LoginPopup.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPopup = (props) => {

    const [formData, setFormData] = useState({email:'', password: ''})
    const [showModal, setShowModal] = useState(props.showModal)

    const handleLogin= (e) => {
        e.preventDefault()
        
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const closePopup = () =>{
        setShowModal(false)
        props.toggleShowLoginPopup()
    }

    const switchToSignupPopup = () =>{
        closePopup()
        props.triggerSignupPopup()
    }

    return(
        <Modal className='login-popup-modal' isOpen={showModal} fullscreen='md' size='md'>
            <ModalHeader className='login-popup-header' toggle={closePopup}>
                LogIn
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleLogin}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type='email' name='email' onChange={handleChange} required={true} placeholder='name@example.com'/>
                        <FormText>Please enter your registered email id.</FormText>
                        {/* <FormFeedback valid>Sweet! This name is available</FormFeedback>
                        <FormFeedback invalid="true">Oh no! This name is already taken</FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type='password' name='password' onChange={handleChange} required={true}/>
                        <FormText>Please enter your password.</FormText>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Form className='footer-container'>
                    <FormGroup className='footer-action-buttons'>
                        <Button color='danger' onClick={closePopup}children='Close'/>&nbsp;
                        <Button color='success' onClick={handleLogin} children='Login' type="submit"/>
                    </FormGroup>
                    <FormGroup>
                        <FormText className='signup-navlink-footnote'>Not a registered user?<NavLink style={{color:'purple', cursor:'pointer'}} onClick={switchToSignupPopup}>SignUp</NavLink></FormText>
                    </FormGroup>
                </Form>
            </ModalFooter>
        </Modal>
    )
}

export default LoginPopup;