const argv = require('yargs').argv

const moves = ['rock','paper','scissors']
const playerMove = argv.move
const computerMove = choose()
const winner = win()


function choose(){
    let index = Math.floor(Math.random() * 3)
    return moves[index]
}

function win(){
    if (playerMove == computerMove) return 'Its a tie!'
    if (playerMove == 'rock' && computerMove == 'paper' ||
        playerMove == 'scissors' && computerMove == 'rock' ||
        playerMove == 'paper' && computerMove == 'scissors') return '~Computer wins.~'
    else return '~Player wins.~'
}

console.log('Playing a game of Roshambo against the computer.')
console.log(`Player plays ${playerMove}!`)
console.log(`Computer plays ${computerMove}!`)
console.log(winner)