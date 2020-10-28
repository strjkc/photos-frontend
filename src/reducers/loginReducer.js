const loginReducer = (state = false , action) => {
    switch(action.type){
        case 'DISPLAY':
            return true
        case 'HIDE':
            return false
        default:
            return state
    }
}

export const displayLogin = () => {
    return {
            type: 'DISPLAY'
        }
}

export const hideLogin = () => {
    return {
        type: 'HIDE'
    }
}

export default loginReducer