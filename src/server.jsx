const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const dontenv = require('dotenv')

const User = require('./models/User.jsx')

dontenv.config()

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send('Bem-vindo à API');
});

app.post("/auth/cadaster", async (req, res) => {
  try {
      const { userName, email, password } = req.body;

      // create password
      const salt = await bcrypt.genSalt(12)
      const passwordHash = await bcrypt.hash(password, salt)

      //verifica se o usuário já existe
      const userExists = await User.findOne({ email: email})

      if(userExists) {
        console.log('usuario ja logado nessa conta')
        return res.status(422).json({msg: 'usuario ja logado nessa conta'})
      }

      const newUser = new User({
        userName,
        email,
        password: passwordHash,
        fullName: '',
        age: 0,
        access: '',
        position: '',
        linkedin: '',
        github: '',
        gender: '',
        nationality: '',
        address: '',
        hiringDate: null,
        maritalStatus: false,
        status: '',
        storeLocation: '',
      });

      const resUser = await newUser.save();

      res.status(201).json({ mensagem: 'Usuário criado com sucesso', user: resUser });
  } catch (error) {
      console.error('Erro ao criar o usuário:', error);
      res.status(500).json({ erro: 'Erro interno ao processar a solicitação' });
  }
});

app.get("/users", async (req, res) => {

  try {
    const users = await User.find({});
    res.json(users)

  } catch {
    res.status(500).json({erro: 'erro ao obter dado dos usuários'})
  }
});

// Credenciais
const accessKey = process.env.USER;
const dbPassword = process.env.PASSWORD;
const dbName = process.env.DBNAME;
const PORT = process.env.PORT || 4000

mongoose.connect(`mongodb+srv://${accessKey}:${dbPassword}@neofranxx.pgwzccy.mongodb.net/${dbName}?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectado ao MongoDB')
    app.listen(PORT, () => {
        console.log(`API conectada na ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error)
  });