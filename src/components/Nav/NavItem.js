import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import {displayLogin} from '../../reducers/loginReducer'
import {useSpring, animated} from 'react-spring'

const NavItem = ({text, passedColor}) => {
    const styles = StyleSheet.create({
    navItem: {
        height: '30px',
        width: '30px',
        backgroundColor: passedColor,
        borderRadius: '100px',
        transitionDuration: '0.5s',
        color: '#ffff',
        textAlign: 'center'

    },
    hoverItem: {
        transitionDuration: '0.5s',
        height: '30px',
        width: '100px',
        color: '#ffff',
        borderRadius: '20px',
        backgroundColor: passedColor,
        textAlign: 'center'
    },
    textStyle: {
        display: 'inline-block',
        lineHeight: '30px',
        verticalAlign: 'middle'
    }
})  

    const startColor = passedColor.substring(0, passedColor.lastIndexOf(')')) + ', 0)'
    console.log(startColor)
    const dispatch = useDispatch()
    const [hovered, setHovered] = useState(false)
    const a = {color: startColor, config: {duration: 500} }
    const [obj, set] = useSpring(() => (a));
    const handleClick = (e) => {
        dispatch(setActive(e.target.id))
     }
     const state = useSelector(store => store.activeTab)
     const handleLoginClick = (e) => {
        dispatch(displayLogin())
    }
    return(
        <Link         onMouseEnter={() => set({color: "#fff" })}
        onMouseLeave={() => {set({color: startColor }); setHovered(false)}} style={{textDecoration: 'none'}} onMouseOver={() => setHovered(true)}  id={text.toLowerCase()} onClick={handleClick} to={`/${text}`}>
            <div  className={css( hovered ? styles.hoverItem : styles.navItem)}>
                <animated.span  style={obj} className={css(styles.textStyle)}>{hovered ? text : ''}</animated.span>
            </div>
        </Link>

        )
}

export default NavItem
