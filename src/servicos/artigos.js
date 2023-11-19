import React, { Component } from 'react';
import axios from 'axios';

const artigosAPI = axios.create({baseURL: "http://localhost:8000/artigos"})

function getArtigos() {
    const response = artigosAPI.get('/')

    return response.data
}

export {
    getArtigos
}