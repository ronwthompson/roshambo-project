const argv = require('yargs').argv
const moves = ['rock','paper','scissors']

class Player {
    constructor(move){
        this.move = move || choose()
    }
}

class Result {
    constructor(){
        this.result = ''
    }

    determineResult(){
        if (playerOne.move == playerTwo.move){
            this.result = 'Its a tie!'
            return
        }
        if (playerOne.move == 'rock' && playerTwo.move == 'paper' ||
            playerOne.move == 'scissors' && playerTwo.move == 'rock' ||
            playerOne.move == 'paper' && playerTwo.move == 'scissors') {
            this.result = '~Computer wins.~'
            return
        }else {
            this.result = '~Player wins.~'
            return
        }
    }

    final(){
        console.log('Playing a game of Roshambo against the computer.')
        console.log(`Player plays ${playerOne.move}!`)
        console.log(`Computer plays ${playerTwo.move}!`)
        console.log(`${this.result}`)
    }
}

function choose(){
    let index = Math.floor(Math.random() * 3)
    return moves[index]
}

const playerOne = new Player(argv.move)
const playerTwo = new Player()
const final = new Result()
final.determineResult()
final.final()