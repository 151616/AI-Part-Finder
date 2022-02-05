object = [];
function draw(){
    push();
    translate(width,0);
    scale(-1, 1);
  image(video, 0,0, 500, 400);
  pop();
}
function setup(){
    canvas = createCanvas(460,380);
    canvas.center();
    video = createCapture(460,380);
    video.hide();
    
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
        object = results;
    }
}
function modelloaded(){

}
function start(){
    
}