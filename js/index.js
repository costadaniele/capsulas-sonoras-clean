let star = []
let extraSpeed = 0
let extraLeng = -1

function setup() {
	createCanvas(windowWidth, windowHeight);
	background('black');
	for (let i = 0; i < 100; i++) {
		star.push(createStar())
	}
}

function draw() {
	background('black')
	star.forEach(s => {
		triangle(s.x, s.y, s.x - (s.leng+extraLeng), s.y-1, s.x - (s.leng+extraLeng), s.y+1)
		s.x += (s.speedX + extraSpeed)
		
		if (s.x < -50) {
			s.x = width + 50
		}
	})
}

function mouseDragged() {
	extraSpeed= map(mouseY, 0, width, 0, -10, true)
	extraLeng = - (extraSpeed * 5)
}

function createStar() {
	return {
		x: random(-50, width+200),
		y: random(-50, height),
		speedX: random(-1),
		distance: random(-10, 10),
		leng: random(5, 30)
	}
}

