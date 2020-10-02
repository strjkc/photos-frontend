import React, {useState} from 'react'
import './headerComponent.css'
import './NavBar'
import NavBar from './NavBar'


const HeaderComponent = ({setUser, children, login}) => {

  
    return(
        <div className='header-container'>
            <div className='title-container'>
                <h1>Strahinja's Gallery</h1>
                <p>by me for me (and you, the visitor, I guess <span><i className="em em-slightly_smiling_face" aria-label="SLIGHTLY SMILING FACE"></i></span> )</p>
            </div>
            <div className='login-container'>
                {children}
            </div>
        </div>
    )
}

export default HeaderComponent