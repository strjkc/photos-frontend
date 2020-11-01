const fullImageReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_PHOTO':
            return action.data
        case 'REMOVE_PHOTO':
            return null
        default:
            return state
    }
}

export const setPhoto = (photo) => {
    return {
        type: 'SET_PHOTO',
        data: photo
    }
}

export const removePhoto = () => {
    return {
        type: 'REMOVE_PHOTO',
    }
}

export default fullImageReducer