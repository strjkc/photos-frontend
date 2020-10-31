import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faStar} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import {updatePhotosArray, updateIsPhotoFeatured} from '../reducers/photosReducer'

const EditComponent = ({photo}) => {
    const user = useSelector(store => store.user )
    const dispatch = useDispatch()

    const removePhoto = (photoToRemove) => {
        dispatch(updatePhotosArray(photoToRemove.id))
    }

    const toggleFeatured = (photoToRemove) => {
        dispatch(updateIsPhotoFeatured(photoToRemove))
    }

    const styles = StyleSheet.create({
        container: {
            display: user ? 'flex' : 'none',
            justifyContent: 'flex-end',
            position: 'absolute',
            zIndex: '2',
            right: '5px'
        },
        iconStyle: {
            color: 'white',
            fontSize: '20px',
            margin: '5px'
        },
        featuredIcon: {
            color: 'gold',
            fontSize: '20px',
            margin: '5px'
        },
        deleteHover: {
            ":hover": {
                color: 'red'
            }
        },
        favHover: {
            ":hover": {
                color: photo.isFeatured ? 'white' : 'gold'
            }
        },
    })
    return(
        <div className={css(styles.container)}>
            <FontAwesomeIcon className={photo.isFeatured ? css(styles.featuredIcon, styles.favHover) : css(styles.iconStyle, styles.favHover)} icon={faStar} onClick={() => toggleFeatured(photo)}></FontAwesomeIcon>
            <FontAwesomeIcon className={css(styles.iconStyle, styles.deleteHover)} icon={faTrashAlt} onClick={() => removePhoto(photo)}></FontAwesomeIcon>
        </div>
    )
}

export default EditComponent