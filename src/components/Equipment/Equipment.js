import React from 'react'
import {StyleSheet, css} from 'aphrodite'
import EquipmentItem from './EquipmentItem'

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    }
})
const Equipment = () => {
    return (
        <div className={css(styles.wrapper)}>
            <EquipmentItem text={'Nikon D3500, with the kit lens, birthday money well wasted'} img={'/standard/camera.jpg'} alt={'camera'} />
            <EquipmentItem text={'This chair, used to keep the camera stable in order to capture those amazing photos of the night sky'} img={'/standard/tripod.jpg'} alt={'tripod'} />
            <EquipmentItem text={'This antistress wrist thing, used to prop the lens up towards the sky'} img={'/standard/prop.jpg'} alt={'prop'} />
        </div>
    )
}

export default Equipment