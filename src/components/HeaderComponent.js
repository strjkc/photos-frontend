import React, {useState} from 'react'
import './headerComponent.css'
import Image from 'react-bootstrap/Image'
import avatar from '../images/IMG_20200908_123323_193-01.jpeg'


const HeaderComponent = ({setUser, login}) => {

    const [loginText, setLoginText] = useState(false)

    
    
    const handleLoginClick = () => {
        login.setDisplayLogin(!login.displayLogin)
        setLoginText(!loginText)
    }


  
    return(
        <div className='header-container'>
            <div className='avatar-container'>
                <Image roundedCircle src={avatar} width='70px' height='70px' id='avatar' alt='my picture'></Image>
            </div>
            <div className='title-container'>
                <h1>Strahinja's Gallery</h1>
                <p>by me for me (and you, the visitor, I guess <span><i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i></span> )</p>
            </div>
            <div className='login-container'>
                <button className='button-login'  onClick={handleLoginClick} id='login' type='button'>
                    Log in
                </button>
            </div>
        </div>
    )
}

export default HeaderComponent