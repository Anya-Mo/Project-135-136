status_object="";
objects=[];
function preload() {

}
function setup() {
    canvas=createCanvas(400,300);
    canvas.position(450,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,400,310);
    if (status_object!="") {
        object_detector.detect(video, gotResults);
    }
}
function start() {
    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded");
    status_object=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResults(error,results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects=results;
    }
}