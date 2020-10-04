import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 0'
    },
    elementContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: '10px'
    },
    imageContainer: {
        justifySelf: 'center',
        alignSelf: 'center',
        height: '100%',
        width: '50%',
        backgroundColor: '#333630',
        padding: '5px',
        boxSizing: 'border-box'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        width: '40%',
        textAlign: 'justify',
        justifySelf: 'center',
        alignSelf: 'center',
        color: '#E5E5E5',
        backgroundColor: '#1F201D',
        padding: '10px',
        borderRadius: '5px'
    }
})
const Equipment = () => {
    return (
        <div className={css(styles.wrapper)}>
            <div className={css(styles.elementContainer)}>
                <div className={css(styles.imageContainer)}>
                    <img className={css(styles.image)} src='/standard/camera.jpg' alt='camera'></img>
                </div>
                <p className={css(styles.text)}>Nikon D3500, with the kit lens, birthday money well wasted</p>
            </div>
            <div className={css(styles.elementContainer)}>
                <div className={css(styles.imageContainer)}>
                    <img className={css(styles.image)} src='/standard/tripod.jpg' alt='tripod'></img>
                </div>
                <p className={css(styles.text)}>This chair, used to keep the camera stable in order to capture those amazing photos of the night sky</p>
            </div>
            <div className={css(styles.elementContainer)}>
                <div className={css(styles.imageContainer)}>
                    <img className={css(styles.image)} src='/standard/prop.jpg' alt='prop'></img>
                </div>
                <p className={css(styles.text)}>This antistress wrist thing, used to prop the lens up towards the sky</p>
            </div>
        </div>
    )
}

export default Equipment