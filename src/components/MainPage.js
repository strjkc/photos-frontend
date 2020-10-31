import React, {useRef, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch, Route, Redirect
  } from "react-router-dom"
import {StyleSheet, css} from 'aphrodite'
import NavBar from './NavBar'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Featured from './Featured'
import UploadComponent from './UploadComponent'
import LoginComponent from './LoginComponent'
import About from './About'
import Equipment from './Equipment'
import FullImage from './FullImage'
import { useSelector } from 'react-redux'
import Overview from './Overview'

const MainPage = ({setPhotos, uploadPhoto, setFeatured, setDescription, description, setImage, image, isFeatured, setIsFeatured, user, setUser, login}) => {
    const activeTabRef = useRef()
    const [displayFullImage, setDisplayFullImage] = useState(null) 
    const photos = useSelector(store => store.photos)
    const featured = photos.filter( photo => photo.isFeatured)




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
                        <Overview setDisplayFullImage={setDisplayFullImage}/>
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