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