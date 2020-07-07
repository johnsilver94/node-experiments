var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
}

var maxRadius = 50
var minRadius = 20
var colorArray = [
    '#E53939',
    '#F1FAEE',
    '#A8DADC',
    '#457B9D',
    '#1D3557'
]

var gravity = 0.2;
var friction = 0.98;

window.addEventListener('mousemove', 
    function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
})

window.addEventListener('resize', 
    function (event) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        init()
    }
)

function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

function Circle(x,y,dx,dy,radius,color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color = color

    this.draw = function() {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
		c.fillStyle = this.color;
		c.fill();
		c.stroke();
		c.closePath();
    }

	this.update = function() {
		if (this.y + this.radius + this.dy> canvas.height) {
			this.dy = -this.dy;
			this.dy = this.dy * friction;
			this.dx = this.dx * friction;
		} else {
			this.dy += gravity;
		}

		if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
			this.dx = -this.dx * friction;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};
}


var circleArray = [];

function init() {
    circleArray = []
    for( var i = 0; i< 600;i++) {
        var x = randomIntFromRange(radius, canvas.width - radius);
        var y = randomIntFromRange(0, canvas.height - radius);
        var dx = randomIntFromRange(-3, 3)
        var radius = randomIntFromRange(8, 20);
        var dy = randomIntFromRange(-2, 2)
    
        circleArray.push(new Circle(x, y, dx, dy, radius,randomColor(colorArray)))
    }
}

function animate() {
    requestAnimationFrame(animate)

    c.clearRect(0,0,innerWidth,innerHeight)

    for (let index = 0; index < circleArray.length; index++) {
        circleArray[index].update()
        
    }
}

animate()
init()