const readline = require('readline-sync');
const process = require('process');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = '0';
const GAMES_TO_WIN = 2;
function prompt (message) {
    console.log(`=> ${message}`);
}

function displayBoard(board, score) {
    console.clear();

    console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

    console.log('     |     |     ');
    console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
    console.log('     |     |     ');
    console.log('-----+-----+-----');
    console.log('     |     |     ');
    console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
    console.log('     |     |     ');
    console.log('-----+-----+-----');
    console.log('     |     |     ');
    console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
    console.log('     |     |     ');
    console.log('');

    console.log(`Player: ${score.player} Computer: ${score.computer}`);
    console.log('');

}

function initializeBoard() {
    let board = {};

    for (let square = 1; square <= 9; square++) {
        board[String(square)] = INITIAL_MARKER;
    }
    
    return board;
}

function initializeScore() {
    let score = {};

    score.player = 0;
    score.computer = 0;

    return score;
}

function tabulateScore(winner, score) {
    if (winner ==='Player') {
        score.player += 1;
    } else if (winner === 'Computer') {
        score.computer += 1;
    }
}

function joinOr(array, delimiter = ', ', word = 'or') {
    switch(array.length) {
        case 0:
            return '';
        case 1:
            return `${array[0]}`;
        case 2:
            return array.join(` ${word} `);
        default:
            return array.slice(0, array.length - 1).join(delimiter) + `${delimiter}${word} ${array[array.length - 1]}`;
    } 
}

function playerChoosesSquare(board) {
    let square;
    
    while (true) {
        prompt(`Choose a square (${joinOr(emptySquares(board), ', ', 'and')}):`);
        square = readline.question().trim();
        
        if(emptySquares(board).includes(square)) break;

        prompt("Sorry, that's not a valid choice.");
    }

    board[square] = HUMAN_MARKER;
    
}

function computerChoosesSquare(board) {
    let randomIndex = Math.floor(Math.random() * emptySquares.length);

    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
}

function chooseSquare(board, currentPlayer) {
    if (currentPlayer === 'Player') {
        playerChoosesSquare(board);
    } else if (currentPlayer === 'Computer') {
        computerChoosesSquare(board);
    }
}

function alternatePlayer(currentPlayer) {
    if (currentPlayer === 'Player') {
        return 'Computer'
    } else if (currentPlayer === 'Computer') {
        return 'Player';
    }
}

function emptySquares(board) {
    return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function boardFull(board) {
    return emptySquares(board).length === 0;
}

function someoneWon(board) {
    return !!detectWinner(board);
}

function pressKeyToContinue() {
    prompt('Press any key(except enter) to continue to next round');
    readline.keyInPause();
}

function detectWinner(board) {
    let winningLines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (let line = 0; line < winningLines.length; line++ ) {
        let [sq1, sq2, sq3] = winningLines[line];

        if (
            board[sq1] === HUMAN_MARKER &&
            board[sq2] === HUMAN_MARKER &&
            board[sq3] === HUMAN_MARKER
        ) {
            return 'Player';
        } else if (
            board[sq1] === COMPUTER_MARKER &&
            board[sq2] === COMPUTER_MARKER &&
            board[sq3] === COMPUTER_MARKER
        ) {
            return 'Computer';
        }
    }

    return null;
}

function detectMatchWinner(score) {
    return Object.keys(score).filter(player => score[player] === GAMES_TO_WIN);
}

function start() {
    
    while(true) {
        let score = initializeScore();
        let currentPlayer  = 'Player'; // by default player start first for first match, subsequently, will take alternate turns
        while (!detectMatchWinner(score).length) {
            while (true) {
                let board = initializeBoard();
                while (true) {
                    displayBoard(board, score);
                    chooseSquare(board, currentPlayer);
                    currentPlayer = alternatePlayer(currentPlayer);
                    if (someoneWon(board) || boardFull(board)) break;
                }
        
                displayBoard(board, score);
        
                if (someoneWon(board)) {
                    prompt(`${detectWinner(board)} won this round!`);
                    tabulateScore(detectWinner(board), score);
                } else {
                    prompt("It's a tie!");
                }
                displayBoard(board, score);
                break;
            }

            if(!detectMatchWinner(score).length) {
                pressKeyToContinue();
            }
        }

        prompt(`${detectMatchWinner(score)} won the match!`);
        if(!readline.keyInYNStrict('Play again?')) break;   
        
    }

    prompt('Thanks for playing Tic Tac Toe!');
}

start();