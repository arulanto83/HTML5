var canvasref = document.getElementById("mycanvas")

var ctx = canvasref.getContext("2d")

ctx.moveTo(0, 0)
ctx.lineTo(300, 300)
ctx.stroke()

//draw the text
ctx.font ="44px serif"
ctx.strokeText("Hello Canvas", 10, 250);

//draw rectangle
ctx.fillStyle = "rgba(200, 0, 0, 0.5)"
ctx.fillRect(50, 50, 100, 100)

ctx.fillStyle = "rgba(0, 200, 0, 0.5)"
ctx.fillRect(75, 75, 100, 150)

//draw circle
ctx.beginPath()
ctx.arc(225, 80, 40, 0, Math.PI * 2, false)
ctx.stroke()