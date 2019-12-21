const jf = require('johnny-five')
const circuito = new jf.Board()

circuito.on('ready', prender)

function prender () {
  let rgb = new jf.Led.RGB([10, 11, 9])
  rgb.color('#ff00ff') 
}
