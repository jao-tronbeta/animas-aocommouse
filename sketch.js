let cor; 
let posiCaoHorizontal; 
let posicaoVertical; 


function setup() {
  createCanvas(600, 600);
  background("white");
  cor = color(random(0, 255),random(0, 255), random(0, 255));
  posiCaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  
  fill(cor);
  circle(posiCaoHorizontal, posicaoVertical, 90)
 
  if (mouseX < posiCaoHorizontal) {
    posiCaoHorizontal = posiCaoHorizontal - 1;
    }
    
  
  if (mouseX > posiCaoHorizontal) {
    posiCaoHorizontal = posiCaoHorizontal + 1;
    }
  
    if (mouseY < posicaoVertical ) {
    posicaoVertical--;
  }
  
 if (mouseY > posicaoVertical ) {
    posicaoVertical++;
  }
  
 if (mouseIsPressed) {
  cor = color(random(0, 255),random(0, 255), random(0, 255), random(0, 100));
   }
}