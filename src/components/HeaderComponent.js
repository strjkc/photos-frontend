import React from 'react'
import './headerComponent.css'
import {StyleSheet, css} from 'aphrodite'
import {useSpring, animated} from 'react-spring'
const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#E5E5E5'
    },
    titleContainer: {
        display: 'flex',
        width: '40%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        margin: '50px 0 50px 0',
    },
    subText: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#535454'
    },
    title: {
        textAlign: 'center',
        fontSize: '55px',
        color: '#535454'
    }})


const HeaderComponent = ({children}) => {
    const title = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 1000}})
    const subText = useSpring({opacity: 1, from: {opacity: 0}, config: {duration: 1500}})
  
    return(
        <div className={css(styles.headerContainer)}>
            <div className={css(styles.titleContainer)}>
                <animated.h1 style={title} className={css(styles.title)}>Gallery</animated.h1>
                <animated.p style={subText} className={css(styles.subText)}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</animated.p>
            </div>
                {children}
        </div>
    )
}

export default HeaderComponent