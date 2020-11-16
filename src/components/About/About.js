import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import {faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import SocialListItem from './SocialListItem'
import AboutArticle from './AboutArticle'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: '100%',
        padding: '20px 20px',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#E5E5E5',
        backgroundColor: '#1F201D',
        borderRadius: '10px',
    },
    socialContainer:{
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    socialTitle: {
        margin: '10px 0'
    },
    mail: {
        margin: '10px 0'
    },
    list: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '10px 0'
    }

})
const About = () => {
    return(
        <div className={css(styles.wrapper)}>
            <AboutArticle />
            <div className={css(styles.mail)}>Say Hi: <a className={css(styles.link)} href='mailto:strahinja@jkc.com'>strahinja@jkc.com</a></div>
            <div className={css(styles.socialContainer)}>
                <h5 className={css(styles.socialTitle)}>Or follow me on:</h5>
                <ul className={css(styles.list)}>
                    <SocialListItem link={'https://www.instagram.com/strahin.jpg/'} icon={faInstagram} />
                    <SocialListItem link={'https://web.facebook.com/profile.php?id=100011488296431'} icon={faFacebook} />
                    <SocialListItem link={'https://www.linkedin.com/in/strahinja-jokic-1035171b9/'} icon={faLinkedin} />
                </ul>
            </div>
        </div>
    )
}

export default About