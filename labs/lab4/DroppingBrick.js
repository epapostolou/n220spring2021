let gravity = 5
let xPos=[650,650,650,650]
let yPos=[850,850,850,850]


function setup(){
    createCanvas(600, 800);
    background(150)
    
}


    function mousePressed(){

        fill("#7d192b");
        

    
       yPos.push(mouseY)
        yPos.shift()
       xPos.push(mouseX)
       xPos.shift()

       //console.log(mouseX);
       //console.log(mouseY);

    }
    function draw(){
        background(150);
    
    //background(150)
    for(var i = 0; i < yPos.length; i++) {
           
       
        rect(xPos[i], yPos[i], 50,20)
       
       yPos[i]=yPos[i]+gravity
    
      // console.log(yPos)
       
    }
 }






