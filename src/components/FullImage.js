import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import services from '../utils/services'

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
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        zIndex: '5',
        backgroundColor: 'gray'
    },
    download:{
        position: 'absolute',
        top: '5px',
        right: '10px',
        fontSize: '20px',
        color: 'white'
    }
})

const FullImage = ({displayFullImage, setDisplayFullImage}) => {
    const handleDismiss = (e) => {
        console.log('fulliamgetarget', e.target.className)
        if (typeof e.target.className === 'string')
            if (e.target.className.includes('modalContainer'))
                setDisplayFullImage(null)
    }
    const handleDownload = () => {
        services.download(displayFullImage.id, displayFullImage.name)
    }
    return(
        <div onClick={handleDismiss} className={css(styles.modalContainer)}>
            <div className={css(styles.wrapper)}>
                <FontAwesomeIcon onClick={handleDownload} icon={faArrowAltCircleDown} className={css(styles.download)}><div className='thisclass'></div></FontAwesomeIcon>
                <img className={css(styles.image)} src={displayFullImage.name} alt='fullscreenImage'></img>
            </div>
        </div>
    )
}

export default FullImage