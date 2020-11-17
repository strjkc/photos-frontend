import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import {displayLogin} from '../../reducers/loginReducer'


const NavItem = ({text, button}) => {
    const [randomNumber, setRandom] = useState(0)
    const underbarColors = ['#c86464', '#6464c8', '#96FAFA']
useEffect(() => setRandom(Math.floor(Math.random() * Math.floor(underbarColors.length))))
    const styles = StyleSheet.create({
    navItem: {
        padding: '3px',
        boxSizing: 'border-box',
        textDecoration: 'none',
        color: 'white',
        justifySelf: 'center',
        alignSelf: 'center',
        textAlign: 'center',
    },
    navItemHover: {
        ':hover': {
            textShadow: '0px -2px 0px #000000, 0 0 5px rgba(255, 255, 255, 0.8), 0 -4px 15px rgba(255, 255, 255, 0.5)'
        }
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
        underbar: {
        width: '0',
        height: '5px',
        background: 'rgba(100, 100, 200, 0)',
        transition: '0.5s ease',
        webkitTransition: '0.5s ease'
      },
      underbarFeat: {            
        width: '95%',
        justifySelf: 'center',
        height: '5px',
        transition: '0.5s ease',
        background: underbarColors[randomNumber]
      
      },
      login:{
        backgroundColor: 'inherit',
        border: 'none',
        outline: 'none' 
    },    
})

    let displayedText = ''
    if (!button)
        displayedText = text.charAt(0).toUpperCase() +  text.slice(1)
    const dispatch = useDispatch()
    const [hovered, setHovered] = useState('')
    const handleClick = (e) => {
        dispatch(setActive(e.target.id))
     }
     const state = useSelector(store => store.activeTab)
     const handleLoginClick = (e) => {
        dispatch(displayLogin())
    }

    return(
        <div className={css(styles.item)}>
            {    
                button ?
                    <button role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.login, styles.navItemHover, styles.navItem)}  onClick={handleLoginClick} id='login' type='button'>Log in</button>
                :   <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id={text} onClick={handleClick} to={`/${text}`}>{displayedText}</Link>
            }
            <div role='nav-underline' className={state === text  ? css(styles.underbarFeat) : hovered === text ? css(styles.underbarFeat) : css(styles.underbar)}></div>
        </div>
        )
}

export default NavItem