import {useState, useEffect, useCallback, useContext, useRef, useMemo} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormFeedback, FormGroup, FormText, Input, InputGroup, InputGroupText, Label, NavLink } from 'reactstrap';
import './SignupPopup.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignupPopup = (props) =>{

    const[showModal, setShowModal] = useState(props.showModal)
    const [formData, setFormData] = useState({
        name: '',
        dob: new(Date),
        email: '',
        password: '',
        contact: ''
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const closePopup = () =>{
        setShowModal(false)
        props.toggleShowSignupPopup()
    }

    const switchToLoginPopup = () =>{
        closePopup()
        props.triggerLoginPopup()
    }

    return(
        <Modal className='login-popup-modal' isOpen={showModal} fullscreen='md' size='md'>
            <ModalHeader className='login-popup-header' toggle={closePopup}>
                SignUp
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='name'>Name</Label>
                        <Input type='text' name='name' required={true}/>
                        {/* <FormText>Please enter your registered email id.</FormText>
                        <FormFeedback valid>Sweet! This name is available</FormFeedback>
                        <FormFeedback invalid="true">Oh no! This name is already taken</FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='dob'>Date of Birth</Label>
                        <Input type='date' name='dob' required={true}/>
                    </FormGroup> 
                    <FormGroup>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='text' name='email' required={true} onChange={handleChange} placeholder='name@example.com'/>
                        <FormText>Please enter your registered email id.</FormText>
                        {/* <FormFeedback valid>Sweet! This name is available</FormFeedback>
                        <FormFeedback invalid="true">Oh no! This name is already taken</FormFeedback> */}
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password</Label>
                        <Input type='password' name='password' onChange={handleChange} required={true}/>
                        <FormText>Please enter your password.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='contact'>Contact Number</Label>
                        <Input className='signup-form-contact-number' type='number' name='contact' onChange={handleChange} required={true}/>
                    </FormGroup> 
                </Form>
            </ModalBody>
            <ModalFooter>
                <Form className='footer-container'>
                    <FormGroup className='footer-action-buttons'>
                        <Button color='danger' onClick={closePopup} children='Close'/>&nbsp;
                        <Button color='success' children='Submit' type='submit'/>
                    </FormGroup>
                    <FormGroup>
                        <FormText className='signup-navlink-footnote'>Already signed up?<NavLink style={{color:'purple', cursor:'pointer'}} onClick={switchToLoginPopup}>LogIn</NavLink></FormText>
                    </FormGroup>
                </Form>
            </ModalFooter>
        </Modal>
    )
}

export default SignupPopup;