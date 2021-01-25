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
                <h1>Gallery</h1>
            </div>
                {children}
        </div>
    )
}

export default HeaderComponent