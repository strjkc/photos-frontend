import React from 'react'
import {useLocation} from 'react-router-dom'
import {StyleSheet} from 'aphrodite'
import {useDispatch} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import NavBar from './NavBar'
import HamburgerNav from './HamburgerNav'

const Nav = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    dispatch(setActive(location.pathname.substring(1)))
    

    const styles = StyleSheet.create({
        navStyle: {
            display: 'flex',
            borderRadius: '5px',
            '@media only screen and (max-width: 800px)': {
                display: 'none'
            },
            '@media only screen and (min-width: 992px)': {
                fontSize: '19px'
            }
        },
        navItem: {
            padding: '3px',
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: 'white',
            justifySelf: 'center',
            alignSelf: 'center',
            textAlign: 'center',
        }
    })


    return (
        <>
            <NavBar styling={styles.navStyle} />
            <HamburgerNav />
        </>
    )
}

export default Nav