import axios from 'axios';

// const BACKEND_URL = process.env.TOURNOIS_BACKEND_URL;
const BACKEND_URL = 'http://localhost:9009/api/tournois';

export default {
    fetch() {
        return axios.get(BACKEND_URL)
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    delete(id) {
        return axios.delete(`${BACKEND_URL}/${id}`)
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    create(tournoi) {
        return axios.post(BACKEND_URL, tournoi)
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    fetchOne(id) {
        return axios.get(`${BACKEND_URL}/${id}`)
            .then(response => response.data)
            .catch(error => { throw error; });
    },
    update(tournoi) {
        return axios.put(`${BACKEND_URL}/${tournoi.id}`, tournoi)
            .then(response => response.data)
            .catch(error => { throw error; });
    }
}