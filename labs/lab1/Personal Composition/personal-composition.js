function setup(){
    createCanvas(800,600);
    var lips = "#bf7068"
    var white = "#ffffff"
    var skin = "#e5c298"

    fill(skin);
    circle(400,300,300);

    fill("black")
    stroke(lips)
    strokeWeight(15)
    rect(280,460,230,30);

    fill(white)
    strokeWeight(1);
    stroke("black");
    ellipse(280, 200, 200, 250);
    ellipse(520, 200, 200, 250);
    fill("black");
    circle(280,200,50);
    circle(520,200,50);

    fill(skin)
    triangle(400,300, 380,360,  420,360 );
}
