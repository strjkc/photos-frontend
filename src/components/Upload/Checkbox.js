import React, {useRef} from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({

})

const Checkbox = ({checkBoxRef, inheritStyles, isFeatured, setIsFeatured}) => {

    return(
        <div className={css(styles.formChildren, styles.checkBox)}>
            <label htmlFor='upload-checkbox' className={css(styles.checkBox)} >Is featured</label>
            <input ref={checkBoxRef} type='checkbox' id='upload-checkbox' value={isFeatured} onChange={() => setIsFeatured(!isFeatured)} ></input>
        </div>
    )
}

export default Checkbox