var xPos=400
var yPos=400
var gravity=5

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}
//Given Code Above
function setup(){
    createCanvas(800,800);
    background(150);

    rect(300, 700, 200, 30);

}
function draw(){
    background(150)
    rect(300, 700, 200, 30);
    circle(xPos,yPos,20);
    yPos=yPos+gravity;
    if(collideRect(xPos,yPos,300,700,200,30)){
        gravity= gravity*-1
    }

}
