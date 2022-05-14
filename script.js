
const btnEls = document.getElementsByClassName("buttonbox");
//Array of Objects
const abilities = [
  {
    ability: "Gift",
    value: getRandomValue(10),
  },
  {
    ability: "Walk",
    value: getRandomValue(10),
  },
  {
    ability: "Coffee",
    value: getRandomValue(10),
  },
  {
    ability: "Lunch",
    value: getRandomValue(10),
  },
  {
    ability: "Inspire",
    value: getRandomValue(10),
  },
  {
    ability: "Chocolate",
    value: getRandomValue(10),
  },
];

//nested objects
const players = {
  player1: {
    count: 0,
  },
  player2: {
    count: 0,
  },
};
for (let i = 0; i < btnEls.length; i++) {
  btnEls[i].addEventListener("click", abilitiAction);
}

function abilitiAction(event) {
  //destructuring
  const { currentTarget, target } = event;
  const currentPlayer = currentTarget.parentElement.id;
  const player = currentPlayer === "player1" ? "player2" : "player1";
  const ability = target.getAttribute("data-ability");
  //Array methods, map, filter, reduce
  const { value } = abilities.find((v) => v.ability.toLowerCase() === ability);
  players[player].count += value;
  players[player].currentAbility = ability;
  const el = document.querySelector(`#${player} .meternumber`);
  if (el) {
    el.textContent = players[player].count;
  }
  currentTarget.parentElement.classList = ["popDown"];
  document.querySelector(`#${player}`).classList = ["popUp"];
  updateButtonElements(currentPlayer);
  removeDisabledByPlayer(player);
}

function getRandomValue(count) {
  const randomNum = Math.floor(Math.random() * count);
  return randomNum === 0 ? 1 : randomNum;
}

function updateButtonElements(player) {
  const btnEles = document.querySelectorAll(`#${player} button`);
  const abs = [getRandomValue(6), getRandomValue(6), getRandomValue(6)];
  for (let i = 0; i < btnEles.length; i++) {
    const ab = abilities[abs[i] - 1].ability;
    btnEles[i].textContent = ab;
    btnEles[i].setAttribute("data-ability", ab.toLowerCase());
    btnEles[i].setAttribute("disabled", "disabled");
  }
}

function removeDisabledByPlayer(player) {
  const btnEles = document.querySelectorAll(`#${player} button`);
  for (let i = 0; i < btnEles.length; i++) {
    btnEles[i].removeAttribute("disabled");
  }
}
