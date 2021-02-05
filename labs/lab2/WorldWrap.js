let xPos=0

function setup(){
    createCanvas(800,600);
    background(0);
}
function draw(){
    background(0);
    circle(xPos,300,50);
    xPos=xPos+5;
    if(xPos>800){
        xPos= 0;
    }
}