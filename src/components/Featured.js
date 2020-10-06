import React from 'react'
import './featured.css'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    container: {
        margin: '50px 0'

    },
    noPhotoText: {
        color: '#E5E5E5',
        padding: '20px 0',
        textAlign: 'center'
    }
}) 

const Featured = ({featured}) => {

    const elements = featured.length > 0 
    ? featured.map(photo =>
        <div key={photo.id} className='featured-image-container'>
            <img style={{width: '100%', height:'100%'}} src={`/${photo.name}`} alt={photo.description}></img>
            <p className='featured-image-description'>{photo.description}</p>
        </div>) 
    : <div className={css(styles.noPhotoText)}>No Featured pictures to display</div>
  
    return(
        <div className={styles.container}>
               <div className='featured-container'>
                    {elements}
                </div>
        </div>
    )
}

export default Featured