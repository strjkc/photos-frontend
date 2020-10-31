import React, { useState, useEffect } from 'react';
import services from './utils/services'
import {fetchPhotos} from './reducers/photosReducer'
import {setUser} from './reducers/userRedurcer'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import {StyleSheet, css} from 'aphrodite'
import {useSelector,useDispatch} from 'react-redux'
import NavBar from './components/NavBar'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import Featured from './components/Featured'
import UploadComponent from './components/UploadComponent'
import LoginComponent from './components/LoginComponent'
import About from './components/About'
import Equipment from './components/Equipment'
import FullImage from './components/FullImage'
import Overview from './components/Overview'

function App() {
  const [image, setImage] = useState(null)
  const [description, setDescription] = useState('')
  const [displayLogin, setDisplayLogin] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)
  const dispatch = useDispatch()
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
//TODO: fetch only latest photo after upload
  useEffect(() => {
    const userAsString = window.localStorage.getItem('user')
    if (userAsString)
      dispatch(setUser(JSON.parse(userAsString)))
  }, [])

  useEffect( () => {
    dispatch(fetchPhotos())
    }, [image])

  const uploadPhoto = async () => {
    const formData = new FormData()
    formData.append('image',image)
    formData.append('description', description)
    formData.append('isFeatured', isFeatured)
    await services.postPhoto(formData)
  }

  const rootClick =(e) =>{
    console.log('target', String(e.target.className))
    if (!(String(e.target.id).includes('login-form')) && displayLogin)  
      setDisplayLogin(false)
}
  
  return (
    <div style={{display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0A090B',
    width: '100vw',}} onClick={rootClick}>
              <div className={css(styles.mainContainer)}>
            <LoginComponent/>
            <Router>
            <HeaderComponent>
                <NavBar/>
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
                        <UploadComponent setUser={setUser} description={description} isFeatured={isFeatured} image={image} setIsFeatured={setIsFeatured} setDescription={setDescription} uploadPhoto={uploadPhoto} setImage={setImage} />
                    </Route>
                    <Route path='/equipment'>
                        <Equipment />
                    </Route>
                </Switch>
            </Router>
            <FooterComponent/>
        </div>
    </div>
  );
}

export default App;
