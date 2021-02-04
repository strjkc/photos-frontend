import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const EquipmentItem = ({img, alt, text, order}) => {

    const styles = StyleSheet.create({
        elementContainer: {
            width: '100%',
            height: '274px',
            margin: '0px 0 50px 0',
            display: 'flex',
            flexDirection: order % 2 === 0 ? 'row-reverse' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            boxShadow: '0px 4px 15px 2px rgba(0,0,0,0.15)',
            borderRadius: '10px'
        },
        imageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '50%',
            borderRadius: '10px',
        },
        image: {
            width: '80%',
            height: '80%',
        },
        text: {
            color: '#fff',
            textAlign: 'justify'
        },
        textContainer: {
            display:'flex',
            height: '100%',
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(39, 187, 229)',
            padding: '10px'
        },
        dotsWrapper:{
            height: '200px',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-around'
        }
    })

    return (
        <>
            <div className={css(styles.elementContainer)}>
                <div className={css(styles.imageContainer)}>
                    <img className={css(styles.image)} src={img} alt={alt}></img>
                </div>
                <div className={css(styles.textContainer)}>
                    <p className={css(styles.text)}>{text}</p>
                </div>
            </div>
        </>
    )
}

export default EquipmentItem