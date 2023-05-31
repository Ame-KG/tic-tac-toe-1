const turnP = document.querySelector('p')
const result = document.querySelector('.result')
const board = document.querySelector('.game-board')

// blocks
const block1A = document.querySelector('.block-1a') 
const block1B = document.querySelector('.block-1b') 
const block1C = document.querySelector('.block-1c') 

const block2A = document.querySelector('.block-2a') 
const block2B = document.querySelector('.block-2b') 
const block2C = document.querySelector('.block-2c') 

const block3A = document.querySelector('.block-3a') 
const block3B = document.querySelector('.block-3b') 
const block3C = document.querySelector('.block-3c') 


// player counter tracker
let turnCount = 2
let playerXturn = true
let input = 'X'

let winner = ''
let clickCount = 0

// Game Loop
board.addEventListener('click',  (e)=>{

	// already played block bug catcher
	if (e.target.innerHTML != '') {
		return
	}

	// missed click bug catcher
	if (e.target.matches('div')){
		return
	}

	// Game Over
	if(winner != ''){
		return
	}

	// Move counter
	clickCount += 1


	// color changer
	if (playerXturn) {
		e.target.style.color = 'blue'
	}
	else{
		e.target.style.color = 'maroon'
	}


	// block content changer
	if (e.target.matches('span')) {
		myVal = e.target.innerHTML
		console.log(myVal)
		if (e.target.innerHTML === '') {
			e.target.innerHTML = input
			console.log(input)
		}
		else{
			return
		}
		turnCount += 1
		console.log(turnCount)

		// Player Turn handeling:
		if(turnCount % 2 == 0) {
			playerXturn = true
			input = 'X'
			turnP.textContent = 'Player X Turn:' 
			console.log(input)
		}
		else{
			playerXturn = false
			input = 'O'
			turnP.textContent = 'Player O Turn:'
			console.log(input)
		}
	}

	// --------------------------------------------------------------
	// win checker X:
	// first row
	if (block1A.innerHTML=='X' & block1B.innerHTML=='X' & block1C.innerHTML=='X'){
		winner ='X'
	}

	// second row
	if (block2A.innerHTML=='X' & block2B.innerHTML=='X' & block2C.innerHTML=='X'){
		winner ='X'
	}

	// second row
	if (block3A.innerHTML=='X' & block3B.innerHTML=='X' & block3C.innerHTML=='X'){
		winner ='X'
	}

	// first collumn
	if (block1A.innerHTML=='X' & block2A.innerHTML=='X' & block3A.innerHTML=='X'){
		winner ='X'
	}

	// second collumn
	if (block1B.innerHTML=='X' & block2B.innerHTML=='X' & block3B.innerHTML=='X'){
		winner ='X'

	}

	// third collumn
	if (block1C.innerHTML=='X' & block2C.innerHTML=='X' & block3C.innerHTML=='X'){
		winner ='X'
	}

	// first diagonal
	if (block1A.innerHTML=='X' & block2B.innerHTML=='X' & block3C.innerHTML=='X'){
		winner ='X'
	}

	// first diagonal
	if (block3A.innerHTML=='X' & block2B.innerHTML=='X' & block1C.innerHTML=='X'){
		winner ='X'
	}

	// ----------------------------------------------------------------
	// win checker O:
	// first row
	if (block1A.innerHTML=='O' & block1B.innerHTML=='O' & block1C.innerHTML=='O'){
		winner ='O'
	}

	// second row
	if (block2A.innerHTML=='O' & block2B.innerHTML=='O' & block2C.innerHTML=='O'){
		winner ='O'
	}

	// second row
	if (block3A.innerHTML=='O' & block3B.innerHTML=='O' & block3C.innerHTML=='O'){
		winner ='O'
	}

	// first collumn
	if (block1A.innerHTML=='O' & block2A.innerHTML=='O' & block3A.innerHTML=='O'){
		winner ='O'
	}

	// second collumn
	if (block1B.innerHTML=='O' & block2B.innerHTML=='O' & block3B.innerHTML=='O'){
		winner ='O'

	}

	// third collumn
	if (block1C.innerHTML=='O' & block2C.innerHTML=='O' & block3C.innerHTML=='O'){
		winner ='O'
	}

	// first diagonal
	if (block1A.innerHTML=='O' & block2B.innerHTML=='O' & block3C.innerHTML=='O'){
		winner ='O'
	}

	// first diagonal
	if (block3A.innerHTML=='O' & block2B.innerHTML=='O' & block1C.innerHTML=='O'){
		winner ='O'
	}


	// ------------------------------------------------------------
	// winner X
	if (winner == 'X') {
		result.style.color = 'blue'
		result.textContent = 'Player X Wins!!!'
		result.style.backgroundColor='rgb(1, 5, 56)'
	}

	//  winner O
	if (winner == 'O') {
		result.style.color = 'maroon'
		result.textContent = 'Player O Wins!!!'
		result.style.backgroundColor='rgb(1, 5, 56)'
	}

	// Draw Checker
	if (clickCount == 9 & winner == '') {
		winner = 'DRAW'
	}

	if (winner == 'DRAW'){
		result.style.color = 'moccasin'
		result.textContent = 'DRAW!'
		result.style.backgroundColor='rgb(1, 5, 56)'
	}
	console.log(`Moves Played:${clickCount}`)
})








