import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: '100%',
        padding: '20px 20px',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#E5E5E5',
        backgroundColor: '#1F201D',
        borderRadius: '10px'
    },
    mainText: {
        width: '80%',
        textAlign: 'justify',
        lineHeight: '1.3',
        margin: '5px 0'
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
    },
    listItem:{
        display: 'block',
        color: 'white'
    },
    link: {
        color: 'white'
    },
    icons: {
        fontSize: '25px'
    }

})
const About = () => {
    return(
        <div className={css(styles.wrapper)}>
            <p className={css(styles.mainText)}>
                This is a placeholder text about me, I'm strahinja a history student working as a QA trying to make it as a dev.
                Photography is one of my hobbies so i thought i'd make a portpholio of my "best work".
                Most of the time I'm kinda stubmilng nad relying on edditing and filters.
                Also like music very mucho, favorite bands The Strokes and Arctic Monkeys, favorite album - Humbug
                Currently leadrining to play guitar, so a website containing my poor covers might be next idk.
                Other than that I like ranting about stuff (perticularly enjoy making strong statements about stuff i don't belive in) and being anoying.
            </p>
            <div className={css(styles.mail)}>Say Hi: <a className={css(styles.link)} href='mailto:strahinja@jkc.com'>strahinja@jkc.com</a></div>
            <div className={css(styles.socialContainer)}>
                <h5 className={css(styles.socialTitle)}>Or follow me on:</h5>
                <div className={css(styles.list)}>
                    <div className={css(styles.listItem)}>
                        <a className={css(styles.link)} href='https://www.instagram.com/strahin.jpg/' target="_blank">
                            <FontAwesomeIcon className={css(styles.icons)} icon={faInstagram}/>
                        </a>
                    </div>
                    <div className={css(styles.listItem)}>
                        <a className={css(styles.link)} href='https://web.facebook.com/profile.php?id=100011488296431' target="_blank">
                            <FontAwesomeIcon className={css(styles.icons)} icon={faFacebook}/>
                        </a>
                    </div>
                    <div className={css(styles.listItem)}>
                        <a className={css(styles.link)}>
                            <FontAwesomeIcon className={css(styles.icons)} icon={faLinkedin}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About