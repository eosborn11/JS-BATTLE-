//example of where to do dom links
//const playerOneName = document.getElementById("name");
//const playerTwoName = document.getElementById("name");
const emoji = document.getElementById("#emoji");
const imFeeling = document.getElementById("#imFeeling");
const encouragementMeter = document.getElementById("#meter");

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
    this.encouragementMeter = 0;
    this.encouragementBonus = "";
  }
}
encouragementMeter = this.encouragementMeter;

function getAllInfo() {
  meterDetails();
  return (
    "Name:" +
    this.name +
    "\n" +
    "Title:" +
    this.title +
    "\n" +
    encouragementMeter +
    "\n"
  );
}

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
}
