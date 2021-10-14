font_size=10;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
video= createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,410);
canvas.position(560,100);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
background('grey');
document.getElementById("square_side").innerHTML="your text fond size is"+difference+"px";
fill("blue");
stroke("black");
textSize(difference);
text('vivaan',50,100)
}
function modelLoaded(){
console.log("Pose net is intialized")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
textSize(difference);
console.log("leftWristX="+leftWristX+"rightWristX"+rightWristX+"difference"+difference);
}
}
