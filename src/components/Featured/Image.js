import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const style = StyleSheet.create({
    imageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: '100%',
        borderRadius: '10px',
        zIndex: '5',
        boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.15)'

    },
    imgStyle: {
        width: '100%',
        height: '85%',
        borderRadius: '10px 10px 2px 2px'
    }

})
const Image = ({photo}) => {
    return(
        <div className={css(style.imageWrapper)}>
            <img className={css(style.imgStyle)} src={photo.medium} alt={photo.description}></img>
            neki text
        </div>

            )
}

export default Image
