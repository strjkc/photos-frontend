import React from 'react'
import './footerComponent.css'
const FooterComponent = () => {
    const footerStyle={
        width:'70%',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div className='footer-container' style={footerStyle}>
            <p>powered by:</p>
            <div className='footer-images-container'>
            </div>
        </div>
    )
}

export default FooterComponent