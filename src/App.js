import {useState, useEffect, useCallback, useContext, useRef, useMemo} from 'react'
import {Button} from 'react-bootstrap';
import './App.css'
import 'bootstrap/scss/bootstrap.scss';

const Home = () => {

  const [sample, setSample] = useState();

  useEffect(() => {
    
  },[])

  return(
    <div className='home'>
      <div className='topbar'>
        <h2>#wheresthepartytonight?!</h2>
        <Button variant="success">Success</Button>{' '}
      </div>
    </div>
  )
}

export default Home;