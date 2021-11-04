

function setup() {
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
}

function clearcanvas(){
    background("white");
}

function preload(){
    classifier=ml5.imageClassifier("DoodleNet");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}

function classifycanvas(){
    classifier.classify(canvas,gotResult);
}

function gotResult(error,result){
    if (error) {
        console.error(error);
    }
    console.log(result);
}