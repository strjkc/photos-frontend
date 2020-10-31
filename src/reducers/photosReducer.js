import photoServices from '../utils/services'

const photosReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return action.data
        case 'UPDATE_ALL':
            return state.filter(photo => photo.id !== action.data)
        case 'TOGGLE_FEATURED':
            return state.map(photo => photo.id === action.data.id ? action.data : photo)
        default: 
            return state
    }
}

export const fetchPhotos = () => {
    return async dispatch => {
        const photos = await photoServices.getPhotos()
        dispatch({
        type: 'ADD',
        data: photos
    })
}
}

export const updatePhotosArray = id => {
    return async dispatch => {
        photoServices.deletePhoto(id)
        dispatch(
            {
                type: 'UPDATE_ALL',
                data: id
            }
        )
    }
}

export const updateIsPhotoFeatured = photo => {
    return async dispatch => {
        photoServices.updatePhoto(photo)
        const newPhoto = {...photo, isFeatured: !photo.isFeatured}
        dispatch({
            type: 'TOGGLE_FEATURED',
            data: newPhoto
        })
    }
}

export default photosReducer