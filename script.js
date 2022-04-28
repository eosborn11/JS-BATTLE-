class Player {
	set name(n) {
		this._name = n;
	}
	set level(l) {
		this._level = l;
	}
	set type(t) {
		this._type = t;
	}
	set weapon(w) {
		this._weapon = w;
	}
	set health(h) {
		this._health = h;
	}
	get name() {
		return this._name;
	}
	get level() {
		return this._level;
	}
	get type() {
		return this._type;
	}
	get weapon() {
		return this._weapon;
	}
	get health() {
		return this._health;
	}

	constructor(n, t, l, w, h) {
		this.reset();
		this._name = n;
		// this._level='5';
		// this._type='peasant';
		// this._weapon='pitchfork'
		//this._health=5;
	}

	reset() {
		// Start/restart the game
		this._level = "5";
		this._type = "Peasant";
		this._weapon = "Saber";
		this._health = 5;
	}
	getAllInfo() {
		// Returns the Status
		if (parseInt(this._health) === 0) {
			this.health = this.name + " Died!";
			return this.health;
		} else {
			return (
				"Name:" +
				this.name +
				"\n" +
				"Type:" +
				this.type +
				"\n" +
				"Weapon:" +
				this.weapon +
				"\n" +
				"Health:" +
				this.health +
				"\n"
			);
		}
	}

	doBattle(goodGuy, enemy) {
		// Determines who takes damage
		// Uses random number generator
		let attacksBygood = this.getRan();
		// Maybe add something about amount of damage per attack
		// Maybe track number of blows each get and/stikes
		let attacksByEnemy = this.getRan();
		let action=document.querySelector('#action');
		let goodPbar=document.querySelector('#goodPbar');
		let enemyPbar=document.querySelector('#enemyPbar');
		if (attacksBygood > attacksByEnemy) {
			action.value=goodGuy.name + ' attacks ' + enemy.name;
			goodGuy.health++;
			enemy.health--;
			enemy.level--;
			goodGuy.level++;
		} else if (attacksBygood < attacksByEnemy) {
			action.value=enemy.name + ' attacks ' + goodGuy.name;
			goodGuy.health--;
			enemy.health++;
			enemy.level++;
			goodGuy.level--;
		}
			// goodPbar.value=goodGuy.health;
			// enemyPbar.value=enemy.health;
	}
	getRan() {
		// Random number
		let r = Math.floor(Math.random() * 10) + 1;
		return r;
	}
}

var player1 = new Player("Atrus");
var player2 = new Player("Gehn");

function initGame() {
	player1.reset();
	player2.reset();

	status();
}

function startGame() {
	player1.doBattle(player1, player2);
	status();
}
function status() {
	document.getElementById("p1");
	p1.value = player1.getAllInfo();

	document.getElementById("p2");
	p2.value = player2.getAllInfo();
}
