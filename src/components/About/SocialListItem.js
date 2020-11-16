import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = StyleSheet.create({
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

const SocialListItem = ({link, icon}) => {
    return (
        <li className={css(styles.listItem)}>
            <a className={css(styles.link)} href={link} target="_blank" rel='noopener noreferrer'>
                <FontAwesomeIcon className={css(styles.icons)} icon={icon}/>
            </a>
        </li>
                    
    )
}

export default SocialListItem