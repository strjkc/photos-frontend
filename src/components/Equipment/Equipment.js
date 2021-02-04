import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import EquipmentItem from './EquipmentItem'

//using fragment bc elements need to be childern of main container

const styles = StyleSheet.create({
    wrapper: {
        width: '64%',
        marginTop: '50px'
    }
})

const Equipment = () => {
    const picUrl = `data:image/jpeg;base64,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`
    const sampleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper mi nec arcu auctor, vel vulputate orci semper. Aenean vitae porttitor lectus. Phasellus at lacinia diam, ac suscipit lacus. In pellentesque mi eget volutpat vestibulum. Sed pharetra mi non diam tincidunt, non luctus purus faucibus.'
    return (
        <div className={css(styles.wrapper)}>
            <EquipmentItem text={sampleText} img={picUrl} alt={'camera'} />
            <EquipmentItem text={sampleText} img={picUrl} alt={'tripod'} />
            <EquipmentItem text={sampleText} img={picUrl} alt={'prop'} />
        </div>
    )
}

export default Equipment