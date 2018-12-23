// boilerplate

let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

// screen settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = 'black' //randomPalette[randomPalette.length-1]// change to this if u want random colour randomPalette[0];
c.fillRect(0,0,canvas.width, canvas.height);

// functions
let randomProperty = (obj) => {
    const keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];};

// WRAP TEXT FUNCTION
function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }

// constants
const phi = (1 + Math.sqrt(5)) / 2;
const goldenRatioHeight = innerHeight / phi;

// ***** create a random palette from scratch!
let trans = Math.random();
let randomRGBpalette = [];
let randomRGBapalette = [];
let randomMax = Math.floor(Math.random()*256); // the range
let randomMin = Math.floor(Math.random()*(256-randomMax)); // where on the scale we start
let numberOfCircles = Math.floor(Math.random()*100) + 31; // number of circles also determines size of palette
	// let numberOfSpawns = Math.floor(Math.random()*10) + 31;
for (let i = 0; i < numberOfCircles; i++) {
	// *** cool settings
	let randomColorFromRange = randomMin + Math.floor(Math.random()*randomMax);
	let staggeredColorFromRange = randomMin + (i*Math.round((randomMax/(numberOfCircles-1))));
	let inverseStaggered = randomMin + randomMax - (i*Math.round((randomMax/(numberOfCircles-1))));
	let rVal; let gVal; let bVal;
		const themes = {
		DarkGrey: {
			trans: `rgba(
					${inverseStaggered},
					${inverseStaggered},
					${inverseStaggered},
					${trans})`,
				
				
			bold: 	`rgb(
					${inverseStaggered},
					${inverseStaggered},
					${inverseStaggered})` 
			},
		LightGrey: {
			trans: `rgba(
					${staggeredColorFromRange},
					${staggeredColorFromRange},
					${staggeredColorFromRange},
					${trans})`,
			bold: 	`rgb(
					${staggeredColorFromRange},
					${staggeredColorFromRange},
					${staggeredColorFromRange})` 
			},
		Blank: {
			trans: `rgba(
					${'red'},
					${'green'},
					${'blue'},
					${trans})`,
			bold: 	`rgb(
					${0},
					${0},
					${33})` 
			},
		Ice: {
			trans: `rgba(
					${staggeredColorFromRange},
					${inverseStaggered},
					${100},
					${trans})`,
				
				
			bold: 	`rgb(
					${staggeredColorFromRange},
					${inverseStaggered},
					${100},
					${33})`
			},
		Rusty: {
			trans: `rgba(
					${staggeredColorFromRange},
					${Math.floor(Math.random()*100)},
					${33},
					${trans})`,
				
				
			bold: 	`rgb(
					${staggeredColorFromRange},
					${Math.floor(Math.random()*100)},
					${33})` 
			},
		PureRandom: {
			trans: `rgba(
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)},
					${trans})`,
				
				
			bold: 	`rgb(
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)},
					${Math.floor(Math.random()*256)})` 
			}
		};
	randomRGBpalette.push(themes.Ice.bold); // just push randomPalette if you want a set theme
	randomRGBapalette.push(themes.Ice.trans); // THEME GOES HERE!
}

// Circle generator function
function Circle(x ,y, dx, dy, radius, randomColor, maxRadius, minRadius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.randomColor = randomColor;
	this.maxRadius = maxRadius;
	this.minRadius = minRadius;

	this.update = function() {
		//collision detection
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}
		// keep in motion
		this.x += this.dx;
		this.y += this.dy;

		// interactivity
		// if (mouse.x - this.x < 50 && mouse.x - this.x > -50
		// 	&& mouse.y - this.y < 50 && mouse.y - this.y > -50 
		// 	) {
		// 	if (this.radius < this.maxRadius) {
		// 	this.radius +=1;
		// 	}
		// } else 
		if (this.radius > this.minRadius) {
			this.radius -=1;
			
		}

		//draw
		c.fillStyle = this.randomColor;
		c.strokeStyle = 'white';
		c.beginPath();
		c.arc(this.x, this.y, this.radius, Math.PI * 2, false);
		c.fill();
	}
}

// create a circle
// random circle variables
let styleArray = [];
let circleArray = [];
for (let i = 0; i < numberOfCircles; i++) {
	let radius = Math.random()*120 + 13;
	let x = Math.random()*(innerWidth - radius * 2) + radius; // random starting xpos
	let y = Math.random()*(innerHeight - radius * 2) + radius; // random starting ypos
	let dx = ((Math.random() - 0.5) * 50) / (radius / 2); // random x velocity
	let dy = ((Math.random() - 0.5) * 50) / (radius / 2); // random y velocity
	let minRadius = 1 // radius - (radius/2);
	let maxRadius = 133;
	let randomColor = randomRGBapalette[i]
	circleArray.push(new Circle(x, y, dx, dy, radius, randomColor, maxRadius, minRadius));
}
console.log(circleArray);

// Text stuff
	var maxWidth = innerWidth;
	var lineHeight = 60;
	var cx = (canvas.width - maxWidth) / 2;
	var cy = goldenRatioHeight + goldenRatioHeight/3;

	let randomText = [
				`D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~ D E E P ~ M E M E ~ LAYERS ~`,
				`S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ S A I F ~ M O D E ~ `,
				`P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ P A L E T T E ~ D I V I N E R ~ `,
				`B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ B I C A M E R A L ~ A G A I N ~ W H E N ~ `,
				`O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ O N L Y ~ L O V E ~ B E A U T Y ~ `,
				]
	let bottomText = randomText[Math.floor(Math.random()*randomText.length)];
	c.font = "italic bold 30px Times New Roman";

// event listening
/*
let mouse = {
	x: undefined,
	y: undefined
}
window.addEventListener('mousemove',
	function(event) {
		mouse.x = event.x;
		mouse.y = event.y;
		console.log(mouse);
})
*/
window.addEventListener('resize',
	function() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		init();
	}
)


function init() {
	circleArray = [];
	for (let i = 0; i < numberOfCircles; i++) {
		let radius = Math.random()*120 + 13;
		let x = Math.random()*(innerWidth - radius * 2) + radius; // random starting xpos
		let y = Math.random()*(innerHeight - radius * 2) + radius; // random starting ypos
		let dx = ((Math.random() - 0.5) * 50) / (radius / 2); // random x velocity
		let dy = ((Math.random() - 0.5) * 50) / (radius / 2); // random y velocity
		let minRadius = 1 // radius - (radius/2);
		let maxRadius = 133;
		let randomColor = randomRGBapalette[i]
		circleArray.push(new Circle(x, y, dx, dy, radius, randomColor, maxRadius, minRadius));
	}
}

// animation
const animate = () => {
	requestAnimationFrame(animate);

	c.fillRect(0, 0, canvas.width, canvas.height); // cls

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}

	wrapText(c, bottomText, cx, cy, maxWidth, lineHeight);

}




animate();