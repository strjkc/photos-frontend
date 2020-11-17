import React, { useState } from 'react'
import InfoCard from './InfoCard'
import {StyleSheet, css} from 'aphrodite'
import Image from './Image'

//true - deson false - levo; 
//true/false diktira je l flex-end ili flex-start
// da li je za container InfoCarda left ili right
// da li je transform translate 70% ili -70%? 
const FeaturedImage = ({photo, slideRight}) => {
    const style = StyleSheet.create({
        itemContainer: {
            display: 'flex',
            justifyContent: slideRight ? 'flex-end' : 'flex-start',
            alignItems: 'center',
            position: 'relative',
            width: '100%',
            scrollSnapAlign: 'center',
        }      
    })

    const [displayDesc, setDisplayDesc] = useState(false)
    return (
        <div key={photo.id} className={css(style.itemContainer)}> 
            <Image photo={photo} displayDesc={displayDesc} setDisplayDesc={setDisplayDesc}/>
            <InfoCard description={photo.description} slideRight={slideRight} display={displayDesc} setDisplayDesc={setDisplayDesc}/>
        </div>)
}

export default FeaturedImage