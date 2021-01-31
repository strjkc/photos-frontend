import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { useSelector } from 'react-redux'
import FeaturedItem from './FeaturedItem'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      
    },
    noPhotoText: {
        color: '#E5E5E5',
        padding: '20px 0',
        textAlign: 'center'
    }
}) 

const Featured = () => {

    const featured = useSelector(store => store.photos.filter( photo => photo.isFeatured))

    const elements = featured.length > 0 
    ? featured.map(photo =>
        <FeaturedItem photo={photo} slideRight={featured.indexOf(photo)%2} />
        ) 
    : <div className={css(styles.noPhotoText)}>No Featured pictures to display</div>

    return(
        <div className={css(styles.container)}>
            {elements}
        </div>
    )
}

export default Featured