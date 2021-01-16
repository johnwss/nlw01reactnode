import express from "express"


const meuApp = express()


meuApp.get("/usuarios",(req,res)=>{
    console.log("Listando usuarios:")
    res.json({
        nome:"beltrano",
        idade:30,
        telefone:33333
    })

})
meuApp.listen(3333)