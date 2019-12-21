const express = require('express')
const jf = require('johnny-five')
const port = 3000

const app = express()
const circuito = new jf.Board()

circuito.on('ready', prender)

function prender () {
  let rgb = new jf.Led.RGB([10, 11, 9])
  rgb.color('#ff00ff') 
}

app.get('/', function (req, res) {
  res.send('Hola mundo')
})

app.listen(port)
console.log(`Servidor escuchando en http://localhost:${port}`)

