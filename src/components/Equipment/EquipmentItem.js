import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
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

const EquipmentItem = ({img, alt, text}) => {
    return (
        <div className={css(styles.elementContainer)}>
            <div className={css(styles.imageContainer)}>
                <img className={css(styles.image)} src={img} alt={alt}></img>
            </div>
            <p className={css(styles.text)}>{text}</p>
        </div>
    )
}

export default EquipmentItem