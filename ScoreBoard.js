class ScoreBoard {
    constructor(){
        this.board = [];
    }

    join(name){
        this.board.push({
            name,
            points: 0
        });
    }

    leave(name) {
        this.board = this.board.filter(player => player.name !== name);
    }

    update(name, point) {
        const player = this.board.findIndex(player => player.name === name);

        if (player > -1) {
            this.board[player].points += point;
        }
    }

    getBoard() {
        return this.board;
    }

    sort() {
        return this.board.sort((x,y) => y.points - x.points);
    }
}

module.exports = new ScoreBoard();