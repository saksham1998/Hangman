

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener('keypress',(e) => {
	const guess = String.fromCharCode(e.charCode);
	game1.makeGuess(guess);
	render()
});

const render = () => {
	puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.getStatus;
    
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
};


const startGame = async () => {
	let num = Math.ceil(Math.random()*3);
	let chances;
	if(num==1) chances=3;
	else if(num==2) chances=5;
	else chances=7;
	const puzzle = await getPuzzle(num);
	game1 = new Hangman(puzzle,chances);
	render()
};


document.querySelector("#reset").addEventListener("click",startGame);

startGame();




