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

const download = async (id, name) => {
    axios({
        url: `/photos/download/${id}`,
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
      });
    }

const updatePhoto = async (photo) => {
    const response = await axios.put(`/photos/${photo.id}`, photo)
    return response.data
}

export default {postPhoto, getPhotos, login, deletePhoto, updatePhoto, download}