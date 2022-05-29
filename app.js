const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  prevGuesses: [],
  smallestNum: 1,
  secretNum: null,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      do {
        this.prevGuesses.push(this.getGuess());
        this.render();
      } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum);
  },
  getGuess: function () {
    let guess;
    do {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
      );
    } while (
      isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum
    )
    return guess
  },
  render: function() {
  let renderMessage;
  if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
    renderMessage = `Congratualtions! You got the number in ${this.prevGuesses.length} guesses!`;
  } else {
    renderMessage = ` You guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high" : "low"} \nPrevious guesses: ${this.prevGuesses.join(", ")}`;
  }
}
}

game.play();

console.log(prevGuesses)
console.log(secretNum)
console.log(guess)