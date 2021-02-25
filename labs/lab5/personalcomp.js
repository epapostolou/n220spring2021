var sky = "#49ded4"
var grass = "#20610e"
var sun = "#f59f27"
var skin = "#d9ba8f"
var shirt = "#cc1452"
var pants = "#191070"
//The above codes are all just stored colors so that i could easier adjust them while
//I finalized it
function walking(xPos,yPos){
    fill(skin)
    circle(xPos, yPos, 15);
    fill(shirt)
    rect(xPos-15, yPos+15, 30, 50)
    fill(pants)
    rect(xPos-15, yPos+65 ,30 ,60)

}
//This code controls the human, filling with the seperate colors and drawing each shape for the body and legs.

function setup(){
    createCanvas(800, 600);
}
function draw(){
    background(sky);
    fill(grass);
    noStroke()
    rect(0, 450, 800, 150);
    fill(sun);
    circle(700,100,35)
    

    walking(mouseX,mouseY);

}
//This draws the background and then calls the walking function 