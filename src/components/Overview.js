import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useSelector} from 'react-redux'
import ImageComponent from './ImageComponent'
import EditComponent from './Edit/EditComponent'
import {StyleSheet, css} from 'aphrodite'

const Overview = ({setDisplayFullImage}) => {
    const photos = useSelector(store => store.photos)
    
    const styles = StyleSheet.create({
        noPictures: {
            margin: '50px 0 0 0',
            color: 'rgb(83, 84, 84)',
            textAlign: 'center',
            fontFamily: 'InterSemibold'
        }
    })

    return (
        <>
            {
                photos.length > 0
                ?   <Container style={{width: '100%', margin: '0', padding: '0'}}>
                        <Row lg={3} className='h-100'> 
                            {photos.map(photo => 
                            <Col key={photo.id} className='column' lg={4}>
                                <ImageComponent photo={photo}>
                                    <EditComponent photo={photo}/>
                                </ImageComponent>
                            </Col>)}
                        </Row>
                    </Container>
                : <p className={css(styles.noPictures)}>No pictures to display</p>
            }
        </>
    )
}

export default Overview