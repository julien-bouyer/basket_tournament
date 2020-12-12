import axios from 'axios';
// const BACKEND_URL = process.env.EQUIPES_BACKEND_URL;
const BACKEND_URL = 'http://localhost:9009/api/equipes';
export default {
    fetch() {
        return axios.get(BACKEND_URL)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    delete(id) {
        return axios.delete(`${BACKEND_URL}/${id}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    create(equipe) {
        return axios.post(BACKEND_URL, equipe)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    fetchOne(id) {
        return axios.get(`${BACKEND_URL}/${id}`)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    update(equipe) {
        return axios.put(`${BACKEND_URL}/${equipe.id}`, equipe)
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
}