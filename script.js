
//example of where to do dom links
//const playerOneName = document.getElementById("name");
//const playerTwoName = document.getElementById("name");
//DOM Elements
let ability_array = ["Gift", "Lunch", "Coffee", "Walk", "Chocolate", "Inspire"];

const p1 = document.getElementById("player1"),
  p2 =document.getElementById("player2");

const p1_name = document.getElementById("playerOne_Name"),
  p2_name = document.getElementById("playerTwo_Name");

const emoji = document.getElementById("#emoji");
const imFeeling = document.getElementById("#imFeeling");
const p1_feelings = document.getElementById("playerOne_Feelings");
const p1_meter = document.getElementById("playerOne_MeterNumber");
const p2_feelings = document.getElementById("playerTwo_Feelings");
const p2_meter = document.getElementById("playerTwo_MeterNumber");

const p1_btn1 = document.getElementById("playerOne_ButtonOne"),
  p1_btn2 = document.getElementById("playerOne_ButtonTwo"),
  p1_btn3 = document.getElementById("playerOne_ButtonThree"),
  p2_btn1 = document.getElementById("playerTwo_ButtonOne"),
  p2_btn2 = document.getElementById("playerTwo_ButtonTwo"),
  p2_btn3 = document.getElementById ("playerTwo_ButtonThree");


  class Player {
  // set name(name) {
  //   this.name = name;
  // }
  // set title(title) {
  //   this.title = title;
  // }
  // set encouragementMeter(num) {
  //   this.encouragementMeter = num;
  // }
  // get name() {
  //   return this.name;
  // }
  // get title() {
  //   return this.title;
  // }
  // get encouragement() {
  //   return this.encouragementMeter;
  // }

  // constructor(name, title) {
  //   this.name = name;
  //   this.title = title;
  // }

  //reset
  reset() {
    this.name = "";
    this.encouragementMeter = 100;
    this.encouragementBonus = "";
  }
}

function getAllInfo() {
  meterDetails();
  return (
    "Name:" +
    this.name +
    "\n" +
    "Title:" +
    this.title +
    "\n" +
    "encouragementMeter:" +
    this.encouragementMeter +
    "\n"
  );
}

//meter functions
function meterDetails() {
  // Returns the Encouragement Level
  if (parseInt(this._encouragementMeter) < 50) {
    emoji.innerHTML = "☹️";
    imFeeling.innerHTML = "I'm feeling sad";
  } else if (
    parseInt(this._encouragementMeter) < 75 &&
    parseInt(this._encouragementMeter) > 50
  ) {
    emoji.innerHTML = "😉";
    imFeeling.innerHTML = "I'm feeling good";
  } else {
    emoji.innerHTML = "😁";
    imFeeling.innerHTML = "I'm feeling great";
  }
  p1_meter.textContent =
    parseInt(p1_meter.textContent) + parseInt(givePoints(current_abilty));
  p2_meter.textContent =
    parseInt(p2_meter.textContent) + parseInt(givePoints(current_abilty));
}



//player objects
let filmon = new Player("Filmon", "UX Engineer");
let erica = new Player("Erica", "Fullstack JS");
let rikki = new Player("Rikki","Fullstack JS");
let mars = new Player("Mars Brown", "Fullstack JS");
let cam = new Player("Cam Quevedo", "Fullstack JS");
let jenny = new Player("Jenny Nou", "Software Engineer");
let dravon = new Player("Dravon Tyson", "Product Manager");
let alvian = new Player("Alvian Williams", "Product Manager");
let lucas = new Player("Lucas Rangel", "Fullstack Engineer");
let khris = new Player("Khris Goins", "Freelance Front-End Engineer");
let zakiyah = new Player("Zakiyah Muhammad", "Front-End Developer");
let isaac = new Player("Isaac Porter", "Software Engineer");
let tuerei = new Player("Tuerei Williams", "Product Manager");
let player_array = [
  filmon,
  erica,
  mars,
  cam,
  dravon,
  jenny,
  rikki,
  lucas,
  alvian,
  khris,
  zakiyah,
  isaac,
  tuerei,
];
//
let randomNumber;
let current_player_1;
let current_player_2;

//randomize player cards
function chooseRandomPlayers() {
  randomNumber = Math.floor(Math.random() * player_array.length);
  current_player_1 = player_array[randomNumber];
  player_array.splice(randomNumber, 1);
  current_player_2 = player_array[randomNumber];
  return randomNumber;
}

chooseRandomPlayers();

function givePoints(ability){

  switch (ability) {
    case "Gift":
      ability_points = 7;
      return ability_points;

    case "Coffee":
      ability_points = 4;
      return ability_points;

    case "Walk":
      ability_points = 3;
      return ability_points;

    case "Chocolate":
      ability_points = 13;
      return ability_points;

    case "Inspire":
      ability_points = 9;
      return ability_points;

    case "Lunch":
      ability_points = 15;
      return ability_points;

    default:
      ability_points = 0;
      break;
  }

}


p1_name.textContent = current_player_1.name;
// p1_title.textContent = current_player_1.title;
p1_btn1.addEventListener("click", p1_btn1_clicked);
p1_btn2.addEventListener("click", p1_btn2_clicked);
p1_btn3.addEventListener("click", p1_btn3_clicked);

p2_btn1.addEventListener("click", p2_btn1_clicked);
p2_btn2.addEventListener("click", p2_btn2_clicked);
p2_btn3.addEventListener("click", p2_btn3_clicked);

function p1_btn1_clicked(e){
  console.log("I'm working");
    // e.target.textContent);
  current_ability = e.target.textContent;
  console.log(givePoints(current_ability));
  p2_meter.textContent = parseInt(p2_meter.textContent) + parseInt(givePoints(current_ability));
  p1.style.transform = "scale(.8)";
  p1.style.opacity = ".8";
  p1.style.pointerEvents = 'none';

  p2.style.transform = "scale(1)";
  p2.style.opacity = "1";
  p2.style.pointerEvents = "auto";
  randomAbilities();
}
function p1_btn2_clicked(e){
  // alert(e.target.textContent);
  // alert(p2_meter.textContent);
  console.log(e.target.textContent);
  current_abilty = e.target.textContent;
  console.log(givePoints(current_abilty));
  p2_meter.textContent = parseInt(p2_meter.textContent) + parseInt(givePoints(current_abilty));
  p1.style.transform = "scale(.8)";
  p1.style.opacity = ".8";
  p1.style.pointerEvents = "none";

  p2.style.transform = "scale(1)";
  p2.style.opacity = "1";
  p2.style.pointerEvents = "auto";
  randomAbilities();
}

function p1_btn3_clicked(e){
  // alert(e.target.textContent);
  // alert(p2_meter.textContent);
  console.log(e.target.textContent);
  current_abilty = e.target.textContent;
  console.log(givePoints(current_abilty));
  p2_meter.textContent = parseInt(p2_meter.textContent) + parseInt(givePoints(current_abilty));
  p1.style.transform = "scale(.8)";
  p1.style.opacity = ".8";
  p1.style.pointerEvents = "none";

  p2.style.transform = "scale(1)";
  p2.style.opacity = "1";
  p2.style.pointerEvents = "auto";
  randomAbilities();

}

function p2_btn1_clicked(e){
  // alert(e.target.textContent);
  // alert(p2_meter.textContent);
  console.log(e.target.textContent);
  current_abilty = e.target.textContent;
  console.log(givePoints(current_abilty));
  p1_meter.textContent = parseInt(p1_meter.textContent) + parseInt(givePoints(current_abilty));
  p2.style.transform = "scale(.8)";
  p2.style.opacity = ".8";
  p2.style.pointerEvents = "none";

  p1.style.transform = "scale(1)";
  p1.style.opacity = "1";
  p1.style.pointerEvents = "auto";
  randomAbilities();

}

function p2_btn2_clicked(e){
  // alert(e.target.textContent);
  // alert(p2_meter.textContent);
  console.log(e.target.textContent);
  current_abilty = e.target.textContent;
  console.log(givePoints(current_abilty));
  p1_meter.textContent = parseInt(p1_meter.textContent) + parseInt(givePoints(current_abilty));
  p2.style.transform = "scale(.8)";
  p2.style.opacity = ".8";
  p2.style.pointerEvents = "none";

  p1.style.transform = "scale(1)";
  p1.style.opacity = "1";
  p1.style.pointerEvents = "auto";
  randomAbilities();
}

function p2_btn3_clicked(e){
  // alert(e.target.textContent);
  // alert(p2_meter.textContent);
  console.log(e.target.textContent);
  current_abilty = e.target.textContent;
  console.log(givePoints(current_abilty));
  p1_meter.textContent = parseInt(p1_meter.textContent) + parseInt(givePoints(current_abilty));
  p2.style.transform = "scale(.8)";
  p2.style.opacity = ".8";
  p2.style.pointerEvents = "none";

  p1.style.transform = "scale(1)";
  p1.style.opacity = "1";
  p1.style.pointerEvents = "auto";
  randomAbilities();

}

//randomize abilities
function randomAbilities() {
  p1_btn1.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
  p1_btn2.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
  p1_btn3.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
  p2_btn1.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
  p2_btn2.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
  p2_btn3.textContent =
    ability_array[Math.floor(Math.random() * ability_array.length)];
}

randomAbilities();
