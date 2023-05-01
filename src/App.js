import {useState, useEffect, useCallback, useContext, useRef, useMemo} from 'react'
import {Button} from 'reactstrap';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo.png'
import LoginPopup from './components/login_component/LoginPopup';
import SignupPopup from './components/signup_component/SignupPopup';

const Home = () => {

  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const handleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup)
  }

  const handleSignupPopup = () => {
    setShowSignupPopup(!showSignupPopup)
  }

  return(
    <div className='home'>
      <div className='top-bar'>
        <span className='left-header'>
          <img src={Logo} alt='Logo' style={{width: '150px'}} />
        </span>
        <span className='main-header'>
          <h2>#wheresthepartytonight?!</h2>
        </span>
        <span className='right-header'>
         <Button id='top-bar-login-btn' color="success" onClick={handleLoginPopup}>Login / Signup</Button>{' '}
        </span>
      </div>

    {showLoginPopup &&
      <LoginPopup
        showModal={showLoginPopup}
        toggleShowLoginPopup={handleLoginPopup}
        triggerSignupPopup={handleSignupPopup}
      />
    }

    {showSignupPopup &&
      <SignupPopup
        showModal={showSignupPopup}
        toggleShowSignupPopup={handleSignupPopup}
        triggerLoginPopup={handleLoginPopup}
      />

    }
    </div>
  )
}

export default Home;