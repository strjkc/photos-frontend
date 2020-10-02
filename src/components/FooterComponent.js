import React from 'react'
import './footerComponent.css'
const FooterComponent = () => {
    const footerStyle={
        width:'100%',
        display: 'flex',
        justifyContent: 'space-between'
    }

    return(
        <div className='footer-container' style={footerStyle}>
            <div >
                <p>Source:</p>
                <div className='source'>
                    <p><a href='https://github.com/strjkc/photos-frontend'>frontend</a></p>
                    <p><a href='https://github.com/strjkc/photos'>backend</a></p>
                </div>
            </div>
            <div>
                <p>&copy; Strahinja Jokic</p>
            </div>
        </div>
    )
}

export default FooterComponent