let xPos=0;
let yPos=0;
let NumberOfRows=5
function setup(){
    createCanvas(800,600);
    background(150);
    fill("#db2143")
    for( var i = 1; i < NumberOfRows; i++){
        for(var j = 1;j <= i ; j++ ){
            yPos=j*-75
            rect(xPos+350,yPos+500, 75, 75)
            
        }
        xPos=i*-75
    }
}
