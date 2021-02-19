let gravity = 5

let xPos=300
let yPos=[20,20]

function setup(){
    createCanvas(600,800);
    background(150);
    fill("#5591f2")
   
}
function draw(){
    //every 100 frames do the loop (helped by Prof Faas )
    if(frameCount % 100==0 ){

       yPos.push(20)
        yPos.shift()
       

    }

    background(150)
    for(var i = 0; i < yPos.length; i++) {
           
        //draw a circle at yPos[i]
        circle(xPos, yPos[i], 25)
        //yPos[0]=
       yPos[i]=yPos[i]+gravity
    
       console.log(yPos)
       

      }

}


