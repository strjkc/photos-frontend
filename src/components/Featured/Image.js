import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const style = StyleSheet.create({
    imageWrapper: {
        display: 'flex',
        width: '70%',
        height:'100%',
        borderRadius: '10px',
        position: 'relative',
        zIndex: '5'
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: '10px'
    }
})
const Image = ({photo}) => {
    return(
        <div className={css(style.imageWrapper)}>
            <img className={css(style.imgStyle)} src={`/${photo.name}`} alt={photo.description}></img>
        </div>

            )
}

export default Image