import React, {useRef} from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    checkBoxWrapper: {
        height: '15px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    checkBox: {
        height: '100%',
        marginLeft: '10px'
    },
})

const Checkbox = ({checkBoxRef, inheritStyles, isFeatured, setIsFeatured}) => {

    return(
        <div className={css(styles.checkBoxWrapper)}>
            <label htmlFor='upload-checkbox'>Is featured</label>
            <input ref={checkBoxRef} className={css(styles.checkBox)} type='checkbox' id='upload-checkbox' value={isFeatured} onChange={() => setIsFeatured(!isFeatured)} ></input>
        </div>
    )
}

export default Checkbox