let purple = "#c034eb";
let green = "#34eb9c";
let blue = "#36e8eb";
let xPos = 0;
function setup(){
    createCanvas(1100,600)
    background(150);
}





function draw(){
    for (var i=1; i < 25; i++){

        if (i % 15 == 0) fill(blue);
        else if (i % 3 == 0) fill(purple);
        else if (i % 5 == 0) fill(green);
        else noFill();
        circle(xPos, 300, 25);
         xPos=xPos+32; 
    }
}

