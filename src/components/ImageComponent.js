import React,{useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {setPhoto} from '../reducers/fullImageReducer'
import {useDispatch} from 'react-redux'
import { useSpring, animated } from 'react-spring'

const styles = StyleSheet.create({
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        margin: '50px 0 50px 0',
        boxSizing: 'border-box',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.15)'
    },
    image: {
        width: '100%',
        height: '100%',
        display: 'block',
    },
    imageHover: {
            transform: 'scale(1.08)',
            transition: '400ms',
            zIndex: '0'
    },
})

const ImageComponent = ({photo, children}) => {
    const fadeIn = useSpring({opacity: 1, from: {opacity: 0.3}, config: {duration: 500}})
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [containerHovered, setContainerHovered] = useState(false)
    const dispatch = useDispatch()
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.07]
    const trans = (x, y, s) => `perspective(2000px)  scale(${s})`

    const handleImageClick = () => {
        dispatch(setPhoto(photo))    
    }
    
    return(
        <animated.div class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }} className={css(styles.imageContainer)}>
            {children}
            <animated.img style={fadeIn} className={css(styles.image)} src={photo.small} alt='overview' onClick={handleImageClick}></animated.img>
        </animated.div>
    )
}

export default ImageComponent
