import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EditButton = ({photo, icon, funk, isFavoriteButton}) => {
    const styles = StyleSheet.create({
        iconStyle: {
            color: 'white',
            fontSize: '20px',
            margin: '5px'
        },
        featuredIcon: {
            color: 'gold',
            fontSize: '20px',
            margin: '5px'
        },
        deleteHover: {
            ":hover": {
                color: 'red'
            }
        },
        favHover: {
            ":hover": {
                color: photo.isFeatured ? 'white' : 'gold'
            }
        },
    })
    return (
        <FontAwesomeIcon className={
            isFavoriteButton ? 
                photo.isFeatured ?
                    css(styles.featuredIcon, styles.favHover) 
                    : css(styles.iconStyle, styles.favHover) 
            : css(styles.iconStyle, styles.deleteHover)} icon={icon} onClick={() => funk(photo)}></FontAwesomeIcon>
    )
}

export default EditButton