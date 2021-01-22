import express from "express"
import rotas from "./routes"


const meuApp = express()

meuApp.use(express.json())
meuApp.use(rotas)



meuApp.listen(3333)