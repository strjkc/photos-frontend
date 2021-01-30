import React from 'react'
import {StyleSheet, css} from 'aphrodite'

const styles = StyleSheet.create({
    fileInputWrapper: {
        display: 'flex',
    },
    fileInputButton: {
        width: '70px',
        fontSize: '15px',
        tableLayout: 'fixed',
        margin: '0',
        padding: '5px',
        backgroundColor: 'rgba(39,187,229)',
        color: 'rgb(249, 249, 249)',
        borderRadius: '5px',
        textAlign: 'center',
        fontFamily: 'InterRegular'
    },
    defaultButton: {
        display: 'none'
    },
    fileName: {
        marginLeft: '10px',
        textAlign: 'center',
        lineHeight: '25px'
    }
})

const ImageBrowser = ({image, inheritStyles, setImage}) => {
console.log('image', image)
    return(
        <div id='file-input-wrapper' className={css(styles.fileInputWrapper)}>
            <label className={css(styles.fileInputButton)} for='file-input'>Browse</label>
            <div className={css(styles.fileName)}>{image ? image.name : 'Chose file'}</div>
            <input id='file-input' type='file' className={css(styles.defaultButton)} onChange={(e) => setImage(e.target.files[0])} ></input>
        </div> 
    )
}

export default ImageBrowser