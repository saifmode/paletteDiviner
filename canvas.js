// boilerplate
const phi = (1 + Math.sqrt(5)) / 2;

let canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

let randomProperty = (obj) => {
    const keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

// *** Random colour palettes! ***

let palettes = {
	ViolentSilence: ['#5c1c56', '#811e6e', '#ab3789', '#b85180', '#d26a89'],
	VisionsOfSugarPlums: ['#c99bd2', '#dbb1ea', '#eed0ff', '#f4daee', 'fbd3e9'],
	Puebla: ['#ff6b6b', '#e8f962', '#82ddd1', '#f9d171', '6cf289'],
	Fred: ["#b888bc", "#4c5a8a", "#82566c", "#6e95c2", "#7f4881"],
	MacDaddy: ["#c380aa","#5a9fcf","#894370","#3b5d7a","#9b8cce","#725466","#496caa","#8c8fab","#674c90","#5d537e"]
	}

let randomPalette = randomProperty(palettes);

let trans = 0.11;

/* write stuff

c.fillStyle = 'black'
c.font = "30px Arial";
c.fillText("Hello World", 10, 50);

*/

// idea for random palette generator
/*

generate an array []
randomly generate three values between 0 and 255
put them in a concetate string: 'rgb(x,y,z)'
do this a random number of times to create an array of rgb values like this
['rgb(32,122,25)', 'rgb(3,45,236)', 'rgb(x,y,z)']
add to a master array

to create coherent pallets, create random rgb values but within limited ranges,
for example, set R and G to fixed vals but generate random B, and generate it within a range


now we have that, look below and note the numbers 256

if we can set that to a limited range, we can make the palettes more coherent

so replcae 256 with a variable

or even replace Math.floor etc with a variable like this

let randomMin = Math.floor(Math.random()*256);
let randomMax = Math.floor(Math.random()*256);
let randomRange = Math.floor(Math.random()*Math.abs(randomMin-randomMax));
let colorRange = randomRange + (Math.floor(Math.random()*(256 - randomRange)));
if we can replace that with a val that limits that range, and the size of the range is random
then we get randomly generate palettes whose colours are more closely or distantly related
*/

// random palette generator
// this guy sets a random range within 256 and sets the colour to random colours between those
// values. so it will produce palettes of wide hues or more coherent hues.


// maybe give feedback as to how coherent the pallet is
// intra-colour coherency determined by how low randomRange is (lower values = higher coherency)
// inter-colour coherency determined by similarity of ranges between R G and B


// ***** create a random palette!

let randomRGBpalette = [];
let randomRGBapalette = [];
let randomMax = Math.floor(Math.random()*256); // this is also the range
let randomMin = Math.floor(Math.random()*(256-randomMax));
let numberOfCircles = Math.floor(Math.random()*20) + 5; // number of circles also determines size of palette
let numberOfSpawns = Math.floor(Math.random()*10) + 31;
for (let i = 0; i < numberOfCircles; i++) {
	// *** cool settings
	let randomColorFromRange = randomMin + Math.floor(Math.random()*randomMax);
	let staggeredColorFromRange = randomMin + (i*Math.round((randomMax/(numberOfCircles-1))));
	let inverseStaggered = randomMin + randomMax - (i*Math.round((randomMax/(numberOfCircles-1))));
	let rVal; let gVal; let bVal;
	// now assign values // Math.floor(Math.random()*256);
	rVal = staggeredColorFromRange; // change to a number for shades of that colour.
	gVal = Math.floor(Math.random()*100); // higher vals are more prominent
	bVal = 33; // inverseStaggered;
	let randomRGB = `rgb(${rVal}, ${gVal}, ${bVal})`;
	let randomRGBa = `rgba(${rVal}, ${gVal}, ${bVal}, ${trans})`;
	randomRGBpalette.push(randomRGB);
	randomRGBapalette.push(randomRGBa);
}


// screen settings

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillStyle = 'black' //randomPalette[randomPalette.length-1]// change to this if u want random colour randomPalette[0];
c.fillRect(0,0,canvas.width, canvas.height);

/*
// Rectangles
c.fillStyle = 'white';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'black';
c.fillRect(101, 101, 98, 98); */

/* 
// Lines
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(300, 200);
c.strokeStyle = 'white';
c.stroke(); */

/* Circle generator:
	for (let i = 0; i < 100; i++) {
		let randomColor = randomPalette[Math.floor(Math.random()*randomPalette.length)];
		c.fillStyle = randomColor; // < ^ are for filling the circle
		let radius = Math.random()*8;
		let x = Math.random()*innerWidth;
		let y = Math.random()*innerHeight;
		c.fillStyle = randomPalette[1];
		c.beginPath();
		c.arc(x, y, radius, 0, Math.PI * 2, true);
		c.fill();
	}
*/


// random palette generator! generate coherent patterns by making small but random changes
// across 2 or fewer colors in the RGB array


/* fibonacci arc




*/
// *** FIBONACCI ARCS 
let whereTextStarts = innerHeight / phi;

for (let j = 0; j < numberOfSpawns; j++) {


	for (let i = 1; i < numberOfCircles + 1; i++) {
		// *** cool settings
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
			let fromTransparentPalette = randomRGBapalette[i - 1];
			let fromBoldPalette = randomRGBpalette[i - 1];
		// load a colour
		c.fillStyle = fromTransparentPalette;
		// circle shape and position
		let radius = radiusMultimesc
		let x = xRandom
		let y = yRandom
		c.beginPath();
		c.arc(x, y, radius, 0, Math.PI * 2, true);
		c.fill();
	}
}


/*
// *** multicolored balls forming a top-right quadrant parabola

for (let j = 0; j < 11; j++) { // j < n, where n is number of curves
	let ixRand = Math.floor(Math.random()*150)+50;
	let iyRand = Math.floor(Math.random()*20)+7;
	let jxRand = Math.random()*innerWidth; // spawns curve at random x
	let jyRand = Math.random()*innerHeight;// spawns curve at random y
	let xDirRand = 2*(Math.floor(Math.random()*2)-0.5); // posi or negi
	let yDirRand = 2*(Math.floor(Math.random()*2)-0.5); // posi or negi
	 // cut n paste to before for(j) loop to have all spirals the same palette
	for (let i = 0; i < 7; i++) {
	  	let randomColor = randomPalette[Math.floor(Math.random()*randomPalette.length)];
		let radius = 30*(i/4);
		let x = ixRand*i;
		let y = iyRand*i*i;
		c.fillStyle = randomColor;
		c.beginPath();
		c.arc(x -66, y -66, radius, 0, Math.PI * 2, true);
		c.fill();
	}
}
*/


/* bin of linear relationships

	let y = borderRadius + Math.random()*(window.innerHeight-(2*borderRadius)); 

#c99bd2, #dbb1ea, #eed0ff, #f4daee, #fbd3e9


	*/
// ALL THE TEXT

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

var maxWidth = innerWidth;
var lineHeight = 60;
var cx = (canvas.width - maxWidth) / 2;
var cy = whereTextStarts + (whereTextStarts/3);


c.font = "italic bold 30px Times New Roman";
c.fillStyle = randomRGBpalette[randomRGBpalette.length-3];
wrapText(c, `P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - P A L E T T E - D I V I N E R - `, cx, cy, maxWidth, lineHeight);

// wrapText(c, `Array: ${randomRGBpalette}`, cx, cy, maxWidth, lineHeight);

/* 
c.font = "italic bold 60px Times New Roman";
c.fillStyle = randomRGBpalette[randomRGBpalette.length-1];
c.fillText(`rgb vals between ${randomMin} and ${randomMin + randomMax}.`, 107, 107);
c.fillStyle = randomRGBpalette[randomRGBpalette.length-2];
c.fillText(`Range is ${randomMax}.`, 190, 190);
c.fillStyle = randomRGBpalette[randomRGBpalette.length-3];
c.fillText(`Drawing ${numberOfCircles} circles.`, 270, 270);

*/
/*

let heeeeight = 329;
let R0 = (heeeeight - 0) / phi;
let R1 = (heeeeight - R0) / phi;
let R2 = (heeeeight - R0 - R1) / phi;
let R3 = (heeeeight - R0 - R1 - R2) / phi;
console.log(heeeeight, R0,R1,R2,R3);
*/

/*

console.log(`inner height = ${innerHeight} `);
console.log(`inner height / phi = ${innerHeight / phi} `);
console.log(`inner height / phi^2 = ${(innerHeight - (innerHeight / phi)) / phi} `);
console.log(`inner height / phi^3 = ${((innerHeight - (innerHeight / phi)) / phi)/phi}`);
*/ /*
		      (innerHeight / phi)) / phi^0)
innerHeight - (innerHeight / phi)) / phi^1)
innerHeight - (innerHeight / phi)) / phi^2)
innerHeight - (innerHeight / phi)) / phi^3)


*/
// to iterate the sum, it's height - last value, all divided by phi, (iH - lV) / phi






