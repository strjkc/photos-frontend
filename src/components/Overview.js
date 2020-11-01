import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useSelector} from 'react-redux'
import ImageComponent from './ImageComponent'
import EditComponent from './EditComponent'
import {StyleSheet, css} from 'aphrodite'

const Overview = ({setDisplayFullImage}) => {
    const photos = useSelector(store => store.photos)
    
    const styles = StyleSheet.create(
        {
            noPictures: {
                color: '#E5E5E5',
                padding: '20px 0'
            },
        }
    )

    return (
        <div>
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
        </div>
    )
}

export default Overview