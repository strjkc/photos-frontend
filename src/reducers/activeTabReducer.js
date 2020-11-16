const activeTabReducer = (state = '', action) => {
    switch(action.type){
        case 'FEATURED':
            return 'featured'
        case 'OVERVIEW':
            return 'overview'
        case 'EQUIPMENT':
            return 'equipment'
        case 'ABOUT':
            return 'about'
        case 'LOGIN':
            return 'login'
        case 'UPLOAD':
            return 'upload'
        default:
            return state
    }
}

export const setActive = (content) => {
    return {
        type: content.toUpperCase()
    }
} 

export default activeTabReducer