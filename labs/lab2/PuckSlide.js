function setup(){
    createCanvas(800,600);
    background(0);

    
}

function draw(){
    background(0);
    if(mouseX < 400){
        fill("#0465cc");

    }
    else{
        fill("#ad1827");
    }
    circle(mouseX,mouseY,50);

  

}