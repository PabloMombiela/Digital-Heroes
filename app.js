const express = require("express")
const app = express()
const heroes = require("./heroes.json")



app.listen(3000 , () => {
    console.log("servidor en 3030")
})
 app.get("/", (req, res) => {

    res.send(` Ni Superman, Iron
    Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y
    hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como
    inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en
    ti!.
    <br/>
    <br/>
    <a href="/heroes">Héroes</a>
    `)
    

 })

 app.get("/heroes", (req,res) => {

res.send(heroes)
 })