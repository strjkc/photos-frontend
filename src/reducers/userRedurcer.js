const userReducer = (state = null, action) => {
    switch(action.type){
        case 'SET':
            return action.data
        case 'REMOVE':
            return null
        default:
            return state
    }
}

export const setUser = (content) => {
    return {
        type: 'SET',
        data: content
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE'
    }
}

export default userReducer