class Player {
    set name(name) {
        this.name = name;
    }
    set title(title) {
        this.title = title;
    }
    set encouragement(num) {
        this.encouragement = num;
    }
    get name() {
        return this.name;
    }
    get title() {
        return this.title;
    }
    get encouragement() {
        return this.encouragement
    }

    constructor(name) {
        this.name = name;
        this.title = title;
    }
}

let p1 = new Player();
console.log(p1.name)
