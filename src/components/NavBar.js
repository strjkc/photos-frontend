import React, { useState, useImperativeHandle, useCallback} from 'react'
import { HamburgerCollapseReverse } from 'react-animated-burgers'
import {Link, useLocation} from 'react-router-dom'
import {fadeIn} from 'react-animations'
import {StyleSheet, css} from 'aphrodite'
const NavBar = React.forwardRef( ({user, login}, ref) => {
    const location = useLocation()
    const [activeTabId, setActiveTabId] = useState(location.pathname.substring(1))
    const [loginText, setLoginText] = useState(false)
    const [hovered, setHovered] = useState('')
    const [isActive, setIsActive] = useState(false)
    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
      )
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
        hamburgerDisplay: {
            '@media only screen and (min-width: 800px)': {
                display: 'none'
            }
        },
        navElements: {
            '@media only screen and (max-width: 800px)': {
                display: 'none'
            }
        },
        hiddenNav: {
            display: isActive ? 'flex' : 'none',
            width: '200px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            zIndex: '10',
            backgroundColor: 'green',
            right: '25px',
            padding: '10px',
            borderRadius: '10px'
        },
        hiddenNavItem: {
                width: '100px',
                height: '30px',
                margin: '5px',
                textAlign: 'center'
        },
        
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
            <div className={css(styles.hamburgerDisplay)}>
                <HamburgerCollapseReverse 
                    barColor="white"
                    buttonWidth={25}
                    className={css(styles.hamburger)}
                    {...{ isActive, toggleButton }}/>
            </div>
            <div className={css(styles.hiddenNav)}>
                <div className={css(styles.hiddenNavItem)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='featured' onClick={handleClick} to='/featured'>Featured</Link>
                <div className={activeTabId === 'featured'  ? css(styles.underbarFeat) : hovered === 'featured' ? css(styles.underbarFeat) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='overview' onClick={handleClick} to='/overview'>Overview</Link>
                <div className={activeTabId === 'overview'  ? css(styles.underbarOv) : hovered === 'overview' ? css(styles.underbarOv) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='equipment' onClick={handleClick} to='/equipment'>Equipment</Link>
                <div className={activeTabId === 'equipment'  ? css(styles.underbarEq) : hovered === 'equipment' ? css(styles.underbarEq) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='about' onClick={handleClick} to='/about'>About me</Link>
                <div className={activeTabId === 'about'  ? css(styles.underbarAb) : hovered === 'about' ? css(styles.underbarAb) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.displayUpload, styles.displayUploadAnim, styles.navItem)} id='upload' onClick={handleClick} to='/upload' >Upload</Link>
                <div className={activeTabId === 'upload' ? css(styles.underbarUp) : hovered === 'upload' ? css(styles.underbarUp) : hovered === 'login' ? css(styles.underbarUp) : css(styles.underbar)}></div>            
                </div>
                <button onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.login, styles.navItem)}  onClick={handleLoginClick} id='login' type='button'>
                Log in
                </button>
            </div>
        </>
    )
})

export default NavBar