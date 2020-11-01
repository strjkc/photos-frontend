import React,{useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {setPhoto} from '../reducers/fullImageReducer'
import {useDispatch} from 'react-redux'

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        margin: '0 0 30px 0',
        boxSizing: 'border-box',
        transition: 'ease-in 400ms'
    },
    image: {
        width: '100%',
        maxHeight: '100%',
        display: 'block',
        transition: '400ms'
    },
    imageHover: {
            transform: 'scale(1.08)',
            transition: '400ms',
            zIndex: '0'
    },
    descriptionReveal: {
            display: 'block',
           position: 'absolute',
            transition: 'ease-in',
            transitionDuration: '900ms',
            transitionDelay: '150ms',
            zIndex: '2',
            backgroundColor: 'rgba(100,100,200, 0.7)',
            width: '90%',
            borderRadius: '10px',
            height: '25%',
            padding: '5px',
            color: '#E5E5E5',
            bottom: '5px',
            left: '5%'
    },
    descritpion: {
        position: 'absolute',
        padding: '5px',
        borderRadius: '10px',

            zIndex: '-1'

    }
})

const ImageComponent = ({photo, children, setDisplayFullImage}) => {
    const [containerHovered, setContainerHovered] = useState(false)
    const dispatch = useDispatch()

    const handleImageClick = () => {
        dispatch(setPhoto(photo))    
    }
    return(
        <div onMouseOver={() => setContainerHovered(true)} onMouseLeave={() => setContainerHovered(false)} className={css(styles.imageContainer)}>
            {children}
            <img className={containerHovered ? css(styles.imageHover, styles.image) : css(styles.image)} src={photo.thumbnail} alt='overview' onClick={handleImageClick}></img>
            <p className={containerHovered ? css(styles.descriptionReveal) : css(styles.descritpion)}>{photo.description}</p>  
        </div>
    )
}

export default ImageComponent