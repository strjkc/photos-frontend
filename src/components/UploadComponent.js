import React, {useRef, useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setActive} from '../reducers/activeTabReducer'
import {removeUser} from '../reducers/userRedurcer'
import services from '../utils/services'
import {fetchPhotos} from '../reducers/photosReducer'

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

const UploadComponent = () => {
    const history = useHistory()
    const imageRef = useRef()
    const checkBoxRef = useRef()
    const [image, setImage] = useState(null)
    const [isFeatured, setIsFeatured] = useState(false)
    const [description, setDescritpion] = useState('')
    const dispatch = useDispatch()


    const logOut = () => {
        window.localStorage.removeItem('user')
        history.push('/featured')
        dispatch(setActive('featured'))
        dispatch(removeUser())
    }
    const upload = async () => {
        const formData = new FormData()
        formData.append('image', image)
        formData.append('description', description)
        formData.append('isFeatured', isFeatured)
        console.log(formData.entries())
        await services.postPhoto(formData)
        dispatch(fetchPhotos())
    }
    const resetValues = () => {
        setIsFeatured(false)
        setImage(null) 
        imageRef.current.value = null
        checkBoxRef.current.checked = false
        setDescritpion('')
    }

    const dumb = async (e) => {
        e.preventDefault()
        await upload()
        resetValues()
}

    return(
    <div className={css(styles.wrapper)}>
        <h3 className={css(styles.title)}>Upload Photo</h3>
        <form onSubmit={dumb} className={css(styles.formStyle)}>
          <input ref={imageRef} type='file' className={css(styles.formChildren)} onChange={(e) => setImage(e.target.files[0])} ></input>
          <div className={css(styles.descriptionWrapper)}>
            <textarea type='text' className={css(styles.inputField, styles.inputFieldFocus, styles.inputFiledPlaceholder)} placeholder='Describe the photo' value={description} onChange={(e) => setDescritpion(e.target.value)}></textarea>
              <div className={css(styles.formChildren, styles.checkBox)}>
                <label htmlFor='upload-checkbox' className={css(styles.checkBox)} >Is featured</label>
            <input ref={checkBoxRef} type='checkbox' id='upload-checkbox' value={isFeatured} onChange={() => setIsFeatured(!isFeatured)} ></input>
              </div>
          </div>
            <button type='submit' className={css(styles.button, styles.buttonHover, styles.formChildren)}>Upload</button>
          </form>
          <button className={css(styles.button, styles.buttonHover)} onClick={logOut}>Log out</button>
    </div>
        
    )
}

export default UploadComponent 