import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {faTrashAlt, faStar} from '@fortawesome/free-solid-svg-icons'
import {useSelector, useDispatch} from 'react-redux'
import {updatePhotosArray, updateIsPhotoFeatured} from '../../reducers/photosReducer'
import EditButton from './EditButton'

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
        }
    })
    return(
        <div className={css(styles.container)}>
            <EditButton icon={faTrashAlt} funk={removePhoto} photo={photo} user={user} isFavoriteButton={false} />
            <EditButton icon={faStar} funk={toggleFeatured} photo={photo} user={user} isFavoriteButton={true} />
        </div>
    )
}

export default EditComponent