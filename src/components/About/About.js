import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import SocialsList from './SocialsList'
import AboutArticle from './AboutArticle'
/*
"rgba(255,66,36)"
"rgba(39,187,229)
"rgb(255,128,36)"
"rgba(255,189,36)
55,187,108
*/
const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: '64%',
        padding: '20px 20px',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        margin: '50px 0 0 0',
        backgroundColor: 'rgba(255,128,36)',
        color: 'rgb(249, 249, 249)',
        fontFamily: 'InterRegular'
    },
    mail: {
        margin: '10px 0',
        color: 'rgb(249, 249, 249)',
        fontFamily: 'InterSemiBold'
    },
    link: {
        color: 'rgb(249, 249, 249)'
    },

})
const About = () => {
    return(
        <div className={css(styles.wrapper)}>
            <AboutArticle />
            <div><span className={css(styles.mail)}>Say Hi: </span><a className={css(styles.link)} href='mailto:strahinja@jkc.com'>strahinja@jkc.com</a></div>
            <SocialsList/>
        </div>
    )
}

export default About