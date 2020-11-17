import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {fadeIn, fadeOut} from 'react-animations'
import {faArrowCircleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({description, display, slideRight, setDisplayDesc}) => {
//TODO: arrow direction, calculated info width based on image width, calculated info push in when hidden
    const style = StyleSheet.create({
        descriptionContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '35%',
            height: '85%',
            position: 'absolute',
            zIndex: '0',
            transitionDuration: '1s',
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        positionRight:{
            right: '25%',

        },
        positionLeft: {
            left: '25%',
        },
        description: {
            display: 'block',
            color: 'black',
            height: '100%',
            width: '45%',
        },
        iconWrapper: {
            width:'30px',
            height: '30px',
        },
        icon: {
            color: 'black',
            height:'100%',
            transition:'width 1s',
            position:'absolute',
            zIndex: '5'},
        iconLeft:{
            left: '1px'            
        },
        iconRight:{
            right: '1px'
        },
        slideOut: {
            transform: slideRight ? 'translate(-70%)' : 'translate(70%)' ,
            transitionDuration: '1s'
        },
        animateText: {
            animationName: display ? fadeIn : fadeOut,
            animationDuration: '1.7s'
        }
    })

    return(
        <div className={
            display ? 
                slideRight ?  
                    css(style.descriptionContainer, style.positionLeft, style.slideOut)
                    :css(style.descriptionContainer, style.positionRight, style.slideOut)
 
            : slideRight ?
                 css(style.descriptionContainer, style.positionLeft)
                : css(style.descriptionContainer, style.positionRight)
            }>
            <p className={css(style.description, style.animateText)}>{description}</p>
            <div className={
                slideRight 
                ? css(style.iconWrapper)
            : css(style.iconWrapper)}>
                <FontAwesomeIcon className={slideRight 
                ? css(style.icon, style.iconLeft)
            : css(style.icon, style.iconRight)} icon={faArrowCircleLeft} onClick={() => setDisplayDesc(!display)}></FontAwesomeIcon>            
            </div>
        </div>
    )
}

export default InfoCard