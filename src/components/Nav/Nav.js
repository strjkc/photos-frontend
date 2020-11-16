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
            backgroundColor: '#0A090B',
            borderRadius: '5px',
            '@media only screen and (max-width: 800px)': {
                display: 'none'
            },'@media only screen and (min-width: 992px)': {
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