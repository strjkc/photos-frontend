import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage'
import services from './utils/services'
import {fetchPhotos} from './reducers/photosReducer'
import {setUser} from './reducers/userRedurcer'

import {useDispatch, useSelector} from 'react-redux'

function App() {
  const [image, setImage] = useState(null)
  const [featured, setFeatured] = useState([])
  //const [user, setUser] = useState(null)
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])
  const [displayLogin, setDisplayLogin] = useState(false)
  const [isFeatured, setIsFeatured] = useState(false)
  const dispatch = useDispatch()
//TODO: fetch only latest photo after upload
const user = useSelector(store => store.user)
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
    width: '100vw',
    
    }} onClick={rootClick}>
      <MainPage isFeatured={isFeatured} image={image} uploadPhoto={uploadPhoto} setPhotos={setPhotos} setImage={setImage} description={description} setDescription={setDescription} setFeatured={setFeatured} setIsFeatured={setIsFeatured}  photos={photos} featured={featured} login={{displayLogin, setDisplayLogin}}/>
    </div>
  );
}

export default App;
