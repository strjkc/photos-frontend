import React, { useState } from 'react'
import InfoCard from './InfoCard'
import {StyleSheet, css} from 'aphrodite'
import Image from './Image'

const FeaturedImage = ({photo, slideRight}) => {
    const style = StyleSheet.create({
        itemContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            height: '80vh',
        }      
    })

    const [displayDesc, setDisplayDesc] = useState(false)
    return (
        <div key={photo.id} className={css(style.itemContainer)}> 
            <Image photo={photo} displayDesc={displayDesc} setDisplayDesc={setDisplayDesc}/>
        </div>)
}

export default FeaturedImage