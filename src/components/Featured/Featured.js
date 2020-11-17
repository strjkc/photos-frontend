import React, {useState, useEffect, useCallback} from 'react'
import './featured.css'
import {StyleSheet, css} from 'aphrodite'
import { useSelector } from 'react-redux'
import FeaturedItem from './FeaturedItem'
import Carousel from 'react-bootstrap/Carousel'
import {useTransition, animated, config} from 'react-spring'
import FeaturedImage from './FeaturedItem'

const styles = StyleSheet.create({
    //TODO: finish style to match with css module
    container: {
        margin: '50px 0',
      
    },
    itemContainer: {
        scrollSnapType: 'x mandatory',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
        <FeaturedItem photo={photo} />
        ) 
    : <div className={css(styles.noPhotoText)}>No Featured pictures to display</div>

    return(
        <div className={css(styles.container)}>
            
                    {elements}
        </div>
    )
}

export default Featured