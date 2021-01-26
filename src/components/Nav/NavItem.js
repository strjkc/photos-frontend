import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import {displayLogin} from '../../reducers/loginReducer'


const NavItem = ({text, color}) => {
    const styles = StyleSheet.create({
    navItem: {
        height: '30px',
        width: '30px',
        backgroundColor: color,
        borderRadius: '100px'
    },
    hoverItem: {
        height: '30px',
        width: '100px',
        color: '#ffff',
        borderRadius: '20px',
        backgroundColor: color,
    }
})

    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(false)
    console.log(hovered)    
    const handleClick = (e) => {
        dispatch(setActive(e.target.id))
     }
     const state = useSelector(store => store.activeTab)
     const handleLoginClick = (e) => {
        dispatch(displayLogin())
    }

    return(
        <Link role='nav-link' onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)} id={text.toLowerCase()} onClick={handleClick} to={`/${text}`}>
            <div  className={css( hovered ? styles.hoverItem : styles.navItem)}>
                {hovered ? text : ''}
            </div>
        </Link>

        )
}

export default NavItem
