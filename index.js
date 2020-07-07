// import { SVG, get } from '@svgdotjs/svg.js'

SVG.on(document, 'DOMContentLoaded', function() {
    var containerSVG = SVG().addTo('#svg').size(window.innerWidth,window.innerHeight)
    var group = containerSVG.group()
    group.addTo(containerSVG)

    var table = SVG().addTo(group).size(200,150).move(60,0)
    var header = SVG().addTo(table)

    var rect = header.rect(200,32).fill('blue')
    var text = header.text("users").size(13,16).move(0,'.35em')
    var title = header.add(SVG('<title>users</title>'))

    var line = SVG().addTo(table).size(200,150).move(0,32)
    var linerect = line.rect(200,30).fill('gray')
    var linetext = line.text("id").move(13)
    var linetext2 = line.text("int").move(170)
    var linetitle = line.add(SVG('<title>id (int)</title>'))

    table.draggable()

   })

