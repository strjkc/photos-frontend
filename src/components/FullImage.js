import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from '../utils/services'
import { useSelector, useDispatch } from 'react-redux'
import {removePhoto} from '../reducers/fullImageReducer'

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        height: '90%',
        width: '70%',
    },
    image: {
        height: '100%',
        width: '100%'
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        zIndex:'100',
        height: '100%', 
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 

    },
    download:{
        position: 'absolute',
        top: '5px',
        right: '10px',
        fontSize: '20px',
        color: 'white'
    }
})

const FullImage = () => {
    const image = useSelector(store => store.fullImage)
    const dispatch = useDispatch()

    const handleDismiss = (e) => {
        console.log('fulliamgetarget', e.target.className)
        if (typeof e.target.className === 'string')
            if (e.target.className.includes('modalContainer'))
                dispatch(removePhoto())
    }
    const handleDownload = () => {
        services.download(image.id, image.name)
    }
    return(
        <div onClick={handleDismiss} className={css(styles.modalContainer)}>
            <div className={css(styles.wrapper)}>
                <FontAwesomeIcon onClick={handleDownload} icon={faArrowAltCircleDown} className={css(styles.download)}><div className='thisclass'></div></FontAwesomeIcon>
                <img className={css(styles.image)} src={image.name} alt='fullscreenImage'></img>
            </div>
        </div>
    )
}

export default FullImage