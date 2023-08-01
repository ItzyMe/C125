function setup(){
  var video=createCapture(VIDEO)//Ativando a câmera
  video.size(550,500)
  var canvas=createCanvas(550,550)
  canvas.position(560,150)
  poseNet=ml5.poseNet(video,modelLoaded)//Adicionando a biblioteca ml5
  poseNet.on("pose",gotPoses)
}

function modelLoaded(){
  console.log("PoseNet foi iniciado.")
}
function gotPoses(results){
if(results.length>0){
console.log(results)
var nosex=results[0].pose.nose.x;
var nosey=results[0].pose.nose.y;

console.log(nosex,nosey)
  leftWristX=results[0].pose.leftWrist.x
  rightWristX=results[0].pose.rightWrist.x
  difference=floor(leftWristX-rightWristX)//largura do quadrado
  console.log("Left WristX = "+leftWristx+ "Right WristX = "+rightWristX+ "Difference : "+difference)
}}

function draw(){
  background('#969A97')
  document.getElementById("square_side").innerHTML="Width And Height of a Square will be = " + difference +"px";
  fill('#F90093')
  stroke('#F90093')
  square(nosex,nosey,difference)
}
