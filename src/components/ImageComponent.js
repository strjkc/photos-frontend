import React from 'react'
//import './imageComponent.css'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        transitionDuration: '400ms',
        webkitBoxShadow: '-1px 4px 25px 0px rgba(51,54,48,1)',
        mozBoxShadow: '-1px 4px 25px 0px rgba(51,54,48,1)',
        boxShadow: '0px 0px 50px -20px rgba(51,54,48,1)',
//        backgroundColor: '#333630',
//        padding: '5px',
        margin: '0 0 30px 0',
        boxSizing: 'border-box'
    },
    imageContainerHover: {
        ':hover': {
            transform: 'scale(1.1)',
            transitionDuration: '400ms'
        }
    },
    descriptionReveal: {
        ':hover .image-description': {
            transition: 'ease-in',
            transitionDelay: '150ms',
            transitionDuration: '900ms',
            zIndex: '2',
            backgroundColor: 'rgba(51,54,48,0.7)',
            width: '98%',
            height: '25%',
            color: '#E5E5E5'
        }
    },
    descritpion: {
        padding: '5px',
        position: 'absolute',
        bottom: '0',
        zIndex: '-1',
        margin: '0',
        overflow: 'hidden',
    }
})

const ImageComponent = ({photo, children}) => {
    return(
        <div className={css(styles.imageContainer, styles.imageContainerHover, styles.descriptionReveal)}>
            {children}
            <img src={photo.thumbnail} alt='Heyyyy' style={{width: '100%',
        maxHeight: '100%',
        display: 'block'}}></img>
            <p className={`${css(styles.descritpion)} image-description`}>{photo.description}</p>  
        </div>
        
    )
}

export default ImageComponent