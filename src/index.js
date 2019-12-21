const jf = require('johnny-five')
const circuito = new jf.Board()

circuito.on('ready', prender)

function prender () {
  let led = new jf.Led(13)
  led.blink(300) 
}
