import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import githubImage from '../images/GitHub-Mark-32px.png'
const FooterComponent = () => {

    const styles = StyleSheet.create({
        footerContainer: {
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '80px 0 0 0',
        },
        itemMargin: {
            margin: '5px 0'
        },
        sourceWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        sourceItemWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        sourceTitle: {
            textAlign: 'center',
            marginBottom: '7px'
        },
        githubLogo: {
            height: '20px',
            margin: '0 5px',
            color: 'black'
        },
    })

    return(
        <div className={css(styles.footerContainer)}>
            <div className={css(styles.itemMargin)}>
                <p className={css(styles.sourceTitle)}>Source:</p>
                <div className={css(styles.sourceWrapper, styles.itemMargin)}>
                    <div className={css(styles.sourceItemWrapper)}>
                        <img className={css(styles.githubLogo)} src={githubImage} alt='gitHub logo'></img>
                        <p><a target='_blank' href='https://github.com/strjkc/photos-frontend'>frontend</a></p>
                    </div>
                    <div className={css(styles.sourceItemWrapper, styles.sourceItemWrapperChildren)}>
                        <img className={css(styles.githubLogo)} src={githubImage} alt='gitHub logo'></img>
                        <p><a target='_blank' href='https://github.com/strjkc/photos'>backend</a></p>
                    </div>
                </div>
            </div>
            <div className={css(styles.itemMargin)}>
                <p>&copy; Strahinja Jokic</p>
            </div>
        </div>
    )
}

export default FooterComponent