import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    mainText: {
        width: '80%',
        textAlign: 'justify',
        lineHeight: '1.3',
        margin: '5px 0'
    }
})
const AboutArticle = () => {
    return (
        <p className={css(styles.mainText)}>
        This is a placeholder text about me, I'm strahinja a history student working as a QA trying to make it as a dev.
        Photography is one of my hobbies so i thought i'd make a portpholio of my "best work".
        Most of the time I'm kinda stubmilng nad relying on edditing and filters.
        Also like music very mucho, favorite bands The Strokes and Arctic Monkeys, favorite album - Humbug
        Currently leadrining to play guitar, so a website containing my poor covers might be next idk.
        Other than that I like ranting about stuff (perticularly enjoy making strong statements about stuff i don't belive in) and being anoying.
    </p>
    )
}

export default AboutArticle