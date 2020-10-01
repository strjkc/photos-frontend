import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import services from '../utils/services'

const EditComponent = ({user, photo}) => {
    const toggleFeatured = () => services.updatePhoto(photo.id, photo.isFeatured)
    const removePhoto = () => services.deletePhoto(photo.id)
    const styles = StyleSheet.create({
        container: {
            display: user ? 'flex' : 'none',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: '2'
        }
    })
    return(
        <div className={css(styles.container)}>
            <button onClick={toggleFeatured}>{photo.isFeatured ? 'Not Featured' : 'Featured'}</button>
            <button onClick={removePhoto}>Remove photo</button>
        </div>
    )
}

export default EditComponent