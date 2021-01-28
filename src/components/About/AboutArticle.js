import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    mainText: {
        textAlign: 'justify',
        lineHeight: '1.3',
        margin: '5px 0',
        color: 'rgb(249, 249, 249)',
        fontFamily: 'InterRegular'
    }
})
const AboutArticle = () => {
    return (
        <p className={css(styles.mainText)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum tincidunt sagittis. Cras sem nunc, ornare eu ornare id, tempus eget sapien. Nunc et eleifend est. In in convallis massa. Suspendisse sit amet mollis ante. Praesent placerat, ex eu porta pellentesque, diam felis tincidunt lacus, vulputate imperdiet ex lectus eu ipsum. Phasellus a est libero. Nulla eget hendrerit tortor. Nullam eget arcu dui. Aenean non interdum sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        </p>
    )
}

export default AboutArticle