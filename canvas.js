// boilerplate

let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

// functions
let randomProperty = (obj) => {
    const keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

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

// *** Chef's specials ***
let palettes = {
	ViolentSilence: ['#5c1c56', '#811e6e', '#ab3789', '#b85180', '#d26a89'],
	VisionsOfSugarPlums: ['#c99bd2', '#dbb1ea', '#eed0ff', '#f4daee', 'fbd3e9'],
	Puebla: ['#ff6b6b', '#e8f962', '#82ddd1', '#f9d171', '6cf289'],
	Fred: ["#b888bc", "#4c5a8a", "#82566c", "#6e95c2", "#7f4881"],
	MacDaddy: ["#c380aa","#5a9fcf","#894370","#3b5d7a","#9b8cce","#725466","#496caa","#8c8fab","#674c90","#5d537e"]
	}
let randomPalette = randomProperty(palettes);

// ***** create a random palette from scratch!
let trans = Math.random();
let randomRGBpalette = [];
let randomRGBapalette = [];
let randomMax = Math.floor(Math.random()*256); // the range
let randomMin = Math.floor(Math.random()*(256-randomMax)); // where on the scale we start
let numberOfCircles = Math.floor(Math.random()*20) + 5; // number of circles also determines size of palette
let numberOfSpawns = Math.floor(Math.random()*10) + 31;
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
	randomRGBpalette.push(themes.LightGrey.bold); // just push randomPalette if you want a set theme
	randomRGBapalette.push(themes.LightGrey.trans);
}



// screen settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = 'black' //randomPalette[randomPalette.length-1]// change to this if u want random colour randomPalette[0];
c.fillRect(0,0,canvas.width, canvas.height);


// draw the circles 
for (let j = 0; j < numberOfSpawns; j++) {
	for (let i = 1; i < numberOfCircles + 1; i++) {
		// *** cool settings - make this object
			// Fibonacci sequence
			let xFibonacci = Math.random()*innerWidth;
			let radiusFibonacci = (innerHeight*phi - innerHeight) / Math.pow(phi, i);
			let yFibonacci = radiusFibonacci;
			// MultiMesc (requires j loop additions)
			let radiusMultimesc = 30*(i/4);
			let xMultimesc = (Math.floor(Math.random()*150)+50)*i;
			let yMultimesc = (Math.floor(Math.random()*20)+7)*i*i;
			// spawn at random points
			let xRandom = Math.random()*innerWidth; // spawns curve at random x
			let yRandom = Math.random()*innerHeight;// spawns curve at random y
			// just generates a pos or neg number, if you need it
			let xDirRand = 2*(Math.floor(Math.random()*2)-0.5); // posi or negi
			let yDirRand = 2*(Math.floor(Math.random()*2)-0.5); // posi or negi
			// color settings
		// load a colour
		c.fillStyle = randomRGBapalette[i - 1]
		// circle shape and position
		let radius = radiusMultimesc
		let x = xRandom
		let y = yRandom
		c.beginPath();
		c.arc(x, y, radius, 0, Math.PI * 2, true);
		c.fill();
	}
}

// text wrap
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
c.fillStyle = randomRGBpalette[randomRGBpalette.length-3];
wrapText(c, bottomText, cx, cy, maxWidth, lineHeight);