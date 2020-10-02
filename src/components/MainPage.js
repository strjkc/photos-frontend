import React, {useRef} from 'react'
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

const MainPage = ({photos, uploadPhoto, setIsFeatured, setDescription, description, setImage, isFeatured, featured, user, setUser, login}) => {
    console.log('photos??', photos.length)
    const activeTabRef = useRef()

    console.log('refref',activeTabRef.current)

    const styles = StyleSheet.create(
        {
            mainContainer: {
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#141513'
            },
            noPictures: {
                color: '#E5E5E5',
                padding: '20px 0'
            }
        }
    )
    return(
        <div className={css(styles.mainContainer)}>
            <LoginComponent login={login} setUser={setUser} />
            <Router>
            <HeaderComponent setUser={setUser} login={login}>
                <NavBar user={user} login={login} ref={activeTabRef}/>
            </HeaderComponent>
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
                                        {photos.map(photo => <Col key={photo.id} className='column' lg={4}><ImageComponent photo={photo}><EditComponent user={user} photo={photo}/></ImageComponent></Col>)}
                                    </Row>
                                </Container>
                            : <p className={css(styles.noPictures)}>No pictures to display</p>
                        }
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                    <Route path='/upload'>
                        <UploadComponent resetTab={activeTabRef} setUser={setUser} description={description} isFeatured={isFeatured} setIsFeatured={setIsFeatured} setDescription={setDescription} uploadPhoto={uploadPhoto} setImage={setImage} />
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