//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var fallSeason = 0;
var springSeason = 0;
var winterSeason = 0;
var summerSeason = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var result = document.getElementById("result");

var restart= document.getElementById("restart");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", fall);
q1a2.addEventListener("click", winter);
q1a3.addEventListener("click", summer);
q1a4.addEventListener("click", spring);

q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", spring);
q2a3.addEventListener("click", fall);
q2a4.addEventListener("click", winter);

q3a1.addEventListener("click", winter);
q3a2.addEventListener("click", fall);
q3a3.addEventListener("click", summer);
q3a4.addEventListener("click", spring);

restart.addEventListener("click", restart);

//#TODO: Define quiz functions here
function fall() {
  fallSeason += 1;
  questionCount += 1;
  //alert("Pumpkin Spice Latte?!");
  if (questionCount >= 3) {
    updateResult();
  }
}
function spring() {
  springSeason += 1;
  questionCount += 1;
//alert("Bees! NOO T-T");
  if (questionCount >= 3) {
    updateResult();
  }
}
function winter() {
  winterSeason += 1;
  questionCount += 1;
//alert("Frostbite! NOO T-T");
  if (questionCount >= 3) {
    updateResult();
  }
}
function summer() {
  summerSeason += 1;
  questionCount += 1;
  //alert("Sunburn!NOO T-T");
  if (questionCount >= 3) {
    updateResult();
  }
}
function updateResult(){
  if (fallSeason>= 2){
    result.innerHTML="You are the season fall🍁--you are chill and go with the flow";
  }
  else if(summerSeason>= 2){
    result.innerHTML="You are the season summer🔆--you are friendly and ambitious";
  }
  else if(winterSeason>= 2){
    result.innerHTML="You are the season winter🎿--you are bold and like to take lead";
  }
  else if(springSeason>= 2){
    result.innerHTML="You are the season spring🌷--you are a mellow person and like to hang out with friends";
  }
else{
  result.innerHTML="I'm not sure..(you might be all the seasons(⌐■_■))";
}
}