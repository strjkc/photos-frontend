import React, {useRef, useState} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import {removeUser} from '../../reducers/userRedurcer'
import services from '../../utils/services'
import {fetchPhotos} from '../../reducers/photosReducer'
import ImageBrowser from './ImageBrowser'
import Checkbox from './Checkbox'


/*
"rgba(255,66,36)"
"rgba(39,187,229)
"rgb(255,128,36)"
"rgba(255,189,36)
55,187,108
        color: 'rgb(249, 249, 249)',

*/
const styles = StyleSheet.create({
    //TODO: fix color
    wrapper: {
        display: 'flex',
        width: '64%',
        padding: '20px 0',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgb(83, 84, 84)',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: '10px',
        margin: '50px 0 0 0',
        boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.15)'
    },
    itemsMargin: {
        margin: '5px'
    },
    descriptionWrapper: {
        width: '100%',
        height: '150px',
        padding: '10px',
        backgroundColor: '#F2F2F2',
        border: 'solid #DCDCDC 1px',
        borderRadius: '5px'
    }, 
    formStyle: {
        display: 'flex',
        width: '90%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'rgb(255, 255, 255)',    
    },
    formChildren: {
        margin: '15px 0',
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBoxWrapper: {
        width: '70%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBox: {
        margin: '0 5px'
    },
    inputField: {
        height: '100%',
        width: '100%',
        outline: 'none',
        border: 'none',
        resize: 'none',
        backgroundColor: '#F2F2F2',
        borderRadius: '5px',
    },
    inputFiledPlaceholder:{
        "::placeholder": {
            color: 'rgb(83, 84, 84)'
        }
    },
    inputFieldFocus: {
        ":focus": {
            color: 'rgb(83, 84, 84)'
        }
    },
    button: {
        width: '10%',
        backgroundColor: 'rgba(55,187,108)',
        tableLayout: 'fixed',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        margin: '0',
        padding: '5px',
        color: 'white'
    },
    logoutButton: {
        width: '10%',
        tableLayout: 'fixed',
        border: 'none',
        borderRadius: '5px',
        outline: 'none',
        margin: '0',
        padding: '5px',
        backgroundColor: 'rgba(255,66,36)',
        color: 'white'
    },
    submitButtonHover: {
        ':hover': {
            background: 'rgba(55,187,108)',
            borderRadius: '5px',
            color: 'rgb(249, 249, 249)',
        }
    },
    logoutButtonHover: {
        ':hover': {
            background: 'rgba(255,66,36)',
            borderRadius: '5px',
            color: 'rgb(249, 249, 249)',

        },
    },
    buttonWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
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
        <form onSubmit={dumb} className={css(styles.formStyle, styles.itemsMargin)}>
            <ImageBrowser image={image} setImage={setImage} inheritStyles={css(styles.itemsMargin)} />
            <div className={css(styles.descriptionWrapper, styles.itemsMargin)}>
                <textarea type='text' className={css(styles.inputField, styles.inputFieldFocus, styles.inputFiledPlaceholder)} placeholder={'Description'} value={description} onChange={(e) => setDescritpion(e.target.value)}></textarea>
            </div>
            <Checkbox checkBoxRef={checkBoxRef} isFeatured={isFeatured} setIsFeatured={setIsFeatured} inheritStyles={css(styles.itemsMargin)} />
            <div className={css(styles.buttonWrapper, styles.itemsMargin)}>
                <button type='submit' className={css(styles.button, styles.submitButtonHover)}>Upload</button>
                <button className={css(styles.logoutButton, styles.logoutButtonHover)} onClick={logOut}>Log out</button>
            </div>
          </form>
    </div>
        
    )
}

export default UploadComponent 