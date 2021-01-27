import React,{useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {setPhoto} from '../reducers/fullImageReducer'
import {useDispatch} from 'react-redux'

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        margin: '50px 0 50px 0',
        boxSizing: 'border-box',
        transition: 'ease-in 400ms',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.15)'
    },
    image: {
        width: '100%',
        height: '100%',
        display: 'block',
        transition: '400ms'
    },
    imageHover: {
            transform: 'scale(1.08)',
            transition: '400ms',
            zIndex: '0'
    },
})

const ImageComponent = ({photo, children}) => {
    const [containerHovered, setContainerHovered] = useState(false)
    const dispatch = useDispatch()

    const handleImageClick = () => {
        dispatch(setPhoto(photo))    
    }
    return(
        <div onMouseOver={() => setContainerHovered(true)} onMouseLeave={() => setContainerHovered(false)} className={css(styles.imageContainer)}>
            {children}
            <img className={containerHovered ? css(styles.imageHover, styles.image) : css(styles.image)} src={photo.small} alt='overview' onClick={handleImageClick}></img>
        </div>
    )
}

export default ImageComponent
