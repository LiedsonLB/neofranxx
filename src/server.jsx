const express = require('express')
const mongoose = require('mongoose')
const dontenv = require('dotenv')

dontenv.config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('olá API')
});

// Credenciais
const accessKey = process.env.USER;
const dbPassword = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://${accessKey}:${dbPassword}@neofranxx.pgwzccy.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectado ao MongoDB')
    app.listen(port, () => {
        console.log('API conectada')
    })
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error)
  });