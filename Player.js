const score = require('./ScoreBoard');

class Player {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    wins(points) {
        score.update(this.name, points);
    }

    loses(point) {
        score.update(this.name, -points);
    }
}
module.exports = Player;