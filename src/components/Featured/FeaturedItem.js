import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import {StyleSheet, css} from 'aphrodite'
import Image from './Image'

const FeaturedImage = ({photo, slideRight}) => {
    const style = StyleSheet.create({
        itemContainer: {
            margin: '50px 0 50px 0',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '80%',
            height: '80vh',
        }      
    })

    const fadeIn = useSpring({opacity: 1, from: {opacity: 0.3}, config: {duration: 500}})
    const [displayDesc, setDisplayDesc] = useState(false)
    return (
        <animated.div style={fadeIn} key={photo.id} className={css(style.itemContainer)}> 
            <Image photo={photo} displayDesc={displayDesc} setDisplayDesc={setDisplayDesc}/>
        </animated.div>)
}

export default FeaturedImage