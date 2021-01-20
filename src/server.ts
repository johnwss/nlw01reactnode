import express from "express"


const meuApp = express()


const usuarios = ["beltrano","ciclano","fulano"]

meuApp.get("/usuarios",(req,res)=>{
    const search = req.query.search
    console.log(search)


    return res.json(usuarios)

})


meuApp.get("/usuarios",(req,res)=>{
    console.log("Listando usuarios:")
    return res.json(usuarios)
})

meuApp.get("/usuarios/:idViaArray",(req,res)=>{
    const idEmLista = Number(req.params.idViaArray)

    const retornoDeUsuario = usuarios[idEmLista]
    return res.json(retornoDeUsuario)
})

meuApp.post("/usuarios",(req,res)=>{
const usuario = {
nome:"beltrano",
email:"beltrano@google.com"
}
return res.json(usuario)
})


meuApp.listen(3333)