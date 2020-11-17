import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {fadeIn, fadeOut} from 'react-animations'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({description, display, setDisplayDesc}) => {
//TODO: arrow direction, calculated info width based on image width, calculated info push in when hidden
    const style = StyleSheet.create({
        descriptionContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '35%',
            height: '85%',
            position: 'absolute',
            zIndex: '0',
            right: '27%',
            transitionDuration: '1s',
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        description: {
            display: 'block',
            color: 'black',
            height: '100%',
            width: '45%',
        },
        iconWrapper: {
            position: 'relative',
            width:'30px',
            height: '30px',
            right: '1px'
        },
        icon: {
            color: 'black',
            height:'100%',
            transition:'width 1s',
            position:'absolute',
            right:'1px',
            zIndex: '5'},
        slideOut: {
            transform: 'translate(50%)',
            transitionDuration: '1s'
        },
        animateText: {
            animationName: display ? fadeIn : fadeOut,
            animationDuration: '1.7s'
        }
    })

    return(
        <div className={display ? css(style.descriptionContainer, style.slideOut) : css(style.descriptionContainer) }>
            <p className={css(style.description, style.animateText)}>{description}</p>
            <div className={css(style.iconWrapper)}>
                <FontAwesomeIcon className={css(style.icon)} icon={faArrowCircleLeft} onClick={() => setDisplayDesc(!display)}></FontAwesomeIcon>            
            </div>
        </div>
    )
}

export default InfoCard