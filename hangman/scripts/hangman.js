

class Hangman {
  constructor(word,remainingChances){
    this.word = word.toLowerCase().split("");
    this.remainingChances = remainingChances;
    this.guessedLetters = [];
    this.status = "playing";
  }

  calculateStatus() {
      const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === " ");
      
      if(this.remainingChances===0){
        this.status="failed"
      }
      else if(finished){
        this.status="success"
      }
      else{
        this.status="playing"
      }
  }

   get getStatus() {
    if(this.status=="success"){
     return "Yeah,You guessed it right.Well Done!!!"
    }
    else if(this.status=="failed"){
     return `Oh snap,You got it wrong.The word was "${this.word.join("")}"`
    }
    else return `Remaining Guesses: ${this.remainingChances}`
  }

   get puzzle() {
    let puzzle = "";
    let patt = "aeiou";

  	this.word.forEach((letter) => {
      if(patt.includes(letter)){
        this.guessedLetters.push(letter)
      }
  		if(this.guessedLetters.includes(letter) || letter==" " || patt.includes(letter)){
  			puzzle += letter;
  		}
  		else{
  			puzzle += "*";
  		}
  	});
  	return puzzle
  }

  makeGuess(guess) {
    let patt = "aeiou";
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
  	const isBad = !this.word.includes(guess)
    if (this.status !== 'playing') {
            return
    }
  	if(isUnique){
  		this.guessedLetters.push(guess)
  	}
  	 if(isUnique && isBad && !patt.includes(guess)){
  		this.remainingChances--;
  	}
    this.calculateStatus();
  }
}
