import React, { useState, useEffect } from 'react';
import services from './utils/services'
import {fetchPhotos} from './reducers/photosReducer'
import {setUser} from './reducers/userRedurcer'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import {StyleSheet, css} from 'aphrodite'
import {useDispatch, useSelector} from 'react-redux'
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
  const [displayLogin, setDisplayLogin] = useState(false)
  const dispatch = useDispatch()
  const fullScreenImage = useSelector(store => store.fullImage)
  const styles = StyleSheet.create(
      {
        rootContainer: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#0A090B',
          width: '100vw',
        },
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
  useEffect(() => {
    const userAsString = window.localStorage.getItem('user')
    if (userAsString)
      dispatch(setUser(JSON.parse(userAsString)))
  }, [])

  useEffect( () => {
    dispatch(fetchPhotos())
    }, [])



  const rootClick =(e) =>{
    console.log('target', String(e.target.className))
    if (!(String(e.target.id).includes('login-form')) && displayLogin)  
      setDisplayLogin(false)
}
  
  return (
    <div className={css(styles.rootContainer)} onClick={rootClick}>
              <div className={css(styles.mainContainer)}>
            <LoginComponent/>
            <Router>
            <HeaderComponent>
                <NavBar/>
            </HeaderComponent>
            {fullScreenImage ? <FullImage/> : <></>}
                <Switch>
                <Redirect exact from='/' to='/featured' />
                    <Route path='/featured'>
                        <Featured/>
                    </Route>
                    <Route path='/overview'>
                        <Overview/>
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/upload'>
                        <UploadComponent />
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
