const express = require('express')
const  app = express() 

const herois = ["homen aranha", "hulk", "ms. marvel"]

//ENDPOINT Listagem de todos os herois (READ ALL => [GET])  
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

app.listen(3000) 