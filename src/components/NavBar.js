import React, { useState, useImperativeHandle} from 'react'
//import './nav.css'
import {Link, useLocation} from 'react-router-dom'
import {fadeIn} from 'react-animations'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
const NavBar = React.forwardRef( ({user, login}, ref) => {
    const location = useLocation()
    const [activeTabId, setActiveTabId] = useState(location.pathname.substring(1))
    const [loginText, setLoginText] = useState(false)
    const [hovered, setHovered] = useState('')

    console.log('hover', hovered)
    console.log('active',activeTabId)

    const handleClick = (e) => {
        setActiveTabId(e.target.id)
    }

    const resetTab = () => {
        setActiveTabId('featured')
    }

    useImperativeHandle(ref, () => { return {resetTab}})

    const styles = StyleSheet.create({
        navStyle: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows:'repeat(min-content)',
            backgroundColor: '#0A090B',
            borderRadius: '5px',
        },
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
        underbar: {
            width: '0',
            height: '5px',
            background: 'rgba(100, 100, 200, 0)',
            transition: '0.5s ease',
            webkitTransition: '0.5s ease'
          },
          underbarFeat: {            
            width: '95%',
            justifySelf: 'left',
            height: '5px',
            transition: '0.5s ease',
            background: '#6464c8',
          
          },
          underbarOv: {            
            width: '95%',
            justifySelf: 'left',
            height: '5px',
            transition: '0.5s ease',
            background: '#c86464',
          },
          underbarEq: {            
            width: '95%',
            justifySelf: 'left',
            height: '5px',
            transition: '0.5s ease',
            background: 'rgba(150, 250, 250, 0.5)',
          },
          underbarAb: {            
            width: '95%',
            justifySelf: 'left',
            height: '5px',
            transition: '0.5s ease',
            background: 'rgba(150, 250, 250, 0.5)',
          },
          underbarUp: {            
            width: '95%',
            height: '5px',
            transition: '0.5s ease',
            background: 'rgba(150, 250, 250, 0.5)',
          },
        displayUpload: {
            display: user !== null ? '' : 'none'
        },
        displayUploadAnim: {
            animationName: fadeIn,
            animationDuration: '1s'
        },
        fontLarge: {
            '@media only screen and (min-width: 992px)': {
                fontSize: '19px'
            }
        },
        login:{
            display: user ? 'none' : '',
            backgroundColor: 'inherit',
            border: 'none',
            outline: 'none' 
        },
        hamburger: {
            '@media only screen and (min-width: 800px)': {
                display: 'none'
            }
        },
        sidebar: {
            height: '100vh',
            width: '40vw',
            backgroundColor: 'green'
        },
        navElements: {
            '@media only screen and (max-width: 800px)': {
                display: 'none'
            }
        }
        
    })
        
    const handleLoginClick = (e) => {
        login.setDisplayLogin(!login.displayLogin)
        setLoginText(!loginText)
    }


    return (
        <>
            <div className={css(styles.navStyle, styles.navElements)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='featured' onClick={handleClick} to='/featured'>Featured</Link>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='overview' onClick={handleClick} to='/overview'>Overview</Link>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='equipment' onClick={handleClick} to='/equipment'>Equipment</Link>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='about' onClick={handleClick} to='/about'>About me</Link>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.displayUpload, styles.displayUploadAnim, styles.navItem)} id='upload' onClick={handleClick} to='/upload' >Upload</Link>
                <button onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.login, styles.navItem)}  onClick={handleLoginClick} id='login' type='button'>
                Log in
                </button>
                <div className={activeTabId === 'featured'  ? css(styles.underbarFeat) : hovered === 'featured' ? css(styles.underbarFeat) : css(styles.underbar)}></div>
                <div className={activeTabId === 'overview'  ? css(styles.underbarOv) : hovered === 'overview' ? css(styles.underbarOv) : css(styles.underbar)}></div>
                <div className={activeTabId === 'equipment'  ? css(styles.underbarEq) : hovered === 'equipment' ? css(styles.underbarEq) : css(styles.underbar)}></div>
                <div className={activeTabId === 'about'  ? css(styles.underbarAb) : hovered === 'about' ? css(styles.underbarAb) : css(styles.underbar)}></div>
                <div className={activeTabId === 'upload' ? css(styles.underbarUp) : hovered === 'upload' ? css(styles.underbarUp) : hovered === 'login' ? css(styles.underbarUp) : css(styles.underbar)}></div>
            </div>
            <div className={css(styles.hamburger)}>
                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </div>
        </>
    )
})

export default NavBar