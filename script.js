let ability_array = ["Gift", "Lunch", "Coffee", "Walk", "Chocolate", "Inspire"];

const emoji = document.getElementById("#emoji");
const imFeeling = document.getElementById("#imFeeling");
const p1_feelings = document.getElementById("playerOne_Feelings");
const p1_meter = document.getElementById("playerOne_MeterNumber");
const p2_feelings = document.getElementById("playerTwo_Feelings");
const p2_meter = document.getElementById("playerTwo_MeterNumber");

class Player {
  set name(name) {
    this.name = name;
  }
  set title(title) {
    this.title = title;
  }
  set encouragementMeter(num) {
    this.encouragementMeter = num;
  }
  get name() {
    return this.name;
  }
  get title() {
    return this.title;
  }
  get encouragement() {
    return this.encouragementMeter;
  }

  constructor(name, title) {
    this.name = name;
    this.title = title;
  }

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
let mars = new Player("Mars", "Fullstack JS");
let erica = new Player("Erica", "Software Engineer");
let cam = new Player("Cam", "Fullstack JS");
let jenny = new Player ("Jenny", "Software Engineer”);
let dravon = new Player("Dravon", "Product Manager");

let player_array = [filmon, erica, mars, cam, dravon, jenny];
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
