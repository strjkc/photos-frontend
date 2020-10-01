import axios from 'axios'


const postPhoto = async (formData) => {
    const config = {
        headers: { 
            'Content-Type': 'multipart/form-data'
            }
        }
    const response = await axios.post('/photos', formData, config)
    return response
}

const getPhotos = () => {
    const request = axios.get('/photos')
    return request.then(response => response.data)
}

const login = async (credentials) =>{
    const response = await axios.post('/users/login', credentials)
    return response.data
}

const deletePhoto = async (id) => {
    const response = await axios.delete(`/photos/${id}`)
    return response.data
}

const updatePhoto = async (featuredCurrentValue, id) => {
    const response = await axios.put(`/photos/${id}`, {isFeatured: featuredCurrentValue})
    return response.data
}

export default {postPhoto, getPhotos, login, deletePhoto, updatePhoto}