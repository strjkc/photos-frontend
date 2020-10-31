import React, {useRef, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Redirect
  } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import {StyleSheet, css} from 'aphrodite'
import NavBar from './NavBar'
import HeaderComponent from './HeaderComponent'
import ImageComponent from './ImageComponent'
import FooterComponent from './FooterComponent'
import Featured from './Featured'
import UploadComponent from './UploadComponent'
import LoginComponent from './LoginComponent'
import About from './About'
import Equipment from './Equipment'
import EditComponent from './EditComponent'
import services from '../utils/services'
import FullImage from './FullImage'
import { useSelector } from 'react-redux'

const MainPage = ({setPhotos, uploadPhoto, setFeatured, setDescription, description, setImage, image, isFeatured, setIsFeatured, user, setUser, login}) => {
    const activeTabRef = useRef()
    const [displayFullImage, setDisplayFullImage] = useState(null) 
    const photos = useSelector(store => store.photos)
    const featured = photos.filter( photo => photo.isFeatured)
    
    const toggleFeatured = (photoToRemove) => {
        services.updatePhoto(photoToRemove)
        const changed = photos.find(photo => photo.id === photoToRemove.id)
        photos[photos.indexOf(changed)].isFeatured = !changed.isFeatured
        setFeatured(photos.filter(photo => photo.isFeatured === true))
    }

    const removePhoto = (photoToRemove) => {
        services.deletePhoto(photoToRemove.id)
        setPhotos(photos.filter(photo => photo.id !== photoToRemove.id))
        toggleFeatured(photoToRemove)
    }

    const styles = StyleSheet.create(
        {
            mainContainer: {
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#0A090B'
            },
            noPictures: {
                color: '#E5E5E5',
                padding: '20px 0'
            },
        }
    )
    return(
        <div className={css(styles.mainContainer)}>
            <LoginComponent login={login} setUser={setUser} />
            <Router>
            <HeaderComponent setUser={setUser} login={login}>
                <NavBar user={user} login={login} ref={activeTabRef}/>
            </HeaderComponent>
            {displayFullImage ? <FullImage setDisplayFullImage={setDisplayFullImage} displayFullImage={displayFullImage}/> : <></>}
                <Switch>
                <Redirect exact from='/' to='/featured' />
                    <Route path='/featured'>
                        <Featured featured={featured}/>
                    </Route>
                    <Route path='/overview'>
                        {
                            photos.length > 0
                            ?   <Container style={{width: '100%', margin: '0', padding: '0'}}>
                                    <Row lg={3} className='h-100'> 
                                        {photos.map(photo => 
                                        <Col key={photo.id} className='column' lg={4}>
                                            <ImageComponent photo={photo} setDisplayFullImage={setDisplayFullImage}>
                                                <EditComponent toggleFeatured={toggleFeatured} removePhoto={removePhoto} user={user} photo={photo}/>
                                            </ImageComponent>
                                        </Col>)}
                                    </Row>
                                </Container>
                            : <p className={css(styles.noPictures)}>No pictures to display</p>
                        }
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/upload'>
                        <UploadComponent resetTab={activeTabRef} setUser={setUser} description={description} isFeatured={isFeatured} image={image} setIsFeatured={setIsFeatured} setDescription={setDescription} uploadPhoto={uploadPhoto} setImage={setImage} />
                    </Route>
                    <Route path='/equipment'>
                        <Equipment />
                    </Route>
                </Switch>
            </Router>
            <FooterComponent/>
        </div>
    )
}

export default MainPage