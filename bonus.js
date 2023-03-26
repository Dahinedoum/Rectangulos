// // Con esta base , quiero que en  lugar de pelotas sean rectangulos.  ctx.fillRect(x, y, width, height) Investiga el metodo en la documentacion

// // Tened en cuenta que el punto de origen del rectangulo no es el centro como en los circulos es la esquina superior izquierda. 

// // Generar los rectangulos con velocidades aleatorias
// // Generar los rectangulos con colores aleatorios
// // Generar los rectangulos con anchos y alturas aleatorias dentro de unos limites que definais 


const canvas = document.querySelector('canvas');

const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

console.log(canvas);

class rect {
	constructor(x, y, width, height, color) {
	  this.x = x;
	  this.y = y;
	  this.width = width;
	  this.height = height;
	  this.color = color;
	  this.vx = Math.random() // random velocity 
	  this.vy = Math.random() // random velocity
	}
  
	draw() {
	  ctx.beginPath();
	  ctx.fillStyle = this.color;
	  ctx.fillRect(this.x, this.y, this.width, this.height);
	  ctx.closePath();
	}
  
	//el punto de origen del rectangulo no es el centro como en los circulos es la esquina superior izquierda. 
	move() {
	  if (this.x + this.width > innerWidth || this.x < 0) {
		this.vx *= -1;
	  }
  
	  if (this.y + this.height > innerHeight || this.y < 0) {
		this.vy *= -1;
	  }
  
	  this.x += this.vx;
	  this.y += this.vy;
	}
  }
  
  const rects = [];
  
  function handleAddRect(event) {
	const width = Math.random() * 90 //random width 
	const height = Math.random() * 90 //random height
	const color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`; // random color
	rects.push(new rect(event.clientX, event.clientY, width, height, color));
	console.log(rects); 
  }
  
  window.addEventListener('click', handleAddRect);

  setInterval(function () {
  		ctx.clearRect(0, 0, innerWidth, innerHeight); 
  		for (let i = 0; i < rects.length; i++) {
			rects[i].draw();
			rects[i].move();
		}
	}, 1000 / 1000);
  




  
		