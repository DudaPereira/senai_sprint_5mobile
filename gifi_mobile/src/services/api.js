// faz a importação do pacote
import axios from 'axios';

// define a constante api para a chamada de requisição
const api = axios.create({
    // define a URL base para as requisições  à API
    baseURL: 'http://localhost:5000/api'
});

// exporta a constante para o uso em outros arquivos do projeto 
export default api;