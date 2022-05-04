//example of where to do dom links
//const playerOneName = document.getElementById("name");
//const playerTwoName = document.getElementById("name");
//DOM Elements

let rikki = new Player ("Rikki","Fullstack Engineer"nf )

p1_name.textContent = current_player_1.name;
p1_title.textContent = current_player_1.title;
p1_btn1.addEventListener("click", p1_btn1_clicked);
p1_btn2.addEventListener("click", p1_btn2_clicked);
p1_btn3.addEventListener("click", p1_btn3_clicked);

playerTwo_btn1.addEventListener("click", p2_btn1_clicked);
playerTwo_btn2.addEventListener("click", p2_btn2_clicked);
playerTwo_btn3.addEventListener("click", p2_btn3_clicked);

function p1_btn1_clicked(e){
  console.log(e.target.textContent);
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
