import axios from 'axios';

// Essa biblioteca é especializada em chamados de requisição http

export const api = axios.create({
    baseURL: 'http://localhost:3000/api'
})