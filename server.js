import express from 'express'

const app = express()
app.use(express.json())

const user = []

app.post('/users', (req, res) => {
    
    user.push(req.body)
    
    res.send('Ok, post')
})


app.get('/users', (req, res) => {
    res.json(user)
})


app.listen(3000)



/*
    1. Tipo de Rota / Metodo HTTP
    2. Endereço da Rota


    Criar API de usuários
        - Criar um Usuario    
        - Listar todos os usuários
        - Editar um usuario
        - Deletar um usuario
        
*/