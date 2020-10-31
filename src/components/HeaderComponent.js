import React from 'react'
import './headerComponent.css'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
   //TODO 
})

const HeaderComponent = ({children}) => {

  
    return(
        <div className='header-container'>
            <div className='title-container'>
                <h1>Strahinja's Gallery</h1>
                <div className='title-underline'></div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default HeaderComponent