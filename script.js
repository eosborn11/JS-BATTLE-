//example of where to do dom links
//const playerOneName = document.getElementById("name");
//const playerTwoName = document.getElementById("name");

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
        return this.encouragementMeter
    }

    constructor(name) {
        this.name = name;
        this.title = title;
    }


    
//reset 
reset(){
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

function meterDetails() {
  // Returns the Encouragement Level
  if (parseInt(this._encouragementMeter) < 50) {
    return "frowny face by meter" + "I'm feeling sad display in html";
  } else {
    return "happy face by meter" + "I'm feeling happy display in html";
  }
}
let Lucas = new player("Lucas", "Backend Engineer");

let ability_points = 0;

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
