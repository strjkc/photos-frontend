import React, {useState, useCallback} from 'react'
import { HamburgerCollapseReverse } from 'react-animated-burgers'
import NavBar from './NavBar'
import {StyleSheet, css} from 'aphrodite'

const HamburgerNav = () => {
    const [isActive, setIsActive] = useState(false)
    const toggleButton = useCallback(
        () => setIsActive(prevState => !prevState),
        [],
      )

      const styles = StyleSheet.create({  
        hiddenNav: {
        display: isActive ? 'grid' : 'none',
        width: '200px',
        gridTemplateRows: 'repeat(5, 1fr)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: '10',
        backgroundColor: 'rgb(31, 32, 29)',
        right: '25px',
        padding: '10px',
        borderRadius: '10px',
        transition: 'ease',
        transitionDuration: '2s'
    },hamburgerDisplay: {
        '@media only screen and (min-width: 800px)': {
            display: 'none'
        }
    }
})
    return(
        <div className={css(styles.hamburgerDisplay)}>
            <HamburgerCollapseReverse 
                barColor="white"
                buttonWidth={25}
                {...{ isActive, toggleButton }}/>
            <NavBar styling={styles.hiddenNav} />
        </div>
    )
}

export default HamburgerNav