import photoServices from '../utils/services'

const photosReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return action.data
        case 'UPDATE_ALL':
            return state.filter(photo => photo.id !== action.data)
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
        await photoServices.deletePhoto(id)
        dispatch(
            {
                type: 'UPDATE_ALL',
                data: id
            }
        )
    }
}

export default photosReducer