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
            width: '50%',
            height: '80%',
            position: 'absolute',
            zIndex: '0',
            right: '370px',
            transitionDuration: '1s',
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        description: {
            display: display ? 'block' : 'none',
            color: 'black',
            height: '100%',
            width: '45%',
        },
        slideOut: {
            transform: 'translate(300px)',
            transitionDuration: '1s'
        },
        animateText: {
            animationName: fadeIn,
            animationDuration: '1.7s'
        }
    })
    console.log('d',display)
    return(
        <div className={display ? css(style.descriptionContainer, style.slideOut) : css(style.descriptionContainer) }>
            <p className={css(style.description, style.animateText)}>{description}</p>
            <div style={{position: 'relative', width:'30px', height: '30px', right: '1px'}}>
                <FontAwesomeIcon icon={faArrowCircleLeft} style={{color: 'black', height:'100%', transition:'width 1s', position:'absolute', right:'1px', zIndex: '5'}} onClick={() => setDisplayDesc(!display)}></FontAwesomeIcon>            
            </div>
        </div>
    )
}

export default InfoCard