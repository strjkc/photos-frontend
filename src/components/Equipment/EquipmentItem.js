import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import NavItem from '../Nav/NavItem'

const styles = StyleSheet.create({
    elementContainer: {
        width: '64%',
        height: '274px',
        margin: '0px 0 0 0',
        display: 'flex',
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

const EquipmentItem = ({img, alt, text}) => {
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
            <div className={css(styles.dotsWrapper)}>
                <NavItem passedColor={'rgba(39, 187, 229)'} text={''} button={false} />
                <NavItem passedColor={'rgba(39, 187, 229)'} text={''} button={false} />
                <NavItem passedColor={'rgba(39, 187, 229)'} text={''} button={false} />
                <NavItem passedColor={'rgba(39, 187, 229)'} text={''} button={false} />
            </div>
        </>
    )
}

export default EquipmentItem