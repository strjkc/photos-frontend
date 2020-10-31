import photoServices from '../utils/services'

const photosReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            return action.data
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

export default photosReducer