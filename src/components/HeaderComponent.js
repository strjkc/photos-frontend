import React, {useState} from 'react'
import './headerComponent.css'
import './NavBar'
import NavBar from './NavBar'


const HeaderComponent = ({setUser, children, login}) => {

  
    return(
        <div className='header-container'>
            <div className='title-container'>
                <h1>Strahinja's Gallery</h1>
                <div className='title-underline'></div>
            </div>
            <div className='nav-container'>
                {children}
            </div>
        </div>
    )
}

export default HeaderComponent