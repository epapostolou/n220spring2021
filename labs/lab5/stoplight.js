var colors=["#eb0017","#fcba03","#007a2f"]



function stoplight(){
    for (let i = 0; i < colors.length; i++) {
        noStroke();
        fill(colors[i]);
        circle(400, (i*80)+100, 25);
    }
}
function setup(){
    createCanvas(800, 300);
    background(150);

    stoplight();
}