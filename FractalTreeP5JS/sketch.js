/// <reference path="../TSDef/p5.global-mode.d.ts" />

let lineLength = 150;
let x = 250;
let y = 500;
let branchAngle = null;
let strokeGreenColor = 255;
let branchThickness = 10;
let bailout = 12;

function setup() {
  createCanvas(1200, 900, P2D);
  stroke(0, strokeGreenColor, 0);
  strokeWeight(branchThickness);

}

function draw() {
  translate(width / 2, height);
  background(0);
  branchAngle = map(mouseX, 0, height, 1, 100);
  drawTree(lineLength);
}

function drawTree(lineLength) {

  //Makes the tree look nicer by coloring and changing branch-thickness
  strokeGreenColor = map(lineLength, 0, 150, 1, 255);
  stroke(0, strokeGreenColor, 0);
  branchThickness = map(lineLength, 0, 150, 0, 25);
  strokeWeight(branchThickness);

  if (lineLength >= bailout) {

    line(0, 0, 0, -lineLength * 2);

    translate(0, -lineLength * 2);

    //Right branch 1
    push();
    rotate(radians(branchAngle));
    line(0, 0, 0, -lineLength);
    drawTree(lineLength * 0.65);
    pop();

    //Left branch 1
    push();
    rotate(radians(-branchAngle));
    line(0, 0, 0, -lineLength);
    drawTree(lineLength * 0.65);
    pop();

    //Right branch 2
    push();
    rotate(radians(branchAngle * 0.5));
    line(0, 0, 0, -lineLength);
    drawTree(lineLength * 0.5);
    pop();

    //Left branch 2
    push();
    rotate(radians(-branchAngle * 0.5));
    line(0, 0, 0, -lineLength);
    drawTree(lineLength * 0.7);
    pop();

  }
}