import React, { useState, useImperativeHandle, useCallback} from 'react'
import { HamburgerCollapseReverse } from 'react-animated-burgers'
import {Link, useLocation} from 'react-router-dom'
import {fadeIn} from 'react-animations'
import {StyleSheet, css} from 'aphrodite'
import {useDispatch, useSelector} from 'react-redux'
import {setActive} from '../reducers/activeTabReducer'
import {displayLogin, hideLogin} from '../reducers/loginReducer'
const NavBar = React.forwardRef( ({user}, ref) => {
    const location = useLocation()
    const state = useSelector(store => store.activeTab)
    const dispatch = useDispatch()
//    const [state, setActiveTabId] = useState()
    const [hovered, setHovered] = useState('')
    const [isActive, setIsActive] = useState(false)
    dispatch(setActive(location.pathname.substring(1)))
    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
      )

    const handleLoginClick = (e) => {
        dispatch(displayLogin())
    }

    const handleClick = (e) => {
       dispatch(setActive(e.target.id))
    }

    const resetTab = () => {
        dispatch(setActive('featured'))
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
            justifySelf: 'center',
            height: '5px',
            transition: '0.5s ease',
            background: '#6464c8',
          
          },
          underbarOv: {            
            width: '95%',
            justifySelf: 'center',
            height: '5px',
            transition: '0.5s ease',
            background: '#c86464',
          },
          underbarEq: {            
            width: '95%',
            justifySelf: 'center',
            height: '5px',
            transition: '0.5s ease',
            background: 'rgba(150, 250, 250, 0.5)',
          },
          underbarAb: {            
            width: '95%',
            justifySelf: 'center',
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
            display: isActive ? 'grid' : 'none',
            width: '200px',
            gridTemplateRows: 'repeat(5, 1fr)',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: '10',
            backgroundColor: 'rgb(31, 32, 29)',
            right: '25px',
            padding: '10px',
            borderRadius: '10px'
        },
        hiddenNavItem: {
                display: 'grid',
                width: '100px',
                height: '30px',
                margin: '5px',
                textAlign: 'center'
        },
        
    })


    return (
        <>
            <div className={css(styles.navStyle, styles.navElements)}>
                <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='featured' onClick={handleClick} to='/featured'>Featured</Link>
                <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='overview' onClick={handleClick} to='/overview'>Overview</Link>
                <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='equipment' onClick={handleClick} to='/equipment'>Equipment</Link>
                <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='about' onClick={handleClick} to='/about'>About me</Link>
                <Link role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.displayUpload, styles.displayUploadAnim, styles.navItem)} id='upload' onClick={handleClick} to='/upload' >Upload</Link>
                <button role='nav-link' onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.login, styles.navItem)}  onClick={handleLoginClick} id='login' type='button'>
                Log in
                </button>
                <div role='nav-underline' className={state === 'featured'  ? css(styles.underbarFeat) : hovered === 'featured' ? css(styles.underbarFeat) : css(styles.underbar)}></div>
                <div role='nav-underline' className={state === 'overview'  ? css(styles.underbarOv) : hovered === 'overview' ? css(styles.underbarOv) : css(styles.underbar)} id='overviewUnderbar'></div>
                <div role='nav-underline' className={state === 'equipment'  ? css(styles.underbarEq) : hovered === 'equipment' ? css(styles.underbarEq) : css(styles.underbar)}></div>
                <div role='nav-underline' className={state === 'about'  ? css(styles.underbarAb) : hovered === 'about' ? css(styles.underbarAb) : css(styles.underbar)}></div>
                <div role='nav-underline' className={state === 'upload' ? css(styles.underbarUp) : hovered === 'upload' ? css(styles.underbarUp) : hovered === 'login' ? css(styles.underbarUp) : css(styles.underbar)}></div>
            </div>
            <div className={css(styles.hamburgerDisplay)}>
                <HamburgerCollapseReverse 
                    barColor="white"
                    buttonWidth={25}
                    className={css(styles.hamburger)}
                    {...{ isActive, toggleButton }}/>
            </div>
            <div className={css(styles.hiddenNav)} id='hidden-nav'>
                <div className={css(styles.hiddenNavItem)}>
                    <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='featured' onClick={handleClick} to='/featured'>Featured</Link>
                    <div className={state === 'featured'  ? css(styles.underbarFeat) : hovered === 'featured' ? css(styles.underbarFeat) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                    <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='overview' onClick={handleClick} to='/overview'>Overview</Link>
                    <div className={state === 'overview'  ? css(styles.underbarOv) : hovered === 'overview' ? css(styles.underbarOv) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                    <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='equipment' onClick={handleClick} to='/equipment'>Equipment</Link>
                    <div className={state === 'equipment'  ? css(styles.underbarEq) : hovered === 'equipment' ? css(styles.underbarEq) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                    <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.navItem, styles.navItemHover)} id='about' onClick={handleClick} to='/about'>About me</Link>
                    <div className={state === 'about'  ? css(styles.underbarAb) : hovered === 'about' ? css(styles.underbarAb) : css(styles.underbar)}></div>
                </div>
                <div className={css(styles.hiddenNavItem)}>
                    <Link onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.displayUpload, styles.displayUploadAnim, styles.navItem)} id='upload' onClick={handleClick} to='/upload' >Upload</Link>
                    <div className={state === 'upload' ? css(styles.underbarUp) : hovered === 'upload' ? css(styles.underbarUp) : hovered === 'login' ? css(styles.underbarUp) : css(styles.underbar)}></div>            
                </div>
                <button onMouseOver={e => setHovered(e.target.id)} onMouseLeave={() => setHovered('')} className={css(styles.login, styles.navItem)}  onClick={handleLoginClick} id='login' type='button'>
                Log in
                </button>
            </div>
        </>
    )
})

export default NavBar