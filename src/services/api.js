import axios from 'axios';

const API_BASE_URL = 'http://localhost:9090/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTransferencias() {
    return axiosInstance.get('/transferencias');
  },

  criarTransferencia(transferencia) {
    return axiosInstance.post('/transferencias', transferencia);
  },

};
