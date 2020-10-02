import React, { useState, useImperativeHandle} from 'react'
import './nav.css'
import {Link, useLocation} from 'react-router-dom'
import {fadeIn} from 'react-animations'
import {StyleSheet, css} from 'aphrodite'
const NavBar = React.forwardRef( ({user, login}, ref) => {
    const location = useLocation()
    const [activeTabId, setActiveTabId] = useState(location.pathname.substring(1))
    const [loginText, setLoginText] = useState(false)

    console.log('activeTab', activeTabId)
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
            color: '#E5E5E5',
            backgroundColor: '#1F201D',
            padding: '10px',
            borderRadius: '5px'
        },
        activeItem: {
            backgroundColor: '#FF0000',
            borderRadius: '3px',
            transition: 'ease-in',
            transitionDuration: '100ms',
            textDecoration: 'none',
            color: '#E5E5E5'
        },
        navItem: {
            padding: '3px',
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: '#E5E5E5',
            justifySelf: 'center'
        },
        itemHover: {
            ':hover': {
                backgroundColor: '#333630',
                borderRadius: '3px',
                transition: 'ease-in',
                transitionDuration: '200ms',
                textDecoration: 'none',
                color: '#E5E5E5'
            }
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
            display: user ? 'none' : '' 
        }
    })


    
    
    const handleLoginClick = () => {
        login.setDisplayLogin(!login.displayLogin)
        setLoginText(!loginText)
    }




    return (
            <div className={css(styles.navStyle)}>
                <Link className={ activeTabId === 'featured' ? 'nav-item active-item' : 'nav-item' } id='featured' onClick={handleClick} to='/featured'>Featured</Link>
                <Link className={ activeTabId === 'overview' ? 'nav-item active-item' : 'nav-item' } id='overview' onClick={handleClick} to='/overview'>Overview</Link>
                <Link className={ activeTabId === 'equipment' ? 'nav-item active-item' : 'nav-item' } id='equipment' onClick={handleClick} to='/equipment'>Equipment</Link>
                <Link className={ activeTabId === 'about' ? 'nav-item active-item' : 'nav-item' } id='about' onClick={handleClick} to='/about'>About me</Link>
                <Link className={ activeTabId === 'upload' ? css(styles.displayUpload, styles.displayUploadAnim, styles.navItem, styles.activeItem, styles.fontLarge) : css(styles.fontLarge, styles.displayUpload, styles.itemHover, styles.navItem, styles.displayUploadAnim) } id='upload' onClick={handleClick} to='/upload' >Upload</Link>
                <button className={css(styles.login)}  onClick={handleLoginClick} id='login' type='button'>
                Log in
            </button>
          
            </div>
    )
})

export default NavBar