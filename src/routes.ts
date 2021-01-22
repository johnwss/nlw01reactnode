import express from "express"

const rotas = express.Router()


rotas.get("/",(req,res)=>{

    return res.json({message:"ola Mundo"})

})  

export default rotas