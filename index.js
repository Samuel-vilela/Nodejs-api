const express = require('express')
const  app = express() 

const herois = ["homem aranha", "hulk", "ms. marvel"]

//ENDPOINT Listagem de todos os herois (READ Single => [GET])  
app.get("/heroes", function(req, res){
    res.send(herois)
})  

app.get("/heroes/:id", function(req, res){
    //acessar o parametro de rota ID 
    const id = req.params.id 

    //pego o item no array
    const umheroi = herois[id]
    

    res.send(umheroi)
}) 

//todo o corpo da requisição virá como JSON
app .use(express.json())

// ENPOINT de criação (CREATE => [POST])
app.post("/heroes", function(req, res ){
    res.send(req.body)
})

app.listen(3000) 