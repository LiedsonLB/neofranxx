const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const dontenv = require('dotenv')

const User = require('./models/User')

dontenv.config()

const app = express()
const port = 4000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Bem vindo a API')
});

// Post
app.post('/auth/cadaster', async(req, res) => {

  const {name, email, password} = req.body

  // create password

  const salt = await bcrypt.genSalt(12)
  const passwordHash = bcrypt.hash(password, salt)

  /*
   * verifica usuario existente no banco de dados

    const userExists = await User.findOne({ email: email})

    if(userExists) {
      console.log('usuario ja logado nessa conta')
      return res.status(422).json({msg: usuario ja logado nessa conta})
    }
   */
  
  const user = new User({
    name,
    email,
    passwordHash
  })

  try {

    await user.save()

  } catch(error) {
    console.log('error: ', error)
  } 

  res.send('usuario enviado')
})

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