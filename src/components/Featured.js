import React from 'react'
import './featured.css'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    noPhotoText: {
        color: '#E5E5E5',
        padding: '20px 0'
    }
}) 

const Featured = ({featured}) => {

    const elements = featured.map(photo =>
        <div key={photo.id} className='featured-image-container'>
            <img style={{width: '100%', height:'100%'}} src={`/${photo.name}`} alt={photo.description}></img>
            <p className='featured-image-description'>{photo.description}</p>
        </div>
    )


    return(
        <div>
            { featured.length > 0
            ?   <div className='featured-container'>
                    {elements}
                </div>
            :   <div className={css(styles.noPhotoText)}>No Featured pictures to display</div>
        }
        </div>
    )
}

export default Featured