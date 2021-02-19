let colors= ["#e087d1", "#f0e3e1", "#4d3c39"];
let xPos = 0;

function setup(){
    createCanvas(600, 800);
    for (i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect(xPos, 0, 200,800);
        xPos=xPos+200;
    }

}


