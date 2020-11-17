import React, { useState } from 'react'
import InfoCard from './InfoCard'
import {StyleSheet, css} from 'aphrodite'
import Image from './Image'
const style = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        width: '100%',
        scrollSnapAlign: 'center',
    }      
})

const FeaturedImage = ({photo}) => {
    const [displayDesc, setDisplayDesc] = useState(false)
    return (
        <div key={photo.id} className={css(style.itemContainer)}> 
            <Image photo={photo} displayDesc={displayDesc} setDisplayDesc={setDisplayDesc}/>
            <InfoCard description={photo.description} display={displayDesc} setDisplayDesc={setDisplayDesc}/>
        </div>)
}

export default FeaturedImage