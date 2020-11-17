import React from 'react'

const Image = ({photo, displayDesc, setDisplayDesc}) => {
    return(
        <div style={{display: 'flex', width: '70%', height:'100%', transition:'width 1s', zIndex:'2', borderRadius: '10px', position: 'relative'}}>
            <img style={{width: '100%', height: '100%'}} src={`/${photo.name}`} alt={photo.description}></img>
        </div>

            )
}

export default Image