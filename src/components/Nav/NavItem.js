import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setActive} from '../../reducers/activeTabReducer'
import {Link} from 'react-router-dom'
import {StyleSheet, css} from 'aphrodite'
import {displayLogin} from '../../reducers/loginReducer'
import {useSpring, animated} from 'react-spring'
//TODO: seperate button and regular Link to different components
const NavItem = ({text, passedColor, button}) => {
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
    buttonStyle: {
        //transparent background
        backgroundColor: '#f9f9f9',
        border: 'none'
    },  
    hoverItem: {
        transitionDuration: '0.5s',
        height: '30px',
        width: '120px',
        color: '#ffff',
        borderRadius: '20px',
        backgroundColor: passedColor,
        textAlign: 'center'
    },
    textStyle: {
        display: 'inline-block',
        lineHeight: '30px',
        verticalAlign: 'middle',
        fontFamily: 'InterSemiBold'

    }
})  

    const startColor = 'rgba(249,249,249,0)' 
    const dispatch = useDispatch()
    //if true expand element
    const [hovered, setHovered] = useState(false)
    const [color, set] = useSpring(() => ({color: startColor, config: {duration: 500} }));
    const handleLoginClick = (e) => {
        dispatch(displayLogin())
    }
    //change color and width
    const onHover = () => { set({color: "rgba(249,249,249,1)" }); setHovered(true) }
    const onHoverOut = () => { set({color: startColor }); setHovered(false) }

    return(
        
            button 
            ?   <button id={text.toLowerCase()}
                    className={css(styles.buttonStyle)}
                    onMouseEnter={onHover}
                    onMouseLeave={onHoverOut} style={{textDecoration: 'none'}}
                    onClick={handleLoginClick}>
                    <div  className={css( hovered ? styles.hoverItem : styles.navItem)}>
                        <animated.span  style={color} className={css(styles.textStyle)}>{hovered ? text : ''}</animated.span>
                    </div>
                </button>
            :   <Link id={text.toLowerCase()}
                    onMouseEnter={onHover}
                    onMouseLeave={onHoverOut} style={{textDecoration: 'none'}} 
                    to={`/${text}`}>
                    <div  className={css( hovered ? styles.hoverItem : styles.navItem)}>
                        <animated.span  style={color} className={css(styles.textStyle)}>{hovered ? text : ''}</animated.span>
                    </div>
                </Link>
        
        

        )
}

export default NavItem
