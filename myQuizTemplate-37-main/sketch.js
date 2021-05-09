var gameState=0;
var playerCount=0;
var player;
var quiz;
var database;
var question;
var allPlayers;
var form;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
    quiz= new Quiz();
    quiz.getState();
    quiz.start();
    
}


function draw(){
  background("pink");
  if(playerCount===2){
    quiz.updateState(1)
}
if(gameState===1){
    clear();
    quiz.play()
}
  
}
