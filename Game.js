const score = require('./ScoreBoard');

class Game {
    join(player){
        score.join(player.getName());
    }

    scoreGame() {
        return score.getBoard();
    }

    getWinner(){
        return score.sort()[0];
    }
}

module.exports = Game; 