function setup() {
  createCanvas(600, 400);
}

let xbola=300
let ybola=200
let velx=6
let vely=6

function draw() {
  background(0);
  circle(xbola,ybola,20)
  xbola=xbola+velx
  ybola=ybola+vely
}