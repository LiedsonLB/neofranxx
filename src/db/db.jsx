const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.listen('4000', () => {
    console.log('Servidor rodando')
})