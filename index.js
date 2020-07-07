// import { SVG, get } from '@svgdotjs/svg.js'

SVG.on(document, 'DOMContentLoaded', function() {
    // initialize SVG.js
    var draw = SVG().addTo('body')

    var rect = draw.rect(100,100).fill('#f06').move(50,50)
    rect.draggable()
    console.log(draw.svg())

   })

