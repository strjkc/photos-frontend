import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setActive} from '../reducers/activeTabReducer'
import {removeUser} from '../reducers/userRedurcer'

const styles = StyleSheet.create({
    //TODO: fix color
    wrapper: {
        display: 'flex',
        width: '100%',
        padding: '20px 0',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#E5E5E5',
        backgroundColor: '#1F201D',
        borderRadius: '10px'
    },
    descriptionWrapper: {
        width: '70%',
        padding: '10px',
        border: 'solid white 1px',
        borderRadius: '5px'
    }, 
    formStyle: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#E5E5E5',
        backgroundColor: '#1F201D',    
    },
    formChildren: {
        margin: '15px 0'
    },
    title: {
        fontSize: '20px'
    },
    checkBoxWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkBox: {
        margin: '0 5px'
    },
    inputField: {
        height: '200px',
        width: '100%',
        outline: 'none',
        border: 'none',
        resize: 'none',
        backgroundColor: '#1F201D',
        borderRadius: '5px',
        color: '#E5E5E5'
    },
    inputFiledPlaceholder:{
        "::placeholder": {
            color: '#E5E5E5'
        }
    },
    inputFieldFocus: {
        ":focus": {
            color: '#E5E5E5'
        }
    },
    button: {
        width: '10%',
        backgroundColor: '#333630',
        tableLayout: 'fixed',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        color: '#E5E5E5',
        margin: '0',
        padding: '5px',
    },
    buttonHover: {
        ':hover': {
            background: 'radial-gradient(circle, rgba(241,194,65,1) 0%, rgba(235,172,0,1) 100%)',
            borderRadius: '5px',
            color: 'black',
    }
    }
})

const UploadComponent = ({description, setDescription, uploadPhoto, setImage, isFeatured, setIsFeatured}) => {
    const history = useHistory()
    const imageInput = React.useRef()
    const checkBoxInput = React.useRef()
    const dispatch = useDispatch()

    const logOut = () => {
        window.localStorage.removeItem('user')
        history.push('/featured')
        dispatch(setActive('featured'))
        dispatch(removeUser)
    }

    const dumb = async (e) => {
        e.preventDefault()
        console.log('target now',e.target.input)
        await uploadPhoto()
        imageInput.current.value = ''
        checkBoxInput.current.checked = false
        setIsFeatured(false)
        setImage(null) 
        setDescription('') 
    }

    return(
    <div className={css(styles.wrapper)}>
        <h3 className={css(styles.title)}>Upload Photo</h3>
        <form onSubmit={dumb} className={css(styles.formStyle)}>
          <input ref={imageInput}type='file' className={css(styles.formChildren)} onChange={({target}) => setImage(target.files[0])}></input>
          <div className={css(styles.descriptionWrapper)}>
            <textarea type='text' className={css(styles.inputField, styles.inputFieldFocus, styles.inputFiledPlaceholder)} placeholder='Describe the photo' value={description} onChange={({target}) => setDescription(target.value)}></textarea>
              <div className={css(styles.formChildren, styles.checkBox)}>
                <label for='upload-checkbox' className={css(styles.checkBox)} >Is featured</label>
            <input ref={checkBoxInput} type='checkbox' id='upload-checkbox' onChange={(e) => setIsFeatured(!isFeatured)}></input>
              </div>
          </div>
            <button type='submit' className={css(styles.button, styles.buttonHover, styles.formChildren)}>Upload</button>
          </form>
          <button className={css(styles.button, styles.buttonHover)} onClick={logOut}>Log out</button>
    </div>
        
    )
}

export default UploadComponent 